jQuery(Document).ready(function() {
  //Общие
  jQuery('.datepicker').click(function() {
    jQuery('#form-selection__list_position_where').fadeOut(600);
    jQuery('#form-selection__list_position_from').fadeOut(600);
    jQuery('#form-selection__calc_position_nights').fadeOut(600);
    jQuery('#form-selection__calc_position_people').fadeOut(600);
    jQuery('#form-tour__list_position_where').fadeOut(600);
    jQuery('#form-tour__list_position_from').fadeOut(600);
    jQuery('#form-tour__calc_position_nights').fadeOut(600);
    jQuery('#form-tour__calc_position_people').fadeOut(600);
    jQuery('#form-hotel__list_position_where').fadeOut(600);
    jQuery('#form-hotel__list_position_from').fadeOut(600);
    jQuery('#form-hotel__calc_position_nights').fadeOut(600);
    jQuery('#form-hotel__calc_position_people').fadeOut(600);
    jQuery('#form-air__list_position_where').fadeOut(600);
    jQuery('#form-air__list_position_from').fadeOut(600);
    jQuery('#form-air__calc_position_nights').fadeOut(600);
    jQuery('#form-air__calc_position_people').fadeOut(600);
    jQuery('#form-cruise__list_position_where').fadeOut(600);
    jQuery('#form-cruise__list_position_from').fadeOut(600);
    jQuery('#form-cruise__calc_position_nights').fadeOut(600);
    jQuery('#form-cruise__calc_position_people').fadeOut(600);
  });

  jQuery('input:checkbox').click(function() {
    jQuery('input:checkbox').not(this).prop('checked', false);
  });
  
  var nightsFrom = 7;
  var nightsTo = 14;
  var peopleAdults = 2;
  var peopleChild = 0;
  var peopleBaby = 0;
  var childAge;
  jQuery('.r-tabs-anchor').click(function() {
    nightsFrom = 7;
    nightsTo = 14;
    peopleAdults = 2;
    peopleChild = 0;
    peopleBaby = 0;
    jQuery('#form-selection__list_position_where').fadeOut(600);
    jQuery('#form-selection__list_position_from').fadeOut(600);
    jQuery('#form-selection__calc_position_nights').fadeOut(600);
    jQuery('#form-selection__calc_position_people').fadeOut(600);
    jQuery('#form-tour__list_position_where').fadeOut(600);
    jQuery('#form-tour__list_position_from').fadeOut(600);
    jQuery('#form-tour__calc_position_nights').fadeOut(600);
    jQuery('#form-tour__calc_position_people').fadeOut(600);
    jQuery('#form-hotel__list_position_where').fadeOut(600);
    jQuery('#form-hotel__list_position_from').fadeOut(600);
    jQuery('#form-hotel__calc_position_nights').fadeOut(600);
    jQuery('#form-hotel__calc_position_people').fadeOut(600);
    jQuery('#form-air__list_position_where').fadeOut(600);
    jQuery('#form-air__list_position_from').fadeOut(600);
    jQuery('#form-air__calc_position_nights').fadeOut(600);
    jQuery('#form-air__calc_position_people').fadeOut(600);
    jQuery('#form-cruise__list_position_where').fadeOut(600);
    jQuery('#form-cruise__list_position_from').fadeOut(600);
    jQuery('#form-cruise__calc_position_nights').fadeOut(600);
    jQuery('#form-cruise__calc_position_people').fadeOut(600);
    
    jQuery('#form-selection__nights_to .form__value').html(nightsTo);
    jQuery('#form-selection__one_position_nights #form-selection__field_to').html(nightsTo);
    jQuery('#form-selection__nights_from .form__value').html(nightsFrom);
    jQuery('#form-selection__one_position_nights #form-selection__field_from').html(nightsFrom);
    jQuery('#form-selection__people_adults .form__value').html(peopleAdults);
    jQuery('#form-selection__one_position_people #form-selection__field_adults').html(peopleAdults);
    jQuery('#form-selection__people_baby .form__value').html(peopleBaby + peopleChild);
    jQuery('#form-selection__one_position_people #form-selection__field_baby').html(peopleBaby);
    jQuery('#form-selection__one_position_people #form-selection__field_child').html(peopleChild);
    jQuery('#form-tour__nights_to .form__value').html(nightsTo);
    jQuery('#form-tour__one_position_nights #form-tour__field_to').html(nightsTo);
    jQuery('#form-tour__nights_from .form__value').html(nightsFrom);
    jQuery('#form-tour__one_position_nights #form-tour__field_from').html(nightsFrom);
    jQuery('#form-tour__people_adults .form__value').html(peopleAdults);
    jQuery('#form-tour__one_position_people #form-tour__field_adults').html(peopleAdults);
    jQuery('#form-tour__people_baby .form__value').html(peopleBaby + peopleChild);
    jQuery('#form-tour__one_position_people #form-tour__field_baby').html(peopleBaby);
    jQuery('#form-tour__one_position_people #form-tour__field_child').html(peopleChild);
    jQuery('#form-hotel__nights_to .form__value').html(nightsTo);
    jQuery('#form-hotel__one_position_nights #form-hotel__field_to').html(nightsTo);
    jQuery('#form-hotel__nights_from .form__value').html(nightsFrom);
    jQuery('#form-hotel__one_position_nights #form-hotel__field_from').html(nightsFrom);
    jQuery('#form-hotel__people_adults .form__value').html(peopleAdults);
    jQuery('#form-hotel__one_position_people #form-hotel__field_adults').html(peopleAdults);
    jQuery('#form-hotel__people_baby .form__value').html(peopleBaby + peopleChild);
    jQuery('#form-hotel__one_position_people #form-hotel__field_baby').html(peopleBaby);
    jQuery('#form-hotel__one_position_people #form-hotel__field_child').html(peopleChild);
    jQuery('#form-air__nights_to .form__value').html(nightsTo);
    jQuery('#form-air__one_position_nights #form-air__field_to').html(nightsTo);
    jQuery('#form-air__nights_from .form__value').html(nightsFrom);
    jQuery('#form-air__one_position_nights #form-air__field_from').html(nightsFrom);
    jQuery('#form-air__people_adults .form__value').html(peopleAdults);
    jQuery('#form-air__one_position_people #form-air__field_adults').html(peopleAdults);
    jQuery('#form-air__people_baby .form__value').html(peopleBaby + peopleChild);
    jQuery('#form-air__one_position_people #form-air__field_baby').html(peopleBaby);
    jQuery('#form-air__one_position_people #form-air__field_child').html(peopleChild);
    jQuery('#form-cruise__nights_to .form__value').html(nightsTo);
    jQuery('#form-cruise__one_position_nights #form-cruise__field_to').html(nightsTo);
    jQuery('#form-cruise__nights_from .form__value').html(nightsFrom);
    jQuery('#form-cruise__one_position_nights #form-cruise__field_from').html(nightsFrom);
    jQuery('#form-cruise__people_adults .form__value').html(peopleAdults);
    jQuery('#form-cruise__one_position_people #form-cruise__field_adults').html(peopleAdults);
    jQuery('#form-cruise__people_baby .form__value').html(peopleBaby + peopleChild);
    jQuery('#form-cruise__one_position_people #form-cruise__field_baby').html(peopleBaby);
    jQuery('#form-cruise__one_position_people #form-cruise__field_child').html(peopleChild);
    jQuery("div.form__row_child").remove();
  });
  
  //Заявка с главной
  jQuery('#form-tour__one_position_where').click(function() {
    jQuery('#form-tour__list_position_from').fadeOut(600);
    jQuery('#form-tour__calc_position_nights').fadeOut(600);
    jQuery('#form-tour__calc_position_people').fadeOut(600);
    jQuery('#form-tour__list_position_where').fadeIn(600);
  });
  jQuery('#form-hotel__one_position_where').click(function() {
    jQuery('#form-hotel__list_position_from').fadeOut(600);
    jQuery('#form-hotel__calc_position_nights').fadeOut(600);
    jQuery('#form-hotel__calc_position_people').fadeOut(600);
    jQuery('#form-hotel__list_position_where').fadeIn(600);
  });
  jQuery('#form-air__one_position_where').click(function() {
    jQuery('#form-air__list_position_from').fadeOut(600);
    jQuery('#form-air__calc_position_nights').fadeOut(600);
    jQuery('#form-air__calc_position_people').fadeOut(600);
    jQuery('#form-air__list_position_where').fadeIn(600);
  });
  jQuery('#form-cruise__one_position_where').click(function() {
    jQuery('#form-cruise__list_position_from').fadeOut(600);
    jQuery('#form-cruise__calc_position_nights').fadeOut(600);
    jQuery('#form-cruise__calc_position_people').fadeOut(600);
    jQuery('#form-cruise__list_position_where').fadeIn(600);
  });
  
  jQuery('#form-tour__list_position_where').click(function() {
    jQuery('#form-tour__list_position_where').fadeOut(600);
  });
  jQuery('#form-hotel__list_position_where').click(function() {
    jQuery('#form-hotel__list_position_where').fadeOut(600);
  });
  jQuery('#form-air__list_position_where').click(function() {
    jQuery('#form-air__list_position_where').fadeOut(600);
  });
  jQuery('#form-cruise__list_position_where').click(function() {
    jQuery('#form-cruise__list_position_where').fadeOut(600);
  });
  
  jQuery('#form-tour__one_position_from').click(function() {
    jQuery('#form-tour__list_position_where').fadeOut(600);
    jQuery('#form-tour__calc_position_nights').fadeOut(600);
    jQuery('#form-tour__calc_position_people').fadeOut(600);
    jQuery('#form-tour__list_position_from').fadeIn(600);
  });
  jQuery('#form-air__one_position_from').click(function() {
    jQuery('#form-air__list_position_where').fadeOut(600);
    jQuery('#form-air__calc_position_nights').fadeOut(600);
    jQuery('#form-air__calc_position_people').fadeOut(600);
    jQuery('#form-air__list_position_from').fadeIn(600);
  });
  jQuery('#form-cruise__one_position_from').click(function() {
    jQuery('#form-cruise__list_position_where').fadeOut(600);
    jQuery('#form-cruise__calc_position_nights').fadeOut(600);
    jQuery('#form-cruise__calc_position_people').fadeOut(600);
    jQuery('#form-cruise__list_position_from').fadeIn(600);
  });
  
  jQuery('#form-tour__list_position_from').click(function() {
    jQuery('#form-tour__list_position_from').fadeOut(600);
  });
  jQuery('#form-air__list_position_from').click(function() {
    jQuery('#form-air__list_position_from').fadeOut(600);
  });
  jQuery('#form-cruise__list_position_from').click(function() {
    jQuery('#form-cruise__list_position_from').fadeOut(600);
  });
  
  jQuery('#form-tour__one_position_nights').click(function() {
    jQuery('#form-tour__list_position_where').fadeOut(600);
    jQuery('#form-tour__list_position_from').fadeOut(600);
    jQuery('#form-tour__calc_position_people').fadeOut(600);
    jQuery('#form-tour__calc_position_nights').fadeIn(600);
  });
  jQuery('#form-hotel__one_position_nights').click(function() {
    jQuery('#form-hotel__list_position_where').fadeOut(600);
    jQuery('#form-hotel__list_position_from').fadeOut(600);
    jQuery('#form-hotel__calc_position_people').fadeOut(600);
    jQuery('#form-hotel__calc_position_nights').fadeIn(600);
  });
  jQuery('#form-cruise__one_position_nights').click(function() {
    jQuery('#form-cruise__list_position_where').fadeOut(600);
    jQuery('#form-cruise__list_position_from').fadeOut(600);
    jQuery('#form-cruise__calc_position_people').fadeOut(600);
    jQuery('#form-cruise__calc_position_nights').fadeIn(600);
  });
  
  jQuery('#form-tour__one_position_people').click(function() {
    jQuery('#form-tour__list_position_where').fadeOut(600);
    jQuery('#form-tour__list_position_from').fadeOut(600);
    jQuery('#form-tour__calc_position_nights').fadeOut(600);
    jQuery('#form-tour__calc_position_people').fadeIn(600);
  });
  jQuery('#form-hotel__one_position_people').click(function() {
    jQuery('#form-hotel__list_position_where').fadeOut(600);
    jQuery('#form-hotel__list_position_from').fadeOut(600);
    jQuery('#form-hotel__calc_position_nights').fadeOut(600);
    jQuery('#form-hotel__calc_position_people').fadeIn(600);
  });
  jQuery('#form-air__one_position_people').click(function() {
    jQuery('#form-air__list_position_where').fadeOut(600);
    jQuery('#form-air__list_position_from').fadeOut(600);
    jQuery('#form-air__calc_position_nights').fadeOut(600);
    jQuery('#form-air__calc_position_people').fadeIn(600);
  });
  jQuery('#form-cruise__one_position_people').click(function() {
    jQuery('#form-cruise__list_position_where').fadeOut(600);
    jQuery('#form-cruise__list_position_from').fadeOut(600);
    jQuery('#form-cruise__calc_position_nights').fadeOut(600);
    jQuery('#form-cruise__calc_position_people').fadeIn(600);
  });
  
  
    
  jQuery('#form-tour__list_position_where input:checkbox').click(function() {
    var where = jQuery(this).attr('value');
    jQuery('#form-tour__one_position_where .form__field').html(where);
  });
  
  jQuery('#form-tour__list_position_from input:checkbox').click(function() {
    var from = jQuery(this).attr('value');
    jQuery('#form-tour__one_position_from .form__field').html(from);
  });
  
  jQuery('#form-tour__nights_from .form__minus').click(function() {
    if(nightsFrom > 0){
      nightsFrom = nightsFrom - 1;
      jQuery('#form-tour__nights_from .form__value').html(nightsFrom);
      jQuery('#form-tour__one_position_nights #form-tour__field_from').html(nightsFrom);
    }
  });
  jQuery('#form-tour__nights_from .form__plus').click(function() {
    nightsFrom = nightsFrom + 1;
    jQuery('#form-tour__nights_from .form__value').html(nightsFrom);
    jQuery('#form-tour__one_position_nights #form-tour__field_from').html(nightsFrom);
    if(nightsFrom > nightsTo){
      nightsTo = nightsFrom;
      jQuery('#form-tour__nights_to .form__value').html(nightsTo);
      jQuery('#form-tour__one_position_nights #form-tour__field_to').html(nightsTo);
    }
  });
  
  jQuery('#form-tour__nights_to .form__minus').click(function() {
    if(nightsTo > 0){
      nightsTo = nightsTo - 1;
      jQuery('#form-tour__nights_to .form__value').html(nightsTo);
      jQuery('#form-tour__one_position_nights #form-tour__field_to').html(nightsTo);
    }
    if(nightsFrom > nightsTo){
      nightsFrom = nightsTo;
      jQuery('#form-tour__nights_from .form__value').html(nightsFrom);
      jQuery('#form-tour__one_position_nights #form-tour__field_from').html(nightsFrom);
    }
  });
  jQuery('#form-tour__nights_to .form__plus').click(function() {
    nightsTo = nightsTo + 1;
    jQuery('#form-tour__nights_to .form__value').html(nightsTo);
    jQuery('#form-tour__one_position_nights #form-tour__field_to').html(nightsTo);
  });
  
  jQuery('#form-tour__people_adults .form__minus').click(function() {
    if(peopleAdults > 0){
      peopleAdults = peopleAdults - 1;
      jQuery('#form-tour__people_adults .form__value').html(peopleAdults);
      jQuery('#form-tour__one_position_people #form-tour__field_adults').html(peopleAdults); 
    }
  });
  jQuery('#form-tour__people_adults .form__plus').click(function() {
    peopleAdults = peopleAdults + 1;
    jQuery('#form-tour__people_adults .form__value').html(peopleAdults);
    jQuery('#form-tour__one_position_people #form-tour__field_adults').html(peopleAdults);
  });
  
   jQuery('#form-tour__people_baby .form__minus').click(function() {
    if(peopleBaby + peopleChild > 0){
      var age = parseInt(jQuery('.form__bottom-child .form__value:last').attr('age'));
      if(age == 1){
        peopleBaby = peopleBaby - 1;
      }
      else{
       peopleChild = peopleChild - 1; 
      }
      jQuery('#form-tour__people_baby .form__value').html(peopleBaby + peopleChild);
      jQuery('#form-tour__one_position_people #form-tour__field_baby').html(peopleBaby);
      jQuery('#form-tour__one_position_people #form-tour__field_child').html(peopleChild);
      jQuery("div.form__row_child:last").remove()
    }
  });
  
  jQuery('#form-tour__people_baby .form__plus').click(function() {
    jQuery('.form__row_child .form__minus').unbind();
    jQuery('.form__row_child .form__plus').unbind();
    peopleBaby = peopleBaby + 1;
    jQuery('#form-tour__people_baby .form__value').html(peopleBaby + peopleChild);
    jQuery('#form-tour__one_position_people #form-tour__field_baby').html(peopleBaby);
    jQuery('#form-tour__calc_position_people').append('<div class="form__row form__row_child"><div class="form__top">Возраст ' + peopleBaby + ' ребёнка</div><div class="form__bottom form__bottom-child" id="form__people_child_' + peopleBaby + '"><div class="form__minus">&mdash;</div><div age="1" class="form__value" style="font-size:11px;">Меньше 2 лет</div><div class="form__plus">+</div></div></div>');
    jQuery('.form__row_child').each(function(i,elem){
      jQuery('.form__bottom-child .form__minus').eq(i).click(function() {
        childAge = jQuery('.form__bottom-child .form__value').eq(i).attr('age');
        if(childAge == 2){
          peopleChild = peopleChild - 1;
          peopleBaby = peopleBaby + 1;
          jQuery('#form-tour__one_position_people #form-tour__field_baby').html(peopleBaby);          
          jQuery('#form-tour__one_position_people #form-tour__field_child').html(peopleChild);
        }
        if(childAge < 3){
          childAge = 1;
          jQuery('.form__bottom-child .form__value').eq(i).html('Меньше 2 лет');
        }
        else if(childAge < 6){
          childAge = childAge - 1;
          jQuery('.form__bottom-child .form__value').eq(i).html(childAge + ' года');
        }
        else if(childAge < 18){
          childAge = childAge - 1;
          jQuery('.form__bottom-child .form__value').eq(i).html(childAge + ' лет');
        }
        jQuery('.form__bottom-child .form__value').eq(i).attr('age',childAge);
      });
      jQuery('.form__row_child .form__plus').eq(i).click(function() {
        childAge = parseInt(jQuery('.form__bottom-child .form__value').eq(i).attr('age'));
        if(childAge == 1){
          peopleChild = peopleChild + 1;
          peopleBaby = peopleBaby - 1;
          jQuery('#form-tour__one_position_people #form-tour__field_baby').html(peopleBaby);          
          jQuery('#form-tour__one_position_people #form-tour__field_child').html(peopleChild);
        }
        if(childAge < 4){
          childAge = childAge + 1;
          jQuery('.form__row_child .form__value').eq(i).html(childAge + ' года');
        }
        else if(childAge < 17){
          childAge = childAge + 1;
          jQuery('.form__row_child .form__value').eq(i).html(childAge + ' лет');
        }
        jQuery('.form__bottom-child .form__value').eq(i).attr('age',childAge);
      });
    });
  });
  
  jQuery('#form-tour__datepicker').datepicker({dayNamesMin: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'], monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],numberOfMonths: 2,dateFormat: 'dd.mm.yy'}).datepicker( "setDate", 30);
  
  jQuery('#form-hotel__list_position_where input:checkbox').click(function() {
    var where = jQuery(this).attr('value');
    jQuery('#form-hotel__one_position_where .form__field').html(where);
  });
  
  jQuery('#form-hotel__list_position_from input:checkbox').click(function() {
    var from = jQuery(this).attr('value');
    jQuery('#form-hotel__one_position_from .form__field').html(from);
  });
  
  jQuery('#form-hotel__nights_from .form__minus').click(function() {
    if(nightsFrom > 0){
      nightsFrom = nightsFrom - 1;
      jQuery('#form-hotel__nights_from .form__value').html(nightsFrom);
      jQuery('#form-hotel__one_position_nights #form-hotel__field_from').html(nightsFrom);
    }
  });
  jQuery('#form-hotel__nights_from .form__plus').click(function() {
    nightsFrom = nightsFrom + 1;
    jQuery('#form-hotel__nights_from .form__value').html(nightsFrom);
    jQuery('#form-hotel__one_position_nights #form-hotel__field_from').html(nightsFrom);
    if(nightsFrom > nightsTo){
      nightsTo = nightsFrom;
      jQuery('#form-hotel__nights_to .form__value').html(nightsTo);
      jQuery('#form-hotel__one_position_nights #form-hotel__field_to').html(nightsTo);
    }
  });
  
  jQuery('#form-hotel__nights_to .form__minus').click(function() {
    if(nightsTo > 0){
      nightsTo = nightsTo - 1;
      jQuery('#form-hotel__nights_to .form__value').html(nightsTo);
      jQuery('#form-hotel__one_position_nights #form-hotel__field_to').html(nightsTo);
    }
    if(nightsFrom > nightsTo){
      nightsFrom = nightsTo;
      jQuery('#form-hotel__nights_from .form__value').html(nightsFrom);
      jQuery('#form-hotel__one_position_nights #form-hotel__field_from').html(nightsFrom);
    }
  });
  jQuery('#form-hotel__nights_to .form__plus').click(function() {
    nightsTo = nightsTo + 1;
    jQuery('#form-hotel__nights_to .form__value').html(nightsTo);
    jQuery('#form-hotel__one_position_nights #form-hotel__field_to').html(nightsTo);
  });
  
  jQuery('#form-hotel__people_adults .form__minus').click(function() {
    if(peopleAdults > 0){
      peopleAdults = peopleAdults - 1;
      jQuery('#form-hotel__people_adults .form__value').html(peopleAdults);
      jQuery('#form-hotel__one_position_people #form-hotel__field_adults').html(peopleAdults); 
    }
  });
  jQuery('#form-hotel__people_adults .form__plus').click(function() {
    peopleAdults = peopleAdults + 1;
    jQuery('#form-hotel__people_adults .form__value').html(peopleAdults);
    jQuery('#form-hotel__one_position_people #form-hotel__field_adults').html(peopleAdults);
  });
  
   jQuery('#form-hotel__people_baby .form__minus').click(function() {
    if(peopleBaby + peopleChild > 0){
      var age = parseInt(jQuery('.form__bottom-child .form__value:last').attr('age'));
      if(age == 1){
        peopleBaby = peopleBaby - 1;
      }
      else{
       peopleChild = peopleChild - 1; 
      }
      jQuery('#form-hotel__people_baby .form__value').html(peopleBaby + peopleChild);
      jQuery('#form-hotel__one_position_people #form-hotel__field_baby').html(peopleBaby);
      jQuery('#form-hotel__one_position_people #form-hotel__field_child').html(peopleChild);
      jQuery("div.form__row_child:last").remove()
    }
  });
  
  jQuery('#form-hotel__people_baby .form__plus').click(function() {
    jQuery('.form__row_child .form__minus').unbind();
    jQuery('.form__row_child .form__plus').unbind();
    peopleBaby = peopleBaby + 1;
    jQuery('#form-hotel__people_baby .form__value').html(peopleBaby + peopleChild);
    jQuery('#form-hotel__one_position_people #form-hotel__field_baby').html(peopleBaby);
    jQuery('#form-hotel__calc_position_people').append('<div class="form__row form__row_child"><div class="form__top">Возраст ' + peopleBaby + ' ребёнка</div><div class="form__bottom form__bottom-child" id="form__people_child_' + peopleBaby + '"><div class="form__minus">&mdash;</div><div age="1" class="form__value" style="font-size:11px;">Меньше 2 лет</div><div class="form__plus">+</div></div></div>');
    jQuery('.form__row_child').each(function(i,elem){
      jQuery('.form__bottom-child .form__minus').eq(i).click(function() {
        childAge = jQuery('.form__bottom-child .form__value').eq(i).attr('age');
        if(childAge == 2){
          peopleChild = peopleChild - 1;
          peopleBaby = peopleBaby + 1;
          jQuery('#form-hotel__one_position_people #form-hotel__field_baby').html(peopleBaby);          
          jQuery('#form-hotel__one_position_people #form-hotel__field_child').html(peopleChild);
        }
        if(childAge < 3){
          childAge = 1;
          jQuery('.form__bottom-child .form__value').eq(i).html('Меньше 2 лет');
        }
        else if(childAge < 6){
          childAge = childAge - 1;
          jQuery('.form__bottom-child .form__value').eq(i).html(childAge + ' года');
        }
        else if(childAge < 18){
          childAge = childAge - 1;
          jQuery('.form__bottom-child .form__value').eq(i).html(childAge + ' лет');
        }
        jQuery('.form__bottom-child .form__value').eq(i).attr('age',childAge);
      });
      jQuery('.form__row_child .form__plus').eq(i).click(function() {
        childAge = parseInt(jQuery('.form__bottom-child .form__value').eq(i).attr('age'));
        if(childAge == 1){
          peopleChild = peopleChild + 1;
          peopleBaby = peopleBaby - 1;
          jQuery('#form-hotel__one_position_people #form-hotel__field_baby').html(peopleBaby);          
          jQuery('#form-hotel__one_position_people #form-hotel__field_child').html(peopleChild);
        }
        if(childAge < 4){
          childAge = childAge + 1;
          jQuery('.form__row_child .form__value').eq(i).html(childAge + ' года');
        }
        else if(childAge < 17){
          childAge = childAge + 1;
          jQuery('.form__row_child .form__value').eq(i).html(childAge + ' лет');
        }
        jQuery('.form__bottom-child .form__value').eq(i).attr('age',childAge);
      });
    });
  });
  
  jQuery('#form-hotel__datepicker').datepicker({dayNamesMin: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'], monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],numberOfMonths: 2,dateFormat: 'dd.mm.yy'}).datepicker( "setDate", 30);

  jQuery('#form-air__list_position_where input:checkbox').click(function() {
    var where = jQuery(this).attr('value');
    jQuery('#form-air__one_position_where .form__field').html(where);
  });
  
  jQuery('#form-air__list_position_from input:checkbox').click(function() {
    var from = jQuery(this).attr('value');
    jQuery('#form-air__one_position_from .form__field').html(from);
  });
  
  jQuery('#form-air__nights_from .form__minus').click(function() {
    if(nightsFrom > 0){
      nightsFrom = nightsFrom - 1;
      jQuery('#form-air__nights_from .form__value').html(nightsFrom);
      jQuery('#form-air__one_position_nights #form-air__field_from').html(nightsFrom);
    }
  });
  jQuery('#form-air__nights_from .form__plus').click(function() {
    nightsFrom = nightsFrom + 1;
    jQuery('#form-air__nights_from .form__value').html(nightsFrom);
    jQuery('#form-air__one_position_nights #form-air__field_from').html(nightsFrom);
    if(nightsFrom > nightsTo){
      nightsTo = nightsFrom;
      jQuery('#form-air__nights_to .form__value').html(nightsTo);
      jQuery('#form-air__one_position_nights #form-air__field_to').html(nightsTo);
    }
  });
  
  jQuery('#form-air__nights_to .form__minus').click(function() {
    if(nightsTo > 0){
      nightsTo = nightsTo - 1;
      jQuery('#form-air__nights_to .form__value').html(nightsTo);
      jQuery('#form-air__one_position_nights #form-air__field_to').html(nightsTo);
    }
    if(nightsFrom > nightsTo){
      nightsFrom = nightsTo;
      jQuery('#form-air__nights_from .form__value').html(nightsFrom);
      jQuery('#form-air__one_position_nights #form-air__field_from').html(nightsFrom);
    }
  });
  jQuery('#form-air__nights_to .form__plus').click(function() {
    nightsTo = nightsTo + 1;
    jQuery('#form-air__nights_to .form__value').html(nightsTo);
    jQuery('#form-air__one_position_nights #form-air__field_to').html(nightsTo);
  });
  
  jQuery('#form-air__people_adults .form__minus').click(function() {
    if(peopleAdults > 0){
      peopleAdults = peopleAdults - 1;
      jQuery('#form-air__people_adults .form__value').html(peopleAdults);
      jQuery('#form-air__one_position_people #form-air__field_adults').html(peopleAdults); 
    }
  });
  jQuery('#form-air__people_adults .form__plus').click(function() {
    peopleAdults = peopleAdults + 1;
    jQuery('#form-air__people_adults .form__value').html(peopleAdults);
    jQuery('#form-air__one_position_people #form-air__field_adults').html(peopleAdults);
  });
  
   jQuery('#form-air__people_baby .form__minus').click(function() {
    if(peopleBaby + peopleChild > 0){
      var age = parseInt(jQuery('.form__bottom-child .form__value:last').attr('age'));
      if(age == 1){
        peopleBaby = peopleBaby - 1;
      }
      else{
       peopleChild = peopleChild - 1; 
      }
      jQuery('#form-air__people_baby .form__value').html(peopleBaby + peopleChild);
      jQuery('#form-air__one_position_people #form-air__field_baby').html(peopleBaby);
      jQuery('#form-air__one_position_people #form-air__field_child').html(peopleChild);
      jQuery("div.form__row_child:last").remove()
    }
  });
  
  jQuery('#form-air__people_baby .form__plus').click(function() {
    jQuery('.form__row_child .form__minus').unbind();
    jQuery('.form__row_child .form__plus').unbind();
    peopleBaby = peopleBaby + 1;
    jQuery('#form-air__people_baby .form__value').html(peopleBaby + peopleChild);
    jQuery('#form-air__one_position_people #form-air__field_baby').html(peopleBaby);
    jQuery('#form-air__calc_position_people').append('<div class="form__row form__row_child"><div class="form__top">Возраст ' + peopleBaby + ' ребёнка</div><div class="form__bottom form__bottom-child" id="form__people_child_' + peopleBaby + '"><div class="form__minus">&mdash;</div><div age="1" class="form__value" style="font-size:11px;">Меньше 2 лет</div><div class="form__plus">+</div></div></div>');
    jQuery('.form__row_child').each(function(i,elem){
      jQuery('.form__bottom-child .form__minus').eq(i).click(function() {
        childAge = jQuery('.form__bottom-child .form__value').eq(i).attr('age');
        if(childAge == 2){
          peopleChild = peopleChild - 1;
          peopleBaby = peopleBaby + 1;
          jQuery('#form-air__one_position_people #form-air__field_baby').html(peopleBaby);          
          jQuery('#form-air__one_position_people #form-air__field_child').html(peopleChild);
        }
        if(childAge < 3){
          childAge = 1;
          jQuery('.form__bottom-child .form__value').eq(i).html('Меньше 2 лет');
        }
        else if(childAge < 6){
          childAge = childAge - 1;
          jQuery('.form__bottom-child .form__value').eq(i).html(childAge + ' года');
        }
        else if(childAge < 18){
          childAge = childAge - 1;
          jQuery('.form__bottom-child .form__value').eq(i).html(childAge + ' лет');
        }
        jQuery('.form__bottom-child .form__value').eq(i).attr('age',childAge);
      });
      jQuery('.form__row_child .form__plus').eq(i).click(function() {
        childAge = parseInt(jQuery('.form__bottom-child .form__value').eq(i).attr('age'));
        if(childAge == 1){
          peopleChild = peopleChild + 1;
          peopleBaby = peopleBaby - 1;
          jQuery('#form-air__one_position_people #form-air__field_baby').html(peopleBaby);          
          jQuery('#form-air__one_position_people #form-air__field_child').html(peopleChild);
        }
        if(childAge < 4){
          childAge = childAge + 1;
          jQuery('.form__row_child .form__value').eq(i).html(childAge + ' года');
        }
        else if(childAge < 17){
          childAge = childAge + 1;
          jQuery('.form__row_child .form__value').eq(i).html(childAge + ' лет');
        }
        jQuery('.form__bottom-child .form__value').eq(i).attr('age',childAge);
      });
    });
  });
  
  jQuery('#form-air__datepicker').datepicker({dayNamesMin: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'], monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],numberOfMonths: 2,dateFormat: 'dd.mm.yy'}).datepicker( "setDate", 30);

  jQuery('#form-cruise__list_position_where input:checkbox').click(function() {
    var where = jQuery(this).attr('value');
    jQuery('#form-cruise__one_position_where .form__field').html(where);
  });
  
  jQuery('#form-cruise__list_position_from input:checkbox').click(function() {
    var from = jQuery(this).attr('value');
    jQuery('#form-cruise__one_position_from .form__field').html(from);
  });
  
  jQuery('#form-cruise__nights_from .form__minus').click(function() {
    if(nightsFrom > 0){
      nightsFrom = nightsFrom - 1;
      jQuery('#form-cruise__nights_from .form__value').html(nightsFrom);
      jQuery('#form-cruise__one_position_nights #form-cruise__field_from').html(nightsFrom);
    }
  });
  jQuery('#form-cruise__nights_from .form__plus').click(function() {
    nightsFrom = nightsFrom + 1;
    jQuery('#form-cruise__nights_from .form__value').html(nightsFrom);
    jQuery('#form-cruise__one_position_nights #form-cruise__field_from').html(nightsFrom);
    if(nightsFrom > nightsTo){
      nightsTo = nightsFrom;
      jQuery('#form-cruise__nights_to .form__value').html(nightsTo);
      jQuery('#form-cruise__one_position_nights #form-cruise__field_to').html(nightsTo);
    }
  });
  
  jQuery('#form-cruise__nights_to .form__minus').click(function() {
    if(nightsTo > 0){
      nightsTo = nightsTo - 1;
      jQuery('#form-cruise__nights_to .form__value').html(nightsTo);
      jQuery('#form-cruise__one_position_nights #form-cruise__field_to').html(nightsTo);
    }
    if(nightsFrom > nightsTo){
      nightsFrom = nightsTo;
      jQuery('#form-cruise__nights_from .form__value').html(nightsFrom);
      jQuery('#form-cruise__one_position_nights #form-cruise__field_from').html(nightsFrom);
    }
  });
  jQuery('#form-cruise__nights_to .form__plus').click(function() {
    nightsTo = nightsTo + 1;
    jQuery('#form-cruise__nights_to .form__value').html(nightsTo);
    jQuery('#form-cruise__one_position_nights #form-cruise__field_to').html(nightsTo);
  });
  
  jQuery('#form-cruise__people_adults .form__minus').click(function() {
    if(peopleAdults > 0){
      peopleAdults = peopleAdults - 1;
      jQuery('#form-cruise__people_adults .form__value').html(peopleAdults);
      jQuery('#form-cruise__one_position_people #form-cruise__field_adults').html(peopleAdults); 
    }
  });
  jQuery('#form-cruise__people_adults .form__plus').click(function() {
    peopleAdults = peopleAdults + 1;
    jQuery('#form-cruise__people_adults .form__value').html(peopleAdults);
    jQuery('#form-cruise__one_position_people #form-cruise__field_adults').html(peopleAdults);
  });
  
   jQuery('#form-cruise__people_baby .form__minus').click(function() {
    if(peopleBaby + peopleChild > 0){
      var age = parseInt(jQuery('.form__bottom-child .form__value:last').attr('age'));
      if(age == 1){
        peopleBaby = peopleBaby - 1;
      }
      else{
       peopleChild = peopleChild - 1; 
      }
      jQuery('#form-cruise__people_baby .form__value').html(peopleBaby + peopleChild);
      jQuery('#form-cruise__one_position_people #form-cruise__field_baby').html(peopleBaby);
      jQuery('#form-cruise__one_position_people #form-cruise__field_child').html(peopleChild);
      jQuery("div.form__row_child:last").remove()
    }
  });
  
  jQuery('#form-cruise__people_baby .form__plus').click(function() {
    jQuery('.form__row_child .form__minus').unbind();
    jQuery('.form__row_child .form__plus').unbind();
    peopleBaby = peopleBaby + 1;
    jQuery('#form-cruise__people_baby .form__value').html(peopleBaby + peopleChild);
    jQuery('#form-cruise__one_position_people #form-cruise__field_baby').html(peopleBaby);
    jQuery('#form-cruise__calc_position_people').append('<div class="form__row form__row_child"><div class="form__top">Возраст ' + peopleBaby + ' ребёнка</div><div class="form__bottom form__bottom-child" id="form__people_child_' + peopleBaby + '"><div class="form__minus">&mdash;</div><div age="1" class="form__value" style="font-size:11px;">Меньше 2 лет</div><div class="form__plus">+</div></div></div>');
    jQuery('.form__row_child').each(function(i,elem){
      jQuery('.form__bottom-child .form__minus').eq(i).click(function() {
        childAge = jQuery('.form__bottom-child .form__value').eq(i).attr('age');
        if(childAge == 2){
          peopleChild = peopleChild - 1;
          peopleBaby = peopleBaby + 1;
          jQuery('#form-cruise__one_position_people #form-cruise__field_baby').html(peopleBaby);          
          jQuery('#form-cruise__one_position_people #form-cruise__field_child').html(peopleChild);
        }
        if(childAge < 3){
          childAge = 1;
          jQuery('.form__bottom-child .form__value').eq(i).html('Меньше 2 лет');
        }
        else if(childAge < 6){
          childAge = childAge - 1;
          jQuery('.form__bottom-child .form__value').eq(i).html(childAge + ' года');
        }
        else if(childAge < 18){
          childAge = childAge - 1;
          jQuery('.form__bottom-child .form__value').eq(i).html(childAge + ' лет');
        }
        jQuery('.form__bottom-child .form__value').eq(i).attr('age',childAge);
      });
      jQuery('.form__row_child .form__plus').eq(i).click(function() {
        childAge = parseInt(jQuery('.form__bottom-child .form__value').eq(i).attr('age'));
        if(childAge == 1){
          peopleChild = peopleChild + 1;
          peopleBaby = peopleBaby - 1;
          jQuery('#form-cruise__one_position_people #form-cruise__field_baby').html(peopleBaby);          
          jQuery('#form-cruise__one_position_people #form-cruise__field_child').html(peopleChild);
        }
        if(childAge < 4){
          childAge = childAge + 1;
          jQuery('.form__row_child .form__value').eq(i).html(childAge + ' года');
        }
        else if(childAge < 17){
          childAge = childAge + 1;
          jQuery('.form__row_child .form__value').eq(i).html(childAge + ' лет');
        }
        jQuery('.form__bottom-child .form__value').eq(i).attr('age',childAge);
      });
    });
  });
  
  jQuery('#form-cruise__datepicker').datepicker({dayNamesMin: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'], monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],numberOfMonths: 2,dateFormat: 'dd.mm.yy'}).datepicker( "setDate", 30);
//Заявка из хедера
 jQuery('#form-selection__one_position_where').click(function() {
    jQuery('#form-selection__list_position_from').fadeOut(600);
    jQuery('#form-selection__calc_position_nights').fadeOut(600);
    jQuery('#form-selection__calc_position_people').fadeOut(600);
    jQuery('#form-selection__list_position_where').fadeIn(600);
  });
  jQuery('#form-selection__list_position_where').click(function() {
    jQuery('#form-selection__list_position_where').fadeOut(600);
  });
  jQuery('#form-selection__one_position_from').click(function() {
    jQuery('#form-selection__list_position_where').fadeOut(600);
    jQuery('#form-selection__calc_position_nights').fadeOut(600);
    jQuery('#form-selection__calc_position_people').fadeOut(600);
    jQuery('#form-selection__list_position_from').fadeIn(600);
  });
  jQuery('#form-selection__list_position_from').click(function() {
    jQuery('#form-selection__list_position_from').fadeOut(600);
  });
  
  jQuery('#form-selection__one_position_nights').click(function() {
    jQuery('#form-selection__list_position_where').fadeOut(600);
    jQuery('#form-selection__list_position_from').fadeOut(600);
    jQuery('#form-selection__calc_position_people').fadeOut(600);
    jQuery('#form-selection__calc_position_nights').fadeIn(600);
  });
  jQuery('#form-selection__one_position_people').click(function() {
    jQuery('#form-selection__list_position_where').fadeOut(600);
    jQuery('#form-selection__list_position_from').fadeOut(600);
    jQuery('#form-selection__calc_position_nights').fadeOut(600);
    jQuery('#form-selection__calc_position_people').fadeIn(600);
  });
  
  
    
  jQuery('#form-selection__list_position_where input:checkbox').click(function() {
    var where = jQuery(this).attr('value');
    jQuery('#form-selection__one_position_where .form__field').html(where);
  });
  
  jQuery('#form-selection__list_position_from input:checkbox').click(function() {
    var from = jQuery(this).attr('value');
    jQuery('#form-selection__one_position_from .form__field').html(from);
  });
  
  jQuery('#form-selection__nights_from .form__minus').click(function() {
    if(nightsFrom > 0){
      nightsFrom = nightsFrom - 1;
      jQuery('#form-selection__nights_from .form__value').html(nightsFrom);
      jQuery('#form-selection__one_position_nights #form-selection__field_from').html(nightsFrom);
    }
  });
  jQuery('#form-selection__nights_from .form__plus').click(function() {
    nightsFrom = nightsFrom + 1;
    jQuery('#form-selection__nights_from .form__value').html(nightsFrom);
    jQuery('#form-selection__one_position_nights #form-selection__field_from').html(nightsFrom);
    if(nightsFrom > nightsTo){
      nightsTo = nightsFrom;
      jQuery('#form-selection__nights_to .form__value').html(nightsTo);
      jQuery('#form-selection__one_position_nights #form-selection__field_to').html(nightsTo);
    }
  });
  
  jQuery('#form-selection__nights_to .form__minus').click(function() {
    if(nightsTo > 0){
      nightsTo = nightsTo - 1;
      jQuery('#form-selection__nights_to .form__value').html(nightsTo);
      jQuery('#form-selection__one_position_nights #form-selection__field_to').html(nightsTo);
    }
    if(nightsFrom > nightsTo){
      nightsFrom = nightsTo;
      jQuery('#form-selection__nights_from .form__value').html(nightsFrom);
      jQuery('#form-selection__one_position_nights #form-selection__field_from').html(nightsFrom);
    }
  });
  jQuery('#form-selection__nights_to .form__plus').click(function() {
    nightsTo = nightsTo + 1;
    jQuery('#form-selection__nights_to .form__value').html(nightsTo);
    jQuery('#form-selection__one_position_nights #form-selection__field_to').html(nightsTo);
  });
  
  jQuery('#form-selection__people_adults .form__minus').click(function() {
    if(peopleAdults > 0){
      peopleAdults = peopleAdults - 1;
      jQuery('#form-selection__people_adults .form__value').html(peopleAdults);
      jQuery('#form-selection__one_position_people #form-selection__field_adults').html(peopleAdults); 
    }
  });
  jQuery('#form-selection__people_adults .form__plus').click(function() {
    peopleAdults = peopleAdults + 1;
    jQuery('#form-selection__people_adults .form__value').html(peopleAdults);
    jQuery('#form-selection__one_position_people #form-selection__field_adults').html(peopleAdults);
  });
  
   jQuery('#form-selection__people_baby .form__minus').click(function() {
    if(peopleBaby + peopleChild > 0){
      var age = parseInt(jQuery('.form__bottom-child .form__value:last').attr('age'));
      if(age == 1){
        peopleBaby = peopleBaby - 1;
      }
      else{
       peopleChild = peopleChild - 1; 
      }
      jQuery('#form-selection__people_baby .form__value').html(peopleBaby + peopleChild);
      jQuery('#form-selection__one_position_people #form-selection__field_baby').html(peopleBaby);
      jQuery('#form-selection__one_position_people #form-selection__field_child').html(peopleChild);
      jQuery("div.form__row_child:last").remove()
    }
  });
  
  jQuery('#form-selection__people_baby .form__plus').click(function() {
    jQuery('.form__row_child .form__minus').unbind();
    jQuery('.form__row_child .form__plus').unbind();
    peopleBaby = peopleBaby + 1;
    jQuery('#form-selection__people_baby .form__value').html(peopleBaby + peopleChild);
    jQuery('#form-selection__one_position_people #form-selection__field_baby').html(peopleBaby);
    jQuery('#form-selection__calc_position_people').append('<div class="form__row form__row_child"><div class="form__top">Возраст ' + peopleBaby + ' ребёнка</div><div class="form__bottom form__bottom-child" id="form__people_child_' + peopleBaby + '"><div class="form__minus">&mdash;</div><div age="1" class="form__value" style="font-size:11px;">Меньше 2 лет</div><div class="form__plus">+</div></div></div>');
    jQuery('.form__row_child').each(function(i,elem){
      jQuery('.form__bottom-child .form__minus').eq(i).click(function() {
        childAge = jQuery('.form__bottom-child .form__value').eq(i).attr('age');
        if(childAge == 2){
          peopleChild = peopleChild - 1;
          peopleBaby = peopleBaby + 1;
          jQuery('#form-selection__one_position_people #form-selection__field_baby').html(peopleBaby);          
          jQuery('#form-selection__one_position_people #form-selection__field_child').html(peopleChild);
        }
        if(childAge < 3){
          childAge = 1;
          jQuery('.form__bottom-child .form__value').eq(i).html('Меньше 2 лет');
        }
        else if(childAge < 6){
          childAge = childAge - 1;
          jQuery('.form__bottom-child .form__value').eq(i).html(childAge + ' года');
        }
        else if(childAge < 18){
          childAge = childAge - 1;
          jQuery('.form__bottom-child .form__value').eq(i).html(childAge + ' лет');
        }
        jQuery('.form__bottom-child .form__value').eq(i).attr('age',childAge);
      });
      jQuery('.form__row_child .form__plus').eq(i).click(function() {
        childAge = parseInt(jQuery('.form__bottom-child .form__value').eq(i).attr('age'));
        if(childAge == 1){
          peopleChild = peopleChild + 1;
          peopleBaby = peopleBaby - 1;
          jQuery('#form-selection__one_position_people #form-selection__field_baby').html(peopleBaby);          
          jQuery('#form-selection__one_position_people #form-selection__field_child').html(peopleChild);
        }
        if(childAge < 4){
          childAge = childAge + 1;
          jQuery('.form__row_child .form__value').eq(i).html(childAge + ' года');
        }
        else if(childAge < 17){
          childAge = childAge + 1;
          jQuery('.form__row_child .form__value').eq(i).html(childAge + ' лет');
        }
        jQuery('.form__bottom-child .form__value').eq(i).attr('age',childAge);
      });
    });
  });
  
  jQuery('#form-selection__datepicker').datepicker({dayNamesMin: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'], monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],numberOfMonths: 2,dateFormat: 'dd.mm.yy'}).datepicker( "setDate", 30);

  jQuery('.popup__input').click(function() {
    jQuery('#form-selection__list_position_where').fadeOut(600);
    jQuery('#form-selection__list_position_from').fadeOut(600);
    jQuery('#form-selection__calc_position_nights').fadeOut(600);
    jQuery('#form-selection__calc_position_people').fadeOut(600);
  });
  
});
