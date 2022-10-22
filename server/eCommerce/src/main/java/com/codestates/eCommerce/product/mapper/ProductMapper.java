package com.codestates.eCommerce.product.mapper;

import com.codestates.eCommerce.product.VO.SizeInfo;
import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.product.dto.*;
import org.mapstruct.Mapper;
import org.mapstruct.NullValueCheckStrategy;

import java.util.List;
import java.util.stream.Collectors;

import static org.mapstruct.NullValueMappingStrategy.RETURN_DEFAULT;

@Mapper(componentModel = "spring",
        nullValueMappingStrategy = RETURN_DEFAULT ,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ProductMapper {


    Product toEntity(RequestDto.Patch post);
//    @Mapping(source = "post.size", target = "size")
    Product toEntity(RequestDto.Post post);
    Product toEntity(ProductDto ProductDto);
    ProductDto toProductDto(Product product);
    ProductResponseDto toProductResponseDto(Product product);
    List<Product> toEntityList(List<ProductDto> ProductDtos);
    List<ProductDto> toDtoList(List<Product> products);

    ProductResponseDto toResponseDto(ProductDto productDto);
    //서비스 -> 컨트롤러
    List<ProductResponseDto> toResponseDtoList(List<ProductDto> productDto);
    List<ProductResponseDto> toResponseDtos(List<Product> products);
    ResponseDetailDto toResponseDetailDto(ProductDetailDto productDetailDto);

    /*Todo 리팩토링*/
    default ProductDetailDto toProductDetailDto(List<ProductDto> productDtos) {
        ProductDetailDto productDetailDto = new ProductDetailDto();
//        productDetailDto.setInfo(productDtos.stream().map(dto -> new SizeInfo(dto.getProductId(), dto.getSize(),dto.getStock())).collect(Collectors.toList()));
        productDetailDto.setBrandId(productDtos.get(0).getBrandId());
        productDetailDto.setBrandName(productDtos.get(0).getBrandName());
        productDetailDto.setMajorClass(productDtos.get(0).getMajorClass());
//        productDetailDto.setStock(productDtos.get(0).getStock());
        productDetailDto.setPrice(productDtos.get(0).getPrice());
        productDetailDto.setColor(productDtos.get(0).getColor());
        productDetailDto.setThumbImages(productDtos.get(0).getThumbImages());
        productDetailDto.setContentImages(productDtos.get(0).getContentImages());
        return productDetailDto;
    }
}
