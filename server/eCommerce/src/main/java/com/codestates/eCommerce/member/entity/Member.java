package com.codestates.eCommerce.member.entity;

import com.codestates.eCommerce.common.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Member extends BaseEntity {
    @Id @GeneratedValue
    private Long memberId;
    private String password;
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
    private MemberStatus memberStatus;
    public enum MemberStatus {}
}
