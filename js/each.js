// Basic Jquery Effects
$(function() {
  $('h2').hide().slideDown();
  let $li = $('li');
  $li.hide().each(function(index) {
    $(this).delay(428 * index).fadeIn(700);
  });
  $li.on('click', function() {
    $(this).fadeOut(500);
  });
});


// The Event Object
//$(function() {
//  
//  $('li').on('click', function(e) {
//    $('li span').remove();
//    let date = new Date();
//    date.setTime(e.timeStamp);
//    let clicked = date.toDateString();
//    $(this).append('<span class="date">'+ clicked + ' ' + e.type + '</span>');
//  });
//  
//})

// Author written $query
//$(function() {
//  let ids = '';
//  let $listItems = $('li');
//  
//  $listItems.on('mouseover click', function() {
//    ids = this.id;
//    $listItems.children('span').remove();
//    $(this).addClass('cool');
//    $(this).append(' <span class="priority">' + ids + '</span>');
//  });
//  
//  $listItems.on('mouseout', function() {
//    $(this).children('span').remove();
//    $(this).removeClass('cool');
//  })
//})


// each()
//$(function() {
//  $('li').each(function() {
//    var ids = this.id;
//    $(this).append(' <span class="order">' + ids + '</span>');
//  });
//});
