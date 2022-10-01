package com.codestates.eCommerce.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class MemberDto {
    @Getter @AllArgsConstructor
    public static class Post {
        @NotBlank
        private String password;
        @NotBlank
        private String name;
        @Email
        private String email;
        @Pattern(regexp = "^010-\\d{3,4}-\\d{4}$")
        private String phone;
    }

    @Getter @AllArgsConstructor
    public static class Response {
        private Long memberId;
        private String name;
        private String email;
        private String phone;
        private String nickname;
        private String homeAddress;
        private String companyAddress;
        private String birthday;
        private String image;
        private int point;
        private int height;
        private int weight;
        private String role;
    }

}
