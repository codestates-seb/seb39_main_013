package com.codestates.eCommerce.order.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter @Setter
@AllArgsConstructor
@ToString
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class OrderRequestDto {

    private String buyerAddress;
    private String buyerName;
    private String buyerPostcode;
    private String buyerTel;
    private String merchantUid;
    private List<ProductInfo> products;

    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    @Setter @Getter
    @AllArgsConstructor
    public static class ProductInfo {
        private Long productId;
        private String productName;
        private Integer quantity;
        private Integer price;
        private String color;
        private String size;

    }
}
