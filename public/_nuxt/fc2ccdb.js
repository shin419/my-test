(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{535:function(t,e,r){"use strict";r.r(e);var n={extends:r(551).a,props:["data","time"],watch:{time:function(){this.renderChart(this.data,{responsive:!0,maintainAspectRatio:!1})}},mounted:function(){this.renderChart(this.data,{responsive:!0,maintainAspectRatio:!1})}},o=r(92),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},537:function(t,e,r){var map={"./af":394,"./af.js":394,"./ar":395,"./ar-dz":396,"./ar-dz.js":396,"./ar-kw":397,"./ar-kw.js":397,"./ar-ly":398,"./ar-ly.js":398,"./ar-ma":399,"./ar-ma.js":399,"./ar-sa":400,"./ar-sa.js":400,"./ar-tn":401,"./ar-tn.js":401,"./ar.js":395,"./az":402,"./az.js":402,"./be":403,"./be.js":403,"./bg":404,"./bg.js":404,"./bm":405,"./bm.js":405,"./bn":406,"./bn-bd":407,"./bn-bd.js":407,"./bn.js":406,"./bo":408,"./bo.js":408,"./br":409,"./br.js":409,"./bs":410,"./bs.js":410,"./ca":411,"./ca.js":411,"./cs":412,"./cs.js":412,"./cv":413,"./cv.js":413,"./cy":414,"./cy.js":414,"./da":415,"./da.js":415,"./de":416,"./de-at":417,"./de-at.js":417,"./de-ch":418,"./de-ch.js":418,"./de.js":416,"./dv":419,"./dv.js":419,"./el":420,"./el.js":420,"./en-au":421,"./en-au.js":421,"./en-ca":422,"./en-ca.js":422,"./en-gb":423,"./en-gb.js":423,"./en-ie":424,"./en-ie.js":424,"./en-il":425,"./en-il.js":425,"./en-in":426,"./en-in.js":426,"./en-nz":427,"./en-nz.js":427,"./en-sg":428,"./en-sg.js":428,"./eo":429,"./eo.js":429,"./es":430,"./es-do":431,"./es-do.js":431,"./es-mx":432,"./es-mx.js":432,"./es-us":433,"./es-us.js":433,"./es.js":430,"./et":434,"./et.js":434,"./eu":435,"./eu.js":435,"./fa":436,"./fa.js":436,"./fi":437,"./fi.js":437,"./fil":438,"./fil.js":438,"./fo":439,"./fo.js":439,"./fr":440,"./fr-ca":441,"./fr-ca.js":441,"./fr-ch":442,"./fr-ch.js":442,"./fr.js":440,"./fy":443,"./fy.js":443,"./ga":444,"./ga.js":444,"./gd":445,"./gd.js":445,"./gl":446,"./gl.js":446,"./gom-deva":447,"./gom-deva.js":447,"./gom-latn":448,"./gom-latn.js":448,"./gu":449,"./gu.js":449,"./he":450,"./he.js":450,"./hi":451,"./hi.js":451,"./hr":452,"./hr.js":452,"./hu":453,"./hu.js":453,"./hy-am":454,"./hy-am.js":454,"./id":455,"./id.js":455,"./is":456,"./is.js":456,"./it":457,"./it-ch":458,"./it-ch.js":458,"./it.js":457,"./ja":459,"./ja.js":459,"./jv":460,"./jv.js":460,"./ka":461,"./ka.js":461,"./kk":462,"./kk.js":462,"./km":463,"./km.js":463,"./kn":464,"./kn.js":464,"./ko":465,"./ko.js":465,"./ku":466,"./ku.js":466,"./ky":467,"./ky.js":467,"./lb":468,"./lb.js":468,"./lo":469,"./lo.js":469,"./lt":470,"./lt.js":470,"./lv":471,"./lv.js":471,"./me":472,"./me.js":472,"./mi":473,"./mi.js":473,"./mk":474,"./mk.js":474,"./ml":475,"./ml.js":475,"./mn":476,"./mn.js":476,"./mr":477,"./mr.js":477,"./ms":478,"./ms-my":479,"./ms-my.js":479,"./ms.js":478,"./mt":480,"./mt.js":480,"./my":481,"./my.js":481,"./nb":482,"./nb.js":482,"./ne":483,"./ne.js":483,"./nl":484,"./nl-be":485,"./nl-be.js":485,"./nl.js":484,"./nn":486,"./nn.js":486,"./oc-lnc":487,"./oc-lnc.js":487,"./pa-in":488,"./pa-in.js":488,"./pl":489,"./pl.js":489,"./pt":490,"./pt-br":491,"./pt-br.js":491,"./pt.js":490,"./ro":492,"./ro.js":492,"./ru":493,"./ru.js":493,"./sd":494,"./sd.js":494,"./se":495,"./se.js":495,"./si":496,"./si.js":496,"./sk":497,"./sk.js":497,"./sl":498,"./sl.js":498,"./sq":499,"./sq.js":499,"./sr":500,"./sr-cyrl":501,"./sr-cyrl.js":501,"./sr.js":500,"./ss":502,"./ss.js":502,"./sv":503,"./sv.js":503,"./sw":504,"./sw.js":504,"./ta":505,"./ta.js":505,"./te":506,"./te.js":506,"./tet":507,"./tet.js":507,"./tg":508,"./tg.js":508,"./th":509,"./th.js":509,"./tk":510,"./tk.js":510,"./tl-ph":511,"./tl-ph.js":511,"./tlh":512,"./tlh.js":512,"./tr":513,"./tr.js":513,"./tzl":514,"./tzl.js":514,"./tzm":515,"./tzm-latn":516,"./tzm-latn.js":516,"./tzm.js":515,"./ug-cn":517,"./ug-cn.js":517,"./uk":518,"./uk.js":518,"./ur":519,"./ur.js":519,"./uz":520,"./uz-latn":521,"./uz-latn.js":521,"./uz.js":520,"./vi":522,"./vi.js":522,"./x-pseudo":523,"./x-pseudo.js":523,"./yo":524,"./yo.js":524,"./zh-cn":525,"./zh-cn.js":525,"./zh-hk":526,"./zh-hk.js":526,"./zh-mo":527,"./zh-mo.js":527,"./zh-tw":528,"./zh-tw.js":528};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=537},538:function(t,e,r){var content=r(557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("1b7833da",content,!0,{sourceMap:!1})},556:function(t,e,r){"use strict";r(538)},557:function(t,e,r){var n=r(22)(!1);n.push([t.i,".v-list-item{padding:0}.v-application p{padding:0;margin:4px 0}.v-list{padding:0}.v-list-item__title{padding:0 8px}.v-menu__content--fixed{background-color:#fff}",""]),t.exports=n},633:function(t,e,r){"use strict";r.r(e);r(11),r(19),r(13),r(20);var n=r(35),o=r(2),c=(r(105),r(10),r(59),r(5),r(554),r(62),r(48),r(49),r(61),r(14),r(26),r(268),r(0)),l=r(117),v=r.n(l),d=(r(21),r(60),r(271),r(72),r(391)),h=r.n(d),m=function(t){var e=(t/1).toFixed(0).replace(",",",");return t?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."):"0"},f=function(t){return h()(t||new Date).format("YYYY/MM/DD")},j=function(t){return JSON.parse(JSON.stringify(t))},_=r(535),y=r(80);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){var e,r,n,o=2;for("undefined"!=typeof Symbol&&(r=Symbol.asyncIterator,n=Symbol.iterator);o--;){if(r&&null!=(e=t[r]))return e.call(t);if(n&&null!=(e=t[n]))return new x(e.call(t));r="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function x(s){function t(t){if(Object(t)!==t)return Promise.reject(new TypeError(t+" is not an object."));var e=t.done;return Promise.resolve(t.value).then((function(t){return{value:t,done:e}}))}return x=function(s){this.s=s,this.n=s.next},x.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var r=this.s.return;return void 0===r?Promise.resolve({value:e,done:!0}):t(r.apply(this.s,arguments))},throw:function(e){var r=this.s.return;return void 0===r?Promise.reject(e):t(r.apply(this.s,arguments))}},new x(s)}var k=c.a.extend({name:"IndexPage",components:{"chart-bar":_.default},data:function(){return{attrs:{class:"mb-6",boilerplate:!0,elevation:2},isShowData:!0,isShowDataSheet:!0,countries:[],cacheCountries:[],global:{},sheet:!1,menu:!1,dates:[],country:{},cacheCountry:{},detailCountry:{},formatNumber:m,formatDay:f,chartData:{labels:[],datasets:[]},change:(new Date).getTime(),times:[{value:1,label:"To Day"},{value:7,label:"7 days ago"},{value:14,label:"14 days ago"},{value:30,label:"30 days ago"}],time:1,cacheDom:!0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(y.b)(["getValSearch","screen"])),watch:{getValSearch:function(){var t=this;clearTimeout(this.cacheDom),this.cacheDom=setTimeout((function(){t.startSearch(t.getValSearch)}),400)}},methods:{startSearch:function(t){var e=j(this.cacheCountries)||[];t&&""!==t&&(t=t.toLowerCase(),e=e.filter((function(e){return e.Country&&-1!==e.Country.toLowerCase().indexOf(t)}))),this.countries=e},sortClick:function(t){this.dates.length>1&&(this.menu=!1,this.queryCoutry(t,"from=".concat(this.dates[0],"&to=").concat(this.dates[1])))},selectTime:function(t){var e,r,n,o,c,l;1===this.time?(this.country=j(this.cacheCountry),this.setDataChart(this.cacheCountry)):this.queryCoutry(t,(e=this.time,n=r?new Date("2021-12-28"):new Date,o=h()(n).subtract(e,"days"),c=h()(o).format("YYYY-MM-DD"),l=h()().format("YYYY-MM-DD"),"from=".concat(c,"&to=").concat(l)))},queryCoutry:function(t,time){var e=this;v.a.get("https://api.covid19api.com/country/".concat(t.Slug,"?").concat(time)).then((function(t){if(200===t.status){var data=t.data||[];e.setDataChartTime(data)}})).catch((function(t){console.error(t)}))},setDataChartTime:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,c,l,v,d,h,m,j,_,y,C,x,k,D;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=[],o={label:"Confirme",backgroundColor:"#44f607",data:[]},c={label:"Recovered",backgroundColor:"#f6f207",data:[]},l={label:"Deaths",backgroundColor:"#f60707",data:[]},v=[],d=0,h=0,m=0,j=!1,_=!1,r.prev=10,C=w(t);case 12:return r.next=14,C.next();case 14:if(!(j=!(x=r.sent).done)){r.next=26;break}k=x.value,d+=k.Confirmed,h+=k.Recovered,m+=k.Deaths,v.push(f(k.Date)),c.data.push(k.Recovered),l.data.push(k.Deaths),o.data.push(k.Confirmed);case 23:j=!1,r.next=12;break;case 26:r.next=32;break;case 28:r.prev=28,r.t0=r.catch(10),_=!0,y=r.t0;case 32:if(r.prev=32,r.prev=33,!j||null==C.return){r.next=37;break}return r.next=37,C.return();case 37:if(r.prev=37,!_){r.next=40;break}throw y;case 40:return r.finish(37);case 41:return r.finish(32);case 42:(D=e.country).NewRecovered=h,D.NewDeaths=m,D.NewConfirmed=d,e.country=D,n.push(o),n.push(l),n.push(c),e.chartData.labels=v,e.chartData.datasets=n,e.change=(new Date).getTime();case 53:case"end":return r.stop()}}),r,null,[[10,28,32,42],[33,,37,41]])})))()},showItem:function(t){this.time=1,this.setDataChart(t),this.getDetailCountry(t.Country),this.country=t,this.cacheCountry=j(t),this.sheet=!0},setDataChart:function(t){this.change=(new Date).getTime();var e=[];e.push(f()),this.chartData.labels=e;var r=[],n={label:"Confirme",backgroundColor:"#44f607",data:[t.NewConfirmed]};r.push(n);var o={label:"Recovered",backgroundColor:"#f6f207",data:[t.NewRecovered]};r.push(o);var c={label:"Deaths",backgroundColor:"#f60707",data:[t.NewDeaths]};r.push(c),this.chartData.datasets=r},getDetailCountry:function(t){var e=this;this.isShowDataSheet=!0,v.a.get("https://restcountries.com/v3.1/name/".concat(t)).then((function(t){if(e.isShowDataSheet=!1,200===t.status){var data=t.data||[];e.detailCountry=data[0]||{}}})).catch((function(t){e.isShowDataSheet=!1,console.error(t)}))},loadData:function(){var t=this;this.isShowData=!0,v.a.get("https://api.covid19api.com/summary").then((function(e){if(t.isShowData=!1,200===e.status){var data=e.data,r=e.data&&e.data.Countries||[];t.cacheCountries=j(r),t.countries=r.sort((function(a,b){return b.TotalConfirmed-a.TotalConfirmed})),t.global=data.Global||{}}})).catch((function(e){t.isShowData=!1,console.error(e)}))}},created:function(){this.loadData()}}),D=k,S=(r(556),r(92)),N=r(142),O=r.n(N),T=r(635),z=r(202),R=r(631),V=r(545),E=r(177),P=r(261),M=r(546),Y=r(534),I=r(529),L=r(552),A=r(180),B=r(632),F=r(97),J=r(630),H=r(388),U=r(179),$=r(155),component=Object(S.a)(D,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"row pb-4 justify-center"},[r("div",{staticClass:"col-4 pa-0 red--text"},[r("p",[t._v(t._s(t.formatNumber(t.global.NewDeaths)))]),t._v(" "),r("p",[t._v(t._s(t.formatNumber(t.global.TotalDeaths)))])]),t._v(" "),r("v-divider",{attrs:{vertical:""}}),t._v(" "),r("div",{staticClass:"text-center col-3 pa-0 yellow--text"},[r("p",[t._v(t._s(t.formatNumber(t.global.NewRecovered)))]),t._v(" "),r("p",[t._v(t._s(t.formatNumber(t.global.TotalRecovered)))])]),t._v(" "),r("v-divider",{attrs:{vertical:""}}),t._v(" "),r("div",{staticClass:"green--text col-4 pa-0 text-right"},[r("p",[t._v("+"+t._s(t.formatNumber(t.global.NewConfirmed)))]),t._v(" "),r("p",[t._v(t._s(t.formatNumber(t.global.TotalConfirmed)))])])],1),t._v(" "),r("v-responsive",{staticClass:"overflow-y-auto",attrs:{height:t.screen.height-175+"px"}},[t.isShowData?r("div",{staticClass:"pt-4"},[r("v-skeleton-loader",t._b({attrs:{type:"article, actions"}},"v-skeleton-loader",t.attrs,!1)),t._v(" "),r("v-skeleton-loader",t._b({attrs:{type:"article, actions"}},"v-skeleton-loader",t.attrs,!1)),t._v(" "),r("v-skeleton-loader",t._b({attrs:{type:"article, actions"}},"v-skeleton-loader",t.attrs,!1))],1):r("v-list",{attrs:{dense:""}},t._l(t.countries,(function(e,i){return r("v-list-item",{key:i},[r("v-list-item-content",{on:{click:function(r){return t.showItem(e)}}},[r("div",{staticClass:"px-4 py-3"},[r("div",{staticClass:"row"},[r("p",{staticClass:"font-weight-bold"},[t._v(t._s(e.Country))]),t._v(" "),r("v-spacer"),t._v(" "),r("p",{staticClass:"green--text"},[t._v("+ "+t._s(t.formatNumber(e.NewConfirmed)))])],1),t._v(" "),r("div",{staticClass:"row"},[r("p",{staticClass:"red--text col-4 pa-0"},[t._v(t._s(t.formatNumber(e.NewDeaths)))]),t._v(" "),r("p",{staticClass:"yellow--text col-4 text-center pa-0"},[t._v(t._s(t.formatNumber(e.NewRecovered)))]),t._v(" "),r("p",{staticClass:"col-4 text-right pa-0"},[t._v(t._s(t.formatNumber(e.TotalConfirmed)))])])]),t._v(" "),i<t.countries.length-1?r("v-divider",{key:i}):t._e()],1)],1)})),1)],1),t._v(" "),r("v-bottom-sheet",{model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[r("v-sheet",{staticClass:"text-center",attrs:{height:t.screen.height-50+"px"}},[r("v-toolbar",{attrs:{dense:""}},[r("v-toolbar-title",[t._v(t._s(t.country.Country))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){t.sheet=!1}}},[r("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),r("v-responsive",{staticClass:"overflow-y-auto",attrs:{height:t.screen.height-120+"px"}},[r("div",{staticClass:"ma-3"},[t.isShowDataSheet?r("v-skeleton-loader",{staticClass:"mx-auto",attrs:{"max-width":"300",type:"card"}}):r("div",{staticClass:"row pt-3"},[r("div",{staticClass:"col-4 col-sm-3 col-md-2 pa-0 px-3"},[t.detailCountry&&t.detailCountry.coatOfArms?r("div",{staticClass:"row justify-center pa-3"},[r("v-img",{attrs:{src:t.detailCountry.coatOfArms.png}})],1):t._e()]),t._v(" "),r("div",{staticClass:"col-8 col-sm-9 col-md-10 pa-0"},[r("div",{staticClass:"text-left px-3"},[r("h2",{staticClass:"font-weight-bold"},[t._v(t._s(t.country.Country))]),t._v(" "),r("div",{staticClass:"row px-3 pt-2"},[r("p",{staticClass:"col-5"},[t._v("Population:")]),t._v(" "),r("p",{staticClass:"col-7"},[t._v(t._s(t.formatNumber(t.detailCountry.population)))])]),t._v(" "),r("div",{staticClass:"row px-3"},[r("p",{staticClass:"col-5"},[t._v("Capital:")]),t._v(" "),r("p",{staticClass:"col-7"},[t._v(t._s(t.detailCountry.capital&&t.detailCountry.capital[0]))])]),t._v(" "),r("div",{staticClass:"row px-3"},[r("p",{staticClass:"col-5"},[t._v("Region:")]),t._v(" "),r("p",{staticClass:"col-7"},[t._v(t._s(t.detailCountry.region))])]),t._v(" "),r("div",{staticClass:"row px-3"},[r("p",{staticClass:"col-5"},[t._v("Subregion:")]),t._v(" "),r("p",{staticClass:"col-7"},[t._v(t._s(t.detailCountry.subregion))])])])])]),t._v(" "),r("div",{staticClass:"row pb-2 pt-5 justify-center font-weight-bold"},[r("div",{staticClass:"col-4 pa-0 text-left"},[t._v("DEATHS")]),t._v(" "),r("div",{staticClass:"text-center col-3 pa-0"},[t._v("RECOVERED")]),t._v(" "),r("div",{staticClass:"col-4 pa-0 text-right"},[t._v("CONFIRMED")])]),t._v(" "),r("div",{staticClass:"row pb-4 justify-center"},[r("div",{staticClass:"col-4 pa-0 red--text text-left"},[r("p",[t._v(t._s(t.formatNumber(t.country.NewDeaths)))]),t._v(" "),r("p",[t._v(t._s(t.formatNumber(t.country.TotalDeaths)))])]),t._v(" "),r("v-divider",{attrs:{vertical:""}}),t._v(" "),r("div",{staticClass:"text-center col-3 pa-0 yellow--text"},[r("p",[t._v(t._s(t.formatNumber(t.country.NewRecovered)))]),t._v(" "),r("p",[t._v(t._s(t.formatNumber(t.country.TotalRecovered)))])]),t._v(" "),r("v-divider",{attrs:{vertical:""}}),t._v(" "),r("div",{staticClass:"green--text col-4 pa-0 text-right"},[r("p",[t._v("+"+t._s(t.formatNumber(t.country.NewConfirmed)))]),t._v(" "),r("p",[t._v(t._s(t.formatNumber(t.country.TotalConfirmed)))])])],1),t._v(" "),r("div",{staticClass:"row pt-5 px-4"},[r("v-select",{attrs:{"item-text":"label","item-value":"value",solo:"",dense:"",items:t.times},on:{input:function(e){return t.selectTime(t.country)}},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}),t._v(" "),r("div",{staticClass:"mt-1"},[r("v-menu",{attrs:{"offset-y":!0,"close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.attrs,o=e.on;return[r("v-btn",t._g(t._b({attrs:{color:"primary",text:""}},"v-btn",n,!1),o),[r("v-icon",[t._v("mdi-calendar")])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),r("v-date-picker",{attrs:{range:""},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}}),t._v(" "),r("div",{staticClass:"white"},[r("div",{staticClass:"my-2 row justify-center"},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.sortClick(t.country)}}},[t._v("\n                      Sort\n                    ")])],1)])],1)],1)],1),t._v(" "),r("div",{staticClass:"pt-3"},[r("chart-bar",{staticStyle:{height:"250px",width:"100%"},attrs:{data:t.chartData,time:t.change}})],1)],1)])],1)],1)],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row pt-4 pb-2 justify-center font-weight-bold"},[r("div",{staticClass:"col-4 pa-0"},[t._v("DEATHS")]),t._v(" "),r("div",{staticClass:"text-center col-3 pa-0"},[t._v("RECOVERED")]),t._v(" "),r("div",{staticClass:"col-4 pa-0 text-right"},[t._v("CONFIRMED")])])}],!1,null,null,null);e.default=component.exports;O()(component,{ChartBar:r(535).default}),O()(component,{VBottomSheet:T.a,VBtn:z.a,VDatePicker:R.a,VDivider:V.a,VIcon:E.a,VImg:P.a,VList:M.a,VListItem:Y.a,VListItemContent:I.a,VMenu:L.a,VResponsive:A.a,VSelect:B.a,VSheet:F.a,VSkeletonLoader:J.a,VSpacer:H.a,VToolbar:U.a,VToolbarTitle:$.a})}}]);