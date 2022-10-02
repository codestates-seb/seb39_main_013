package com.codestates.eCommerce.order.enums;

import lombok.Getter;

public enum ProductOrderStatus{
    ORDERED("주문/결제 상태",1),
    PREPARE("상품 준비중", 2),
    PICKUP("픽업된 상태",3),
    DELIVERY("배송중인 상태",4),
    COMPLETED("배송완료 상태",5);
    @Getter
    private final String status;

    @Getter
    private int step;
    ProductOrderStatus(String status,int step){
        this.status = status;
        this.step = step;
    }
}