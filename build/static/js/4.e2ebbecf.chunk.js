(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{66:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},69:function(t,e,n){"use strict";var r=n(70),a=n(14);function o(t,e){return e.encode?e.strict?r(t):encodeURIComponent(t):t}function c(t){return Array.isArray(t)?t.sort():"object"===typeof t?c(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}e.extract=function(t){return t.split("?")[1]||""},e.parse=function(t,e){var n=function(t){var e;switch(t.arrayFormat){case"index":return function(t,n,r){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===r[t]&&(r[t]={}),r[t][e[1]]=n):r[t]=n};case"bracket":return function(t,n,r){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==r[t]?r[t]=[].concat(r[t],n):r[t]=[n]:r[t]=n};default:return function(t,e,n){void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}(e=a({arrayFormat:"none"},e)),r=Object.create(null);return"string"!==typeof t?r:(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach((function(t){var e=t.replace(/\+/g," ").split("="),a=e.shift(),o=e.length>0?e.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(a),o,r)})),Object.keys(r).sort().reduce((function(t,e){var n=r[e];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?t[e]=c(n):t[e]=n,t}),Object.create(null))):r},e.stringify=function(t,e){var n=function(t){switch(t.arrayFormat){case"index":return function(e,n,r){return null===n?[o(e,t),"[",r,"]"].join(""):[o(e,t),"[",o(r,t),"]=",o(n,t)].join("")};case"bracket":return function(e,n){return null===n?o(e,t):[o(e,t),"[]=",o(n,t)].join("")};default:return function(e,n){return null===n?o(e,t):[o(e,t),"=",o(n,t)].join("")}}}(e=a({encode:!0,strict:!0,arrayFormat:"none"},e));return t?Object.keys(t).sort().map((function(r){var a=t[r];if(void 0===a)return"";if(null===a)return o(r,e);if(Array.isArray(a)){var c=[];return a.slice().forEach((function(t){void 0!==t&&c.push(n(r,t,c.length))})),c.join("&")}return o(r,e)+"="+o(a,e)})).filter((function(t){return t.length>0})).join("&"):""}},70:function(t,e,n){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}},73:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var r=n(1),a=n(66),o=n(19),c=n(20),i=n(23),u=n(22),s=n(0),l=n(69),f=n.n(l),h=n(21),p=n(8),v=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={results:[],value:""},t.handleSubmit=function(e){e.preventDefault(),t.state.value&&t.props.history.push({pathname:t.props.location.pathname,search:"query=".concat(t.state.value)})},t.handleChange=function(e){var n=e.target,r=n.name,o=n.value;t.setState(Object(a.a)({},r,o))},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.location.search.value;console.log(t);var e=f.a.parse(this.props.location.search).query;e&&this.searchMovie(e)}},{key:"componentDidUpdate",value:function(t,e){var n=f.a.parse(t.location.search).query,r=f.a.parse(this.props.location.search).query;n!==r&&this.searchMovie(r)}},{key:"searchMovie",value:function(t){var e=this;Object(h.b)(t).then((function(t){e.setState({results:t.results})}))}},{key:"render",value:function(){var t=this;console.log(this.state);var e=this.state.value;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(r.jsx)("input",{name:"value",onChange:this.handleChange,value:e,autoFocus:!0}),Object(r.jsx)("button",{type:"submit",children:"Search"})]}),Object(r.jsx)("ul",{children:this.state.results.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(p.b,{to:{pathname:"/movies/".concat(e.id),state:{from:t.props.location}},children:e.original_name||e.name||e.original_title||e.title})},e.id)}))})]})}}]),n}(s.Component)}}]);
//# sourceMappingURL=4.e2ebbecf.chunk.js.map