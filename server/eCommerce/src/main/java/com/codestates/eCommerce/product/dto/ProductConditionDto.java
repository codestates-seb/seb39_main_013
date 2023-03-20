package com.codestates.eCommerce.product.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;

@Getter
@Setter
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
@ToString
public class ProductConditionDto {
    private Integer page;
    private Integer pageSize;
    private Long brandId;
    private String brandName;
    private String majorClass;
    private String name;
    private Integer maxPrice = 10000000;
    private Integer minPrice;
    private String color;

    public void setPage(int page) {
        this.page = page-1;
    }
}
