(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return i}),a.d(t,"pageQuery",function(){return c});var n=a(0),r=a.n(n),l=a(153);function i(e){e.data;return r.a.createElement(l.a,null)}var c="4255580879"},151:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=(a(33),a(152),r.a.createContext({})),o=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},153:function(e,t,a){"use strict";var n=a(157),r=a(0),l=a.n(r),i=a(4),c=a.n(i),o=a(151),u=a(150),m=(a(173),a(159)),d=a(174),s=a.n(d),p=function(){return l.a.createElement(o.a,{query:"1720105440",render:function(e){return l.a.createElement(s.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:m})},f=a(175),h=u.a.div.withConfig({displayName:"socialLinks__SocialLink",componentId:"sc-1jtytct-0"})(["font-size:1.5em;word-spacing:.4em;}"]),g=function(){return l.a.createElement(h,null,l.a.createElement("a",{href:"https://www.facebook.com/bipinpaulbedi",target:"_blank",rel:"noopener noreferrer"}," ",l.a.createElement(f.e,null)," "),l.a.createElement("a",{href:"https://twitter.com/bipinpaulbedi",target:"_blank",rel:"noopener noreferrer"}," ",l.a.createElement(f.l,null)),l.a.createElement("a",{href:"https://www.instagram.com/bipinpaulbedi/",target:"_blank",rel:"noopener noreferrer"}," ",l.a.createElement(f.g,null)),l.a.createElement("a",{href:"https://github.com/bipinpaulbedi",target:"_blank",rel:"noopener noreferrer"}," ",l.a.createElement(f.f,null)),l.a.createElement("a",{href:"https://www.linkedin.com/in/bipinpaulbedi/",target:"_blank",rel:"noopener noreferrer"}," ",l.a.createElement(f.i,null)),l.a.createElement("a",{href:"https://www.youtube.com/channel/UCgr_5XPAWL1M4nqVghy2X8A",target:"_blank",rel:"noopener noreferrer"}," ",l.a.createElement(f.m,null)),l.a.createElement("a",{href:"https://www.kaggle.com/bipinpaulbedi",target:"_blank",rel:"noopener noreferrer"}," ",l.a.createElement(f.h,null)),l.a.createElement("a",{href:"https://hub.docker.com/u/bipinpaulbedi",target:"_blank",rel:"noopener noreferrer"}," ",l.a.createElement(f.d,null)),l.a.createElement("a",{href:"https://stackoverflow.com/users/10877364/bipin-paul-bedi",target:"_blank",rel:"noopener noreferrer"}," ",l.a.createElement(f.k,null)),l.a.createElement("a",{href:"/404/"}," ",l.a.createElement(f.c,null)),l.a.createElement("a",{href:"/404/"}," ",l.a.createElement(f.a,null)),l.a.createElement("a",{href:"/404/"}," ",l.a.createElement(f.b,null)),l.a.createElement("a",{href:"/rss.xml"}," ",l.a.createElement(f.j,null)))},E=u.a.div.withConfig({displayName:"menu__TopMenu",componentId:"ldryeq-0"})(['text-transform:uppercase;a{margin:1em;color:#333;font-family:"Lora","Georgia","Palatino","Helvetica";font-size:.9em;:hover{color:#ff5252;}}}']),b=function(){return l.a.createElement(E,null,l.a.createElement("a",{href:"/"},"Home"),l.a.createElement("a",{href:"/tagcloud/"},"Tags"),l.a.createElement("a",{href:"/about"},"About"))},A=u.a.h1.withConfig({displayName:"header__HeaderBlock",componentId:"sc-31ozxh-0"})(["font-size:1.5em;text-transform:uppercase;display:flex;justify-content:center;div{margin-bottom:0;a p{font-size:0.5em;color:#bbb;}}"]),w=function(e){var t=e.siteMetadata,a=t.title,n=t.description;return l.a.createElement(l.a.Fragment,null,l.a.createElement(A,null,l.a.createElement("div",null,l.a.createElement(p,null)),l.a.createElement("div",null,l.a.createElement("a",{href:"/"},a,l.a.createElement("p",null,n)))),l.a.createElement(g,null),l.a.createElement(b,null))};w.propTypes={siteMetadata:c.a.shape({title:c.a.string,description:c.a.string})},w.defaultProps={siteMetadata:{title:"title",description:"description"}};var y=w,v=u.a.div.withConfig({displayName:"layout__Main",componentId:"ii2kc2-0"})(["margin:auto;max-width:700px;width:90%;text-align:center;"]),x=function(e){var t=e.children;return l.a.createElement(o.a,{query:"3986049164",render:function(e){return l.a.createElement(v,null,l.a.createElement(y,{siteMetadata:e.site.siteMetadata}),l.a.createElement("hr",null),t,l.a.createElement("hr",null),l.a.createElement("footer",null,"© ",(new Date).getFullYear(),", ",e.site.siteMetadata.author," ","All rights reserved."))},data:n})};x.propTypes={children:c.a.node.isRequired};t.a=x},157:function(e){e.exports={data:{site:{siteMetadata:{title:"paul blog",description:"learning adventures",author:"bipin paul bedi"}}}}},158:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(56),o=a(2),u=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},159:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACW0lEQVQ4y41UvUt6YRT2n2ho0lL8yA8Uo1BpETTEQXQSHZxCUPsDghYXcXASbKkgBCcHhdRFxZaGIARBsBZNUXAIiWgIv554D1y56r3+fgde7uW8533OOc/5kEBElsvl6iwWC8xms9VhOr4NXyRiYNyXgf3LZiegENhoNMLNzQ2urq6QTqcxHo9JL+RMIuZxPp/Tt9FowG63QyaTYX9/H1KpFIFAAN/f34KggoDT6ZT+n5+fcXx8jIODA1xcXKBYLMLpdEIul6PZbK45FkyZz8fX1xdcLhcUCgXC4TDphsMhTk9PycnHx8fuCLmL29tbZDIZxONxqFQq2Gw21Ot1VCoVWK1W0mWz2dUb0aJwgG9vbwgGg1Cr1TCbzQTocDjoy4ry+voqmJEgh6zHmNzd3UGpVMJisaBUKqHf76+lxo9MNELuglXP5/MRYCgUWuOUK4IYmGDKrVYLRqORuEqlUqR7eHjA2dkZVZ2z5c7mxKwAufLncjkYDAYcHh7i8fERn5+fODk5of6LRqNkw7XVzpQ5wGQyCZ1ORxHWajXSRSIRosDj8WAymZDu/f0dvV5vi9MtwOvra2i1Wmg0GlSrVdK1223o9XqYTCa8vLyQjk0Pay8m/IWxBZhIJOgxi5Bxx6TT6RCvrJUY0Pn5Odkwvjebe6sojPijoyOK0u12I5/PIxaL0fixGb68vITX6yV++e+2IuRX6v7+nhqZgezt7VGB/H4/BoMB3f/+/m7tTNFZ5i673S7K5TIKhQKenp7w8/OzFolYcwtum80NsjkhfMc7F+zmcv3ftc+XP/B5bUA3Y0/ZAAAAAElFTkSuQmCC",width:32,height:32,src:"/static/b52c9b1a7263cd726c180004934576e6/0823c/favicon-32x32.png",srcSet:"/static/b52c9b1a7263cd726c180004934576e6/0823c/favicon-32x32.png 1x"}}}}}}}]);
//# sourceMappingURL=component---src-templates-tag-cloud-list-js-14efb8d7f49f46babf8a.js.map