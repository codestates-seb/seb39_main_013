package com.codestates.eCommerce.member.controller;

import com.codestates.eCommerce.member.dto.MemberDto;
import com.codestates.eCommerce.member.entity.Member;
import com.codestates.eCommerce.member.mapper.MemberMapper;
import com.codestates.eCommerce.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/members")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService service;
    private final MemberMapper mapper;

    @PostMapping
    public ResponseEntity postMember(@RequestBody MemberDto.Post post) {
        Member member = mapper.postToMember(post);
        Long memberId = service.createMember(member);
        return new ResponseEntity<>(memberId, HttpStatus.CREATED);
    }

    @GetMapping("/user")
    public String user() {
        return "user";
    }

    @GetMapping("/home")
    public String home() {
        return "home";
    }

    @PostMapping("/token")
    public String token() {
        return "token";
    }
}
