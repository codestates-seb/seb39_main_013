package com.codestates.eCommerce.order.controller;

import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.order.dto.OrderRequestDto;
import com.codestates.eCommerce.order.dto.OrderResponseDto;
import com.codestates.eCommerce.order.domain.service.AppOrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/orders")
@RequiredArgsConstructor
public class OrderController {

    private final AppOrderService appOrderService;

    @PostMapping("/cart")
    public ResponseEntity<?> cartOrder(@RequestBody OrderRequestDto dto){
        OrderResponseDto responseDto = appOrderService.placeOrder(dto.toOrderDto());
        return new ResponseEntity<>(new SingleResponseDto<>(responseDto), HttpStatus.CREATED);
    }

    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }
}
