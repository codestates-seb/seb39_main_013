package com.codestates.eCommerce.cart.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

public class CartDto {
    @Getter @AllArgsConstructor
    public static class Post {
        private Long productId;
        private int productQuantity;
        private boolean isWanted;
    }
    @Getter @AllArgsConstructor
    public static class Response {
        private Long cartId;
        private Long productId;
        private int productQuantity;
        private boolean isWanted;
    }
}
