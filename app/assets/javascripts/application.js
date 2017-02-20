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

  $(document).on('click', '.tags', function(){
    var catSelection = $(this).text();
    if(catSelection == "All") {
      $('.thumbnail').show();
    } else {
      $('.thumbnail').hide();
      $('.' + catSelection).show();
    }
  });

});
