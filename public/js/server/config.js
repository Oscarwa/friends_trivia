$(document).ready(function() {

  $('#create').click(function() {
    var model = {
      question: $('#question').val(),
      correctAnswer: $('#correctAnswer').val(),
      wrongAnswer1: $('#wrong1').val(),
      wrongAnswer2: $('#wrong2').val(),
      wrongAnswer3: $('#wrong3').val(),
      _csrf: $('input[name="_csrf"]').val()
    };
    console.info(model);
    $.post('/server/addQuestion', model, function(data) {
      console.log(data);
    });
  });

});
