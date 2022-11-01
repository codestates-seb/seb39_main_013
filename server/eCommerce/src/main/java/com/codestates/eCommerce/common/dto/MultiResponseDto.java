package com.codestates.eCommerce.common.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

// page를 나타내기 위한용도
// 자바

@Getter
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class MultiResponseDto<T> {
    private final List<T> data;
    private final PageInfo pageInfo;

    public MultiResponseDto(List<T> data, Page<?> page) {
        this.data = data;
        this.pageInfo = new PageInfo(page.getNumber() + 1,
                page.getSize(),
                page.getTotalElements(),
                page.getTotalPages());
    }

    @Getter
    @AllArgsConstructor
    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    private static class PageInfo{
        private int page;
        private int size;
        private long totalElements;
        private int totalPages;
    }
}

