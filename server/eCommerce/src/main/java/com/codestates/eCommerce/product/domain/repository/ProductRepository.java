package com.codestates.eCommerce.product.domain.repository;

import com.codestates.eCommerce.product.domain.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long>  {
//
//    @Query(value = "SELECT p FROM PRODUCT ORDER BY p.createdAt DESC")
//    List<Product> selectAllDescJPQL();

}
