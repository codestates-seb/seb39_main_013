package com.codestates.eCommerce.review.dto;



import com.codestates.eCommerce.review.enums.StatusRecode;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;


public class RequestDto {
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {
        private Long memberId;
        @NotBlank (message = "최소 10자 이상의 리뷰내용을 입력해주세요.")  //필수 입력 검증 .by주원
        private String content;
        private String image;
        private int height;
        private int weight;
        private int star_rating;
        private String size;
        private String color;
    }

    @Getter @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {
        private Long reviewId;
        private Long memberId;
        @NotBlank(message = "최소 10자 이상의 수정 내용을 입력해주세요.")  //필수 입력 검증 .by주원
        private String content;
        private String image;
        private int star_rating;
        private int height;
        private int weight;
        private String size;
        private String color;

    }
}
