package com.codestates.eCommerce.payment.entity;

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
public class PaymentHistory extends BaseEntity {
    @Id @GeneratedValue
    private Long paymentHistoryId;
    private int price;
    private Status status;
    public enum Status {}
}
