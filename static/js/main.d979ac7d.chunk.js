(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){},148:function(e,t,a){e.exports=a(459)},153:function(e,t,a){},157:function(e,t,a){},159:function(e,t,a){},311:function(e,t,a){},456:function(e,t,a){},459:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),s=a.n(o),c=(a(153),a(34)),i=a.n(c),l=a(64),u=a(17),d=a(18),p=a(20),h=a(19),_=a(21),f=(a(157),a(87)),m=a.n(f),g=(a(159),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={search_value:"",search_value_second:"",multiple:!1},a._getProps=function(e){a.setState({target:e.target_Type[0],keyword:e.keyword_Type[0]})},a._targetSelectedChange=function(e){a.setState({target:e.target.value})},a._keywordSelectedChange=function(e){a.setState({keyword:e.target.value}),"multiple"===e.target.value?a.setState({multiple:!0}):a.setState({multiple:!1})},a._optionChange=function(){var e=document.getElementById("search_keyword").value;if(a.setState({search_value:e}),!0===a.state.multiple){var t=document.getElementById("search_keyword_second").value;a.setState({search_value_second:t})}return!0},a._searchStart=Object(l.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a._optionChange();case 2:a.props.reSearch_event(a.state.target,a.state.keyword,a.state.search_value,a.state.search_value_second);case 3:case"end":return e.stop()}},e,this)})),a._enterSearch=function(){13===window.event.keyCode&&a._searchStart()},a._enterFocusChange=function(){13===window.event.keyCode&&document.getElementById("search_keyword_second").focus()},a}return Object(_.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){this._getProps(this.props)}},{key:"render",value:function(){return r.a.createElement("div",{className:"navigtion_origin"},r.a.createElement("select",{onChange:this._targetSelectedChange,className:"select_Type"},this.props.target_Type.map(function(e,t){return r.a.createElement("option",{value:e,key:t},e)})),r.a.createElement("select",{onChange:this._keywordSelectedChange,className:"select_Type"},this.props.keyword_Type.map(function(e,t){return r.a.createElement("option",{value:e,key:t},e)})),r.a.createElement(m.a,{id:"search_keyword",label:"input SearchData",placeholder:"press Enter",variant:"outlined",onKeyUp:this.state.multiple?this._enterFocusChange:this._enterSearch}),this.state.multiple?r.a.createElement(m.a,{id:"search_keyword_second",label:"input SearchData",placeholder:"press Enter",variant:"outlined",onKeyUp:this._enterSearch}):null)}}]),t}(n.Component)),y=a(65),v=a(66),b=a.n(v),w=(a(118),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a.onOpenModal=function(){a.setState({open:!0})},a.onCloseModal=function(){a.setState({open:!1})},a}return Object(_.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.open;return r.a.createElement("div",{className:"contentArea"},r.a.createElement(b.a,{onClick:this.onOpenModal,variant:"contained",color:"primary",className:"contButton"},"( ",this.props.published_date," ) ",this.props.title),r.a.createElement(y.a,{open:e,onClose:this.onCloseModal,center:!0},r.a.createElement("h2",null," ",this.props.title," "),r.a.createElement("p",null,this.props.published_date),r.a.createElement("div",null,r.a.createElement("img",{src:this.props.images,alt:this.props.images})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.contentData}})))}}]),t}(n.Component)),k=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a.onOpenModal=function(){a.setState({open:!0})},a.onCloseModal=function(){a.setState({open:!1})},a}return Object(_.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.open;return r.a.createElement("div",{className:"contentArea"},r.a.createElement(b.a,{onClick:this.onOpenModal,variant:"contained",color:"primary",className:"contButton"},"( ",this.props.published_date," ",this.props.message," )"),r.a.createElement(y.a,{open:e,onClose:this.onCloseModal,center:!0},r.a.createElement("h2",null," ",this.props.author," ( ",this.props.tweet_id," ) "),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.published_date}}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.message}})))}}]),t}(n.Component),E=a(144),S=a.n(E),T=(a(311),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.rank+"\uc704 -"+this.props.rankTitle;return r.a.createElement("div",{className:"RankingDiv"},r.a.createElement(S.a,{label:e,variant:"outlined"}))}}]),t}(n.Component)),O=a(145),C=(a(456),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e={labels:this.props.scaleX,datasets:[{label:"Search_Count",tension:0,borderColor:"rgba(75,192,192,1)",pointBorderColor:"rgba(75,192,192,1)",pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",radius:0,borderWidth:1,pointHitRadius:5,data:this.props.scaleY}]};return r.a.createElement("div",{className:"chart"},r.a.createElement("h2",null,"Trend Graph(Day)"),r.a.createElement(O.a,{width:100,height:15,data:e}))}}]),t}(n.Component)),j=a(147),B=a.n(j),D=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={apiKey:"4370168664877217907",target_Type:["news","twitter","blog"],keyword_Type:["single","multiple"],period_Type:[],criteria_Type:["title","context"],target:"news",keyword:"single",period:null,criteria:"title",search_value:"\uc0bc\uc131",search_value_second:"",search_count:"30",loading:!1},a._setLoadingValue=function(e){a.setState({loading:e})},a._setChangeOption=function(e,t,n,r){a.setState({target:e,keyword:t,search_value:n,search_value_second:r}),a._startSearch()},a._multipleDOMSearch=function(e){var t=new Array;for(var n in e)(e[n].fields.content[0].includes(a.state.search_value_second)||e[n].fields.title[0].includes(a.state.search_value_second))&&t.push(e[n]);var r=null;for(var o in t){var s=new Array;if(t[o].fields.content[0].indexOf(a.state.search_value)){s=t[o].fields.content[0].split(a.state.search_value);for(var c=0;c<s.length;c++)c>=s.length-1?r+=s[c]:r+=s[c]+"<span style='background-color:yellow'>"+a.state.search_value+"</span>";t[o].fields.content[0]=r,console.log(r)}if(t[o].fields.content[0].indexOf(a.state.search_value_second)){s=t[o].fields.content[0].split(a.state.search_value_second);for(var i=0;i<s.length;i++)i>=s.length-1?r+=s[i]:r+=s[i]+"<span style='background-color:#00FEFE'>"+a.state.search_value_second+"</span>";t[o].fields.content[0]=r,console.log(r)}}return t},a._startSearch=Object(l.a)(i.a.mark(function e(){var t,n,r,o,s,c,l,u,d,p,h,_,f,m;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a._setLoadingValue(!0),e.next=3,a._getSearchData();case 3:if(t=e.sent,"multiple"!==a.state.keyword){e.next=14;break}return n=new Array,e.t0=n,e.next=9,a._multipleDOMSearch(t);case 9:e.t1=e.sent,e.t0.push.call(e.t0,e.t1),t=[],t=n.pop(),console.log(t);case 14:e.t2=a.state.target,e.next="news"===e.t2?17:"blog"===e.t2?19:"twitter"===e.t2?21:22;break;case 17:for(r in t)t[r].fields.content[0]=t[r].fields.content[0].replace("\n","<br />&nbsp&nbsp");return e.abrupt("break",24);case 19:for(o in t)t[o].fields.content[0]=t[o].fields.content[0].replace(/(\n|\r\n)/g,"<br />&nbsp&nbsp");return e.abrupt("break",24);case 21:return e.abrupt("break",24);case 22:return console.log("replaceDOM Error_startSerch funtion"),e.abrupt("break",24);case 24:for(s in t)c=t[s].fields.published_date[0].split("T"),t[s].fields.published_date[0]=c[0];if(a.setState({search_Data:t}),""===a.state.search_value){e.next=38;break}return e.next=29,a._getTopicTrendData();case 29:return l=e.sent,a.setState({topicTrendData:l}),e.next=33,a._getTrendSearchCount();case 33:for(h in u=e.sent,d=new Array([]),p=new Array([]),u)_=u[h].date.split("T"),u[h].date=_[0],f=u[h].date.split("-"),m=f[1]+"/"+f[2],d.push(m),p.push(u[h].orgCount);a.setState({TrendGraphDate:d,TrendGraphCount:p});case 38:a._setLoadingValue(!1);case 39:case"end":return e.stop()}},e,this)})),a._getSearchData=function(){return fetch("http://api.adams.ai/datamixiApi/search?key="+a.state.apiKey+"&target="+a.state.target+"&keyword="+a.state.search_value+"&count="+a.state.search_count).then(function(e){return e.json()}).then(function(e){return e.return_object[0].documents}).catch(function(e){console.log("getSocial Err :"+e)})},a._getTopicTrendData=function(){return fetch("http://api.adams.ai/datamixiApi/topictrend?key="+a.state.apiKey+"&target="+a.state.target+"&keyword="+a.state.search_value).then(function(e){return e.json()}).then(function(e){return e.return_object.trends[e.return_object.trends.length-1].nodes}).catch(function(e){console.log("getTopicTrend Err :"+e)})},a._getTrendSearchCount=function(){return fetch("http://api.adams.ai/datamixiApi/trend?key="+a.state.apiKey+"&target="+a.state.target+"&keyword="+a.state.search_value+"&timeunit=day").then(function(e){return e.json()}).then(function(e){return e.return_object.trend[0].data}).catch(function(e){console.log("getTrendSearch Err :"+e)})},a._renderBody=function(){return r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"body_trend"},a.state.topicTrendData?a._renderBody_topicTrend():"not data"),r.a.createElement("div",{className:"body_context"},a._rederBodyController(a.state.target)))},a._rederBodyController=function(e){switch(e){case"news":case"blog":return a._rederBody_contentNB();case"twitter":return a._rederBody_contentT();default:console.log("renderBody Error")}},a._rederBody_contentNB=function(){return a.state.search_Data.map(function(e,t){return r.a.createElement(w,{title:e.fields.title,images:e.fields.images,published_date:e.fields.published_date,contentData:e.fields.content,key:t})})},a._rederBody_contentT=function(){return a.state.search_Data.map(function(e,t){return r.a.createElement(k,{author:e.fields.author,tweet_id:e.fields.tweet_id,published_date:e.fields.published_date,message:e.fields.message,key:t})})},a._renderBody_topicTrend=function(){return a.state.topicTrendData.map(function(e){return r.a.createElement(T,{rankTitle:e.name,rank:e.id,key:e.id})})},a}return Object(_.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){this._startSearch()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"navigation"},r.a.createElement(g,{target_Type:this.state.target_Type,keyword_Type:this.state.keyword_Type,criteria_Type:this.state.criteria_Type,reSearch_event:this._setChangeOption})),this.state.loading?r.a.createElement("div",{className:"App_body_loading"},r.a.createElement(B.a,{size:100})):r.a.createElement("div",{className:"App_body"},this.state.search_Data?this._renderBody():"loading",r.a.createElement(C,{scaleX:this.state.TrendGraphDate,scaleY:this.state.TrendGraphCount})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[148,2,1]]]);
//# sourceMappingURL=main.d979ac7d.chunk.js.map