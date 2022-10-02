package com.codestates.eCommerce.order.domain.service;

import com.codestates.eCommerce.member.entity.Member;
import com.codestates.eCommerce.order.domain.entity.Order;
import com.codestates.eCommerce.order.dto.OrderRequestDto;
import com.codestates.eCommerce.order.dto.OrderResponseDto;
import com.codestates.eCommerce.order.mapper.OrderProductMapper;
import com.codestates.eCommerce.order.mapper.OrderMapper;
import com.codestates.eCommerce.order.dto.ResponseDto;
import com.codestates.eCommerce.product.domain.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class AppOrderService {

    private final OrderMapper orderMapper;
    private final OrderProductMapper orderProductMapper;
    private final OrderService orderService;
    private final ProductService productService;

    /* * Todo 주문하기
    * JWT에 담긴 유저가 주문(구매)을 시도한다.
    * 주문된 상품 수만큼 product 재고를 줄여줘야한다.
    * 주문이 되었으므로 주문된 상품들과 함께 return
    * */
    public ResponseDto placeOrder(Member member, OrderRequestDto reqOrderDto){
        //카드에 담긴걸 줌누
        //
        Order order = orderMapper.toOrderEntity(reqOrderDto);
        order.setBuyerId(member.getMemberId());
        Order createOrder = orderService.createOrder(member.getMemberId(),order);
        createOrder.getOrderProducts().forEach(pd ->
                productService.decreaseStock(pd.getProductId(), pd.getProductQuantity()));  //상품재고 감소
        /** Todo 카트에있는거 지우기 */

        OrderResponseDto orderResponseDto = orderMapper.toOrderResponseDto(order);

        return new ResponseDto(orderResponseDto);
    }

    public ResponseDto getOrderInfo(Member member) {
        List<Order> order = orderService.getOrderByQueryDSL(member.getMemberId());
        List<OrderResponseDto> orderResponseDto = orderMapper.toOrderResponseDtoList(order);
        return new ResponseDto(orderResponseDto);
    }
}
