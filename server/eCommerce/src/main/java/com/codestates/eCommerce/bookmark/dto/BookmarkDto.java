package com.codestates.eCommerce.bookmark.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

public class BookmarkDto {
    @Getter @AllArgsConstructor
    public static class Post {
        @NotBlank
        private Long productId;
    }

    @Getter @AllArgsConstructor
    public static class Response {
        private Long bookmarkId;
        private Long productId;
    }
}
