select * from customers;

INSERT INTO customers (
    first_name, last_name, address1, address2, city, state, postal_code, 
    home_phone, work_phone, mobile_phone, email, birth_date, password_hash
) VALUES (
    'John', 'Doe', '123 Main St', 'Apt 4B', 'Springfield', 'IL', '62704', 
    '217-555-1234', '217-555-5678', '217-555-9012', 'johndoe@example.com', '1985-07-14', 
    '$2a$12$zikY30ZoRx.IS5Lxa4VVruSIk9FUS8fB7tmsdIsxKgLgYQbe3tCwK'
);

-- In Postman, do a POST with header Content-Type: application/json and body raw json:
-- { "email": "johndoe@example.com", "password": "passwordABC1!" }
-- http://localhost:8080/api/auth/login
