package com.codestates.eCommerce.order.mapper;

import com.codestates.eCommerce.order.dto.OrderProductDto;
import com.codestates.eCommerce.order.domain.entity.OrderProduct;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderProductMapper {

    OrderProductDto toDto(OrderProduct entity);
    OrderProduct toEntity(OrderProductDto dto);
    List<OrderProductDto> toDtoList(List<OrderProduct> entities);
    List<OrderProduct> toEntityList(List<OrderProductDto> dtos);
}
