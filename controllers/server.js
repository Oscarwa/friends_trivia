/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('server/index', {
    title: 'Friends trivia'
  });
};

exports.config = (req, res) => {
  res.render('server/config', {
    title: 'Friends trivia'
  });
};

exports.addQuestion = (req, res) => {
  console.log(req);
  res.send(JSON.stringify({ a: 1 }, null, 3));
};
