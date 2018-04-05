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
    type: String,
    require: [true, 'A company logo is required']
  },
  description: {
    type: String
  },
  salary: {
    type: Number,
    require: [true, 'The salary is required']
  }
});
