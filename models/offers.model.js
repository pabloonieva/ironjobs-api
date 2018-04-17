const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, 'A name for the offer is required']
  },
  company: {
    type: String,
    require: [true, 'The company name is required']
  },
  logo: {
    type: String
  },
  description: {
    type: String
  },
  salary: {
    type: Number,
    require: [true, 'The salary is required']
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Offer = mongoose.model('Offer', offerSchema);
module.exports = Offer;
