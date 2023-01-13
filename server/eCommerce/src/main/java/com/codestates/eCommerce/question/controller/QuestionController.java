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
    private final QuestionMapper mapper;


    //질문 등록 .by주원
    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody RequestDto.Post post, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        Question question = questionService.createQuestion(mapper.postToQuestion(post),principalDetails);
        question.setMemberId(principalDetails.getMember().getMemberId());
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionToResponse(question)), HttpStatus.CREATED);
    }

    //질문 수정 .by주원
    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive Long questionId,
                                        @Valid @RequestBody RequestDto.Patch patch,
                                        @AuthenticationPrincipal PrincipalDetails principalDetails) {
        patch.setMemberId(principalDetails.getMember().getMemberId());
        Question question = questionService.patchQuestion(mapper.patchToQuestion(patch), questionId);
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionToResponse(question)),HttpStatus.OK);
    }

    //전체 질문 조회 .by주원
    @GetMapping
    public ResponseEntity findAllQuestion(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size) {
        Page<Question> pageQuestion = questionService.findAllQuestion(page - 1, size);
        List<Question> questionList = pageQuestion.getContent();
        return new ResponseEntity<>(new MultiResponseDto<>(mapper.questionsToResponseDtos(questionList), pageQuestion),HttpStatus.OK);
    }

    //질문 삭제 .by주원
    @DeleteMapping("/{question-in}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive Long questionId,
                                         @AuthenticationPrincipal PrincipalDetails principalDetails) {
        questionService.deleteQuestion(principalDetails.getMember().getMemberId());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
