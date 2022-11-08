package com.codestates.eCommerce.security.config;

import com.google.common.base.CaseFormat;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;
import java.util.Enumeration;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Configuration
public class SnakeCaseConfig{
    @Bean // 필터를 빈 선언
    public OncePerRequestFilter snakeCaseConverterFilter(){
        return new OncePerRequestFilter() {
            @Override
            protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

                final Map<String, String[]> paramters = new ConcurrentHashMap<>();
                System.out.println("안녕하세요 1번입니다");
                // 파라미터의 키 값을 snake_case에서 camelCase 변환 후 맵에 값을 가지고 있음
                for(String param : request.getParameterMap().keySet()){
                    String camelCaseParam = CaseFormat.LOWER_UNDERSCORE.to(CaseFormat.LOWER_CAMEL, param);

                    paramters.put(camelCaseParam, request.getParameterValues(param));
                    paramters.put(param, request.getParameterValues(param));
                }

                // 필터체인을 이용하여, request에 해당 값을 추가하여 반환
                filterChain.doFilter(new HttpServletRequestWrapper(request){

                    @Override
                    public String getParameter(String name){
                        return paramters.containsKey(name) ? paramters.get(name)[0] : null;
                    }

                    @Override
                    public Enumeration<String> getParameterNames(){
                        return Collections.enumeration(paramters.keySet());
                    }

                    @Override
                    public String[] getParameterValues(String name){
                        return paramters.get(name);
                    }

                    @Override
                    public Map<String, String[]> getParameterMap(){
                        return paramters;
                    }

                }, response);
            }

        };
    }

    @Bean // 필터를 빈 선언
    public OncePerRequestFilter snakeCaseConverterFilter2(){
        return new OncePerRequestFilter() {
            @Override
            protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

                final Map<String, String[]> paramters = new ConcurrentHashMap<>();

                System.out.println("안녕하세요 2번입니다");
                // 파라미터의 키 값을 snake_case에서 camelCase 변환 후 맵에 값을 가지고 있음
                for(String param : request.getParameterMap().keySet()){
                    String camelCaseParam = CaseFormat.LOWER_UNDERSCORE.to(CaseFormat.LOWER_CAMEL, param);

                    paramters.put(camelCaseParam, request.getParameterValues(param));
                    paramters.put(param, request.getParameterValues(param));
                }

                // 필터체인을 이용하여, request에 해당 값을 추가하여 반환
                filterChain.doFilter(new HttpServletRequestWrapper(request){

                    @Override
                    public String getParameter(String name){
                        return paramters.containsKey(name) ? paramters.get(name)[0] : null;
                    }

                    @Override
                    public Enumeration<String> getParameterNames(){
                        return Collections.enumeration(paramters.keySet());
                    }

                    @Override
                    public String[] getParameterValues(String name){
                        return paramters.get(name);
                    }

                    @Override
                    public Map<String, String[]> getParameterMap(){
                        return paramters;
                    }

                }, response);
            }

        };
    }
}
