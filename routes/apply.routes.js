const express = require('express');
const router = express.Router();
const applyController = require('../controllers/apply.controller');
const secureMiddleware = require('../middleware/secure.middleware');

router.get('/', secureMiddleware.isIronhacker, applyController.listMyApplications);
router.get('/:id', secureMiddleware.isCompany, applyController.showApplications);
router.post('/new/:id', applyController.apply);

module.exports = router;
