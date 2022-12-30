package com.codestates.eCommerce.question.mapper;

import com.codestates.eCommerce.question.dto.RequestDto;
import com.codestates.eCommerce.question.dto.ResponseDto;
import com.codestates.eCommerce.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question PostToQuestion(RequestDto.Post post);
    Question PatchToQuestion(RequestDto.Patch patch);
    ResponseDto.Response QuestionToResponse (Question question);
    List<ResponseDto.Response> QuestionsToResponseDtos(List<Question> questions);
}
