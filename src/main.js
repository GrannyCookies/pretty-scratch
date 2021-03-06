window.onload = function() {
  if(typeof prettyScratchVer === "undefined" || prettyScratchVer !== 1.0) {
    // prettyscratch update required!
    $('#content').css('padding-top', '100px');
    $('body').append('<div id="ps-update">Hello there! Just to let you know, <a href="https://github.com/GrannyCookies/pretty-scratch">Pretty Scratch</a> needs to update. <a href="http://grannycookies.github.io/pretty-scratch/">Click here</a> to update!</div>')
  }
  
  var prettyScratch;
  !function(a,b,c){"use strict";function d(a,b){this._defaults=e,this.element=a,this.setOptions(b),this.init()}var e={tagName:"a",newLine:"\n",target:"_blank",linkClass:null,linkClasses:[],linkAttributes:null};d.prototype={constructor:d,init:function(){1===this.element.nodeType?d.linkifyNode.call(this,this.element):this.element=d.linkify.call(this,this.element.toString())},setOptions:function(a){this.settings=d.extendSettings(a,this.settings)},toString:function(){return this.element.toString()}},d.extendSettings=function(a,b){var c;b=b||{};for(c in e)b[c]||(b[c]=e[c]);for(c in a)b[c]=a[c];return b},d.linkMatch=new RegExp(["(",'\\s|[^a-zA-Z0-9.\\+_\\/"\\>\\-]|^',")(?:","(","[a-zA-Z0-9\\+_\\-]+","(?:","\\.[a-zA-Z0-9\\+_\\-]+",")*@",")?(","http:\\/\\/|https:\\/\\/|ftp:\\/\\/",")?(","(?:(?:[a-z0-9][a-z0-9_%\\-_+]*\\.)+)",")(","(?:com|ca|co|edu|gov|net|org|dev|biz|cat|int|pro|tel|mil|aero|asia|coop|info|jobs|mobi|museum|name|post|travel|local|[a-z]{2})",")(","(?::\\d{1,5})",")?(","(?:","[\\/|\\?]","(?:","[\\-a-zA-Z0-9_%#*&+=~!?,;:.\\/]*",")*",")","[\\-\\/a-zA-Z0-9_%#*&+=~]","|","\\/?",")?",")(",'[^a-zA-Z0-9\\+_\\/"\\<\\-]|$',")"].join(""),"g"),d.emailLinkMatch=/(<[a-z]+ href=\")(http:\/\/)([a-zA-Z0-9\+_\-]+(?:\.[a-zA-Z0-9\+_\-]+)*@)/g,d.linkify=function(a,b){var c,e,f,g=[];this.constructor===d&&this.settings?(e=this.settings,b&&(e=d.extendSettings(b,e))):e=d.extendSettings(b),f=e.linkClass?e.linkClass.split(/\s+/):[],f.push.apply(f,e.linkClasses),a=a.replace(/</g,"&lt;").replace(/(\s)/g,"$1$1"),g.push("$1<"+e.tagName,'href="http://$2$4$5$6$7"'),g.push('class="linkified'+(f.length>0?" "+f.join(" "):"")+'"'),e.target&&g.push('target="'+e.target+'"');for(c in e.linkAttributes)g.push([c,'="',e.linkAttributes[c].replace(/\"/g,"&quot;").replace(/\$/g,"&#36;"),'"'].join(""));return g.push(">$2$3$4$5$6$7</"+e.tagName+">$8"),a=a.replace(d.linkMatch,g.join(" ")),a=a.replace(d.emailLinkMatch,"$1mailto:$3"),a=a.replace(/(\s){2}/g,"$1"),a=a.replace(/\n/g,e.newLine)},d.linkifyNode=function(a){var b,e,f,g,h;if(a&&"object"==typeof a&&1===a.nodeType&&"a"!==a.tagName.toLowerCase()&&!/[^\s]linkified[\s$]/.test(a.className)){for(b=[],g=d._dummyElement||c.createElement("div"),e=a.firstChild,f=a.childElementCount;e;){if(3===e.nodeType){for(;g.firstChild;)g.removeChild(g.firstChild);for(g.innerHTML=d.linkify.call(this,e.textContent||e.innerText||e.nodeValue),b.push.apply(b,g.childNodes);g.firstChild;)g.removeChild(g.firstChild)}else b.push(1===e.nodeType?d.linkifyNode.call(this,e):e);e=e.nextSibling}for(;a.firstChild;)a.removeChild(a.firstChild);for(h=0;h<b.length;h++)a.appendChild(b[h])}return a},d._dummyElement=c.createElement("div"),a.fn.linkify=function(b){return this.each(function(){var c;(c=a.data(this,"plugin-linkify"))?(c.setOptions(b),c.init()):a.data(this,"plugin-linkify",new d(this,b))})},a.fn.linkify.Constructor=d,a(b).on("load",function(){a("[data-linkify]").each(function(){var b,c=a(this),d=c.attr("data-linkify"),e={tagName:c.attr("data-linkify-tagname"),newLine:c.attr("data-linkify-newline"),target:c.attr("data-linkify-target"),linkClass:c.attr("data-linkify-linkclass")};for(var f in e)"undefined"==typeof e[f]&&delete e[f];b="this"===d?c:c.find(d),b.linkify(e)})}),a("body").on("click",".linkified",function(){var c=a(this),d=c.attr("href"),e=/^mailto:/i.test(d),f=c.attr("target");return e?b.location.href=d:b.open(d,f),!1})}(jQuery,window,document);
  
  doPrettyScratch();
  prettyScratch = setInterval(function() {
    doPrettyScratch();
  }, 5000);
  
  function doPrettyScratch() {
    // linkify stuff
    $('#comments .comment .info .content').linkify();
    $('.overview').linkify();
    
    // remove dodgey stuff on the forums
    $('.djangobb .box-head a.toggle').remove();
    
    // override news icons
    newsIcons();
    
    // emojii
    doEmoji();
    
    // add "link to this comment" button
    $('.comment').not('.linked').each(function() {
      var linkto = window.location.href + '#' + $(this).attr('id');
      var span = '<span class="actions report" onclick="setClipboard(\'' + linkto + '\');$(this).html(\'Copied to clipboard\');">Link to this</span>';
      $(this).children('.actions-wrap').append(span);
      $(this).addClass('linked');
    });
  }
  
  // add emoji
  function doEmoji() {
    var emoji = [':P', '&gt;:(', ':)', ':D', '8)', ' :/', ':3', ':|', ':O', '-_-', ';)', 'xD', 'XD', 'D:&lt;', ':(', 'O:)', 'O:-)', ':o', ':-?', ':?', 'D:', ';P'];
    var image = ['tounge', 'angry', 'smile', 'happy', 'cool', 'er', 'whistle', 'straight', 'oug', 'youdontsay', 'wink', 'xd', 'xd', 'killer', 'aww', 'angle', 'angle', 'what', 'speechless', 'speechless', 'urg', 'XP'];
    
    $('#comments .comment .info .content').each(function() {
      var text = $(this).html();
      var i = 0;
      while(i<=emoji.length) {
        text = text.replace(emoji[i], '<img src="https://raw.githubusercontent.com/GrannyCookies/pretty-scratch/gh-pages/emoji/' + image[i] + '.png" class="ps-emoji">');
        i++;
      }
      $(this).html(text);
    });
  }
  
  function newsIcons() {
    // news icon overrider
    // "New SDS" icon
    var oldSRC = "https://31.media.tumblr.com/d99a1da959f7d077d266580842a8d3f4/tumblr_inline_n6jlk1ULuG1szpavb.png";
    var newSRC = "https://github.com/GrannyCookies/pretty-scratch/blob/gh-pages/newsicons/newsds.png?raw=true";
    if(newSRC !== "") {
      $('img[src="' + oldSRC + '"]').attr('src', newSRC);
    }
    
    // "Shouting Scratch Cat" icon
    var oldSRC = "https://31.media.tumblr.com/5d3dca2587258b7940f5f18fb35ed34d/tumblr_inline_n0lc2mksfH1szpavb.png";
    var newSRC = "https://github.com/GrannyCookies/pretty-scratch/blob/gh-pages/newsicons/Catwithairhorn.png?raw=true";
    if(newSRC !== "") {
      $('img[src="' + oldSRC + '"]').attr('src', newSRC);
    }
    
    // "Speech Bubble" icon
    var oldSRC = "https://31.media.tumblr.com/695b93f4ab74c68feaef1fe03baebdd5/tumblr_inline_n0xubtT0vU1szpavb.png";
    var newSRC = "https://github.com/GrannyCookies/pretty-scratch/blob/gh-pages/newsicons/speechbubble.png?raw=true";
    if(newSRC !== "") {
      $('img[src="' + oldSRC + '"]').attr('src', newSRC);
    }
    
    // "Tera" icon
    var oldSRC = "https://31.media.tumblr.com/73906c6bf7b31e453220704a1e3c272c/tumblr_inline_n0ygefh6Ty1szpavb.png";
    var newSRC = "https://github.com/GrannyCookies/pretty-scratch/blob/gh-pages/newsicons/tera.png?raw=true";
    if(newSRC !== "") {
      $('img[src="' + oldSRC + '"]').attr('src', newSRC);
    }
    
    // "Gobo" icon
    var oldSRC = "http://media.tumblr.com/bcf1c019712b4c87765ed76c89d9eb93/tumblr_inline_mp2ofqTDF51qz4rgp.png";
    var newSRC = "https://github.com/GrannyCookies/pretty-scratch/blob/gh-pages/newsicons/gobo.png?raw=true";
    if(newSRC !== "") {
      $('img[src="' + oldSRC + '"]').attr('src', newSRC);
    }
  }
}
