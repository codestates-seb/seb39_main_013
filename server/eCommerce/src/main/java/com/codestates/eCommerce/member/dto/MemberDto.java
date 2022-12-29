package com.codestates.eCommerce.member.dto;

import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class MemberDto {
    @Getter @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {
        @NotBlank
        private String password;
        @NotBlank
        private String name;
        @Email
        private String email;
        @Pattern(regexp = "^010-\\d{3,4}-\\d{4}$")
        private String phone;
        private String homeAddress;
        private String zipcode;
    }
    @Getter @AllArgsConstructor
    @Setter
    public static class Response {

        private Long memberId;
        private String name;
        private String email;
        private String phone;
        private String nickname;
        private String homeAddress;
        private String zipcode;
        private String birthday;
        private String profileImage;
        private int point;
        private int height;
        private int weight;
        private String role;
    }

    @Getter @Setter
    @AllArgsConstructor
    public static class Patch {
        private Long memberId;
        private String password;
        private String name;
        private String email;
        private String phone;
        private String homeAddress;
        private String zipcode;
        private String profileImage;
    }
}
