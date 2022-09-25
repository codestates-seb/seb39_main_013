package com.codestates.eCommerce.product.controller;

import com.codestates.eCommerce.product.dto.RequestProduct;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    //상품등록
    @PostMapping
    public ResponseEntity postProduct(@RequestBody RequestProduct product) {

    }
}
