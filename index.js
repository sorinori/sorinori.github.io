var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
$.get('text1.txt', function(data) {
   //$('#text1').html(data);
   ctx.fillText(data,10,50);
}, 'text');
//$("#main_list").append("");
