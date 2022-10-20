package com.codestates.eCommerce.cart.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import org.hibernate.annotations.Type;

import javax.persistence.Column;
import java.util.ArrayList;
import java.util.List;

@Getter
@ToString
public class CartItem {

    private Long cartId;
    private Long productId;
    private Long productItemId;
    private String size;
    private Integer stock;
    private Long brandId;
    private String brandName;
    private String majorClass;
    private String name;
    private Integer price;
    private String color;
    private List<String> thumbImages = new ArrayList<>();
    private List<String> contentImages = new ArrayList<>();

    @QueryProjection
    public CartItem(Long cartId, Long productId, Long productItemId, String size, Integer stock, Long brandId, String brandName, String majorClass, String name, Integer price, String color, List<String> thumbImages, List<String> contentImages) {
        this.cartId = cartId;
        this.productId = productId;
        this.productItemId = productItemId;
        this.size = size;
        this.stock = stock;
        this.brandId = brandId;
        this.brandName = brandName;
        this.majorClass = majorClass;
        this.name = name;
        this.price = price;
        this.color = color;
        this.thumbImages = thumbImages;
        this.contentImages = contentImages;
    }

    @QueryProjection
    public CartItem(Long cartId, Long productId, Long productItemId, Long brandId, String brandName, String majorClass, String name, Integer price, String color, List<String> thumbImages, List<String> contentImages) {
        this.cartId = cartId;
        this.productId = productId;
        this.productItemId = productItemId;
        this.brandId = brandId;
        this.brandName = brandName;
        this.majorClass = majorClass;
        this.name = name;
        this.price = price;
        this.color = color;
        this.thumbImages = thumbImages;
        this.contentImages = contentImages;
    }

    @QueryProjection
    public CartItem(Long cartId, Long productId, Long brandId, String brandName, String majorClass, String name, Integer price, String color, List<String> thumbImages, List<String> contentImages) {
        this.cartId = cartId;
        this.productId = productId;
        this.brandId = brandId;
        this.brandName = brandName;
        this.majorClass = majorClass;
        this.name = name;
        this.price = price;
        this.color = color;
        this.thumbImages = thumbImages;
        this.contentImages = contentImages;
    }
}
