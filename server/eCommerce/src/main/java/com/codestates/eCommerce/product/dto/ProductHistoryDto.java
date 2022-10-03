package com.codestates.eCommerce.product.dto;

import com.codestates.eCommerce.product.domain.entity.Product;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.querydsl.core.annotations.QueryProjection;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class ProductHistoryDto {
    private Long productHistoryId;
    private Long brandId;
    private String brandName;
    private String majorClass;
    private String name;
    private Integer price;
    private Integer stock;
    private String color;
    private String size;
    private List<String> thumbImages = new ArrayList<>();
    private List<String> contentImages = new ArrayList<>();

    @QueryProjection
    public ProductHistoryDto(Long productHistoryId, Long brandId, String brandName, String majorClass, String name, Integer price, Integer stock, String color, String size, List<String> thumbImages, List<String> contentImages) {
        this.productHistoryId = productHistoryId;
        this.brandId = brandId;
        this.brandName = brandName;
        this.majorClass = majorClass;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.color = color;
        this.size = size;
        this.thumbImages = thumbImages;
        this.contentImages = contentImages;
    }
}
