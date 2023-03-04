# project2

This is a Node.js application for managing customer data, where customers can be added, updated, deleted, and searched.

## Installation
To install the dependencies, run the following command in the terminal:

npm install

## Usage
To start the server, run the following command in the terminal:

npm start
This will start the server on http://localhost:1337.

## The following routes are available:

/add
To add a new customer, make a POST request to /add with a JSON object containing the customer's information. The customerId must be unique, and a file will be created with the customer's information.

/update
To update an existing customer, make a POST request to /update with a JSON object containing the customer's information, including the customerId. If the customer exists, their file will be overwritten with the new information.

/delete
To delete an existing customer, make a POST request to /delete with a JSON object containing the customer's customerId. If the customer exists, their file will be deleted.

/find
To find an existing customer, make a POST request to /find with a JSON object containing the customer's customerId. If the customer exists, their file will be read and returned as a JSON object.

## File Storage
The customer data is stored as individual files in the data/ directory. Each file is named after the customer's customerId, with a .txt extension.

## Dependencies
express
fs
License
This project is licensed under the MIT License.
