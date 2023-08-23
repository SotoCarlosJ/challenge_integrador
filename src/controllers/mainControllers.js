const path = require('path');

const mainControllers = {
    homeView: (req, res) => {
        res.render('home', {
            view: {
                title: 'Home | Funkoshop'
            }
        });
        // res.sendFile(path.resolve(__dirname, '../../public/index.html')),
    },
    contactView: (req, res) => {
        res.render('./shop/contact', {
            view: {
                title: 'Contacto | Funkoshop'
            }
        });
    },
    aboutView: (req, res) => res.send('About view route'),
    faqsView: (req, res) => res.send('Faqs view route')
}

module.exports = mainControllers;