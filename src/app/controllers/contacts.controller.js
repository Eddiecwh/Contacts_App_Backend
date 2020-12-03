// const { contacts } = require("../models");
const db = require("../models");
const Contact = db.contacts;
const Op = db.Sequelize.Op;

// Create and save a new contact
exports.create = (req, res) => {
    if (!req.body.firstName || !req.body.lastName || !req.body.mobile || !req.body.email) {
        res.status(400).send({
            message: "You're missing something!"
        });
    }

    // Create the contact
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobile: req.body.mobile,
        email: req.body.email
    }

    console.log(contact);

    // Save the contact in the db
    Contact.create(contact).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong when creating the contact!"
        });
    })
}

// Retrieve all contacts from the database
exports.findAll = (req, res) => {
    const firstName = req.query.firstName;
    var condition = firstName;

    Contact.findAll({where:condition})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong when retrieving the contacts."
        });
    });
};