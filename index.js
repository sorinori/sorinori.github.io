function change_lang(x) {
  var tmp = 'en';

  if(x == "English") {
    tmp = 'en';
    $('#li1').css('text-align','left');
    $('#li2').css('text-align','left'); 
    $('#li1').css('direction','ltr');
    $('#li2').css('direction','ltr'); 
    $("#text_title_1").html("Music in Korea");
    $("#text_title_2").html("Music in Iran");
  }

  if(x == "Korean") {
    tmp = 'kr';
    $('#li1').css('text-align','left');
    $('#li2').css('text-align','left'); 
    $('#li1').css('direction','ltr');
    $('#li2').css('direction','ltr');
    $("#text_title_1").html("한국의 음악");
    $("#text_title_2").html("이란의 음악");
  }
  
  if(x == "Persian") {
   tmp = 'fa';
   $('#li1').css('text-align','right');
   $('#li2').css('text-align','right');
   $('#li1').css('direction','rtl');
   $('#li2').css('direction','rtl'); 
   $("#text_title_1").html('موسیقی در کره');
   $("#text_title_2").html('موسیقی در ایران');
  }
  
  if(x == "Spanish") {
   tmp = 'es';
   $('#li1').css('text-align','left');
   $('#li2').css('text-align','left');
   $('#li1').css('direction','ltr');
   $('#li2').css('direction','ltr'); 
   $("#text_title_1").html('Música en Corea');
   $("#text_title_2").html('Música en Iran');
  }
  
  if(x == "German") {
   tmp = 'de';
   $('#li1').css('text-align','left');
   $('#li2').css('text-align','left');
   $('#li1').css('direction','ltr');
   $('#li2').css('direction','ltr'); 
   $("#text_title_1").html('Musik in Korea');
   $("#text_title_2").html('Musik in Iran');
  }
  
  
  $.get('text1_' + tmp + '.txt', function(data) {
   $('#text1').html(data);
  }, 'text');
  
  $.get('text2_' + tmp + '.txt', function(data) {
    $('#text2').html(data);
  }, 'text');

}

$.get('text1_en.txt', function(data) {
   $('#text1').html(data);
}, 'text');
$.get('text2_en.txt', function(data) {
   $('#text2').html(data);
}, 'text');



