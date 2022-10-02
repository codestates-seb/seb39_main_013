package com.codestates.eCommerce.product.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.querydsl.core.annotations.QueryProjection;
import lombok.*;

import java.util.List;

//Q타입 전용 dto
@Getter
@Setter
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
@ToString
public class ProductDto {

    private Long productId;
    private Long brandId;
    private String brandName;
    private String majorClass;
    private String name;
    private Integer price;
    private Integer stock;
    private String color;
    private String size;
    private List<String> thumbImages;
    private List<String> contentImages;

    @QueryProjection
    public ProductDto(Long productId, Long brandId, String brandName, String majorClass, String name, Integer price, Integer stock, String color, String size, List<String> thumbImages, List<String> contentImages) {
        this.productId = productId;
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

