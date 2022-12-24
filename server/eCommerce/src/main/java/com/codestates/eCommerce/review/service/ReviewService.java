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

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;


    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

    public Review updateReview(Review review) {
//        Review patchReview = findVerifiedReview(review.getReviewId());

//        Optional.ofNullable(review.getContent())
//                .ifPresent(content -> patchReview.setContent(content));
//        Optional.ofNullable(review.getImage())
//                .ifPresent(image -> patchReview.setImage(image));
//        Optional.ofNullable(review.getColor())
//                .ifPresent(color -> patchReview.setColor(color));
//        Optional.ofNullable(review.getStar_rating())
//                .ifPresent(star_rating -> patchReview.setStar_rating(star_rating));
//        Optional.ofNullable(review.getStatusRecode())
//                .ifPresent(statusRecode -> patchReview.setStatusRecode(statusRecode));


        Review patchReview = findVerifiedReview(review.getReviewId());

        if (review.getContent() != null) patchReview.setContent(review.getContent());
        if (review.getColor() != null) patchReview.setColor(review.getColor());
        if (review.getSize() != null) patchReview.setSize(review.getSize());
        if (review.getHeight() != null) patchReview.setHeight(review.getHeight());
        if (review.getWeight() != null) patchReview.setWeight(review.getWeight());
        if (review.getStar_rating() != null) patchReview.setStar_rating(review.getStar_rating());

        return reviewRepository.save(patchReview);
    }


    public Page<Review> findReviews(int page, int size) {
        return reviewRepository.findAll(PageRequest.of(page, size,
                Sort.by("reviewId").descending()));
    }

    public void deleteReview(Long reviewId) {
        Review findReview = findVerifiedReview(reviewId);
        reviewRepository.save(findReview);
    }

    public Review findVerifiedReview(Long reviewId) {
        Optional<Review> review = reviewRepository.findById(reviewId);
        Review findReview = review.orElseThrow(() -> new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND));
        return findReview;
    }
}