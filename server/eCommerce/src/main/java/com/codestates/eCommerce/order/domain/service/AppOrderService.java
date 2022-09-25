package com.codestates.eCommerce.order.domain.service;

import com.codestates.eCommerce.member.service.MemberService;
import com.codestates.eCommerce.order.domain.entity.Order;
import com.codestates.eCommerce.order.mapper.OrderProductMapper;
import com.codestates.eCommerce.order.dto.OrderDto;
import com.codestates.eCommerce.order.mapper.OrderMapper;
import com.codestates.eCommerce.order.dto.ResponseOrderDto;
import com.codestates.eCommerce.product.domain.service.ProductService;
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

    /* * Todo 주문하기
    * JWT에 담긴 유저가 주문(구매)을 시도한다.
    * 주문된 상품 수만큼 product 재고를 줄여줘야한다.
    * 주문이 되었으므로 주문된 상품들과 함께 return
    * */
    public ResponseOrderDto placeOrder(OrderDto reqOrderDto){
        Long memberId = 1L;
        System.out.println(reqOrderDto.toString());
        Order reqOrder = orderMapper.toEntity(reqOrderDto);
        Order order = orderService.createOrder(memberId, reqOrder);

        order.getOrderProducts()
                .forEach(pd -> productService.decreaseStock(pd.getProductId(), pd.getProductQuantity()));

        OrderDto resOrderDto = orderMapper.toDto(order);

        return new ResponseOrderDto(resOrderDto);
    }
}
