/*! For license information please see 4.c1378ab6.chunk.js.LICENSE.txt */
(this.webpackJsonpjspdf_simplest=this.webpackJsonpjspdf_simplest||[]).push([[4],{16:function(e,t,n){e.exports=function(){"use strict";var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.keys,o=Object.freeze,i=Object.seal,a="undefined"!==typeof Reflect&&Reflect,l=a.apply,c=a.construct;l||(l=function(e,t,n){return e.apply(t,n)}),o||(o=function(e){return e}),i||(i=function(e){return e}),c||(c=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var s=S(Array.prototype.forEach),u=S(Array.prototype.indexOf),d=S(Array.prototype.join),p=S(Array.prototype.pop),f=S(Array.prototype.push),m=S(Array.prototype.slice),y=S(String.prototype.toLowerCase),h=S(String.prototype.match),g=S(String.prototype.replace),v=S(String.prototype.indexOf),b=S(String.prototype.trim),T=S(RegExp.prototype.test),A=k(RegExp),x=k(TypeError);function S(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return l(e,t,r)}}function k(e){return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return c(e,n)}}function _(e,r){t&&t(e,null);for(var o=r.length;o--;){var i=r[o];if("string"===typeof i){var a=y(i);a!==i&&(n(r)||(r[o]=a),i=a)}e[i]=!0}return e}function L(t){var n={},r=void 0;for(r in t)l(e,t,[r])&&(n[r]=t[r]);return n}var E=o(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),M=o(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),D=o(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),w=o(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),R=o(["#text"]),N=o(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns"]),O=o(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),H=o(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),C=o(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),F=i(/\{\{[\s\S]*|[\s\S]*\}\}/gm),z=i(/<%[\s\S]*|[\s\S]*%>/gm),I=i(/^data-[\-\w.\u00B7-\uFFFF]/),U=i(/^aria-[\-\w]+$/),j=i(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),P=i(/^(?:\w+script|data):/i),G=i(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),W="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function B(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var q=function(){return"undefined"===typeof window?null:window},K=function(e,t){if("object"!==("undefined"===typeof e?"undefined":W(e))||"function"!==typeof e.createPolicy)return null;var n=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(n=t.currentScript.getAttribute("data-tt-policy-suffix"));var r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:function(e){return e}})}catch(o){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q(),n=function(t){return e(t)};if(n.version="2.0.12",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var i=t.document,a=!1,l=t.document,c=t.DocumentFragment,S=t.HTMLTemplateElement,k=t.Node,V=t.NodeFilter,Y=t.NamedNodeMap,J=void 0===Y?t.NamedNodeMap||t.MozNamedAttrMap:Y,X=t.Text,$=t.Comment,Q=t.DOMParser,Z=t.trustedTypes;if("function"===typeof S){var ee=l.createElement("template");ee.content&&ee.content.ownerDocument&&(l=ee.content.ownerDocument)}var te=K(Z,i),ne=te&&He?te.createHTML(""):"",re=l,oe=re.implementation,ie=re.createNodeIterator,ae=re.getElementsByTagName,le=re.createDocumentFragment,ce=i.importNode,se={};n.isSupported=oe&&"undefined"!==typeof oe.createHTMLDocument&&9!==l.documentMode;var ue=F,de=z,pe=I,fe=U,me=P,ye=G,he=j,ge=null,ve=_({},[].concat(B(E),B(M),B(D),B(w),B(R))),be=null,Te=_({},[].concat(B(N),B(O),B(H),B(C))),Ae=null,xe=null,Se=!0,ke=!0,_e=!1,Le=!1,Ee=!1,Me=!1,De=!1,we=!1,Re=!1,Ne=!1,Oe=!1,He=!1,Ce=!0,Fe=!0,ze=!1,Ie={},Ue=_({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","plaintext","script","style","svg","template","thead","title","video","xmp"]),je=null,Pe=_({},["audio","video","img","source","image","track"]),Ge=null,We=_({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Be=null,qe=l.createElement("form"),Ke=function(e){Be&&Be===e||(e&&"object"===("undefined"===typeof e?"undefined":W(e))||(e={}),ge="ALLOWED_TAGS"in e?_({},e.ALLOWED_TAGS):ve,be="ALLOWED_ATTR"in e?_({},e.ALLOWED_ATTR):Te,Ge="ADD_URI_SAFE_ATTR"in e?_(L(We),e.ADD_URI_SAFE_ATTR):We,je="ADD_DATA_URI_TAGS"in e?_(L(Pe),e.ADD_DATA_URI_TAGS):Pe,Ae="FORBID_TAGS"in e?_({},e.FORBID_TAGS):{},xe="FORBID_ATTR"in e?_({},e.FORBID_ATTR):{},Ie="USE_PROFILES"in e&&e.USE_PROFILES,Se=!1!==e.ALLOW_ARIA_ATTR,ke=!1!==e.ALLOW_DATA_ATTR,_e=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Le=e.SAFE_FOR_JQUERY||!1,Ee=e.SAFE_FOR_TEMPLATES||!1,Me=e.WHOLE_DOCUMENT||!1,Re=e.RETURN_DOM||!1,Ne=e.RETURN_DOM_FRAGMENT||!1,Oe=e.RETURN_DOM_IMPORT||!1,He=e.RETURN_TRUSTED_TYPE||!1,we=e.FORCE_BODY||!1,Ce=!1!==e.SANITIZE_DOM,Fe=!1!==e.KEEP_CONTENT,ze=e.IN_PLACE||!1,he=e.ALLOWED_URI_REGEXP||he,Ee&&(ke=!1),Ne&&(Re=!0),Ie&&(ge=_({},[].concat(B(R))),be=[],!0===Ie.html&&(_(ge,E),_(be,N)),!0===Ie.svg&&(_(ge,M),_(be,O),_(be,C)),!0===Ie.svgFilters&&(_(ge,D),_(be,O),_(be,C)),!0===Ie.mathMl&&(_(ge,w),_(be,H),_(be,C))),e.ADD_TAGS&&(ge===ve&&(ge=L(ge)),_(ge,e.ADD_TAGS)),e.ADD_ATTR&&(be===Te&&(be=L(be)),_(be,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&_(Ge,e.ADD_URI_SAFE_ATTR),Fe&&(ge["#text"]=!0),Me&&_(ge,["html","head","body"]),ge.table&&(_(ge,["tbody"]),delete Ae.tbody),o&&o(e),Be=e)},Ve=function(e){f(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=ne}},Ye=function(e,t){try{f(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(r){f(n.removed,{attribute:null,from:t})}t.removeAttribute(e)},Je=function(e){var t=void 0,n=void 0;if(we)e="<remove></remove>"+e;else{var r=h(e,/^[\r\n\t ]+/);n=r&&r[0]}var o=te?te.createHTML(e):e;try{t=(new Q).parseFromString(o,"text/html")}catch(c){}if(a&&_(Ae,["title"]),!t||!t.documentElement){var i=(t=oe.createHTMLDocument("")).body;i.parentNode.removeChild(i.parentNode.firstElementChild),i.outerHTML=o}return e&&n&&t.body.insertBefore(l.createTextNode(n),t.body.childNodes[0]||null),ae.call(t,Me?"html":"body")[0]};n.isSupported&&function(){try{var e=Je("<x/><title>&lt;/title&gt;&lt;img&gt;");T(/<\/title/,e.querySelector("title").innerHTML)&&(a=!0)}catch(t){}}();var Xe=function(e){return ie.call(e.ownerDocument||e,e,V.SHOW_ELEMENT|V.SHOW_COMMENT|V.SHOW_TEXT,(function(){return V.FILTER_ACCEPT}),!1)},$e=function(e){return!(e instanceof X||e instanceof $)&&!("string"===typeof e.nodeName&&"string"===typeof e.textContent&&"function"===typeof e.removeChild&&e.attributes instanceof J&&"function"===typeof e.removeAttribute&&"function"===typeof e.setAttribute&&"string"===typeof e.namespaceURI)},Qe=function(e){return"object"===("undefined"===typeof k?"undefined":W(k))?e instanceof k:e&&"object"===("undefined"===typeof e?"undefined":W(e))&&"number"===typeof e.nodeType&&"string"===typeof e.nodeName},Ze=function(e,t,r){se[e]&&s(se[e],(function(e){e.call(n,t,r,Be)}))},et=function(e){var t=void 0;if(Ze("beforeSanitizeElements",e,null),$e(e))return Ve(e),!0;var r=y(e.nodeName);if(Ze("uponSanitizeElement",e,{tagName:r,allowedTags:ge}),("svg"===r||"math"===r)&&0!==e.querySelectorAll("p, br").length)return Ve(e),!0;if(!ge[r]||Ae[r]){if(Fe&&!Ue[r]&&"function"===typeof e.insertAdjacentHTML)try{var o=e.innerHTML;e.insertAdjacentHTML("AfterEnd",te?te.createHTML(o):o)}catch(i){}return Ve(e),!0}return"noscript"===r&&T(/<\/noscript/i,e.innerHTML)||"noembed"===r&&T(/<\/noembed/i,e.innerHTML)?(Ve(e),!0):(!Le||e.firstElementChild||e.content&&e.content.firstElementChild||!T(/</g,e.textContent)||(f(n.removed,{element:e.cloneNode()}),e.innerHTML?e.innerHTML=g(e.innerHTML,/</g,"&lt;"):e.innerHTML=g(e.textContent,/</g,"&lt;")),Ee&&3===e.nodeType&&(t=e.textContent,t=g(t,ue," "),t=g(t,de," "),e.textContent!==t&&(f(n.removed,{element:e.cloneNode()}),e.textContent=t)),Ze("afterSanitizeElements",e,null),!1)},tt=function(e,t,n){if(Ce&&("id"===t||"name"===t)&&(n in l||n in qe))return!1;if(ke&&T(pe,t));else if(Se&&T(fe,t));else{if(!be[t]||xe[t])return!1;if(Ge[t]);else if(T(he,g(n,ye,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==v(n,"data:")||!je[e])if(_e&&!T(me,g(n,ye,"")));else if(n)return!1}return!0},nt=function(e){var t=void 0,o=void 0,i=void 0,a=void 0,l=void 0;Ze("beforeSanitizeAttributes",e,null);var c=e.attributes;if(c){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:be};for(l=c.length;l--;){var f=t=c[l],h=f.name,v=f.namespaceURI;if(o=b(t.value),i=y(h),s.attrName=i,s.attrValue=o,s.keepAttr=!0,s.forceKeepAttr=void 0,Ze("uponSanitizeAttribute",e,s),o=s.attrValue,!s.forceKeepAttr){if("name"===i&&"IMG"===e.nodeName&&c.id)a=c.id,c=m(c,[]),Ye("id",e),Ye(h,e),u(c,a)>l&&e.setAttribute("id",a.value);else{if("INPUT"===e.nodeName&&"type"===i&&"file"===o&&s.keepAttr&&(be[i]||!xe[i]))continue;"id"===h&&e.setAttribute(h,""),Ye(h,e)}if(s.keepAttr)if(Le&&T(/\/>/i,o))Ye(h,e);else if(T(/svg|math/i,e.namespaceURI)&&T(A("</("+d(r(Ue),"|")+")","i"),o))Ye(h,e);else{Ee&&(o=g(o,ue," "),o=g(o,de," "));var x=e.nodeName.toLowerCase();if(tt(x,i,o))try{v?e.setAttributeNS(v,h,o):e.setAttribute(h,o),p(n.removed)}catch(S){}}}}Ze("afterSanitizeAttributes",e,null)}},rt=function e(t){var n=void 0,r=Xe(t);for(Ze("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Ze("uponSanitizeShadowNode",n,null),et(n)||(n.content instanceof c&&e(n.content),nt(n));Ze("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,r){var o=void 0,a=void 0,l=void 0,s=void 0,u=void 0;if(e||(e="\x3c!--\x3e"),"string"!==typeof e&&!Qe(e)){if("function"!==typeof e.toString)throw x("toString is not a function");if("string"!==typeof(e=e.toString()))throw x("dirty is not a string, aborting")}if(!n.isSupported){if("object"===W(t.toStaticHTML)||"function"===typeof t.toStaticHTML){if("string"===typeof e)return t.toStaticHTML(e);if(Qe(e))return t.toStaticHTML(e.outerHTML)}return e}if(De||Ke(r),n.removed=[],"string"===typeof e&&(ze=!1),ze);else if(e instanceof k)1===(a=(o=Je("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?o=a:o.appendChild(a);else{if(!Re&&!Ee&&!Me&&-1===e.indexOf("<"))return te&&He?te.createHTML(e):e;if(!(o=Je(e)))return Re?null:ne}o&&we&&Ve(o.firstChild);for(var d=Xe(ze?e:o);l=d.nextNode();)3===l.nodeType&&l===s||et(l)||(l.content instanceof c&&rt(l.content),nt(l),s=l);if(s=null,ze)return e;if(Re){if(Ne)for(u=le.call(o.ownerDocument);o.firstChild;)u.appendChild(o.firstChild);else u=o;return Oe&&(u=ce.call(i,u,!0)),u}var p=Me?o.outerHTML:o.innerHTML;return Ee&&(p=g(p,ue," "),p=g(p,de," ")),te&&He?te.createHTML(p):p},n.setConfig=function(e){Ke(e),De=!0},n.clearConfig=function(){Be=null,De=!1},n.isValidAttribute=function(e,t,n){Be||Ke({});var r=y(e),o=y(t);return tt(r,o,n)},n.addHook=function(e,t){"function"===typeof t&&(se[e]=se[e]||[],f(se[e],t))},n.removeHook=function(e){se[e]&&p(se[e])},n.removeHooks=function(e){se[e]&&(se[e]=[])},n.removeAllHooks=function(){se={}},n}()}()}}]);
//# sourceMappingURL=4.c1378ab6.chunk.js.map