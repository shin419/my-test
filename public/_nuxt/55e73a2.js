(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{181:function(t,e,n){"use strict";n.r(e);n(21);var o={state:{test:"1111"},mutations:{SET_TEXT:function(t,text){t.test=text,console.log(text)}},actions:{setText:function(t,text){t.commit("SET_TEXT",text)}},getters:{getText:function(t){return t.test}}};e.default=o},236:function(t,e,n){var content=n(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("dc093880",content,!0,{sourceMap:!1})},263:function(t,e,n){"use strict";var o=n(0),r=n(264);Object(r.a)({apiKey:"AIzaSyARMpvbKlWhqnQkwYflPdZWnXQPoV4Vucs",authDomain:"my-test-9c40c.firebaseapp.com",projectId:"my-test-9c40c",storageBucket:"my-test-9c40c.appspot.com",messagingSenderId:"861239065636",appId:"1:861239065636:web:64fc345c76a8ec3b382cb1",measurementId:"G-VGQ5RMXEGC"});var c=o.a.extend({name:"DefaultLayout",data:function(){return{}}}),l=n(92),d=n(142),v=n.n(d),f=n(386),m=n(387),_=n(202),h=n(389),V=n(177),x=n(390),y=n(388),T=n(379),E=n(179),w=n(155),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"white"},[n("v-toolbar",{attrs:{dense:""}},[n("v-app-bar-nav-icon"),t._v(" "),n("v-toolbar-title"),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{staticClass:"mt-7",attrs:{label:"Outlined",dense:"","single-line":"",outlined:""}}),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1)],1),t._v(" "),n("v-main",[n("v-container",[n("Nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;v()(component,{VApp:f.a,VAppBarNavIcon:m.a,VBtn:_.a,VContainer:h.a,VIcon:V.a,VMain:x.a,VSpacer:y.a,VTextField:T.a,VToolbar:E.a,VToolbarTitle:w.a})},276:function(t,e,n){n(277),t.exports=n(278)},306:function(t,e,n){"use strict";n(236)},307:function(t,e,n){var o=n(22)(!1);o.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=o},359:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(80),c=n(181);o.a.use(r.a),e.default=function(){return new r.a.Store({modules:{home:c.default}})}},81:function(t,e,n){"use strict";var o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(306),n(92)),c=n(142),l=n.n(c),d=n(386),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[276,7,2,8]]]);