package com.codestates.eCommerce.bookmark.entity;

import com.codestates.eCommerce.common.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Bookmark extends BaseEntity {
    @Id @GeneratedValue
    private Long bookmarkId;
    private Long memberId;
    private Long productId;
}
