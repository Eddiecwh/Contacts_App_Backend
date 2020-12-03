// This model represents our contact table info in our MySQL database
module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        mobile: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        }
    });

    return Contact;
}