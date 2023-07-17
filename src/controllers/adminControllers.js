const path = require('path');

const adminControllers = {
    adminView: (req, res) => res.sendFile(path.resolve(__dirname, '../../public/pages/admin/admin.html')),
    createView: (req, res) => res.send('Create View Route'),
    createItem: (req, res) => res.send('Create Route for new item'),
    editView: (req, res) => {
        const id = req.params.id;
        res.send(`Edit View for item with ID: ${id}`);
    },
    editItem: (req, res) => {
        const id = req.params.id;
        res.send(`Edit Route for item with ID: ${id}, with new data`);
    },
    deleteItem: (req, res) => {
        const id = req.params.id;
        res.send(`Delete Route for item with ID: ${id}`);
    },
    loginView: (req, res) => res.sendFile(path.resolve(__dirname, '../../public/pages/admin/login.html')),
    loginUser: (req, res) => res.send('Login Route for User'),
    registerView: (req, res) => res.send('Register View'),
    registerUser: (req, res) => res.send('Register Route for new user')
};

module.exports = adminControllers;