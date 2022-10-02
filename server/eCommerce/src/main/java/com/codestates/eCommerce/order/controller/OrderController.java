package com.codestates.eCommerce.order.controller;

import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.order.dto.OrderRequestDto;
import com.codestates.eCommerce.order.dto.ResponseDto;
import com.codestates.eCommerce.order.domain.service.AppOrderService;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import lombok.Generated;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/orders")
@RequiredArgsConstructor
public class OrderController {

    private final AppOrderService appOrderService;

    @PreAuthorize("hasRole('ROLE_MEMBER')")
    @PostMapping("/cart")
    public ResponseEntity<?> cartOrder(@RequestBody OrderRequestDto requestDto, @AuthenticationPrincipal PrincipalDetails principalDetails){
        ResponseDto responseDto = appOrderService.placeOrder(principalDetails.getMember(),requestDto);
        return new ResponseEntity<>(new SingleResponseDto<>(responseDto), HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ROLE_MEMBER')")
    @GetMapping("/info")
    public ResponseEntity<?> getOrder(@AuthenticationPrincipal PrincipalDetails principalDetails) {
        ResponseDto responseDto = appOrderService.getOrderInfo(principalDetails.getMember());
        return new ResponseEntity<>(new SingleResponseDto<>(responseDto), HttpStatus.CREATED);
    }
    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }
}
