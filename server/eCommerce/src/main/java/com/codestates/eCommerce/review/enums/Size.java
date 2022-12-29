package com.codestates.eCommerce.review.enums;

import lombok.Getter;

public enum Size {
    SIZE_S("SMALL"),
    SIZE_M("MEDIUM"),
    SIZE_L("LARGE");

    @Getter
    private String size;

    Size(String size) {
        this.size = size;
    }
}
