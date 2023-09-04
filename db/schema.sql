DROP DATABASE IF EXISTS doof_evil_inc;
CREATE DATABASE doof_evil_inc;

USE doof_evil_inc;

CREATE TABLE departments (
  dep_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department VARCHAR(30),
  manager VARCHAR(30)  
);

CREATE TABLE roles (
  role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  role_name VARCHAR(30),
  role_dep_id INT, 
  salary INT,
  
  FOREIGN KEY (role_dep_id) 
  REFERENCES departments(dep_id) 
  ON DELETE SET NULL
);

CREATE TABLE employees (
  emp_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_emp_id INT,

  FOREIGN KEY (role_emp_id)
  REFERENCES roles(role_id) 
  ON DELETE SET NULL
);
