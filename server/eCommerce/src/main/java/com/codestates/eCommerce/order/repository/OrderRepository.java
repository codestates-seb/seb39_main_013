package com.codestates.eCommerce.order.repository;

import com.codestates.eCommerce.order.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
