package com.codestates.eCommerce.product.mapper;

import com.codestates.eCommerce.product.VO.SizeInfo;
import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.product.dto.*;
import org.mapstruct.*;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;


@Mapper(componentModel = "spring", nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ProductMapper {


    Product toEntity(RequestDto.Patch post);
//    @Mapping(source = "post.size", target = "size")
    Product toEntity(RequestDto.Post post);
    Product toEntity(ProductDto ProductDto);
    ProductDto toProductDto(Product product);
    ResponseDto toResponseProductDto(Product product);
    List<Product> toEntityList(List<ProductDto> ProductDtos);
    List<ProductDto> toDtoList(List<Product> products);

    default ResponseDto toResponseDto(ProductDto productDto , Long memberId){
        ResponseDto responseDto = new ResponseDto();
        responseDto.setProductId(productDto.getBrandId());
        responseDto.setBrandId(productDto.getProductId());
        responseDto.setBrandName(productDto.getBrandName());
        responseDto.setMajorClass(productDto.getMajorClass());
        responseDto.setName(productDto.getName());
        responseDto.setColor(productDto.getColor());
        responseDto.setStock(productDto.getStock());
        responseDto.setPrice(productDto.getPrice());
        responseDto.setSize(productDto.getSize());
        responseDto.setThumbImages(productDto.getThumbImages());
        responseDto.setContentImages(productDto.getContentImages());
        responseDto.setBookmark(Objects.equals(memberId, productDto.getMemberId()));
        return responseDto;
    }


    //서비스 -> 컨트롤러
    List<ResponseDto> toResponseDtoList(List<ProductDto> productDto);
    ResponseDetailDto toResponseDetailDto(ProductDetailDto productDetailDto);

    default ProductDetailDto toProductDetailDto(List<ProductDto> productDtos) {     //상품이름기준으로 재고별 다가져옴
        ProductDetailDto productDetailDto = new ProductDetailDto();
        productDetailDto.setInfo(productDtos.stream().map(dto -> new SizeInfo(dto.getProductId(), dto.getSize(),dto.getStock())).collect(Collectors.toList()));
        productDetailDto.setBrandId(productDtos.get(0).getBrandId());
        productDetailDto.setBrandName(productDtos.get(0).getBrandName());
        productDetailDto.setMajorClass(productDtos.get(0).getMajorClass());
        productDetailDto.setStock(productDtos.get(0).getStock());
        productDetailDto.setPrice(productDtos.get(0).getPrice());
        productDetailDto.setColor(productDtos.get(0).getColor());
        productDetailDto.setThumbImages(productDtos.get(0).getThumbImages());
        productDetailDto.setContentImages(productDtos.get(0).getContentImages());
        return productDetailDto;
    }
}
