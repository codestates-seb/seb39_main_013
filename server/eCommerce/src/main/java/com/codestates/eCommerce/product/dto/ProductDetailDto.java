package com.codestates.eCommerce.product.dto;

import com.codestates.eCommerce.product.VO.SizeInfo;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.querydsl.core.annotations.QueryProjection;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;
@Getter
@Setter
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
@ToString
public class ProductDetailDto {
    private Long brandId;
    private String brandName;
    private String majorClass;
    private String name;
    private Integer price;
    private Integer stock;
    private String color;
    private List<SizeInfo> info;
    private List<String> thumbImages;
    private List<String> contentsImages;

    public ProductDetailDto(Long brandId, String brandName, String majorClass, String name, Integer price, Integer stock, String color, List<SizeInfo> info, List<String> thumbImages, List<String> contentsImages) {
        this.brandId = brandId;
        this.brandName = brandName;
        this.majorClass = majorClass;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.color = color;
        this.info = info;
        this.thumbImages = thumbImages;
        this.contentsImages = contentsImages;
    }
}
