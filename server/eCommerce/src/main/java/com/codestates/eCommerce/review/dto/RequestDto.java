package com.codestates.eCommerce.review.dto;

import com.codestates.eCommerce.review.entity.Review;
import com.codestates.eCommerce.review.enums.Color;
import com.codestates.eCommerce.review.enums.Size;
import com.codestates.eCommerce.review.enums.StatusRecode;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

public class RequestDto {
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {
        private Long reviewId;
        private Long writerId;
        private Long productId;
        @NotBlank (message = "최소 10자 이상의 리뷰내용을 입력해주세요.")
        private String content;
        private String image;
        private int height;
        private int weight;
        private int star_rating;
        private Size size;
        private Color color;
    }

    @Getter @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {
        private Long reviewId;
        private Long writerId;
        private Long productId;
        @NotBlank(message = "최소 10자 이상의 수정 내용을 입력해주세요.")
        private String content;
        private String image;
        private int star_rating;
        private int height;
        private int weight;
        private Size size;
        private Color color;
        private StatusRecode statusRecode;
    }
}
