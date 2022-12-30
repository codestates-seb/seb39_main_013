package com.codestates.eCommerce.question.repository;

import com.codestates.eCommerce.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Optional <Question> findByQuestionId(Long questionId);
}
