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
public class Review extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
    @Column(length = 3000, nullable = false) //필수입력값으로 false
    private String content;
    @Column(nullable = false)
    private String image;
    @Column(nullable = false)
    private int star_rating;
    @Column(nullable = false)
    private int height;
    @Column(nullable = false)
    private int weight;
    @Column(nullable = false)
    private Size size;
    @Column(nullable = false)
    private Color color;
    @Enumerated(EnumType.STRING)
    private ReviewStatus reviewStatus;


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
        REVIEW_COMPLETE (1,"고객님의 리뷰가 작성되었습니다."),
        REVIEW_EDITED (2,"고객님의 리뷰가 수정되었습니다."),
        REVIEW_DELETE (3,"고객님의 리뷰가 삭제되었습니다.");

        @Getter
        private int stepNumber;

        @Getter
        private String stepDescription;

        ReviewStatus(int stepNumber, String stepDescription) {
            this.stepNumber = stepNumber;
            this.stepDescription = stepDescription;
        }
    }
}
