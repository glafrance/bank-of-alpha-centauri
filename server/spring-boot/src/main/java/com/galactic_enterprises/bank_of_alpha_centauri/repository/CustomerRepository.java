package com.galactic_enterprises.bank_of_alpha_centauri.repository;

import com.galactic_enterprises.bank_of_alpha_centauri.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Optional<Customer> findByEmail(String email);
}
