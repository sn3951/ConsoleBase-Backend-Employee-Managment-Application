Demo video of the task:- https://drive.google.com/file/d/1tGyYd9ChI7Sa3M07t6YXw_4-XEcKxnEF/view?usp=sharing

# Employee Management Application

This is a console-based/backend application for managing employee records using Node.js, Express.js, and MongoDB.

## Features

- Create an Employee
- Update an Employee's Record
- Delete an Employee
- Search for Employees
- Filter Employees based on criteria
- Calculate Average Salary of Employees in a Department
- Calculate Average Salary of All Employees

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/ConsoleBase-Backend-Employee-Managment-Application.git

2. Navigate to the project directory:
   ```sh
   cd ConsoleBase-Backend-Employee-Managment-Application

3. Install dependencies:
   ```
   npm install

## Running the Application

1. Start the server:
    ```sh
   npm start

The server will run on http://localhost:5000.

## API Endpoints
- Create Employee: POST  http://localhost:5000/api/v1/create
- Update Employee: PUT   http://localhost:5000/api/v1/update/:id
- Delete Employee: DELETE  http://localhost:5000/api/v1/delete/:fullName
- Search Employees: GET  http://localhost:5000/api/v1/search?query=fullName
- Filter Employees: GET http://localhost:5000/api/v1/filter?department=:department
- Get Average Salary of Department: GET http://localhost:5000/api/v1/avgSalOfDepartment/:department
- Get Average Salary of All Employees: GET http://localhost:5000/api/v1/avgSalOfAllEmployees


