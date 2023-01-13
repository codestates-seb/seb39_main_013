package com.codestates.eCommerce.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class RequestDto {
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {
        private Long memberId;
        private Long productId;
        @NotBlank(message = "질문 내용을 적어주세요.")  //필수 입력 검증 .by주원
        private String content;
        @NotBlank(message = "비밀번호를 입력해주세요.")  //필수 입력 검증 .by주원
        private String password;
        private boolean secret;

    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {
        private Long questionId;
        private Long memberId;
        private Long productId;
        @NotBlank(message = "수정 내용을 적어주세요.")  //필수 입력 검증 .by주원
        private String content;
        @NotBlank(message = "비밀번호를 입력해주세요.")  //필수 입력 검증 .by주원
        private String password;
        private boolean secret;
    }
}
