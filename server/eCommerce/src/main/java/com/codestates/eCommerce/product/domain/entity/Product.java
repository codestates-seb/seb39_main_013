package com.codestates.eCommerce.product.domain.entity;

import com.codestates.eCommerce.common.BaseEntity;
import com.codestates.eCommerce.product.domain.listener.ProductEntityListener;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter @Setter @Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(value = { ProductEntityListener.class})
public class Product extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;
    private Long brandId;
    private String majorClass;
    private String subClass;
    private String name;
    private Integer price;
    private Integer stock;
    private String color;
    private String thumbnailImg;
    private String contentImg;
//    private Double review;

    public static Product createProduct(Long brandId, String majorClass, String subClass, String name, Integer price, Integer stock, String color, String thumbnailImg, String contentImg) {
        Product product = new Product();
        product.setBrandId(brandId);
        product.setMajorClass(majorClass);
        product.setSubClass(subClass);
        product.setName(name);
        product.setPrice(price);
        product.setStock(stock);
        product.setColor(color);
        product.setThumbnailImg(thumbnailImg);
        product.setContentImg(contentImg);
        return product;
    }
    public void decreaseStock(int quantity) {
        this.setStock(this.getStock() - quantity);
    }

}
