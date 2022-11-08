package com.codestates.eCommerce.cart.entity;

import com.codestates.eCommerce.common.BaseEntity;
import com.codestates.eCommerce.member.entity.Member;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Cart extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartId;
//    @ManyToOne
//    @JoinColumn(name = "MEMBER_ID")
//    private Member member;
//    @Column(name = "MEMBER_ID")
    private Long memberId;
    @JoinColumn(name = "product_item_id")
    private Long productItemId;
    private int productQuantity;
    private boolean isWanted;
}
