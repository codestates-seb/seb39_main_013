package com.codestates.eCommerce.product.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;

import java.util.List;

@AllArgsConstructor
public class RequestDto {

    @Getter
    @Setter
    @AllArgsConstructor
    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    public static class Post {
        private Long brandId;
        private String brand;
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
    @Getter
    @Setter
    @AllArgsConstructor
    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    public static class Patch {
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

}
