package com.codestates.eCommerce.product.domain.entity;

import com.codestates.eCommerce.common.BaseEntity;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter @Setter @Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class ProductHistory extends BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productHistoryId;
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

    public static ProductHistory create(Product product) {
        ProductHistory productHistory = new ProductHistory();
        productHistory.setProductId(product.getProductId());
        productHistory.setBrandId(product.getBrandId());
        productHistory.setMajorClass(product.getMajorClass());
        productHistory.setSubClass(product.getSubClass());
        productHistory.setName(product.getName());
        productHistory.setPrice(product.getPrice());
        productHistory.setStock(product.getStock());
        productHistory.setColor(product.getColor());
        productHistory.setThumbnailImg(product.getThumbnailImg());
        productHistory.setContentImg(product.getContentImg());
        return productHistory;
    }
}
