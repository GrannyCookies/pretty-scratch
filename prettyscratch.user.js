// ==UserScript==
// @name         Pretty Scratch
// @namespace    https://github.com/GrannyCookies/pretty-scratch
// @version      0.2
// @description  Prettifies Scratch
// @author       GrannyCookies
// @match        http://scratch.mit.edu/*
// @run-at document-start
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

installCSS('http://scratchextproxy.x10.mx/pretty-scratch.php');
installJS('http://scratchextproxy.x10.mx/pretty-scratch-js.php');
