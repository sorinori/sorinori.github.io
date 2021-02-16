var data = {
  'English' : ["Music Talk with Jinjoo from South Korea","Music Takk with Ali from Iran","Music Takk with Brian from the US"],
  'Korean'  : ["한국의 음악", "이란의 음악", "이란의 음악"],
  'Spanish' : [],
  'German'  : []
};

function change_lang(x) {
  var tmp = 'en';

  if(x == "English") {
    tmp = 'en';
    $('#li1').css('text-align','left');
    $('#li2').css('text-align','left'); 
    $('#li3').css('text-align','left');
    $('#li1').css('direction','ltr');
    $('#li2').css('direction','ltr'); 
    $('#li3').css('direction','ltr');
    $("#text_title_1").html("Music Talk with Jinjoo from South Korea");
    $("#text_title_2").html("Music Takk with Ali from Iran");
    $("#text_title_3").html("Music Takk with Brian from the US");
    $("#item1p").html("Music Talk with Jinjoo from South Korea");
    $("#item2p").html("Music Takk with Ali from Iran");
    $("#item3p").html("Music Takk with Brian from the US");
  }

  if(x == "Korean") {
    tmp = 'kr';
    $('#li1').css('text-align','left');
    $('#li2').css('text-align','left'); 
    $('#li3').css('text-align','left');
    $('#li1').css('direction','ltr');
    $('#li2').css('direction','ltr');
    $('#li3').css('direction','ltr');
    $("#text_title_1").html("한국의 음악");
    $("#text_title_2").html("이란의 음악");
    $("#text_title_3").html("이란의 음악");
  }
  
  if(x == "Persian") {
   tmp = 'fa';
   $('#li1').css('text-align','right');
   $('#li2').css('text-align','right');
   $('#li3').css('text-align','right');
   $('#li1').css('direction','rtl');
   $('#li2').css('direction','rtl'); 
   $('#li3').css('direction','rtl');
   $("#text_title_1").html('صحبت موسیقایی با جینجو از کره جنوبی');
   $("#text_title_2").html('صحبت موسیقایی با علی از ایران');
   $("#text_title_3").html('صحبت موسیقایی با برایان از آمریکا');
   $("#item1p").html('صحبت موسیقایی با جینجو از کره جنوبی');
   $("#item2p").html('صحبت موسیقایی با علی از ایران');
   $("#item3p").html('صحبت موسیقایی با برایان از آمریکا');
  }
  
  if(x == "Spanish") {
   tmp = 'es';
   $('#li1').css('text-align','left');
   $('#li2').css('text-align','left');
   $('#li3').css('text-align','left');
   $('#li1').css('direction','ltr');
   $('#li2').css('direction','ltr'); 
   $('#li3').css('direction','ltr'); 
   $("#text_title_1").html('Charla musical con Jinjoo, de Corea del Sur');
   $("#text_title_2").html('Charla musical con Ali, de Iran');
   $("#text_title_3").html('Charla musical con Brian, de US');
   $("#item1p").html('Charla musical con Jinjoo, de Corea del Sur');
   $("#item2p").html('Charla musical con Ali, de Iran');
   $("#item3p").html('Charla musical con Brian, de US');
  }
  
  if(x == "German") {
   tmp = 'de';
   $('#li1').css('text-align','left');
   $('#li2').css('text-align','left');
   $('#li3').css('text-align','left');
   $('#li1').css('direction','ltr');
   $('#li2').css('direction','ltr'); 
   $('#li3').css('direction','ltr'); 
   $("#text_title_1").html('Musikgespräch mit Jinjoo aus Südkorea');
   $("#text_title_2").html('Musikgespräch mit Ali aus Iran');
   $("#text_title_3").html('Musikgespräch mit Brian aus vereinigte staaten');
   $("#item1p").html('Musikgespräch mit Jinjoo aus Südkorea');
   $("#item2p").html('Musikgespräch mit Ali aus Iran');
   $("#item3p").html('Musikgespräch mit Brian aus vereinigte staaten');
  }
  
  
  $.get('text1_' + tmp + '.txt', function(data) {
   $('#text1').html(data);
  }, 'text');
  
  $.get('text2_' + tmp + '.txt', function(data) {
    $('#text2').html(data);
  }, 'text');
  
  $.get('text3_' + tmp + '.txt', function(data) {
    $('#text3').html(data);
  }, 'text');

}

$.get('text1_en.txt', function(data) {
   $('#text1').html(data);
}, 'text');
$.get('text2_en.txt', function(data) {
   $('#text2').html(data);
}, 'text');
$.get('text3_en.txt', function(data) {
   $('#text3').html(data);
}, 'text');



