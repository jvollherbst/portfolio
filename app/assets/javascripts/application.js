//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
// window.onload = function() {
//   window.addEventListener('scroll', function(){
//     if(document.body.scrollTop > 150) {
//       document.getElementById("descr").classList.add('new-position');
//     } else if(document.body.scrollTop < 150) {
//       document.getElementById("descr").classList.remove('new-position');
//     }
//   });
// };

$(document).ready(function() {
  var windowSize;
  function responsive() {
    windowSize = { width: $(window).innerWidth() };
    $(window).resize(function() {
      responsive();
    });
  };
  // responsive();

  if($(window).innerWidth() > 767 ) {
    $(window).on('scroll', function(){
      if($(window).scrollTop() > 90) {
        $("#descr").addClass('new-position');
      } else if($(window).scrollTop() < 90) {
        $("#descr").removeClass('new-position');
      }
    });
  }

  $(document).on('click', '.tags', function(){
    var catSelection = $(this).text();
    if(catSelection == "All") {
      $('.thumbnail').show();
    } else {
      $('.thumbnail').hide();
      $('.' + catSelection).show();
    }
  });

  // $('select').change(function(){
  //   var catSelection = "";
  //   $('select option:selected').each(function() {
  //     catSelection = $(this).text();
  //   });
  //   if(catSelection == "All") {
  //     $('.thumbnail').show();
  //   } else {
  //     $('.thumbnail').hide();
  //     $('.' + catSelection).show();
  //   }
  // });

});
