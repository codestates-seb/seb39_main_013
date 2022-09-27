package com.codestates.eCommerce.cart.controller;

import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.order.dto.RequestDto;
import com.codestates.eCommerce.order.dto.ResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/carts")
public class CartController {

    //상품담기 API
//    @PostMapping("/cart")
//    public ResponseEntity<?> cartOrder(@RequestBody RequestDto dto){
//        ResponseDto responseDto = appOrderService.placeOrder(dto.toOrderDto());
//        return new ResponseEntity<>(new SingleResponseDto<>(responseDto), HttpStatus.CREATED);
//    }

}
