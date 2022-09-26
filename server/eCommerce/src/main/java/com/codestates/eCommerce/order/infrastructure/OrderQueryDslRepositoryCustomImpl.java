package com.codestates.eCommerce.order.infrastructure;

import com.codestates.eCommerce.order.domain.repository.OrderQueryDslRepositoryCustom;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class OrderQueryDslRepositoryCustomImpl implements OrderQueryDslRepositoryCustom {
    private final JPAQueryFactory queryFactory;



}
