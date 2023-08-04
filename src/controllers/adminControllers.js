const { createProduct, editProduct, deleteProduct } = require('../services/itemServices');
const path = require('path');

const adminControllers = {
    adminView: (req, res) => res.sendFile(path.resolve(__dirname, '../../public/pages/admin/admin.html')),
    createView: (req, res) => res.send('Create View Route'),
    createItem: async (req, res) => {
        const item = req.body;
        const result = await createProduct(Object.values(item));
        res.send(result);
    },
    editView: (req, res) => {
        const id = req.params.id;
        res.send(`Edit View for item with ID: ${id}`);
    },
    editItem: async (req, res) => {
        const id = req.params.id;
        const item = req.body;
        const result = await editProduct(item, id);
        res.send(result);
    },
    deleteItem: async (req, res) => {
        const id = req.params.id;
        const result = await deleteProduct(id);
        res.send({
            view: 'FUNKO | ITEM DELETED',
            result
        });
    },
    loginView: (req, res) => res.sendFile(path.resolve(__dirname, '../../public/pages/admin/login.html')),
    loginUser: (req, res) => res.send('Login Route for User'),
    registerView: (req, res) => res.send('Register View'),
    registerUser: (req, res) => res.send('Register Route for new user')
};

module.exports = adminControllers;