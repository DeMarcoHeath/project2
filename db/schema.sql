CREATE DATABASE rentals;
USE rentals_db;

-- Create the table burgers.
CREATE TABLE bikes
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);