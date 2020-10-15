DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    
id int NOT NULL AUTO_INCREMENT,
name varchar(225) not null,
devoured boolean not null,
PRIMARY KEY (id)

);
