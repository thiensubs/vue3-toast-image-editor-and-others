(function(e){function t(t){for(var r,c,o=t[0],i=t[1],l=t[2],s=0,d=[];s<o.length;s++)c=o[s],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},a={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0424be55":"e421f716","chunk-043cf2e6":"3310ef19","chunk-120cd3dd":"9a52cc9d","chunk-35313794":"2f9cf933","chunk-55f5d975":"108514a1","chunk-825b5a32":"3678d217"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0424be55":1,"chunk-043cf2e6":1,"chunk-120cd3dd":1,"chunk-35313794":1,"chunk-55f5d975":1,"chunk-825b5a32":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0424be55":"54b4b0b8","chunk-043cf2e6":"7b7ac5d8","chunk-120cd3dd":"d2c30611","chunk-35313794":"63133ac4","chunk-55f5d975":"86e38264","chunk-825b5a32":"04ddaca0"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var l=u[o],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete c[e],f.parentNode.removeChild(f),n(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=o(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue3-toast-image-editor-and-others/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},1722:function(e,t,n){"use strict";n("1e2c")},"1e2c":function(e,t,n){},2:function(e,t){},"4ae5":function(e,t,n){"use strict";(function(e){var r=n("53e3"),c=(n("6e7a"),n("2809"),n("106c"));t["a"]={props:["page","scale"],inheritAttrs:!1,setup:function(t){var n=Object(c["y"])(null),a=Object(c["y"])(null),u=t.page.getViewport({scale:t.scale}),o=Object(c["b"])((function(){return u.clone({scale:t.scale})})),i=Object(c["b"])((function(){var e=o.width,t=o.height,n=window.devicePixelRatio||1;console.log(window.devicePixelRatio);var c=[e,t].map((function(e){return Math.ceil(e/n)})),a=Object(r["a"])(c,2),u=a[0],i=a[1];return"width: ".concat(u,"px; height: ").concat(i,"px;")})),l=Object(c["b"])((function(){var e=u.clone({scale:t.scale}),n=e.width,c=e.height,a=[n,c].map((function(e){return Math.ceil(e)})),o=Object(r["a"])(a,2);n=o[0],c=o[1];var l=i;return{width:816,height:1056,style:l,class:"pdf-page box-shadow"}})),s=Object(c["b"])((function(){return t.page.pageNumber}));function d(){t.page.getTextContent({normalizeWhitespace:!0}).then((function(n){a.value.setAttribute("class","textLayer");var r=e.pdfjsLib.renderTextLayer({textContent:n,container:a.value,viewport:u.clone({scale:t.scale})});r._render(),t.page.render(f())}))}function f(){var e=n.value.getContext("2d");return{canvasContext:e,viewport:u}}function p(e){e&&e._destroy()}return Object(c["G"])(s,(function(e,t){p(t)})),Object(c["r"])((function(){d()})),Object(c["p"])((function(){p(t.page)})),{viewport:u,actualSizeViewport:o,canvasStyle:i,canvasAttrs:l,renderPage:d,getRenderContext:f,destroyPage:p,myCanvas:n,textLayer:a}}}}).call(this,n("14b3"))},"56d7":function(e,t,n){"use strict";n.r(t);n("6599"),n("ca2f"),n("0670"),n("2050");var r=n("106c"),c={class:"pure-menu pure-menu-horizontal"},a=Object(r["g"])("DEMO SOME MINI APPLICATION"),u={class:"pure-menu-list"},o={class:"pure-menu-item"},i=Object(r["g"])("Form with focus"),l={class:"pure-menu-item"},s=Object(r["g"])("Pdf Document"),d={class:"pure-menu-item"},f=Object(r["g"])("Image Editor"),p={class:"pure-menu-item"},h=Object(r["g"])("Search Engine"),b={class:"pure-menu-item"},m=Object(r["g"])("Trix Editor"),v=Object(r["h"])("footer",null,"FOOTER GOES HERE",-1);function g(e,t,n,g,O,j){var w=Object(r["A"])("router-link"),y=Object(r["A"])("router-view");return Object(r["t"])(),Object(r["d"])(r["a"],null,[Object(r["h"])("div",c,[Object(r["h"])(w,{class:"pure-menu-heading pure-menu-link",to:"/"},{default:Object(r["H"])((function(){return[a]})),_:1}),Object(r["h"])("ul",u,[Object(r["h"])("li",o,[Object(r["h"])(w,{class:"pure-menu-link",to:"/hello"},{default:Object(r["H"])((function(){return[i]})),_:1})]),Object(r["h"])("li",l,[Object(r["h"])(w,{class:"pure-menu-link",to:"/pdf-document"},{default:Object(r["H"])((function(){return[s]})),_:1})]),Object(r["h"])("li",d,[Object(r["h"])(w,{class:"pure-menu-link",to:"/image-editor"},{default:Object(r["H"])((function(){return[f]})),_:1})]),Object(r["h"])("li",p,[Object(r["h"])(w,{class:"pure-menu-link",to:"/search-engine"},{default:Object(r["H"])((function(){return[h]})),_:1})]),Object(r["h"])("li",b,[Object(r["h"])(w,{class:"pure-menu-link",to:"/trix"},{default:Object(r["H"])((function(){return[m]})),_:1})])])]),Object(r["h"])("main",null,[Object(r["h"])(y)]),v],64)}var O=n("8aa9");n("e2ed");O["a"].render=g;var j=O["a"],w=(n("feb1"),n("eaae"),n("7875")),y=(n("470c"),n("d1b6"),n("26e5"),n("24e2")),k=function(){return n.e("chunk-55f5d975").then(n.bind(null,"fdab"))},x=function(){return n.e("chunk-35313794").then(n.bind(null,"0463"))},E=function(){return n.e("chunk-825b5a32").then(n.bind(null,"ed24"))},P=function(){return n.e("chunk-0424be55").then(n.bind(null,"c7d3"))},_=function(){return n.e("chunk-043cf2e6").then(n.bind(null,"044c"))},A=function(){return n.e("chunk-120cd3dd").then(n.bind(null,"efe3"))},C=Object(y["a"])({history:Object(y["b"])(),routes:[{path:"/",component:k},{path:"/hello",name:"hello",component:k,meta:{title:"Form with Focus"}},{path:"/pdf-document",name:"pdf",component:E,props:!0,meta:{title:"PDF Reader"}},{path:"/image-editor",name:"editor",component:P,props:!0,meta:{title:"Image Editor"}},{path:"/search-engine",name:"search_engine",component:_,meta:{title:"Lunr Search with Movies DB "}},{path:"/print",name:"print",component:x},{path:"/trix",name:"trix",component:A,meta:{title:"Trix Editor Demo"}}]}),L="Vue3 Multi-Mini Applications";C.afterEach((function(e){Object(r["n"])((function(){document.title=e.meta.title||L}))}));var S=C,T=Object(r["c"])(j);T.config.isCustomElement=function(e){return"pdf-page"===e},T.use(S),T.component("pdf-page",w["a"]),T.mount("#app")},7875:function(e,t,n){"use strict";var r=n("106c"),c={class:"canvasWrapper"},a={ref:"textLayer"};function u(e,t,n,u,o,i){return Object(r["t"])(),Object(r["d"])("div",{class:"page","data-page-number":n.page.pageNumber},[Object(r["h"])("div",c,[Object(r["h"])("canvas",Object(r["m"])({ref:"myCanvas"},u.canvasAttrs),null,16)]),Object(r["h"])("div",a,null,512)],8,["data-page-number"])}var o=n("4ae5");n("1722");o["a"].render=u;t["a"]=o["a"]},"7f46":function(e,t,n){},"8aa9":function(e,t,n){"use strict";(function(e){var r=n("106c"),c=n("a611");e.Pace=c,t["a"]={name:"App",components:{},setup:function(){function e(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}return c.start(),window.addEventListener("resize",e),window.addEventListener("load",e),Object(r["r"])((function(){})),Object(r["s"])((function(){window.addEventListener("resize"),window.addEventListener("load")})),{Pace:c,setVh:e}}}}).call(this,n("14b3"))},e2ed:function(e,t,n){"use strict";n("7f46")}});
//# sourceMappingURL=app.30fea91e.js.map