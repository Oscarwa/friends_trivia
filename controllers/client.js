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
