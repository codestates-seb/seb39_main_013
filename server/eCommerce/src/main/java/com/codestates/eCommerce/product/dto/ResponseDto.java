package com.codestates.eCommerce.product.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class ResponseDto {
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
}
