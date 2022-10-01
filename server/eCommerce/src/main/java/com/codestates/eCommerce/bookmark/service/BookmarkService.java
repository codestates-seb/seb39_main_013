package com.codestates.eCommerce.bookmark.service;

import com.codestates.eCommerce.bookmark.dto.BookmarkDto;
import com.codestates.eCommerce.bookmark.entity.Bookmark;
import com.codestates.eCommerce.bookmark.repository.BookmarkRepository;
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
//@RequiredArgsConstructor
public class BookmarkService {
    private final BookmarkRepository repository;
    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    public BookmarkService(BookmarkRepository repository, ProductRepository productRepository, ProductMapper productMapper) {
        this.repository = repository;
        this.productRepository = productRepository;
        this.productMapper = productMapper;
    }

    public void createBookmark(Bookmark bookmark) {
        repository.save(bookmark);
    }

//    public List<Bookmark> findBookmark(Long memberId) {
    public List<BookmarkDto.Response> findBookmark(Long memberId) {
        List<Bookmark> bookmarks = repository.findAllByMemberId(memberId);

        List<BookmarkDto.Response> response = new ArrayList<>();
//        List<Product> response = new ArrayList<>();
        for (Bookmark bookmark : bookmarks) {
            Optional<Product> optionalProduct = productRepository.findById(bookmark.getProductId());
            Product product = optionalProduct.get();
            ResponseDto responseDto = productMapper.toResponseProductDto(product);
            BookmarkDto.Response bookmarkResponse = new BookmarkDto.Response(bookmark.getBookmarkId(), responseDto);
            response.add(bookmarkResponse);
        }
        return response;

//        return bookmarks;
    }

    public void deleteBookmark(long bookmarkId) {
        Bookmark bookmark = findVerifiedBookmark(bookmarkId);
        repository.delete(bookmark);
    }

    private Bookmark findVerifiedBookmark(long bookmarkId) {
        Optional<Bookmark> optionalBookmark = repository.findById(bookmarkId);
        Bookmark bookmark = optionalBookmark.orElseThrow(() -> new BusinessLogicException(ExceptionCode.BOOKMARK_NOT_FOUND));
        return bookmark;
    }
}
