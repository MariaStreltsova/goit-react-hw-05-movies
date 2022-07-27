"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[879],{1879:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var r,c,o,a,s=t(168),u=t(2791),i=t(501),p=t(6871),f=t(6031),l=t(5861),h=t(885),d=t(7757),v=t.n(d),m=t(6066),x=t(7182),g=f.ZP.div(r||(r=(0,s.Z)(["\n  padding: ","px;\n"])),(function(e){return e.theme.space[4]})),w=t(184),j=function(){var e=(0,u.useState)({}),n=(0,h.Z)(e,2),t=n[0],r=n[1],c=(0,p.UO)().movieId;if((0,u.useEffect)((function(){function e(){return e=(0,l.Z)(v().mark((function e(n){var t;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,x.BG)(n);case 3:t=e.sent,r(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m.Am.error("Page not found",{duration:3e3});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),e.apply(this,arguments)}!function(n){e.apply(this,arguments)}(c)}),[c]),Object.keys(t).length>0){var o=t.title,a=t.vote_average,s=t.overview,i=t.genres,f=t.poster_path,d=10*a,j=i.map((function(e){return e.name})).join(", ");return(0,w.jsxs)(g,{children:[(0,w.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(f),alt:o}),(0,w.jsx)("h2",{children:o}),(0,w.jsxs)("p",{children:["User score: ",(0,w.jsxs)("span",{children:[d,"%"]})]}),(0,w.jsx)("h3",{children:"Overview"}),(0,w.jsx)("p",{children:s}),(0,w.jsx)("h4",{children:"Genres"}),(0,w.jsx)("p",{children:j})]})}},b=(0,u.lazy)((function(){return t.e(786).then(t.bind(t,3786))})),k=(0,u.lazy)((function(){return t.e(193).then(t.bind(t,8193))})),Z=(0,f.ZP)(i.rU)(c||(c=(0,s.Z)(["\n  padding: ","px;\n  color: ",";\n  font-weight: ",";\n  margin-bottom: ","px;\n  margin-left: ","px;\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),(function(e){return e.theme.space[3]}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.fontWeights.bold}),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[3]}),(function(e){return e.theme.colors.accent})),y=f.ZP.div(o||(o=(0,s.Z)(["\n  margin-bottom: ","px;\n  margin-left: ","px;\n"])),(function(e){return e.theme.space[4]}),(function(e){return e.theme.space[4]})),_=(0,f.ZP)(i.rU)(a||(a=(0,s.Z)(["\n  text-decoration: none;\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  margin-right: ","px;\n  &.active {\n    color: ",";\n  }\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.fontSizes.l}),(function(e){return e.theme.fontWeights.bold}),(function(e){return e.theme.space[4]}),(function(e){return e.theme.colors.accent}),(function(e){return e.theme.colors.accent})),U=function(){var e,n,t=(0,p.TH)(),r=(0,p.UO)().movieId,c=null!==(e=null===(n=t.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return r&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Z,{to:c,children:"Go back"}),(0,w.jsx)(j,{}),(0,w.jsxs)(y,{children:[(0,w.jsx)("h3",{children:"Additional information"}),(0,w.jsx)(_,{to:"/movies/:movieId/cast",children:"Cast"}),(0,w.jsx)(_,{to:"/reviews",children:"Reviews"})]})," ",(0,w.jsx)(u.Suspense,{fallback:(0,w.jsx)(w.Fragment,{children:"Loading.."}),children:(0,w.jsxs)(p.Z5,{children:[(0,w.jsx)(p.AW,{path:"/cast",element:(0,w.jsx)(b,{})}),(0,w.jsx)(p.AW,{path:"reviews",element:(0,w.jsx)(k,{})})]})})]})}},7182:function(e,n,t){t.d(n,{BG:function(){return p},FE:function(){return i},IV:function(){return f},lw:function(){return l},wS:function(){return u}});var r=t(5861),c=t(7757),o=t.n(c),a=t(4569),s=t.n(a);s().defaults.baseURL="https://api.themoviedb.org/3";s().defaults.params={api_key:"b955cfd3c9f73eb51718e31500dd3096"};var u=function(){var e=(0,r.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/trending/movie/day");case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/search/movie?query=".concat(n));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(n));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(n,"/credits"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(n,"/reviews"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=879.b364bfe5.chunk.js.map