const express = require('express');
const router = express.Router();
const offersController = require('../controllers/offer.controller');

router.get('/seeMyOffers', offersController.showMyOffers);
router.post('/createOffer', offersController.createOffer);
router.post('/editMyOffers', offersController.editMyOffers);
router.post('/deleteMyOffers', offersController.editMyOffers);
