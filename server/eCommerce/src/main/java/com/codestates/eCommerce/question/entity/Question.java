package com.codestates.eCommerce.question.entity;

import com.codestates.eCommerce.common.BaseEntity;
import com.codestates.eCommerce.product.domain.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "questions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Question extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;
    private Long memberId;
    @Lob @Basic(fetch = FetchType.LAZY)
    private String content;
    private boolean secret;
    @ManyToOne(cascade = CascadeType.PERSIST,fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private Product product;

}
