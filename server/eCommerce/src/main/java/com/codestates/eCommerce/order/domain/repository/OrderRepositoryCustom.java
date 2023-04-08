package com.codestates.eCommerce.order.domain.repository;


import com.codestates.eCommerce.order.domain.entity.Order;
import com.codestates.eCommerce.order.dto.OrderDto;

import java.util.List;

public interface OrderRepositoryCustom {
    List<Order> searchOrder(Long buyerId);
    List<Order> searchOrderV2(Long buyerId);
}
