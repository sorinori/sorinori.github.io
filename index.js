var titles = {
  'English' : ["Music Talk with Jinjoo from South Korea","Music Takk with Ali from Iran","Music Takk with Brian from the US"],
  'Korean'  : ["한국의 음악", "이란의 음악", "이란의 음악"],
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
    $('#li' + i).css('direction', directions[x][i-1]);
    $("#text_title_" + i).html(titles[x][i-1]);
    $("#item" + i + "p").html(titles[x][i-1]);

    $.get('text' + i + '_' + tmp + '.txt', function(data) {
     $('#text' + i).html(data);
    }, 'text');
  }
}

change_lang('English');
