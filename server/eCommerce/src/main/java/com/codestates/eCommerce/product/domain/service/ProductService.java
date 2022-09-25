package com.codestates.eCommerce.product.domain.service;

import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.product.domain.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ProductService {


    private final ProductRepository productRepository;

    public Product save(Product product){
        return productRepository.save(product);
    }

    public void decreaseStock(Long productId, Integer quantity) {
       Product product = productRepository.findById(productId).orElseThrow(() -> new IllegalArgumentException("해당 상품은 없습니다."));
       product.decreaseStock(quantity);
    }

    public Product getProductById(Long productId){
        return productRepository.findById(productId).orElseThrow();
    }


}
