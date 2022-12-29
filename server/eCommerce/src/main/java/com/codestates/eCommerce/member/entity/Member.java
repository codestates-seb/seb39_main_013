package com.codestates.eCommerce.member.entity;

import com.codestates.eCommerce.common.BaseEntity;
import com.codestates.eCommerce.review.entity.Review;
import lombok.*;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Member extends BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;
    private String name;
    private String email;
    private String password;
    private String phone;
    private String nickname;
    private String homeAddress;
    private String zipcode;
    private String birthday;
    private String provider;
    private String providerId;
    private String profileImage;
    private int point;
    private int height;
    private int weight;
    private String role;


//    @OneToMany()
//    @JoinColumn(name = "MEMBER_ID")
//    private List<Cart> carts = new ArrayList<>();
//    @Enumerated(value = EnumType.STRING)
//    private MemberStatus memberStatus = MemberStatus.MEMBER;
//    @Getter @AllArgsConstructor
//    public enum MemberStatus {
//        MEMBER("회원"),
//        MANAGER("관리자"),
//        SECESSION("탈퇴");
//        private String status;
//    }

//    @Builder
    public Member(String password, String name, String email, String provider, String providerId, String role) {
        this.password = password;
        this.name = name;
        this.email = email;
        this.provider = provider;
        this.providerId = providerId;
        this.role = role;
    }
}
