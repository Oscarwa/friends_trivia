$(document).ready(function() {

  // Place JavaScript code here...
  var socket = io.connect('/');
  // socket.on('greet', function (data) {
  //   console.log(data);
  //   socket.emit('answer', { message: 'Hello to you too, Mr.Server!' });
  // });

  $('#join').on("click", function() {
    var joinModel = {
      _csrf: $('input[name="_csrf"]').val(),
      pin: $('.pin_code').val(),
      user: user
    };
    $.post('/client/join', joinModel, function(response) {
      console.info(response);
      socket.emit('join', joinModel);
      location.href = '/client/game';
    });
    //socket.emit('answer', {message: $(this).text() });
  });
  //console.log(user);

});
