package com.codestates.eCommerce.order.domain.service;

import com.codestates.eCommerce.order.domain.entity.Order;
import com.codestates.eCommerce.order.domain.repository.OrderRepository;
import com.codestates.eCommerce.order.enums.OrderStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@RequiredArgsConstructor
@Transactional
public class OrderService {
    private final OrderRepository orderRepository;
    @Transactional
    public Order createOrder(Long memberId, Order reqOrder){
//        Order order = Order.createOrder(memberId, reqOrder.getOrderProducts(),reqOrder.getBuyerAddress());
        reqOrder.setBuyerId(memberId);
        reqOrder.setTotalPrice();
        reqOrder.addOrderProducts(reqOrder.getOrderProducts());

        reqOrder.setOrderStatus(OrderStatus.ORDERED);
        return orderRepository.save(reqOrder);

    }

    //주문취소는 일괄 취소와 한상품 주문취소로 나뉘어야할거같음
    public void cancelOrderProduct(){
        cancelOrderProduct();
    }

    public List<Order> getOrderByQueryDSL(Long buyerId) {
        return orderRepository.searchOrder(buyerId);
    }

}
