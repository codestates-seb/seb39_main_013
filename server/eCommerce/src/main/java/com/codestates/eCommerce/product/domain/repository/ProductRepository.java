package com.codestates.eCommerce.product.domain.repository;

import com.codestates.eCommerce.product.domain.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> , ProductRepositoryCustom {
//
//    @Query(value = "SELECT p FROM PRODUCT ORDER BY p.createdAt DESC")
//    List<Product> selectAllDescJPQL();

}
