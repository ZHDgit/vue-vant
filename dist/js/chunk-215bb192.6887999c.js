(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-215bb192"],{"02f1":function(t,a,e){"use strict";var s=e("f6b8"),i=e.n(s);i.a},"159b":function(t,a,e){var s=e("da84"),i=e("fdbc"),n=e("17c2"),r=e("9112");for(var o in i){var c=s[o],u=c&&c.prototype;if(u&&u.forEach!==n)try{r(u,"forEach",n)}catch(h){u.forEach=n}}},"17c2":function(t,a,e){"use strict";var s=e("b727").forEach,i=e("a640"),n=e("ae40"),r=i("forEach"),o=n("forEach");t.exports=r&&o?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},"26ad":function(t,a,e){},"365c":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"a",(function(){return n}));var s=e("b775");function i(t){return Object(s["a"])({method:"post",url:"/tabData",data:t})}function n(t){return Object(s["a"])({method:"post",url:"/goodsList",data:t})}},"3a3f":function(t,a,e){"use strict";var s=e("26ad"),i=e.n(s);i.a},4160:function(t,a,e){"use strict";var s=e("23e7"),i=e("17c2");s({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"6a8a":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer-box-body"},t._l(t.nav,(function(a,s){return e("router-link",{key:s,staticClass:"tab",attrs:{to:a.router,"active-class":"active"}},[e("van-icon",{staticClass:"icon",attrs:{name:a.class}}),e("span",{staticClass:"content"},[t._v(t._s(a.desc))])],1)})),1)},i=[],n={data:function(){return{nav:[{router:"/home",class:"wap-home-o",desc:"首页"},{router:"/shopping",class:"shop-o",desc:"商城"},{router:"/cat",class:"cart-o",desc:"购物车"},{router:"/personal",class:"friends-o",desc:"我的"}]}}},r=n,o=(e("3a3f"),e("2877")),c=Object(o["a"])(r,s,i,!1,null,null,null);a["a"]=c.exports},"8e74":function(t,a,e){"use strict";var s=e("a9d1"),i=e.n(s);i.a},"9cc4":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home-body"},[e("div",{staticClass:"search-box"},[e("van-image",{staticClass:"logo",attrs:{src:"/static/logo.png"}}),e("div",{staticClass:"search-input-box",on:{click:t.goSearch}},[e("van-icon",{staticClass:"icon",attrs:{name:"search"}})],1)],1),e("div",{staticClass:"herder-tab"},[e("TabPage",{attrs:{"tab-list":t.tabList}},[e("router-view")],1)],1),e("footerBar")],1)},i=[],n=e("365c"),r=e("6a8a"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main"},[e("div",{staticClass:"page-tab"},t._l(t.tabList,(function(a,s){return e("div",{key:s,class:t.nowPath==a.path?"tab-item tab-item_active":"tab-item"},[e("router-link",{attrs:{mode:"out-in",to:a.path}},[t._v(t._s(a.title))])],1)})),0),e("transition",{attrs:{name:t.slideDirection}},[t._t("default")],2)],1)},c=[],u=(e("4160"),e("159b"),{props:{tabList:Array},mounted:function(){this.nowPath=this.$route.path,this.initTouchedEvent()},data:function(){return{tabSwiper:{},slideDirection:"slideforward",nowPath:"",startX:"",startY:""}},methods:{touchedstartHandler:function(t){this.startX=t.changedTouches[0].pageX,this.startY=t.changedTouches[0].pageY},touchendHandler:function(t){var a=this,e=this.startX-t.changedTouches[0].pageX,s=this.startY-t.changedTouches[0].pageY,i=0;this.tabList.forEach((function(t,e){t.path===a.nowPath&&(i=e)}));var n=Math.abs(e)>Math.abs(s);n&&e>=0&&i<this.tabList.length-1&&(this.slideDirection="slideforward",this.$router.push({path:this.tabList[i+1].path})),n&&e<0&&i>0&&(this.slideDirection="slideback",this.$router.push({path:this.tabList[i-1].path}))},initTouchedEvent:function(){this.$el.addEventListener("touchend",this.touchendHandler.bind(this))}},watch:{$route:function(t){this.nowPath=t.path}}}),h=u,l=(e("02f1"),e("2877")),d=Object(l["a"])(h,o,c,!1,null,null,null),f=d.exports,b={components:{TabPage:f,footerBar:r["a"]},data:function(){return{searchText:"",tabList:[]}},computed:{},watch:{},methods:{goSearch:function(){this.$router.push({path:"/search"})}},beforeCreate:function(){},created:function(){var t=this;Object(n["b"])().then((function(a){200===a.data.code&&(t.tabList=a.data.tabList)}))},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},p=b,v=(e("8e74"),Object(l["a"])(p,s,i,!1,null,"43e9c294",null));a["default"]=v.exports},a9d1:function(t,a,e){},f6b8:function(t,a,e){},fdbc:function(t,a){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-215bb192.6887999c.js.map