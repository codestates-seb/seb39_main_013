package com.codestates.eCommerce.product.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class ResponseDto {
    private Long productId;
    private Long brandId;
    private String majorClass;
    private String subClass;
    private String name;
    private Integer price;
    private Integer stock;
    private String color;
    private List<String> thumbImages;
    private List<String> contentImages;
}
