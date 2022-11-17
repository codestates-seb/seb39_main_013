package com.codestates.eCommerce.review.repository;

import com.codestates.eCommerce.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    Optional<Review> findByReviewCode(String reviewCode);
    Optional<Review> findById(long reviewId);
}

