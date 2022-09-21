package com.codestates.eCommerce.security.auth;

import com.codestates.eCommerce.member.entity.Member;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

//Security Session : Authentication 타입
//Authentication : UserDetails(PrincipalDetails) 타입
@RequiredArgsConstructor
@Data
public class PrincipalDetails implements UserDetails {
    private final Member member;

    //해당 member의 권한을 리턴하는곳
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new GrantedAuthority() {
            @Override
            public String getAuthority() {
                return member.getRole();
//                return member.getMemberStatus().getStatus();
            }
        });
        return authorities;
    }

    @Override
    public String getPassword() {
        return member.getPassword();
//        return null;
    }

    @Override
    public String getUsername() {
        return member.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
