package com.codestates.eCommerce.product.controller;

import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.product.domain.service.AppProductSerivce;
import com.codestates.eCommerce.product.dto.RequestProduct;
import com.codestates.eCommerce.product.dto.ResponseProduct;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
public class ProductController {

    private final AppProductSerivce appProductSerivce;

    /** Todo 관리자 상품등록
     * 상품등록시엔 상품에대한 정보를 기입해야한다. 해당 상품은 어느 브랜드인지 브랜드id로 구분하자
    * */
    @PostMapping
    public ResponseEntity postProduct(@RequestBody RequestProduct.Post product) {
        ResponseProduct responseProduct = appProductSerivce.postProduct(product);
        return new ResponseEntity<>(new SingleResponseDto<>(responseProduct),HttpStatus.CREATED);
    }
    @GetMapping("/{product-id}")
    public ResponseEntity getProduct(@PathVariable("product-id") Long productId) {
        ResponseProduct responseProduct = appProductSerivce.getProduct(productId);
        return new ResponseEntity(new SingleResponseDto<>(responseProduct),HttpStatus.OK);
    }
}
