const mongoose = require('mongoose');
const offerSchema = new mongoose.Schema({
  company: {
    type: String,
    require: [true, 'The company name is required']
  },
  logo: {
    type: String,
    require: [true, 'A company logo is required']
  },
  offer: {
    type: String,
    require: [true, 'A name for the offer is required']
  },
  salary: {
    type: Number,
    require: [true, 'The salary is required']
  }
});
