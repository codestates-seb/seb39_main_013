package com.codestates.eCommerce.order.domain.service;

import com.codestates.eCommerce.order.domain.entity.Order;
import com.codestates.eCommerce.order.domain.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;

    public Order createOrder(Long memberId, Order reqOrder){
//        Order order = Order.createOrder(memberId, reqOrder.getOrderProducts(),reqOrder.getBuyerAddress());
        reqOrder.setBuyerId(memberId);
        return orderRepository.save(reqOrder);

    }

    //주문취소는 일괄 취소와 한상품 주문취소로 나뉘어야할거같음
    public void cancelOrderProduct(){

    }
}
