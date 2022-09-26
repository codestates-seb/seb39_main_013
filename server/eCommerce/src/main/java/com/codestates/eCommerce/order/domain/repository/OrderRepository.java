package com.codestates.eCommerce.order.domain.repository;

import com.codestates.eCommerce.order.domain.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OrderRepository extends JpaRepository<Order, Long> {
}
