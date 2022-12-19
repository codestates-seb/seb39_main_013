package com.codestates.eCommerce.review.dto;

import com.codestates.eCommerce.review.entity.Review;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;
import java.util.ArrayList;
import java.util.List;

@Getter
@AllArgsConstructor
public class ReviewResponseDto {
    private Long reviewId;
    private Long memberId;
    private String content;
    private String image;
    private int height;
    private int weight;
    private Review.Size size;
    private Review.Color color;
    private Review.StatusRecode statusRecode;
}

