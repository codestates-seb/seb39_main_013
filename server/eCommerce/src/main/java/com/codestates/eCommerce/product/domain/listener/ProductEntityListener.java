package com.codestates.eCommerce.product.domain.listener;

import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.product.domain.entity.ProductHistory;
import com.codestates.eCommerce.product.domain.repository.ProductHistoryRepository;
import com.codestates.eCommerce.product.support.BeanUtils;

import javax.persistence.PostPersist;
import javax.persistence.PostUpdate;

public class ProductEntityListener {

    @PostPersist
    @PostUpdate
    public void preUpdate(Object o) {
        //err The dependencies of some of the beans in the application context form a cycle:
        // 해결 빈가져오기
        ProductHistoryRepository productHistoryRepository = BeanUtils.getBean(ProductHistoryRepository.class);
        Product product = (Product) o;
        ProductHistory productHistory = ProductHistory.create(product);
        productHistoryRepository.save(productHistory);
    }
}
