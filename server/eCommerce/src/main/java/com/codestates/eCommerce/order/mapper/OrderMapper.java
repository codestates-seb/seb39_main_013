package com.codestates.eCommerce.order.mapper;

import com.codestates.eCommerce.order.domain.entity.OrderProduct;
import com.codestates.eCommerce.order.dto.OrderResponseDto;
import com.codestates.eCommerce.order.domain.entity.Order;
import com.codestates.eCommerce.order.dto.OrderRequestDto;
import com.codestates.eCommerce.product.dto.ProductDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", uses = {OrderProductMapper.class})
public interface OrderMapper {
//    Order toOrderEntity(OrderServiceDto dto);
//    OrderServiceDto toOrderServiceDto(Order entity);
//    List<OrderServiceDto> toDtoList(List<Order> entities);
//    @Mapping(target = "orderProducts" , source = "productIds")
//    OrderServiceDto toOrderServiceDto(OrderRequestDto orderRequestDto);
    @Mapping(target = "orderProducts" , source = "products")
    Order toOrderEntity(OrderRequestDto dto);

    OrderResponseDto toOrderResponseDto(Order order);

    List<Order> toEntityList(List<OrderResponseDto> dtos);

    //productId -> orderProduct객체
    default OrderProduct productInfoToOrderProduct(OrderRequestDto.ProductInfo productInfo) {
        OrderProduct orderProduct = new OrderProduct();
        orderProduct.setProductId(productInfo.getProductId());
        orderProduct.setProductQuantity(productInfo.getQuantity());
        return orderProduct;
    }

}