
const { DB_PASS } = require('./tempPass.js');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const updateQuestions = [
    {
      type: 'list',
      name: 'type',
      message: 'would you like to add or remove an item?',
      choices: ['add', 'remove'],
    },
  ];

  const whichQuestion = [
    {
      type: 'list',
      name: 'group',
      message: 'which group would you like to change?',
      choices: ['employees', 'roles', 'departments'],
    },
  ];

  const newDepartmentQuestion = [
    {
      type: 'input',
      name: 'department',
      message: 'Enter the department name:'
    },
    {
      type: 'input',
      name: 'manager',
      message: 'Enter the manager name:'
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Are you sure you want to add this department?',
      default: true
    }
  ]

  const newRoleQuestion = [
    {
      type: 'input',
      name: 'role_Name',
      message: 'Enter the role name:'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the salary:'
    },
    {
      type: 'input',
      name: 'role_dep_id',
      message: 'Enter the department ID:'
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Are you sure you want to add this role?',
      default: true
    }
  ];

  const newEmployeeQuestion = [
    {
      type: 'input',
      name: 'first_Name',
      message: 'Enter the first name:'
    },
    {
      type: 'input',
      name: 'last_Name',
      message: 'Enter the last name:'
    },
    {
      type: 'input',
      name: 'role_emp_Id',
      message: 'Enter the role ID:'
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Are you sure you want to add this employee?',
      default: true
    }
  ];
  
  
  const removeDepQuestion = [
    {
      type: 'input',
      name: `dep_id`,
      message: 'enter ID of item to be removed'     
    },
    {
        type: 'confirm',
        name: 'confirm',
        message: 'Are you sure you want to remove this?',
        default: true
      }
  ];
  const removeEmpQuestion = [
    {
      type: 'input',
      name: `emp_id`,
      message: 'enter ID of item to be removed'     
    },
    {
        type: 'confirm',
        name: 'confirm',
        message: 'Are you sure you want to remove this?',
        default: true
      }
  ];
  const removeRoleQuestion = [
    {
      type: 'input',
      name: `role_id`,
      message: 'enter ID of item to be removed'     
    },
    {
        type: 'confirm',
        name: 'confirm',
        message: 'Are you sure you want to remove this?',
        default: true
      }
  ];
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const changeIt = (table, questions) => {
    inquirer.prompt(questions).then((answers) => {
 // Connect to database
 const db = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: process.env.DB_PASSWORD,
            database: 'doof_evil_inc'
          });

  db.connect((error) => {
    if (error) throw error;
    console.log(`Connected to the doof_evil_inc database.`);
    console.log('Handling update information...');
    // Retrieve and display the departments table data

        const placeholders = questions.slice(0, -1).map(() => '?').join(', ');
        const columns = questions.slice(0, -1).map(question => question.name).join(', ');   
        const values = questions.slice(0, -1).map(question => answers[question.name]);

      
        const sql = `INSERT INTO ${table} (${columns}) VALUES (${placeholders})`;
     
       
           console.log('are we there yet?')
            db.query(sql, values, (error, results) => {
                
         if (error) throw error;
         console.table(results);
         db.end(); // Close the MySQL connection
       });
  });
})
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const removeIt = (table, questions) => {
    inquirer.prompt(questions).then((answers) => {
 // Connect to database
 const db = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: process.env.DB_PASSWORD,
            database: 'doof_evil_inc'
          });

  db.connect((error) => {
    if (error) throw error;
    console.log(`Connected to the doof_evil_inc database.`);
    console.log('Handling update information...');
    // Retrieve and display the departments table data

        const columns = questions.slice(0, -1).map(question => question.name).join(', ');   
        const values = questions.slice(0, -1).map(question => answers[question.name]);

      
        const sql = `DELETE FROM ${table} WHERE ${columns} = ?`;
     
       
           console.log('are we there yet?')
            db.query(sql, values, (error, results) => {
                
         if (error) throw error;
         console.table(results);
         db.end(); // Close the MySQL connection
       });
  });
})
}


const handleUpdateInfo = (updateQuestions, whichQuestion) =>{
    inquirer.prompt(updateQuestions).then((answers) => {
    const addOrDelete = answers.type;
      console.log(`You selected to ${addOrDelete} information.`);
      inquirer.prompt(whichQuestion).then((answers) => {
  const groupType = answers.group;
  console.log(`You selected to alter the ${groupType} information.`);

//add case
  if (addOrDelete === 'add'){
        if (groupType === 'employees'){
    changeIt(groupType, newEmployeeQuestion)
            }
        if (groupType === 'roles'){
    changeIt(groupType, newRoleQuestion)
            }
        if (groupType === 'departments'){
    changeIt(groupType, newDepartmentQuestion)
            }
    }

//remove case
    if (addOrDelete === 'remove'){
        if (groupType === 'employees'){
    removeIt(groupType, removeEmpQuestion)
            }
        if (groupType === 'roles'){
    removeIt(groupType, removeRoleQuestion)
            }
        if (groupType === 'departments'){
    removeIt(groupType, removeDepQuestion)
            }
    }

    });
    });
    }

    module.exports = {
        handleUpdateInfo,
        updateQuestions,
        whichQuestion
      };

