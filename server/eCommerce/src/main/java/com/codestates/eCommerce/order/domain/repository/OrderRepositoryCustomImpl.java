package com.codestates.eCommerce.order.domain.repository;

import com.codestates.eCommerce.order.domain.entity.Order;
import com.codestates.eCommerce.order.dto.OrderDto;
import com.codestates.eCommerce.order.dto.QOrderDto;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.codestates.eCommerce.order.domain.entity.QOrder.order;
import static com.codestates.eCommerce.order.domain.entity.QOrderProduct.orderProduct;


@Repository
@RequiredArgsConstructor
public class OrderRepositoryCustomImpl implements OrderRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    @Override
    public List<Order> searchOrder(Long buyerId) {
        return queryFactory.select(order)
                .from(order)
                .join(order.orderProducts, orderProduct)
                .fetchJoin()
                .on(order.buyerId.eq(buyerId))
                .distinct().fetch();
    }

    @Override
    public List<Order> searchOrderV2(Long buyerId) {
        return queryFactory
                .select(order)
                .from(order)
                .leftJoin(orderProduct)
                .on(order.buyerId.eq(buyerId))
                .fetchJoin()
                .distinct()
                .fetch();
    }

}
