package com.codestates.eCommerce.review.repository;

import com.codestates.eCommerce.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    Optional <Review> findById(Long reviewId);
}

