package com.codestates.eCommerce.member.entity;

import com.codestates.eCommerce.common.BaseEntity;
import lombok.*;
import javax.persistence.*;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Member extends BaseEntity {
    @Id @GeneratedValue
    private Long memberId;
    @Column(nullable = false)
    private String name;
    private String email;
    private String password;
    private String phone;
    private String nickname;
    private String homeAddress;
    private String companyAddress;
    private String birthday;
    private String profileImage;
    private int point;
    private int height;
    private int weight;
    private String role;
//    @Enumerated(value = EnumType.STRING)
//    private MemberStatus memberStatus = MemberStatus.MEMBER;
//    @Getter @AllArgsConstructor
//    public enum MemberStatus {
//        MEMBER("회원"),
//        MANAGER("관리자"),
//        SECESSION("탈퇴");
//        private String status;
//    }
}