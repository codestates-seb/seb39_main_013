package com.codestates.eCommerce.product.entity;

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
public class ProductHistory extends BaseEntity {
    @Id @GeneratedValue
    private Long productHistoryId;
    private Long productId;
    private String title;
    private String content;
}
