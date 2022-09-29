package com.codestates.eCommerce.bookmark.mapper;

import com.codestates.eCommerce.bookmark.dto.BookmarkDto;
import com.codestates.eCommerce.bookmark.entity.Bookmark;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BookmarkMapper {
    Bookmark postToBookmark(BookmarkDto.Post post);

    BookmarkDto.Response bookmarkToResponse(Bookmark bookmark);

    List<BookmarkDto.Response> bookmarksToResponses(List<Bookmark> bookmarks);
}
