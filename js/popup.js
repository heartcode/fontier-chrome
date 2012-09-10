if (typeof Fontier == "undefined" || !Fontier) {var Fontier = {}};

var ft = Fontier;

ft.handleClick = function() {
  if (!$(this).hasClass('selected')) {
    var size = parseInt($(this).data('size'));

    chrome.experimental.fontSettings.setDefaultFontSize({pixelSize: size});

    $("#font_size_list li.selected").removeClass('selected');
    $(this).addClass('selected');
  }
};

ft.getDefaultFontSize = function() {
  console.log("getDefaultFontSize!");
  chrome.experimental.fontSettings.getDefaultFontSize({}, ft.setDefaultFontSize);
};

ft.setDefaultFontSize = function(font) {
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