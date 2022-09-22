package com.codestates.eCommerce.order.dto;

import com.codestates.eCommerce.order.enums.ProductOrderStatus;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class OrderProductDto {
    private Long orderProductId;
    private OrderDto order;
    private Long productId;
    private Integer productQuantity;
    private Integer productPrice;
    private String productSize;
    private String productColor;
    private ProductOrderStatus productOrderStatus;
}
