package com.codestates.eCommerce.product.mapper;

import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.product.dto.ProductDto;
import com.codestates.eCommerce.product.dto.RequestDto;
import com.codestates.eCommerce.product.dto.ResponseDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    Product toEntity(RequestDto.Patch post);
    Product toEntity(RequestDto.Post post);
    Product toEntity(ProductDto ProductDto);
    ProductDto toProductDto(Product product);
    ResponseDto toResponseProductDto(Product product);
    List<Product> toEntityList(List<ProductDto> ProductDtos);
    List<ProductDto> toDtoList(List<Product> products);


    //서비스 -> 컨트롤러
    List<ResponseDto> toResponseProductList(List<ProductDto> productDto);

}
