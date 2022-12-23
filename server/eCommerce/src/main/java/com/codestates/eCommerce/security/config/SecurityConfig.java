package com.codestates.eCommerce.security.config;

import com.codestates.eCommerce.common.config.matterMost.NotificationManager;
import com.codestates.eCommerce.member.mapper.MemberMapper;
import com.codestates.eCommerce.member.repository.MemberRepository;
import com.codestates.eCommerce.security.jwt.JwtAuthenticationFilter;
import com.codestates.eCommerce.security.jwt.JwtAuthorizationFilter;
import com.codestates.eCommerce.security.oauth.OAuth2SuccessHandler;
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

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity(debug = true) // 스프링 시큐리티 필터(SecurityConfig)가 스프링 필터 체인에 등록
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true) // @Secured 활성화, @PreAuthorize & @PostAuthorize 활성화
@RequiredArgsConstructor
public class SecurityConfig {
    private final CorsFilter corsFilter;
    private final MemberMapper mapper;
    private final MemberRepository repository;
    private final NotificationManager notificationManager;
    private final CustomAuthenticationEntryPoint entryPoint;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .addFilter(corsFilter)
                .csrf().disable() // @CrossOrigin(인증X), 인증(O) 필터에 등록
//                .cors(withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(entryPoint)
//                .accessDeniedHandler()
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeRequests(authorize -> authorize
                        .antMatchers(
                                "/api/v1/carts/**",
                                "/api/v1/bookmarks/**",
                                "/api/v1/members/{member-id}/**",
                                "/api/v1/reviews/{review-id}/**"
                        ).authenticated()
                        .anyRequest().permitAll()
                )
                .oauth2Login(oauth2 -> oauth2
//                        .successHandler(new OAuth2MemberSuccessHandler(jwtTokenizer, authorityUtils, memberService))
                        .successHandler(new OAuth2SuccessHandler(mapper))

                );

        return http.build();
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
//            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);
//
//            builder.addFilterAfter(jwtVerificationFilter, OAuth2LoginAuthenticationFilter.class);
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);
            builder
                    .addFilter(new JwtAuthenticationFilter(authenticationManager, mapper))
                    .addFilter(new JwtAuthorizationFilter(authenticationManager, repository, notificationManager));
        }
    }


}
