package com.codestates.eCommerce.product.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ProductItemResponseDto {
    private Long productItemId;
    private String size;
    private Integer stock;
}
