package com.codestates.eCommerce.review.entity;



import com.codestates.eCommerce.common.BaseEntity;
import com.codestates.eCommerce.member.entity.Member;
import com.codestates.eCommerce.product.domain.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name = "reviews")
public class Review extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;
    private Long memberId;
    @Column(nullable = false ,length = 3000)
    private String content;
    private String image;
    @Column(nullable = false)
    private Integer star_rating;
    @Column(nullable = false)
    private Integer height;
    @Column(nullable = false)
    private Integer weight;
    @Column(nullable = false)
    private Size size;
    @Column(nullable = false)
    private Color color;
    @ManyToOne(cascade = CascadeType.ALL ,fetch = FetchType.LAZY)  //,지연로딩
    @JoinColumn(name = "product_id")
    private Product product;


    @Enumerated(EnumType.STRING)
    @Column(length = 20, nullable = false)
    private StatusRecode statusRecode = StatusRecode.COMPLETE;


    public enum Size {
        SIZE_S("SMALL"),
        SIZE_M("MEDIUM"),
        SIZE_R("LARGE");

        @Getter
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

        @Getter
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

        @Getter
        private String status;

        StatusRecode(String status) {
            this.status = status;
        }
    }


      //불필요한 패턴이지만 Mapper + Builder 를 써보고자 했음
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
