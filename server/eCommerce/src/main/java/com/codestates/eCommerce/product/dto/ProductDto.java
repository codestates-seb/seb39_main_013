package com.codestates.eCommerce.product.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.querydsl.core.annotations.QueryProjection;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class ProductDto {

    private Long productId;
    private Long brandId;
    private String majorClass;
    private String subClass;
    private String name;
    private Integer price;
    private Integer stock;
    private String color;
    private String thumbnail;
    private String contentImage;

    @QueryProjection
    public ProductDto(Long productId, Long brandId, String name, String majorClass, String subClass, Integer price, Integer stock, String color, String thumbnail, String contentImage) {
        this.productId = productId;
        this.brandId = brandId;
        this.name = name;
        this.majorClass = majorClass;
        this.subClass = subClass;
        this.price = price;
        this.stock = stock;
        this.color = color;
        this.thumbnail = thumbnail;
        this.contentImage = contentImage;
    }


}

