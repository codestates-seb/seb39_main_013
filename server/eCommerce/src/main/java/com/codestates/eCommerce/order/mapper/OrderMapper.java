package com.codestates.eCommerce.order.mapper;

import com.codestates.eCommerce.order.dto.OrderDto;
import com.codestates.eCommerce.order.domain.entity.Order;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring", uses = {OrderProductMapper.class})
public interface OrderMapper {

    OrderDto toDto(Order entity);
    Order orderDtoToEntity(OrderDto dto);
    List<OrderDto> toDtoList(List<Order> entities);
    List<Order> toEntityList(List<OrderDto> dtos);
}
