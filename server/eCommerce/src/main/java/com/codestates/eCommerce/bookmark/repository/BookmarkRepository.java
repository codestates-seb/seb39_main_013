package com.codestates.eCommerce.bookmark.repository;

import com.codestates.eCommerce.bookmark.entity.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    List<Bookmark> findAllByMemberId(Long memberId);

    @Query(value = "SELECT b FROM Bookmark b WHERE b.memberId = :memberId and b.productId = :productId")
    Bookmark findByMemberIdProductId(long memberId, long productId);
}
