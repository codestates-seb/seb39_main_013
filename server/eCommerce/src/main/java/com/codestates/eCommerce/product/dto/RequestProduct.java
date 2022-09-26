package com.codestates.eCommerce.product.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class RequestProduct {

    @Getter
    @AllArgsConstructor
    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    public static class Post {
        private Long managerId;
        private Long brandId;
        private String majorClass;
        private String subClass;
        private String name;
        private Integer price;
        private Integer stock;
        private String color;
        private String thumbnailImg;
        private String contentImage;
    }
}
