package com.codestates.eCommerce.review.entity;


import com.codestates.eCommerce.common.BaseEntity;
import com.codestates.eCommerce.product.domain.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "reviews")
public class Review extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
    @Column(length = 3000)
    private String content;
    private String image;
    private String reviewCode;
    private int star_rating;
    private int height;
    private int weight;
    private Size size;
    private Color color;
    @Enumerated(value = EnumType.STRING)
    private ReviewStatus reviewStatus = ReviewStatus.REVIEW_COMPLETEE;
    private boolean status;
    private boolean changeInfo;
    private Brightness brightness;
    private Thickness thickness;
    private Gender gender;


    public enum Size {}
    public enum Brightness {}
    public enum Color {}
    public enum Thickness {}
    public enum Gender {}
    public enum ReviewStatus {
        REVIEW_COMPLETEE("리뷰를 조회합니다."),
        REVIEW_CREATE("리뷰가 작성되엇습니다."),
        REVIEW_UPDATE("리뷰가 수정되엇습니다.");

        @Getter
        private String status;

        ReviewStatus(String status) {
            this.status = status;
        }
    }

    public Review(String content, String image, int star_rating, int height, int weight, Size size, Color color, String reviewCode) {
        this.content = content;
        this.image = image;
        this.star_rating = star_rating;
        this.height = height;
        this.weight = weight;
        this.size = size;
        this.color = color;
        this.reviewCode = reviewCode;
    }
}
