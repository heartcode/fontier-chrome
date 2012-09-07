if (typeof Fontier == "undefined" || !ColorZilla) {var Fontier = {}};

var ft = Fontier;
ft.defaultFontSize = 12.5;

ft.handleClick = function() {
  if (!$(this).hasClass('selected')) {
    chrome.experimental.fontSettings.setDefaultFontSize({pixelSize: parseInt($(this).data('size'))});

    $("#font_size_list li.selected").removeClass('selected');
    $(this).addClass('selected');
  }
};

$("#font_size_list li").on('click', ft.handleClick);