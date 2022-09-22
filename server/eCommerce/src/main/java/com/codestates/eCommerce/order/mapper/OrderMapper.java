package com.codestates.eCommerce.order.mapper;

import com.codestates.eCommerce.order.domain.OrderProduct;
import com.codestates.eCommerce.order.dto.OrderProductDto;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring", uses = {OrderProductMapper.class})
public interface OrderMapper<Order, OrderDto> {

    OrderDto toDto(Order entity);
    Order toEntity(OrderDto dto);
    List<OrderDto> toDtoList(List<Order> entities);
    List<Order> toEntityList(List<OrderDto> dtos);
}
