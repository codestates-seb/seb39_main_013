package com.codestates.eCommerce.order.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class ResponseDto {

    private OrderDto orderDto;
//    private Long orderId;
//    private Long memberId;
//    private String orderStatus;
//    private int deliveryFee;
//    private List<OrderProductDto> orderProductDtos;
//    private int totalPrice;
}
