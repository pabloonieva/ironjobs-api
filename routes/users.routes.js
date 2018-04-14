const express = require('express');
const router = express.Router();
const secureMiddleware = require('../middleware/secure.middleware');
const usersController = require('../controllers/users.controller');


router.get('/', secureMiddleware.checkAuthentication, usersController.list);
router.post('/', secureMiddleware.checkAuthentication, usersController.create);
router.put('/edit/:id',secureMiddleware.checkAuthentication, usersController.edit);
router.delete('/delete/:id',secureMiddleware.checkAuthentication, usersController.delete);

module.exports = router;