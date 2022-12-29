package com.codestates.eCommerce.review.dto;




import com.codestates.eCommerce.review.enums.Color;
import com.codestates.eCommerce.review.enums.Size;
import com.codestates.eCommerce.review.enums.StatusRecode;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class ResponseDto {
    @Getter @Setter
    @AllArgsConstructor
    public static class Response {
        private Long reviewId;
        private Long memberId;
        private Long productId;
        private String content;
        private String image;
        private int height;
        private int weight;
        private Size size;
        private Color color;
        private StatusRecode statusRecode;
    }
}
