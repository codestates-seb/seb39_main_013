package com.codestates.eCommerce.security.oauth;

import com.codestates.eCommerce.member.entity.Member;
import com.codestates.eCommerce.member.repository.MemberRepository;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PrincipalOauth2UserService extends DefaultOAuth2UserService {
    private final MemberRepository repository;
    private final BCryptPasswordEncoder passwordEncoder;

    // 구글로 부터 받은 userRequest 데이터에 대한 후처리 함수
    // 구글 로그인 버튼 클릭 > 구글 로그인창 > 로그인을 완료 > code 를 리턴(OAuth-Client 라이브러리) > Access Token 요청
    // > userRequest 정보 > loadUser 함수 호출 > 구글로부터 회원 프로필 전달
    // userRequest.getClientRegistration() registrationId 로 어떤 OAuth 로 로그인 했는지 확인 가능
    @Override // // 함수 종료 시 @AuthenticationPrincipal 어노테이션이 만들어진다
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);
        String provider = userRequest.getClientRegistration().getClientId();// google
        String providerId = oAuth2User.getAttribute("sub");
        String email = oAuth2User.getAttribute("email");
        String name = oAuth2User.getAttribute("name"); // todo 없으도 되나?
        String password = passwordEncoder.encode(oAuth2User.getAttribute("sub")); // todo 없으도 되나?
        String role = "ROLE_MEMBER";
        Member member = repository.findByEmail(email);
        if (member == null) {
            member = Member.builder().password(password).name(name).email(email).provider(provider).providerId(providerId).role(role).build();
            repository.save(member);
        }
        return new PrincipalDetails(member, oAuth2User.getAttributes());
    }
}
