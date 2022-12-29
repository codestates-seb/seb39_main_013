package com.codestates.eCommerce.review.entity;



import com.codestates.eCommerce.common.BaseEntity;
import com.codestates.eCommerce.member.entity.Member;
import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.review.enums.Size;
import com.codestates.eCommerce.review.enums.StatusRecode;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.awt.*;


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
    private String image;
    private int star_rating;
    private int height;
    private int weight;
    private Size size;
    private Color color;
    @Enumerated(EnumType.STRING)
    @Column(length = 20, nullable = false)
    private StatusRecode statusRecode = StatusRecode.COMPLETE;
    @ManyToOne(cascade = CascadeType.ALL ,fetch = FetchType.LAZY)  //,지연로딩
    @JoinColumn(name = "product_id")
    private Product product;



    public Review(String content, String image, int star_rating, int height, int weight, StatusRecode statusRecode) {
        this.content = content;
        this.image = image;
        this.star_rating = star_rating;
        this.height = height;
        this.weight = weight;
        this.statusRecode = statusRecode;
    }
}
