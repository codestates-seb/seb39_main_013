package com.codestates.eCommerce.order.entity;

import com.codestates.eCommerce.common.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderProduct extends BaseEntity {
    @Id @GeneratedValue
    private Long orderProductId;
    private Long orderId;
    private Long memberId;
    private Long productId;
    private int productQuantity;
    private int productPrice;
    private String productSize;
    private String productColor;
}
