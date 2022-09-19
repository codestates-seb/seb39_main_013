package com.codestates.eCommerce.order.repository;

import com.codestates.eCommerce.order.entity.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderProductRepository extends JpaRepository<OrderProduct, Long> {
}
