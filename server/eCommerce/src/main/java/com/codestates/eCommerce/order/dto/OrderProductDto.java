package com.codestates.eCommerce.order.dto;

import com.codestates.eCommerce.order.enums.ProductOrderStatus;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.querydsl.core.annotations.QueryProjection;
import lombok.*;

@Getter @Setter
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class OrderProductDto {
    private Long orderProductId;
    private Long productId;
    private String productName;
    private Integer productQuantity;
    private Integer productPrice;
    private String productSize;
    private String productColor;
    private ProductOrderStatus productOrderStatus;

    @QueryProjection
    public OrderProductDto(Long orderProductId, Long productId,String productName, Integer productQuantity, Integer productPrice, String productSize, String productColor, ProductOrderStatus productOrderStatus) {
        this.orderProductId = orderProductId;
        this.productId = productId;
        this.productName = productName;
        this.productQuantity = productQuantity;
        this.productPrice = productPrice;
        this.productSize = productSize;
        this.productColor = productColor;
        this.productOrderStatus = productOrderStatus;
    }
}
