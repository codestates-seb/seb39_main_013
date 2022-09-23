package com.codestates.eCommerce.order.enums;

import lombok.Getter;

public enum OrderStatus {
    ORDERED("주문완료",1),
    DELIVERY("배달중",2),
    ALL_DELIVERED("배달 완료",3);
    OrderStatus(String status, int step) {
        this.status = status;
        this.step = step;
    }
    @Getter
    private final String status;
    @Getter
    private final int step;
}
