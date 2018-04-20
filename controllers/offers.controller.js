const mongoose = require('mongoose');
const Offer = require('../models/offers.model');
const ApiError = require('../models/api-error.model');

module.exports.list = (req, res, next) => {
  if(req.user.role === 'COMPANY'){
    Offer.find()
     .then(offers => res.json(offers))
     .catch(error => {
       if (error instanceof mongoose.Error.ValidationError) {
         next(new ApiError(error.errors));
       } else {
         next(new ApiError(error.message, 500));
       }
     });
  }else if(req.user.role === 'ADMIN'){
    console.log("entra");
    Offer.find()
     .then(offers => res.json(offers))
     .catch(error => {
       if (error instanceof mongoose.Error.ValidationError) {
         next(new ApiError(error.errors));
       } else {
         next(new ApiError(error.message, 500));
       }
     });
  } else if(req.user.role === 'IRONHACKER'){
    Offer.find()
     .then(offers => res.json(offers))
     .catch(error => {
       if (error instanceof mongoose.Error.ValidationError) {
         next(new ApiError(error.errors));
       } else {
         next(new ApiError(error.message, 500));
       }
     });
  }
};

module.exports.create = (req, res, next) => {
  const offer = new Offer(req.body);
  offer.save()
    .then(() => {
      return res.json(offer);
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        next(new ApiError(error.errors));
      } else {
        next(new ApiError(error.message, 500));
      }
    });
};

module.exports.edit = (req, res, next) => {
  const id = req.params.id;
  Offer.findByIdAndUpdate(id, {$set: req.body}, {new: true})
  .then(offer => {
    if(offer){
      res.json(offer);
    }else{
      next(new ApiError('Offer not found', 404));
    }
  }).catch(error => {
    if (error instanceof mongoose.Error.ValidationError) {
      next(new ApiError(error.message, 400, error.errors));
    } else {
      next(new ApiError(error.message, 500));
    }
  });
};

module.exports.delete = (req, res, next) => {
  const id = req.params.id;
  Offer.findByIdAndRemove(id)
  .then(offer => {
    if(offer){
      res.status(204).json();
    }else{
      next(new ApiError(`Offer not found`, 404));
    }
  }).catch(error => next(error)); //por qué aquí no ponemos ApiError?
};
