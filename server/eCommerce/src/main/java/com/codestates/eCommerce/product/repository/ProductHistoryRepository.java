package com.codestates.eCommerce.product.repository;

import com.codestates.eCommerce.product.entity.ProductHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductHistoryRepository extends JpaRepository<ProductHistory, Long> {
}
