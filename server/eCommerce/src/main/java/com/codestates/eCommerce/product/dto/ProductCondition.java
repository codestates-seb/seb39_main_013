package com.codestates.eCommerce.product.dto;

import lombok.*;

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
    private Integer priceMax = 10000000;
    private Integer priceMin;
    private String color;
    private Integer stock;
    private String size;


}
