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
    Product toEntity(ProductDto ProductDto);
    ProductDto toProductDto(Product product);
    ResponseProduct toResponseProductDto(Product product);
    List<Product> toEntityList(List<ProductDto> ProductDtos);
    List<ProductDto> toDtoList(List<Product> products);


    //서비스 -> 컨트롤러
    List<ResponseProduct> toResponseProductList(List<ProductDto> productDto);

}
