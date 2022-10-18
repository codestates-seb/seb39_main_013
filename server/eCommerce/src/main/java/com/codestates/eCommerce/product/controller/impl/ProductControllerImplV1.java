package com.codestates.eCommerce.product.controller.impl;

import com.codestates.eCommerce.common.dto.MultiResponseDto;
import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.product.controller.ProductControllerV1;
import com.codestates.eCommerce.product.domain.service.AppProductSerivce;
import com.codestates.eCommerce.product.dto.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
@Slf4j
public class ProductControllerImplV1 implements ProductControllerV1 {

    private final AppProductSerivce appProductSerivce;

    /** Todo 관리자만 상품에 대한 등록 수정이 가능하다
     * 상품등록시엔 상품에대한 정보를 기입해야한다.
    * */
//    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping
    public ResponseEntity<?> postProduct(@RequestBody RequestDto.Post product) {
        ProductResponseDto productResponseDto = appProductSerivce.postProduct(product);
        return new ResponseEntity<>(new SingleResponseDto<>(productResponseDto),HttpStatus.CREATED);
    }

    @GetMapping("/{product-id}")
    public ResponseEntity<?> getProduct(@PathVariable("product-id") Long productId) {
        ProductResponseDto productResponseDto = appProductSerivce.getProduct(productId);
        return new ResponseEntity<>(new SingleResponseDto<>(productResponseDto),HttpStatus.OK);
    }

    public ResponseEntity<?> getProductByName(@RequestParam("name") String name) {
        ResponseDetailDto responseDto = appProductSerivce.getProduct(name);
        return new ResponseEntity<>(new SingleResponseDto<>(responseDto),HttpStatus.OK);
    }



    @GetMapping
    public ResponseEntity<?> getProductPages(ProductCondition productCondition) {
        Page<ProductResponseDto> responseProductPage = appProductSerivce.getProductPage(productCondition.getPage(),productCondition.getPageSize(),productCondition);
        return new ResponseEntity<>(new MultiResponseDto<>(responseProductPage.getContent(),responseProductPage),HttpStatus.OK);
    }

    @PatchMapping("/{product-id}")
    public ResponseEntity<?> updateProduct(@PathVariable("product-id") Long productId, @RequestBody RequestDto.Patch requestDto) {
        ProductResponseDto productResponseDto = appProductSerivce.updateProduct(productId,requestDto);
        return new ResponseEntity<>(new SingleResponseDto<>(productResponseDto),HttpStatus.ACCEPTED);
    }

}
