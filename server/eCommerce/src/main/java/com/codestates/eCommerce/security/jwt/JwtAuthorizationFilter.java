package com.codestates.eCommerce.security.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.codestates.eCommerce.common.config.matterMost.NotificationManager;
import com.codestates.eCommerce.member.entity.Member;
import com.codestates.eCommerce.member.repository.MemberRepository;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

import static com.codestates.eCommerce.common.config.matterMost.MatterMostHelper.getParams;

// 권한이나 인증이 필요한 특정 주소로 요청했을 경우 BasicAuthenticationFilter 를 거침
// 권한이나 인증이 필요 없는 주소라면 이 필터를 거치지 않ㅇ므
public class JwtAuthorizationFilter extends BasicAuthenticationFilter {
    private final MemberRepository repository;
    private final NotificationManager notificationManager;

    public JwtAuthorizationFilter(AuthenticationManager authenticationManager, MemberRepository repository, NotificationManager notificationManager) {
        super(authenticationManager);
        this.repository = repository;
        this.notificationManager = notificationManager;
    }

    // 인증이나 권한이 필요한 주소 요청시 해당 필터를 타게 됨
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        String jwtHeader = request.getHeader("Authorization");

        // header 가 있는지 확인
        if (jwtHeader == null || !jwtHeader.startsWith("Bearer")) {
//            response.sendError(HttpStatus.UNAUTHORIZED.value());
            chain.doFilter(request, response);
            return;
        }

        // JWT 토큰을 검증해서 정상적인사용자인지 확인
        String jwtToken = request.getHeader("Authorization").replace("Bearer ", "");
        String email = null;


        try {
            email =
                    JWT.require(Algorithm.HMAC512("SECRET")) // SECRET 값 설정
                            .build().verify(jwtToken).getClaim("email").asString();

        } catch (TokenExpiredException e) {
            notificationManager.sendNotification(e,request.getRequestURI(), getParams(request));

            response.sendError(HttpStatus.GONE.value());
            return;
        }




        if (email != null) {
            Optional<Member> optionalMember = repository.findByEmail(email);
            PrincipalDetails principalDetails = new PrincipalDetails(optionalMember.get());

//            Member member = repository.findByEmail(email);
//            PrincipalDetails principalDetails = new PrincipalDetails(member);

            // jwt 토큰 서명을 통해서 서명이 정상이면 Authentication 객체를 만들어준다
            Authentication authentication = new UsernamePasswordAuthenticationToken(principalDetails, null, principalDetails.getAuthorities());

            // 강제로 시큐리티의 세션에 접근하여 Authentication 객체를 저장
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        chain.doFilter(request, response);
//        super.doFilterInternal(request, response, chain);
    }
}
