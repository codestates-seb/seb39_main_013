package com.codestates.eCommerce.product.mapper;

import com.codestates.eCommerce.product.VO.SizeInfo;
import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.product.dto.*;
import org.mapstruct.Mapper;
import org.mapstruct.NullValueCheckStrategy;

import java.util.List;
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

    ResponseDto toResponseDto(ProductDto productDto);
    //서비스 -> 컨트롤러
    List<ResponseDto> toResponseDtoList(List<ProductDto> productDto);
    ResponseDetailDto toResponseDetailDto(ProductDetailDto productDetailDto);
    default ProductDetailDto toProductDetailDto(List<ProductDto> productDtos) {
        ProductDetailDto productDetailDto = new ProductDetailDto();
        productDetailDto.setInfo(productDtos.stream().map(dto -> new SizeInfo(dto.getProductId(), dto.getSize(),dto.getStock())).collect(Collectors.toList()));
        productDetailDto.setBrandId(productDtos.get(0).getBrandId());
        productDetailDto.setBrandName(productDtos.get(0).getBrandName());
        productDetailDto.setMajorClass(productDtos.get(0).getMajorClass());
        productDetailDto.setStock(productDtos.get(0).getStock());
        productDetailDto.setPrice(productDtos.get(0).getPrice());
        productDetailDto.setColor(productDtos.get(0).getColor());
        productDetailDto.setThumbImages(productDtos.get(0).getThumbImages());
        productDetailDto.setContentsImages(productDtos.get(0).getContentsImages());
        return productDetailDto;
    }
}
