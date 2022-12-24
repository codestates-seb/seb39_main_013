package com.codestates.eCommerce.review.mapper;



import com.codestates.eCommerce.review.dto.RequestDto;
import com.codestates.eCommerce.review.dto.ResponseDto;
import com.codestates.eCommerce.review.entity.Review;
import org.mapstruct.Mapper;

import java.util.List;
//DTO <-> Entity 변환
@Mapper(componentModel = "spring")
public interface ReviewMapper {
    Review postToReview(RequestDto.Post post);
    Review patchToReview(RequestDto.Patch patch);
    ResponseDto.Response reviewToResponse(Review review);
    List<ResponseDto.Response> reviewsToResponseDtos(List<Review> reviews);
}