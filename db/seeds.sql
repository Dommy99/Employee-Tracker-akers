SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

INSERT INTO department
(name)
VALUES ('Legal'),('Sales'),('Financial'),('Engineering');

INSERT INTO role
        (title, salary, department_id)
        VALUES
        ('Sales', 20, 1),
        ('Engineer', 45, 2),
        ('Account', 12, 3),
        ('Lawyer', 19, 4);

INSERT INTO employee
        (first_name, last_name, role_id, manager_id)
        VALUES
         ('Spongebob', 'Squarepants', 1, 1),
         ('Patrick', 'Star', 2, 1),
         ('Sandy', 'Cheeks', 3, 1),
         ('Eugene', 'Krabs', 4, 3);