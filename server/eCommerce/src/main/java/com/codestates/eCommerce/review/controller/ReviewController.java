package com.codestates.eCommerce.review.controller;

import com.codestates.eCommerce.common.dto.MultiResponseDto;
import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.question.entity.Question;
import com.codestates.eCommerce.review.dto.RequestDto;
import com.codestates.eCommerce.review.entity.Review;
import com.codestates.eCommerce.review.mapper.ReviewMapper;
import com.codestates.eCommerce.review.service.ReviewService;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
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


    //  리뷰 생성  .by 주원
    @PostMapping
    public ResponseEntity postReview(@Valid @RequestBody RequestDto.Post post, @AuthenticationPrincipal PrincipalDetails principalDetails) {  // body 값으로 Request Dto, 로그인 세션 정보를 받아옴  .by 주원
        Review review = reviewService.createReview(mapper.postToReview(post),principalDetails);  // mapper 를 통해 Post Dto 를 review 객체로 변환  .by 주원
        review.setMemberId(principalDetails.getMember().getMemberId()); //인증된 사용자 정보가져옴  .by 주원
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.reviewToResponse(review)), HttpStatus.CREATED);  // mapper 를 통해 객체를 responseDto 로 변환,상태메세지 반환  .by 주원
    }


    //  리뷰 수정  .by 주원
    @PatchMapping("/{review-id}")
    public ResponseEntity patchReview(@PathVariable("review-id") @Positive Long reviewId,  //  URI 변수 지정  .by 주원
                                      @Valid @RequestBody RequestDto.Patch patch,  //  body 값으로 Patch Dto, 로그인 세션 정보를 받아옴  .by 주원
                                      @AuthenticationPrincipal PrincipalDetails principalDetails) {
        patch.setMemberId(principalDetails.getMember().getMemberId());
        Review review = reviewService.updateReview(mapper.patchToReview(patch), reviewId);  //  mapper 를 통해 patch Dto 를 review 객체로 변환 .by 주원
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.reviewToResponse(review)), HttpStatus.OK);
    }

    //  모든 리뷰 조회  .by 주원
    @GetMapping
    public ResponseEntity findAllReviews(@Positive @RequestParam int page,
                                          @Positive @RequestParam int size) {
        Page<Review> pageReviews = reviewService.findAllReviews(page - 1, size);
        List<Review> reviewList = pageReviews.getContent();
        return new ResponseEntity<>(new MultiResponseDto<>(mapper.reviewsToResponseDtos( reviewList), pageReviews),HttpStatus.OK);
    }

    //  리뷰 삭제  .by 주원
    @DeleteMapping("/{review-id}")
    public ResponseEntity deleteReview(@PathVariable("review-id") @Positive long reviewId, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        reviewService.deleteReview(principalDetails.getMember().getMemberId());  //  로그인한 사용자의 정보를 가져와 삭제  .by 주원
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}


