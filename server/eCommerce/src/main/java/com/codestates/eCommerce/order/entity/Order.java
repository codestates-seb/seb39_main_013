package com.codestates.eCommerce.order.entity;

import com.codestates.eCommerce.common.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name = "ORDERS")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Order extends BaseEntity {
    @Id @GeneratedValue
    private Long orderId;
    private Long memberId;
    private Long BrandId;
    private String address;
    private int deliveryFee;
    private int usedPoint;
    private int totalPrice;
    private Status status;
    public enum Status {}
}
