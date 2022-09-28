package com.codestates.eCommerce.order.domain.entity;

import com.codestates.eCommerce.common.BaseEntity;
import com.codestates.eCommerce.order.enums.OrderStatus;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "ORDERS")
@Getter @Setter @Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class Order extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    private Long memberId;      //aggregate

    @OneToMany(mappedBy = "order",cascade = CascadeType.ALL)
    private List<OrderProduct> orderProducts = new ArrayList<>();
    private String orderAddress;
    private String memo;

    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus;
    private int totalPrice;

    //생성 메서드
    public static Order createOrder(Long memberId, List<OrderProduct> orderProducts, String orderAddress){
        //중복된건 로직이 들어가서 수정해야함.
        Order order = new Order();
        order.setMemberId(memberId);
        order.setOrderProducts(orderProducts);
        order.setOrderAddress(orderAddress);
        order.setOrderStatus(OrderStatus.ORDERED);
        order.setTotalPrice();
        return order;
    }
    //주문상품 총가격 설정
    public void setTotalPrice() {
        this.totalPrice = this.orderProducts
                .stream().mapToInt(pd -> pd.getProductPrice() * pd.getProductQuantity())
                .sum();
    }


    public void addOrderProduct(OrderProduct orderProduct){
        if (orderProducts!=null){
            this.orderProducts.add(orderProduct);
        }
    }

    public void cancelOrderProduct(OrderProduct orderProduct) {
        this.orderProducts.remove(orderProduct);
    }
}
