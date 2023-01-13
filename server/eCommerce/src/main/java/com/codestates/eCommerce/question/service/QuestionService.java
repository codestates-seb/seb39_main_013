package com.codestates.eCommerce.question.service;

import com.codestates.eCommerce.common.exception.BusinessLogicException;
import com.codestates.eCommerce.common.exception.ExceptionCode;
import com.codestates.eCommerce.member.entity.Member;
import com.codestates.eCommerce.member.service.MemberService;
import com.codestates.eCommerce.question.entity.Question;
import com.codestates.eCommerce.question.enums.Status;
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
import static com.codestates.eCommerce.review.entity.QReview.review;

@Service
@Transactional
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;

    //질문 작성 시 실행되는 메서드 .by주원
    public Question createQuestion(Question question,PrincipalDetails principalDetails) {
        question.setMemberId(principalDetails.getMember().getMemberId());  //로그인한 사용자 정보 가져오기 .by주원
        question.setStatus(Status.COMPLETE);  //처리완료 상태 설정 .by주원
        return questionRepository.save(question);  // DB 저장 .by주원
    }

    //질문 수정 시 실행되는 메서드 .by주원

    public Question patchQuestion(Question question, Long questionId) {
        Question patchQuestion = findVerifiedQuestion(questionId);
        if (question.getContent() != null) patchQuestion.setContent(question.getContent());  //null 값이 아닐경우 콘텐츠 내용 저장 .by주원
        return questionRepository.save(patchQuestion);   //DB 저장 .by주원
    }

    //전체 질문 조회 메서드 .by주원
    @Transactional(readOnly = true)
    public Page<Question> findAllQuestion(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size,
                Sort.by("questionId").descending()));
    }

    //질문 삭제 메서드 .by주원
    public void deleteQuestion(Long questionId) {
        Question deleteQuestion = findVerifiedQuestion(questionId);
        deleteQuestion.setStatus(Status.QUESTION_DELETE);
        questionRepository.save(deleteQuestion);
    }

    //질문이 있는지 검증 .by주원
    @Transactional(readOnly = true)
    public Question findVerifiedQuestion(Long questionId) {
        Optional <Question> question = questionRepository.findByQuestionId(questionId);
        Question findQuestion = question.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }
}
