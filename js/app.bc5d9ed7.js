(function(e){function t(t){for(var n,i,l=t[0],c=t[1],u=t[2],d=0,b=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&b.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(t);while(b.length)b.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,l=1;l<r.length;l++){var c=r[l];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/cssColorNames/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},6861:function(e,t,r){},cab5:function(e,t,r){"use strict";r("6861")},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o=(r("b0c0"),{class:"app"}),a=Object(n["f"])("h1",null,"CSS Color Name Finder",-1),i=Object(n["e"])("Pick a color: "),l={key:1};function c(e,t,r,c,u,s){var d=Object(n["j"])("IntroCard"),b=Object(n["j"])("SimilarColorCard");return Object(n["h"])(),Object(n["c"])("div",o,[a,0===e.similarColors.length?(Object(n["h"])(),Object(n["c"])(d,{key:0})):Object(n["d"])("",!0),Object(n["f"])("label",null,[i,Object(n["m"])(Object(n["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.name=t}),type:"color"},null,512),[[n["l"],e.name]])]),e.similarColors.length>0?(Object(n["h"])(),Object(n["c"])("div",l,[Object(n["f"])("h2",null,"Colors close to "+Object(n["k"])(e.name)+":",1),(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(e.similarColors,(function(e){return Object(n["h"])(),Object(n["c"])(b,{key:e[0],"color-name":e[0],distance:e[1]},null,8,["color-name","distance"])})),128))])):Object(n["d"])("",!0)])}r("ac1f");var u={class:"introCard"},s=Object(n["f"])("p",null,"There are over a hundred named colors in CSS, but they are rarely used.",-1),d=Object(n["f"])("p",null," This app helps you to use them more by showing names of colors that are similar to your favorite color. 🎨 ",-1);function b(e,t,r,o,a,i){return Object(n["h"])(),Object(n["c"])("section",u,[s,d])}var h=Object(n["g"])({name:"IntroCard"});h.render=b;var f=h,g={class:"similarColorCard"},p={class:"similarColorCard__header"};function m(e,t,r,o,a,i){return Object(n["h"])(),Object(n["c"])("div",g,[Object(n["f"])("div",p,[Object(n["f"])("h3",null,Object(n["k"])(e.colorName),1),Object(n["f"])("p",null,"Distance: "+Object(n["k"])(e.roundedDistance),1)]),Object(n["f"])("div",{class:"similarColorCard__colorArea",style:"background-color: "+e.colorName},null,4)])}r("a9e3");var y=Object(n["g"])({props:{colorName:{type:String,required:!0},distance:{type:Number,required:!0}},computed:{roundedDistance:function(){return Math.round(this.distance)}}});r("cab5");y.render=m;var j=y,O=r("d4ec"),v=r("bee2"),k=function(){function e(t,r,n){Object(O["a"])(this,e),this.red=t,this.blue=n,this.green=r}return Object(v["a"])(e,[{key:"getRed",value:function(){return this.red}},{key:"getGreen",value:function(){return this.green}},{key:"getBlue",value:function(){return this.blue}}]),e}(),w=(r("d81d"),r("b64b"),r("3835")),C=function(){function e(t,r,n,o){Object(O["a"])(this,e),this.red=t,this.green=r,this.blue=n,this.colorName=o}return Object(v["a"])(e,[{key:"calculateDistanceRGB",value:function(e,t,r){this.distance=Math.sqrt(Math.pow(this.red-e,2)+Math.pow(this.green-t,2)+Math.pow(this.blue-r,2))}},{key:"hasDistance",value:function(){return"number"===typeof this.distance}},{key:"getDistance",value:function(){if("number"!==typeof this.distance)throw new Error("Distance has not been calculated yet!");return this.distance}},{key:"getName",value:function(){return this.colorName}}]),e}(),D=function(){function e(t){Object(O["a"])(this,e),this.colors=t}return Object(v["a"])(e,[{key:"sortByRGB",value:function(e,t,r){this.colors.sort((function(n,o){return n.hasDistance()||n.calculateDistanceRGB(e,t,r),o.hasDistance()||o.calculateDistanceRGB(e,t,r),n.getDistance()-o.getDistance()}))}},{key:"getColorNamesDistance",value:function(){return this.colors.map((function(e){return[e.getName(),e.getDistance()]}))}}]),e}(),N=function(){function e(){Object(O["a"])(this,e)}return Object(v["a"])(e,[{key:"getColorList",value:function(){var e={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};return new D(Object.keys(e).map((function(t){var r=e[t];if(!r)throw new Error("unknown color name: ".concat(t,"!"));var n=Object(w["a"])(r,3),o=n[0],a=n[1],i=n[2];return new C(o,a,i,t)})))}}]),e}(),S=(r("fb6a"),function(){function e(t){Object(O["a"])(this,e),this.sortedColors=t}return Object(v["a"])(e,[{key:"getThreeNearestColors",value:function(){return this.sortedColors.slice(0,3)}}]),e}()),q=function(){function e(t){Object(O["a"])(this,e),this.repository=t}return Object(v["a"])(e,[{key:"sortColors",value:function(e){var t=this.repository.getColorList();return t.sortByRGB(e.getRed(),e.getGreen(),e.getBlue()),new S(t.getColorNamesDistance())}}]),e}(),_=function(){function e(){Object(O["a"])(this,e)}return Object(v["a"])(e,null,[{key:"newSortColorsUseCase",value:function(){return new q(new N)}}]),e}(),B=Object(n["g"])({components:{IntroCard:f,SimilarColorCard:j},data:function(){return{name:""}},computed:{similarColors:function(){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.name);if(!e||!e[1]||!e[2]||!e[3])return[];var t=parseInt(e[1],16),r=parseInt(e[2],16),n=parseInt(e[3],16),o=_.newSortColorsUseCase(),a=new k(t,r,n),i=o.sortColors(a);return i.getThreeNearestColors()}}});B.render=c;var M=B;Object(n["b"])(M).mount("#app")}});
//# sourceMappingURL=app.bc5d9ed7.js.map