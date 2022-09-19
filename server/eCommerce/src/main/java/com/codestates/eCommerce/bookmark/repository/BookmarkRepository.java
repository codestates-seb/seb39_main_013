package com.codestates.eCommerce.bookmark.repository;

import com.codestates.eCommerce.bookmark.entity.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
}
