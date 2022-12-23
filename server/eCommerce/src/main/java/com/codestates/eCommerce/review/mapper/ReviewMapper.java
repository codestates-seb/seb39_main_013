package com.codestates.eCommerce.review.mapper;

import com.codestates.eCommerce.review.dto.ReviewPatchDto;
import com.codestates.eCommerce.review.dto.ReviewRequestDto;
import com.codestates.eCommerce.review.dto.ReviewResponseDto;
import com.codestates.eCommerce.review.entity.Review;
import org.mapstruct.Mapper;

import java.util.List;
//DTO <-> Entity 변환
@Mapper(componentModel = "spring")
public interface ReviewMapper {
    Review reviewRequestDtoToReview(ReviewRequestDto reviewRequestDto);
    Review reviewPatchDtoToReview(ReviewPatchDto reviewPatchDto);
    ReviewResponseDto reviewToReviewResponseDto(Review review);
//    List<ReviewResponseDto> reviewsToReviewResponseDtos(List<Review> reviews);
}