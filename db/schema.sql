DROP DATABASE IF EXISTS tracker;
CREATE DATABASE tracker;
USE tracker;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
salary decimal(10,2) NOT NULL,
department_id INTEGER NOT NULL,
  FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE employees (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INTEGER,
manager_id INTEGER NOT NULL,
  FOREIGN KEY (manager_id) REFERENCES employees (id),
  FOREIGN KEY (role_id) REFERENCES roles (id)
);