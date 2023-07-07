const path = require('path');

const mainControllers = {
    home: (req, res) => res.sendFile(path.resolve(__dirname, '../../public/index.html')),
    contact: (req, res) => res.sendFile(path.resolve(__dirname, '../../public/pages/shop/contacto.html')),
    about: (req, res) => res.send('About view route'),
    faqs: (req, res) => res.send('Faqs view route')
}

module.exports = mainControllers;