$(document).ready(function() {

  // Place JavaScript code here...
  var socket = io.connect('/');

  // socket.on('greet', function (data) {
  //   console.log(data);
  //   socket.emit('answer', { message: 'Hello to you too, Mr.Server!' });
  // });
  socket.emit('join', {pin: pinCode});

  socket.on('user_connected', function (data) {
    $('.users').append('<li><img src="' + data.profile.picture + '" class="profile" /></li>');
  });

});
