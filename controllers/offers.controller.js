const mongoose = require('mongoose');
const Offer = require('../models/offers.model');
const ApiError = require('../models/api-error.model');

module.export.showMyOffers = (req, res, next) => {
   Offer.find()
    .then(offers => res.json(offers))
    .catch(error => next(error));
};

module.export.createOffers = (req, res, next) => {
  const offer = new Offer(req.body);
  offer.save()
  .then(() => {
    res.status(201).json(offer);
  })
  .catch(error =>{
    if (error instanceof mongoose.Error.ValidationError) {
      next(new ApiError(error.errors));
    } else {
      next(new ApiError(error.message, 500));
    }
  });
};

module.export.editMyOffers = (req, res, next) => {
  const id = req.params.id;
  Offer.findByIdAndUpdate(id, {$set: req.body}, {new: true})
  .then(offer => {
    if(offer){
      res.json(offer);
    }else{
      next(new ApiError('phone not found', 404));
    }
  }).catch(error => {
    if (error instanceof mongoose.Error.ValidationError) {
      next(new ApiError(error.message, 400, error.errors));
    } else {
      next(new ApiError(error.message, 500));
    }
  });
};

module.export.deleteMyOffers = (req, res, next) => {
  const id = req.params.id;
  Offer.findByIdandRemove(id)
  .then(offer => {
    if(offer){
      res.status(204).json();
    }else{
      next(new ApiError(`Phone not found`, 404));
    }
  }).catch(error => next(error)); //por qué aquí no ponemos ApiError?


};
