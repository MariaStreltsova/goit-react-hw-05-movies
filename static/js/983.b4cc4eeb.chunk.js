"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{5084:function(n,e,t){t.d(e,{O:function(){return l}});var r,c,a=t(168),u=t(501),o=t(6031),s=(0,o.ZP)(u.rU)(r||(r=(0,a.Z)(["\n  margin: ","px;\n  text-decoration: none;\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.accent})),i=t(184),f=function(n){var e=n.id,t=n.title;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("li",{children:(0,i.jsx)(s,{to:"/movies/".concat(e),children:(0,i.jsx)("h3",{children:t})})})})},p=o.ZP.ul(c||(c=(0,a.Z)(["\n  margin-left: ","px;\n  padding-left: ","px;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[0]})),l=function(n){var e=n.movies;return(0,i.jsx)(p,{children:e.map((function(n){var e=n.id,t=n.original_title;return(0,i.jsx)(f,{title:t,id:e},e)}))})}},3983:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r,c=t(168),a=t(5861),u=t(885),o=t(7757),s=t.n(o),i=t(5084),f=t(2791),p=t(6031),l=t(7182),h=t(184);function v(){var n=(0,f.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1];return(0,f.useEffect)((function(){function n(){return(n=(0,a.Z)(s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.wS)();case 3:e=n.sent,t=e.results,r(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m,{children:"Trending Today"}),t&&(0,h.jsx)(i.O,{movies:t})]})}var m=p.ZP.h2(r||(r=(0,c.Z)(["\n  margin: ","px;\n  text-decoration: none;\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.bold}))},7182:function(n,e,t){t.d(e,{BG:function(){return f},FE:function(){return i},IV:function(){return p},lw:function(){return l},wS:function(){return s}});var r=t(5861),c=t(7757),a=t.n(c),u=t(4569),o=t.n(u);o().defaults.baseURL="https://api.themoviedb.org/3";o().defaults.params={api_key:"b955cfd3c9f73eb51718e31500dd3096"};var s=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("/trending/movie/day");case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("/search/movie?query=".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("/movie/".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("/movie/".concat(e,"/credits"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("/movie/".concat(e,"/reviews"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=983.b4cc4eeb.chunk.js.map