"use strict";(self.webpackChunkANKONA=self.webpackChunkANKONA||[]).push([[664],{664:function(e,a,n){n.d(a,{Z:function(){return P}});var s=n(9439),t=n(2791),c=n(1087);var i=n.p+"static/media/logo.c53f85794aada7f8d7dfb577eb3c1543.svg";var r=n.p+"static/media/logoDesk.7161c29b0df79cc305171964042dd8c3.svg",l=n(5667);var o=n.p+"static/media/searchIcon.8663b9aac198f3260439a974878d9a6c.svg";var u=n.p+"static/media/searchIconInput.be226e16ef6c98953446669cc5d07bf7.svg",d={navSearch__button:"NavSearch_navSearch__button__QzqVs",searchIcon:"NavSearch_searchIcon__AiryQ",searchContainer:"NavSearch_searchContainer__Uuk5a",inputContainer:"NavSearch_inputContainer__0yTTE",searchInput:"NavSearch_searchInput__T3D3I",searchIconInput:"NavSearch_searchIconInput__8HCFo"},_=n(184),h=function(e){var a=e.style,n=(0,t.useState)(!1),c=(0,s.Z)(n,2),i=c[0],r=c[1];return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("button",{className:d.navSearch__button,style:a,"aria-label":"Search",onClick:function(){r(!0),l.OK.scrollTo("goods",{smooth:!0,offset:-70,duration:500})},children:(0,_.jsx)("img",{className:d.searchIcon,src:o,alt:"Search"})}),i&&(0,_.jsx)("div",{className:d.bgShadow,onClick:function(e){e.target===e.currentTarget&&(r(!1),document.body.style.overflow="auto")},children:(0,_.jsx)("div",{className:"container ".concat(d.searchContainer),children:(0,_.jsxs)("div",{className:d.inputContainer,children:[(0,_.jsx)("input",{type:"text",className:d.searchInput,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u043e\u0448\u0443\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0442"}),(0,_.jsx)("img",{className:d.searchIconInput,src:u,alt:"searchIconInput"})]})})})]})},m=n(1314),v="NavBar_menu__list__7aOp7",f="NavBar_menu__list_link__NW5BA",g="NavBar_menu__list_item__TIC3o",N="NavBar_navBar__4kTTi",x="NavBar_navigation__SpBef",j="NavBar_mobileNavigation__QcWSy",b="NavBar_hamburgerMenu__UC1uN",p="NavBar_menuList__container__Duamz",S="NavBar_nav__1DyUv",y="NavBar_bgShadow__2S6EA",C=function(e){var a={opacity:0,y:-40},n={opacity:1,y:0};return(0,_.jsx)("div",{className:y,children:(0,_.jsx)("div",{className:"container "+p,children:(0,_.jsxs)("ul",{className:v,children:[(0,_.jsx)(l.rU,{onClick:function(){return e.isMobile&&e.closeMobileMenu()},className:f,to:"about",spy:!0,smooth:!0,offset:-70,duration:500,children:(0,_.jsx)(m.E.li,{initial:a,animate:n,transition:{delay:.05},className:g,children:"\u041f\u0440\u043e \u043d\u0430\u0441"})}),(0,_.jsx)(l.rU,{onClick:function(){return e.isMobile&&e.closeMobileMenu()},className:f,to:"goods",spy:!0,smooth:!0,offset:-70,duration:500,children:(0,_.jsx)(m.E.li,{initial:a,animate:n,transition:{delay:.1},className:g,children:"\u0422\u043e\u0432\u0430\u0440\u0438"})}),(0,_.jsx)(l.rU,{onClick:function(){return e.isMobile&&e.closeMobileMenu()},className:f,to:"tradeMarks",spy:!0,smooth:!0,offset:-70,duration:500,children:(0,_.jsx)(m.E.li,{initial:a,animate:n,transition:{delay:.2},className:g,children:"\u0422\u043e\u0440\u0433\u043e\u0432\u0456 \u043c\u0430\u0440\u043a\u0438"})}),(0,_.jsx)(l.rU,{onClick:function(){return e.isMobile&&e.closeMobileMenu()},className:f,to:"team",spy:!0,smooth:!0,offset:-70,duration:500,children:(0,_.jsx)(m.E.li,{initial:a,animate:n,transition:{delay:.3},className:g,children:"\u041a\u043e\u043c\u0430\u043d\u0434\u0430"})}),(0,_.jsx)(c.rU,{onClick:function(){return e.isMobile&&e.closeMobileMenu()},className:f,to:"/blog",children:(0,_.jsx)(m.E.li,{initial:a,animate:n,transition:{delay:.4},className:g,children:"\u0411\u043b\u043e\u0433"})})]})})})};var M=n.p+"static/media/burgerMenu.a0126a8fc4403527ad28731f97366787.svg";var w=n.p+"static/media/burgerMenuClose.a4ca55899d89e648e17a5e85032ae584.svg",k=function(){var e=(0,t.useState)(!1),a=(0,s.Z)(e,2),n=a[0],c=a[1],i=(0,_.jsx)("img",{src:M,alt:"\u041c\u0435\u043d\u044e","aria-label":"\u041c\u0435\u043d\u044e",className:b,onClick:function(){return c(!n)}}),r=(0,_.jsx)("img",{src:w,alt:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438 \u043c\u0435\u043d\u044e","aria-label":"\u0417\u0430\u043a\u0440\u0438\u0442\u0438 \u043c\u0435\u043d\u044e",className:b,onClick:function(){return c(!n)}});return(0,_.jsxs)("nav",{className:j,children:[n?r:i,n&&(0,_.jsx)(C,{isMobile:!0,closeMobileMenu:function(){return c(!1)}})]})},I=function(){return(0,_.jsx)("nav",{className:x,children:(0,_.jsx)(C,{})})},B=function(e){var a=e.style,n=void 0===a?{}:a,c=(0,t.useState)(window.innerWidth<=1439),i=(0,s.Z)(c,2),r=i[0],l=i[1];return(0,t.useEffect)((function(){var e=function(){l(window.innerWidth<=1439)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),(0,_.jsx)("div",{className:N,style:n,onClick:function(e){return e.stopPropagation()},children:(0,_.jsx)("nav",{className:S,children:r?(0,_.jsx)(k,{}):(0,_.jsx)(I,{})})})};var L=n.p+"static/media/iconSelectLaunguage.2f4ae345464f9ce83a4dc141da30ebe2.svg",E="LanguageSelect_languageSelect__doJUt",U="LanguageSelect_selected__1Y0sl",T="LanguageSelect_dropdown__YV7cM",W="LanguageSelect_option__Pf-Tg",Z="LanguageSelect_active__QKmym",A="LanguageSelect_currentLanguage__x0V4g",z="LanguageSelect_iconSelectLaunguage__heWPZ",H=[{code:"ua",label:"\u0423\u041a\u0420"},{code:"en",label:"ENG"}],O=function(e){var a=e.style,n=(0,t.useState)(H[0]),c=(0,s.Z)(n,2),i=c[0],r=c[1],l=(0,t.useState)(!1),o=(0,s.Z)(l,2),u=o[0],d=o[1],h=(0,t.useRef)(null);return(0,_.jsxs)("div",{className:E,style:a,ref:h,children:[(0,_.jsxs)("button",{className:U,onClick:function(){return d(!u)},children:[(0,_.jsx)("p",{className:A,children:i.label})," ",(0,_.jsx)("img",{className:z,src:L,alt:"iconSelectLaunguage"})]}),u&&(0,_.jsx)("ul",{className:T,children:H.map((function(e){return(0,_.jsx)("li",{className:"".concat(W," ").concat(e.code===i.code?Z:""),onClick:function(){return function(e){r(e),d(!1)}(e)},children:e.label},e.code)}))})]})},K="Header_header__OKWO7",D="Header_header__container__7cHG5",Q="Header_logo__shVBB",V="Header_navigation__container__Rsf8X",P=function(e){var a=e.navSearchStyle,n=e.languageSelectStyle,l=e.navBarStyle,o=e.style,u=(0,t.useState)(window.innerWidth>=1440?r:i),d=(0,s.Z)(u,2),m=d[0],v=d[1];return(0,t.useEffect)((function(){var e=function(){v(window.innerWidth>=1440?r:i)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),(0,_.jsx)("header",{className:K,children:(0,_.jsxs)("div",{className:"container ".concat(D),children:[(0,_.jsx)(c.rU,{to:"/",children:(0,_.jsx)("img",{className:Q,src:m,alt:"logo"})}),(0,_.jsxs)("nav",{className:V,style:o,children:[(0,_.jsx)(h,{style:a}),(0,_.jsx)(O,{style:n}),(0,_.jsx)(B,{style:l})]})]})})}}}]);
//# sourceMappingURL=664.8658c277.chunk.js.map