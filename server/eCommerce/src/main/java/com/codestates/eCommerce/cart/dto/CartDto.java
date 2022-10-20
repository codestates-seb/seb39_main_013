package com.codestates.eCommerce.cart.dto;

import com.codestates.eCommerce.product.dto.ProductResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

import javax.validation.constraints.NotNull;

public class CartDto {
    @Getter @AllArgsConstructor
    @ToString
    public static class Post {
        @NotNull
        private Long productItemId;
        @NotNull
        private int productQuantity;
        private boolean isWanted;
    }
    @Getter @AllArgsConstructor
    @ToString
    public static class Response {
        private Long cartId;
        private ProductResponseDto product;
        private int productQuantity;
        private boolean isWanted;
    }
}
