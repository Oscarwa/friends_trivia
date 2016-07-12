$(document).ready(function() {

  $('#create').click(function() {
    var model = {
      question: $('#question').val(),
      correctAnswer: $('#correctAnswer').val(),
      wrongAnswer1: $('#wrongAnswer1').val(),
      wrongAnswer2: $('#wrongAnswer2').val(),
      wrongAnswer3: $('#wrongAnswer3').val()
    };

    $.post('/server/addQuestion', model, function(data) {
      console.log(data);
    });
  });

});
