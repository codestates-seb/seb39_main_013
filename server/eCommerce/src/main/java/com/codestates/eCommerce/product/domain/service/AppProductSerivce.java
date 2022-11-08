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
public class AppProductSerivce {

    private final ProductService productService;
    private final ProductMapper productMapper;

    @Transactional
    public ProductResponseDto postProduct(RequestDto.Post requestDto) {
        Product product = productMapper.toEntity(requestDto);
        Product saveProduct = productService.save(product);
        return productMapper.toProductResponseDto(saveProduct);
    }

    @Transactional(readOnly = true)
    public ProductResponseDto getProduct(Long productId){
        Product product = productService.findVerifiedProduct(productId);
        return productMapper.toProductResponseDto(product);
    }

    @Transactional(readOnly = true)
    public ResponseDetailDto getProduct(String name){
        List<ProductDto> product = productService.getProduct(name);
        ProductDetailDto productDetailDto = productMapper.toProductDetailDto(product);
        return  productMapper.toResponseDetailDto(productDetailDto);
    }

    @Transactional(readOnly = true)
    public List<ProductResponseDto> getProductV2(String name){
        List<ProductDto> product = productService.getProductByName(name);
        return  productMapper.toResponseDtoList(product);
    }

    @Transactional(readOnly = true)
    public Page<ProductResponseDto> getProductPage(int page, int size , ProductConditionDto productConditionDto) {
        Page<ProductDto> pageProductDtos = productService.getProductPage(page,size, productConditionDto);
        return pageProductDtos.map(new Function<ProductDto, ProductResponseDto>() {
            @Override
            public ProductResponseDto apply(ProductDto productDto) {
                return productMapper.toResponseDto(productDto);
            }
        });
    }

    /*Todo 리팩토링 */
    @Transactional(readOnly = true)
    public Page<ProductResponseDto> getProductPageV2(ProductConditionDto productConditionDto) {
        Page<ProductDto> pageProductDtos = productService.getProductPageV2(productConditionDto);
        return pageProductDtos.map(new Function<ProductDto, ProductResponseDto>() {
            @Override
            public ProductResponseDto apply(ProductDto productDto) {
                return productMapper.toResponseDto(productDto);
            }
        });
    }

    @Transactional
    public ProductResponseDto updateProduct(Long productId, RequestDto.Patch requestDto) {
        Product updateProduct = productService.updateProduct(productId, requestDto);
        return productMapper.toProductResponseDto(updateProduct);
    }

    @Transactional(readOnly = true)
    public ProductResponseDto searchProductWithItemList(Long productId) {
        Product products = productService.searchProductWithItemList(productId);
        return productMapper.toProductResponseDto(products);
    }
    /**Todo 상품디테일
     * */
    @Transactional(readOnly = true)
    public ProductResponseDto searchProductWithItem(Long productId, String size) {
        Product product = productService.searchProductWithItem(productId,size);
        return productMapper.toProductResponseDto(product);
    }
}
