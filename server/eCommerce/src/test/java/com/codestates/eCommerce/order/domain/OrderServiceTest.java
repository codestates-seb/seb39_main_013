package com.codestates.eCommerce.order.domain;

import com.codestates.eCommerce.order.domain.repository.OrderProductRepository;
import com.codestates.eCommerce.order.domain.repository.OrderRepository;
import com.codestates.eCommerce.order.domain.service.OrderService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.ArgumentMatchers.any;

@ExtendWith(MockitoExtension.class)
class OrderServiceTest {

    @Mock
    private OrderRepository orderRepository;
    @Mock
    private OrderProductRepository orderProductRepository;
    @Mock
    private OrderService orderService;

    @Test
    void createOrder() {
        //given
        //when
        //then
    }

    @Test
    void cancelOrderProduct() {
    }
}