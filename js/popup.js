if (typeof Fontier == "undefined" || !ColorZilla) {var Fontier = {}};

$(document).ready(function(){
  var ft = Fontier;
  ft.defaultFontSize = 0;
ft.getDefaultFontSize = function() {
  ft.defaultFontSize = chrome.experimental.fontSettings.getDefaultFontSize();
};

  ft.handleClick = function(event) {
    $('body').append('div').html('Font size: ' + chrome.experimental.fontSettings.getDefaultFontSize());
  };

  $("#font_size_list").on('click', ft.handleClick);
});