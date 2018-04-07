const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');
const secureMiddleware = require('../middleware/secure.middleware');

router.get('/', usersController.list);
router.post('/', usersController.create);
router.put('/edit/:id', usersController.edit);
router.delete('/delete/:id', usersController.delete);

module.exports = router;