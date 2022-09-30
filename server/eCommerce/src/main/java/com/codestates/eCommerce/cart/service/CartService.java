package com.codestates.eCommerce.cart.service;

import com.codestates.eCommerce.cart.entity.Cart;
import com.codestates.eCommerce.cart.repository.CartRepository;
import com.codestates.eCommerce.common.exception.BusinessLogicException;
import com.codestates.eCommerce.common.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class CartService {
    private final CartRepository repository;

    public Long createCart(Cart cart) {
        Cart savedCart = repository.save(cart);
        return savedCart.getCartId();
    }

    public List<Cart> findCarts(Long memberId) {
        List<Cart> carts = repository.findAllByMemberId(memberId);
        return carts;
    }

    public void deleteCart(long cartId) {
        Cart cart = findVerifiedCart(cartId);
        repository.delete(cart);
    }

    private Cart findVerifiedCart(long cartId) {
        Optional<Cart> optionalCart = repository.findById(cartId);
        Cart cart = optionalCart.orElseThrow(() -> new BusinessLogicException(ExceptionCode.CART_NOT_FOUND));
        return cart;
    }
}
