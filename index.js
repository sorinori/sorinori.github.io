function change_lang() {
  var x = document.getElementById("langselect").value;
  var tmp = 'en';

  if(x == "English") {
    tmp = 'en';
    $('li1').css('text-align:left');
    $('li2').css('text-align:left'); 
    $("#text_title_1").html("Music in Korea");
    $("#text_title_2").html("Music in Iran");
  }

  if(x == "Korean") {
    tmp = 'kr';
    $('li1').css('text-align:left');
    $('li2').css('text-align:left'); 
    $("#text_title_1").html("한국의 음악");
    $("#text_title_2").html("이란의 음악");
  }
  
  if(x == "Persian") {
   tmp = 'fa';
   $('li1').css('text-align:right');
   $('li2').css('text-align:right');
   $("#text_title_1").html('موسیقی در کره');
   $("#text_title_2").html('موسیقی در ایران');
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



