const shopControllers = require('../controllers/shopControllers');
const express = require('express');
const router = express.Router();

/*shopRoutes*/
router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.item);
router.post('/item/:id/add', shopControllers.addItem);
router.get('/cart', shopControllers.cart);
router.post('/cart', shopControllers.cart);

module.exports = router;