package com.codestates.eCommerce.review.controller;

import com.codestates.eCommerce.common.dto.MultiResponseDto;
import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.member.dto.MemberDto;
import com.codestates.eCommerce.member.entity.Member;
import com.codestates.eCommerce.member.mapper.MemberMapper;
import com.codestates.eCommerce.member.repository.MemberRepository;
import com.codestates.eCommerce.member.service.MemberService;
import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.product.domain.repository.ProductRepository;
import com.codestates.eCommerce.review.dto.RequestDto;
import com.codestates.eCommerce.review.entity.Review;
import com.codestates.eCommerce.review.mapper.ReviewMapper;
import com.codestates.eCommerce.review.repository.ReviewRepository;
import com.codestates.eCommerce.review.service.ReviewService;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/api/v1/reviews")
@RequiredArgsConstructor
@Validated
@Slf4j
public class ReviewController {
    private final ReviewService reviewService;
    private final ReviewRepository reviewRepository;
    private final ReviewMapper mapper;


    //리뷰 작성
    @PostMapping
    public ResponseEntity postReview(@Valid @RequestBody RequestDto.Post post, @AuthenticationPrincipal PrincipalDetails principalDetails ) {
        Review review = reviewService.createReview( mapper.postToReview(post));
        review.setWriterId(principalDetails.getMember().getMemberId());
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.reviewToResponse(review)), HttpStatus.CREATED);
    }


    //리뷰 수정
    @PatchMapping("/{review-id}")
    public ResponseEntity patchReview(@PathVariable("review-id") @Positive Long reviewId,
                                      @Valid @RequestBody RequestDto.Patch patch,
                                      @AuthenticationPrincipal PrincipalDetails principalDetails) {
        patch.setWriterId(principalDetails.getMember().getMemberId());
        Review review = reviewService.updateReview(mapper.patchToReview(patch));
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.reviewToResponse(review)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getReviews(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Review> pageReviews = reviewService.findAllReviews(page - 1, size);
        List<Review> reviews = pageReviews.getContent();
        return new ResponseEntity<>(new MultiResponseDto<>(mapper.reviewsToResponseDtos(reviews), pageReviews), HttpStatus.OK);
    }

    //리뷰 삭제
    @DeleteMapping("/{review-id}")
    public ResponseEntity deleteReview(@PathVariable("review-id") @Positive Long reviewId,
                                       @AuthenticationPrincipal PrincipalDetails principalDetails) {
        reviewService.deleteReview(principalDetails.getMember().getMemberId());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}


