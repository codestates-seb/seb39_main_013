package com.codestates.eCommerce.product.domain.service;

import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.product.dto.*;
import com.codestates.eCommerce.product.mapper.ProductMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
@Transactional
public class AppProductSerivce {

    private final ProductService productService;
    private final ProductCustomService productCustomService;
    private final ProductMapper productMapper;

    public ResponseDto postProduct(RequestDto.Post requestDto) {
        Product product = productMapper.toEntity(requestDto);
        Product saveProduct = productService.save(product);
        return productMapper.toResponseProductDto(saveProduct);
    }

    @Transactional(readOnly = true)
    public ResponseDto getProduct(Long productId){
        Product product = productService.findVerifiedProduct(productId);
        return productMapper.toResponseProductDto(product);
    }

    @Transactional(readOnly = true)
    public Page<ProductDto> getProductPage(int page, int size ,ProductCondition productCondition) {
        return productCustomService.getProductPage(page,size, productCondition);
    }

    public ResponseDto updateProduct(Long productId, RequestDto.Patch requestDto) {
        Product updateProduct = productService.updateProduct(productId, requestDto);
        return productMapper.toResponseProductDto(updateProduct);
    }
}
