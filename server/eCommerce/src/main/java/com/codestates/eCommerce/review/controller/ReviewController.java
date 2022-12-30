package com.codestates.eCommerce.review.controller;

import com.codestates.eCommerce.common.dto.MultiResponseDto;
import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.member.entity.Member;
import com.codestates.eCommerce.member.service.MemberService;
import com.codestates.eCommerce.review.dto.RequestDto;
import com.codestates.eCommerce.review.entity.Review;
import com.codestates.eCommerce.review.mapper.ReviewMapper;
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
    private final ReviewMapper mapper;
    private final MemberService memberService;

    //리뷰 생성
    @PostMapping
    public ResponseEntity postReview(@Valid @RequestBody RequestDto.Post post, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        Review review = reviewService.createReview(mapper.postToReview(post),principalDetails);
        review.setMemberId(principalDetails.getMember().getMemberId()); //인증된 사용자 정보가져옴
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.reviewToResponse(review)), HttpStatus.CREATED);
    }

    //리뷰 수정
    @PatchMapping("/{review-id}")
    public ResponseEntity patchReview(@PathVariable("review-id") @Positive Long reviewId,
                                      @Valid @RequestBody RequestDto.Patch patch,
                                      @AuthenticationPrincipal PrincipalDetails principalDetails) {
        patch.setMemberId(principalDetails.getMember().getMemberId());
        Review review = reviewService.updateReview(mapper.patchToReview(patch), reviewId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.reviewToResponse(review)), HttpStatus.OK);
    }

    //모든 리뷰 조회
    @GetMapping
    public ResponseEntity getReviews(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Review> pageReviews = reviewService.findAllReviews(page - 1, size);
        List<Review> reviews = pageReviews.getContent();
        return new ResponseEntity<>(new MultiResponseDto<>(mapper.reviewsToResponseDtos(reviews), pageReviews), HttpStatus.OK);
    }

    //리뷰 삭제
    @DeleteMapping("/{review-id}")
    public ResponseEntity deleteReview(@PathVariable("review-id") @Positive long reviewId, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        reviewService.deleteReview(principalDetails.getMember().getMemberId());
        reviewService.deleteReview(reviewId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}


