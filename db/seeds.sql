USE doof_evil_inc;

INSERT INTO departments (department, manager)
VALUES ('Sales', 'John Doe'),
       ('Marketing', 'Jane Smith'),
       ('Finance', 'Robert Johnson');

INSERT INTO roles (role_name, role_dep_id, salary) 
VALUES ('Sales Representative', 1, 50000),
       ('Sales Manager', 1, 80000),
       ('Marketing Specialist', 2, 60000),
       ('Marketing Manager', 2, 90000),
       ('Financial Analyst', 3, 70000),
       ('Finance Manager', 3, 100000);

INSERT INTO employees (first_name, last_name, role_emp_id) 
VALUES ('John', 'Doe', 2),
       ('Jane', 'Smith', 4),
       ('Robert', 'Johnson', 6),
       ('Michael', 'Brown', 1),
       ('Emily', 'Davis', 3),
       ('David', 'Wilson', 5),
       ('Sarah', 'Anderson', 1);

