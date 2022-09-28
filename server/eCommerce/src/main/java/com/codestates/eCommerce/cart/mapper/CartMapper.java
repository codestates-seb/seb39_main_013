package com.codestates.eCommerce.cart.mapper;

import com.codestates.eCommerce.cart.dto.CartDto;
import com.codestates.eCommerce.cart.entity.Cart;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CartMapper {
    Cart postToCart(CartDto.Post post);

    CartDto.Response cartToResponse(Cart cart);
}
