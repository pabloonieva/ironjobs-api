const mongoose = require('mongoose');
const Offer = require('../models/offers.model');
const Apply = require('../models/apply.model');
const User = require('../models/apply.model');
const ApiError = require('../models/api-error.model');

module.exports.apply = (req, res, next) => {
  const newApply = new Apply({
    applyOfferId: req.params.id,
    applyUserId: req.user._id
  });
  newApply.save()
  .then((apply) => res.json(apply))
  .catch(error => {
    if (error instanceof mongoose.Error.ValidationError) {
      next(new ApiError(error.message, 400, error.errors));
    } else {
      next(new ApiError(error.message, 500));
    }
  });
};

module.exports.myApplications = (req, res, next) => {
  const id = req.user._id;
  Apply.findAll({ applyUserId: id })
    .populate('offer')
    .then(function (err, apply) {
      if (err) return handleError(err);
        console.log('You applied all this offers: ', apply.offer.title);
    });
  };


module.exports.myIronhackers = (req, res, next) => {
  // const id = req.params.id;
  // Apply.findAll({ applyOfferId: id })
  //   .populate('')
  //   .then(function (err, apply) {
  //     if (err) return handleError(err);
  //       console.log(offer.title);
  //   });
};
