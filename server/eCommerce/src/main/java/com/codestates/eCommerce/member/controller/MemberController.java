package com.codestates.eCommerce.member.controller;

import com.codestates.eCommerce.member.dto.MemberDto;
import com.codestates.eCommerce.member.entity.Member;
import com.codestates.eCommerce.member.mapper.MemberMapper;
import com.codestates.eCommerce.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/api/v1/members")
@Validated
@Slf4j
@RequiredArgsConstructor
public class MemberController {
    private final MemberService service;
    private final MemberMapper mapper;

    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post post) {
        Member member = mapper.postToMember(post);
        Long memberId = service.createMember(member);
        return new ResponseEntity<>(memberId, HttpStatus.CREATED);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId) {
        Member member = service.findMember(memberId);
        MemberDto.Response response = mapper.memberToResponse(member);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }







    // test URI
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
