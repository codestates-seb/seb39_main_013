package com.codestates.eCommerce.cart.entity;

import com.codestates.eCommerce.common.BaseEntity;
import com.codestates.eCommerce.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Cart extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartId;
//    @ManyToOne
//    @JoinColumn(name = "MEMBER_ID")
//    private Member member;
    private Long memberId;
    private Long productId;
    private int productQuantity;
    private boolean isWanted;
}
