package com.codestates.eCommerce.review.enums;

import lombok.Getter;

public enum Color {
    BLACK("블랙"),
    RED("레드"),
    WHITE("화이트"),
    BLUE("블루");

    @Getter
    private String color;
    Color(String color) {
        this.color = color;
    }
}
