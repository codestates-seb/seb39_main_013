package com.codestates.eCommerce.common.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EXISTS(409, "Member exists"),
    CART_NOT_FOUND(404, "Cart not found"),
    BOOKMARK_NOT_FOUND(404, "Bookmark not found"),
    PRODUCT_NOT_FOUND(404, "Coffee not found"),
    EXPIRED_TOKEN(410, "Token Expired"),
    REVIEW_NOT_FOUND(404,"Review not found");

//    PRODUCT_EXISTS(409, "Coffee Code exists"),
//    ORDER_NOT_FOUND(404, "Order not found"),
//    CANNOT_CHANGE_ORDER(403, "Order can not change"),
//    NOT_IMPLEMENTATION(501, "Not Implementation"),
//    INVALID_MEMBER_STATUS(400, "Invalid member status");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
