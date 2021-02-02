function change_lang() {
  var x = document.getElementById("langselect").value;
  var tmp = 'en'
  if(x == "Korean") {
    tmp = 'kr';
  }
  
  if(x == "Persian") {
   tmp = 'fa';
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



