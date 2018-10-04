$(document).ready(function() {

  // - Datetime picker

  //------------------ End Datetime picker -------------------------

  // - Sidebar menu

  // - Focus Input: Keep label ontop if input has value
  $('input.form-control').on('input', function(e) {
    if ($(this).val().length > 0)
      $(this).next('label').addClass('label-ontop');
    else
      $(this).next('label').removeClass('label-ontop');
  });

  $('input.form-control').each(function(){
    if ($(this).val().length > 0)
      $(this).next('label').addClass('label-ontop');
    else
      $(this).next('label').removeClass('label-ontop');
  })

  $('.form-control').on('keyup', function(e) {
    if ($(this).val().length > 0)
      $(this).next('label').addClass('label-ontop');
    else
      $(this).next('label').removeClass('label-ontop');
  });

  //- Toggle icon eye to show/hide password
  $('.toggle-icon').each(function() {
    $(this).on('click', function() {
      $(this).toggleClass('active');
    })
  })
})
