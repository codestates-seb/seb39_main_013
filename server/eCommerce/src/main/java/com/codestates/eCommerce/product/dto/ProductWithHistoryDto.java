package com.codestates.eCommerce.product.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.querydsl.core.annotations.QueryProjection;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class ProductWithHistoryDto {
    private ProductDto productDto;
    private List<ProductHistoryDto> productHistories = new ArrayList<>();

    @QueryProjection
    public ProductWithHistoryDto(ProductDto productDto, List<ProductHistoryDto> productHistories) {
        this.productDto = productDto;
        this.productHistories = productHistories;
    }
}
