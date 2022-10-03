package com.codestates.eCommerce.cart.dto;

import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.product.dto.ResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

import javax.validation.constraints.NotNull;

public class CartDto {
    @Getter @AllArgsConstructor
    @ToString
    public static class Post {
        @NotNull
        private Long productId;
        @NotNull
        private int productQuantity;
        private boolean isWanted;
    }
    @Getter @AllArgsConstructor
    @ToString
    public static class Response {
        private Long cartId;
        private ResponseDto product;
        private int productQuantity;
        private boolean isWanted;
    }
}
