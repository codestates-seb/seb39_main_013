package com.codestates.eCommerce.security.oauth;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.member.dto.MemberDto;
import com.codestates.eCommerce.member.entity.Member;
import com.codestates.eCommerce.member.mapper.MemberMapper;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

@Component
@RequiredArgsConstructor
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler  {
    private final MemberMapper mapper;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
        String jwtToken = JWT.create()
                .withSubject(principalDetails.getUsername()) // 토큰 이름 설정
                .withExpiresAt(new Date(System.currentTimeMillis() + (1000 * 60 * 10)))
                .withClaim("id", principalDetails.getMember().getMemberId())
                .withClaim("email", principalDetails.getMember().getEmail())
                .sign(Algorithm.HMAC512("SECRET"));// 고유한 시크릿 값 적용
        response.addHeader("Authorization", "Bearer " + jwtToken);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        Member member = principalDetails.getMember();
        MemberDto.Response responseMember = mapper.memberToResponse(member);

        new ObjectMapper().writeValue(response.getOutputStream(), new SingleResponseDto<>(responseMember));

        // cors
        response.setHeader("Access-Control-Allow-origin", "*");
        response.setHeader("Access-Control-Allow-Credentials", "true");
    }
}
