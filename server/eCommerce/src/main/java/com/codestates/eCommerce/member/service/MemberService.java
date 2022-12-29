package com.codestates.eCommerce.member.service;

import com.codestates.eCommerce.common.exception.BusinessLogicException;
import com.codestates.eCommerce.common.exception.ExceptionCode;
import com.codestates.eCommerce.member.entity.Member;
import com.codestates.eCommerce.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository repository;
    private final BCryptPasswordEncoder passwordEncoder;

    public Long createMember(Member member) {
        verifyExistsMember(member.getEmail());

        String rawPassword = member.getPassword();
        String encPassword = passwordEncoder.encode(rawPassword);
        member.setPassword(encPassword);
        member.setRole("ROLE_MEMBER");

        Member savedMember = repository.save(member);
        return savedMember.getMemberId();
    }

    // 회원 검색
    public Member findMember(long memberId) {
        Member member = findVerifiedMember(memberId);
        return member;
    }

    public Long updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getPassword()).ifPresent(password -> findMember.setPassword(passwordEncoder.encode(password)));
        Optional.ofNullable(member.getName()).ifPresent(name -> findMember.setName(name));
        Optional.ofNullable(member.getPhone()).ifPresent(phone -> findMember.setPhone(phone));
        Optional.ofNullable(member.getHomeAddress()).ifPresent(homeAddress -> findMember.setHomeAddress(homeAddress));
        Optional.ofNullable(member.getZipcode()).ifPresent(zipcode -> findMember.setZipcode(zipcode));
        Optional.ofNullable(member.getProfileImage()).ifPresent(profileImage -> findMember.setProfileImage(profileImage));

        return member.getMemberId();
    }

    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember = repository.findById(memberId);
        Member member = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return member;
    }
    // 기존에 가입된 회원인지 검증(email)

    public void verifyExistsMember(String email) {
        Optional<Member> optionalMember = repository.findByEmail(email);
        if (optionalMember.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
        }
    }
}
