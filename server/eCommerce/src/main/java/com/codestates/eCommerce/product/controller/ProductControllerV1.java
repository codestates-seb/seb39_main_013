package com.codestates.eCommerce.product.controller;

import com.codestates.eCommerce.product.dto.ProductConditionDto;
import com.codestates.eCommerce.product.dto.RequestDto;
import org.springframework.http.ResponseEntity;


/** 코드스테이츠 수료중에 만든 버전
* */
public interface ProductControllerV1 {

    public ResponseEntity<?> postProduct(RequestDto.Post product);

    public ResponseEntity<?> getProduct(Long productId);

    public ResponseEntity<?> getProductByName(String name) ;

    public ResponseEntity<?> getProductPages(ProductConditionDto productConditionDto) ;

    public ResponseEntity<?> updateProduct(Long productId, RequestDto.Patch requestDto);
}
