package com.codestates.eCommerce.product.controller;

import com.codestates.eCommerce.common.dto.MultiResponseDto;
import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.product.domain.service.AppProductSerivce;
import com.codestates.eCommerce.product.dto.*;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
@Slf4j
public class ProductController {

    private final AppProductSerivce appProductSerivce;

    /** Todo 관리자만 상품에 대한 등록 수정이 가능하다
     * 상품등록시엔 상품에대한 정보를 기입해야한다.
    * */
//    @PreAuthorize("hasRole('ROLE_ADMIN')")
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
    @GetMapping("/")
    public ResponseEntity<?> getProductByName(@RequestParam("name") String name) {
        ResponseDetailDto responseDto = appProductSerivce.getProduct(name);
        return new ResponseEntity<>(new SingleResponseDto<>(responseDto),HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getProductPage(ProductCondition productCondition, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        System.out.println(principalDetails.getMember());
        Page<ResponseDto> responseProductPage = appProductSerivce.getProductPage(productCondition , principalDetails.getMember());
        return new ResponseEntity<>(new MultiResponseDto<>(responseProductPage.getContent(),responseProductPage),HttpStatus.OK);
    }

    @PatchMapping("/{product-id}")
    public ResponseEntity<?> updateProduct(@PathVariable("product-id") Long productId, @RequestBody RequestDto.Patch requestDto) {
        ResponseDto responseDto = appProductSerivce.updateProduct(productId,requestDto);
        return new ResponseEntity<>(new SingleResponseDto<>(responseDto),HttpStatus.ACCEPTED);
    }


}
