

CREATE DATABASE new_burger_db;
USE new_burger_db;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
INSERT INTO burger (name) VALUES ('Chili', true);
INSERT INTO burger (name) VALUES ('Jalapeno', true);
INSERT INTO burger (name, devoured) VALUES ('Cheesy');
INSERT INTO burger (name, devoured) VALUES ('Veggie');
INSERT INTO burger (name, devoured) VALUES ('Bacon');
INSERT INTO burger (name) VALUES ('The Works', true);
