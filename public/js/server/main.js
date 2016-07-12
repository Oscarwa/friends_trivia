$(document).ready(function() {

  // Place JavaScript code here...
  var socket = io.connect('http://192.168.1.105:3000');

  // socket.on('greet', function (data) {
  //   console.log(data);
  //   socket.emit('answer', { message: 'Hello to you too, Mr.Server!' });
  // });

  socket.on('answered', function (data) {
    $('.answers').append('<li>' + data.message + '</li>');
  });

});
