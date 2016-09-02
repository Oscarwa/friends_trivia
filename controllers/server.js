const Question = require('../models/Question');
const Trivia = require('../models/Trivia');

/**
 * GET /
 * Server Home page.
 */
exports.index = (req, res) => {
  const trivia = new Trivia({
      pin: generatePincode(),
  });

  //const qs = Question.aggregate({ '$sample': { size: 3}})

  trivia.save((err) => {
    if (err) { return next(err); }
    res.render('server/index', {
      title: 'Friends trivia',
      trivia: trivia,
    });
  });


};

exports.config = (req, res) => {
  res.render('server/config', {
    title: 'Friends trivia'
  });
};

exports.addQuestion = (req, res) => {
  //console.log(req);
  if(!!req && !!req.body) {

    const question = new Question({
      question: req.body.question,
      answers: [
        {
          text: req.body.correctAnswer,
          correct: true
        },
        {
          text: req.body.wrongAnswer1,
          correct: false
        },
        {
          text: req.body.wrongAnswer2,
          correct: false
        },
        {
          text: req.body.wrongAnswer3,
          correct: false,
        }
      ],
      type: 1, //1 text, 2 image, 3 audio.
      path: null,
      range: Math.floor(Math.random() * 10000)
    });

    question.save((err) => {
      if (err) { return next(err); }
      res.send(JSON.stringify(question, null, 3));
    });
  }
};

function generatePincode () {
  var pinCodeArray = []
  for (var i = 0; i < 4; i++) {
    pinCodeArray.push(Math.floor(Math.random() * 10))
  }
  return pinCodeArray.join('')
}
