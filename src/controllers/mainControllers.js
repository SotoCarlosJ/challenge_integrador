const { getAllLicences } = require('../services/licenceServices');

const mainControllers = {
    homeView: async (req, res) => {
        const results = await getAllLicences();
        const { data } = results;
        res.render('home', {
            view: {
                title: 'Home | Funkoshop'
            },
            licences: data
        });
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