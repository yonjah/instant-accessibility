instant-accessibility
=====================

A small widget that will automatically add accessibility mode to any site

Info
----
This widget is just to try the consept. it probably won't work on every site, and there are much more
feature it will probably need.


Usage
-----

just include the access-widget.js in your page and run when document is ready
 ```javascript
 access.init();
 ```
 
 You might want to set the parent element so the widget won't mess your layout
 ```javascript
 access.init(document.getElementByID('accessibility-widget'));
 
 ```
 
 You can also use this widget as a bookmarklet 
 just add the code from access-bookmarklet.js  to one of your bookmark links
