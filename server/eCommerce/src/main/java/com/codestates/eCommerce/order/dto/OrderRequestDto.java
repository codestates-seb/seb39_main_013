package com.codestates.eCommerce.order.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

import java.util.List;

@Getter
@AllArgsConstructor
@ToString
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class OrderRequestDto {

    private String address;
    private String phone;
    private String memo;
    private List<OrderProductDto> productDtos;


    public OrderDto toOrderDto(){
        return new OrderDto(null,null,this.productDtos, address, memo, null,0);
    }
}
