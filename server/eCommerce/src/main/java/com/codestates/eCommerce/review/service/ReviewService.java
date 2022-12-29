package com.codestates.eCommerce.review.service;


import com.codestates.eCommerce.common.exception.BusinessLogicException;
import com.codestates.eCommerce.common.exception.ExceptionCode;
import com.codestates.eCommerce.member.entity.Member;
import com.codestates.eCommerce.member.repository.MemberRepository;
import com.codestates.eCommerce.member.service.MemberService;
import com.codestates.eCommerce.review.entity.Review;
import com.codestates.eCommerce.review.enums.Size;
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
    private final MemberService memberService;
    private final MemberRepository repository;


    public Review createReview(Review review, PrincipalDetails principalDetails) {
        review.setMemberId(principalDetails.getMember().getMemberId());
        review.setStatusRecode(StatusRecode.REVIEW_CREATE);
        return reviewRepository.save(review);
    }


    public Review updateReview(Review review, Long reviewId) {
        Review patchReview = findVerifiedReview(reviewId);

        Optional.ofNullable(review.getContent()).ifPresent(content -> patchReview.setContent(content));
        Optional.ofNullable(review.getImage()).ifPresent(image -> patchReview.setImage(image));
        Optional.ofNullable(review.getColor()).ifPresent(color -> patchReview.setColor(color));
        Optional.ofNullable(review.getSize()).ifPresent(size -> patchReview.setSize(size));
        Optional.ofNullable(review.getHeight()).ifPresent(height -> patchReview.setHeight(height));
        Optional.ofNullable(review.getWeight()).ifPresent(weight -> patchReview.setWeight(weight));
        Optional.ofNullable(review.getStar_rating()).ifPresent(star_rating -> patchReview.setStar_rating(star_rating));

//        Review patchReview = findVerifiedReview(ReviewId);
//
//        if (review.getContent() != null) patchReview.setContent(review.getContent());
//        if (review.getColor() != null) patchReview.setColor(review.getColor());
//        if (review.getSize() != null) patchReview.setSize(review.getSize());
//        if (review.getHeight() != null) patchReview.setHeight(review.getHeight());
//        if (review.getWeight() != null) patchReview.setWeight(review.getWeight());
//        if (review.getStar_rating() != null) patchReview.setStar_rating(review.getStar_rating());
        review.setStatusRecode(StatusRecode.REVIEW_UPDATE);
        return reviewRepository.save(patchReview);
    }


    public Page<Review> findAllReviews(int page, int size) {
        return reviewRepository.findAll(PageRequest.of(page, size,
                Sort.by("reviewId").descending()));
    }

    public void deleteReview(Long reviewId) {
        Review deleteReview = findVerifiedReview(reviewId);
        deleteReview.setStatusRecode(StatusRecode.REVIEW_DELETE);
        reviewRepository.save(deleteReview);
    }

    public Review findVerifiedReview(Long reviewId) {
        Optional<Review> review = reviewRepository.findByReviewId(reviewId);
        Review findReview = review.orElseThrow(() -> new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND));
        return findReview;
    }
}