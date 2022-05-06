(function(n,t){function si(n){return n.call.apply(n.bind,arguments)}function hi(n,t){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),n.apply(t,r)}}return function(){return n.apply(t,arguments)}}function s(){return s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?si:hi,s.apply(null,arguments)}function lt(n,t){this.K=n;this.w=t||n;this.G=this.w.document}function at(n,i,r){n=n.G.getElementsByTagName(i)[0];n||(n=t.documentElement);n&&n.lastChild&&n.insertBefore(r,n.lastChild)}function ci(n,t){function i(){n.G.body?t():setTimeout(i,0)}i()}function l(n,t,i){var f,r,e,u;for(t=t||[],i=i||[],f=n.className.split(/\s+/),r=0;r<t.length;r+=1){for(e=!1,u=0;u<f.length;u+=1)if(t[r]===f[u]){e=!0;break}e||f.push(t[r])}for(t=[],r=0;r<f.length;r+=1){for(e=!1,u=0;u<i.length;u+=1)if(f[r]===i[u]){e=!0;break}e||t.push(f[r])}n.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function vt(n,t){for(var r=n.className.split(/\s+/),i=0,u=r.length;i<u;i++)if(r[i]==t)return!0;return!1}function w(n){if("string"==typeof n.na)return n.na;var t=n.w.location.protocol;return"about:"==t&&(t=n.K.location.protocol),"https:"==t?"https:":"http:"}function yt(n,t){var r=n.createElement("link",{rel:"stylesheet",href:t,media:"all"}),i=!1;r.onload=function(){i||(i=!0)};r.onerror=function(){i||(i=!0)};at(n,"head",r)}function it(t,i,r,u){var o=t.G.getElementsByTagName("head")[0],f,e;return o?(f=t.createElement("script",{src:i}),e=!1,f.onload=f.onreadystatechange=function(){e||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(e=!0,r&&r(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&o.removeChild(f))},o.appendChild(f),n.setTimeout(function(){e||(e=!0,r&&r(Error("Script load timeout")))},u||5e3),f):null}function h(n,t){this.Y=n;this.ga=t}function v(n,t,i,r){this.c=null!=n?n:null;this.g=null!=t?t:null;this.D=null!=i?i:null;this.e=null!=r?r:null}function r(n){n=pt.exec(n);var t=null,i=null,r=null,u=null;return n&&(null!==n[1]&&n[1]&&(t=parseInt(n[1],10)),null!==n[2]&&n[2]&&(i=parseInt(n[2],10)),null!==n[3]&&n[3]&&(r=parseInt(n[3],10)),null!==n[4]&&n[4]&&(u=/^[0-9]+$/.test(n[4])?parseInt(n[4],10):n[4])),new v(t,i,r,u)}function e(n,t,i,r,u,f,e,o){this.N=n;this.k=o}function rt(n){this.a=n}function c(n){var t=i(n.a,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);return""!=t?(/BB\d{2}/.test(t)&&(t="BlackBerry"),t):(n=i(n.a,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1),""!=n?("Mac_PowerPC"==n?n="Macintosh":"PlayStation"==n&&(n="Linux"),n):"Unknown")}function b(n){var t=i(n.a,/(OS X|Windows NT|Android) ([^;)]+)/,2),r;if(t||(t=i(n.a,/Windows Phone( OS)? ([^;)]+)/,2))||(t=i(n.a,/(iPhone )?OS ([\d_]+)/,2)))return t;if(t=i(n.a,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1))for(t=t.split(/\s/),r=0;r<t.length;r+=1)if(/^[\d\._]+$/.test(t[r]))return t[r];return(n=i(n.a,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?n:"Unknown"}function bt(n){var o=c(n),s=r(b(n)),f=r(i(n.a,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1)),t="Unknown",u=new v,u="Unknown",l=!1;return/OPR\/[\d.]+/.test(n.a)?t="Opera":-1!=n.a.indexOf("Chrome")||-1!=n.a.indexOf("CrMo")||-1!=n.a.indexOf("CriOS")?t="Chrome":/Silk\/\d/.test(n.a)?t="Silk":"BlackBerry"==o||"Android"==o?t="BuiltinBrowser":-1!=n.a.indexOf("PhantomJS")?t="PhantomJS":-1!=n.a.indexOf("Safari")?t="Safari":-1!=n.a.indexOf("AdobeAIR")?t="AdobeAIR":-1!=n.a.indexOf("PlayStation")&&(t="BuiltinBrowser"),"BuiltinBrowser"==t?u="Unknown":"Silk"==t?u=i(n.a,/Silk\/([\d\._]+)/,1):"Chrome"==t?u=i(n.a,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=n.a.indexOf("Version/")?u=i(n.a,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==t?u=i(n.a,/AdobeAIR\/([\d\.]+)/,1):"Opera"==t?u=i(n.a,/OPR\/([\d.]+)/,1):"PhantomJS"==t&&(u=i(n.a,/PhantomJS\/([\d.]+)/,1)),u=r(u),l="AdobeAIR"==t?2<u.c||2==u.c&&5<=u.g:"BlackBerry"==o?10<=s.c:"Android"==o?2<s.c||2==s.c&&1<s.g:526<=f.c||525<=f.c&&13<=f.g,new e(t,0,0,0,0,0,0,new h(l,536>f.c||536==f.c&&11>f.g))}function i(n,t,i){return(n=n.match(t))&&n[i]?n[i]:""}function kt(n){this.ma=n||"-"}function f(n,t){this.N=n;this.Z=4;this.O="n";var i=(t||"n4").match(/^([nio])([1-9])$/i);i&&(this.O=i[1],this.Z=parseInt(i[2],10))}function u(n){return n.O+n.Z}function li(n){var i=4,r="n",t=null;return n&&((t=n.match(/(normal|oblique|italic)/i))&&t[1]&&(r=t[1].substr(0,1).toLowerCase()),(t=n.match(/([1-9]00|normal|bold)/i))&&t[1]&&(/bold/i.test(t[1])?i=7:/[1-9]00/.test(t[1])&&(i=parseInt(t[1].substr(0,1),10)))),r+i}function ai(n,t){this.d=n;this.q=n.w.document.documentElement;this.Q=t;this.j="wf";this.h=new kt("-");this.ha=!1!==t.events;this.F=!1!==t.classes}function ut(n){if(n.F){var i=vt(n.q,n.h.e(n.j,"active")),t=[],r=[n.h.e(n.j,"loading")];i||t.push(n.h.e(n.j,"inactive"));l(n.q,t,r)}a(n,"inactive")}function a(n,t,i){n.ha&&n.Q[t]&&(i?n.Q[t](i.getName(),u(i)):n.Q[t]())}function vi(){this.C={}}function k(n,t){this.d=n;this.I=t;this.o=this.d.createElement("span",{"aria-hidden":"true"},this.I)}function y(n,t){var e=n.o,r,i,u,f;for(r=[],i=t.N.split(/,\s*/),u=0;u<i.length;u++)f=i[u].replace(/['"]/g,""),-1==f.indexOf(" ")?r.push(f):r.push("'"+f+"'");r=r.join(",");i="normal";"o"===t.O?i="oblique":"i"===t.O&&(i="italic");e.style.cssText="display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+r+";"+("font-style:"+i+";font-weight:"+(t.Z+"00")+";")}function ft(n){at(n.d,"body",n.o)}function dt(n,t,i,r,e,o,s,h){this.$=n;this.ka=t;this.d=i;this.m=r;this.k=e;this.I=h||"BESbswy";this.v={};this.X=o||3e3;this.ca=s||null;this.H=this.u=this.t=null;this.t=new k(this.d,this.I);this.u=new k(this.d,this.I);this.H=new k(this.d,this.I);y(this.t,new f("serif",u(this.m)));y(this.u,new f("sans-serif",u(this.m)));y(this.H,new f("monospace",u(this.m)));ft(this.t);ft(this.u);ft(this.H);this.v.serif=this.t.o.offsetWidth;this.v["sans-serif"]=this.u.o.offsetWidth;this.v.monospace=this.H.o.offsetWidth}function gt(n,t,i){for(var r in p)if(p.hasOwnProperty(r)&&t===n.v[p[r]]&&i===n.v[p[r]])return!0;return!1}function ni(n){var t=n.t.o.offsetWidth,i=n.u.o.offsetWidth;t===n.v.serif&&i===n.v["sans-serif"]||n.k.ga&&gt(n,t,i)?ct()-n.oa>=n.X?n.k.ga&&gt(n,t,i)&&(null===n.ca||n.ca.hasOwnProperty(n.m.getName()))?et(n,n.$):et(n,n.ka):yi(n):et(n,n.$)}function yi(n){setTimeout(s(function(){ni(this)},n),50)}function et(n,t){n.t.remove();n.u.remove();n.H.remove();t(n.m)}function ot(n,t,i,r){this.d=t;this.A=i;this.S=0;this.ea=this.ba=!1;this.X=r;this.k=n.k}function ti(n,t,i,r,f){if(i=i||{},0===t.length&&f)ut(n.A);else for(n.S+=t.length,f&&(n.ba=f),f=0;f<t.length;f++){var o=t[f],c=i[o.getName()],e=n.A,h=o;e.F&&l(e.q,[e.h.e(e.j,h.getName(),u(h).toString(),"loading")]);a(e,"fontloading",h);e=null;e=new dt(s(n.ia,n),s(n.ja,n),n.d,o,n.k,n.X,r,c);e.start()}}function ii(n){0==--n.S&&n.ba&&(n.ea?(n=n.A,n.F&&l(n.q,[n.h.e(n.j,"active")],[n.h.e(n.j,"loading"),n.h.e(n.j,"inactive")]),a(n,"active")):ut(n.A))}function st(n){this.K=n;this.B=new vi;this.pa=new rt(n.navigator.userAgent);this.a=this.pa.parse();this.U=this.V=0;this.R=this.T=!0}function pi(n,t,i,r,u){var f=0==--n.V;(n.R||n.T)&&setTimeout(function(){ti(t,i,r||null,u||null,f)},0)}function ri(n,t,i){this.P=n?n:t+ui;this.s=[];this.W=[];this.fa=i||""}function fi(n){this.s=n;this.da=[];this.M={}}function d(n,t){this.a=new rt(navigator.userAgent).parse();this.d=n;this.f=t}function g(n,t){this.d=n;this.f=t;this.p=[]}function nt(n,t){this.d=n;this.f=t;this.p=[]}function tt(n,t){this.d=n;this.f=t;this.p=[]}function ht(n,t){this.d=n;this.f=t}var ct=Date.now||function(){return+new Date},pt,wt,p,ui,oi,o;lt.prototype.createElement=function(n,t,i){if(n=this.G.createElement(n),t)for(var r in t)t.hasOwnProperty(r)&&("style"==r?n.style.cssText=t[r]:n.setAttribute(r,t[r]));return i&&n.appendChild(this.G.createTextNode(i)),n};pt=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;v.prototype.compare=function(n){return this.c>n.c||this.c===n.c&&this.g>n.g||this.c===n.c&&this.g===n.g&&this.D>n.D?1:this.c<n.c||this.c===n.c&&this.g<n.g||this.c===n.c&&this.g===n.g&&this.D<n.D?-1:0};v.prototype.toString=function(){return[this.c,this.g||"",this.D||"",this.e||""].join("")};e.prototype.getName=function(){return this.N};wt=new e("Unknown",0,0,0,0,0,0,new h(!1,!1));rt.prototype.parse=function(){var n;if(-1!=this.a.indexOf("MSIE")||-1!=this.a.indexOf("Trident/")){n=c(this);var t=r(b(this)),u=null,f=i(this.a,/Trident\/([\d\w\.]+)/,1),u=-1!=this.a.indexOf("MSIE")?r(i(this.a,/MSIE ([\d\w\.]+)/,1)):r(i(this.a,/rv:([\d\w\.]+)/,1));""!=f&&r(f);n=new e("MSIE",0,0,0,0,0,0,new h("Windows"==n&&6<=u.c||"Windows Phone"==n&&8<=t.c,!1))}else if(-1!=this.a.indexOf("Opera"))n:if(n=r(i(this.a,/Presto\/([\d\w\.]+)/,1)),r(b(this)),null!==n.c||r(i(this.a,/rv:([^\)]+)/,1)),-1!=this.a.indexOf("Opera Mini/"))n=r(i(this.a,/Opera Mini\/([\d\.]+)/,1)),n=new e("OperaMini",0,0,0,c(this),0,0,new h(!1,!1));else{if(-1!=this.a.indexOf("Version/")&&(n=r(i(this.a,/Version\/([\d\.]+)/,1)),null!==n.c)){n=new e("Opera",0,0,0,c(this),0,0,new h(10<=n.c,!1));break n}n=r(i(this.a,/Opera[\/ ]([\d\.]+)/,1));n=null!==n.c?new e("Opera",0,0,0,c(this),0,0,new h(10<=n.c,!1)):new e("Opera",0,0,0,c(this),0,0,new h(!1,!1))}else/OPR\/[\d.]+/.test(this.a)?n=bt(this):/AppleWeb(K|k)it/.test(this.a)?n=bt(this):-1!=this.a.indexOf("Gecko")?(n="Unknown",t=new v,r(b(this)),t=!1,-1!=this.a.indexOf("Firefox")?(n="Firefox",t=r(i(this.a,/Firefox\/([\d\w\.]+)/,1)),t=3<=t.c&&5<=t.g):-1!=this.a.indexOf("Mozilla")&&(n="Mozilla"),u=r(i(this.a,/rv:([^\)]+)/,1)),t||(t=1<u.c||1==u.c&&9<u.g||1==u.c&&9==u.g&&2<=u.D),n=new e(n,0,0,0,c(this),0,0,new h(t,!1))):n=wt;return n};kt.prototype.e=function(){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.ma)};f.prototype.getName=function(){return this.N};k.prototype.remove=function(){var n=this.o;n.parentNode&&n.parentNode.removeChild(n)};p={sa:"serif",ra:"sans-serif",qa:"monospace"};dt.prototype.start=function(){this.oa=ct();y(this.t,new f(this.m.getName()+",serif",u(this.m)));y(this.u,new f(this.m.getName()+",sans-serif",u(this.m)));ni(this)};ot.prototype.ia=function(n){var t=this.A;t.F&&l(t.q,[t.h.e(t.j,n.getName(),u(n).toString(),"active")],[t.h.e(t.j,n.getName(),u(n).toString(),"loading"),t.h.e(t.j,n.getName(),u(n).toString(),"inactive")]);a(t,"fontactive",n);this.ea=!0;ii(this)};ot.prototype.ja=function(n){var t=this.A;if(t.F){var r=vt(t.q,t.h.e(t.j,n.getName(),u(n).toString(),"active")),i=[],f=[t.h.e(t.j,n.getName(),u(n).toString(),"loading")];r||i.push(t.h.e(t.j,n.getName(),u(n).toString(),"inactive"));l(t.q,i,f)}a(t,"fontinactive",n);ii(this)};st.prototype.load=function(n){var e;this.d=new lt(this.K,n.context||this.K);this.T=!1!==n.events;this.R=!1!==n.classes;var t=new ai(this.d,n),i=[],r=n.timeout;t.F&&l(t.q,[t.h.e(t.j,"loading")]);a(t,"loading");var i=this.B,f=this.d,o=[];for(var u in n)n.hasOwnProperty(u)&&(e=i.C[u],e&&o.push(e(n[u],f)));for(i=o,this.U=this.V=i.length,n=new ot(this.a,this.d,t,r),r=0,u=i.length;r<u;r++)f=i[r],f.L(this.a,s(this.la,this,f,t,n))};st.prototype.la=function(n,t,i,r){var u=this;r?n.load(function(n,t,r){pi(u,i,n,t,r)}):(n=0==--this.V,this.U--,n&&0==this.U?ut(t):(this.R||this.T)&&ti(i,[],{},null,n))};ui="//fonts.googleapis.com/css";ri.prototype.e=function(){if(0==this.s.length)throw Error("No fonts to load!");if(-1!=this.P.indexOf("kit="))return this.P;for(var n=this.s.length,i=[],t=0;t<n;t++)i.push(this.s[t].replace(/ /g,"+"));return n=this.P+"?family="+i.join("%7C"),0<this.W.length&&(n+="&subset="+this.W.join(",")),0<this.fa.length&&(n+="&text="+encodeURIComponent(this.fa)),n};var ei={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},wi={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},bi={i:"i",italic:"i",n:"n",normal:"n"},ki=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;fi.prototype.parse=function(){for(var r,e,t,c,i,l=this.s.length,o=0;o<l;o++){var n=this.s[o].split(":"),u=n[0].replace(/\+/g," "),s=["n4"];if(2<=n.length){if(e=n[1],r=[],e)for(var e=e.split(","),a=e.length,h=0;h<a;h++)t=e[h],t.match(/^[\w-]+$/)?(t=ki.exec(t.toLowerCase()),i=void 0,null==t?i="":(i=void 0,i=t[1],null==i||""==i?i="4":(c=wi[i],i=c?c:isNaN(i)?"4":i.substr(0,1)),t=t[2],i=[null==t||""==t?"n":bi[t],i].join("")),t=i):t="",t&&r.push(t);0<r.length&&(s=r);3==n.length&&(n=n[2],r=[],n=n?n.split(","):r,0<n.length&&(n=ei[n[0]])&&(this.M[u]=n))}for(this.M[u]||(n=ei[u])&&(this.M[u]=n),n=0;n<s.length;n+=1)this.da.push(new f(u,s[n]))}};oi={Arimo:!0,Cousine:!0,Tinos:!0};d.prototype.L=function(n,t){t(n.k.Y)};d.prototype.load=function(n){var t=this.d;"MSIE"==this.a.getName()&&1!=this.f.blocking?ci(t,s(this.aa,this,n)):this.aa(n)};d.prototype.aa=function(n){for(var i,f,e=this.d,r=new ri(this.f.api,w(e),this.f.text),t=this.f.families,o=t.length,u=0;u<o;u++)i=t[u].split(":"),3==i.length&&r.W.push(i.pop()),f="",2==i.length&&""!=i[1]&&(f=":"),r.s.push(i.join(f));t=new fi(t);t.parse();yt(e,r.e());n(t.da,t.M,oi)};g.prototype.J=function(n){var t=this.d;return w(this.d)+(this.f.api||"//f.fontdeck.com/s/css/js/")+(t.w.location.hostname||t.K.location.hostname)+"/"+n+".js"};g.prototype.L=function(n,t){var i=this.f.id,r=this.d.w,u=this;i?(r.__webfontfontdeckmodule__||(r.__webfontfontdeckmodule__={}),r.__webfontfontdeckmodule__[i]=function(n,i){for(var e,r=0,o=i.fonts.length;r<o;++r)e=i.fonts[r],u.p.push(new f(e.name,li("font-weight:"+e.weight+";font-style:"+e.style)));t(n)},it(this.d,this.J(i),function(n){n&&t(!1)})):t(!1)};g.prototype.load=function(n){n(this.p)};nt.prototype.J=function(n){var t=w(this.d);return(this.f.api||t+"//use.typekit.net")+"/"+n+".js"};nt.prototype.L=function(n,t){var r=this.f.id,i=this.d.w,u=this;r?it(this.d,this.J(r),function(n){var r;if(n)t(!1);else{if(i.Typekit&&i.Typekit.config&&i.Typekit.config.fn){for(n=i.Typekit.config.fn,r=0;r<n.length;r+=2)for(var s=n[r],o=n[r+1],e=0;e<o.length;e++)u.p.push(new f(s,o[e]));try{i.Typekit.load({events:!1,classes:!1})}catch(h){}}t(!0)}},2e3):t(!1)};nt.prototype.load=function(n){n(this.p)};tt.prototype.L=function(n,t){var i=this,r=i.f.projectId,e=i.f.version,u;r?(u=i.d.w,it(this.d,i.J(r,e),function(e){if(e)t(!1);else{if(u["__mti_fntLst"+r]&&(e=u["__mti_fntLst"+r]()))for(var o=0;o<e.length;o++)i.p.push(new f(e[o].fontfamily));t(n.k.Y)}}).id="__MonotypeAPIScript__"+r):t(!1)};tt.prototype.J=function(n,t){var i=w(this.d),r=(this.f.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return i+"//"+r+"/"+n+".js"+(t?"?v="+t:"")};tt.prototype.load=function(n){n(this.p)};ht.prototype.load=function(n){for(var i=this.f.urls||[],s=this.f.families||[],h=this.f.testStrings||{},r,o,e,t=0,u=i.length;t<u;t++)yt(this.d,i[t]);for(i=[],t=0,u=s.length;t<u;t++)if(r=s[t].split(":"),r[1])for(o=r[1].split(","),e=0;e<o.length;e+=1)i.push(new f(r[0],o[e]));else i.push(new f(r[0]));n(i,h)};ht.prototype.L=function(n,t){return t(n.k.Y)};o=new st(this);o.B.C.custom=function(n,t){return new ht(t,n)};o.B.C.fontdeck=function(n,t){return new g(t,n)};o.B.C.monotype=function(n,t){return new tt(t,n)};o.B.C.typekit=function(n,t){return new nt(t,n)};o.B.C.google=function(n,t){return new d(t,n)};this.WebFont||(this.WebFont={},this.WebFont.load=s(o.load,o),this.WebFontConfig&&o.load(this.WebFontConfig))})(this,document)