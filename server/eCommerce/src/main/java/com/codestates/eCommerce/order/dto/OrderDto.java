package com.codestates.eCommerce.order.dto;

import com.codestates.eCommerce.order.enums.OrderStatus;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.querydsl.core.annotations.QueryProjection;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@ToString
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class OrderDto {
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
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

    @QueryProjection
    public OrderDto(Long orderId, Long buyerId, List<OrderProductDto> orderProducts, String buyerAddress, String buyerName, String buyerPostcode, String buyerTel, String merchantUid, OrderStatus orderStatus, int totalPrice, LocalDateTime createdAt, LocalDateTime modifiedAt) {
        this.orderId = orderId;
        this.buyerId = buyerId;
        this.orderProducts = orderProducts;
        this.buyerAddress = buyerAddress;
        this.buyerName = buyerName;
        this.buyerPostcode = buyerPostcode;
        this.buyerTel = buyerTel;
        this.merchantUid = merchantUid;
        this.orderStatus = orderStatus;
        this.totalPrice = totalPrice;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }
}
