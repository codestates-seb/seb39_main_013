package com.codestates.eCommerce.review.entity;


import com.codestates.eCommerce.common.BaseEntity;
import com.codestates.eCommerce.member.entity.Member;
import com.codestates.eCommerce.product.domain.entity.Product;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
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
    private int star_rating;
    private int height;
    private int weight;
    @Column(length = 10)
    private Size size;
    @Column(length = 10)
    private Color color;
    @Enumerated(value = EnumType.STRING)
    private ReviewStatus reviewStatus;
    private boolean status;
    private boolean changeInfo;
    private Gender gender;



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

    public enum Gender {
        MALE("남성"),
        FEMALE("여성");
        private String gender;

        Gender(String gender) {
            this.gender = gender;
        }
    }

    public enum ReviewStatus {
        COMPLETE("리뷰를 조회합니다."),
        REVIEW_CREATE("리뷰가 작성되었습니다."),
        REVIEW_UPDATE("리뷰가 수정되었습니다."),
        REVIEW_DELETE("리뷰가 삭제되었습니다.");

        private String status;
        ReviewStatus(String status) {
            this.status = status;
        }
    }



    public Review(String content, String image, int star_rating, int height, int weight, Size size, Color color) {
        this.content = content;
        this.image = image;
        this.star_rating = star_rating;
        this.height = height;
        this.weight = weight;
        this.size = size;
        this.color = color;
    }
}
