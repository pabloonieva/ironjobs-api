const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema   = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Name is required']
  },
  userEmail: {
    type: String,
    lowercase: true,
    required: [true, 'Email is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'User needs a password']
  },
  photo: String,
  role: {
    type: String,
    enum : ['Ironhacker', 'ADMIN','COMPANY'],
    default : 'ADMIN'
}
});

userSchema.pre('save', function save(next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(SALT_WORK_FACTOR)
    .then(salt => {
      bcrypt.hash(user.password, salt)
        .then(hash => {
          user.password = hash;
          return next();
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema);
module.exports = User;
