package com.codestates.eCommerce.order.domain.entity;

import com.codestates.eCommerce.common.BaseEntity;
import com.codestates.eCommerce.order.enums.OrderStatus;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "orders")
public class Order extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    private String merchantUid;
    private Long buyerId;      //aggregate
    private String buyerName;
    private String buyerPostcode;
    private String buyerTel;
    @OneToMany(mappedBy = "order",cascade = CascadeType.ALL)
    private List<OrderProduct> orderProducts = new ArrayList<>();

    private String buyerAddress;

    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus;
    private int totalPrice;


    //    //생성 메서드
    public static Order createOrder(Long buyerId, Order orderInfo){
        return new Order(
                orderInfo.getOrderId(),
                orderInfo.getMerchantUid(),
                buyerId,
                orderInfo.getBuyerName(),
                orderInfo.getBuyerPostcode(),
                orderInfo.getBuyerTel(),
                orderInfo.getOrderProducts(),
                orderInfo.getBuyerAddress(),
                OrderStatus.ORDERED,
                orderInfo.calculateTotalPrice()
                );
    }

    //주문상품 총가격 설정
    public int calculateTotalPrice() {
        return this.orderProducts
                .stream().mapToInt(pd -> pd.getProductPrice() * pd.getProductQuantity())
                .sum();
    }

    public void addOrderProducts(List<OrderProduct> orderProducts) {
        this.orderProducts = orderProducts;
        orderProducts.forEach(od -> {od.setOrder(this);});
    }


    public void cancelOrderProduct(OrderProduct orderProduct) {
        this.orderProducts.remove(orderProduct);
    }
}
