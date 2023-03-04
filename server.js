// Require module
const express = require("express");

//Add customers router
const customerRouter = require("./customers");

// Initiliaze application
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Tell app to use customers router
app.use("/customers", customerRouter);

// Define port for my web app
let port = process.env.PORT || 1337;

// Render static content or an existing html page
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port);
console.log("listening on port: ", port);
