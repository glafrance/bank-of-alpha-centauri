package com.galactic_enterprises.bank_of_alpha_centauri.controller;

import com.galactic_enterprises.bank_of_alpha_centauri.dto.AuthRequest;
import com.galactic_enterprises.bank_of_alpha_centauri.dto.AuthResponse;
import com.galactic_enterprises.bank_of_alpha_centauri.model.Customer;
import com.galactic_enterprises.bank_of_alpha_centauri.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody Customer customer) {
        AuthResponse response = authService.register(customer);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody AuthRequest request) {
        Map<String, String> tokens = authService.login(request);
        if (tokens == null) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid credentials"));
        }
        return ResponseEntity.ok(tokens);
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<Map<String, String>> refreshToken(@RequestBody Map<String, String> request) {
        String refreshToken = request.get("refreshToken");
        Map<String, String> tokens = authService.refreshAccessToken(refreshToken);

        if (tokens == null) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid or expired refresh token"));
        }
        return ResponseEntity.ok(tokens);
    }
}
