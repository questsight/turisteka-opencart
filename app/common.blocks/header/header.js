jQuery(document).ready(function() {
  if (window.matchMedia('(min-width: 992px)').matches) {
    jQuery('#top-nav__list').removeClass('top-nav__hidden');
  }
  jQuery('#hamburger, .top-nav__link').click(function() {
      if (window.matchMedia('(min-width: 992px)').matches) {
    }
    else {
      jQuery('#top-nav').fadeToggle(600);
    }
  });
});
