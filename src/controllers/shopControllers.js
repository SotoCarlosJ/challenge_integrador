const path = require('path');

const shopControllers = {
    shop: (req, res) => res.sendFile(path.resolve(__dirname, '../../public/pages/shop/shop.html')),
    item: (req, res) => {
        const id = req.params.id;
        res.send(`View for item with ID: ${id}`);
    },
    addItem: (req, res) => {
        const id = req.params.id;
        res.send(`View for adding item with ID: ${id}`)
    },
    cart: (req, res) => res.send('Cart View Route')
}

module.exports = shopControllers;