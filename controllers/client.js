const Trivia = require('../models/Trivia');

/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('client/index', {
    title: 'Friends trivia'
  });
};

exports.connect = (req, res) => {
  res.render('client/connect', {
    title: 'Friends trivia'
  });
};


exports.game = (req, res) => {
  res.render('client/game', {
    title: 'Friends trivia'
  });
};

exports.join = (req, res, next) => {
  if(!!req && !!req.body) {
    var pinus = req.body.pin.split('').join(' '); 
    Trivia.findOne({pin: pinus}, function(err, item) {
      if (err) { return next(err); }

      console.info(item);
      res.send(JSON.stringify(item, null, 3));

    });
  }
}
