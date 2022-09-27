package com.codestates.eCommerce.product.domain.repository;

import com.codestates.eCommerce.product.dto.ProductDto;
import com.codestates.eCommerce.product.infrastructure.ProductCondition;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ProductRepositoryCustom {
    Page<ProductDto> searchPageSimple(Pageable pageable, ProductCondition condition);
}
