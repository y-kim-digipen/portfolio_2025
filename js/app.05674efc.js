(function(t){function e(e){for(var r,o,c=e[0],i=e[1],s=e[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a={app:0},u=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"831acba8"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"0287485e"}[t]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[t],p.parentNode.removeChild(p),n(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/portfolio_2025/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"2df3":function(t,e,n){"use strict";n("4b80")},"4b80":function(t,e,n){},5906:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{attrs:{id:"app"}},[e("link",{attrs:{rel:"stylesheet",href:"@/assets/projects/projects.css",type:"text/css"}}),e("Header"),e("div",{staticClass:"main"},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1),e("Footer")],1)},a=[],u=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"header"},[e("div",{staticClass:"nav-bar"},[e("router-link",{attrs:{to:"/"}},[t._v("About me")]),e("router-link",{attrs:{to:"/projects"}},[t._v("Projects")]),e("router-link",{attrs:{to:"/academic-projects"}},[t._v("Academic Projects")]),e("router-link",{attrs:{to:"/resume"}},[t._v("Resume")]),e("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])},c=[],i=r["a"].extend({name:"Header"}),s=i,l=(n("d446"),n("2877")),f=Object(l["a"])(s,u,c,!1,null,"5c5877d8",null),p=f.exports,d=function(){var t=this;t._self._c,t._self._setupProxy;return t._m(0)},m=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"footer"},[e("div",{staticClass:"left"},[e("a",{attrs:{href:"https://github.com/schouffy/gamedev-portfolio",target:"blank"}},[t._v("Portfolio template")]),t._v(" by schouffy")]),e("div",{staticClass:"right"},[t._v("Reach me at "),e("a",{attrs:{href:"mailto:kuk7803@gmail.com"}},[t._v("kuk7803@gmail.com")])])])}],h=r["a"].extend({name:"Footer"}),v=h,b=(n("fd91"),Object(l["a"])(v,d,m,!1,null,"743128c5",null)),g=b.exports,y=function(){function t(){}return t.preloadImages=function(e){e.forEach((function(e){t.preloadImage(e)}))},t.preloadImage=function(t){var e=new Image;e.src=t},t}(),_=y,j=r["a"].extend({name:"App",components:{Header:p,Footer:g}});_.preloadImages([]);var k=j,w=(n("2df3"),Object(l["a"])(k,o,a,!1,null,null,null)),P=w.exports,x=n("8c4f");r["a"].use(x["a"]);var C=[{path:"/",name:"Root",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/resume",name:"Resume",component:function(){return n.e("about").then(n.bind(null,"1ba2"))}},{path:"/projects",name:"Projects",component:function(){return n.e("about").then(n.bind(null,"acca"))}},{path:"/academic-projects",name:"Academic Projects",component:function(){return n.e("about").then(n.bind(null,"617f"))}},{path:"/contact",name:"Contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}},{path:"/404",name:"NotFound",component:function(){return n.e("about").then(n.bind(null,"8cdb"))}},{path:"*",redirect:"/404"}],O=new x["a"]({routes:C}),A=O;r["a"].config.productionTip=!1,new r["a"]({router:A,render:function(t){return t(P)}}).$mount("#app")},d446:function(t,e,n){"use strict";n("5906")},ec2d:function(t,e,n){},fd91:function(t,e,n){"use strict";n("ec2d")}});
//# sourceMappingURL=app.05674efc.js.map