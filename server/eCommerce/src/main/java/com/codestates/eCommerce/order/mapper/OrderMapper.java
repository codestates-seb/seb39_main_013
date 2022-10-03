package com.codestates.eCommerce.order.mapper;

import com.codestates.eCommerce.order.domain.entity.OrderProduct;
import com.codestates.eCommerce.order.dto.OrderProductDto;
import com.codestates.eCommerce.order.dto.OrderResponseDto;
import com.codestates.eCommerce.order.domain.entity.Order;
import com.codestates.eCommerce.order.dto.OrderRequestDto;
import com.codestates.eCommerce.order.enums.ProductOrderStatus;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", uses = {OrderProductMapper.class})
public interface OrderMapper {
    @Mapping(target = "orderProducts" , source = "products")
    Order toOrderEntity(OrderRequestDto dto);

    OrderResponseDto toOrderResponseDto(Order order);


    List<OrderResponseDto> toOrderResponseDtoList(List<Order> order);

    List<Order> toEntityList(List<OrderResponseDto> dtos);

    //productId -> orderProduct객체
    default OrderProduct productInfoToOrderProduct(OrderRequestDto.ProductInfo productInfo) {
        OrderProduct orderProduct = new OrderProduct();
        orderProduct.setProductId(productInfo.getProductId());
        orderProduct.setProductName(productInfo.getProductName());
        orderProduct.setProductQuantity(productInfo.getQuantity());
        orderProduct.setProductPrice(productInfo.getPrice());
        orderProduct.setProductColor(productInfo.getColor());
        orderProduct.setProductSize(productInfo.getSize());
        orderProduct.setProductOrderStatus(ProductOrderStatus.ORDERED);
        return orderProduct;
    }

}