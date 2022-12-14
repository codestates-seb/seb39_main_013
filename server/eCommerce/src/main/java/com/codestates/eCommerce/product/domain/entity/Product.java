package com.codestates.eCommerce.product.domain.entity;

import com.codestates.eCommerce.common.BaseEntity;
import com.codestates.eCommerce.common.exception.product.ProductBusinessExcepion;
import com.codestates.eCommerce.common.exception.product.ProductExceptionCode;
import com.codestates.eCommerce.product.domain.listener.ProductEntityListener;
import com.codestates.eCommerce.review.entity.Review;
import com.vladmihalcea.hibernate.type.json.JsonType;
import lombok.*;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Table(
        name="product",
        uniqueConstraints={
                @UniqueConstraint(
                        name = "nameSize",
                        columnNames={"name", "size"}
                )
        }
)
@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@TypeDef(name = "json", typeClass = JsonType.class)
@EntityListeners(value = { ProductEntityListener.class})
public class Product extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @OneToMany(mappedBy = "product")
    private List<Review> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "product")
    private List<ProductHistory> productHistories;
    private Long brandId;
    private String brandName;
    private String majorClass;
    @Column(name = "name")
    private String name;
    private Integer price;
    private Integer stock;
    @Column(name = "size")
    private String size;
    private String color;


    @Type(type = "json")
    @Column(columnDefinition = "json")
    private List<String> thumbImages = new ArrayList<>();
    @Type(type = "json")
    @Column(columnDefinition = "json")
    private List<String> contentImages = new ArrayList<>();
//    private Double review;

    public static Product createProduct(Long brandId, String majorClass, String name, Integer price, Integer stock, String color, String size, List<String> thumbImages, List<String> contentImages) {
        Product product = new Product();
        product.setBrandId(brandId);
        product.setMajorClass(majorClass);
        product.setName(name);
        product.setPrice(price);
        product.setStock(stock);
        product.setColor(color);
        product.setSize(size);
        product.setThumbImages(thumbImages);
        product.setContentImages(contentImages);
        return product;
    }
    public void increaseStock(int quantity) {
        this.stock += quantity;
    }
    public void decreaseStock(int quantity) {
        if (this.stock < quantity) throw new ProductBusinessExcepion(this.productId, this.stock, ProductExceptionCode.NOT_ENOUGH_STOCK);
        this.stock -= quantity;
    }

}
