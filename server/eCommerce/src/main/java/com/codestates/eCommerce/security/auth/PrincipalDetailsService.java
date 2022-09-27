package com.codestates.eCommerce.security.auth;

import com.codestates.eCommerce.member.entity.Member;
import com.codestates.eCommerce.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

// ("/login")
// login 요청이 오면 자동으로 UserDetailsService 타입으로 IOC 되어 있는 loadUserByUsername() 실행
@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService {
    private final MemberRepository repository;

    @Override // 함수 종료 시 @AuthenticationPrincipal 어노테이션이 만들어진다
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Member> optionalMember = repository.findByEmail(email);
        if (optionalMember.isPresent()) {
            return new PrincipalDetails(optionalMember.get());
        }
        return null;

//        Member member = repository.findByEmail(email);
//        if (member != null) {
//            return new PrincipalDetails(member);
//        }
//        return null;
    }
}
