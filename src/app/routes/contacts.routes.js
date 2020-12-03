module.exports = app => {
    const contacts = require("../controllers/contacts.controller");

    var router = require("express").Router();

    // Create a new Contact
    router.post("/", contacts.create);

    // get all Contacts
    router.get("/", contacts.findAll);

    app.use('/api/contacts', router);
}