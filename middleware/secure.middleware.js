const mongoose = require('mongoose');
const ApiError = require('../models/api-error.model.js');

module.exports.checkAuthentication = (req, res, next) => {
    if(req.isAuthenticated()){
      next();
    }else{
      next(new ApiError('Forbidden', 403));
    }
};

module.exports.checkUserRole = (req, res, next, role) => {
  if(req.user.role === role){
    next();
  }else{
    next(new ApiError('Forbidden', 403));
  }
};
