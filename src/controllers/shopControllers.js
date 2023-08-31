const { getAllProducts, getOneProduct } = require('../services/itemServices');

const shopControllers = {
    shopView: async (req, res) => {
        const results = await getAllProducts();
        const { data } = results;
        res.render('./shop/shop', {
            view: {
                title: 'Shop | Funkoshop'
            },
            items: data
        });
    },
    itemView: async (req, res) => {
        const id = req.params.id;
        const result = await getOneProduct(id);
        const { data } = result;
        res.render('./shop/item', {
            view: {
                title: 'Shop | Funkoshop'
            },
            item: data[0]
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