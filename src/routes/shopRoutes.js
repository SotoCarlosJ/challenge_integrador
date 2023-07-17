const shopControllers = require('../controllers/shopControllers');
const express = require('express');
const router = express.Router();

/*shopRoutes*/
router.get('/', shopControllers.shopView);
router.get('/item/:id', shopControllers.itemView);
router.post('/item/:id/add', shopControllers.addItemView);
router.get('/cart', shopControllers.cartView);
router.post('/cart', shopControllers.checkout);

module.exports = router;