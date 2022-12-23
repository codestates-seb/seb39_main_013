package com.codestates.eCommerce.review.controller;

import com.codestates.eCommerce.common.dto.MultiResponseDto;
import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.review.dto.ReviewPatchDto;
import com.codestates.eCommerce.review.dto.ReviewRequestDto;
import com.codestates.eCommerce.review.entity.Review;
import com.codestates.eCommerce.review.mapper.ReviewMapper;
import com.codestates.eCommerce.review.service.ReviewService;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
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
public class ReviewController {
    private final ReviewService reviewService;
    private final ReviewMapper mapper;


    //리뷰 생성
    @PostMapping
    public ResponseEntity postReview(@Valid @RequestBody ReviewRequestDto reviewRequestDto,
                                     @AuthenticationPrincipal PrincipalDetails principalDetails) {
        Review review = reviewService.createReview(mapper.reviewRequestDtoToReview(reviewRequestDto));
        review.setReviewId(principalDetails.getMember().getMemberId());
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.reviewToReviewResponseDto(review)), HttpStatus.CREATED);
    }
    //리뷰 수정
    @PatchMapping("/{review-id}")
    public ResponseEntity patchReview(@PathVariable("review-id") @Positive long reviewId,
            @Valid @RequestBody ReviewPatchDto reviewPatchDto, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        reviewPatchDto.setReviewId(principalDetails.getMember().getMemberId());
        Review review = reviewService.updateReview(mapper.reviewPatchDtoToReview(reviewPatchDto));
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.reviewToReviewResponseDto(review)), HttpStatus.OK);
    }
    //리뷰 조회
    @GetMapping("/{review-id}")
    public ResponseEntity getReview(@PathVariable("review-id") long reviewId, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        Long memberId = principalDetails.getMember().getMemberId();
        Review review = reviewService.findReview(reviewId);
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.reviewToReviewResponseDto(review)), HttpStatus.OK);
    }

//    //모든 리뷰 조회
//    @GetMapping
//    public ResponseEntity getReviews(@Positive @RequestParam int page,
//                                     @Positive @RequestParam int size, @AuthenticationPrincipal PrincipalDetails principalDetails) {
//        Page<Review> pageReviews = reviewService.findReviews(page - 1, size);
//        List<Review> reviews = pageReviews.getContent();
//        return new ResponseEntity<>(new MultiResponseDto<>(mapper.reviewsToReviewResponseDtos(reviews), pageReviews), HttpStatus.OK);
//    }

    //리뷰 삭제
    @DeleteMapping("/{review-id}")
    public ResponseEntity deleteReview(@PathVariable("review-id") long reviewId,
                                       @AuthenticationPrincipal PrincipalDetails principalDetails) {
        Long memberId = principalDetails.getMember().getMemberId();
        reviewService.deleteReview(reviewId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
