package com.codestates.eCommerce.member.entity;

import com.codestates.eCommerce.common.BaseEntity;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
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
//    private MemberStatus memberStatus;
//    public enum MemberStatus{
//         회원 밴 , 회원 가능
//    }
//    @Builder
//    public Member(Long memberId, String name, String email, String password, String phone, String nickname, String homeAddress, String companyAddress, String birthday, String profileImage, int point, int height, int weight) {
//        this.memberId = memberId;
//        this.name = name;
//        this.email = email;
//        this.password = password;
//        this.phone = phone;
//        this.nickname = nickname;
//        this.homeAddress = homeAddress;
//        this.companyAddress = companyAddress;
//        this.birthday = birthday;
//        this.profileImage = profileImage;
//        this.point = point;
//        this.height = height;
//        this.weight = weight;
//    }
//
//    public static Member createMember(String name ){
//    }
}
