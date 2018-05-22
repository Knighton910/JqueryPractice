// Using Index Numbers
$(function() {
  $('li:lt(2)').removeClass('hot');
  $('li').eq(0).addClass('complete');
  $('li:gt(2)').addClass('cool');
});


// Filters In Use
//let $listItems = $('li');
//$listItems.filter('.hot:last').removeClass('hot');
//$('li:not(.hot)').addClass('cool');
//$listItems.has('em').addClass('complete');
//
//$listItems.each(function() {
//  let $this = $(this);
//  if ($this.is('.hot')) {
//    $this.prepend('Priority item: ');
//  }
//});
//
//$('li:contains("honey")').append(' (local)');


// Traversing
//$(function() {
//  let $h2 = $('h2');
//  $('ul').hide();
//  $h2.append('<a class="show">show</a');
//  
//  $h2.on('click', function() {
//    $h2.next()
//      .fadeIn(500)
//      .children('.hot')
//      .addClass('complete');
//    $h2.find('a').fadeOut();
//  })
//})


// Using Animation
//$(function() {
//  $('li').on('click', function() {
//    $(this).animate({
//      opacity: 0.0,
//      paddingLeft: '+=80'
//    }, 500, function() {
//      $(this).remove();
//    });
//  });
//});


// Basic Jquery Effects
//$(function() {
//  $('h2').hide().slideDown();
//  let $li = $('li');
//  $li.hide().each(function(index) {
//    $(this).delay(428 * index).fadeIn(700);
//  });
//  $li.on('click', function() {
//    $(this).fadeOut(500);
//  });
//});


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
