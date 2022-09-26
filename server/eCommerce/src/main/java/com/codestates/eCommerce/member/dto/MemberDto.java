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
    }

}
