package com.codestates.eCommerce.product.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProductResponseDto {
    private Long productId;
    private Long brandId;
    private String brandName;
    private String majorClass;
    private String name;
    private Integer price;
//    private Integer stock;
    private String color;
//    private String size;
    private List<ProductItemResponseDto> productItems;
    private List<String> thumbImages;
    private List<String> contentImages;

    @Builder

    public ProductResponseDto(Long productId, Long brandId, String brandName, String majorClass, String name, Integer price, String color, List<ProductItemResponseDto> productItems, List<String> thumbImages, List<String> contentImages) {
        this.productId = productId;
        this.brandId = brandId;
        this.brandName = brandName;
        this.majorClass = majorClass;
        this.name = name;
        this.price = price;
        this.color = color;
        this.productItems = productItems;
        this.thumbImages = thumbImages;
        this.contentImages = contentImages;
    }
}
