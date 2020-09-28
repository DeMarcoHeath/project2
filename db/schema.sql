CREATE DATABASE rentals_db;
USE rentals_db;

-- Create the table burgers.
CREATE TABLE bikes
(
    id INT NOT NULL AUTO_INCREMENT,
    bike_name VARCHAR(50) NOT NULL,
    rented BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);



