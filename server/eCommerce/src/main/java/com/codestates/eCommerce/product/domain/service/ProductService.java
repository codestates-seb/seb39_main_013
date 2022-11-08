package com.codestates.eCommerce.product.domain.service;

import com.codestates.eCommerce.common.exception.BusinessLogicException;
import com.codestates.eCommerce.common.exception.ExceptionCode;
import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.product.domain.repository.ProductRepository;
import com.codestates.eCommerce.product.dto.ProductConditionDto;
import com.codestates.eCommerce.product.dto.ProductDto;
import com.codestates.eCommerce.product.dto.RequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public Product save(Product product){
        return productRepository.save(product);
    }

    public void decreaseStock(Long productId, Integer quantity) {
       Product product = productRepository.findById(productId).orElseThrow(() -> new IllegalArgumentException("해당 상품은 없습니다."));
//       product.decreaseStock(quantity);
       productRepository.save(product);
       //더티체킹
    }

    public Product findVerifiedProduct(Long productId){
        Optional<Product> optionalProduct = productRepository.findById(productId);
        Product findProduct = optionalProduct.orElseThrow(() ->new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND));
        return findProduct;
    }


    public Product updateProduct(Long productId, RequestDto.Patch requestDto) {
        Product findProduct = findVerifiedProduct(productId);
        validateCheckAndUpdate(requestDto, findProduct);
        return findProduct;
    }

    public Page<ProductDto> getProductPage(int page, int pageSize, ProductConditionDto condition) {
        return productRepository.searchPageSimple(condition);
    }

    public Page<ProductDto> getProductPageV2(ProductConditionDto condition) {
        return productRepository.searchPageSimple(condition);
    }
    public List<ProductDto> getProduct(String name) {
        return productRepository.getProduct(name);
    }

    private static void validateCheckAndUpdate(RequestDto.Patch requestDto, Product findProduct) {
        if (requestDto.getBrandId() != null) findProduct.setBrandId(requestDto.getBrandId());
        if (StringUtils.hasText(requestDto.getMajorClass())) findProduct.setMajorClass(requestDto.getMajorClass());
        if (StringUtils.hasText(requestDto.getName())) findProduct.setName(requestDto.getName());
        if (requestDto.getPrice() != null) findProduct.setPrice(requestDto.getPrice());
//        if (requestDto.getStock() != null) findProduct.increaseStock(requestDto.getStock());
        if (StringUtils.hasText(requestDto.getColor())) findProduct.setColor(requestDto.getColor());
//        if (StringUtils.hasText(requestDto.getSize())) findProduct.setSize(requestDto.getSize());  //사이즈는 of
        if (requestDto.getThumbImages() != null) findProduct.setThumbImages(requestDto.getThumbImages());
        if (requestDto.getContentImages() != null) findProduct.setContentImages(requestDto.getContentImages());
    }

    /** Todo 상품디테일
     * */

    public Product searchProductWithItemList(Long productId) {
        return productRepository.searchProductWithItemList(productId);
    }
    public Product searchProductWithItem(Long productId, String size) {
        return productRepository.searchProductWithItem(productId,size);
    }

    public void decreaseStockV2(Long productId, String productSize, Integer quantity) {
        Product product = (Product) productRepository.searchProductWithItem(productId,productSize);
        productRepository.save(product);
        //더티체킹
    }

    public List<ProductDto> getProductByName(String name) {
        return productRepository.getProductByName(name);
    }
}
