jQuery(document).ready(function() {
  jQuery('.callback').click( function() {
    jQuery('#popup-selection').fadeIn(600);
  });
  jQuery('#request').click( function() {
    jQuery('#popup').fadeIn(600);
  });
  jQuery('#popup__button, #popup__close').click( function() {
    jQuery('#popup').fadeOut(600);
  });
  jQuery('#popup-selection__close').click( function() {
    jQuery('#popup-selection').fadeOut(600);
  });
});
