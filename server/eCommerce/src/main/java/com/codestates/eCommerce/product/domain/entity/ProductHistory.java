package com.codestates.eCommerce.product.domain.entity;

import com.codestates.eCommerce.common.BaseEntity;
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
    @Type(type = "json")
    @Column(columnDefinition = "json")
    private List<String> thumbImages = new ArrayList<>();
    @Type(type = "json")
    @Column(columnDefinition = "json")
    private List<String> contentImages = new ArrayList<>();

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
        productHistory.setThumbImages(product.getThumbImages());
        productHistory.setContentImages(product.getContentImages());
        return productHistory;
    }
}
