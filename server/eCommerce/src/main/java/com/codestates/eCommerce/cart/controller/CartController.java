package com.codestates.eCommerce.cart.controller;

import com.codestates.eCommerce.cart.dto.CartDto;
import com.codestates.eCommerce.cart.dto.CartItem;
import com.codestates.eCommerce.cart.entity.Cart;
import com.codestates.eCommerce.cart.mapper.CartMapper;
import com.codestates.eCommerce.cart.service.CartService;
import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/api/v1/carts")
@Validated
@RequiredArgsConstructor
public class CartController {
    private final CartService service;
    private final CartMapper mapper;

    /*Todo productItem기준으로 등록*/
    @PostMapping
    public ResponseEntity postCart(@Valid @RequestBody CartDto.Post post,
                                   @AuthenticationPrincipal PrincipalDetails principalDetails) {
        Cart cart = mapper.postToCart(post);
        cart.setMemberId(principalDetails.getMember().getMemberId());
        Long cartId = service.createCart(cart);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    /*Todo productItem기준으로 가져오기*/
    @GetMapping
    public ResponseEntity getCarts(@AuthenticationPrincipal PrincipalDetails principalDetails) {
        Long memberId = principalDetails.getMember().getMemberId();
//          Long memberId = 1L;
//        List<Cart> carts = service.findCarts(memberId);
//        List<CartDto.Response> response = mapper.cartsToResponses(carts);

        List<CartItem> response = service.findCarts(memberId);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @DeleteMapping("/{cart-id}")
    public ResponseEntity deleteCart(@PathVariable("cart-id") @Positive long cartId) {
        service.deleteCart(cartId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/member")
    public ResponseEntity deleteCartByUserId(@AuthenticationPrincipal PrincipalDetails principalDetails){
        service.deleteCartByMemberId(principalDetails.getMember().getMemberId());
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
