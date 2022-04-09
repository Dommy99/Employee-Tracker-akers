SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employees;

INSERT INTO department
(name)
VALUES ('Legal'),('Sales'),('Financial'),('Engineering');

INSERT INTO roles
        (title, salary, department_id)
        VALUES
        ('Fry-cook', 20, 1),
        ('Idiot', 45, 2),
        ('Scientist', 12, 3),
        ('Owner', 19, 4);

INSERT INTO employees
        (first_name, last_name, role_id, manager_id)
        VALUES
         ('Spongebob', 'Squarepants', 1, 1),
         ('Patrick', 'Star', 2, 2),
         ('Sandy', 'Cheeks', 3, 3),
         ('Eugene', 'Krabs', 4, 4);