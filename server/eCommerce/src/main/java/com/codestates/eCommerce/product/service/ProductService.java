package com.codestates.eCommerce.product.service;

import com.codestates.eCommerce.product.entity.Product;
import com.codestates.eCommerce.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    public void decreaseStock(Long prdocutId, Integer quantity) {
       Product product = productRepository.findById(prdocutId).orElseThrow(() -> new IllegalArgumentException("해당 상품은 없습니다."));
       product.decreaseStock();
    }
}
