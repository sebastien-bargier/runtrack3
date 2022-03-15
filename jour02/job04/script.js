document.addEventListener('DOMContentLoaded', function loaded() {

  var key = document.querySelector('#keylogger');

  function keylogger(e) {

    key.value += e.key;
  };

  key.addEventListener('keydown', keylogger);

});
