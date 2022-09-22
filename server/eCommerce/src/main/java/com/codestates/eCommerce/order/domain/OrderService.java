package com.codestates.eCommerce.order.domain;

import com.codestates.eCommerce.order.enums.OrderStatus;
import com.codestates.eCommerce.order.infrastructure.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;

    public Order createOrder(Long memberId, List<OrderProduct> orderProducts,String orderAddress, int deliveryFee, int usedPoint){
        Order order = Order.createOrder(memberId,orderProducts,orderAddress,deliveryFee,usedPoint);
        return orderRepository.save(order);
    }

    //주문취소는 일괄 취소와 한상품 주문취소로 나뉘어야할거같음
    public void cancelOrderProduct(){

    }
}
