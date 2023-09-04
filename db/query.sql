USE doof_evil_inc;

SELECT  role_name, salary, department, manager
FROM roles
JOIN departments 
ON   roles.role_dep_id = departments.dep_id;

SELECT  department, dep_id FROM departments;

SELECT  first_name, last_name, emp_id, role_name, salary, department, manager
FROM employees
JOIN roles ON employees.role_emp_id = roles.role_id
JOIN departments ON roles.role_dep_id = departments.dep_id;

