package com.codestates.eCommerce.order.dto;

import com.codestates.eCommerce.order.enums.ProductOrderStatus;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;

@Getter @Setter
@AllArgsConstructor
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class OrderProductDto {
    private Long orderProductId;
    private Long productId;
    private Integer productQuantity;
    private Integer productPrice;
    private String productSize;
    private String productColor;
    private ProductOrderStatus productOrderStatus;
}
