package com.codestates.eCommerce.product.mapper;


import com.codestates.eCommerce.product.domain.entity.ProductItem;
import com.codestates.eCommerce.product.dto.ProductItemDto;
import org.mapstruct.Mapper;
import org.mapstruct.NullValueCheckStrategy;
import org.mapstruct.NullValueMappingStrategy;

import java.util.List;

import static org.mapstruct.NullValueMappingStrategy.RETURN_DEFAULT;

@Mapper(componentModel = "spring", nullValueMappingStrategy = RETURN_DEFAULT)
public interface ProductItemMapper {


    ProductItem toProductItem(ProductItemDto productItemDto);
    List<ProductItem> toProductItem(List<ProductItemDto> productItemDtos);
    ProductItemDto toProductItemDto(ProductItem productItem);
    List<ProductItemDto> toProductItemDtos(List<ProductItem> productItems);

}
