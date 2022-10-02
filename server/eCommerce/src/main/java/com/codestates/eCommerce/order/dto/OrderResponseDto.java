package com.codestates.eCommerce.order.dto;

import com.codestates.eCommerce.order.enums.OrderStatus;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@AllArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class OrderResponseDto {
    private Long orderId;
    private Long buyerId;      //aggregate
    private List<OrderProductDto> orderProducts ;
    private String buyerAddress;
    private String buyerName;
    private String buyerPostcode;
    private String buyerTel;
    private String merchantUid;
    private OrderStatus orderStatus;
    private int totalPrice;

}
