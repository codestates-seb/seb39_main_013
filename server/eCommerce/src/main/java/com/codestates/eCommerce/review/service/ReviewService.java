package com.codestates.eCommerce.review.service;

import com.codestates.eCommerce.common.exception.BusinessLogicException;
import com.codestates.eCommerce.common.exception.ExceptionCode;
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
@Transactional
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;


    public Review createReview(Review review) {
        Review createReview = Review.builder()           //Mapstruct가 변환해주는 흐름으로 코드를 작성했으므로 성능적인 향상은 없다 -?
                .content(review.getContent())
                .image(review.getImage())
                .star_rating(review.getStar_rating())
                .height(review.getHeight())
                .weight(review.getWeight())
                .color(review.getColor())
                .size(review.getSize())
                .statusRecode(Review.StatusRecode.REVIEW_CREATE)
                .build();
        return reviewRepository.save(createReview);
    }

    public Review updateReview(Review review) {
        Review findReview = findVerifiedReview(review.getReviewId());

        Optional.ofNullable(review.getContent())
                .ifPresent(content -> findReview.setContent(content));
        Optional.ofNullable(review.getImage())
                .ifPresent(image -> findReview.setImage(image));
        Optional.ofNullable(review.getColor())
                .ifPresent(color -> findReview.setColor(color));
        Optional.ofNullable(review.getStar_rating())
                .ifPresent(star_rating -> findReview.setStar_rating(star_rating));
        Optional.ofNullable(review.getStatusRecode())
                .ifPresent(statusRecode -> findReview.setStatusRecode(statusRecode));

        return reviewRepository.save(review);
    }
    @Transactional(readOnly = true)
    public Review findReview(Long reviewId) {
        return findVerifiedReview(reviewId);
    }

    public Page<Review> findReviews(int page, int size) {
        return reviewRepository.findAll(PageRequest.of(page, size,
                Sort.by("reviewId").descending()));
    }

    public void deleteReview(Long reviewId) {
        Review findReview = findVerifiedReview(reviewId);
        Review.StatusRecode statusRecode = Review.StatusRecode.REVIEW_DELETE;
        reviewRepository.save(findReview);
    }
    @Transactional(readOnly = true)
    public Review findVerifiedReview(long reviewId) {
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);
        Review findReview = optionalReview.orElseThrow(() -> new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND));
        return findReview;
    }
}