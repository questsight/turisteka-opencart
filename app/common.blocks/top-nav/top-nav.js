jQuery('.top-nav__link').click(function(){
  jQuery('.top-nav__link_status_active').removeClass('top-nav__link_status_active');
  jQuery(this).addClass('top-nav__link_status_active');
});
