package com.codestates.eCommerce.product.domain.repository;

import com.codestates.eCommerce.product.domain.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
