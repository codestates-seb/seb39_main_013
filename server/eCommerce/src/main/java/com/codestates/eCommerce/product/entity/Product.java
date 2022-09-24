package com.codestates.eCommerce.product.entity;

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
public class Product extends BaseEntity {
    @Id
    @GeneratedValue
    private Long productId;
    private Long brandId;
    private String code;

    private String name;
    private String thumbnailImg;
    private String contentImg;
    private Integer price;
    private Integer stock;
    private Double review;
    private ProductColor productColor;

    public void decreaseStock(int quantity) {
        this.setStock(this.getStock() - quantity);
    }

    public enum ProductColor {}
}
