(function(e){function t(t){for(var n,l,i=t[0],c=t[1],u=t[2],b=0,d=[];b<i.length;b++)l=i[b],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={app:0},a=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/cssColorNameFinder/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0c31":function(e,t,r){"use strict";r("a216")},"3b04":function(e,t,r){"use strict";r("abdb")},"793d":function(e,t,r){},a216:function(e,t,r){},abdb:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o=(r("b0c0"),{class:"app"}),a=Object(n["f"])("h1",null,"CSS Color Name Finder",-1),l=Object(n["e"])("Pick a color: "),i={key:1};function c(e,t,r,c,u,s){var b=Object(n["k"])("IntroCard"),d=Object(n["k"])("SimilarColorCard");return Object(n["h"])(),Object(n["c"])("div",o,[a,0===e.similarColors.length?(Object(n["h"])(),Object(n["c"])(b,{key:0})):Object(n["d"])("",!0),Object(n["f"])("label",null,[l,Object(n["o"])(Object(n["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.name=t}),type:"color"},null,512),[[n["m"],e.name]])]),e.similarColors.length>0?(Object(n["h"])(),Object(n["c"])("div",i,[Object(n["f"])("h2",null,"Colors close to "+Object(n["l"])(e.name)+":",1),(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(e.similarColors,(function(t){return Object(n["h"])(),Object(n["c"])(d,{key:t[0],"color-name":t[0],"color-parts":t[1],"original-parts":e.originalColorParts},null,8,["color-name","color-parts","original-parts"])})),128))])):Object(n["d"])("",!0)])}var u=r("6929"),s=r.n(u),b={class:"introCard"},d=Object(n["f"])("p",null,"There are over a hundred named colors in CSS, but they are rarely used.",-1),h=Object(n["f"])("p",null," This app helps you to use them more by showing names of colors that are similar to your favorite color. 🎨 ",-1);function f(e,t,r,o,a,l){return Object(n["h"])(),Object(n["c"])("section",b,[d,h])}var g=Object(n["g"])({name:"IntroCard"});g.render=f;var j=g,O={class:"similarColorCard"},m={class:"similarColorCard__colorArea"},p={class:"similarColorCard__comparison"},y={key:0},v=Object(n["e"])(" is "),C=Object(n["e"])(" than "),k=Object(n["e"])(". "),w={key:1},D=Object(n["e"])(" is "),N=Object(n["e"])(" than "),_=Object(n["e"])(". "),M={key:0},x=Object(n["e"])(" is "),S=Object(n["e"])(" than "),q=Object(n["e"])(". "),P={key:1},B=Object(n["e"])(" is "),G=Object(n["e"])(" than "),R=Object(n["e"])(". "),H=Object(n["e"])(" differs by "),T=Object(n["e"])(" from "),V=Object(n["e"])(". ");function A(e,t,r,o,a,l){var i=Object(n["k"])("ColorNames"),c=Object(n["k"])("ColorDifferenceDetail");return Object(n["h"])(),Object(n["c"])("div",O,[Object(n["f"])("div",m,[Object(n["f"])("div",{class:"similarColorCard__colorHalf",style:"background-color: "+e.colorName},null,4),Object(n["f"])("div",{class:"similarColorCard__colorHalf",style:"background-color: "+e.originalColor.hex()},null,4)]),Object(n["f"])(i,{"color-name":e.colorName,"color-hex":e.similarColor.hex(),"original-hex":e.originalColor.hex()},null,8,["color-name","color-hex","original-hex"]),Object(n["f"])("div",p,[Object(n["f"])(c,{"section-name":"Luminosity","similar-value":"".concat(Math.round(100*e.similarColor.luminosity()),"%"),"original-value":"".concat(Math.round(100*e.originalColor.luminosity()),"%")},{default:Object(n["n"])((function(){return[e.lightnessDiff>0?(Object(n["h"])(),Object(n["c"])("p",y,[Object(n["f"])("i",null,Object(n["l"])(e.colorName),1),v,Object(n["f"])("b",null,Object(n["l"])(Math.abs(e.lightnessDiff))+" percentage points lighter",1),C,Object(n["f"])("i",null,Object(n["l"])(e.originalColor.hex()),1),k])):(Object(n["h"])(),Object(n["c"])("p",w,[Object(n["f"])("i",null,Object(n["l"])(e.colorName),1),D,Object(n["f"])("b",null,Object(n["l"])(Math.abs(e.lightnessDiff))+" percentage points darker",1),N,Object(n["f"])("i",null,Object(n["l"])(e.originalColor.hex()),1),_]))]})),_:1},8,["similar-value","original-value"]),Object(n["f"])(c,{"section-name":"Saturation","similar-value":"".concat(Math.round(e.similarColor.saturationv()),"%"),"original-value":"".concat(Math.round(e.originalColor.saturationv()),"%")},{default:Object(n["n"])((function(){return[e.saturationDiff>0?(Object(n["h"])(),Object(n["c"])("p",M,[Object(n["f"])("i",null,Object(n["l"])(e.colorName),1),x,Object(n["f"])("b",null,Object(n["l"])(Math.abs(e.saturationDiff))+" percentage points more saturated",1),S,Object(n["f"])("i",null,Object(n["l"])(e.originalColor.hex()),1),q])):(Object(n["h"])(),Object(n["c"])("p",P,[Object(n["f"])("i",null,Object(n["l"])(e.colorName),1),B,Object(n["f"])("b",null,Object(n["l"])(Math.abs(e.lightnessDiff))+" percentage points less saturated",1),G,Object(n["f"])("i",null,Object(n["l"])(e.originalColor.hex()),1),R]))]})),_:1},8,["similar-value","original-value"]),Object(n["f"])(c,{"section-name":"Hue","similar-value":"".concat(Math.round(e.similarColor.hue()),"°"),"original-value":"".concat(Math.round(e.originalColor.hue()),"°")},{default:Object(n["n"])((function(){return[Object(n["f"])("p",null,[Object(n["f"])("i",null,Object(n["l"])(e.colorName),1),H,Object(n["f"])("b",null,Object(n["l"])(e.hueDiff)+" degrees",1),T,Object(n["f"])("i",null,Object(n["l"])(e.originalColor.hex()),1),V])]})),_:1},8,["similar-value","original-value"])])])}var I={class:"ColorDifferenceDetail"},L={class:"ColorDifferenceDetail__headline"},U={class:"ColorDifferenceDetail__values"};function E(e,t,r,o,a,l){return Object(n["h"])(),Object(n["c"])("div",I,[Object(n["f"])("h4",L,Object(n["l"])(e.sectionName),1),Object(n["f"])("div",U,[Object(n["f"])("span",null,Object(n["l"])(e.similarValue),1),Object(n["f"])("span",null,Object(n["l"])(e.originalValue),1)]),Object(n["j"])(e.$slots,"default")])}var F=Object(n["g"])({props:{sectionName:{type:String,required:!0},similarValue:{type:String,required:!0},originalValue:{type:String,required:!0}}});r("0c31");F.render=E;var J=F,z={class:"ColorNames"},$={class:"ColorNames__names"},K={class:"ColorNames__values"};function Q(e,t,r,o,a,l){return Object(n["h"])(),Object(n["c"])("div",z,[Object(n["f"])("div",$,[Object(n["f"])("h3",null,Object(n["l"])(e.colorName),1)]),Object(n["f"])("div",K,[Object(n["f"])("span",null,Object(n["l"])(e.colorHex),1),Object(n["f"])("span",null,Object(n["l"])(e.originalHex),1)])])}var W=Object(n["g"])({props:{colorName:{type:String,required:!0},colorHex:{type:String,required:!0},originalHex:{type:String,required:!0}}});r("3b04");W.render=Q;var X=W,Y=Object(n["g"])({components:{ColorDifferenceDetail:J,ColorNames:X},props:{colorName:{type:String,required:!0},colorParts:{type:Array,required:!0},originalParts:{type:Array,required:!0}},computed:{similarColor:function(){return s.a.rgb(this.colorParts)},originalColor:function(){return s.a.rgb(this.originalParts)},lightnessDiff:function(){return Math.round(100*this.similarColor.luminosity())-Math.round(100*this.originalColor.luminosity())},saturationDiff:function(){return Math.round(this.similarColor.saturationv())-Math.round(this.originalColor.saturationv())},hueDiff:function(){var e=Math.round(Math.abs(this.similarColor.hue()-this.originalColor.hue()));return e>180?360-e:e}}});r("d36e");Y.render=A;var Z=Y,ee=r("d4ec"),te=r("bee2"),re=function(){function e(t,r,n){Object(ee["a"])(this,e),this.red=t,this.blue=n,this.green=r}return Object(te["a"])(e,[{key:"getRed",value:function(){return this.red}},{key:"getGreen",value:function(){return this.green}},{key:"getBlue",value:function(){return this.blue}}]),e}(),ne=(r("d81d"),r("b64b"),r("3835")),oe=function(){function e(t,r,n,o){Object(ee["a"])(this,e),this.red=t,this.green=r,this.blue=n,this.colorName=o}return Object(te["a"])(e,[{key:"calculateDistanceRGB",value:function(e,t,r){this.distance=Math.sqrt(Math.pow(this.red-e,2)+Math.pow(this.green-t,2)+Math.pow(this.blue-r,2))}},{key:"hasDistance",value:function(){return"number"===typeof this.distance}},{key:"getDistance",value:function(){if("number"!==typeof this.distance)throw new Error("Distance has not been calculated yet!");return this.distance}},{key:"getName",value:function(){return this.colorName}},{key:"getRGB",value:function(){return[this.red,this.green,this.blue]}}]),e}(),ae=function(){function e(t){Object(ee["a"])(this,e),this.colors=t}return Object(te["a"])(e,[{key:"sortByRGB",value:function(e,t,r){this.colors.sort((function(n,o){return n.hasDistance()||n.calculateDistanceRGB(e,t,r),o.hasDistance()||o.calculateDistanceRGB(e,t,r),n.getDistance()-o.getDistance()}))}},{key:"getColorsDistance",value:function(){return this.colors.map((function(e){return[e.getName(),e.getRGB(),e.getDistance()]}))}}]),e}(),le=function(){function e(){Object(ee["a"])(this,e)}return Object(te["a"])(e,[{key:"getColorList",value:function(){var e={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};return new ae(Object.keys(e).map((function(t){var r=e[t];if(!r)throw new Error("unknown color name: ".concat(t,"!"));var n=Object(ne["a"])(r,3),o=n[0],a=n[1],l=n[2];return new oe(o,a,l,t)})))}}]),e}(),ie=(r("fb6a"),function(){function e(t){Object(ee["a"])(this,e),this.sortedColors=t}return Object(te["a"])(e,[{key:"getThreeNearestColors",value:function(){return this.sortedColors.slice(0,3)}}]),e}()),ce=function(){function e(t){Object(ee["a"])(this,e),this.repository=t}return Object(te["a"])(e,[{key:"sortColors",value:function(e){var t=this.repository.getColorList();return t.sortByRGB(e.getRed(),e.getGreen(),e.getBlue()),new ie(t.getColorsDistance())}}]),e}(),ue=function(){function e(){Object(ee["a"])(this,e)}return Object(te["a"])(e,null,[{key:"newSortColorsUseCase",value:function(){return new ce(new le)}}]),e}(),se=Object(n["g"])({components:{IntroCard:j,SimilarColorCard:Z},data:function(){return{name:""}},computed:{similarColors:function(){if(!this.name)return[];var e=s()(this.name),t=ue.newSortColorsUseCase(),r=new re(e.red(),e.green(),e.blue()),n=t.sortColors(r);return n.getThreeNearestColors()},originalColorParts:function(){if(!this.name)return null;var e=s()(this.name);return e.rgb().array()}}});se.render=c;var be=se;Object(n["b"])(be).mount("#app")},d36e:function(e,t,r){"use strict";r("793d")}});
//# sourceMappingURL=app.7ce8ed95.js.map