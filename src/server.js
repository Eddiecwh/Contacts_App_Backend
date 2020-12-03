// Used to build our REST APIs
const express = require('express');

// Parse the requests and create the req.body obj
const bodyParser = require("body-parser");

// Express middleware
const cors = require("cors");

const app = express();

const db = require("./app/models");
// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

var corsSettings = {
    origin: "http://localhost:8081"
};

app.use(cors(corsSettings));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.json({message: "Welcome to my contacts application for Relatient!"});
})

require("./app/routes/contacts.routes")(app);

// set port, and listen for requests
const port = process.env.port || 8080;
app.listen(port, ()=> {
    console.log(`Let's go! The server is running on port: ${port}!
    `);
})
