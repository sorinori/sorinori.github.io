var titles = {
  'English' : ["Music Talk with Jinjoo from South Korea","Music Talk with Ali from Iran","Music Talk with Brian from the US"],
  'Korean'  : ["한국에서 온 진주와의 뮤직 토크", "이란에서 알리와 음악 토크", "미국에서 온 Brian과의 뮤직 토크"],
  'Persian' : ['صحبت موسیقایی با جینجو از کره جنوبی', 'صحبت موسیقایی با علی از ایران', 'صحبت موسیقایی با برایان از آمریکا'],
  'Spanish' : ['Charla musical con Jinjoo, de Corea del Sur', 'Charla musical con Ali, de Iran', 'Charla musical con Brian, de US'],
  'German'  : ['Musikgespräch mit Jinjoo aus Südkorea', 'Musikgespräch mit Ali aus Iran', 'Musikgespräch mit Brian aus vereinigte Staaten']
};

var aligns = {
  'English' : 'left',
  'Korean'  : 'left',
  'Persian' : 'right',
  'Spanish' : 'left',
  'German'  : 'left',
};

var directions = {
  'English' : 'ltr',
  'Korean'  : 'ltr',
  'Persian' : 'rtl',
  'Spanish' : 'ltr',
  'German'  : 'ltr',
};

var short_names = {
  'English' : 'en',
  'Korean'  : 'kr',
  'Persian' : 'fa',
  'Spanish' : 'es',
  'German'  : 'de',
};

function change_lang(x) {
  tmp = short_names[x];
  for (var i=1;i<4;i++) {
    $('#li' + i).css('text-align', aligns[x]);
    $('#li' + i).css('direction', directions[x]);
    $("#text_title_" + i).html(titles[x][i-1]);
    $("#item" + i + "p").html(titles[x][i-1]);

    $.ajax({
      url: 'text' + i + '_' + tmp + '.txt',
      async: false,
      success: function(data) {
        $('#text' + i).css('direction',directions[x]);
        $('#text' + i).html(data);
      }
    });
  }
}

change_lang('English');
