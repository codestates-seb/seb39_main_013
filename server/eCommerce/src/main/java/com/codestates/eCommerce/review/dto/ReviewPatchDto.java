package com.codestates.eCommerce.review.dto;

import com.codestates.eCommerce.review.entity.Review;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ReviewPatchDto {
    private Long reviewId;

    @NotBlank(message = "최소 10자 이상의 수정 내용을 입력해주세요.")
    private String content;

    private String image;
    private int star_rating;
    private int height;
    private int weight;
    private Review.Size size;
    private Review.Color color;
    private Review.ReviewStatus reviewStatus;
}