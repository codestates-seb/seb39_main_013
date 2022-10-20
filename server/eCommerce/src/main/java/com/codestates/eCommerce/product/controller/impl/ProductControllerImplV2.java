package com.codestates.eCommerce.product.controller.impl;

import com.codestates.eCommerce.common.dto.MultiResponseDto;
import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.product.controller.ProductControllerV2;
import com.codestates.eCommerce.product.domain.service.AppProductSerivce;
import com.codestates.eCommerce.product.dto.ProductCondition;
import com.codestates.eCommerce.product.dto.ProductResponseDto;
import com.codestates.eCommerce.product.dto.RequestDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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


    /* TODO 상품 디테일 재정의*/
    @GetMapping("/info/list/{product-id}")
    public ResponseEntity<?> getProductWithItemList(@PathVariable("product-id") Long productId) {
        List<ProductResponseDto> productResponseDtos = appProductSerivce.searchProductWithItemList(productId);
        return new ResponseEntity<>(new SingleResponseDto<>(productResponseDtos),HttpStatus.OK);
    }

    @GetMapping("/info/{product-id}/{size}")
    public ResponseEntity<?> getProductWithItem(@PathVariable("product-id") Long productId, @PathVariable("size") String size) {
        List<ProductResponseDto> productResponseDtos = appProductSerivce.searchProductWithItem(productId, size);
        return new ResponseEntity<>(new SingleResponseDto<>(productResponseDtos),HttpStatus.OK);
    }

    @PatchMapping("/{product-id}")
    public ResponseEntity<?> updateProduct(@PathVariable("product-id") Long productId, @RequestBody RequestDto.Patch requestDto) {
        ProductResponseDto productResponseDto = appProductSerivce.updateProduct(productId,requestDto);
        return new ResponseEntity<>(new SingleResponseDto<>(productResponseDto),HttpStatus.ACCEPTED);
    }


}
