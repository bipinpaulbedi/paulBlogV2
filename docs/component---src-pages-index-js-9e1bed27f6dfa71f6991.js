(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(155),u=n(153),c=(n(74),n(55),n(36),n(174),n(176),n(146)),o=n.n(c),l=n(178),s=n(148),f=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)};function p(e,t){return function(){var n=arguments.length;if(0===n)return t();var r=arguments[n-1];return f(r)||"function"!=typeof r[e]?t.apply(this,arguments):r[e].apply(r,Array.prototype.slice.call(arguments,0,n-1))}}function d(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}function m(e){return function t(n){return 0===arguments.length||d(n)?t:e.apply(this,arguments)}}function h(e){return function t(n,r){switch(arguments.length){case 0:return t;case 1:return d(n)?t:m(function(t){return e(n,t)});default:return d(n)&&d(r)?t:d(n)?m(function(t){return e(t,r)}):d(r)?m(function(t){return e(n,t)}):e(n,r)}}}function y(e,t){switch(e){case 0:return function(){return t.apply(this,arguments)};case 1:return function(e){return t.apply(this,arguments)};case 2:return function(e,n){return t.apply(this,arguments)};case 3:return function(e,n,r){return t.apply(this,arguments)};case 4:return function(e,n,r,a){return t.apply(this,arguments)};case 5:return function(e,n,r,a,i){return t.apply(this,arguments)};case 6:return function(e,n,r,a,i,u){return t.apply(this,arguments)};case 7:return function(e,n,r,a,i,u,c){return t.apply(this,arguments)};case 8:return function(e,n,r,a,i,u,c,o){return t.apply(this,arguments)};case 9:return function(e,n,r,a,i,u,c,o,l){return t.apply(this,arguments)};case 10:return function(e,n,r,a,i,u,c,o,l,s){return t.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function g(e,t,n){return function(){for(var r=[],a=0,i=e,u=0;u<t.length||a<arguments.length;){var c;u<t.length&&(!d(t[u])||a>=arguments.length)?c=t[u]:(c=arguments[a],a+=1),r[u]=c,d(c)||(i-=1),u+=1}return i<=0?n.apply(this,r):y(i,g(e,r,n))}}function v(e,t,n){return function(){if(0===arguments.length)return n();var r=Array.prototype.slice.call(arguments,0),a=r.pop();if(!f(a)){for(var i=0;i<e.length;){if("function"==typeof a[e[i]])return a[e[i]].apply(a,r);i+=1}if(function(e){return null!=e&&"function"==typeof e["@@transducer/step"]}(a))return t.apply(null,r)(a)}return n.apply(this,arguments)}}function E(e,t){return Object.prototype.hasOwnProperty.call(t,e)}var b=m(function(e){return!!f(e)||!!e&&("object"==typeof e&&(!function(e){return"[object String]"===Object.prototype.toString.call(e)}(e)&&(1===e.nodeType?!!e.length:0===e.length||e.length>0&&(e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1)))))}),A=function(){function e(e){this.f=e}return e.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},e.prototype["@@transducer/result"]=function(e){return e},e.prototype["@@transducer/step"]=function(e,t){return this.f(e,t)},e}();var w=h(function(e,t){return y(e.length,function(){return e.apply(t,arguments)})});function x(e,t,n){for(var r=n.next();!r.done;){if((t=e["@@transducer/step"](t,r.value))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}r=n.next()}return e["@@transducer/result"](t)}function k(e,t,n,r){return e["@@transducer/result"](n[r](w(e["@@transducer/step"],e),t))}var O="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function j(e,t,n){if("function"==typeof e&&(e=function(e){return new A(e)}(e)),b(n))return function(e,t,n){for(var r=0,a=n.length;r<a;){if((t=e["@@transducer/step"](t,n[r]))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}r+=1}return e["@@transducer/result"](t)}(e,t,n);if("function"==typeof n["fantasy-land/reduce"])return k(e,t,n,"fantasy-land/reduce");if(null!=n[O])return x(e,t,n[O]());if("function"==typeof n.next)return x(e,t,n);if("function"==typeof n.reduce)return k(e,t,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}var T=function(){return this.xf["@@transducer/init"]()},R=function(){function e(e,t,n,r){this.valueFn=e,this.valueAcc=t,this.keyFn=n,this.xf=r,this.inputs={}}return e.prototype["@@transducer/init"]=T,e.prototype["@@transducer/result"]=function(e){var t;for(t in this.inputs)if(E(t,this.inputs)&&(e=this.xf["@@transducer/step"](e,this.inputs[t]))["@@transducer/reduced"]){e=e["@@transducer/value"];break}return this.inputs=null,this.xf["@@transducer/result"](e)},e.prototype["@@transducer/step"]=function(e,t){var n=this.keyFn(t);return this.inputs[n]=this.inputs[n]||[n,this.valueAcc],this.inputs[n][1]=this.valueFn(this.inputs[n][1],t),e},e}(),q=h(p("groupBy",g(4,[],v([],g(4,[],function(e,t,n,r){return new R(e,t,n,r)}),function(e,t,n,r){return j(function(r,a){var i=n(a);return r[i]=e(E(i,r)?r[i]:t,a),r},{},r)}))(function(e,t){return null==e&&(e=[]),e.push(t),e},null))),M=n(147);function I(){var e=o()(["\n  font-size: 1.2em;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  a {\n    color: #333;\n    :hover {\n      color: #ff5252;\n    }\n  }\n"]);return I=function(){return e},e}function C(){var e=o()(["\n  font-size: 2em;\n  color: #bbb;\n"]);return C=function(){return e},e}var S=M.a.div(C()),X=M.a.p(I()),F=function(){return a.a.createElement(s.a,{query:"3400912491",render:function(e){var t=e.allMarkdownRemark.edges,n=q(function(e){return e.node.frontmatter.year},t);return Object.keys(n).sort().reverse().map(function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(S,null,e),n[e].map(function(e){var t=e.node.frontmatter,n=(t.date,t.year,t.title);return a.a.createElement(X,null,a.a.createElement("a",{href:"/title}",key:n},n))}))})},data:l})};t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(u.a,{title:"Home",keywords:["bipin paul bedi"]}),a.a.createElement(F,null))}},148:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(0),a=n.n(r),i=n(4),u=n.n(i),c=(n(33),n(149),a.a.createContext({})),o=function(e){return a.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},149:function(e,t,n){var r;e.exports=(r=n(151))&&r.default||r},150:function(e){e.exports={data:{site:{siteMetadata:{title:"paul blog",description:"learning adventures",author:"bipin paul bedi"}}}}},151:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),a=n.n(r),i=n(4),u=n.n(i),c=n(57),o=n(2),l=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return n?a.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=l},152:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACW0lEQVQ4y41UvUt6YRT2n2ho0lL8yA8Uo1BpETTEQXQSHZxCUPsDghYXcXASbKkgBCcHhdRFxZaGIARBsBZNUXAIiWgIv554D1y56r3+fgde7uW8533OOc/5kEBElsvl6iwWC8xms9VhOr4NXyRiYNyXgf3LZiegENhoNMLNzQ2urq6QTqcxHo9JL+RMIuZxPp/Tt9FowG63QyaTYX9/H1KpFIFAAN/f34KggoDT6ZT+n5+fcXx8jIODA1xcXKBYLMLpdEIul6PZbK45FkyZz8fX1xdcLhcUCgXC4TDphsMhTk9PycnHx8fuCLmL29tbZDIZxONxqFQq2Gw21Ot1VCoVWK1W0mWz2dUb0aJwgG9vbwgGg1Cr1TCbzQTocDjoy4ry+voqmJEgh6zHmNzd3UGpVMJisaBUKqHf76+lxo9MNELuglXP5/MRYCgUWuOUK4IYmGDKrVYLRqORuEqlUqR7eHjA2dkZVZ2z5c7mxKwAufLncjkYDAYcHh7i8fERn5+fODk5of6LRqNkw7XVzpQ5wGQyCZ1ORxHWajXSRSIRosDj8WAymZDu/f0dvV5vi9MtwOvra2i1Wmg0GlSrVdK1223o9XqYTCa8vLyQjk0Pay8m/IWxBZhIJOgxi5Bxx6TT6RCvrJUY0Pn5Odkwvjebe6sojPijoyOK0u12I5/PIxaL0fixGb68vITX6yV++e+2IuRX6v7+nhqZgezt7VGB/H4/BoMB3f/+/m7tTNFZ5i673S7K5TIKhQKenp7w8/OzFolYcwtum80NsjkhfMc7F+zmcv3ftc+XP/B5bUA3Y0/ZAAAAAElFTkSuQmCC",width:32,height:32,src:"/static/b52c9b1a7263cd726c180004934576e6/0823c/favicon-32x32.png",srcSet:"/static/b52c9b1a7263cd726c180004934576e6/0823c/favicon-32x32.png 1x"}}}}}},153:function(e,t,n){"use strict";var r=n(154),a=n(0),i=n.n(a),u=n(4),c=n.n(u),o=n(158),l=n.n(o);function s(e){var t=e.description,n=e.lang,a=e.meta,u=e.keywords,c=e.title,o=r.data.site,s=t||o.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(u.length>0?{name:"keywords",content:u.join(", ")}:[]).concat(a)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=s},154:function(e){e.exports={data:{site:{siteMetadata:{title:"paul blog",description:"learning adventures",author:"bipin paul bedi"}}}}},155:function(e,t,n){"use strict";var r=n(146),a=n.n(r),i=n(150),u=n(0),c=n.n(u),o=n(4),l=n.n(o),s=n(148),f=n(147),p=(n(156),n(152)),d=n(157),m=n.n(d),h=function(){return c.a.createElement(s.a,{query:"1720105440",render:function(e){return c.a.createElement(m.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:p})},y=n(160);function g(){var e=a()(["\n    font-size: 1.5em;\n    word-spacing: .4em;\n}"]);return g=function(){return e},e}var v=f.a.div(g()),E=function(){return c.a.createElement(v,null,c.a.createElement("a",{href:"/"}," ",c.a.createElement(y.e,null)," "),c.a.createElement("a",{href:"/"}," ",c.a.createElement(y.k,null)),c.a.createElement("a",{href:"/"}," ",c.a.createElement(y.g,null)),c.a.createElement("a",{href:"/"}," ",c.a.createElement(y.f,null)),c.a.createElement("a",{href:"/"}," ",c.a.createElement(y.h,null)),c.a.createElement("a",{href:"/"}," ",c.a.createElement(y.l,null)),c.a.createElement("a",{href:"/"}," ",c.a.createElement(y.d,null)),c.a.createElement("a",{href:"/"}," ",c.a.createElement(y.j,null)),c.a.createElement("a",{href:"/"}," ",c.a.createElement(y.c,null)),c.a.createElement("a",{href:"/"}," ",c.a.createElement(y.a,null)),c.a.createElement("a",{href:"/"}," ",c.a.createElement(y.b,null)),c.a.createElement("a",{href:"/"}," ",c.a.createElement(y.i,null)))};function b(){var e=a()(['\n    text-transform: uppercase;\n    a {\n        margin: 1em;\n        color: #333;\n        font-family: "Lora", "Georgia", "Palatino", "Helvetica";\n        font-size: .9em;\n        :hover {\n            color: #ff5252;\n        }\n    }\n}']);return b=function(){return e},e}var A=f.a.div(b()),w=function(){return c.a.createElement(A,null,c.a.createElement("a",{href:"/"},"Home"),c.a.createElement("a",{href:"/"},"Tags"),c.a.createElement("a",{href:"/"},"About"),c.a.createElement("a",{href:"/"},"Contact"))};function x(){var e=a()(["\n  font-size: 1.5em;\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  div {\n    margin-bottom: 0;\n    a p {\n      font-size: 0.5em;\n      color: #bbb;\n    }\n  }\n"]);return x=function(){return e},e}var k=f.a.h1(x()),O=function(e){var t=e.siteMetadata,n=t.title,r=t.description;return c.a.createElement(c.a.Fragment,null,c.a.createElement(k,null,c.a.createElement("div",null,c.a.createElement(h,null)),c.a.createElement("div",null,c.a.createElement("a",{href:"/"},n,c.a.createElement("p",null,r)))),c.a.createElement(E,null),c.a.createElement(w,null))};O.propTypes={siteMetadata:l.a.shape({title:l.a.string,description:l.a.string})},O.defaultProps={siteMetadata:{title:"title",description:"description"}};var j=O;function T(){var e=a()(["\n  margin: auto;\n  max-width: 700px;\n  width: 90%;\n  text-align: center;\n"]);return T=function(){return e},e}var R=f.a.div(T()),q=function(e){var t=e.children;return c.a.createElement(s.a,{query:"3986049164",render:function(e){return c.a.createElement(R,null,c.a.createElement(j,{siteMetadata:e.site.siteMetadata}),c.a.createElement("hr",null),t,c.a.createElement("hr",null),c.a.createElement("footer",null,"© ",(new Date).getFullYear(),", ",e.site.siteMetadata.author," ","All rights reserved."))},data:i})};q.propTypes={children:l.a.node.isRequired};t.a=q},174:function(e,t,n){var r=n(25),a=n(35);n(175)("keys",function(){return function(e){return a(r(e))}})},175:function(e,t,n){var r=n(11),a=n(19),i=n(18);e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],u={};u[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},176:function(e,t,n){"use strict";var r=n(11),a=n(26),i=n(25),u=n(18),c=[].sort,o=[1,2,3];r(r.P+r.F*(u(function(){o.sort(void 0)})||!u(function(){o.sort(null)})||!n(177)(c)),"Array",{sort:function(e){return void 0===e?c.call(i(this)):c.call(i(this),a(e))}})},177:function(e,t,n){"use strict";var r=n(18);e.exports=function(e,t){return!!e&&r(function(){t?e.call(null,function(){},1):e.call(null)})}},178:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{date:"March 27, 2019",year:"2019",title:"57 counterproductive software design practices - anti patterns."}}},{node:{frontmatter:{date:"January 28, 2019",year:"2019",title:"9 laws of architecting microservices"}}},{node:{frontmatter:{date:"January 04, 2019",year:"2019",title:"phoenix/elixir - concurrency actor model with 'let it crash' philosophy"}}},{node:{frontmatter:{date:"October 20, 2018",year:"2018",title:"ELI5 - Asymptotic computational complexity simplified"}}},{node:{frontmatter:{date:"October 12, 2018",year:"2018",title:"L1 & L2 model regularizations techniques"}}},{node:{frontmatter:{date:"October 10, 2018",year:"2018",title:"Developers guide to designing REST endpoints"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-9e1bed27f6dfa71f6991.js.map