package com.codestates.eCommerce.review.entity;


import com.codestates.eCommerce.common.BaseEntity;
import com.codestates.eCommerce.order.domain.entity.OrderProduct;
import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.review.dto.ReviewResponseDto;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static com.codestates.eCommerce.review.entity.QReview.review;


@Entity(name = "reviews")
@Getter @Setter
@NoArgsConstructor
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
    private int star_rating;
    private int height;
    private int weight;
    @Column(length = 10)
    private Size size;
    @Column(length = 10)
    private Color color;
    @Enumerated(value = EnumType.STRING)
    private StatusRecode statusRecode;


    public enum Size {
        SIZE_S("SMALL"),
        SIZE_M("MEDIUM"),
        SIZE_R("LARGE");

        private String size;
        Size(String size) {
            this.size = size;
        }
    }

    public enum Color {
        BLACK("블랙"),
        RED("레드"),
        WHITE("화이트"),
        BLUE("블루");

        private String color;
        Color(String color) {
            this.color = color;
        }
    }

    public enum StatusRecode {
        COMPLETE("처리가 완료되었습니다."),
        REVIEW_CREATE("리뷰가 작성되었습니다."),
        REVIEW_UPDATE("리뷰가 수정되었습니다."),
        REVIEW_DELETE("리뷰가 삭제되었습니다.");

        private String status;

        StatusRecode(String status) {
            this.status = status;
        }
    }


    @Builder  //불필요한 패턴이지만 Mapper + Builder 를 써보고자 했음
    public Review(String content, String image, int star_rating, int height, int weight, Size size, Color color,StatusRecode statusRecode) {
        this.content = content;
        this.image = image;
        this.star_rating = star_rating;
        this.height = height;
        this.weight = weight;
        this.size = size;
        this.color = color;
        this.statusRecode = statusRecode;
    }
}
