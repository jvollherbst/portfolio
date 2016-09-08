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

  $(window).on('scroll', function(){
    if($(window).scrollTop() > 150) {
      $("#descr").addClass('new-position');
    } else if($(window).scrollTop() < 150) {
      $("#descr").removeClass('new-position');
    }
  });

  $('.tags').on('click', function(){
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
