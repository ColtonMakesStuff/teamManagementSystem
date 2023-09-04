const { askTableQuestions } = require('./scripts/tables.js');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const fs = require('fs');

const questionOne = [
  {
    type: 'list',
    name: 'option',
    message: 'what would you like to do?',
    choices: ['view tables', 'update infomartion', 'search employee database'],
  },
]
const questionTwo = [
  {
    type: 'list',
    name: 'table',
    message: 'Select a table to view:',
    choices: ['departments', 'roles', 'employees'],
  },
];

const askQuestions = (questions) => {
inquirer.prompt(questions).then((answers) => {
  // Handle the user's response
  const selectedOption = answers.option
  if (selectedOption === 'view tables'){
    askTableQuestions(questionTwo)
    
   
  }
  if (selectedOption === 'update infomartion'){
    handleUpdateInfo()
  }
  if (selectedOption === 'search employee database'){
    handleSearchEmpData()
  }
  });
 
}

askQuestions(questionOne)

