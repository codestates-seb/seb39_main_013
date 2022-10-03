package com.codestates.eCommerce.common.exception.product;

import lombok.Getter;

public enum ProductExceptionCode {
    NOT_ENOUGH_STOCK(422,"주문량이 남아있는 재고보다 많습니다.");

    @Getter
    private int status;

    @Getter
    private String message;

    ProductExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
