package com.codestates.eCommerce.order.domain.repository;


import com.codestates.eCommerce.order.domain.entity.Order;

import java.util.List;

public interface OrderRepositoryCustom {
    List<Order> searchOrder(Long buyerId);
}
