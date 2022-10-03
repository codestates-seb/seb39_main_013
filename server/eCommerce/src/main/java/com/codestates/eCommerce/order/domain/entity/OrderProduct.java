package com.codestates.eCommerce.order.domain.entity;

import com.codestates.eCommerce.common.BaseEntity;
import com.codestates.eCommerce.order.enums.ProductOrderStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter @Setter @Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class OrderProduct extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderProductId;

    //1
    @ManyToOne
    @JoinColumn(name = "order_id")
    @JsonIgnore
    private Order order;

//    private Long memberId;
    private Long productId;
    private Integer productQuantity;
    private Integer productPrice;
    private String productSize;
    private String productColor;

    @Column
    @Enumerated(EnumType.STRING)
    private ProductOrderStatus productOrderStatus;

//    //생성 메서드
//    public static OrderProduct createOrderProduct(Long productId, Integer productQuantity, Integer productPrice, String productSize, String productColor) {
//        OrderProduct orderProduct = new OrderProduct();
////        orderProduct.setMemberId(memberId);
//        orderProduct.setProductId(productId);
//        orderProduct.setProductQuantity(productQuantity);
//        orderProduct.setProductPrice(productPrice);
//        orderProduct.setProductOrderStatus(ProductOrderStatus.ORDERED);
//        orderProduct.setProductSize(productSize);
//        orderProduct.setProductColor(productColor);
//        // 쿠폰이나 할인이 들어오면 가격이 조정되어야할듯하다.
//        // 상품 재고를 감소시켜야한다. 어떻게 감소시키지???? productrepository에 접근을 못하는데 api로 요청?
//        return orderProduct;
//    }

    public void cancel(){

    }
}
