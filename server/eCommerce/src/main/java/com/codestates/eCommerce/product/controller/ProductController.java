package com.codestates.eCommerce.product.controller;

import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.product.domain.service.AppProductSerivce;
import com.codestates.eCommerce.product.dto.RequestProduct;
import com.codestates.eCommerce.product.dto.ResponseProduct;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
public class ProductController {

    private final AppProductSerivce appProductSerivce;
    /**
     * 상품등록시엔 상품에대한 정보를 기입해야한다. 브랜드 번호로
    * */
    //상품등록
    @PostMapping
    public ResponseEntity postProduct(@RequestBody RequestProduct.Post product) {
        ResponseProduct responseProduct = appProductSerivce.postProduct(product);
        return new ResponseEntity<>(new SingleResponseDto<>(responseProduct),HttpStatus.CREATED);
    }
}
