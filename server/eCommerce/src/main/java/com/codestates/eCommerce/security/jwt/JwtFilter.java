package com.codestates.eCommerce.security.jwt;

import com.auth0.jwt.exceptions.TokenExpiredException;
import com.codestates.eCommerce.common.config.matterMost.NotificationManager;
import com.codestates.eCommerce.common.exception.BusinessLogicException;
import com.codestates.eCommerce.common.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Enumeration;

import static com.codestates.eCommerce.common.config.matterMost.MatterMostHelper.getParams;

@Component
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        response.setCharacterEncoding("utf-8");

        try {
            filterChain.doFilter(request, response);
        } catch (TokenExpiredException e) {
            //만료 에러
//            throw new BusinessLogicException(ExceptionCode.EXPIRED_TOKEN);
            response.sendError(ExceptionCode.EXPIRED_TOKEN.getStatus());
        }
    }



}
