package com.codestates.eCommerce.member.controller;

import com.codestates.eCommerce.member.mapper.MemberMapper;
import com.codestates.eCommerce.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class ExceptionController {
    //    @PostMapping("/login/test")
//    public @ResponseBody ResponseEntity postMember(@AuthenticationPrincipal PrincipalDetails principalDetails) {
//        Member member = principalDetails.getMember();
//        MemberDto.Response response = mapper.memberToResponse(member);
//        System.out.println(response);
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//    @GetMapping("/exception/entrypoint")
//    public CommonResult entrypointException() {
//        throw
//    }

    @GetMapping("/test")
    public String test() {
        return "test";
    }
}
