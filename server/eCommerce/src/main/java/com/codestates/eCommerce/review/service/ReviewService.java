package com.codestates.eCommerce.review.service;

import com.codestates.eCommerce.common.exception.BusinessLogicException;
import com.codestates.eCommerce.common.exception.ExceptionCode;
import com.codestates.eCommerce.product.domain.service.ProductService;
import com.codestates.eCommerce.review.entity.Review;
import com.codestates.eCommerce.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final ProductService productService;



    public Review createReview(Review review) {
        Review findReview = findVerifiedReview(review.getReviewId());
        findReview.setReviewStatus(Review.ReviewStatus.REVIEW_COMPLETE);
        return reviewRepository.save(review);  //리뷰정보 저장
    }

    public Review updateReview(Review review) {
        Review findReview = findVerifiedReview(review.getReviewId());  //존재하는 리뷰인지 검증

        Optional.ofNullable(review.getContent())  //업데이트 대상목록
                .ifPresent(content -> findReview.setContent(content));
        Optional.ofNullable(review.getImage())
                .ifPresent(image -> findReview.setImage(image));
        Optional.ofNullable(review.getColor())
                .ifPresent(color -> findReview.setColor(color));

        findReview. setReviewStatus(Review.ReviewStatus.REVIEW_EDITED);
        return reviewRepository.save(findReview);  //업데이트
    }

    public Review findReview(Long reviewId) {
        return reviewRepository.save(findReview(reviewId));  //특정 리뷰조회
    }

    public Page<Review> findReviews(int page, int size) {
        return reviewRepository.findAll(PageRequest.of(page, size,
                Sort.by("reviewId").descending()));  //모든 리뷰조회
    }

    public void deleteReview(Long reviewId) {
        Review findReview = findVerifiedReview(reviewId);
        findReview.setReviewStatus(Review.ReviewStatus.REVIEW_DELETE);
        reviewRepository.save(findReview);  //리뷰 삭제
    }

    public Review findVerifiedReview(long reviewId){  //삭제할 리뷰가 있는지 검증
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);
        Review findReview =
                optionalReview.orElseThrow(() -> new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND));
        return findReview;

    }
}