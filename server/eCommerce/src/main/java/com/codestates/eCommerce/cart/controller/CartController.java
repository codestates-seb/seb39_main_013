package com.codestates.eCommerce.cart.controller;

import com.codestates.eCommerce.cart.dto.CartDto;
import com.codestates.eCommerce.cart.entity.Cart;
import com.codestates.eCommerce.cart.mapper.CartMapper;
import com.codestates.eCommerce.cart.service.CartService;
import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/carts")
@RequiredArgsConstructor
public class CartController {
    private final CartService service;
    private final CartMapper mapper;

    @PostMapping
    public ResponseEntity postCart(@RequestBody CartDto.Post post,
                                   @AuthenticationPrincipal PrincipalDetails principalDetails) {
        Cart cart = mapper.postToCart(post);
        cart.setMemberId(principalDetails.getMember().getMemberId());
        Long cartId = service.createCart(cart);
        return new ResponseEntity<>(new SingleResponseDto<>(cartId), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity getCarts(@AuthenticationPrincipal PrincipalDetails principalDetails) {
        Long memberId = principalDetails.getMember().getMemberId();
        List<Cart> carts = service.findCarts(memberId);
        List<CartDto.Response> response = mapper.cartsToResponses(carts);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }
}
