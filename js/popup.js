if (typeof Fontier == "undefined" || !Fontier) {var Fontier = {}};

var ft = Fontier;
ft.fontSize = localStorage["ft.fontSize"] ? parseInt(localStorage["ft.fontSize"]) : 16;

ft.handleClick = function() {
  if (!$(this).hasClass('selected')) {
    var size = parseInt($(this).data('size'));
    localStorage.setItem('ft.fontSize', size);

    chrome.experimental.fontSettings.setDefaultFontSize({pixelSize: size});

    $("#font_size_list li.selected").removeClass('selected');
    $(this).addClass('selected');
  }
};

$(document).ready(function() {
  $("#font_size_list li").each(function(index, item) {
    if (parseInt($(item).data('size')) == ft.fontSize) {
      $(this).addClass('selected');
      console.log([item, ft.fontSize]);
    }
  });
  $("#font_size_list li").on('click', ft.handleClick);
});