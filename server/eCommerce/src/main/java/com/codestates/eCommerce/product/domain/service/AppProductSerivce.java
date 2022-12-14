package com.codestates.eCommerce.product.domain.service;

import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.product.dto.*;
import com.codestates.eCommerce.product.mapper.ProductMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.function.Function;


@Service
@RequiredArgsConstructor
@Transactional
public class AppProductSerivce {

    private final ProductService productService;
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
    public ResponseDetailDto getProduct(String name){
        List<ProductDto> product = productService.getProduct(name);
        ProductDetailDto productDetailDto = productMapper.toProductDetailDto(product);
        return  productMapper.toResponseDetailDto(productDetailDto);
    }

    @Transactional(readOnly = true)
    public Page<ResponseDto> getProductPage(int page, int size ,ProductCondition productCondition) {
        Page<ProductDto> pageProductDtos = productService.getProductPage(page,size, productCondition);
        return pageProductDtos.map(new Function<ProductDto, ResponseDto>() {
            @Override
            public ResponseDto apply(ProductDto productDto) {
                return productMapper.toResponseDto(productDto);
            }
        });
    }

    public ResponseDto updateProduct(Long productId, RequestDto.Patch requestDto) {
        Product updateProduct = productService.updateProduct(productId, requestDto);
        return productMapper.toResponseProductDto(updateProduct);
    }
}
