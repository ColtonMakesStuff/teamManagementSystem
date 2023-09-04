const inquirer = require('inquirer')
const mysql = require('mysql2');

const askTableQuestions = (questions) =>{
    inquirer.prompt(questions).then((answers) => {
    const selectedTable = answers.table;
      console.log(`You selected to view the ${selectedTable} table.`);
      
      // Connect to database
      const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'doof_evil_inc'
      });
    
      db.connect((error) => {
        if (error) throw error;
        console.log(`Connected to the doof_evil_inc database.`);
        console.log('Handling view tables...');
        // Retrieve and display the departments table data
        if (selectedTable === 'departments') {
          db.query('SELECT  department, dep_id FROM departments', (error, results) => {
            if (error) throw error;
            console.table(results);
            db.end(); // Close the MySQL connection
            
          });
        }
        if (selectedTable === 'employees') {
          db.query('SELECT  first_name, last_name, emp_id, role_name, salary, department, manager FROM employees JOIN roles ON employees.role_emp_id = roles.role_id JOIN departments ON roles.role_dep_id = departments.dep_id', (error, results) => {
            if (error) throw error;
            console.table(results);
            db.end(); // Close the MySQL connection
          });
        }
        if (selectedTable === 'roles') {
          db.query('SELECT  role_name, salary, department, manager FROM roles JOIN departments ON roles.role_dep_id = departments.dep_id', (error, results) => {
            if (error) throw error;
            console.table(results);
            db.end(); // Close the MySQL connection
          });
        }
      });
    });
    }

    module.exports = {
        askTableQuestions: askTableQuestions
      };