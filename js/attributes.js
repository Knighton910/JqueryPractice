$(function() {
  $('li#three').removeClass('hot');
  $('li#three').addClass('cool');
  $('li.hot').addClass('favorite');
  $('ul').attr('id', 'group');
  $('li').on('mousemove', function () {
    $('li').css('background-color', 'gold');
  })
});