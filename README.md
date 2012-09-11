![](https://github.com/heartcode/fontier-chrome/raw/master/img/icon_48.png)

Fontier for Chrome
===

**Fontier** is an experimental Chrome extension, that helps Chrome users to change the default font size in the browser very easily.

I created this extension, because I work a lot with [responsive websites](http://viljamis.com/blog/2012/typography/), where we use relative (em) units for the content, and I needed a better way of changing the font size in Chrome (this setting is well hidden at the moment in the advanced settings).

**The extension uses the experimental Chrome API**, which means that users might need to enable the experimental features under the flags ([chrome://flags](chrome://flags)), if they haven't already.

##But what is it again?
Check out these screenshots to to see how **Fontier**: does the magic:
[http://www.flickr.com/photos/justbrq/sets/72157631509613949/with/7975619636/](http://www.flickr.com/photos/justbrq/sets/72157631509613949/with/7975619636/)

##Installation
Unfortunately until a Chrome extension uses any experimental features, it cannot be added to the Chrome Web Store. If you would like to try the extension, follow these steps:

1. Clone the repository:

	```git clone git@github.com:heartcode/fontier-chrome.git```
	
2. Open [chrome://flags](chrome://flags) in Chrome and enable **Experimental Extension APIs**
2. Open  [chrome://extensions](chrome://extensions) in Chrome
3. Select the **'Developer mode'** option on the upper-right corner
2. Click the **'Load unpacked extension…'** button and select the **fontier-chrome** folder
3. The little ![](https://github.com/heartcode/fontier-chrome/raw/master/img/icon_16.png) icon should appear in the toolbar and the extension should be ready to go.

##Compatibility
**Fontier** is compatible with Chrome 16.0.912 and later versions

##Changelog
**10/09/2012:**
v0.1 - Initial release  

**11/09/2012:**
v0.2 - Fixed [issue #2](https://github.com/heartcode/fontier-chrome/issues/2)

##Issue tracking
If you experience any issues, please let me know using the [Github issues page](https://github.com/heartcode/fontier-chrome/issues).

##Licensing
(The MIT License)

Copyright (c) 2012 Róbert Pataki heartcode@robertpataki.com;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.