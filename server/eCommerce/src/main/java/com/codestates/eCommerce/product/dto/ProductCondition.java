package com.codestates.eCommerce.product.dto;

import lombok.*;

import javax.validation.constraints.Positive;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class ProductCondition {

    private int page;
    private int pageSize;
    private Long brandId;
    private String brandName;
    private String majorClass;
    private String name;
    private Integer maxPrice = 10000000;
    private Integer minPrice;
    private String color;
    private Integer stock;
    private String size;

    public void setPage(int page) {
        this.page = page-1;
    }
}
