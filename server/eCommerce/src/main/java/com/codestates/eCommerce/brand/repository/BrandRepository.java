package com.codestates.eCommerce.brand.repository;

import com.codestates.eCommerce.brand.entity.Brand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandRepository extends JpaRepository<Brand, Long> {
}
