package com.codestates.eCommerce.question.enums;

import lombok.Getter;
//enum 타입 .by주원
public enum Status {
    COMPLETE("요청이 완료되었습니다."),
    QUESTION_DELETE("질문이 삭제되었습니다.");

    @Getter
    private String status;

    Status(String status) {
        this.status = status;
    }
}
