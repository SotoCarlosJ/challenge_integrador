const mainControllers = require('../controllers/mainControllers');
const express = require('express');
const router = express.Router();

/* mainRoutes */
router.get('/', mainControllers.homeView);
router.get('/home', mainControllers.homeView);
router.get('/contact', mainControllers.contactView);
router.get('/about', mainControllers.aboutView);
router.get('/faqs', mainControllers.faqsView);

module.exports = router;