package com.codestates.eCommerce.review.dto;

import com.codestates.eCommerce.review.entity.Review;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReviewResponseDto {
    private Long reviewId;
    private Long memberId;
    private Long productId;
    private Long orderProductId;
    private String content;
    private String image;
    @NotBlank
    @Pattern(regexp = "^([A-Za-z]){3}$",
            message = "리뷰 코드는 3자리 영문이어야 합니다.")
    private String reviewCode;
    private int height;
    private int weight;
    private Review.Size size;
    private Review.Color color;
    private boolean status;
    private boolean changeInfo;
    private Review.ReviewStatus reviewStatus;

    public String getReviewCode() {
        return reviewCode;
    }

    public Review.ReviewStatus getReviewStatus() {
        return reviewStatus;
    }
}
