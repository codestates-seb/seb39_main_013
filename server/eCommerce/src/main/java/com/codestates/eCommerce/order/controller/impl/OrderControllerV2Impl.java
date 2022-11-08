package com.codestates.eCommerce.order.controller.impl;

import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.order.controller.OrderControllerV2;
import com.codestates.eCommerce.order.domain.service.AppOrderService;
import com.codestates.eCommerce.order.dto.OrderRequestDto;
import com.codestates.eCommerce.order.dto.ResponseDto;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v2/orders")
@RequiredArgsConstructor
@Slf4j
public class OrderControllerV2Impl implements OrderControllerV2 {


    private final AppOrderService appOrderService;

    @PreAuthorize("hasRole('ROLE_MEMBER')")
    @PostMapping("/cart")
    public ResponseEntity<?> cartOrder(@RequestBody OrderRequestDto requestDto, @AuthenticationPrincipal PrincipalDetails principalDetails){
        ResponseDto responseDto = appOrderService.placeOrderCartV2(principalDetails.getMember(),requestDto);
        return new ResponseEntity<>(new SingleResponseDto<>(responseDto), HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ROLE_MEMBER')")
    @PostMapping("/product")
    public ResponseEntity<?> productOrder(@RequestBody OrderRequestDto requestDto, @AuthenticationPrincipal PrincipalDetails principalDetails){
        ResponseDto responseDto = appOrderService.placeOrderV2(principalDetails.getMember(),requestDto);
        return new ResponseEntity<>(new SingleResponseDto<>(responseDto), HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ROLE_MEMBER')")
    @GetMapping("/info")
    public ResponseEntity<?> getOrder(@AuthenticationPrincipal PrincipalDetails principalDetails) {
        ResponseDto responseDto = appOrderService.getOrderInfoV2(principalDetails.getMember());
        return new ResponseEntity<>(new SingleResponseDto<>(responseDto), HttpStatus.CREATED);
    }

}
