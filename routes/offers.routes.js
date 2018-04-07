const express = require('express');
const router = express.Router();
const offersController = require('../controllers/offers.controller');

router.get('/',  offersController.list);
router.post('/', offersController.create);
router.put('/edit/:id', offersController.edit);
router.delete('/delete/:id', offersController.delete);

module.exports = router;
