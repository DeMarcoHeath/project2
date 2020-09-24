
-- Create the database rentals_db.
CREATE DATABASE rentals;
USE rentals_db;

-- Create the table bikes.
CREATE TABLE bikes
=======


(
    id INT NOT NULL AUTO_INCREMENT,
    bike_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);