package com.codestates.eCommerce.product.controller;

import com.codestates.eCommerce.product.dto.ProductCondition;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

/** 2022-10-18 v2시작
* */
public interface ProductControllerV2 {
    public ResponseEntity<?> getProductsPage(ProductCondition productCondition);
    public ResponseEntity<?> getProductWithItems(Long productId);

}
