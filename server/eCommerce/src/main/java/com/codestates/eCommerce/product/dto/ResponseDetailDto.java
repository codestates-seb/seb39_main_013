package com.codestates.eCommerce.product.dto;

import com.codestates.eCommerce.product.VO.SizeInfo;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
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
public class ResponseDetailDto {
    private List<SizeInfo> info;
    private Long brandId;
    private String brandName;
    private String majorClass;
    private String name;
    private Integer price;
    private Integer stock;
    private String color;
    private List<String> thumbImages;
    private List<String> contentImages;
}
