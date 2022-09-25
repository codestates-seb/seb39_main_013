package com.codestates.eCommerce.product.mapper;

import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.product.dto.ProductDto;
import com.codestates.eCommerce.product.dto.RequestProduct;
import com.codestates.eCommerce.product.dto.ResponseProduct;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    Product toEntity(RequestProduct.Post post);
    Product toEntity(ProductDto productDto);
    ProductDto toProductDto(Product product);
    ResponseProduct toResponseProductDto(Product product);
    List<Product> toEntityList(List<ProductDto> productDtos);
    List<ProductDto> toDtoList(List<Product> products);
}
