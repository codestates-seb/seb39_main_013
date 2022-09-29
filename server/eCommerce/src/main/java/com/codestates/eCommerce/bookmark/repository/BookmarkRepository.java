package com.codestates.eCommerce.bookmark.repository;

import com.codestates.eCommerce.bookmark.entity.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    List<Bookmark> findAllByMemberId(Long memberId);
}
