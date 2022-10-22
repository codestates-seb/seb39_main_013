package com.codestates.eCommerce.bookmark.dto;

import com.codestates.eCommerce.product.dto.ProductResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class BookmarkDto {
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {
        private Long productId;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private Long bookmarkId;
        private ProductResponseDto product;
    }
}
