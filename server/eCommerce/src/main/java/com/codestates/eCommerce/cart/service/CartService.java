package com.codestates.eCommerce.cart.service;

import com.codestates.eCommerce.cart.entity.Cart;
import com.codestates.eCommerce.cart.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

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
}
