const path = require('path');

const adminControllers = {
    admin: (req, res) => res.sendFile(path.resolve(__dirname, '../../public/pages/admin/admin.html')),
    create: (req, res) => res.send('Create View Route'),
    edit: (req, res) => {
        const id = req.params.id;
        res.send(`Edit View Route for item with ID: ${id}`);
    },
    delete: (req, res) => {
        const id = req.params.id;
        res.send(`Delete View Route for item with ID:${id}`);
    },
    login: (req, res) => res.sendFile(path.resolve(__dirname, '../../public/pages/admin/login.html')),
    register: (req, res) => res.send('Register View Route')
};

module.exports = adminControllers;