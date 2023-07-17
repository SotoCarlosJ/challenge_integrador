const path = require('path');

const shopControllers = {
    shopView: (req, res) => res.sendFile(path.resolve(__dirname, '../../public/pages/shop/shop.html')),
    itemView: (req, res) => {
        const id = req.params.id;
        res.send(`View for item with ID: ${id}`);
    },
    addItemView: (req, res) => {
        const id = req.params.id;
        res.send(`Route for adding item with ID: ${id}`)
    },
    cartView: (req, res) => res.send('Cart View Route'),
    checkout: (req, res) => res.send('Cart checkout View')
}

module.exports = shopControllers;