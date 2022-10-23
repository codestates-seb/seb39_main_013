package com.codestates.eCommerce.product.domain.repository;

import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.product.dto.ProductConditionDto;
import com.codestates.eCommerce.product.dto.ProductDto;
import com.codestates.eCommerce.product.dto.QProductDto;
import com.codestates.eCommerce.product.mapper.ProductItemMapper;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;


import java.util.List;

import static com.codestates.eCommerce.product.domain.entity.QProduct.product;

import static com.codestates.eCommerce.product.domain.entity.QProductItem.productItem;
import static org.springframework.util.StringUtils.hasText;

@Repository
@RequiredArgsConstructor
public class ProductRepositoryCustomImpl implements ProductRepositoryCustom {
    private final JPAQueryFactory queryFactory;
    private final ProductItemMapper productItemMapper;

    @Override
    public List<ProductDto> getProduct(String name) {
        return queryFactory
                .select(new QProductDto(
                        product.productId,
                        product.brandId,
                        product.brandName,
                        product.majorClass,
                        product.name,
                        product.price,
                        product.color,
                        product.thumbImages,
                        product.contentImages
                ))
                .from(product)
                .where(product.name.eq(name))
                .fetch();
    }

    @Override
    public Product searchProductWithItemList(Long productId) {
        return  queryFactory
                .selectFrom(product)
                .innerJoin(product.productItems, productItem)
                .fetchJoin()
                .where(product.productId.eq(productId))
                .distinct()
                .fetchOne();
    }

    /*TODO 도저히 DTO로 변환하면서 받는법을 모르겠음*/
    @Override
    public Product searchProductWithItem(Long productId, String size) {
        return  queryFactory
                .selectFrom(product)
                .innerJoin(product.productItems, productItem)
                .fetchJoin()
                .where(
                    product.productId.eq(productId).and(productItem.size.eq(size))
                )
                .distinct()
                .fetchOne();
    }

    @Override
    public List<ProductDto> getProductByName(String name) {
        return queryFactory
                .select(new QProductDto(
                        product.productId,
                        product.brandId,
                        product.brandName,
                        product.majorClass,
                        product.name,
                        product.price,
                        product.color,
                        product.thumbImages,
                        product.contentImages
                )).from(product)
                .where(
                        nameContains(name),
                        brandNameContains(name))
                .fetch();
    }

    public Page<ProductDto> searchPageSimple(ProductConditionDto condition) {
        List<ProductDto> content = queryFactory
                .select(new QProductDto(
                        product.productId,
                        product.brandId,
                        product.brandName,
                        product.majorClass,
                        product.name,
                        product.price,
                        product.color,
                        product.thumbImages,
                        product.contentImages
                ))
                .from(product)
                .where(
                        brandIdEq(condition.getBrandId()),
                        brandNameContains(condition.getBrandName()),
                        majorClassEq(condition.getMajorClass()),
                        nameContains(condition.getName()),
                        colorEq(condition.getColor()),
                        priceGoe(condition.getMinPrice()),
                        priceLoe(condition.getMaxPrice())
//                    stockLoe(condition.getStock())
                )
                .offset(condition.getPage())
                .limit(condition.getPageSize())//페이지 사이즈
                .fetch();

        int total = queryFactory
                .selectFrom(product)
                .where(
                    brandIdEq(condition.getBrandId()),
                    brandNameContains(condition.getBrandName()),
                    majorClassEq(condition.getMajorClass()),
                    nameContains(condition.getName()),
                    colorEq(condition.getColor()),
                    priceGoe(condition.getMinPrice()),
                    priceLoe(condition.getMaxPrice())
//                    sizeGt(condition.getMajorClass(), condition.getSize()),
//                    stockLoe(condition.getStock())
                )
                .fetch().size();

        return new PageImpl<>(content,PageRequest.of(condition.getPage(),condition.getPageSize()),total);
    }


    @Override
    public Page<ProductDto> searchProductPage(Pageable pageable, ProductConditionDto condition) {
        List<ProductDto> content = queryFactory
                .select(new QProductDto(
                        product.productId,
                        product.brandId,
                        product.brandName,
                        product.majorClass,
                        product.name,
                        product.price,
                        product.color,
                        product.thumbImages,
                        product.contentImages
                ))
                .from(product)
                .groupBy(product.name)
                .where(
                        brandIdEq(condition.getBrandId()),
                        brandNameContains(condition.getBrandName()),
                        majorClassEq(condition.getMajorClass()),
                        nameContains(condition.getName()),
                        colorEq(condition.getColor()),
                        priceGoe(condition.getMinPrice()),
                        priceLoe(condition.getMaxPrice())
//                        stockLoe(condition.getStock())
                )
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())//페이지 사이즈
                .fetch();

        int total = queryFactory
                .selectFrom(product)
                .where(
                        brandIdEq(condition.getBrandId()),
                        brandNameContains(condition.getBrandName()),
                        majorClassEq(condition.getMajorClass()),
                        nameContains(condition.getName()),
                        colorEq(condition.getColor()),
                        priceGoe(condition.getMinPrice()),
                        priceLoe(condition.getMaxPrice())
//                        sizeGt(condition.getMajorClass(), condition.getSize()),
//                        stockLoe(condition.getStock())
                )
                .fetch().size();

        return new PageImpl<>(content,pageable,total);
    }



    /* 조건 */
    private BooleanExpression brandIdEq(Long brandId) {
        return brandId!=null ? product.brandId.eq(brandId) : null;
    }

    private BooleanExpression majorClassEq(String majorClass) {
        return hasText(majorClass) ? product.majorClass.eq(majorClass) : null;
    }

    private BooleanExpression nameContains(String name) {
        return hasText(name) ? product.name.contains(name) : null;
    }

    private BooleanExpression brandNameContains(String brandName) {return hasText(brandName) ? product.brandName.contains(brandName) : null;}

    private BooleanExpression colorEq(String color) {
        return hasText(color) ? product.color.eq(color) : null;
    }

    private BooleanExpression priceGoe(Integer price) {
        return price != null ? product.price.goe(price) : null;
    }

    private BooleanExpression priceLoe(Integer price) {
        return price != null ? product.price.loe(price) : null;
    }

//    private BooleanExpression stockLoe(Integer stock) {
//        return stock != null ? product.stock.loe(stock) : null;
//    }
//
//    private BooleanExpression sizeGt(String majorClass , String size) {
//        return hasText(majorClass) && hasText(size) ? product.size.castToNum(Integer.class).gt(Integer.parseInt(size)) : null;
//    }

    private BooleanExpression productIdGt(Long lastProductId) {
        return lastProductId != null ? product.productId.gt(lastProductId): null;
    }
}
