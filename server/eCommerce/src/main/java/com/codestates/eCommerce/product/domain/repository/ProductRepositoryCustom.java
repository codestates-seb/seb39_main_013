package com.codestates.eCommerce.product.domain.repository;

import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.product.dto.ProductDto;
import com.codestates.eCommerce.product.dto.ProductConditionDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ProductRepositoryCustom
{
    Page<ProductDto> searchPageSimple(ProductConditionDto condition);
    Page<ProductDto> searchProductPage(Pageable pageable, ProductConditionDto condition);
    List<ProductDto> getProduct(String name);
    Optional<Product> searchProductWithItemList(Long productId);
    Optional<Product> searchProductWithItem(Long productId, String size);

    List<ProductDto> getProductByName(String name);
}
