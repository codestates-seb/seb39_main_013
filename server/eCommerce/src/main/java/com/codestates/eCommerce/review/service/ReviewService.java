package com.codestates.eCommerce.review.service;

import com.codestates.eCommerce.common.exception.BusinessLogicException;
import com.codestates.eCommerce.common.exception.ExceptionCode;
import com.codestates.eCommerce.member.service.MemberService;
import com.codestates.eCommerce.product.domain.service.ProductService;
import com.codestates.eCommerce.review.entity.Review;
import com.codestates.eCommerce.review.mapper.ReviewMapper;
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
        verifyExistReview(review.getReviewCode());
        return reviewRepository.save(review);
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
        Optional.ofNullable(review.getReviewStatus())
                .ifPresent(reviewStatus -> findReview.setReviewStatus(reviewStatus));

        return reviewRepository.save(review);
    }

    public Review findReview(Long reviewId) {
        return findVerifiedReview(reviewId);
    }

    public Page<Review> findReviews(int page, int size) {
        return reviewRepository.findAll(PageRequest.of(page, size,
                Sort.by("reviewId").descending()));
    }

    public void deleteReview(Long reviewId) {
        Review findReview = findVerifiedReview(reviewId);
        reviewRepository.save(findReview);
    }

    public Review findVerifiedReview(long reviewId) {
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);
        Review findReview = optionalReview.orElseThrow(() -> new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND));
        return findReview;
    }

    private void verifyExistReview(String reviewCode) {
        Optional<Review> review = reviewRepository.findByReviewCode(reviewCode);
        if(review.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.REVIEW_EXISTS);
        }
    }
}
