package com.codestates.eCommerce.answer.repository;

import com.codestates.eCommerce.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
