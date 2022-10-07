package com.codestates.eCommerce.security.config;

import com.codestates.eCommerce.common.config.matterMost.NotificationManager;
import com.codestates.eCommerce.member.repository.MemberRepository;
import com.codestates.eCommerce.member.mapper.MemberMapper;
import com.codestates.eCommerce.security.jwt.CustomAccessDeniedHandler;
import com.codestates.eCommerce.security.jwt.JwtAuthenticationFilter;
import com.codestates.eCommerce.security.jwt.JwtAuthorizationFilter;
import com.codestates.eCommerce.security.jwt.JwtFilter;
import com.codestates.eCommerce.security.oauth.OAuth2FailureHandler;
import com.codestates.eCommerce.security.oauth.OAuth2SuccessHandler;
import com.codestates.eCommerce.security.oauth.PrincipalOauth2UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity // 스프링 시큐리티 필터(SecurityConfig)가 스프링 필터 체인에 등록
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true) // @Secured 활성화, @PreAuthorize & @PostAuthorize 활성화
@RequiredArgsConstructor
public class SecurityConfig {
    private final CorsFilter corsFilter;
    private final MemberRepository repository;
    private final PrincipalOauth2UserService principalOauth2UserService;
    private final OAuth2SuccessHandler successHandler;
    private final OAuth2FailureHandler failureHandler;
    private final RestAuthenticationEntryPoint restAuthenticationEntryPoint;
    private final CustomAccessDeniedHandler accessDeniedHandler;
    private final JwtFilter jwtFilter;
    private final MemberMapper mapper;
    private final NotificationManager notificationManager;
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilter(corsFilter) // @CrossOrigin(인증X), 인증(O) 필터에 등록
                .formLogin().disable()
                .httpBasic().disable()
                .apply(new CustomDsl())
                .and()
//                .exceptionHandling()
//                .authenticationEntryPoint(restAuthenticationEntryPoint)
//                .and()
                .authorizeRequests()
                .antMatchers(
                        "/api/v1/carts/**",
                        "/api/v1/bookmarks/**",
                        "/api/v1/members/{member-id}/**"
                )
                .authenticated()

//                .antMatchers("/api/v1/members/user/**").access("hasRole('ROLE_MEMBER') or hasRole('MANAGER')")
//                .antMatchers("/api/v1/members/user/**").access("hasRole('MEMBER') or hasRole('MANAGER')")
//                .antMatchers("/api/v1/members/manager/**").access("hasRole('MANAGER')")
                .anyRequest().permitAll();
//                .and()
//                .exceptionHandling()
//                .accessDeniedHandler(accessDeniedHandler)
//                .authenticationEntryPoint(restAuthenticationEntryPoint);
//                .and().addFilterBefore(jwtFilter, JwtAuthenticationFilter.class);
//                .and()

//                .exceptionHandling().accessDeniedHandler(accessDeniedHandler)
//                .and()
//                .oauth2Login()
//                .loginProcessingUrl("/login")
//                .successHandler(successHandler)
//                .failureHandler(failureHandler)
//                .userInfoEndpoint()
//                .userService(principalOauth2UserService);

        http.csrf().disable();
        return http.build();
    }

    public class CustomDsl extends AbstractHttpConfigurer<CustomDsl, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);
            builder
                    .addFilter(corsFilter)
                    .addFilter(new JwtAuthenticationFilter(authenticationManager, mapper))
                    .addFilter(new JwtAuthorizationFilter(authenticationManager, repository, notificationManager));
        }
    }
}
