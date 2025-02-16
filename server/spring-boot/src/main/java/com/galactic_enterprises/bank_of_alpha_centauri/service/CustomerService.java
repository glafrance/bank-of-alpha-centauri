package com.galactic_enterprises.bank_of_alpha_centauri.service;

import com.galactic_enterprises.bank_of_alpha_centauri.model.Customer;
import com.galactic_enterprises.bank_of_alpha_centauri.repository.CustomerRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;
    private final PasswordEncoder passwordEncoder;

    public CustomerService(CustomerRepository customerRepository, PasswordEncoder passwordEncoder) {
        this.customerRepository = customerRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void registerCustomer(Customer customer) {
        customer.setPasswordHash(passwordEncoder.encode(customer.getPasswordHash()));
        customerRepository.save(customer);
    }
}
