DROP DATABASE IF EXISTS 'saidit'


CREATE DATABASE saidit

USE saidit;

CREATE TABLE products(

name VARCHAR(30) NOT NULL,

topic VARCHAR(30)  NOT NULL, 

question VARCHAR(100) NOT NULL,


);

SELECT * FROM products;