package com.codestates.eCommerce.review.dto;

import com.codestates.eCommerce.review.entity.Review;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReviewRequestDto {
    private Long reviewId;
    private Long memberId;
    private Long productId;
    private Long orderProductId;

    @NotBlank(message = "최소 4자 이상의 입력이 필요합니다.")
    private String password;

    @NotBlank (message = "최소 10자 이상의 리뷰내용을 입력해주세요.")
    private String content;

    private String image;
    private String reviewCode;
    private int height;
    private int weight;
    private Review.Size size;
    private Review.Color color;
}