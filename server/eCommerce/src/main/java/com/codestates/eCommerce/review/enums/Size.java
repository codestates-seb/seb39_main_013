package com.codestates.eCommerce.review.enums;

import lombok.Getter;

public enum Size {
    SIZE_S("SMALL"),
    SIZE_M("MEDIUM"),
    SIZE_L("LARGE"),
    S_90("90"),
    S_95("95"),
    M_100("100"),
    L_105("105"),
    XL110("110");

    @Getter
    private final String size;

    Size(String size) {
        this.size = size;
    }
}