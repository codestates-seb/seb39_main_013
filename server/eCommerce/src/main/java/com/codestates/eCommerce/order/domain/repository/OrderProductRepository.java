package com.codestates.eCommerce.order.domain.repository;

import com.codestates.eCommerce.order.domain.entity.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderProductRepository extends JpaRepository<OrderProduct, Long> {
}
