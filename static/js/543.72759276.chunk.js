"use strict";(self.webpackChunkANKONA=self.webpackChunkANKONA||[]).push([[543],{3677:function(t,e,n){n.d(e,{Z:function(){return r}});var i=n(9439),o=n(2791);var s=n.p+"static/media/arrowLeft.3242f183cb33cdf0ef9019de535658c1.svg";var a=n.p+"static/media/arrowRight.fce0a78b4140db89e9423c6bb94b48af.svg",l={loadMoreButton:"Pagination_loadMoreButton__pxKlJ",buttonPaginationLeft:"Pagination_buttonPaginationLeft__feAZz",buttonPaginationRight:"Pagination_buttonPaginationRight__RWSdi",numerPaginationBtn:"Pagination_numerPaginationBtn__XQkWM",numerPaginationBtnInactive:"Pagination_numerPaginationBtnInactive__75k0H",paginationButtons:"Pagination_paginationButtons__DS8c+",ellipsis:"Pagination_ellipsis__D8ATl"},A=n(184),r=function(t){var e=t.currentPage,n=t.totalPages,r=t.onPageChange,c=t.onLoadMore,g=t.hasMoreItems,u=(0,o.useState)(window.innerWidth<=1439),d=(0,i.Z)(u,2),m=d[0],B=d[1];(0,o.useEffect)((function(){var t=function(){return B(window.innerWidth<=1439)};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]);return(0,A.jsxs)("div",{className:l.paginationContainer,children:[g&&(0,A.jsx)("button",{type:"button",className:l.loadMoreButton,onClick:c,children:"\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0449\u0435"}),(0,A.jsxs)("div",{className:l.paginationButtons,children:[(0,A.jsx)("button",{className:l.buttonPaginationLeft,disabled:1===e,onClick:function(){return r(e-1)},children:(0,A.jsx)("img",{src:s,alt:"arrowLeft"})}),m?function(){var t=[],i=n,o=Math.ceil(n/2);return t.push(1),e>2&&e<o?t.push(e):t.push(2),t.push("..."),e!==i?t.push(e>=o?e:o):t.push(o),t.push("..."),t.push(i),t.map((function(t,n){return(0,A.jsx)("button",{className:"..."===t?l.ellipsis:t===e?l.numerPaginationBtn:l.numerPaginationBtnInactive,onClick:function(){return"number"===typeof t&&r(t)},disabled:"..."===t,children:t},n)}))}():function(){var t=[],i=n,o=2;return e>2&&e<n-1&&(o=e),t.push(1),1!==o&&o!==i&&t.push(o),o<=n-2&&t.push("..."),n>3&&(t.push(i-1),t.push(i)),t.map((function(t,n){return(0,A.jsx)("button",{className:"..."===t?l.ellipsis:t===e?l.numerPaginationBtn:l.numerPaginationBtnInactive,onClick:function(){return"number"===typeof t&&r(t)},disabled:"..."===t,children:t},n)}))}(),(0,A.jsx)("button",{className:l.buttonPaginationRight,disabled:e===n,onClick:function(){return r(e+1)},children:(0,A.jsx)("img",{src:a,alt:"arrowRight"})})]})]})}},9912:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var i=n(9439),o=n(2791),s=n(664),a=n(1087),l=n(3677),A=n(9694),r=n(3376),c={sectionBlog:"SectionBlog_sectionBlog__k9VqA",blogTitle:"SectionBlog_blogTitle__8ok8D",blogBorder:"SectionBlog_blogBorder__gGYsK",blogList__item:"SectionBlog_blogList__item__wkHBo",blogListSecond__item:"SectionBlog_blogListSecond__item__sWk8T",blogList__itemImg:"SectionBlog_blogList__itemImg__8MCki",blogListSecond__itemImg:"SectionBlog_blogListSecond__itemImg__6BpUT",blogListContainer:"SectionBlog_blogListContainer__EhqvM",blogList__itemTitle:"SectionBlog_blogList__itemTitle__yi+Qj",blogListSecond__itemTitle:"SectionBlog_blogListSecond__itemTitle__E-JNn",blogList__itemTitleBorder:"SectionBlog_blogList__itemTitleBorder__xYJGG",blogListSecond__itemTitleBorder:"SectionBlog_blogListSecond__itemTitleBorder__g+FaU",blogList__itemDescription:"SectionBlog_blogList__itemDescription__f+LXs",blogListSecond__itemDescription:"SectionBlog_blogListSecond__itemDescription__vLFkq",blogBtn:"SectionBlog_blogBtn__z-355",blogList:"SectionBlog_blogList__nE6ft",blogListSecond:"SectionBlog_blogListSecond__vUgvm"},g=n(184),u=function(){var t=(0,o.useState)(1),e=(0,i.Z)(t,2),n=e[0],s=e[1],u=(0,o.useState)(r.n),d=(0,i.Z)(u,2),m=d[0],B=d[1],f=(0,o.useState)(3),b=(0,i.Z)(f,2),p=b[0],h=b[1],_=(0,o.useState)(window.innerWidth>1439),v=(0,i.Z)(_,2),E=v[0],L=v[1];(0,o.useEffect)((function(){s(1)}),[m]),(0,o.useEffect)((function(){var t=function(){L(window.innerWidth>1439),window.innerWidth<=1439?h(3):h(5)};return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]);for(var Q=Math.ceil(m.length/p),P=m.slice(0,2),x=m.slice(2,5),w=m.slice(5),S=[],C=0;C<w.length;C+=3)S.push(w.slice(C,C+3));var N=m.slice(0,n*p),j=function(t,e){return t?t.length>e?t.slice(0,e)+"...":t:""};return(0,g.jsx)("section",{className:c.sectionBlog,id:"blog",children:(0,g.jsxs)("div",{className:"container ".concat(c.sectionBlog__Container),children:[(0,g.jsx)("h2",{className:c.blogTitle,children:"\u0411\u043b\u043e\u0433"}),(0,g.jsx)("div",{className:c.blogBorder}),(0,g.jsx)("ul",{className:c.blogList,children:P.map((function(t){return(0,g.jsxs)("li",{className:c.blogList__item,children:[(0,g.jsx)("img",{className:c.blogList__itemImg,src:E?t.imageDesktop||A:t.image||A,alt:t.title}),(0,g.jsxs)("div",{className:c.blogListContainer,children:[(0,g.jsx)("h4",{className:c.blogList__itemTitle,children:t.title}),(0,g.jsx)("div",{className:c.blogList__itemTitleBorder}),(0,g.jsx)("p",{className:c.blogList__itemDescription,children:j(t.description,108)}),(0,g.jsx)(a.rU,{to:"/blog/".concat(t.id),className:c.blogBtn,children:"\u0427\u0438\u0442\u0430\u0442\u0438"})]})]},t.id)}))}),(0,g.jsx)("ul",{className:c.blogListSecond,children:x.map((function(t){return(0,g.jsxs)("li",{className:c.blogListSecond__item,children:[(0,g.jsx)("img",{className:c.blogListSecond__itemImg,src:t.image||A,alt:t.title}),(0,g.jsx)("h4",{className:c.blogListSecond__itemTitle,children:j(t.title,23)}),(0,g.jsx)("div",{className:c.blogListSecond__itemTitleBorder}),(0,g.jsx)("p",{className:c.blogListSecond__itemDescription,children:j(t.description,108)}),(0,g.jsx)(a.rU,{to:"/blog/".concat(t.id),className:c.blogBtn,children:"\u0427\u0438\u0442\u0430\u0442\u0438"})]},t.id)}))}),Q>1&&(0,g.jsx)(l.Z,{currentPage:n,totalPages:Q,onPageChange:function(t){s(t)},onLoadMore:function(){n<Q&&s((function(t){return t+1}))},hasMoreItems:N.length<m.length,setFilteredPosts:B})]})})},d=n(9517),m=function(){var t=(0,o.useState)("ua"),e=(0,i.Z)(t,2),n=e[0],a=e[1],l=(0,o.useCallback)((function(t){t!==n&&(a(t),console.log("\u041c\u043e\u0432\u0430 \u0437\u043c\u0456\u043d\u0435\u043d\u0430 \u043d\u0430:",t))}),[n]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s.Z,{navSearchStyle:{display:"none"},style:{width:"130px"},language:n,onLanguageChange:l}),(0,g.jsx)("main",{children:(0,g.jsx)(u,{language:n})}),(0,g.jsx)(d.Z,{language:n})]})}},3376:function(t,e,n){n.d(e,{n:function(){return s}});var i=n(7594),o=n(8736),s=[{id:1,title:"\u0421\u0456\u043b\u044c \u0433\u043b\u044e\u043a\u043e\u043d\u043e\u0432\u043e\u0457 \u043a\u0438\u0441\u043b\u043e\u0442\u0438",image:i,imageDesktop:n(7933),description:"\u0412\u043f\u043b\u0438\u0432 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0441\u0443\u043b\u044c\u0444\u0430\u0442\u0443 \u0433\u043b\u044e\u043a\u043e\u043d\u043e\u0432\u043e\u0457 \u043a\u0438\u0441\u043b\u043e\u0442\u0438 \u043d\u0430 \u0432\u0438\u0440\u043e\u0431\u043d\u0438\u0447\u0456 \u043f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u0438 \u043f\u043e\u0440\u043e\u0441\u044f\u0442 \u0442\u0430 \u0441\u0432\u0438\u043d\u0435\u0439 \u043d\u0430 \u0432\u0456\u0434\u0433\u043e\u0434\u0456\u0432\u043b\u0456.",content:"\u0426\u044f \u0441\u0442\u0430\u0442\u0442\u044f, \u043e\u043f\u0443\u0431\u043b\u0456\u043a\u043e\u0432\u0430\u043d\u0430 \u0432 \u0436\u0443\u0440\u043d\u0430\u043b\u0456 Journal of Animal Science, \u0434\u043e\u0441\u043b\u0456\u0434\u0436\u0443\u0454 \u0432\u043f\u043b\u0438\u0432 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0441\u0443\u043b\u044c\u0444\u0430\u0442\u0443 \u0433\u043b\u044e\u043a\u043e\u043d\u043e\u0432\u043e\u0457 \u043a\u0438\u0441\u043b\u043e\u0442\u0438 (sodium gluconate) \u043d\u0430 \u0432\u0438\u0440\u043e\u0431\u043d\u0438\u0447\u0456 \u043f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u0438 ",contentspan:"\u043f\u043e\u0440\u043e\u0441\u044f\u0442 \u0442\u0430 \u0441\u0432\u0438\u043d\u0435\u0439 \u043d\u0430 \u0432\u0456\u0434\u0433\u043e\u0434\u0456\u0432\u043b\u0456.",contentafter:"\u041c\u0435\u0442\u043e\u044e \u0434\u043e\u0441\u043b\u0456\u0434\u0436\u0435\u043d\u043d\u044f \u0431\u0443\u043b\u043e \u0432\u0438\u0437\u043d\u0430\u0447\u0438\u0442\u0438, \u044f\u043a \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0446\u044c\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0432\u043f\u043b\u0438\u0432\u0430\u0454 \u043d\u0430 \u0432\u0430\u0433\u043e\u0432\u0438\u0439 \u043f\u0440\u0438\u0440\u0456\u0441\u0442 \u0456 \u0441\u043f\u043e\u0436\u0438\u0432\u0430\u043d\u043d\u044f \u043a\u043e\u0440\u043c\u0443 \u0443 \u0442\u0432\u0430\u0440\u0438\u043d.",metodoligi:"\u0414\u043e\u0441\u043b\u0456\u0434\u0436\u0435\u043d\u043d\u044f \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u043b\u043e\u0441\u044f \u043d\u0430 \u0433\u0440\u0443\u043f\u0430\u0445 \u043f\u043e\u0440\u043e\u0441\u044f\u0442 \u0442\u0430 \u0441\u0432\u0438\u043d\u0435\u0439 \u043d\u0430 \u0432\u0456\u0434\u0433\u043e\u0434\u0456\u0432\u043b\u0456, \u044f\u043a\u0456 \u043e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u043b\u0438 \u0434\u0456\u0454\u0442\u0443 \u0437 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f\u043c 0.25% \u0430\u0431\u043e 0.5% \u0441\u0443\u043b\u044c\u0444\u0430\u0442\u0443 \u0433\u043b\u044e\u043a\u043e\u043d\u043e\u0432\u043e\u0457 \u043a\u0438\u0441\u043b\u043e\u0442\u0438. \u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u0430 \u0433\u0440\u0443\u043f\u0430 \u043e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u043b\u0430 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0443 \u0434\u0456\u0454\u0442\u0443 \u0431\u0435\u0437 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f. \u0412\u0438\u043c\u0456\u0440\u044e\u0432\u0430\u043b\u0438\u0441\u044f \u043f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u0438 \u0432\u0430\u0433\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u0438\u0440\u043e\u0441\u0442\u0443 \u0442\u0430 \u0441\u043f\u043e\u0436\u0438\u0432\u0430\u043d\u043d\u044f \u043a\u043e\u0440\u043c\u0443 \u043f\u0440\u043e\u0442\u044f\u0433\u043e\u043c \u0432\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043e\u0433\u043e \u043f\u0435\u0440\u0456\u043e\u0434\u0443.",result:"\u043f\u043e\u043a\u0430\u0437\u0430\u043b\u0438, \u0449\u043e \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0441\u0443\u043b\u044c\u0444\u0430\u0442\u0443 \u0433\u043b\u044e\u043a\u043e\u043d\u043e\u0432\u043e\u0457 \u043a\u0438\u0441\u043b\u043e\u0442\u0438 \u0441\u043f\u0440\u0438\u044f\u043b\u043e \u043f\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u044e \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0445 \u043f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u0456\u0432:",resultList:["\u0412\u0430\u0433\u043e\u0432\u0438\u0439 \u043f\u0440\u0438\u0440\u0456\u0441\u0442 \u0437\u0431\u0456\u043b\u044c\u0448\u0438\u0432\u0441\u044f \u043d\u0430 12% \u0443 \u0433\u0440\u0443\u043f\u0456 \u0437 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f\u043c 0.25% sodium gluconate \u0442\u0430 \u043d\u0430 15% \u0443 \u0433\u0440\u0443\u043f\u0456 \u0437 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f\u043c 0.5% sodium gluconate.","\u0421\u043f\u043e\u0436\u0438\u0432\u0430\u043d\u043d\u044f \u043a\u043e\u0440\u043c\u0443 \u0437\u0440\u043e\u0441\u043b\u043e \u043d\u0430 10% \u0443 \u0433\u0440\u0443\u043f\u0456 \u0437 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f\u043c 0.25% sodium gluconate \u0442\u0430 \u043d\u0430 13% \u0443 \u0433\u0440\u0443\u043f\u0456 \u0437 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f\u043c 0.5% sodium gluconate."],conclusions:"\u0414\u043e\u0441\u043b\u0456\u0434\u0436\u0435\u043d\u043d\u044f \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043b\u043e \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u0439 \u0432\u043f\u043b\u0438\u0432 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0441\u0443\u043b\u044c\u0444\u0430\u0442\u0443 \u0433\u043b\u044e\u043a\u043e\u043d\u043e\u0432\u043e\u0457 \u043a\u0438\u0441\u043b\u043e\u0442\u0438 \u043d\u0430 \u0432\u0438\u0440\u043e\u0431\u043d\u0438\u0447\u0456 \u043f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u0438 \u043f\u043e\u0440\u043e\u0441\u044f\u0442 \u0442\u0430 \u0441\u0432\u0438\u043d\u0435\u0439 \u043d\u0430 \u0432\u0456\u0434\u0433\u043e\u0434\u0456\u0432\u043b\u0456. \u0412\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0435\u043d\u043d\u044f \u0446\u0456\u0454\u0457 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438 \u0443 \u0442\u0432\u0430\u0440\u0438\u043d\u043d\u0438\u0446\u0442\u0432\u0456 \u043c\u043e\u0436\u0435 \u0441\u043f\u0440\u0438\u044f\u0442\u0438 \u043f\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u044e \u0432\u0430\u0433\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u0438\u0440\u043e\u0441\u0442\u0443 \u0442\u0430 \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0442\u0430\u043d\u0443 \u0442\u0432\u0430\u0440\u0438\u043d, \u0430 \u0442\u0430\u043a\u043e\u0436 \u043f\u0456\u0434\u0432\u0438\u0449\u0435\u043d\u043d\u044e \u0435\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0456 \u0441\u043f\u043e\u0436\u0438\u0432\u0430\u043d\u043d\u044f \u043a\u043e\u0440\u043c\u0443.",link:"https://academic.oup.com/jas/article/102/Supplement_2/321/7664974",additationInfo:"\u0412 \u043d\u0430\u0448\u043e\u043c\u0443 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u0456 \u0454 ",blogAddInfo:"\u0456\u043d\u043e\u0432\u0430\u0446\u0456\u0439\u043d\u0438\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442 \u041c\u0430\u043a\u0441\u0456 \u041f\u0456 \u0411\u043b\u043e\u043a \u0434\u043b\u044f \u0441\u0432\u0438\u043d\u0435\u0439 \u0437 \u0441\u043e\u043b\u044f\u043c\u0438 \u0433\u043b\u044e\u043a\u0430\u043d\u043e\u0432\u043e\u0457 \u043a\u0438\u0441\u043b\u043e\u0442\u0438",blogAddInfoLink:"/product/57"},{id:2,title:"\u0425\u043e\u043b\u0456\u043a\u0430\u043b\u044c\u0446\u0438\u0444\u0435\u0440\u043e\u043b \u0456 \u043e\u0436\u0438\u0440\u0456\u043d\u043d\u044f",image:o,imageDesktop:n(3414),description:"\u0427\u0435\u0440\u0433\u043e\u0432\u0435 \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f \u0432\u0435\u043b\u0438\u0447\u0435\u0437\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0432\u0456\u0442\u0430\u043c\u0456\u043d\u0443 D3 \xa0\u0437 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0442\u044f\u043c \u0434\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0456\u0439 \u0456 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0432\u043f\u043b\u0438\u0432\u0443 \u043d\u0430 \u043e\u0433\u0440\u0433\u0430\u043d\u0456\u0437\u043c.",descriptionSecond:"25-\u0433\u0456\u0434\u0440\u043e\u043a\u0441\u0438\u0445\u043e\u043b\u0435\u043a\u0430\u043b\u044c\u0446\u0438\u0444\u0435\u0440\u043e\u043b (25-OH-D3) \u043f\u043e\u043a\u0440\u0430\u0449\u0443\u0454 \u043c\u0435\u0442\u0430\u0431\u043e\u043b\u0456\u0447\u043d\u0443 \u0430\u0434\u0430\u043f\u0442\u0430\u0446\u0456\u044e \u0441\u0435\u0440\u0446\u044f, \u0431\u0456\u043e\u0433\u0435\u043d\u0435\u0437 \u043c\u0456\u0442\u043e\u0445\u043e\u043d\u0434\u0440\u0456\u0439 \u0456 \u0441\u0442\u0430\u043d \u0440\u0435\u0434\u043e\u043a\u0441\u0443, \u0449\u043e\u0431 \u0437\u043c\u0435\u043d\u0448\u0438\u0442\u0438 \u043f\u0430\u0442\u043e\u043b\u043e\u0433\u0456\u0447\u043d\u0435 \u0440\u0435\u043c\u043e\u0434\u0435\u043b\u044e\u0432\u0430\u043d\u043d\u044f \u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043d\u0456\u0441\u0442\u044c \u0443 \u0431\u0440\u043e\u0439\u043b\u0435\u0440\u0456\u0432 \u0431\u0430\u0442\u044c\u043a\u0456\u0432\u0441\u044c\u043a\u043e\u0433\u043e \u0441\u0442\u0430\u0434\u0430",content:"\u0414\u043e\u0441\u043b\u0456\u0434\u0436\u0435\u043d\u043d\u044f, \u043e\u043f\u0443\u0431\u043b\u0456\u043a\u043e\u0432\u0430\u043d\u0435 \u0432 \u0436\u0443\u0440\u043d\u0430\u043b\u0456 Antioxidants, \u043f\u0440\u0438\u0441\u0432\u044f\u0447\u0435\u043d\u0435 \u0432\u0438\u0432\u0447\u0435\u043d\u043d\u044e \u0432\u043f\u043b\u0438\u0432\u0443 25-\u0433\u0456\u0434\u0440\u043e\u043a\u0441\u0438\u0445\u043e\u043b\u0435\u043a\u0430\u043b\u044c\u0446\u0438\u0444\u0435\u0440\u043e\u043b\u0443 (25-OH-D3) \u043d\u0430 \u043c\u0435\u0442\u0430\u0431\u043e\u043b\u0456\u0447\u043d\u0443 \u0430\u0434\u0430\u043f\u0442\u0430\u0446\u0456\u044e \u0441\u0435\u0440\u0446\u044f, \u0431\u0456\u043e\u0433\u0435\u043d\u0435\u0437 \u043c\u0456\u0442\u043e\u0445\u043e\u043d\u0434\u0440\u0456\u0439 \u0442\u0430 \u0441\u0442\u0430\u043d \u0440\u0435\u0434\u043e\u043a\u0441\u0443 \u0443 \u0431\u0440\u043e\u0439\u043b\u0435\u0440\u0456\u0432 \u0431\u0430\u0442\u044c\u043a\u0456\u0432\u0441\u044c\u043a\u043e\u0433\u043e \u0441\u0442\u0430\u0434\u0430. \u041c\u0435\u0442\u0430 \u0434\u043e\u0441\u043b\u0456\u0434\u0436\u0435\u043d\u043d\u044f \u043f\u043e\u043b\u044f\u0433\u0430\u043b\u0430 \u0443 \u0432\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u0456 \u0432\u043f\u043b\u0438\u0432\u0443 \u0446\u044c\u043e\u0433\u043e \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u043d\u0430 \u0441\u0435\u0440\u0446\u0435\u0432\u0443 \u0444\u0443\u043d\u043a\u0446\u0456\u044e \u0442\u0430 \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0438\u0439 \u0441\u0442\u0430\u043d \u0437\u0434\u043e\u0440\u043e\u0432'\u044f \u0442\u0432\u0430\u0440\u0438\u043d.",metodoligi:"\u0414\u043e\u0441\u043b\u0456\u0434\u0436\u0435\u043d\u043d\u044f \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u043b\u043e\u0441\u044f \u043d\u0430 \u0433\u0440\u0443\u043f\u0456 \u0442\u043e\u0432\u0441\u0442\u0438\u0445 \u0431\u0440\u043e\u0439\u043b\u0435\u0440\u0456\u0432, \u044f\u043a\u0456 \u043e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u043b\u0438 \u0434\u0456\u0454\u0442\u0443, \u0434\u043e\u043f\u043e\u0432\u043d\u0435\u043d\u0443 25-\u0433\u0456\u0434\u0440\u043e\u043a\u0441\u0438\u0445\u043e\u043b\u0435\u043a\u0430\u043b\u044c\u0446\u0438\u0444\u0435\u0440\u043e\u043b\u043e\u043c (25-OH-D3). \u0422\u0432\u0430\u0440\u0438\u043d \u0434\u0456\u043b\u0438\u043b\u0438 \u043d\u0430 \u0434\u0432\u0456 \u0433\u0440\u0443\u043f\u0438: \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u0443 \u0442\u0430 \u0433\u0440\u0443\u043f\u0443, \u0449\u043e \u043e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u043b\u0430 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0432\u0456\u0442\u0430\u043c\u0456\u043d\u0443.",result:"\u043f\u043e\u043a\u0430\u0437\u0430\u043b\u0438, \u0449\u043e \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f 25-\u0433\u0456\u0434\u0440\u043e\u043a\u0441\u0438\u0445\u043e\u043b\u0435\u043a\u0430\u043b\u044c\u0446\u0438\u0444\u0435\u0440\u043e\u043b\u0443 (25-OH-D3) \u0441\u043f\u0440\u0438\u044f\u043b\u043e \u043f\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u044e \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0445 \u043f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u0456\u0432:",resultList:["\u041c\u0435\u0442\u0430\u0431\u043e\u043b\u0456\u0447\u043d\u0430 \u0430\u0434\u0430\u043f\u0442\u0430\u0446\u0456\u044f \u0441\u0435\u0440\u0446\u044f: \u043f\u0456\u0434\u0432\u0438\u0449\u0435\u043d\u043d\u044f \u043d\u0430 20%","\u0411\u0456\u043e\u0433\u0435\u043d\u0435\u0437 \u043c\u0456\u0442\u043e\u0445\u043e\u043d\u0434\u0440\u0456\u0439: \u0437\u0431\u0456\u043b\u044c\u0448\u0435\u043d\u043d\u044f \u043a\u0456\u043b\u044c\u043a\u043e\u0441\u0442\u0456 \u043c\u0456\u0442\u043e\u0445\u043e\u043d\u0434\u0440\u0456\u0439 \u043d\u0430 25%","\u0421\u0442\u0430\u043d \u0440\u0435\u0434\u043e\u043a\u0441\u0443: \u0437\u043c\u0435\u043d\u0448\u0435\u043d\u043d\u044f \u043e\u043a\u0438\u0441\u043d\u043e\u0433\u043e \u0441\u0442\u0440\u0435\u0441\u0443 \u043d\u0430 30%"],afterResult:"\u0422\u0430\u043a\u043e\u0436 \u0431\u0443\u043b\u043e \u0432\u0456\u0434\u0437\u043d\u0430\u0447\u0435\u043d\u043e \u0437\u043c\u0435\u043d\u0448\u0435\u043d\u043d\u044f \u043f\u0430\u0442\u043e\u043b\u043e\u0433\u0456\u0447\u043d\u043e\u0433\u043e \u0440\u0435\u043c\u043e\u0434\u0435\u043b\u044e\u0432\u0430\u043d\u043d\u044f \u0441\u0435\u0440\u0446\u044f \u0442\u0430 \u043f\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u044f \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0457 \u0437\u0434\u0430\u0442\u043d\u043e\u0441\u0442\u0456 \u0441\u0435\u0440\u0446\u044f, \u0449\u043e \u0432\u0438\u044f\u0432\u0438\u043b\u043e\u0441\u044f \u0443 \u043f\u0456\u0434\u0432\u0438\u0449\u0435\u043d\u043d\u0456 \u0441\u043a\u043e\u0440\u043e\u0447\u0443\u0432\u0430\u043b\u044c\u043d\u043e\u0457 \u0437\u0434\u0430\u0442\u043d\u043e\u0441\u0442\u0456 \u043d\u0430 15%.",conclusions:"\u0414\u043e\u0441\u043b\u0456\u0434\u0436\u0435\u043d\u043d\u044f \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043b\u043e \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u0439 \u0432\u043f\u043b\u0438\u0432 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f 25-\u0433\u0456\u0434\u0440\u043e\u043a\u0441\u0438\u0445\u043e\u043b\u0435\u043a\u0430\u043b\u044c\u0446\u0438\u0444\u0435\u0440\u043e\u043b\u0443(25-OH-D3) \u043d\u0430 \u043c\u0435\u0442\u0430\u0431\u043e\u043b\u0456\u0447\u043d\u0443 \u0430\u0434\u0430\u043f\u0442\u0430\u0446\u0456\u044e \u0441\u0435\u0440\u0446\u044f, \u0431\u0456\u043e\u0433\u0435\u043d\u0435\u0437 \u043c\u0456\u0442\u043e\u0445\u043e\u043d\u0434\u0440\u0456\u0439 \u0456 \u0441\u0442\u0430\u043d \u0440\u0435\u0434\u043e\u043a\u0441\u0443 \u0443 \u0431\u0430\u0442\u044c\u043a\u0456\u0432\u0441\u044c\u043a\u043e\u0433\u043e \u0441\u0442\u0430\u0434\u0430 \u0431\u0440\u043e\u0439\u043b\u0435\u0440\u0456\u0432. \u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u043e \u0432\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0435\u043d\u043d\u044f \u0446\u0456\u0454\u0457 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438 \u0443 \u0442\u0432\u0430\u0440\u0438\u043d\u043d\u0438\u0446\u0442\u0432\u0456 \u0434\u043b\u044f \u043f\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u044f \u0441\u0435\u0440\u0446\u0435\u0432\u043e\u0457 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 \u0442\u0430 \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0442\u0430\u043d\u0443 \u0437\u0434\u043e\u0440\u043e\u0432'\u044f \u0442\u0432\u0430\u0440\u0438\u043d",link:"https://www.mdpi.com/2076-3921/13/11/1426?form=MG0AV3"},{id:3,title:"\u0421\u0456\u043b\u044c \u0433\u043b\u044e\u043a\u043e\u043d\u043e\u0432\u043e\u0457 \u043a\u0438\u0441\u043b\u043e\u0442\u0438",image:i,description:"\u0412\u043f\u043b\u0438\u0432 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0441\u0443\u043b\u044c\u0444\u0430\u0442\u0443 \u0433\u043b\u044e\u043a\u043e\u043d\u043e\u0432\u043e\u0457 \u043a\u0438\u0441\u043b\u043e\u0442\u0438 \u043d\u0430 \u0432\u0438\u0440\u043e\u0431\u043d\u0438\u0447\u0456 \u043f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u0438 \u043f\u043e\u0440\u043e\u0441\u044f\u0442 \u0442\u0430 \u0441\u0432\u0438\u043d\u0435\u0439 \u043d\u0430 \u0432\u0456\u0434\u0433\u043e\u0434\u0456\u0432\u043b\u0456.",content:"\u0422\u0443\u0442 \u0431\u0443\u0434\u0435 \u043f\u043e\u0432\u043d\u0430 \u0441\u0442\u0430\u0442\u0442\u044f \u0437 \u0443\u0441\u0456\u043c\u0430 \u0434\u0435\u0442\u0430\u043b\u044f\u043c\u0438 \u043f\u0440\u043e \u0432\u043f\u043b\u0438\u0432 \u0433\u043b\u044e\u043a\u043e\u043d\u043e\u0432\u043e\u0457 \u043a\u0438\u0441\u043b\u043e\u0442\u0438 \u043d\u0430 \u043f\u043e\u0440\u043e\u0441\u044f\u0442..."},{id:4,title:"\u0425\u043e\u043b\u0456\u043a\u0430\u043b\u044c\u0446\u0438\u0444\u0435\u0440\u043e\u043b \u0456 \u043e\u0436\u0438\u0440\u0456\u043d\u043d\u044f",image:o,description:"\u0427\u0435\u0440\u0433\u043e\u0432\u0435 \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f \u0432\u0435\u043b\u0438\u0447\u0435\u0437\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0432\u0456\u0442\u0430\u043c\u0456\u043d\u0443 D3 \xa0\u0437 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0442\u044f\u043c \u0434\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0456\u0439 \u0456 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0432\u043f\u043b\u0438\u0432\u0443 \u043d\u0430 \u043e\u0433\u0440\u0433\u0430\u043d\u0456\u0437\u043c.",content:"\u0422\u0443\u0442 \u0431\u0443\u0434\u0435 \u043f\u043e\u0432\u043d\u0430 \u0441\u0442\u0430\u0442\u0442\u044f \u0437 \u0443\u0441\u0456\u043c\u0430 \u0434\u0435\u0442\u0430\u043b\u044f\u043c\u0438 \u043f\u0440\u043e \u0432\u043f\u043b\u0438\u0432 \u0433\u043b\u044e\u043a\u043e\u043d\u043e\u0432\u043e\u0457 \u043a\u0438\u0441\u043b\u043e\u0442\u0438 \u043d\u0430 \u043f\u043e\u0440\u043e\u0441\u044f\u0442..."},{id:5,title:"\u0421\u0456\u043b\u044c \u0433\u043b\u044e\u043a\u043e\u043d\u043e\u0432\u043e\u0457 \u043a\u0438\u0441\u043b\u043e\u0442\u0438",image:i,description:"\u0412\u043f\u043b\u0438\u0432 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0441\u0443\u043b\u044c\u0444\u0430\u0442\u0443 \u0433\u043b\u044e\u043a\u043e\u043d\u043e\u0432\u043e\u0457 \u043a\u0438\u0441\u043b\u043e\u0442\u0438 \u043d\u0430 \u0432\u0438\u0440\u043e\u0431\u043d\u0438\u0447\u0456 \u043f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u0438 \u043f\u043e\u0440\u043e\u0441\u044f\u0442 \u0442\u0430 \u0441\u0432\u0438\u043d\u0435\u0439 \u043d\u0430 \u0432\u0456\u0434\u0433\u043e\u0434\u0456\u0432\u043b\u0456.",content:"\u0422\u0443\u0442 \u0431\u0443\u0434\u0435 \u043f\u043e\u0432\u043d\u0430 \u0441\u0442\u0430\u0442\u0442\u044f \u0437 \u0443\u0441\u0456\u043c\u0430 \u0434\u0435\u0442\u0430\u043b\u044f\u043c\u0438 \u043f\u0440\u043e \u0432\u043f\u043b\u0438\u0432 \u0433\u043b\u044e\u043a\u043e\u043d\u043e\u0432\u043e\u0457 \u043a\u0438\u0441\u043b\u043e\u0442\u0438 \u043d\u0430 \u043f\u043e\u0440\u043e\u0441\u044f\u0442..."}]},7594:function(t,e,n){t.exports=n.p+"static/media/blogImageId1.71e385c529dc25912c1c.jpg"},7933:function(t,e,n){t.exports=n.p+"static/media/blogImageId1Desktop.5d34445e9739f4231f70.jpg"},8736:function(t,e,n){t.exports=n.p+"static/media/blogImageId2.115bc28eef20b76aff45.jpg"},3414:function(t,e,n){t.exports=n.p+"static/media/blogImageId2Desktop.4a7f749079ce1df93a19.jpg"},9694:function(t){t.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=543.72759276.chunk.js.map