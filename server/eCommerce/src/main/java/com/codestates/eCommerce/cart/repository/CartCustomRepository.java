package com.codestates.eCommerce.cart.repository;

import com.codestates.eCommerce.cart.dto.CartItem;

import java.util.List;

public interface CartCustomRepository {

    List<CartItem> getCartItemByMemberId(Long memberId);
}
