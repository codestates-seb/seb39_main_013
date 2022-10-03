package com.codestates.eCommerce.review.repository;

import com.codestates.eCommerce.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
