const path = require('path');

const mainControllers = {
    homeView: (req, res) => res.sendFile(path.resolve(__dirname, '../../public/index.html')),
    contactView: (req, res) => res.sendFile(path.resolve(__dirname, '../../public/pages/shop/contacto.html')),
    aboutView: (req, res) => res.send('About view route'),
    faqsView: (req, res) => res.send('Faqs view route')
}

module.exports = mainControllers;