/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('client/index', {
    title: 'Friends trivia'
  });
};
