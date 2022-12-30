package com.codestates.eCommerce.question.service;

import com.codestates.eCommerce.common.exception.BusinessLogicException;
import com.codestates.eCommerce.common.exception.ExceptionCode;
import com.codestates.eCommerce.question.entity.Question;
import com.codestates.eCommerce.question.repository.QuestionRepository;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static com.codestates.eCommerce.question.entity.QQuestion.question;

@Service
@Transactional
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;

    public Question createQuestion(Question question, PrincipalDetails principalDetails) {
        question.setMemberId(principalDetails.getMember().getMemberId());
        return questionRepository.save(question);
    }


    public Question patchQuestion(Question question, Long questionId) {
        Question patchQuestion = findVerifiedQuestion(questionId);
        if (question.getContent() != null) patchQuestion.setContent(question.getContent());
        return questionRepository.save(patchQuestion);
    }

    public Page<Question> findAllQuestion(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size,
                Sort.by("questionId").descending()));
    }

    public void deleteQuestion(Long questionId) {
        Question deleteQuestion = findVerifiedQuestion(questionId);
        questionRepository.save(deleteQuestion);
    }

    public Question findVerifiedQuestion(Long questionId) {
        Optional <Question> question =questionRepository.findByQuestionId(questionId);
        Question findQuestion = question.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }
}
