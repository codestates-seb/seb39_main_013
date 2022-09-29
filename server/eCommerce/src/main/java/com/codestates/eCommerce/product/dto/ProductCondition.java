package com.codestates.eCommerce.product.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
@ToString
public class ProductCondition {

    private Long brandId;
    private String brandName;
    private String majorClass;
    private String name;
    private Integer priceMax;
    private Integer priceMin;
    private String color;
    private Integer stock;
    private String size;


}
