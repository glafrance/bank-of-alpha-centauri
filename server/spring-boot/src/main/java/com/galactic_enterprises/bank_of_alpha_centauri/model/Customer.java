package com.galactic_enterprises.bank_of_alpha_centauri.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(length = 30, nullable = false)
    private String firstName;

    @Column(length = 30, nullable = false)
    private String lastName;

    @Column(length = 45, nullable = false)
    private String address1;

    @Column(length = 45)
    private String address2;

    @Column(length = 30, nullable = false)
    private String city;

    @Column(length = 30, nullable = false)
    private String state;

    @Column(length = 10, nullable = false)
    private String postalCode;

    @Column(length = 20)
    private String homePhone;

    @Column(length = 20)
    private String workPhone;

    @Column(length = 20)
    private String mobilePhone;

    @Column(length = 320, nullable = false)
    private String email;

    @Column(nullable = false)
    private LocalDate birthDate;

    @Column(length = 72, nullable = false)
    private String passwordHash;

    public Customer() {}

    public Customer(
            String firstName,
            String lastName,
            String address1,
            String address2,
            String city,
            String state,
            String postalCode,
            String homePhone,
            String workPhone,
            String mobilePhone,
            String email,
            LocalDate birthDate,
            String passwordHash
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.homePhone = homePhone;
        this.workPhone = workPhone;
        this.mobilePhone = mobilePhone;
        this.email = email;
        this.birthDate = birthDate;
        this.passwordHash = passwordHash;
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getHomePhone() {
        return homePhone;
    }

    public void setHomePhone(String homePhone) {
        this.homePhone = homePhone;
    }

    public String getWorkPhone() {
        return workPhone;
    }

    public void setWorkPhone(String workPhone) {
        this.workPhone = workPhone;
    }

    public String getMobilePhone() {
        return mobilePhone;
    }

    public void setMobilePhone(String mobilePhone) {
        this.mobilePhone = mobilePhone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }
}
