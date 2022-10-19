package com.codestates.eCommerce.product.domain.repository;

import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.product.dto.ProductDto;
import com.codestates.eCommerce.product.dto.ProductCondition;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ProductRepositoryCustom
{
    Page<ProductDto> searchPageSimple(Pageable pageable, ProductCondition condition);
    Page<ProductDto> searchProductPage(Pageable pageable, ProductCondition condition);
    List<ProductDto> getProduct(String name);
    List<Product> searchProductWithItemList(Long productId);
    List<Product> searchProductWithItem(Long productId, String size);
}
