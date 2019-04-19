DROP DATABASE IF EXISTS BamazonDB;

CREATE DATABASE BamazonDB;

USE BamazonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item_id VARCHAR(45) NULL,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price INT NULL,
  stock_quantity INT NULL,
   
  PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("car parts", "automotive", "toyota", 300, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("books", "Harry Potter", "others", 15, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("artwork","The Mona Lisa", "Art", 10000, 1);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("shoes", "shoes", "DSW", 15000, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("vitamins", "megamen", "vitamin shop", 1000, 40);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("kitchen appliance", "fridge", "menards", 15000, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("bed sheets", "blue sheets", "target", 110, 6);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("Cloth", "blouse", "women wear", 15, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("movies", "The Lord of the Ring", "best buy", 80, 3);
 
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("toy", "remote control car", "toys", 15, 1);
