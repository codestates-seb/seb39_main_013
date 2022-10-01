package com.codestates.eCommerce.common.exception.product;

import lombok.Getter;

public class ProductBusinessExcepion extends RuntimeException{
    @Getter
    private final ProductExceptionCode exceptionCode;
    @Getter
    private final Long productId;
    @Getter
    private final Integer stock;
    public ProductBusinessExcepion(Long productId, Integer stock, ProductExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.productId = productId;
        this.stock = stock;
        this.exceptionCode = exceptionCode;
    }
}
