package com.codestates.eCommerce.order.infrastructure;

import com.codestates.eCommerce.order.domain.Order;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OrderRepository extends JpaRepository<Order, Long> {
}
