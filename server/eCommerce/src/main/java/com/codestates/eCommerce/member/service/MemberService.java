package com.codestates.eCommerce.member.service;

import com.codestates.eCommerce.member.entity.Member;
import com.codestates.eCommerce.member.repository.MemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class MemberService {
    private final MemberRepository repository;
    private final BCryptPasswordEncoder passwordEncoder;

    public Long createMember(Member member) {
        String rawPassword = member.getPassword();
        String encPassword = passwordEncoder.encode(rawPassword);
        member.setPassword(encPassword);

//        member.setRole("MEMBER");
        member.setRole("ROLE_MEMBER");
//        member.setMemberStatus(Member.MemberStatus.MANAGER);

        Member savedMember = repository.save(member);
        return savedMember.getMemberId();
    }

    public Member findMember(long memberId) {
        Optional<Member> optionalMember = repository.findById(memberId);
        return optionalMember.orElseThrow(() -> new RuntimeException("Member Not Found"));
    }
}
