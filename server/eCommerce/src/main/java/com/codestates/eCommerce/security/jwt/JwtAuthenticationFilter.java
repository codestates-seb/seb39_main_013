package com.codestates.eCommerce.security.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.codestates.eCommerce.common.dto.SingleResponseDto;
import com.codestates.eCommerce.member.dto.MemberDto;
import com.codestates.eCommerce.member.entity.Member;
import com.codestates.eCommerce.member.mapper.MemberMapper;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

// 스프링 시큐리티에 UsernamePasswordAuthenticationFilter 등록되어 있음
// ("/login")으로 username, password 를 post 요청시
// UsernamePasswordAuthenticationFilter 동작
// JwtAuthenticationFilter 를 시큐리티 config 에 등록
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;
    private final MemberMapper mapper;

    // ("/login") 요청을 하면 로그인 시도를 위해서 실행되는 함수
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            ObjectMapper om = new ObjectMapper();
            Member member = om.readValue(request.getInputStream(), Member.class);
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(member.getEmail(), member.getPassword());

            // authenticationManager 로 로그인 시도를 하면
            // principalDetailsService 의 loadUserByUsername() 가 실행된 후 정상이면 authentication 이 리텀됨
            Authentication authentication = authenticationManager.authenticate(authenticationToken);

            // authentication 객체를 session 영역에 저장(권한 관리를 security 가 대신해 줌)
            return authentication;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    // attemptAuthentication() 실행 후 인증이 정상적으로 되었으면 successfulAuthentication() 실행
    // JWT 토크을 만들어서 request 요청한 사용자에게 JWT 토큰을 response
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        PrincipalDetails principalDetails = (PrincipalDetails) authResult.getPrincipal();
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

        chain.doFilter(request, response);
    }

    @Override
    protected AuthenticationSuccessHandler getSuccessHandler() {
        return super.getSuccessHandler();
    }
}
