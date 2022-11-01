package com.codestates.eCommerce.product.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
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

    @Builder
    public ProductConditionDto(Integer page, Integer pageSize, Long brandId, String brandName, String majorClass, String name, Integer maxPrice, Integer minPrice, String color) {
        this.page = page;
        this.pageSize = pageSize;
        this.brandId = brandId;
        this.brandName = brandName;
        this.majorClass = majorClass;
        this.name = name;
        this.maxPrice = maxPrice;
        this.minPrice = minPrice;
        this.color = color;
    }

    public void setPage(int page) {
        this.page = page-1;
    }
}
