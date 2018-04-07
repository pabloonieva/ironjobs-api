const express = require('express');
const router = express.Router();
const secureMiddleware = require('../middleware/secure.middleware');
const usersController = require('../controllers/users.controller');


router.get('/', secureMiddleware.checkAuthentication, usersController.list);
router.post('/', usersController.create);
router.put('/edit/:id', usersController.edit);
router.delete('/delete/:id', usersController.delete);

module.exports = router;