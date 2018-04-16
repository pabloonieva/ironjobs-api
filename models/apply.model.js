const mongoose = require('mongoose');

const applySchema = new mongoose.Schema({
  applyOfferId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Offer'
  },
  applyUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Apply = mongoose.model('Apply', applySchema);
module.exports = Apply;
