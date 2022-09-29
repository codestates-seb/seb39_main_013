package com.codestates.eCommerce.bookmark.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

public class BookmarkDto {
    @Getter @AllArgsConstructor
    public class Post {
        @NotBlank
        private Long productId;
    }

    @Getter @AllArgsConstructor
    public class Response {
        private Long productId;
    }
}
