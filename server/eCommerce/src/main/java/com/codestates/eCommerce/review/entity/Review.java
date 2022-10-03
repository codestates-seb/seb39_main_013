package com.codestates.eCommerce.review.entity;

import com.codestates.eCommerce.common.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Review extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;
    private Long memberId;
    private Long productId;
    private String content;
    private String image;
    private int star_rating;
    private int height;
    private int weight;
    private boolean status;
    private boolean changeInfo;
    private Size size;
    private Brightness brightness;
    private Color color;
    private Thickness thickness;
    private Gender gender;
    public enum Size {}
    public enum Brightness {}
    public enum Color {}
    public enum Thickness {}
    public enum Gender {}
}
