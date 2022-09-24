package com.codestates.eCommerce.order.application;

import com.codestates.eCommerce.order.domain.Order;
import com.codestates.eCommerce.order.domain.OrderProduct;
import com.codestates.eCommerce.order.domain.OrderService;
import com.codestates.eCommerce.order.dto.OrderDto;
import com.codestates.eCommerce.order.dto.OrderProductDto;
import com.codestates.eCommerce.order.mapper.OrderMapper;
import com.codestates.eCommerce.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class AppOrderService {

    private OrderMapper orderMapper;
    private OrderService orderService;
    private ProductService productService;

    public OrderDto placeOrder(Long memberId, List<OrderProductDto> productDtos, String orderAddress, Integer productQuantity, Integer productPrice){
        //dto -> entity
        List<OrderProduct> orderProducts = orderMapper.toEntityList(productDtos);
        //order 생성
        Order order = orderService.createOrder(memberId,orderProducts,orderAddress,productQuantity,productPrice);
        //주문된 상품만큼 재고 줄이기
        orderProducts.stream()
                .forEach(pd -> productService.decreaseStock(pd.getProductId(), pd.getProductQuantity()));
        //entity -> dto
        List<OrderProductDto> orderProductDtos = orderMapper.toDtoList(orderProducts);
        return new OrderDto();
    }
}
