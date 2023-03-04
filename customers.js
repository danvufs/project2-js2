// Require module
const express = require("express");
const customerRouter = express.Router();

// Include file system module from node
let fs = require("fs");

// /add route to create new customer
customerRouter.route("/add").post((request, response) => {
    let body = request.body;

    // Create path to add new customer file
    let path = __dirname + `/data/${body.customerId}.txt`;

    // Search for existing file with the customer ID as name
    fs.access(path, error => {

        // If the file already exists, return a message to print out on the browser
        if (!error) {
            response.json("<p style='color:red'>Customer ID already exists</p>");
        } else {
            // Parse object to JSON string
            let custToAdd = JSON.stringify(body);

            // Write the file
            fs.writeFile(__dirname + `/data/${body.customerId}.txt`, custToAdd, function (err) {
                // If something went wrong, throw the error
                if (err) {
                    throw err;
                }
                // Return a message to print out on the browser
                response.json("Customer added!");
            });
        }
    });
});

// /update route to update new customer
customerRouter.route("/update").post((request, response) => {
    let body = request.body;

    // Create path to find the customer
    let path = __dirname + `/data/${body.customerId}.txt`;

    // Search for existing file with the customer ID as name
    fs.access(path, error => {
        // If found
        if (!error) {
            // Parse object to JSON string
            let custToUpdate = JSON.stringify(body);

            // Overwrite the file
            fs.writeFile(__dirname + `/data/${body.customerId}.txt`, custToUpdate, function (err) {
                // If something went wrong, throw the error
                if (err) {
                    throw err;
                }
                // Return a message to print out on the browser
                response.json("Customer successfully updated!");
            });
        }
        // If not found, return a red message to inform customer that the specific customer does not exist
        else {
            response.json("<p style='color:red'>Customer does not exist!</p>");
        }
    });
});

// /delete route to delete existing customer
customerRouter.route("/delete").post((request, response) => {
    let body = request.body;

    // Create path to find the customer
    let filetoDelete = __dirname + `/data/${body.customerId}.txt`;

    // Delete file
    fs.unlink(filetoDelete, function (err) {
        // If something went wrong, return a message to print out on the browser
        if (err) {
            response.statusCode = 400;
            response.json("Customer does not exist!");
        } else {
            // Return a message to print out on the browser
            response.json("Customer successfully deleted!");
        }
    });
});

// /find route to find customer
customerRouter.route("/find").post((request, response) => {
    let body = request.body;

    // Path of file to find
    let filetoFind = __dirname + `/data/${body.customerId}.txt`;

    // Check if file exists
    fs.access(filetoFind, (error) => {
         // If yes, read the file to get JSON string
        if (!error) {
            var customerObject = fs.readFile(filetoFind, "utf8", function (err, data) {
                if (err) {
                    throw err;
                }
                // Return the JSON string to the browser
                response.json(data);
            });
        }
        // If not found, return a message to inform customer that the specific customer does not exist with red color
        else {
            response.json("Customer does not exist!");
        }
    });
});

// Export the module
module.exports = customerRouter;