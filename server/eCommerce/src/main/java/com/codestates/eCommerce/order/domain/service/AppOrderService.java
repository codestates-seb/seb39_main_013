package com.codestates.eCommerce.order.domain.service;

import com.codestates.eCommerce.member.service.MemberService;
import com.codestates.eCommerce.order.domain.entity.Order;
import com.codestates.eCommerce.order.mapper.OrderProductMapper;
import com.codestates.eCommerce.order.dto.OrderDto;
import com.codestates.eCommerce.order.mapper.OrderMapper;
import com.codestates.eCommerce.order.dto.OrderResponseDto;
import com.codestates.eCommerce.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class AppOrderService {

    private final OrderMapper orderMapper;
    private final OrderProductMapper orderProductMapper;
    private final OrderService orderService;
    private final ProductService productService;
    private final MemberService memberService;

    public OrderResponseDto placeOrder(OrderDto reqOrderDto){
        Long memberId = 1L;
        System.out.println(reqOrderDto.toString());
        Order reqOrder = orderMapper.orderDtoToEntity(reqOrderDto);
        Order order = orderService.createOrder(memberId, reqOrder);

        order.getOrderProducts()
                .forEach(pd -> productService.decreaseStock(pd.getProductId(), pd.getProductQuantity()));

        OrderDto resOrderDto = orderMapper.toDto(order);

        return new OrderResponseDto(resOrderDto);
    }
}
