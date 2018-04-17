const express = require('express');
const router = express.Router();
const applyController = require('../controllers/apply.controller');
const secureMiddleware = require('../middleware/secure.middleware');

router.get('/myapplications', secureMiddleware.isIronhacker, applyController.myApplications);
router.get('/myironhackers/:id', secureMiddleware.isCompany, applyController.myIronhackers);
router.post('/new/:id', applyController.apply);

module.exports = router;
