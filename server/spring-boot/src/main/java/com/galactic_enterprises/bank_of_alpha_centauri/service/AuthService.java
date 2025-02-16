package com.galactic_enterprises.bank_of_alpha_centauri.service;

import com.galactic_enterprises.bank_of_alpha_centauri.dto.AuthRequest;
import com.galactic_enterprises.bank_of_alpha_centauri.dto.AuthResponse;
import com.galactic_enterprises.bank_of_alpha_centauri.model.Customer;
import com.galactic_enterprises.bank_of_alpha_centauri.repository.CustomerRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AuthService {

    private final CustomerRepository customerRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(CustomerRepository customerRepository, PasswordEncoder passwordEncoder) {
        this.customerRepository = customerRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public AuthResponse login(AuthRequest request) {
        Optional<Customer> customerOpt = customerRepository.findByEmail(request.getEmail());
        if (customerOpt.isPresent()) {
            Customer customer = customerOpt.get();
            if (passwordEncoder.matches(request.getPassword(), customer.getPasswordHash())) {
                return new AuthResponse("Login successful");
            }
        }
        return new AuthResponse("Invalid email or password");
    }
}
