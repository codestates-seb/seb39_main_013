package com.codestates.eCommerce.review.enums;

import lombok.Getter;

public enum StatusRecode {
    COMPLETE("처리가 완료되었습니다."),
    REVIEW_CREATE("리뷰가 작성되었습니다."),
    REVIEW_UPDATE("리뷰가 수정되었습니다."),
    REVIEW_DELETE("리뷰가 삭제되었습니다.");

    @Getter
    private final String status;

    StatusRecode(String status) {
        this.status = status;
    }
}