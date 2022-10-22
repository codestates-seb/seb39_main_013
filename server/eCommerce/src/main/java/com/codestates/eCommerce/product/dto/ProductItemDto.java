package com.codestates.eCommerce.product.dto;

import com.codestates.eCommerce.product.domain.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.persistence.ManyToOne;

@Getter
@AllArgsConstructor
public class ProductItemDto {
    private Long productItemId;
    private String size;
    private Integer stock;
}
