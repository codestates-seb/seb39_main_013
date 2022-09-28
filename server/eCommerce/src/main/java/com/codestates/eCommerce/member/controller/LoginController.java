package com.codestates.eCommerce.member.controller;

import com.codestates.eCommerce.member.dto.MemberDto;
import com.codestates.eCommerce.member.entity.Member;
import com.codestates.eCommerce.member.repository.mapper.MemberMapper;
import com.codestates.eCommerce.member.service.MemberService;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class LoginController {
    private final MemberService service;
    private final MemberMapper mapper;

    @PostMapping("/login/test")
    public @ResponseBody ResponseEntity postMember(@AuthenticationPrincipal PrincipalDetails principalDetails) {
        Member member = principalDetails.getMember();
        MemberDto.Response response = mapper.memberToResponse(member);
        System.out.println(response);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("test")
    public String test() {
        return "test";
    }
}
