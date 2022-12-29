package com.codestates.eCommerce.review.enums;

import lombok.Getter;

public enum Color {
    WHITE("화이트"),
    BLACK("블랙"),
    BLUE("블루"),
    RED("레드");

    @Getter
    private final String Color;

    Color(String color) {
        Color = color;
    }
}
