const adminControllers = require('../controllers/adminControllers');
const express = require('express');
const router = express.Router();

/* Admin Routes */
router.get('/', adminControllers.adminView);
router.get('/create', adminControllers.createView);
router.post('/create', adminControllers.createItem);
router.get('/edit/:id', adminControllers.editView);
router.put('/edit/:id', adminControllers.editItem);
router.delete('/delete/:id', adminControllers.deleteItem);

/* Auth Routes */
router.get('/login', adminControllers.loginView);
router.post('/login', adminControllers.loginUser);
router.get('/register', adminControllers.registerView);
router.post('/register', adminControllers.registerUser);

module.exports = router;