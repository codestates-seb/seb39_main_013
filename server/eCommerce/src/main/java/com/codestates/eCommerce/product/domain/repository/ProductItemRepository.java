package com.codestates.eCommerce.product.domain.repository;

import com.codestates.eCommerce.product.domain.entity.ProductItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductItemRepository extends JpaRepository<ProductItem, Long> {
}
