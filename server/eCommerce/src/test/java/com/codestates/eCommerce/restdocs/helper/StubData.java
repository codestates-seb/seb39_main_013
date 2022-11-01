package com.codestates.eCommerce.restdocs.helper;

import com.codestates.eCommerce.product.dto.ProductConditionDto;
import com.codestates.eCommerce.product.dto.ProductItemResponseDto;
import com.codestates.eCommerce.product.dto.ProductResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class StubData {

    public static class Product {
        public static ProductConditionDto getProductConditionDto(){
            return ProductConditionDto.builder()
                    .page(1)
                    .pageSize(10)
                    .brandId(1L)
                    .brandName("Nike")
                    .majorClass("상의")
                    .name("Nike 상품")
                    .maxPrice(1000000)
                    .minPrice(1000)
                    .color("#181818")
                    .build();
        }

        public static ProductResponseDto getProductResponseDto(Long productId,String name, List<ProductItemResponseDto> productResponseDtos) {
            return ProductResponseDto.builder()
                    .productId(productId)
                    .brandId(1L)
                    .brandName("Nike")
                    .majorClass("상의")
                    .name(name)
                    .price(150000)
                    .color("#181818")
                    .productItems(productResponseDtos)
                    .thumbImages(new ArrayList<>() {{
                        add("https://thumb_image1");
                        add("https://thumb_image2");
                    }})
                    .contentImages(new ArrayList<>() {{
                        add("https://image1");
                        add("https://image2");
                    }})
                    .build();
        }
        public static ProductItemResponseDto getProductItemResponseDto(Long productItemId, String size, Integer stock) {
            return ProductItemResponseDto.builder()
                    .productItemId(productItemId)
                    .size(size)
                    .stock(stock)
                    .build();
        }
        public static List<ProductItemResponseDto> getProductItemResponseDtoList(Long id) {
            return new ArrayList<>() {{
                add(getProductItemResponseDto(3*(id-1)+1L, "100", 100));
                add(getProductItemResponseDto(3*(id-1)+2L, "105", 100));
                add(getProductItemResponseDto(3*(id-1)+3L, "110", 100));
            }};
        }
        public static List<ProductResponseDto> getProductResponseDtoList() {
            return new ArrayList<>(){{
                add(getProductResponseDto(1L,"Nike 상품 1",getProductItemResponseDtoList(1L)));
                add(getProductResponseDto(2L,"Nike 상품 2",getProductItemResponseDtoList(2L)));
            }};
        }

        public static Page<ProductResponseDto> getMultiPageProductResponseDto() {
            return new PageImpl<>(getProductResponseDtoList(), PageRequest.of(0,10),2);
        }
    }


}
