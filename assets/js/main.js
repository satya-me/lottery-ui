$(function() {
  var list = $('.js-dropdown-list');
  var link = $('.js-link');
  link.click(function(e) {
    e.preventDefault();
    list.slideToggle(200);
  });
  list.find('li').click(function() {
    var text = $(this).html();
    var icon = '<i class="fa fa-chevron-down"></i>';
    link.html(text+icon);
    list.slideToggle(200);
    if (text === '* Reset') {
      link.html('Select one option'+icon);
    }
  });
});


// date




// slick slider

$('.slider_area').slick({
  dots: true,
  arrows: false,
   autoplay: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,

});


