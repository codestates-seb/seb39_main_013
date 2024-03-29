package com.codestates.eCommerce.product.controller;

import com.codestates.eCommerce.product.dto.ProductConditionDto;
import com.codestates.eCommerce.product.dto.RequestDto;
import org.springframework.http.ResponseEntity;

/** 2022-10-18 v2시작
* */
public interface ProductControllerV2 {
    public ResponseEntity<?> getProductsPage(ProductConditionDto productConditionDto);
    public ResponseEntity<?> getProductWithItemList(Long productId);
    public ResponseEntity<?> getProductWithItem(Long productId, String size);
    public ResponseEntity<?> updateProduct(Long productId, RequestDto.Patch requestDto);
    public ResponseEntity<?> getProductByName(String name) ;
}
