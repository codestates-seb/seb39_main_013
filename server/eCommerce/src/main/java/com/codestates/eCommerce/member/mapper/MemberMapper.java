package com.codestates.eCommerce.member.mapper;

import com.codestates.eCommerce.member.dto.MemberDto;
import com.codestates.eCommerce.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member postToMember(MemberDto.Post post);
}
