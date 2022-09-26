package com.codestates.eCommerce.order.dto;

import com.codestates.eCommerce.order.enums.OrderStatus;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class OrderDto {
    private Long orderId;
    private Long memberId;      //aggregate
    private List<OrderProductDto> orderProducts = new ArrayList<>();
    private String orderAddress;
    private String memo;
    private OrderStatus orderStatus;
    private int totalPrice;

}
