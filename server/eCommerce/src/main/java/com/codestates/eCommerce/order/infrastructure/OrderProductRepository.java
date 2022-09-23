package com.codestates.eCommerce.order.infrastructure;

import com.codestates.eCommerce.order.domain.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderProductRepository extends JpaRepository<OrderProduct, Long> {
}
