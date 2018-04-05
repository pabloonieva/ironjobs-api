const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'The company name is required']
  },
  last name: {
    type: String,
    require: [true, 'A company logo is required']
  },
  email: {
    type: String,
    require: [true, 'A name for the offer is required']
  },
  photo: String,
  role: {
    type: String,
    enum : ['Ironhacker', 'ADMIN','COMPANY'],
    default : 'ADMIN'
}
});
