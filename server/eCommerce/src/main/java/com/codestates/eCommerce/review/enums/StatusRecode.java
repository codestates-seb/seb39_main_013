package com.codestates.eCommerce.review.enums;

import lombok.Getter;

//enum 타입 .by주원

public enum StatusRecode {
    REVIEW_COMPLETE("완료되었습니다."),
    REVIEW_DELETE("리뷰가 삭제되었습니다.");

    @Getter
    private String status;

    StatusRecode(String status) {
        this.status = status;
    }
}