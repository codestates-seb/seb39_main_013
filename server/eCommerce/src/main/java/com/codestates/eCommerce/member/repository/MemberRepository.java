package com.codestates.eCommerce.member.repository;

import com.codestates.eCommerce.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
