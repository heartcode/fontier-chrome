if (typeof Fontier == "undefined" || !Fontier) {var Fontier = {}};

var ft = Fontier;
ft.analyticsCode = 'UA-19326313-14';

ft.handleClick = function(e) {
  if (!$(this).hasClass('selected')) {
    var size = parseInt($(this).data('size'));
    chrome.experimental.fontSettings.setDefaultFontSize({pixelSize: size});
    $("#font_size_list li.selected").removeClass('selected');
    $(this).addClass('selected');

    // Tracking the default font size
    _gaq.push(['_trackEvent', 'Font Size', 'setFontSize', size.toString()]);
  }
};

ft.getDefaultFontSize = function() {
  chrome.experimental.fontSettings.getDefaultFontSize({}, ft.setDefaultFontSize);
};
ft.setDefaultFontSize = function(font) {
  // Tracking the default font size
  _gaq.push(['_trackEvent', 'Font Size', 'getFontSize', font.pixelSize.toString()]);

  $("#font_size_list li").each(function(index, item) {
    if (parseInt($(item).data('size')) == font.pixelSize) {
      $(this).addClass('selected');
    }
  });
};

$(document).ready(function() {
  ft.getDefaultFontSize();
  $("#font_size_list li").on('click', ft.handleClick);
});

/*
* Google Analytics tracking code
*/
var _gaq = _gaq || [];
_gaq.push(['_setAccount', ft.analyticsCode]);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();