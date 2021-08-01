import{C as e,d as r,c as l,o,a as i,t as a,r as n,w as s,b as t,e as u,f as c,F as d,g as m,h as g}from"./vendor.bf1fd437.js";!function(e=".",r="__import__"){try{self[r]=new Function("u","return import(u)")}catch(l){const o=new URL(e,location),i=e=>{URL.revokeObjectURL(e.src),e.remove()};self[r]=e=>new Promise(((l,a)=>{const n=new URL(e,o);if(self[r].moduleMap[n])return l(self[r].moduleMap[n]);const s=new Blob([`import * as m from '${n}';`,`${r}.moduleMap['${n}']=m;`],{type:"text/javascript"}),t=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){a(new Error(`Failed to import: ${e}`)),i(t)},onload(){l(self[r].moduleMap[n]),i(t)}});document.head.appendChild(t)})),self[r].moduleMap={}}}("/cssColorNameFinder/assets/");var h={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};class p{getColorList(){return Object.entries(h).map((([e,r])=>{if(!this.isColorValid(r))throw new Error(`${e} should have three color values but doesn't!?`);const[l,o,i]=r;return{name:e,red:l,green:o,blue:i}}))}isColorValid(e){return 3===e.length}}var f=r({name:"IntroCard"});const C={class:"introCard"},y=i("p",null,"There are over a hundred named colors in CSS, but they are rarely used.",-1),b=i("p",null," This app helps you to use them more by showing names of colors that are similar to your favorite color. 🎨 ",-1);f.render=function(e,r,i,a,n,s){return o(),l("section",C,[y,b])};var v=r({props:{sectionName:{type:String,required:!0},similarValue:{type:String,required:!0},originalValue:{type:String,required:!0}}});const k={class:"ColorDifferenceDetail"},w={class:"ColorDifferenceDetail__headline"},N={class:"ColorDifferenceDetail__values"};v.render=function(e,r,s,t,u,c){return o(),l("div",k,[i("h4",w,a(e.sectionName),1),i("div",N,[i("span",null,a(e.similarValue),1),i("span",null,a(e.originalValue),1)]),n(e.$slots,"default")])};var D=r({props:{colorName:{type:String,required:!0},colorHex:{type:String,required:!0},originalHex:{type:String,required:!0}}});const _={class:"ColorNames"},x={class:"ColorNames__names"},S={class:"ColorNames__values"};D.render=function(e,r,n,s,t,u){return o(),l("div",_,[i("div",x,[i("h3",null,a(e.colorName),1)]),i("div",S,[i("span",null,a(e.colorHex),1),i("span",null,a(e.originalHex),1)])])};var H=r({components:{ColorDifferenceDetail:v,ColorNames:D},props:{colorName:{type:String,required:!0},similarColor:{type:Object,required:!0},originalColor:{type:Object,required:!0}},computed:{originalHex(){return"#"+this.originalColor.srgb.map((e=>(255*e).toString(16).padStart(2,"0"))).join("")},similarHex(){return"#"+this.similarColor.srgb.map((e=>(255*e).toString(16).padStart(2,"0"))).join("")},lightnessDiff(){const e=this.similarColor.lch[0]-this.originalColor.lch[0];return this.round(e,2)},chromaDiff(){const e=this.similarColor.lch[1]-this.originalColor.lch[1];return this.round(e,2)},hueDiff(){const e=(this.similarColor.lch[2]>180?this.similarColor.lch[2]-360:this.similarColor.lch[2])-(this.originalColor.lch[2]>180?this.originalColor.lch[2]-360:this.originalColor.lch[2]);return this.round(Math.abs(e),2)}},methods:{round:(e,r=0)=>Math.round((e+Number.EPSILON)*Math.pow(10,r))/Math.pow(10,r)}});const q={class:"similarColorCard"},$={class:"similarColorCard__colorArea"},j={class:"similarColorCard__comparison"},L={key:0},M=c(" is "),O=c(" than "),R=c(". "),U={key:1},V=c(" is "),E=c(" than "),F=c(". "),I={key:2},P=c(" is "),T=i("b",null,"exactly as light",-1),z=c(" as "),A=c(". "),B={key:0},G=c(" is "),J=c(" than "),K=c(". "),Q={key:1},W=c(" is "),X=c(" than "),Y=c(". "),Z={key:2},ee=c(" is "),re=i("b",null,"exactly as intense",-1),le=c(" as "),oe=c(". "),ie=c(" differs by "),ae=c(" from "),ne=c(". ");H.render=function(e,r,n,c,d,m){const g=u("ColorNames"),h=u("ColorDifferenceDetail");return o(),l("div",q,[i("div",$,[i("div",{class:"similarColorCard__colorHalf",style:"background-color: "+e.colorName},null,4),i("div",{class:"similarColorCard__colorHalf",style:"background-color: "+e.originalColor.toString()},null,4)]),i(g,{"color-name":e.colorName,"color-hex":e.similarHex,"original-hex":e.originalHex},null,8,["color-name","color-hex","original-hex"]),i("div",j,[i(h,{"section-name":"Lightness","similar-value":e.round(e.similarColor.lch[0],2).toString(),"original-value":e.round(e.originalColor.lch[0],2).toString()},{default:s((()=>[e.lightnessDiff>0?(o(),l("p",L,[i("i",null,a(e.colorName),1),M,i("b",null,a(e.lightnessDiff)+" points lighter",1),O,i("i",null,a(e.originalHex),1),R])):e.lightnessDiff<0?(o(),l("p",U,[i("i",null,a(e.colorName),1),V,i("b",null,a(Math.abs(e.lightnessDiff))+" points darker",1),E,i("i",null,a(e.originalHex),1),F])):(o(),l("p",I,[i("i",null,a(e.colorName),1),P,T,z,i("i",null,a(e.originalHex),1),A]))])),_:1},8,["similar-value","original-value"]),i(h,{"section-name":"Chroma","similar-value":`${e.round(e.similarColor.lch[1],2)}`,"original-value":`${e.round(e.originalColor.lch[1],2)}`},{default:s((()=>[e.chromaDiff>0?(o(),l("p",B,[i("i",null,a(e.colorName),1),G,i("b",null,a(e.chromaDiff)+" points more intense",1),J,i("i",null,a(e.originalHex),1),K])):e.chromaDiff<0?(o(),l("p",Q,[i("i",null,a(e.colorName),1),W,i("b",null,a(Math.abs(e.chromaDiff))+" points less intense",1),X,i("i",null,a(e.originalHex),1),Y])):(o(),l("p",Z,[i("i",null,a(e.colorName),1),ee,re,le,i("i",null,a(e.originalHex),1),oe]))])),_:1},8,["similar-value","original-value"]),isNaN(e.hueDiff)?t("",!0):(o(),l(h,{key:0,"section-name":"LCH Hue","similar-value":`${e.round(e.similarColor.lch[2],2)}°`,"original-value":`${e.round(e.originalColor.lch[2],2)}°`},{default:s((()=>[i("p",null,[i("i",null,a(e.colorName),1),ie,i("b",null,a(e.hueDiff)+" degrees",1),ae,i("i",null,a(e.originalHex),1),ne])])),_:1},8,["similar-value","original-value"]))])])};var se=r({components:{IntroCard:f,SimilarColorCard:H},data:()=>({name:""}),computed:{similarColors(){if(!this.name)return[];return function(r){const l=new e(r),o=(new p).getColorList().map((r=>{const o=new e(`rgb(${r.red}, ${r.green}, ${r.blue})`);return{name:r.name,color:o,distance:o.deltaE(l,"2000")}}));return o.sort(((e,r)=>e.distance<r.distance?-1:e.distance>r.distance?1:0)),o}(this.name).slice(0,3)},originalColor(){return this.name?new e(this.name):null}},methods:{changeColor(e){this.name=e.target.value}}});const te={class:"app"},ue=i("h1",null,"CSS Color Name Finder",-1),ce=c("Pick a color: "),de={key:1};se.render=function(e,r,n,s,c,g){const h=u("IntroCard"),p=u("SimilarColorCard");return o(),l("div",te,[ue,0===e.similarColors.length?(o(),l(h,{key:0})):t("",!0),i("label",null,[ce,i("input",{type:"color",onChange:r[1]||(r[1]=(...r)=>e.changeColor&&e.changeColor(...r))},null,32)]),e.originalColor&&e.similarColors.length?(o(),l("div",de,[i("h2",null,"Colors close to "+a(e.name)+":",1),(o(!0),l(d,null,m(e.similarColors,(r=>(o(),l(p,{key:r.name,"color-name":r.name,"similar-color":r.color,"original-color":e.originalColor},null,8,["color-name","similar-color","original-color"])))),128))])):t("",!0)])};g(se).mount("#app");
