const mongoose = require('mongoose');
const Offer = require('../models/offers.model');
const ApiError = require('../models/api-error.model');

module.exports.list = (req, res, next) => {
   Offer.find()
    .then(offer => res.json(offer))
    .catch(error => next(error));
};

module.exports.create = (req, res, next) => {
  const offer = new Offer(req.body);
  offer.save()
    .then(() => {
      console.log(offer);
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
//
// module.exports.editMyOffers = (req, res, next) => {
//   const id = req.params.id;
//   Offer.findByIdAndUpdate(id, {$set: req.body}, {new: true})
//   .then(offer => {
//     if(offer){
//       res.json(offer);
//     }else{
//       next(new ApiError('phone not found', 404));
//     }
//   }).catch(error => {
//     if (error instanceof mongoose.Error.ValidationError) {
//       next(new ApiError(error.message, 400, error.errors));
//     } else {
//       next(new ApiError(error.message, 500));
//     }
//   });
// };
//
// module.exports.deleteMyOffers = (req, res, next) => {
//   const id = req.params.id;
//   Offer.findByIdandRemove(id)
//   .then(offer => {
//     if(offer){
//       res.status(204).json();
//     }else{
//       next(new ApiError(`Phone not found`, 404));
//     }
//   }).catch(error => next(error)); //por qué aquí no ponemos ApiError?
//
//
// };
