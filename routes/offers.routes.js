const express = require('express');
const router = express.Router();
const offersController = require('../controllers/offers.controller');

router.get('/', offersController.list);
router.post('/', offersController.create);
// router.post('/editMyOffers', offersController.editMyOffers);
// router.post('/deleteMyOffers', offersController.editMyOffers);

module.exports = router;
