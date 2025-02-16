USE bank_of_alpha_centauri;

DROP TABLE customers;

CREATE TABLE customers (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    address1 VARCHAR(45) NOT NULL,
    address2 VARCHAR(45),
    city VARCHAR(30) NOT NULL,
    state VARCHAR(30) NOT NULL,
    postal_code VARCHAR(10) NOT NULL,
    home_phone VARCHAR(20),
    work_phone VARCHAR(20),
    mobile_phone VARCHAR(20),
    email VARCHAR(320),
    birth_date DATE NOT NULL,
    password_hash VARCHAR(72) NOT NULL,
    PRIMARY KEY (id)
);