const mongoose = require('mongoose');
const ApiError = require('../models/api-error.model');
const User = require('../models/users.model'); 

module.exports.checkAuthentication = (req, res, next) => {
    if(req.isAuthenticated()){
      next();
    }else{
      next(new ApiError('Forbidden', 403));
    }
};

module.exports.isAdmin = (req, res, next, role) => {
  if(req.user.role === 'ADMIN'){
    next();
  }else{
    next(new ApiError('Forbidden', 403));
  }
};

module.exports.isCompany = (req, res, next, role) => {
  if(req.user.role === 'COMPANY'){
    next();
  }else{
    next(new ApiError('Forbidden', 403));
  }
};
module.exports.isIronhacker = (req, res, next, role) => {
  if(req.user.role === 'Ironhacker'){
    next();
  }else{
    next(new ApiError('Forbidden', 403));
  }
};

module.exports.isCompanyOrAdmin = (req, res, next, role) => {
  if(req.user.role === 'COMPANY' || req.user.role === 'ADMIN'){
    next();
  }else{
    next(new ApiError('Forbidden', 403));
  }
};