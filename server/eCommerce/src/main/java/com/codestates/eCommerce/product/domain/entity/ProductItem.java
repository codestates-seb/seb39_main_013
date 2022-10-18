package com.codestates.eCommerce.product.domain.entity;

import com.codestates.eCommerce.common.exception.product.ProductBusinessExcepion;
import com.codestates.eCommerce.common.exception.product.ProductExceptionCode;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class ProductItem {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productItemId;

    @ManyToOne
    private Product product;

    private String size;
    private Integer stock;

    public void setProduct(Product product) {
        this.product = product;
        if (!product.getProductItems().contains(this)) {
            this.product.getProductItems().add(this);
        }
    }

    public void increaseStock(String size, int quantity) {
        if (this.size.equals(size)) {
            this.stock += quantity;
        }
    }
    public void decreaseStock(String size, int quantity) {
        if (this.stock < quantity) throw new ProductBusinessExcepion(this.product.getProductId(), this.stock, ProductExceptionCode.NOT_ENOUGH_STOCK);
        if (this.size.equals(size)){
            this.stock -= quantity;
        }
    }

    public void increaseStock(int quantity) {
        this.stock += quantity;
    }
    public void decreaseStock(int quantity) {
        if (this.stock < quantity) throw new ProductBusinessExcepion(this.product.getProductId(), this.stock, ProductExceptionCode.NOT_ENOUGH_STOCK);
        this.stock -= quantity;
    }
}
