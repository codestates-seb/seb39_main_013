package com.codestates.eCommerce.product.domain.repository;

import com.codestates.eCommerce.product.domain.entity.ProductHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductHistoryRepository extends JpaRepository<ProductHistory, Long> {
}
