(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return f}),a.d(t,"pageQuery",function(){return g});var n=a(0),r=a.n(n),l=a(149),i=a(227),o=a(156),c=a(155),m=l.a.div.withConfig({displayName:"blogPostTemplate__Post",componentId:"ts63lh-0"})(["text-align:left;"]),s=l.a.h1.withConfig({displayName:"blogPostTemplate__TitleDisplay",componentId:"ts63lh-1"})(["margin-top:0;"]),u=l.a.h2.withConfig({displayName:"blogPostTemplate__SubTitleDisplay",componentId:"ts63lh-2"})(["font-size:1em;margin:0;"]),d=l.a.h3.withConfig({displayName:"blogPostTemplate__DateDisplay",componentId:"ts63lh-3"})(["font-size:0.8em;text-align:left;color:#ff5252;line-height:1.5em;"]),p=l.a.span.withConfig({displayName:"blogPostTemplate__Seperator",componentId:"ts63lh-4"})(["color:#bbb;"]);function f(e){var t=e.data.markdownRemark,a=t.frontmatter,n=a.title,l=a.date,f=a.pathForPage,g=a.subTitle,h=a.tags,E=a.categories,y=t.html,A=t.timeToRead,b=Object(i.distanceInWordsToNow)(l,{addSuffix:!0});return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:n,keywords:h}),r.a.createElement(s,null,r.a.createElement("a",{href:f},n)),r.a.createElement(u,null,g),r.a.createElement(d,null,b," ",r.a.createElement(p,null,"|")," ",A," min read"," ",r.a.createElement(p,null,"|")," ",r.a.createElement("a",{href:"/tagCloud/"+E},"#"+E)," ",h.map(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"/tagCloud/"+e},"#"+e)," ")})),r.a.createElement(m,{dangerouslySetInnerHTML:{__html:y}}))}var g="497345908"},150:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=(a(33),a(151),r.a.createContext({})),c=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},155:function(e,t,a){"use strict";var n=a(164),r=a(0),l=a.n(r),i=a(4),o=a.n(i),c=a(181),m=a.n(c);function s(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title,c=n.data.site,s=t||c.siteMetadata.description;return l.a.createElement(m.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=s},156:function(e,t,a){"use strict";var n=a(161),r=a(0),l=a.n(r),i=a(4),o=a.n(i),c=a(150),m=a(149),s=(a(179),a(163)),u=a(180),d=a.n(u),p=function(){return l.a.createElement(c.a,{query:"1720105440",render:function(e){return l.a.createElement(d.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:s})},f=a(185),g=m.a.div.withConfig({displayName:"socialLinks__SocialLink",componentId:"sc-1jtytct-0"})(["font-size:1.5em;word-spacing:.4em;}"]),h=function(){return l.a.createElement(g,null,l.a.createElement("a",{href:"/"}," ",l.a.createElement(f.e,null)," "),l.a.createElement("a",{href:"/"}," ",l.a.createElement(f.k,null)),l.a.createElement("a",{href:"/"}," ",l.a.createElement(f.g,null)),l.a.createElement("a",{href:"/"}," ",l.a.createElement(f.f,null)),l.a.createElement("a",{href:"/"}," ",l.a.createElement(f.h,null)),l.a.createElement("a",{href:"/"}," ",l.a.createElement(f.l,null)),l.a.createElement("a",{href:"/"}," ",l.a.createElement(f.d,null)),l.a.createElement("a",{href:"/"}," ",l.a.createElement(f.j,null)),l.a.createElement("a",{href:"/"}," ",l.a.createElement(f.c,null)),l.a.createElement("a",{href:"/"}," ",l.a.createElement(f.a,null)),l.a.createElement("a",{href:"/"}," ",l.a.createElement(f.b,null)),l.a.createElement("a",{href:"/"}," ",l.a.createElement(f.i,null)))},E=m.a.div.withConfig({displayName:"menu__TopMenu",componentId:"ldryeq-0"})(['text-transform:uppercase;a{margin:1em;color:#333;font-family:"Lora","Georgia","Palatino","Helvetica";font-size:.9em;:hover{color:#ff5252;}}}']),y=function(){return l.a.createElement(E,null,l.a.createElement("a",{href:"/"},"Home"),l.a.createElement("a",{href:"/tagcloud/"},"Tags"),l.a.createElement("a",{href:"/about"},"About"))},A=m.a.h1.withConfig({displayName:"header__HeaderBlock",componentId:"sc-31ozxh-0"})(["font-size:1.5em;text-transform:uppercase;display:flex;justify-content:center;div{margin-bottom:0;a p{font-size:0.5em;color:#bbb;}}"]),b=function(e){var t=e.siteMetadata,a=t.title,n=t.description;return l.a.createElement(l.a.Fragment,null,l.a.createElement(A,null,l.a.createElement("div",null,l.a.createElement(p,null)),l.a.createElement("div",null,l.a.createElement("a",{href:"/"},a,l.a.createElement("p",null,n)))),l.a.createElement(h,null),l.a.createElement(y,null))};b.propTypes={siteMetadata:o.a.shape({title:o.a.string,description:o.a.string})},b.defaultProps={siteMetadata:{title:"title",description:"description"}};var w=b,v=m.a.div.withConfig({displayName:"layout__Main",componentId:"ii2kc2-0"})(["margin:auto;max-width:700px;width:90%;text-align:center;"]),x=function(e){var t=e.children;return l.a.createElement(c.a,{query:"3986049164",render:function(e){return l.a.createElement(v,null,l.a.createElement(w,{siteMetadata:e.site.siteMetadata}),l.a.createElement("hr",null),t,l.a.createElement("hr",null),l.a.createElement("footer",null,"© ",(new Date).getFullYear(),", ",e.site.siteMetadata.author," ","All rights reserved."))},data:n})};x.propTypes={children:o.a.node.isRequired};t.a=x},161:function(e){e.exports={data:{site:{siteMetadata:{title:"paul blog",description:"learning adventures",author:"bipin paul bedi"}}}}},162:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(56),c=a(2),m=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=m},163:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACW0lEQVQ4y41UvUt6YRT2n2ho0lL8yA8Uo1BpETTEQXQSHZxCUPsDghYXcXASbKkgBCcHhdRFxZaGIARBsBZNUXAIiWgIv554D1y56r3+fgde7uW8533OOc/5kEBElsvl6iwWC8xms9VhOr4NXyRiYNyXgf3LZiegENhoNMLNzQ2urq6QTqcxHo9JL+RMIuZxPp/Tt9FowG63QyaTYX9/H1KpFIFAAN/f34KggoDT6ZT+n5+fcXx8jIODA1xcXKBYLMLpdEIul6PZbK45FkyZz8fX1xdcLhcUCgXC4TDphsMhTk9PycnHx8fuCLmL29tbZDIZxONxqFQq2Gw21Ot1VCoVWK1W0mWz2dUb0aJwgG9vbwgGg1Cr1TCbzQTocDjoy4ry+voqmJEgh6zHmNzd3UGpVMJisaBUKqHf76+lxo9MNELuglXP5/MRYCgUWuOUK4IYmGDKrVYLRqORuEqlUqR7eHjA2dkZVZ2z5c7mxKwAufLncjkYDAYcHh7i8fERn5+fODk5of6LRqNkw7XVzpQ5wGQyCZ1ORxHWajXSRSIRosDj8WAymZDu/f0dvV5vi9MtwOvra2i1Wmg0GlSrVdK1223o9XqYTCa8vLyQjk0Pay8m/IWxBZhIJOgxi5Bxx6TT6RCvrJUY0Pn5Odkwvjebe6sojPijoyOK0u12I5/PIxaL0fixGb68vITX6yV++e+2IuRX6v7+nhqZgezt7VGB/H4/BoMB3f/+/m7tTNFZ5i673S7K5TIKhQKenp7w8/OzFolYcwtum80NsjkhfMc7F+zmcv3ftc+XP/B5bUA3Y0/ZAAAAAElFTkSuQmCC",width:32,height:32,src:"/static/b52c9b1a7263cd726c180004934576e6/0823c/favicon-32x32.png",srcSet:"/static/b52c9b1a7263cd726c180004934576e6/0823c/favicon-32x32.png 1x"}}}}}},164:function(e){e.exports={data:{site:{siteMetadata:{title:"paul blog",description:"learning adventures",author:"bipin paul bedi"}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-template-js-2f11f3aa4c70f8880faf.js.map