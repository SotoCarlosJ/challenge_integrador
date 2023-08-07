const { getAllProducts, getOneProduct } = require('../services/itemServices');

const shopControllers = {
    shopView: async (req, res) => {
        const results = await getAllProducts();
        res.send({
            view: 'Shop | Funkoshop',
            results
        });
    },
    itemView: async (req, res) => {
        const id = req.params.id;
        const result = await getOneProduct(id);
        res.send({
            view: 'Shop | Funkoshop',
            result
        });
    },
    addItemView: (req, res) => {
        const id = req.params.id;
        res.send(`Route for adding item with ID: ${id}`)
    },
    cartView: (req, res) => res.send('Cart View Route'),
    checkout: (req, res) => res.send('Cart checkout View')
}

module.exports = shopControllers;