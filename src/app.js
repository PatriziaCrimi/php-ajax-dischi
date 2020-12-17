$(document).ready(function() {
  $.ajax({
    url: './discs.php',
    method: 'GET',
    success: function() {
      console.log('ajax call')
    },
    error: function() {
      console.log('error')
    },
  });
});
