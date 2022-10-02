package com.codestates.eCommerce.payment.repository;

import com.codestates.eCommerce.payment.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
}
