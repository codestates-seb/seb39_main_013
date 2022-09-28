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
    private String majorClass;
    private String subClass;
    private String name;
    private Integer price;
    private Integer stock;
    private String color;
    private List<String> thumbImages;
    private List<String> contentsImages;

    @QueryProjection
    public ProductDto(Long productId, Long brandId, String majorClass, String subClass, String name, Integer price, Integer stock, String color, List<String> thumbImages, List<String> contentsImages) {
        this.productId = productId;
        this.brandId = brandId;
        this.majorClass = majorClass;
        this.subClass = subClass;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.color = color;
        this.thumbImages = thumbImages;
        this.contentsImages = contentsImages;
    }


}
