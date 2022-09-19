package com.codestates.eCommerce.cart.repository;

import com.codestates.eCommerce.cart.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
}
