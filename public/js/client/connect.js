$(document).ready(function() {

  // Place JavaScript code here...
  var socket = io.connect('/');
  // socket.on('greet', function (data) {
  //   console.log(data);
  //   socket.emit('answer', { message: 'Hello to you too, Mr.Server!' });
  // });

  $('.btn-section').on("click tap", function() {
    socket.emit('answer', {message: $(this).text() });
  });

});
