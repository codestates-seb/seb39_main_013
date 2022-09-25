package com.codestates.eCommerce.product.domain.service;

import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.product.dto.RequestProduct;
import com.codestates.eCommerce.product.dto.ResponseProduct;
import com.codestates.eCommerce.product.mapper.ProductMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.transaction.Transactional;

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

}
