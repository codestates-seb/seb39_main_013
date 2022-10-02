package com.codestates.eCommerce.cart.repository;

import com.codestates.eCommerce.cart.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Long> {
    List<Cart> findAllByMemberId(Long memberId);

    void deleteByMemberId(Long memberId);
}
