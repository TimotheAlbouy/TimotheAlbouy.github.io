(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={index:0},o=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d216214":"a631c492","chunk-2d216257":"d8c9bc89","chunk-d4d6141e":"10d86132"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var u=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/beaulieugen/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"#"}},[e._v("Générateur PDF de messes")])],1),n("b-container",[n("b-form-group",{attrs:{label:"Chant d'entrée","label-for":"entrance"}},[n("b-form-select",{attrs:{id:"entrance",options:e.entranceOptions},model:{value:e.entrance,callback:function(t){e.entrance=t},expression:"entrance"}})],1),n("b-form-group",{attrs:{label:"Prière universelle","label-for":"universalPrayer"}},[n("b-form-select",{attrs:{id:"universalPrayer",options:e.universalPrayerOptions},model:{value:e.universalPrayer,callback:function(t){e.universalPrayer=t},expression:"universalPrayer"}})],1),n("b-form-group",{attrs:{label:"Offertoire","label-for":"offertory"}},[n("b-form-select",{attrs:{id:"offertory",options:e.offertoryOptions},model:{value:e.offertory,callback:function(t){e.offertory=t},expression:"offertory"}})],1),n("b-form-group",{attrs:{label:"Communion","label-for":"communion"}},[n("b-form-select",{attrs:{id:"communion",options:e.communionOptions},model:{value:e.communion,callback:function(t){e.communion=t},expression:"communion"}})],1),n("b-form-group",{attrs:{label:"Envoi","label-for":"sending"}},[n("b-form-select",{attrs:{id:"sending",options:e.sendingOptions},model:{value:e.sending,callback:function(t){e.sending=t},expression:"sending"}})],1),n("b-button",{attrs:{variant:"primary"},on:{click:e.savePdf}},[e._v(" Générer le PDF ")])],1)],1)},o=[],i=n("3835"),s=n("b85c"),c=n("1da1"),u=(n("96cf"),n("ac1f"),n("1276"),n("2ca0"),n("d0b9")),d=n("8f77"),l=n("1bbb"),p=n("8226"),f=n("8361"),g=n("1947"),h=n("bc3a"),m=n.n(h),v=n("8baf"),b={name:"App",components:{BNavbar:u["a"],BNavbarBrand:d["a"],BContainer:l["a"],BFormGroup:p["a"],BFormSelect:f["a"],BButton:g["a"]},data:function(){return{doc:null,entrance:null,universalPrayer:null,offertory:null,communion:null,sending:null,entranceOptions:[],universalPrayerOptions:[],offertoryOptions:[],communionOptions:[],sendingOptions:[]}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="/textes/",t.next=3,m.a.get(n+"entree.txt");case 3:return e.entranceOptions=t.sent.data.split(/\r?\n/),t.next=6,m.a.get(n+"priere_universelle.txt");case 6:return e.universalPrayerOptions=t.sent.data.split(/\r?\n/),t.next=9,m.a.get(n+"offertoire.txt");case 9:return e.offertoryOptions=t.sent.data.split(/\r?\n/),t.next=12,m.a.get(n+"communion.txt");case 12:return e.communionOptions=t.sent.data.split(/\r?\n/),t.next=15,m.a.get(n+"envoi.txt");case 15:e.sendingOptions=t.sent.data.split(/\r?\n/);case 16:case"end":return t.stop()}}),t)})))()},methods:{addPage:function(){var e=this.doc.internal.pageSize.getWidth(),t=this.doc.internal.pageSize.getHeight();this.doc.addPage(),this.doc.setFillColor(33,33,33),this.doc.rect(0,0,e,t,"F")},addSong:function(e,t){var n=this.doc.internal.pageSize.getWidth(),r=this.doc.internal.pageSize.getHeight();if(this.doc.setFontSize(30),this.doc.text(e,10,20),this.doc.setFontSize(20),1==t.length){var a=this.doc.splitTextToSize(t[0],n-40);this.addParagraph(a,20,r/3)}else if(2==t.length){var o=this.doc.splitTextToSize(t[0],n-40);this.addParagraph(o,20,r/3);var i=this.doc.splitTextToSize(t[1],n-40);this.addParagraph(i,20,2*r/3)}else if(3==t.length){var s=this.doc.splitTextToSize(t[0],n-40);this.addParagraph(s,20,r/4);var c=this.doc.splitTextToSize(t[1],n-40);this.addParagraph(c,20,r/2);var u=this.doc.splitTextToSize(t[2],n-40);this.addParagraph(u,20,3*r/4)}else if(t.length>=4){var d=this.doc.splitTextToSize(t[0],n/2-30);this.addParagraph(d,20,40);var l=this.doc.splitTextToSize(t[1],n/2-30);this.addParagraph(l,20,r/2+10);var p=this.doc.splitTextToSize(t[2],n/2-30);this.addParagraph(p,n/2+10,40);var f=this.doc.splitTextToSize(t[3],n/2-30);this.addParagraph(f,n/2+10,r/2+10)}},addParagraph:function(e,t,n){this.doc.setFontSize(20);var r=e[0].startsWith("R.");r&&this.doc.setFont(void 0,"bold"),this.doc.text(e,t,n),r&&this.doc.setFont(void 0,"normal")},getSongs:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="/textes/chants/",t.next=3,m.a.get(n+e.entrance+".txt");case 3:return r=t.sent.data.split(/\r?\n\r?\n/),t.next=6,m.a.get(n+e.offertory+".txt");case 6:return a=t.sent.data.split(/\r?\n\r?\n/),t.next=9,m.a.get(n+e.communion+".txt");case 9:return o=t.sent.data.split(/\r?\n\r?\n/),t.next=12,m.a.get(n+e.sending+".txt");case 12:return i=t.sent.data.split(/\r?\n\r?\n/),t.abrupt("return",[r,a,o,i]);case 14:case"end":return t.stop()}}),t)})))()},getNextWednesday:function(){var e=new Date;while(3!==e.getDay())e.setDate(e.getDate()+1);var t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate(),a=t+"-";return n<10&&(a+="0"),a+=n+"-",r<10&&(a+="0"),a+=r,a},getPsalmChorus:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o,i,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="https://api.aelf.org/v1/messes/"+e.getNextWednesday()+"/france",t.next=3,m.a.get(n);case 3:r=t.sent,a=r.data,o=Object(s["a"])(a.messes[0].lectures),t.prev=6,o.s();case 8:if((i=o.n()).done){t.next=15;break}if(c=i.value,"psaume"!=c.type){t.next=13;break}return u=c.refrain_psalmique.length,t.abrupt("return",c.refrain_psalmique.substring(3,u-4));case 13:t.next=8;break;case 15:t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](6),o.e(t.t0);case 20:return t.prev=20,o.f(),t.finish(20);case 23:return t.abrupt("return",null);case 24:case"end":return t.stop()}}),t,null,[[6,17,20,23]])})))()},savePdf:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o,s,c,u,d,l,p,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.getNextWednesday(),t.next=3,e.getPsalmChorus();case 3:return r=t.sent,t.next=6,e.getSongs();case 6:a=t.sent,o=Object(i["a"])(a,4),s=o[0],c=o[1],u=o[2],d=o[3],e.doc=new v["a"]({orientation:"l",format:"a4"}),l=e.doc.internal.pageSize.getWidth(),p=e.doc.internal.pageSize.getHeight(),e.doc.setTextColor(255,255,255),e.doc.setFillColor(33,33,33),e.doc.rect(0,0,l,p,"F"),e.doc.setFontSize(60),e.doc.text("Messe du "+n,l/2,p/3,{align:"center"}),e.doc.setFontSize(30),e.doc.text("Aumônerie de Beaulieu",l/2,p/2,{align:"center"}),e.addPage(),e.addSong(e.entrance,s),e.addPage(),e.addPage(),e.doc.setFontSize(30),e.doc.text(r,l/2,p/2,{align:"center"}),e.addPage(),e.addPage(),e.doc.setFontSize(30),e.doc.text(e.universalPrayer,l/2,p/2,{align:"center"}),e.addPage(),e.addPage(),e.addSong(e.offertory,c),e.addPage(),e.addPage(),e.addSong(e.communion,u),e.addPage(),e.addPage(),e.addSong(e.sending,d),e.addPage(),e.doc.setFontSize(30),e.doc.text("Bonne soirée, et souriez, Jésus vous aime !",l/2,p/2,{align:"center"}),f="Messe du "+n,e.doc.save(f);case 46:case"end":return t.stop()}}),t)})))()}}},x=b,P=n("2877"),y=Object(P["a"])(x,a,o,!1,null,null,null),S=y.exports;n("f9e3"),n("2dd8");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(S)}}).$mount("#app")}});
//# sourceMappingURL=index.3a19a0c6.js.map