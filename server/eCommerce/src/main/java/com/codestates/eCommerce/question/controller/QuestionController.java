package com.codestates.eCommerce.question.controller;

import com.codestates.eCommerce.common.dto.MultiResponseDto;
import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.question.dto.RequestDto;
import com.codestates.eCommerce.question.entity.Question;
import com.codestates.eCommerce.question.mapper.QuestionMapper;
import com.codestates.eCommerce.question.service.QuestionService;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/api/v1/questions")
@RequiredArgsConstructor
@Validated
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper questionMapper;


    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody RequestDto.Post post, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        Question question = questionService.createQuestion(questionMapper.PostToQuestion(post),principalDetails);
        question.setMemberId(principalDetails.getMember().getMemberId());
        return new ResponseEntity<>(new SingleResponseDto<>((question)),HttpStatus.CREATED);
    }

    @PatchMapping("/question-id")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive Long questionId,
                                        @Valid @RequestBody RequestDto.Patch patch) {
        patch.setQuestionId(questionId);
        Question question = questionService.patchQuestion(questionMapper.PatchToQuestion(patch), questionId);
        return new ResponseEntity<>(new SingleResponseDto<>(questionMapper.QuestionToResponse(question)),HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity findAllQuestion(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size) {
        Page<Question> pageQuestion = questionService.findAllQuestion(page - 1, size);
        List<Question> questionList = pageQuestion.getContent();
        return new ResponseEntity<>(new MultiResponseDto<>(questionMapper.QuestionsToResponseDtos(questionList), pageQuestion),HttpStatus.OK);
    }


    @DeleteMapping("/question-in")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive Long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
