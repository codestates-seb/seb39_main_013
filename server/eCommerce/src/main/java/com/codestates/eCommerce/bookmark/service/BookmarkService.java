package com.codestates.eCommerce.bookmark.service;

import com.codestates.eCommerce.bookmark.entity.Bookmark;
import com.codestates.eCommerce.bookmark.repository.BookmarkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

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
}
