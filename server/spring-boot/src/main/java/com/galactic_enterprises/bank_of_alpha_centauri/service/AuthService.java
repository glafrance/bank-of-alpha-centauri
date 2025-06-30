package com.galactic_enterprises.bank_of_alpha_centauri.service;

import com.galactic_enterprises.bank_of_alpha_centauri.dto.AuthRequest;
import com.galactic_enterprises.bank_of_alpha_centauri.dto.AuthResponse;
import com.galactic_enterprises.bank_of_alpha_centauri.model.Customer;
import com.galactic_enterprises.bank_of_alpha_centauri.repository.CustomerRepository;
import com.galactic_enterprises.bank_of_alpha_centauri.security.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class AuthService {

    private final CustomerRepository customerRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthService(CustomerRepository customerRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.customerRepository = customerRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    public AuthResponse register(Customer customer) {
        Optional<Customer> existingCustomer = customerRepository.findByEmail(customer.getEmail());
        if (existingCustomer.isPresent()) {
            return new AuthResponse("Email is already registered");
        }

        // Hash the password before saving
        customer.setPasswordHash(passwordEncoder.encode(customer.getPasswordHash()));
        customerRepository.save(customer);

        return new AuthResponse("User registered successfully");
    }

    public Map<String, String> login(AuthRequest request) {
        Optional<Customer> customerOpt = customerRepository.findByEmail(request.getEmail());
        if (customerOpt.isPresent()) {
            Customer customer = customerOpt.get();
            if (passwordEncoder.matches(request.getPassword(), customer.getPasswordHash())) {
                String accessToken = jwtUtil.generateAccessToken(customer.getEmail());
                String refreshToken = jwtUtil.generateRefreshToken(customer.getEmail());

                Map<String, String> tokens = new HashMap<>();
                tokens.put("accessToken", accessToken);
                tokens.put("refreshToken", refreshToken);
                return tokens;
            }
        }
        return null;
    }

    public Map<String, String> refreshAccessToken(String refreshToken) {
        if (jwtUtil.validateToken(refreshToken) && !jwtUtil.isTokenExpired(refreshToken)) {
            String email = jwtUtil.extractEmail(refreshToken);
            String newAccessToken = jwtUtil.generateAccessToken(email);

            Map<String, String> tokens = new HashMap<>();
            tokens.put("accessToken", newAccessToken);
            tokens.put("refreshToken", refreshToken); // Reuse same refresh token
            return tokens;
        }
        return null;
    }
}
