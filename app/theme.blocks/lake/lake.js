jQuery( document ).ready( function() {
  var x = 5;
  var y = -1;
  jQuery('.lake__cell').each(function(i,e){
    y = y + 1;
    if (i > x){
      $('.lake__cell').eq(i).css('display', 'none'); 
    }
  });
  if( y <= x){
    $('#lake-button').css('display', 'none');
  }
	jQuery( '#lake-button' ).click( function () {
    var y = -1;
    x = x + 6; 
		jQuery('.lake__cell').each(function(i,e){
      y = y + 1;
      if (i <= x){
        $('.lake__cell').eq(i).css('display', 'block'); 
      }
    });
    if( y <= x){
      jQuery('#lake-button').css('display', 'none');
    }
	}); 
});