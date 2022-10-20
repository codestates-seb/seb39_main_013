package com.codestates.eCommerce.cart.repository;

import com.codestates.eCommerce.cart.dto.CartItem;
import com.codestates.eCommerce.cart.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Long> , CartCustomRepository{
    List<Cart> findAllByMemberId(Long memberId);

    void deleteByMemberId(Long memberId);

}
