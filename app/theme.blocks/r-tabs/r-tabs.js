jQuery('#r-tabs').responsiveTabs({
  startCollapsed: 'accordion'
});
jQuery('.r-tabs-anchor').click(function(){
  jQuery('.r-tabs-anchor-active').removeClass('r-tabs-anchor-active');
  jQuery(this).addClass('r-tabs-anchor-active');
});
