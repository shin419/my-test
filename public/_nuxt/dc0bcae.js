(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{492:function(t,e,r){"use strict";r.r(e);var o=r(498),n=o.b.reactiveProp,l={extends:o.a,mixins:[n],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},c=r(81),component=Object(c.a)(l,undefined,undefined,!1,null,null,null);e.default=component.exports},493:function(t,e,r){var map={"./af":355,"./af.js":355,"./ar":356,"./ar-dz":357,"./ar-dz.js":357,"./ar-kw":358,"./ar-kw.js":358,"./ar-ly":359,"./ar-ly.js":359,"./ar-ma":360,"./ar-ma.js":360,"./ar-sa":361,"./ar-sa.js":361,"./ar-tn":362,"./ar-tn.js":362,"./ar.js":356,"./az":363,"./az.js":363,"./be":364,"./be.js":364,"./bg":365,"./bg.js":365,"./bm":366,"./bm.js":366,"./bn":367,"./bn-bd":368,"./bn-bd.js":368,"./bn.js":367,"./bo":369,"./bo.js":369,"./br":370,"./br.js":370,"./bs":371,"./bs.js":371,"./ca":372,"./ca.js":372,"./cs":373,"./cs.js":373,"./cv":374,"./cv.js":374,"./cy":375,"./cy.js":375,"./da":376,"./da.js":376,"./de":377,"./de-at":378,"./de-at.js":378,"./de-ch":379,"./de-ch.js":379,"./de.js":377,"./dv":380,"./dv.js":380,"./el":381,"./el.js":381,"./en-au":382,"./en-au.js":382,"./en-ca":383,"./en-ca.js":383,"./en-gb":384,"./en-gb.js":384,"./en-ie":385,"./en-ie.js":385,"./en-il":386,"./en-il.js":386,"./en-in":387,"./en-in.js":387,"./en-nz":388,"./en-nz.js":388,"./en-sg":389,"./en-sg.js":389,"./eo":390,"./eo.js":390,"./es":391,"./es-do":392,"./es-do.js":392,"./es-mx":393,"./es-mx.js":393,"./es-us":394,"./es-us.js":394,"./es.js":391,"./et":395,"./et.js":395,"./eu":396,"./eu.js":396,"./fa":397,"./fa.js":397,"./fi":398,"./fi.js":398,"./fil":399,"./fil.js":399,"./fo":400,"./fo.js":400,"./fr":401,"./fr-ca":402,"./fr-ca.js":402,"./fr-ch":403,"./fr-ch.js":403,"./fr.js":401,"./fy":404,"./fy.js":404,"./ga":405,"./ga.js":405,"./gd":406,"./gd.js":406,"./gl":407,"./gl.js":407,"./gom-deva":408,"./gom-deva.js":408,"./gom-latn":409,"./gom-latn.js":409,"./gu":410,"./gu.js":410,"./he":411,"./he.js":411,"./hi":412,"./hi.js":412,"./hr":413,"./hr.js":413,"./hu":414,"./hu.js":414,"./hy-am":415,"./hy-am.js":415,"./id":416,"./id.js":416,"./is":417,"./is.js":417,"./it":418,"./it-ch":419,"./it-ch.js":419,"./it.js":418,"./ja":420,"./ja.js":420,"./jv":421,"./jv.js":421,"./ka":422,"./ka.js":422,"./kk":423,"./kk.js":423,"./km":424,"./km.js":424,"./kn":425,"./kn.js":425,"./ko":426,"./ko.js":426,"./ku":427,"./ku.js":427,"./ky":428,"./ky.js":428,"./lb":429,"./lb.js":429,"./lo":430,"./lo.js":430,"./lt":431,"./lt.js":431,"./lv":432,"./lv.js":432,"./me":433,"./me.js":433,"./mi":434,"./mi.js":434,"./mk":435,"./mk.js":435,"./ml":436,"./ml.js":436,"./mn":437,"./mn.js":437,"./mr":438,"./mr.js":438,"./ms":439,"./ms-my":440,"./ms-my.js":440,"./ms.js":439,"./mt":441,"./mt.js":441,"./my":442,"./my.js":442,"./nb":443,"./nb.js":443,"./ne":444,"./ne.js":444,"./nl":445,"./nl-be":446,"./nl-be.js":446,"./nl.js":445,"./nn":447,"./nn.js":447,"./oc-lnc":448,"./oc-lnc.js":448,"./pa-in":449,"./pa-in.js":449,"./pl":450,"./pl.js":450,"./pt":451,"./pt-br":452,"./pt-br.js":452,"./pt.js":451,"./ro":453,"./ro.js":453,"./ru":454,"./ru.js":454,"./sd":455,"./sd.js":455,"./se":456,"./se.js":456,"./si":457,"./si.js":457,"./sk":458,"./sk.js":458,"./sl":459,"./sl.js":459,"./sq":460,"./sq.js":460,"./sr":461,"./sr-cyrl":462,"./sr-cyrl.js":462,"./sr.js":461,"./ss":463,"./ss.js":463,"./sv":464,"./sv.js":464,"./sw":465,"./sw.js":465,"./ta":466,"./ta.js":466,"./te":467,"./te.js":467,"./tet":468,"./tet.js":468,"./tg":469,"./tg.js":469,"./th":470,"./th.js":470,"./tk":471,"./tk.js":471,"./tl-ph":472,"./tl-ph.js":472,"./tlh":473,"./tlh.js":473,"./tr":474,"./tr.js":474,"./tzl":475,"./tzl.js":475,"./tzm":476,"./tzm-latn":477,"./tzm-latn.js":477,"./tzm.js":476,"./ug-cn":478,"./ug-cn.js":478,"./uk":479,"./uk.js":479,"./ur":480,"./ur.js":480,"./uz":481,"./uz-latn":482,"./uz-latn.js":482,"./uz.js":481,"./vi":483,"./vi.js":483,"./x-pseudo":484,"./x-pseudo.js":484,"./yo":485,"./yo.js":485,"./zh-cn":486,"./zh-cn.js":486,"./zh-hk":487,"./zh-hk.js":487,"./zh-mo":488,"./zh-mo.js":488,"./zh-tw":489,"./zh-tw.js":489};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=493},494:function(t,e,r){var content=r(502);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("1b7833da",content,!0,{sourceMap:!1})},501:function(t,e,r){"use strict";r(494)},502:function(t,e,r){var o=r(31)(!1);o.push([t.i,".v-list-item{padding:0}.v-application p{padding:0;margin:4px 0}",""]),t.exports=o},529:function(t,e,r){"use strict";r.r(e);r(244);var o=r(0),n=r(103),l=r.n(n),c=(r(19),r(51),r(245),r(7),r(72),function(t){var e=(t/1).toFixed(0).replace(",",",");return t?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."):"0"}),v=r(492),d=o.a.extend({name:"IndexPage",components:{"chart-bar":v.default},data:function(){return{countries:[],global:{},sheet:!1,country:{},detailCountry:{},formatNumber:c,chartOption:{responsive:!0,maintainAspectRatio:!1},chartData:{labels:["1","2","3","4","5","6"],datasets:[{label:"1",backgroundColor:"#00589A",data:[7,2,4,2,5,6]},{label:"2",backgroundColor:"#49c10b",data:[8,2,4,2,4,7]},{label:"3",backgroundColor:"#ff6c0b",data:[3,2,3,4,5,6]}]}}},methods:{showItem:function(t){this.getDetailCountry(t.Country),this.country=t,this.sheet=!0},getDetailCountry:function(t){var e=this;l.a.get("https://restcountries.com/v3.1/name/".concat(t)).then((function(t){if(200===t.status){var data=t.data||[];e.detailCountry=data[0]||{}}})).catch((function(t){console.log(t)}))},loadData:function(){var t=this;l.a.get("https://api.covid19api.com/summary").then((function(e){if(200===e.status){var data=e.data,r=e.data&&e.data.Countries||[];t.countries=r.sort((function(a,b){return b.TotalConfirmed-a.TotalConfirmed})),t.global=data.Global||{}}})).catch((function(t){console.log(t)}))}},created:function(){this.loadData()}}),j=(r(501),r(81)),m=r(126),_=r.n(m),f=r(528),h=r(527),C=r(240),y=r(496),x=r(490),w=r(491),k=r(87),N=r(351),component=Object(j.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"row pb-4 justify-center"},[r("div",{staticClass:"col-4 pa-0 red--text"},[r("p",[t._v(t._s(t.formatNumber(t.global.NewDeaths)))]),t._v(" "),r("p",[t._v(t._s(t.formatNumber(t.global.TotalDeaths)))])]),t._v(" "),r("v-divider",{attrs:{vertical:""}}),t._v(" "),r("div",{staticClass:"text-center col-3 pa-0 yellow--text"},[r("p",[t._v(t._s(t.formatNumber(t.global.NewRecovered)))]),t._v(" "),r("p",[t._v(t._s(t.formatNumber(t.global.TotalRecovered)))])]),t._v(" "),r("v-divider",{attrs:{vertical:""}}),t._v(" "),r("div",{staticClass:"green--text col-4 pa-0 text-right"},[r("p",[t._v("+"+t._s(t.formatNumber(t.global.NewConfirmed)))]),t._v(" "),r("p",[t._v(t._s(t.formatNumber(t.global.TotalConfirmed)))])])],1),t._v(" "),r("chart-bar",{attrs:{chartData:t.chartData,options:t.chartOption}}),t._v(" "),r("v-list",{attrs:{dense:""}},t._l(t.countries,(function(e,i){return r("v-list-item",{key:i},[r("v-list-item-content",{on:{click:function(r){return t.showItem(e)}}},[r("div",{staticClass:"px-4 py-3"},[r("div",{staticClass:"row"},[r("p",{staticClass:"font-weight-bold"},[t._v(t._s(e.Country))]),t._v(" "),r("v-spacer"),t._v(" "),r("p",{staticClass:"green--text"},[t._v("+ "+t._s(t.formatNumber(e.NewConfirmed)))])],1),t._v(" "),r("div",{staticClass:"row"},[r("p",{staticClass:"red--text col-4 pa-0"},[t._v(t._s(t.formatNumber(e.NewDeaths)))]),t._v(" "),r("p",{staticClass:"yellow--text col-4 text-center pa-0"},[t._v(t._s(t.formatNumber(e.NewRecovered)))]),t._v(" "),r("p",{staticClass:"col-4 text-right pa-0"},[t._v(t._s(t.formatNumber(e.TotalConfirmed)))])])]),t._v(" "),i<t.countries.length-1?r("v-divider",{key:i}):t._e()],1)],1)})),1),t._v(" "),r("v-bottom-sheet",{attrs:{inset:""},model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[r("v-sheet",{staticClass:"text-center",attrs:{height:"500px"}},[r("div",{staticClass:"ma-3"},[r("div",{staticClass:"row pt-3"},[r("div",{staticClass:"col-4 pa-0 px-3"},[t.detailCountry&&t.detailCountry.coatOfArms?r("div",[r("v-img",{attrs:{src:t.detailCountry.coatOfArms.png}})],1):t._e()]),t._v(" "),r("div",{staticClass:"col-8 pa-0"},[r("div",{staticClass:"text-left px-3"},[r("p",{staticClass:"font-weight-bold"},[t._v(t._s(t.country.Country))]),t._v(" "),r("div",{staticClass:"row px-3 pt-2"},[r("p",{staticClass:"col-5"},[t._v("Population:")]),t._v(" "),r("p",{staticClass:"col-7"},[t._v(t._s(t.formatNumber(t.detailCountry.population)))])]),t._v(" "),r("div",{staticClass:"row px-3"},[r("p",{staticClass:"col-5"},[t._v("Capital:")]),t._v(" "),r("p",{staticClass:"col-7"},[t._v(t._s(t.detailCountry.capital&&t.detailCountry.capital[0]))])]),t._v(" "),r("div",{staticClass:"row px-3"},[r("p",{staticClass:"col-5"},[t._v("Region:")]),t._v(" "),r("p",{staticClass:"col-7"},[t._v(t._s(t.detailCountry.region))])]),t._v(" "),r("div",{staticClass:"row px-3"},[r("p",{staticClass:"col-5"},[t._v("Subregion:")]),t._v(" "),r("p",{staticClass:"col-7"},[t._v(t._s(t.detailCountry.subregion))])])])])]),t._v(" "),r("div",{staticClass:"row pt-5 pb-2 justify-center font-weight-bold"},[r("div",{staticClass:"col-4 pa-0 text-left"},[t._v("DEATHS")]),t._v(" "),r("div",{staticClass:"text-center col-3 pa-0"},[t._v("RECOVERED")]),t._v(" "),r("div",{staticClass:"col-4 pa-0 text-right"},[t._v("CONFIRMED")])]),t._v(" "),r("div",{staticClass:"row pb-4 justify-center"},[r("div",{staticClass:"col-4 pa-0 red--text text-left"},[r("p",[t._v(t._s(t.formatNumber(t.country.NewDeaths)))]),t._v(" "),r("p",[t._v(t._s(t.formatNumber(t.country.TotalDeaths)))])]),t._v(" "),r("v-divider",{attrs:{vertical:""}}),t._v(" "),r("div",{staticClass:"text-center col-3 pa-0 yellow--text"},[r("p",[t._v(t._s(t.formatNumber(t.country.NewRecovered)))]),t._v(" "),r("p",[t._v(t._s(t.formatNumber(t.country.TotalRecovered)))])]),t._v(" "),r("v-divider",{attrs:{vertical:""}}),t._v(" "),r("div",{staticClass:"green--text col-4 pa-0 text-right"},[r("p",[t._v("+"+t._s(t.formatNumber(t.country.NewConfirmed)))]),t._v(" "),r("p",[t._v(t._s(t.formatNumber(t.country.TotalConfirmed)))])])],1)])])],1)],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row pt-4 pb-2 justify-center font-weight-bold"},[r("div",{staticClass:"col-4 pa-0"},[t._v("DEATHS")]),t._v(" "),r("div",{staticClass:"text-center col-3 pa-0"},[t._v("RECOVERED")]),t._v(" "),r("div",{staticClass:"col-4 pa-0 text-right"},[t._v("CONFIRMED")])])}],!1,null,null,null);e.default=component.exports;_()(component,{ChartBar:r(492).default}),_()(component,{VBottomSheet:f.a,VDivider:h.a,VImg:C.a,VList:y.a,VListItem:x.a,VListItemContent:w.a,VSheet:k.a,VSpacer:N.a})}}]);