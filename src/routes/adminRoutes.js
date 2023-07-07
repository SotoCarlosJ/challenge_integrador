const adminControllers = require('../controllers/adminControllers');
const express = require('express');
const router = express.Router();

/* Admin Routes */
router.get('/', adminControllers.admin);
router.get('/create', adminControllers.create);
router.post('/create', adminControllers.create);
router.get('/edit/:id', adminControllers.edit);
router.put('/edit/:id', adminControllers.edit);
router.delete('/delete/:id', adminControllers.delete);

/* Auth Routes */
router.get('/login', authControllers.login);
router.post('/login', authControllers.login);
router.get('/register', authControllers.register);
router.post('/register', authControllers.register);

module.exports = router;
