package com.codestates.eCommerce.cart.service;

import com.codestates.eCommerce.cart.dto.CartDto;
import com.codestates.eCommerce.cart.entity.Cart;
import com.codestates.eCommerce.cart.repository.CartRepository;
import com.codestates.eCommerce.common.exception.BusinessLogicException;
import com.codestates.eCommerce.common.exception.ExceptionCode;
import com.codestates.eCommerce.product.domain.entity.Product;
import com.codestates.eCommerce.product.domain.repository.ProductRepository;
import com.codestates.eCommerce.product.dto.ResponseDto;
import com.codestates.eCommerce.product.mapper.ProductMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class CartService {
    private final CartRepository repository;
    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    public Long createCart(Cart cart) {
        Cart savedCart = repository.save(cart);
        return savedCart.getCartId();
    }

    public List<CartDto.Response> findCarts(Long memberId) {
        List<Cart> carts = repository.findAllByMemberId(memberId);

        List<CartDto.Response> response = new ArrayList<>();
        for (Cart cart : carts) {
            Optional<Product> optionalProduct = productRepository.findById(cart.getProductId());
            Product product = optionalProduct.get();
            ResponseDto responseDto = productMapper.toResponseProductDto(product);
            CartDto.Response cartResponse = new CartDto.Response(cart.getCartId(), responseDto, cart.getProductQuantity(), cart.isWanted());
            response.add(cartResponse);
        }
        return response;
    }

    public void deleteCart(long cartId) {
        Cart cart = findVerifiedCart(cartId);
        repository.delete(cart);
    }

    private Cart findVerifiedCart(long cartId) {
        Optional<Cart> optionalCart = repository.findById(cartId);
        Cart cart = optionalCart.orElseThrow(() -> new BusinessLogicException(ExceptionCode.CART_NOT_FOUND));
        return cart;
    }
}
