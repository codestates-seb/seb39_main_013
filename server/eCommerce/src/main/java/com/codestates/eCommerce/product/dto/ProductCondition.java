package com.codestates.eCommerce.product.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;
import org.springframework.data.mapping.model.SnakeCaseFieldNamingStrategy;

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
    private Integer priceMax;
    private Integer priceMin;
    private String color;
    private Integer stock;
    private String size;


}
