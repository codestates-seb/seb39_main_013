package com.codestates.eCommerce.review.mapper;



import com.codestates.eCommerce.common.dto.MultiResponseDto;
import com.codestates.eCommerce.review.dto.RequestDto;
import com.codestates.eCommerce.review.dto.ResponseDto;
import com.codestates.eCommerce.review.entity.Review;
import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;


import java.util.List;

/**
 * Mapper: DTO class <-> review class 객체 변환해주는 역할
 * MapStruct 를 사용하면 인터페이스 구현 클래스를 자동생성해줌
 * Gradle - Tasks - build - build 실행 시 generated 패키지 생성
 *   .by 주원
 */
@Mapper(componentModel = "spring")
public interface ReviewMapper {
    Review postToReview(RequestDto.Post post);  //Post Dto 를 review 객체로 변환  .by주원
    Review patchToReview(RequestDto.Patch patch);  //patch Dto 를 review 객체로 변환  .by 주원
    ResponseDto.Response reviewToResponse(Review review);  //review 객체를 response Dto 로 변환  .by 주원
    List<ResponseDto.Response> reviewsToResponseDtos(List<Review> reviews);  //List형식의 reviews 객체들을 responseDtos 로 변환  .by 주원
}