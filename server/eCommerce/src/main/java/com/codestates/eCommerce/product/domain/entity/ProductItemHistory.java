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
@Getter
@Setter
public class ProductItemHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productItemHistoryId;
    @ManyToOne
    private ProductHistory productHistory;

    private String size;
    private Integer stock;

}
