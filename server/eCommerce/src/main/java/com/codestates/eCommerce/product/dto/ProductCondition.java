package com.codestates.eCommerce.product.dto;

import lombok.*;

import javax.validation.constraints.Positive;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class ProductCondition {

    int page;
    int pageSize;
    private Long brandId;
    private String brandName;
    private String majorClass;
    private String name;
    private Integer maxPrice;
    private Integer minPrice;
    private String color;
    private Integer stock;
    private String size;


}
