package com.codestates.eCommerce.order.domain;

import com.codestates.eCommerce.common.BaseEntity;
import com.codestates.eCommerce.order.enums.OrderStatus;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "ORDERS")
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Order extends BaseEntity {
    @Id @GeneratedValue
    private Long orderId;

    private Long memberId;      //aggregate

//    private Long brandId;       //aggregate 주문에는 필요없을거 같음
    @OneToMany
    @JoinColumn(name = "product_id")
    private List<OrderProduct> orderProducts = new ArrayList<>();
    private String orderAddress;
    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus;
    private int deliveryFee;
    private int usedPoint;
    private int totalPrice;

    //생성 메서드
    public static Order createOrder(Long memberId, List<OrderProduct> orderProducts, String orderAddress,int deliveryFee, int usedPoint){
        Order order = new Order();
        order.setMemberId(memberId);
        order.setOrderProducts(orderProducts);
        order.setOrderAddress(orderAddress);
        order.setOrderStatus(OrderStatus.ORDERED);
        order.setDeliveryFee(deliveryFee);
        order.setUsedPoint(usedPoint);
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
