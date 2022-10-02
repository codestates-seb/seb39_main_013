package com.codestates.eCommerce.order.domain.repository;

import com.codestates.eCommerce.order.domain.entity.Order;
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
                .leftJoin(order.orderProducts, orderProduct)
                .fetchJoin()
                .where(order.buyerId.eq(buyerId))
                .distinct().fetch();
    }
}
