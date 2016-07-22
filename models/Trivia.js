const mongoose = require('mongoose');
const Question = require('../models/Question')

const triviaSchema = new mongoose.Schema({
  pin: String,
  active: Boolean,
  questions: [
    {
      question: Object,
      winner: String
    }
  ],
  participants: {
    userId: String,
    points: Number,
    _id: {id:false}
  }
});


const Trivia = mongoose.model('Trivia', triviaSchema);

module.exports = Trivia;
