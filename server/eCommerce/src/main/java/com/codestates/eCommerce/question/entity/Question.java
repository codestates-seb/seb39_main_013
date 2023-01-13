package com.codestates.eCommerce.question.entity;

import com.codestates.eCommerce.common.BaseEntity;
import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.question.enums.Status;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

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
    @Column(nullable = false ,length = 3000)
    private String content;
    private String password;
    private boolean secret;
    @Enumerated(EnumType.STRING)
    @Column(insertable = true,updatable = true)
    private Status status;
    @ManyToOne(cascade = CascadeType.PERSIST,fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private Product product;
}
