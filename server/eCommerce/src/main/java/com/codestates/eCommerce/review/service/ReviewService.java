package com.codestates.eCommerce.review.service;


import com.codestates.eCommerce.common.exception.BusinessLogicException;
import com.codestates.eCommerce.common.exception.ExceptionCode;
import com.codestates.eCommerce.review.entity.Review;
import com.codestates.eCommerce.review.enums.StatusRecode;
import com.codestates.eCommerce.review.repository.ReviewRepository;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;


    //  리뷰작성 시 실행되는 메소드  .by 주원
    public Review createReview(Review review, PrincipalDetails principalDetails) {
        review.setMemberId(principalDetails.getMember().getMemberId());
        review.setStatusRecode(StatusRecode.REVIEW_COMPLETE);  //  db에 기록이 저장될 수 있도록 상태메세지 생성  .by 주원
        return reviewRepository.save(review);  //  db 저장  .by 주원
    }

    //  리뷰 수정 시 실행되는 메소드  .by 주원
    public Review updateReview(Review review, Long reviewId) {
        Review patchReview = findVerifiedReview(reviewId);  //  수정할 리뷰가 있는지 검증  .by 주원

        Optional.ofNullable(review.getContent())
                .ifPresent(content -> patchReview.setContent(content));  //변경 값(Value)이 있을경우 값을 설정하여 저장시킴  .by 주원
        Optional.ofNullable(review.getImage())
                .ifPresent(image -> patchReview.setImage(image));
        Optional.ofNullable(review.getColor())
                .ifPresent(color -> patchReview.setColor(color));
        Optional.ofNullable(review.getSize())
                .ifPresent(size -> patchReview.setSize(size));
        Optional.ofNullable(review.getHeight())
                .ifPresent(height -> patchReview.setHeight(height));
        Optional.ofNullable(review.getWeight())
                .ifPresent(weight -> patchReview.setWeight(weight));
        Optional.ofNullable(review.getStar_rating())
                .ifPresent(star_rating -> patchReview.setStar_rating(star_rating));
        return reviewRepository.save(patchReview);  //  db 저장  .by 주원
    };


    //모든 리뷰가 조회되는  메소드 .by 주원
    @Transactional(readOnly = true)
    public Page<Review> findAllReviews(int page, int size) {
        return reviewRepository.findAll(PageRequest.of(page, size,
                Sort.by("reviewId").descending()));
    }

    public void deleteReview(Long reviewId) {  //  리뷰 삭제 .by 주원
        Review deleteReview = findVerifiedReview(reviewId);  //  리뷰가 있는지 검증한 뒤 삭제  .by 주원
        deleteReview.setStatusRecode(StatusRecode.REVIEW_DELETE);
        reviewRepository.save(deleteReview);  //  db 저장  .by 주원
    }
    @Transactional(readOnly = true)
    public Review findVerifiedReview(Long reviewId) {  //  리뷰가 있는지 검증한 뒤 없을경우 예외 처리 문구를 보여줌  .by 주원
        Optional<Review> review = reviewRepository.findByReviewId(reviewId);
        Review findReview = review.orElseThrow(() -> new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND));
        return findReview;
    }
}