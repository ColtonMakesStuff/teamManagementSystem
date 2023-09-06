
const { DB_PASS } = require('./tempPass.js');

const inquirer = require('inquirer');
const mysql = require('mysql2');

  const updateEmpRoleQuestions = [
       {
        type: 'input',
        name: `role_emp_id`,
        message: 'what would you like the new role to be (enter role ID)'     
    },
    {
        type: 'input',
        name: `emp_id`,
        message: 'what employees role would you like to update (enter employee ID)'     
    },    
 
    {
        type: 'confirm',
        name: 'confirm',
        message: 'Are you sure you want to update this?',
        default: true
      }
  ];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const handleUpdateEmpData = (questions) => {
    console.log('test')
    inquirer.prompt(questions).then((answers) => {
   
 
        const db = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: DB_PASS,
            database: 'doof_evil_inc'
          });

  db.connect((error) => {
    if (error) throw error;
    console.log(`Connected to the doof_evil_inc database.`);
    console.log('Handling update information...');
    // Retrieve and display the departments table data

        
        const values = questions.slice(0, -1).map(question => answers[question.name]);

      
        const sql = `UPDATE employees SET role_emp_id = ? WHERE emp_id = ?`;
     
       
           console.log('are we there yet?')
            db.query(sql, values, (error, results) => {
                
         if (error) throw error;
         console.table(results);
         db.end(); // Close the MySQL connection
       });
  });


    });
    };

    module.exports = {
        handleUpdateEmpData,
        updateEmpRoleQuestions
      };

