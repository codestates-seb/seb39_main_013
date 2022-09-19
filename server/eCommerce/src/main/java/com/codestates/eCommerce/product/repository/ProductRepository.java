package com.codestates.eCommerce.product.repository;

import com.codestates.eCommerce.product.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
