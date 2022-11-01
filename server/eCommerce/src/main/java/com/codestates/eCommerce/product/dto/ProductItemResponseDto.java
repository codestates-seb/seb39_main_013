package com.codestates.eCommerce.product.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class ProductItemResponseDto {
    private Long productItemId;
    private String size;
    private Integer stock;


    @Builder
    public ProductItemResponseDto(Long productItemId, String size, Integer stock) {
        this.productItemId = productItemId;
        this.size = size;
        this.stock = stock;
    }
}
