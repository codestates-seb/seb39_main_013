package com.codestates.eCommerce.review.entity;



import com.codestates.eCommerce.common.BaseEntity;
import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.review.enums.StatusRecode;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Entity(name = "REVIEWS")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Review extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;
    private Long memberId;
    @Column(nullable = false ,length = 3000)
    private String content;
    @Lob @Basic(fetch = FetchType.LAZY)
    private String image;
    @Column(nullable = false)
    private int star_rating;
    @Column(nullable = false)
    private int height;
    @Column(nullable = false)
    private int weight;
    @Column(nullable = false)
    private String size;
    @Column(nullable = false)
    private String color;
    @Enumerated(EnumType.STRING)
    @Column(insertable = true,updatable = true)
    private StatusRecode statusRecode = StatusRecode.COMPLETE;
    @ManyToOne(cascade = CascadeType.PERSIST ,fetch = FetchType.LAZY)  //,지연로딩
    @JoinColumn(name = "product_id")
    private Product product;
}
