package com.codestates.eCommerce.order.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderProductMapper<OrderProduct, OrderProductDto> {

    @Mapping(target = "order", ignore = true)
    OrderProductDto toDto(OrderProduct entity);
    @Mapping(target = "order", ignore = true)
    OrderProduct toEntity(OrderProductDto dto);
    @Mapping(target = "order", ignore = true)
    List<OrderProductDto> toDtoList(List<OrderProduct> entities);
    @Mapping(target = "order", ignore = true)
    List<OrderProduct> toEntityList(List<OrderProductDto> dtos);
}
