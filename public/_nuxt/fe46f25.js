(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{212:function(t,n,r){var content=r(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("dc093880",content,!0,{sourceMap:!1})},238:function(t,n,r){"use strict";var e={name:"DefaultLayout",data:function(){return{}}},o=r(81),c=r(126),l=r.n(c),v=r(349),d=r(350),f=r(239),_=r(352),h=r(160),m=r(353),V=r(351),x=r(161),y=r(162),component=Object(o.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-app",{staticClass:"white"},[r("v-toolbar",{attrs:{dense:""}},[r("v-app-bar-nav-icon"),t._v(" "),r("v-toolbar-title",[t._v("Covid-19")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-magnify")])],1)],1),t._v(" "),r("v-main",[r("v-container",[r("Nuxt")],1)],1)],1)}),[],!1,null,null,null);n.a=component.exports;l()(component,{VApp:v.a,VAppBarNavIcon:d.a,VBtn:f.a,VContainer:_.a,VIcon:h.a,VMain:m.a,VSpacer:V.a,VToolbar:x.a,VToolbarTitle:y.a})},249:function(t,n,r){r(250),t.exports=r(251)},281:function(t,n,r){"use strict";r(212)},282:function(t,n,r){var e=r(31)(!1);e.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=e},69:function(t,n,r){"use strict";var e={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(281),r(81)),c=r(126),l=r.n(c),v=r(349),component=Object(o.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);n.a=component.exports;l()(component,{VApp:v.a})}},[[249,6,2,7]]]);