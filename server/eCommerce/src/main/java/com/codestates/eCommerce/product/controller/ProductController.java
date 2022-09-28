package com.codestates.eCommerce.product.controller;

import com.codestates.eCommerce.common.dto.MultiResponseDto;
import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.product.domain.service.AppProductSerivce;
import com.codestates.eCommerce.product.dto.ProductDto;
import com.codestates.eCommerce.product.dto.RequestDto;
import com.codestates.eCommerce.product.dto.ResponseDto;
import com.codestates.eCommerce.product.dto.ProductCondition;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
public class ProductController {

    private final AppProductSerivce appProductSerivce;

    /** Todo 관리자만 상품에 대한 등록 수정이 가능하다
     * 상품등록시엔 상품에대한 정보를 기입해야한다.
    * */
    @PostMapping
    public ResponseEntity<?> postProduct(@RequestBody RequestDto.Post product) {
        ResponseDto responseDto = appProductSerivce.postProduct(product);
        return new ResponseEntity<>(new SingleResponseDto<>(responseDto),HttpStatus.CREATED);
    }
    @GetMapping("/{product-id}")
    public ResponseEntity<?> getProduct(@PathVariable("product-id") Long productId) {
        ResponseDto responseDto = appProductSerivce.getProduct(productId);
        return new ResponseEntity<>(new SingleResponseDto<>(responseDto),HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getProductPage(@RequestParam int page, @RequestParam int size, @RequestBody ProductCondition productCondition) {
        Page<ProductDto> responseProductPage = appProductSerivce.getProductPage(page,size,productCondition);
        return new ResponseEntity<>(new MultiResponseDto<>(responseProductPage.getContent(),responseProductPage),HttpStatus.OK);
    }

    @PatchMapping("/{product-id}")
    public ResponseEntity<?> updateProduct(@PathVariable("product-id") Long productId, @RequestBody RequestDto.Patch requestDto) {
        ResponseDto responseDto = appProductSerivce.updateProduct(productId,requestDto);
        return new ResponseEntity<>(new SingleResponseDto<>(responseDto),HttpStatus.ACCEPTED);
    }
}
