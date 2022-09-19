package com.codestates.eCommerce.common;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@MappedSuperclass
@Getter @Setter
public class BaseEntity {
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
