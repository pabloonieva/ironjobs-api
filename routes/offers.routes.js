const express = require('express');
const router = express.Router();
const offersController = require('../controllers/offers.controller');
const secureMiddleware = require('../middleware/secure.middleware');

router.get('/', secureMiddleware.checkAuthentication, offersController.list);
router.post('/', secureMiddleware.checkAuthentication, offersController.create);
router.put('/edit/:id', secureMiddleware.checkAuthentication, offersController.edit);
router.delete('/delete/:id', secureMiddleware.checkAuthentication, offersController.delete);

module.exports = router;
