#Fontier for Chrome
===

**Fontier** is a Chrome extension, that helps Chrome users to change the default font size in the browser very easily.

I created this extension, because I work a lot with [responsive websites](http://viljamis.com/blog/2012/typography/), where we use relative (em) units for the content, and I needed a better way of changing the font size in Chrome (this setting is well hidden at the moment in the advanced settings).

**The extension uses the experimental Chrome API**, which means that users might need to enable the experimental features under the flags ([chrome://flags](chrome://flags/)), if they haven't already.

##Compatibility
The extension was built using the experimental API, which has not yet been finished, and might change in the future. At the moment I seem to be unable when exactly the fontSettings part of the experimental API was introduced, and which versions of Chrome **Fontier** is compatible with.

##Bugs
There is a bug in the native Chrome font size settings. After the font size is changed in **Fontier**, the user can't change the font size using the Chrome settings for some reason (Blinking issue). Hopefully in forthcoming versions of Chrome this bug (which I believe is with the experimental API) will be eliminated.