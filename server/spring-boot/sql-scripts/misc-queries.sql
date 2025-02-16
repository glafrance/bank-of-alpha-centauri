select * from customers;

INSERT INTO customers (
    first_name, last_name, address1, address2, city, state, postal_code, 
    home_phone, work_phone, mobile_phone, email, birth_date, password_hash
) VALUES (
    'John', 'Doe', '123 Main St', 'Apt 4B', 'Springfield', 'IL', '62704', 
    '217-555-1234', '217-555-5678', '217-555-9012', 'johndoe@example.com', '1985-07-14', 
    '$2a$12$qFuODD9Tz2qd1fqbnDdQG.h9vHNtT1YQPFjXgSRl86Od5TA6w/i4a'
);

-- In Postman, do a POST with header Content-Type: application/json and body raw json:
-- { "email": "johndoe@example.com", "password": "password" }
-- http://localhost:8080/api/auth/login
