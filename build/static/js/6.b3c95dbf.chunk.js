(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{72:function(t,e,n){t.exports={bcgr:"Reviews_bcgr__1-UiY"}},75:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(19),s=n(20),o=n(23),a=n(22),i=n(72),h=n.n(i),u=n(0),l=n(21),j=function(t){Object(o.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={content:[]},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.moviesId;Object(l.e)(e).then((function(e){t.setState({content:e.results})}))}},{key:"render",value:function(){return console.log(this.state.content),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("ul",{className:h.a.bcgr,children:this.state.content.length>0?this.state.content.map((function(t){return Object(c.jsxs)("li",{children:[Object(c.jsxs)("h2",{children:["Author:",t.author]}),Object(c.jsx)("p",{children:t.content})]},t.id)})):Object(c.jsx)("p",{children:"There are no reviews yet."})})})}}]),n}(u.Component);e.default=j}}]);
//# sourceMappingURL=6.b3c95dbf.chunk.js.map