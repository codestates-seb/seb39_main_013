package com.codestates.eCommerce.product.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@AllArgsConstructor
public class RequestDto {

    @Getter
    @AllArgsConstructor
    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    public static class Post {
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
    @Getter
    @AllArgsConstructor
    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    public static class Patch {
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

}
