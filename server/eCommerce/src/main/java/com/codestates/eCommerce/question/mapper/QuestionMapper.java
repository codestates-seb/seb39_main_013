package com.codestates.eCommerce.question.mapper;

import com.codestates.eCommerce.question.dto.RequestDto;
import com.codestates.eCommerce.question.dto.ResponseDto;
import com.codestates.eCommerce.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question postToQuestion(RequestDto.Post post);
    Question patchToQuestion(RequestDto.Patch patch);
    ResponseDto.Response questionToResponse (Question question);
    List<ResponseDto.Response> questionsToResponseDtos(List<Question> questions);
}
