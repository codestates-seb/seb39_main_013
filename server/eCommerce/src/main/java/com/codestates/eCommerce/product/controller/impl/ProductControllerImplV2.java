package com.codestates.eCommerce.product.controller.impl;

import com.codestates.eCommerce.common.dto.MultiResponseDto;
import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.product.controller.ProductControllerV2;
import com.codestates.eCommerce.product.domain.service.AppProductSerivce;
import com.codestates.eCommerce.product.dto.ProductCondition;
import com.codestates.eCommerce.product.dto.ProductDto;
import com.codestates.eCommerce.product.dto.ProductResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/v2/products")
@RequiredArgsConstructor
@Slf4j
public class ProductControllerImplV2 implements ProductControllerV2 {
    private final AppProductSerivce appProductSerivce;

    /* TODO 페이지 관리 재정의*/
    @GetMapping
    public ResponseEntity<?> getProductsPage(ProductCondition productCondition) {
        Page<ProductResponseDto> responseProductPage = appProductSerivce.getProductPageV2(productCondition.getPage(), productCondition.getPageSize(), productCondition);
        return new ResponseEntity<>(new MultiResponseDto<>(responseProductPage.getContent(),responseProductPage), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> getProductWithItems(Long productId) {
//        List<ProductResponseDto> productResponseDtos = appProductSerivce.searchProduct(productId);
        return new ResponseEntity<>(new SingleResponseDto<>(new ProductDto()),HttpStatus.OK);
    }

    /* TODO 상품 디테일 재정의*/

}
