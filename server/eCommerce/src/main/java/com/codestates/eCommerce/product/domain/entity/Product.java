package com.codestates.eCommerce.product.domain.entity;

import com.codestates.eCommerce.common.BaseEntity;
import com.codestates.eCommerce.product.domain.listener.ProductEntityListener;
import com.fasterxml.jackson.annotation.JsonAlias;
import com.vladmihalcea.hibernate.type.json.JsonType;
import lombok.*;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@TypeDef(name = "json", typeClass = JsonType.class)
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
    @Type(type = "json")
    @Column(columnDefinition = "json")
    private List<String> thumbImages = new ArrayList<>();
    @Type(type = "json")
    @Column(columnDefinition = "json")
    private List<String> contentImages = new ArrayList<>();
//    private Double review;

    public static Product createProduct(Long brandId, String majorClass, String subClass, String name, Integer price, Integer stock, String color, List<String> thumbImages, List<String> contentImages) {
        Product product = new Product();
        product.setBrandId(brandId);
        product.setMajorClass(majorClass);
        product.setSubClass(subClass);
        product.setName(name);
        product.setPrice(price);
        product.setStock(stock);
        product.setColor(color);
        product.setThumbImages(thumbImages);
        product.setContentImages(contentImages);
        return product;
    }
    public void increaseStock(int quantity) {
        this.stock += quantity;
    }
    public void decreaseStock(int quantity) {
        this.stock -= quantity;
    }

}
