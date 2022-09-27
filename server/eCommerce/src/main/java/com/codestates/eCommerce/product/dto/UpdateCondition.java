package com.codestates.eCommerce.product.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UpdateCondition {
    private Long brandId;
    private String majorClass;
    private String subClass;
    private String name;
    private Integer price;
    private String color;
    private Integer stock;
    private String thumbnail;
    private String contentImage;
}
