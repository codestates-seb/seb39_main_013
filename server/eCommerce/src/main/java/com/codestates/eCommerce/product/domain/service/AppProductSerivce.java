package com.codestates.eCommerce.product.domain.service;

import com.codestates.eCommerce.bookmark.service.BookmarkService;
import com.codestates.eCommerce.member.entity.Member;
import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.product.dto.*;
import com.codestates.eCommerce.product.mapper.ProductMapper;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.security.core.context.SecurityContextHolder;
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
    private final BookmarkService bookmarkService;

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
    public Page<ResponseDto> getProductPage(ProductCondition productCondition, Member member) {
        Page<ProductDto> pageProductDtos =  productService.getProductPage(member.getMemberId(),productCondition);

        //계층변화
        return pageProductDtos.map(new Function<ProductDto, ResponseDto>() {
            @Override
            public ResponseDto apply(ProductDto productDto) {
                System.out.println(productDto.getMemberId()+ " |" + member.getMemberId());
                return productMapper.toResponseDto(productDto , member.getMemberId());
            }
        });
    }


    public ResponseDto updateProduct(Long productId, RequestDto.Patch requestDto) {
        Product updateProduct = productService.updateProduct(productId, requestDto);
        return productMapper.toResponseProductDto(updateProduct);
    }


    public ResponseDto getProductWithBookMark(Long productId, Long memberId) {
        Page<ProductDto> pageProductDtos = productService.getProductPage(page,size, productCondition);
        return pageProductDtos.map(new Function<ProductDto, ResponseDto>() {
            @Override
            public ResponseDto apply(ProductDto productDto) {
                return productMapper.toResponseDto(productDto);
            }
        });
    }

}
