package com.codestates.eCommerce.product.domain.service;

import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.product.domain.repository.ProductRepository;
import com.codestates.eCommerce.product.domain.repository.ProductRepositoryCustom;
import com.codestates.eCommerce.product.dto.ProductDto;
import com.codestates.eCommerce.product.infrastructure.ProductCondition;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ProductService {


    private final ProductRepository productRepository;
    private final ProductRepositoryCustom productRepositoryCustom;
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

    public Page<ProductDto> getProductPage(int page, int size, ProductCondition condition) {
//        return productRepositoryCustom.searchPageSimple(PageRequest.of(page,size), condition);
        return productRepositoryCustom.searchPageSimple(PageRequest.of(page,size), condition);
    }

}
