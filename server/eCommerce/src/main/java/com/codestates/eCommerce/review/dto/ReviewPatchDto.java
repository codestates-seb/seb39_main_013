package com.codestates.eCommerce.review.dto;

import com.codestates.eCommerce.review.entity.Review;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ReviewPatchDto {
    @Positive
    private Long reviewId;
    private Long memberId;
    private Long productId;
    private Long orderProductId;
    @NotBlank(message = "최소 10자 이상의 수정 내용을 입력해주세요.")
    private String content;
    private String image;
    private String reviewCode;
    private int star_rating;
    private int height;
    private int weight;
    private Review.Size size;
    private Review.Color color;
    private Review.ReviewStatus reviewStatus;

    public String getReviewCode() {
        return reviewCode;
    }

    public Review.ReviewStatus getReviewStatus() {
        return reviewStatus;
    }
}