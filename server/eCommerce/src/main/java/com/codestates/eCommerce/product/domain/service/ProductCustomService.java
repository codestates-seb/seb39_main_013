package com.codestates.eCommerce.product.domain.service;

import com.codestates.eCommerce.product.domain.repository.ProductRepositoryCustom;
import com.codestates.eCommerce.product.dto.ProductCondition;
import com.codestates.eCommerce.product.dto.ProductDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class ProductCustomService {
    private final ProductRepositoryCustom productRepositoryCustom;
    public Page<ProductDto> getProductPage(int page, int size, ProductCondition condition) {
    //        return productRepositoryCustom.searchPageSimple(PageRequest.of(page,size), condition);
        return productRepositoryCustom.searchPageSimple(PageRequest.of(page,size), condition);
    }
}