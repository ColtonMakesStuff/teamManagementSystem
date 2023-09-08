# teamManagementSystem
a simple company team management system

# Content Management System

This is a content management system for tracking employee data at a company.

## Getting Started

1. Create a `.env` file and add the following environment variables:
    - `DB_USER` - The username for the MySQL database user
    - `DB_PASSWORD` - The password for the MySQL database user
    - `DB_NAME` - The name of the MySQL database

2. Run the command `npm install` to install the dependencies.

3. Run the commands `mysql -u root -p <./db/schema.sql` and `mysql -u root -p <./db/seeds.sql` to create the database and seed it with data.

4. Run the command `node index.js` to start the application.

## Usage

To view and manage departments, roles, and employees, you can use the following inquirer prompts:

- **View departments**: This will list all of the departments in the database.
- **View roles**: This will list all of the roles in the database.
- **View employees**: This will list all of the employees in the database.
- **Add department**: This will add a new department to the database.
- **Add role**: This will add a new role to the database.
- **Add employee**: This will add a new employee to the database.
- **Update employee role**: This will update the role of an existing employee.

## Demo Video 
- https://youtu.be/SQCmu4rjX1M

## Planned Features

- Better functionality for selecting information.
- Instead of requiring an ID to be inputted, display a list of options.
- More visually pleasing application.

## Author

This application was created by ColtonMakesStuff.
