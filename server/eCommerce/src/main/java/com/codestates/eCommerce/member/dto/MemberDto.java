package com.codestates.eCommerce.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

public class MemberDto {
    @Getter @AllArgsConstructor
    public static class Post {
        private String password;
        private String name;
        private String email;
        private String phone;
    }
}
