(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(152),i=a(151);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},149:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=(a(33),a(150),r.a.createContext({})),o=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},151:function(e,t,a){"use strict";var n=a(156),r=a(0),l=a.n(r),i=a(4),c=a.n(i),o=a(162),u=a.n(o);function s(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title,o=n.data.site,s=t||o.siteMetadata.description;return l.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=s},152:function(e,t,a){"use strict";var n=a(147),r=a.n(n),l=a(153),i=a(0),c=a.n(i),o=a(4),u=a.n(o),s=a(149),d=a(148),m=(a(160),a(155)),f=a(161),p=a.n(f),h=function(){return c.a.createElement(s.a,{query:"1720105440",render:function(e){return c.a.createElement(p.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:m})},E=a(168);function g(){var e=r()(["\n    font-size: 1.5em;\n    word-spacing: .4em;\n}"]);return g=function(){return e},e}var A=d.a.div(g()),v=function(){return c.a.createElement(A,null,c.a.createElement("a",{href:"/"}," ",c.a.createElement(E.e,null)," "),c.a.createElement("a",{href:"/"}," ",c.a.createElement(E.k,null)),c.a.createElement("a",{href:"/"}," ",c.a.createElement(E.g,null)),c.a.createElement("a",{href:"/"}," ",c.a.createElement(E.f,null)),c.a.createElement("a",{href:"/"}," ",c.a.createElement(E.h,null)),c.a.createElement("a",{href:"/"}," ",c.a.createElement(E.l,null)),c.a.createElement("a",{href:"/"}," ",c.a.createElement(E.d,null)),c.a.createElement("a",{href:"/"}," ",c.a.createElement(E.j,null)),c.a.createElement("a",{href:"/"}," ",c.a.createElement(E.c,null)),c.a.createElement("a",{href:"/"}," ",c.a.createElement(E.a,null)),c.a.createElement("a",{href:"/"}," ",c.a.createElement(E.b,null)),c.a.createElement("a",{href:"/"}," ",c.a.createElement(E.i,null)))};function y(){var e=r()(['\n    text-transform: uppercase;\n    a {\n        margin: 1em;\n        color: #333;\n        font-family: "Lora", "Georgia", "Palatino", "Helvetica";\n        font-size: .9em;\n        :hover {\n            color: #ff5252;\n        }\n    }\n}']);return y=function(){return e},e}var x=d.a.div(y()),b=function(){return c.a.createElement(x,null,c.a.createElement("a",{href:"/"},"Home"),c.a.createElement("a",{href:"/tagcloud/"},"Tags"),c.a.createElement("a",{href:"/"},"About"),c.a.createElement("a",{href:"/"},"Contact"))};function w(){var e=r()(["\n  font-size: 1.5em;\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  div {\n    margin-bottom: 0;\n    a p {\n      font-size: 0.5em;\n      color: #bbb;\n    }\n  }\n"]);return w=function(){return e},e}var T=d.a.h1(w()),R=function(e){var t=e.siteMetadata,a=t.title,n=t.description;return c.a.createElement(c.a.Fragment,null,c.a.createElement(T,null,c.a.createElement("div",null,c.a.createElement(h,null)),c.a.createElement("div",null,c.a.createElement("a",{href:"/"},a,c.a.createElement("p",null,n)))),c.a.createElement(v,null),c.a.createElement(b,null))};R.propTypes={siteMetadata:u.a.shape({title:u.a.string,description:u.a.string})},R.defaultProps={siteMetadata:{title:"title",description:"description"}};var q=R;function C(){var e=r()(["\n  margin: auto;\n  max-width: 700px;\n  width: 90%;\n  text-align: center;\n"]);return C=function(){return e},e}var I=d.a.div(C()),M=function(e){var t=e.children;return c.a.createElement(s.a,{query:"3986049164",render:function(e){return c.a.createElement(I,null,c.a.createElement(q,{siteMetadata:e.site.siteMetadata}),c.a.createElement("hr",null),t,c.a.createElement("hr",null),c.a.createElement("footer",null,"© ",(new Date).getFullYear(),", ",e.site.siteMetadata.author," ","All rights reserved."))},data:l})};M.propTypes={children:u.a.node.isRequired};t.a=M},153:function(e){e.exports={data:{site:{siteMetadata:{title:"paul blog",description:"learning adventures",author:"bipin paul bedi"}}}}},154:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(57),o=a(2),u=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},155:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACW0lEQVQ4y41UvUt6YRT2n2ho0lL8yA8Uo1BpETTEQXQSHZxCUPsDghYXcXASbKkgBCcHhdRFxZaGIARBsBZNUXAIiWgIv554D1y56r3+fgde7uW8533OOc/5kEBElsvl6iwWC8xms9VhOr4NXyRiYNyXgf3LZiegENhoNMLNzQ2urq6QTqcxHo9JL+RMIuZxPp/Tt9FowG63QyaTYX9/H1KpFIFAAN/f34KggoDT6ZT+n5+fcXx8jIODA1xcXKBYLMLpdEIul6PZbK45FkyZz8fX1xdcLhcUCgXC4TDphsMhTk9PycnHx8fuCLmL29tbZDIZxONxqFQq2Gw21Ot1VCoVWK1W0mWz2dUb0aJwgG9vbwgGg1Cr1TCbzQTocDjoy4ry+voqmJEgh6zHmNzd3UGpVMJisaBUKqHf76+lxo9MNELuglXP5/MRYCgUWuOUK4IYmGDKrVYLRqORuEqlUqR7eHjA2dkZVZ2z5c7mxKwAufLncjkYDAYcHh7i8fERn5+fODk5of6LRqNkw7XVzpQ5wGQyCZ1ORxHWajXSRSIRosDj8WAymZDu/f0dvV5vi9MtwOvra2i1Wmg0GlSrVdK1223o9XqYTCa8vLyQjk0Pay8m/IWxBZhIJOgxi5Bxx6TT6RCvrJUY0Pn5Odkwvjebe6sojPijoyOK0u12I5/PIxaL0fixGb68vITX6yV++e+2IuRX6v7+nhqZgezt7VGB/H4/BoMB3f/+/m7tTNFZ5i673S7K5TIKhQKenp7w8/OzFolYcwtum80NsjkhfMc7F+zmcv3ftc+XP/B5bUA3Y0/ZAAAAAElFTkSuQmCC",width:32,height:32,src:"/static/b52c9b1a7263cd726c180004934576e6/0823c/favicon-32x32.png",srcSet:"/static/b52c9b1a7263cd726c180004934576e6/0823c/favicon-32x32.png 1x"}}}}}},156:function(e){e.exports={data:{site:{siteMetadata:{title:"paul blog",description:"learning adventures",author:"bipin paul bedi"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-746b1faff695c15d9f3b.js.map