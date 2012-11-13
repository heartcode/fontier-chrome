(function(document, _gaq) {
  var fontSizeList = document.getElementById('font_size_list'),
  fontSizeListItems = fontSizeList.getElementsByTagName('li');

  getDefaultFontSize();
  addListItemClickEventHandlers();

  function getDefaultFontSize () {
    chrome.fontSettings.getDefaultFontSize({}, setDefaultFontSize);
  }

  function setDefaultFontSize (font) {
    _gaq.push(['_trackEvent', 'fontSize', 'getFontSize', font.pixelSize.toString()]);

    for (var i = 0, item; i < fontSizeListItems.length; i++ ) {
      item = fontSizeListItems[i];
      if (parseInt(item.getAttribute('data-size'), 10) == font.pixelSize) {
        item.className = 'selected';
      }
    }
  }

  function listItemClick (e) {
    var item = e.currentTarget,
        size,
        selectedListItem = fontSizeList.getElementsByClassName('selected')[0];
    
    selectedListItem.className = '';

    if (item.className != 'selected') {
      size = parseInt(item.getAttribute('data-size'), 10);
      chrome.fontSettings.setDefaultFontSize({pixelSize: size});
      item.className = 'selected';

      _gaq.push(['_trackEvent', 'fontSize', 'setFontSize', size.toString()]);
    }
  }

  function addListItemClickEventHandlers (e) {
    for (var i = 0, item; i < fontSizeListItems.length; i++ ) {
      item = fontSizeListItems[i];
      item.addEventListener('click', listItemClick);
    }
  }
})(document, _gaq);
