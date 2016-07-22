const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: String,
  answers: [
    {
      text: String,
      correct: Boolean,
      _id: {id: false}
    }
  ],
  range: Number,
  type: Number,
  path: String,
});


const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
