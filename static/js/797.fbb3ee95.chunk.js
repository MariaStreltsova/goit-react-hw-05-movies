"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[797],{9967:function(e,n,t){t.d(n,{O:function(){return p}});var r,c,u=t(168),o=t(501),a=t(6031),i=(0,a.ZP)(o.rU)(r||(r=(0,u.Z)(["\n  margin: ","px;\n  text-decoration: none;\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),(function(e){return e.theme.space[0]}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.fontSizes.m}),(function(e){return e.theme.fontWeights.normal}),(function(e){return e.theme.colors.accent})),s=t(184),f=function(e){var n=e.id,t=e.title;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("li",{children:(0,s.jsx)(i,{to:"/movies/".concat(n),children:(0,s.jsx)("h3",{children:t})})})})},l=a.ZP.ul(c||(c=(0,u.Z)(["\n  margin-left: ","px;\n  padding-left: ","px;\n"])),(function(e){return e.theme.space[4]}),(function(e){return e.theme.space[0]})),p=function(e){var n=e.movies;return(0,s.jsx)(l,{children:n.map((function(e){var n=e.id,t=e.original_title;return(0,s.jsx)(f,{title:t,id:n},n)}))})}},4797:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r,c,u,o=t(168),a=t(5861),i=t(885),s=t(7757),f=t.n(s),l=t(501),p=t(6871),h=t(5705),m=t(6066),d=t(2791),v=t(7182),g=t(9967),x=t(6031),b=t(184);function w(){var e,n=(0,d.useState)([]),t=(0,i.Z)(n,2),r=t[0],c=t[1],u=(0,l.lr)(),o=(0,i.Z)(u,2),s=o[0],x=o[1],w=(0,p.UO)().movieId,j=null!==(e=s.get("query"))&&void 0!==e?e:"";return(0,d.useEffect)((function(){var e=function(){var e=(0,a.Z)(f().mark((function e(n){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.FE)(n);case 3:if((t=e.sent).results.length){e.next=6;break}throw new Error("No results found");case 6:c(t.results),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),m.Am.error("No results found",{duration:3e3});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();""!==j&&e(j)}),[j]),w?(0,b.jsx)(p.j3,{}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.J9,{initialValues:{query:""},onSubmit:function(e,n){var t=e.query,r=n.resetForm;x({query:t}),r()},children:(0,b.jsxs)(k,{children:[(0,b.jsx)(y,{name:"query",type:"text",placeholder:"Search movies"}),(0,b.jsx)(Z,{type:"submit",children:"Search"})]})}),Object.keys(r).length>0&&(0,b.jsx)(g.O,{movies:r})]})}var k=(0,x.ZP)(h.l0)(r||(r=(0,o.Z)(["\n  margin-left: ","px;\n"])),(function(e){return e.theme.space[3]})),y=(0,x.ZP)(h.gN)(c||(c=(0,o.Z)(["\n  margin-right: ","px;\n  width: ","px;\n  height: ","px;\n  border-radius: ",";\n  :hover,\n  :focus {\n    border: "," ",";\n  }\n"])),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[8]}),(function(e){return e.theme.space[5]}),(function(e){return e.theme.radii.normal}),(function(e){return e.theme.borders.normal}),(function(e){return e.theme.colors.accent})),Z=x.ZP.button(u||(u=(0,o.Z)(["\n  height: ","px;\n  padding: ","px;\n  border-radius: ",";\n  :hover,\n  :focus {\n    border: "," ",";\n    background-color: ",";\n    font-weight: ",";\n  }\n"])),(function(e){return e.theme.space[5]}),(function(e){return e.theme.space[2]}),(function(e){return e.theme.radii.normal}),(function(e){return e.theme.borders.normal}),(function(e){return e.theme.colors.accent}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.fontWeights.bold}))},7182:function(e,n,t){t.d(n,{BG:function(){return l},FE:function(){return f},IV:function(){return p},lw:function(){return h},wS:function(){return s}});var r=t(5861),c=t(7757),u=t.n(c),o=t(4569),a=t.n(o);a().defaults.baseURL="https://api.themoviedb.org/3";var i="b955cfd3c9f73eb51718e31500dd3096",s=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a().get("/trending/movie/day?api_key=".concat(i));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a().get("/search/movie?api_key=".concat(i,"&query=").concat(n));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a().get("/movie/".concat(n,"?api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a().get("/movie/".concat(n,"/credits?api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a().get("/movie/".concat(n,"/reviews?api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=797.fbb3ee95.chunk.js.map