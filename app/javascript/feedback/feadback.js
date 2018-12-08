jQuery(document).ready(function($) {
  //Заявка с главной
  jQuery("#form-tour").submit(function() {
    jQuery('#contact [name="form-name"]').val(jQuery('#form-tour [name="form-name"]').val());
    jQuery('#contact [name="where"]').val(jQuery('#form-tour__one_position_where .form__field').html());
    jQuery('#contact [name="from"]').val(jQuery('#form-tour__one_position_from .form__field').html());
    jQuery('#contact [name="date"]').val(jQuery('#form-tour [name="date"]').val());
    var nights = jQuery('#form-tour__one_position_nights #form-tour__field_from').html() + ' - ' + jQuery('#form-tour__one_position_nights #form-tour__field_to').html();
    jQuery('#contact [name="sum"]').val(nights);
    var people = jQuery('#form-tour__one_position_people #form-tour__field_adults').html() + ' - ' + jQuery('#form-tour__one_position_people #form-tour__field_child').html()+ ' - ' + jQuery('#form-tour__one_position_people #form-tour__field_baby').html();
    jQuery('#contact [name="adults"]').val(people);
    jQuery('#form-tour__calc_position_people').fadeOut(600);
    jQuery('#form-tour__calc_position_nights').fadeOut(600);
    jQuery('#popup').fadeIn(600);
    
		return false;
	});
  
  jQuery("#form-hotel").submit(function() {
    jQuery('#contact [name="form-name"]').val(jQuery('#form-hotel [name="form-name"]').val());
    jQuery('#contact [name="where"]').val(jQuery('#form-hotel__one_position_where .form__field').html());
    jQuery('#contact [name="from"]').val(jQuery('#form-hotel__one_position_from .form__field').html());
    jQuery('#contact [name="date"]').val(jQuery('#form-hotel [name="date"]').val());
    var nights = jQuery('#form-hotel__one_position_nights #form-hotel__field_from').html() + ' - ' + jQuery('#form-hotel__one_position_nights #form-hotel__field_to').html();
    jQuery('#contact [name="sum"]').val(nights);
    var people = jQuery('#form-hotel__one_position_people #form-hotel__field_adults').html() + ' - ' + jQuery('#form-hotel__one_position_people #form-hotel__field_child').html()+ ' - ' + jQuery('#form-hotel__one_position_people #form-hotel__field_baby').html();
    jQuery('#contact [name="adults"]').val(people);
    jQuery('#form-hotel__calc_position_people').fadeOut(600);
    jQuery('#form-hotel__calc_position_nights').fadeOut(600);
    jQuery('#popup').fadeIn(600);
    
		return false;
	});
  
  jQuery("#form-air").submit(function() {
    jQuery('#contact [name="form-name"]').val(jQuery('#form-air [name="form-name"]').val());
    jQuery('#contact [name="where"]').val(jQuery('#form-air__one_position_where .form__field').html());
    jQuery('#contact [name="from"]').val(jQuery('#form-air__one_position_from .form__field').html());
    jQuery('#contact [name="date"]').val(jQuery('#form-air [name="date"]').val());
    var nights = jQuery('#form-air__one_position_nights #form-air__field_from').html() + ' - ' + jQuery('#form-air__one_position_nights #form-air__field_to').html();
    jQuery('#contact [name="sum"]').val(nights);
    var people = jQuery('#form-air__one_position_people #form-air__field_adults').html() + ' - ' + jQuery('#form-air__one_position_people #form-air__field_child').html()+ ' - ' + jQuery('#form-air__one_position_people #form-air__field_baby').html();
    jQuery('#contact [name="adults"]').val(people);
    jQuery('#form-air__calc_position_people').fadeOut(600);
    jQuery('#form-air__calc_position_nights').fadeOut(600);
    jQuery('#popup').fadeIn(600);
    
		return false;
	});
  
  jQuery("#form-cruise").submit(function() {
    jQuery('#contact [name="form-name"]').val(jQuery('#form-cruise [name="form-name"]').val());
    jQuery('#contact [name="where"]').val(jQuery('#form-cruise__one_position_where .form__field').html());
    jQuery('#contact [name="from"]').val(jQuery('#form-cruise__one_position_from .form__field').html());
    jQuery('#contact [name="date"]').val(jQuery('#form-cruise [name="date"]').val());
    var nights = jQuery('#form-cruise__one_position_nights #form-cruise__field_from').html() + ' - ' + jQuery('#form-cruise__one_position_nights #form-cruise__field_to').html();
    jQuery('#contact [name="sum"]').val(nights);
    var people = jQuery('#form-cruise__one_position_people #form-cruise__field_adults').html() + ' - ' + jQuery('#form-cruise__one_position_people #form-cruise__field_child').html()+ ' - ' + jQuery('#form-cruise__one_position_people #form-cruise__field_baby').html();
    jQuery('#contact [name="adults"]').val(people);
    jQuery('#form-cruise__calc_position_people').fadeOut(600);
    jQuery('#form-cruise__calc_position_nights').fadeOut(600);
    jQuery('#popup').fadeIn(600);
    
		return false;
	});

  jQuery('#request').click( function() {
    jQuery('#contact [name="form-name"]').val('Заказ звонка');
    jQuery('#contact [name="where"]').val('');
    jQuery('#contact [name="from"]').val('');
    jQuery('#contact [name="date"]').val('');
    jQuery('#contact [name="sum"]').val('');
    jQuery('#contact [name="adults"]').val('');
  });
  
  
	$("#contact").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "https://turisteka.ru/catalog/view/theme/mail.php",
			data: str,
			success: function(msg) {
				if(msg == 'OK') {
					result = '<div class="ok">Заявка отправлена</div>';
					$("#fields").show();
				}
				else {result = msg;}
				$('#note').html(result);
				 $('.input', '#contact')
 .not(':button, :submit, :reset, :hidden')
 .val('')			 
			}
		});
    jQuery('#popup').fadeOut(600);
		return false;
	});
  
  //Заявка из хедера
	$("#selection").submit(function() {
    
    jQuery('#selection [name="where"]').val(jQuery('#form-selection__one_position_where .form__field').html());
    jQuery('#selection [name="from"]').val(jQuery('#form-selection__one_position_from .form__field').html());
    var nights = jQuery('#form-selection__one_position_nights #form-selection__field_from').html() + ' - ' + jQuery('#form-selection__one_position_nights #form-selection__field_to').html();
    jQuery('#selection [name="sum"]').val(nights);
    var people = jQuery('#form-selection__one_position_people #form-selection__field_adults').html() + ' - ' + jQuery('#form-selection__one_position_people #form-selection__field_child').html()+ ' - ' + jQuery('#form-selection__one_position_people #form-selection__field_baby').html();
    jQuery('#selection [name="adults"]').val(people);
    
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "https://turisteka.ru/catalog/view/theme/mail.php",
			data: str,
			success: function(msg) {
				if(msg == 'OK') {
					result = '<div class="ok">Заявка отправлена</div>';
					$("#fields").show();
				}
				else {result = msg;}
				$('#note').html(result);
				 $('.input', '#contact')
 .not(':button, :submit, :reset, :hidden')
 .val('')			 
			}
		});
    jQuery('#popup-selection').fadeOut(600);
		return false;
	});
});