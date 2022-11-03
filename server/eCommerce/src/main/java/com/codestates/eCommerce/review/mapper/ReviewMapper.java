package com.codestates.eCommerce.review.mapper;

import com.codestates.eCommerce.review.dto.ReviewPatchDto;
import com.codestates.eCommerce.review.dto.ReviewRequestDto;
import com.codestates.eCommerce.review.dto.ReviewResponseDto;
import com.codestates.eCommerce.review.entity.Review;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring") //Spring 빈 등록
public interface ReviewMapper {
    Review reviewRequestDtoToReview(ReviewRequestDto reviewRequestDto);  //RequestDto -> review 로 변환
    Review reviewPatchDtoToReview(ReviewPatchDto reviewPatchDto);  //PatchDto -> review 로 변환
    ReviewResponseDto reviewToReviewResponseDto(Review review);  //ResponseDto -> review 로 변환
    List<ReviewResponseDto> reviewsToReviewResponseDtos(List<Review> reviews);
}