package com.codestates.eCommerce.question.repository;

import com.codestates.eCommerce.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
