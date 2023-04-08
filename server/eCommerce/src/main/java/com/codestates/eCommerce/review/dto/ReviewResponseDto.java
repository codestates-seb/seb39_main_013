package com.codestates.eCommerce.review.dto;

import com.codestates.eCommerce.review.entity.Review;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReviewResponseDto {
    private Long memberId;
    private Long productId;
    private Long orderProductId;
    private String content;
    private String image;
    private int height;
    private int weight;
    private Review.Size size;
    private Review.Color color;
    private boolean status;
    private boolean changeInfo;
    private Review.ReviewStatus reviewStatus;
}
