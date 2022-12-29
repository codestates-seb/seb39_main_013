package com.codestates.eCommerce.review.dto;



import com.codestates.eCommerce.review.entity.Review;
import lombok.AllArgsConstructor;
import lombok.Getter;

public class ResponseDto {
    @Getter
    @AllArgsConstructor
    public static class Response {
        private Long reviewId;
        private Long memberId;
        private String content;
        private String image;
        private int height;
        private int weight;
        private Review.Size size;
        private Review.Color color;
        private Review.StatusRecode statusRecode;

        public void setStatusRecode(Review.StatusRecode statusRecode) {
            this.statusRecode = statusRecode;
        }
    }
}
