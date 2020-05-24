const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  userAnswers: {
    type: Object,
    required: true
  },
  userResult: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Posts', PostSchema);