package com.codestates.eCommerce.order.controller;

import com.codestates.eCommerce.order.dto.OrderRequestDto;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import org.springframework.http.ResponseEntity;

public interface OrderControllerV1 {
    public ResponseEntity<?> cartOrder(OrderRequestDto requestDto, PrincipalDetails principalDetails);

    public ResponseEntity<?> productOrder(OrderRequestDto requestDto, PrincipalDetails principalDetails);

    public ResponseEntity<?> getOrder(PrincipalDetails principalDetails) ;

}
