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
//    public static Order createOrder(Long buyerId, List<OrderProduct> orderProducts, String buyerAddr){
//        //중복된건 로직이 들어가서 수정해야함.
//        Order order = new Order();
//        order.setBuyerId(buyerId);
//        order.setOrderProducts(orderProducts.forEach(OrderProduct););
//        order.setBuyerAddress(buyerAddr);
//        order.setOrderStatus(OrderStatus.ORDERED);
//        order.setTotalPrice();
//        return order;
//    }
    //주문상품 총가격 설정
    public void setTotalPrice() {
        this.totalPrice = this.orderProducts
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
