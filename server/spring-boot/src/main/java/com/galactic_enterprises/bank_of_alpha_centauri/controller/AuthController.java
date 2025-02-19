package com.galactic_enterprises.bank_of_alpha_centauri.controller;

import com.galactic_enterprises.bank_of_alpha_centauri.dto.AuthRequest;
import com.galactic_enterprises.bank_of_alpha_centauri.dto.AuthResponse;
import com.galactic_enterprises.bank_of_alpha_centauri.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        AuthResponse response = authService.login(request);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/logout")
    public ResponseEntity<AuthResponse> logout() {
        return ResponseEntity.ok(new AuthResponse("Logout successful"));
    }
}
