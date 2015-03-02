// ==UserScript==
// @name         Pretty Scratch
// @namespace    https://github.com/GrannyCookies/pretty-scratch
// @version      1.0
// @description  Prettifies Scratch
// @author       GrannyCookies and easyScratcher
// @match        http://scratch.mit.edu/*
// @grant		 GM_setClipboard
// @grant    	 unsafeWindow
// @run-at		 document-start
// ==/UserScript==

installCSS = function(url) {
    var link = window.document.createElement('link');
    link.href = url + '?d=' + new Date();
    link.rel = 'stylesheet';
    document.getElementsByTagName("HEAD")[0].appendChild(link);
};

installJS = function(url) {
    var link = window.document.createElement('script');
    link.src = url + '?d=' + new Date();
    document.getElementsByTagName("HEAD")[0].appendChild(link);
};

unsafeWindow.prettyScratchVer = 1.0;
unsafeWindow.setClipboard = function(str) {
    // set clipboard swag
	GM_setClipboard(str);
};

installCSS('http://scratchextproxy.x10.mx/pretty-scratch.php');
installJS('http://scratchextproxy.x10.mx/pretty-scratch-js.php');
