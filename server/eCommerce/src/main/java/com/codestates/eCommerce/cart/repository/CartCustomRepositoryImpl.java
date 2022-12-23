package com.codestates.eCommerce.cart.repository;

import com.codestates.eCommerce.cart.dto.CartItem;
import com.codestates.eCommerce.cart.dto.QCartItem;
import com.codestates.eCommerce.product.dto.ProductDto;
import com.codestates.eCommerce.product.mapper.ProductItemMapper;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.codestates.eCommerce.cart.entity.QCart.cart;
import static com.codestates.eCommerce.product.domain.entity.QProduct.product;
import static com.codestates.eCommerce.product.domain.entity.QProductItem.productItem;

@Repository
@RequiredArgsConstructor
public class CartCustomRepositoryImpl implements CartCustomRepository{
    private final JPAQueryFactory queryFactory;

    //컨트롤러에서 get요청을 했을 때 내가 원하는 값을 확인할 수 있다
    @Override
    public List<CartItem> getCartItemByMemberId(Long memberId) {
        return queryFactory
                .select(new QCartItem(
                        cart.cartId,
                        product.productId,
                        cart.productItemId,
                        productItem.size,
                        productItem.stock,
                        product.brandId,
                        product.brandName,
                        product.majorClass,
                        product.name,
                        product.price,
                        product.color,
                        product.thumbImages,
                        product.contentImages
                )).from(cart)
                .leftJoin(productItem).on(cart.productItemId.eq(productItem.productItemId)).where(cart.memberId.eq(memberId))
                .innerJoin(product).on(product.productId.eq(productItem.product.productId)).fetchJoin()
                .fetch();
    }
}

//    from(cart,product)
//                .innerJoin(productItem.product,product).fetchJoin().distinct()
//                        .where(cart.memberId.eq(memberId))
//                        .fetch();
