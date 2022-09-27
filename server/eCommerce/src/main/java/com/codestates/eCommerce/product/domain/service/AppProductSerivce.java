package com.codestates.eCommerce.product.domain.service;

import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.product.dto.ProductDto;
import com.codestates.eCommerce.product.dto.RequestProduct;
import com.codestates.eCommerce.product.dto.ResponseProduct;
import com.codestates.eCommerce.product.infrastructure.ProductCondition;
import com.codestates.eCommerce.product.mapper.ProductMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@RequiredArgsConstructor
@Transactional
public class AppProductSerivce {

    private final ProductService productService;
    private final ProductMapper productMapper;

    public ResponseProduct postProduct(RequestProduct.Post requestDto) {
        Product product = productMapper.toEntity(requestDto);
        Product saveProduct = productService.save(product);
        return productMapper.toResponseProductDto(saveProduct);
    }

    @Transactional(readOnly = true)
    public ResponseProduct getProduct(Long productId){
        Product product = productService.getProductById(productId);
        return productMapper.toResponseProductDto(product);
    }

    @Transactional(readOnly = true)
    public Page<ProductDto> getProductPage(int page, int size ,ProductCondition productCondition) {
        return productService.getProductPage(page,size, productCondition);
    }
}
