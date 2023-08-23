const { getOneProduct, getAllProducts, createProduct, editProduct, deleteProduct } = require('../services/itemServices');
const path = require('path');

const adminControllers = {
    adminView: async (req, res) => {
        const result = await getAllProducts();
        const { data } = result;
        res.render('./admin/admin', {
            view: {
                title: 'Admin | Funkoshop'
            },
            items: data
        });
    },
    createView: (req, res) => res.send('Create View Route'),
    createItem: async (req, res) => {
        const item = req.body;
        const result = await createProduct(Object.values(item));
        res.send(result);
    },
    editView: async (req, res) => {
        const id = req.params.id;
        const result = await getOneProduct(id);
        const { data } = result;
        console.log(data[0]);
        res.render('./admin/edit', {
            view: {
                title: 'Edit | Funkoshop'
            },
            item: data[0]
        });
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
        res.send(result);
    },
    loginView: (req, res) => {
        res.render('./admin/login', {
            view: {
                title: 'Login | Funkoshop'
            }
        })
    },
    loginUser: (req, res) => res.send('Login Route for User'),
    registerView: (req, res) => {
        res.render('./admin/register', {
            view: {
                title: 'Register | Funkoshop'
            }
        })
    },
    registerUser: (req, res) => res.send('Register Route for new user')
};

module.exports = adminControllers;