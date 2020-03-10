(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{BYEA:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return r}));t("rGqo"),t("q1tI");var n=t("7ljp"),s=t("7oih");t("qKvR");function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}const o={},b={_frontmatter:o},m=s.a;function r(e){let{components:a}=e,t=c(e,["components"]);return Object(n.b)(m,p({},b,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"There are two ways to install the package."),Object(n.b)("h3",null,"1. Package Manager"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(n.b)("pre",p({parentName:"div"},{className:"language-bash"}),Object(n.b)("code",p({parentName:"pre"},{className:"language-bash"}),Object(n.b)("span",p({parentName:"code"},{className:"token comment"}),"# npm"),"\n",Object(n.b)("span",p({parentName:"code"},{className:"token function"}),"npm")," i tippy.js\n\n",Object(n.b)("span",p({parentName:"code"},{className:"token comment"}),"# Yarn"),"\n",Object(n.b)("span",p({parentName:"code"},{className:"token function"}),"yarn")," ",Object(n.b)("span",p({parentName:"code"},{className:"token function"}),"add")," tippy.js"))),Object(n.b)("p",null,"In your application, import the ",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"tippy")," module, and the core CSS:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",p({parentName:"div"},{className:"language-js"}),Object(n.b)("code",p({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",p({parentName:"code"},{className:"token module keyword"}),"import")," tippy ",Object(n.b)("span",p({parentName:"code"},{className:"token module keyword"}),"from")," ",Object(n.b)("span",p({parentName:"code"},{className:"token string"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"'"),"tippy.js",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",p({parentName:"code"},{className:"token module keyword"}),"import")," ",Object(n.b)("span",p({parentName:"code"},{className:"token string"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"'"),"tippy.js/dist/tippy.css",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"This assumes you're using a module bundler like webpack, Rollup, or Parcel. If\nyou're getting an error message about ",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"process")," inside the browser,\n",Object(n.b)("a",p({parentName:"p"},{href:"../faq/#im-getting-uncaught-referenceerror-process-is-not-defined"}),"see the FAQ for help.")),Object(n.b)("p",null,'The core CSS is not required, but provides a base styling for you to use, and\nenables "click outside" behavior on iOS. If you\'d like to use Tippy "headless"\nwithout any of the default element rendering or CSS, use\n',Object(n.b)("a",p({parentName:"p"},{href:"../headless-tippy/"}),"Headless Tippy"),"."),Object(n.b)("h3",null,"2. CDN"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"html"},Object(n.b)("pre",p({parentName:"div"},{className:"language-html"}),Object(n.b)("code",p({parentName:"pre"},{className:"language-html"}),Object(n.b)("span",p({parentName:"code"},{className:"token comment"}),"\x3c!-- Development --\x3e"),"\n",Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),"script")," ",Object(n.b)("span",p({parentName:"span"},{className:"token attr-name"}),"src"),Object(n.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"')),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),Object(n.b)("span",p({parentName:"code"},{className:"token script"})),Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"</"),"script"),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),"script")," ",Object(n.b)("span",p({parentName:"span"},{className:"token attr-name"}),"src"),Object(n.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"')),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),Object(n.b)("span",p({parentName:"code"},{className:"token script"})),Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"</"),"script"),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),"\n\n",Object(n.b)("span",p({parentName:"code"},{className:"token comment"}),"\x3c!-- Production --\x3e"),"\n",Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),"script")," ",Object(n.b)("span",p({parentName:"span"},{className:"token attr-name"}),"src"),Object(n.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"https://unpkg.com/@popperjs/core@2",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"')),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),Object(n.b)("span",p({parentName:"code"},{className:"token script"})),Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"</"),"script"),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),"script")," ",Object(n.b)("span",p({parentName:"span"},{className:"token attr-name"}),"src"),Object(n.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"https://unpkg.com/tippy.js@6",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"')),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),Object(n.b)("span",p({parentName:"code"},{className:"token script"})),Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"</"),"script"),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">"))))),Object(n.b)("p",null,"Place them at the very bottom of the ",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"<body>"),", ensuring they are placed before\nyour own scripts. The version numbers after ",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"@")," are important, make sure they\ndon't get removed."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note")),Object(n.b)("p",{parentName:"blockquote"},"The CSS automatically gets injected into ",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"<head>")," with the CDN\n(",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"tippy-bundle"),"). With CSP enabled, you may need to separately link\n",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"dist/tippy.css")," and use ",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"dist/tippy.umd.min.js")," instead.")),Object(n.b)("h3",null,"React"),Object(n.b)("p",null,"Using React? Use the\n",Object(n.b)("a",p({parentName:"p"},{href:"https://github.com/atomiks/tippyjs-react"}),"official component package")," which\nintegrates well with React, allowing you to use Tippy declaratively."),Object(n.b)("h3",null,"Optional extra imports"),Object(n.b)("p",null,"For brevity, this documentation shows imports via a module bundler in Node. If\nyou're using the CDN, you'll be using ",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"<link>")," tags instead."),Object(n.b)("p",null,"This ",Object(n.b)("strong",{parentName:"p"},"optional")," extra import in the documentation:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",p({parentName:"div"},{className:"language-js"}),Object(n.b)("code",p({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",p({parentName:"code"},{className:"token module keyword"}),"import")," ",Object(n.b)("span",p({parentName:"code"},{className:"token string"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"'"),"tippy.js/animations/scale.css",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"Is equivalent to this using a CDN in the browser:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"html"},Object(n.b)("pre",p({parentName:"div"},{className:"language-html"}),Object(n.b)("code",p({parentName:"pre"},{className:"language-html"}),Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),"link"),"\n  ",Object(n.b)("span",p({parentName:"span"},{className:"token attr-name"}),"rel"),Object(n.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"stylesheet",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"')),"\n  ",Object(n.b)("span",p({parentName:"span"},{className:"token attr-name"}),"href"),Object(n.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"https://unpkg.com/tippy.js@6/animations/scale.css",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"')),"\n",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"/>"))))))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-v-6-getting-started-mdx-511af9cdb0bcdc895c06.js.map