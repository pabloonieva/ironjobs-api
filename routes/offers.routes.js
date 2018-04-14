const express = require('express');
const router = express.Router();
const offersController = require('../controllers/offers.controller');
const secureMiddleware = require('../middleware/secure.middleware');

router.get('/', secureMiddleware.checkAuthentication,  offersController.list);
router.post('/', secureMiddleware.checkAuthentication, secureMiddleware.isCompany, offersController.create);
router.put('/edit/:id', secureMiddleware.checkAuthentication, secureMiddleware.isCompanyOrAdmin, offersController.edit);
router.delete('/delete/:id', secureMiddleware.checkAuthentication, secureMiddleware.isCompanyOrAdmin, offersController.delete);

module.exports = router;

// autentificacion para meter luego   ------>     secureMiddleware.checkAuthentication
