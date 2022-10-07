package com.codestates.eCommerce.bookmark.controller;

import com.codestates.eCommerce.bookmark.dto.BookmarkDto;
import com.codestates.eCommerce.bookmark.entity.Bookmark;
import com.codestates.eCommerce.bookmark.mapper.BookmarkMapper;
import com.codestates.eCommerce.bookmark.service.BookmarkService;
import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/api/v1/bookmarks")
@RequiredArgsConstructor
public class BookmarkController {
    private final BookmarkService bookmarkService;
    private final BookmarkMapper mapper;

    @PostMapping
    private ResponseEntity postBookmark(@RequestBody BookmarkDto.Post post,
                                        @AuthenticationPrincipal PrincipalDetails principalDetails) {
        Bookmark bookmark = mapper.postToBookmark(post);
        bookmark.setMemberId(principalDetails.getMember().getMemberId());
        bookmarkService.createBookmark(bookmark);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity getBookmarks(@AuthenticationPrincipal PrincipalDetails principalDetails) {
        Long memberId = principalDetails.getMember().getMemberId();

//        List<Bookmark> bookmarks = service.findBookmark(memberId);
//        List<BookmarkDto.Response> response = mapper.bookmarksToResponses(bookmarks);

        List<BookmarkDto.Response> response = bookmarkService.findBookmark(memberId);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @DeleteMapping("/{product-id}")
    public ResponseEntity deleteBookmark(@PathVariable("product-id") @Positive long productId,
                                         @AuthenticationPrincipal PrincipalDetails principalDetails) {
        Long memberId = principalDetails.getMember().getMemberId();
        bookmarkService.deleteBookmark(memberId, productId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
