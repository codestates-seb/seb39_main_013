package com.codestates.eCommerce.product.infrastructure;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class ProductCondition {

    private Long brandId;
    private String majorClass;
    private String subClass;
    private String name;
    private Integer priceMax;
    private Integer priceMin;
    private String color;
    private Integer stock;

}
