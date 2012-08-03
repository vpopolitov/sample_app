$(function() {
  $('textarea[id=micropost_content]').keyup(function() {
    var count = $('textarea#micropost_content').val().length;
    $('#counter').text(count);
  });
});
