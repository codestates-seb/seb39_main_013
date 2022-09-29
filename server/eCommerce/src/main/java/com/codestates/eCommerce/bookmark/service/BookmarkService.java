package com.codestates.eCommerce.bookmark.service;

import com.codestates.eCommerce.bookmark.entity.Bookmark;
import com.codestates.eCommerce.bookmark.repository.BookmarkRepository;
import com.codestates.eCommerce.common.exception.BusinessLogicException;
import com.codestates.eCommerce.common.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class BookmarkService {
    private final BookmarkRepository repository;

    public void createBookmark(Bookmark bookmark) {
        repository.save(bookmark);
    }

    public List<Bookmark> findBookmark(Long memberId) {
        List<Bookmark> bookmarks = repository.findAllByMemberId(memberId);
        return bookmarks;
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
