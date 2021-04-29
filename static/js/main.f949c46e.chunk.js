(this.webpackJsonpmcromp_portfolio=this.webpackJsonpmcromp_portfolio||[]).push([[0],[,,,,,,,,,function(e,t,n){},,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(10),a=n.n(i),o=(n(18),n(9),n(0)),r=function(e){var t=e.children,n=e.styleAdd,c=void 0===n?"":n;return Object(o.jsx)("h2",{className:"section__title ".concat(c),children:t})},l=function(e){var t=e.children,n=e.styleAdd,c=void 0===n?"":n;return Object(o.jsx)("p",{className:"section__text ".concat(c),children:t})},d=(n(20),function(e){var t=e.list;return Object(o.jsx)("ul",{children:t.map((function(e){return Object(o.jsx)("li",{children:e},e)}))})}),j=n(5),u=n.n(j),h=(n(22),function(){return Object(o.jsx)("div",{className:"line","aria-label":"hidden"})}),b=["React","Redux","JavaScript (ES6+)","TypeScript","SASS/CSS3","NodeJS","Jest","MongoDB","GSAP","JSX A11y","Figma"],m=function(){return Object(o.jsxs)("div",{className:"tech-cloud",children:[Object(o.jsxs)(l,{children:["I love learning new technologies. ","\n","Some of the tech I've been using recently:"]}),Object(o.jsx)(d,{list:b}),Object(o.jsx)(h,{}),Object(o.jsxs)(l,{children:["Outside of programming I enjoy art, traveling, guitar, and hiking.","\n","And, of course, coffee ",Object(o.jsx)(u.a,{label:"coffee",symbol:"\u2615"}),"!"]})]})},f=n(3),p=n(4),O=n(11),x=function(){var e=Object(O.a)().innerWidth,t=Object(c.useState)(400),n=Object(f.a)(t,2),s=n[0],i=n[1];return Object(c.useEffect)((function(){e&&i(e>1200?400:e>900?300:200)}),[e]),Object(c.useEffect)((function(){p.a.to(".dragon",{x:Math.sqrt(s/2*s/2*2)-s/8,duration:8.1,yoyo:!0,repeat:-1}),p.a.to(".dragon",{y:Math.sqrt(s/2*s/2*2)-s/8,duration:5,yoyo:!0,repeat:-1})}),[s]),Object(o.jsxs)("div",{className:"comp-graphic",style:{minWidth:s+"px",height:s+"px"},children:[Object(o.jsx)("div",{className:"dragon",children:Object(o.jsx)(u.a,{symbol:"\ud83d\udc09",label:"dragon",style:{fontSize:s/4+"px"}})}),Object(o.jsx)("div",{className:"comp",children:Object(o.jsx)(u.a,{label:"computer",symbol:"\ud83d\udda5\ufe0f",style:{fontSize:s/2.5+"px"}})}),Object(o.jsx)("div",{})]})},g=function(e){var t=e.children,n=e.styleAdd,c=void 0===n?"":n;return Object(o.jsx)("p",{className:"block__text ".concat(c),children:t})},y=function(e){var t=e.children,n=e.styleAdd,c=void 0===n?"":n;return Object(o.jsx)("h3",{className:"block__sub-header ".concat(c),children:t})},v=function(e){var t=e.children,n=e.styleAdd,c=void 0===n?"":n;return Object(o.jsx)("div",{className:"block__block ".concat(c),children:t})},k=function(e){var t=e.pic,n=e.alt,c=e.link,s=void 0===c?"":c;return Object(o.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{className:"block__img",src:t,alt:n})})},w=function(e){var t=e.children;return Object(o.jsx)("h4",{className:"block__text-header",children:t})},I=function(e){var t=e.url,n=e.children;return Object(o.jsx)("a",{href:t,className:"block__icon-link",target:"_blank",rel:"noreferrer",children:n})},S=(n(23),function(){return Object(o.jsxs)(v,{styleAdd:"about-block",children:[Object(o.jsx)(y,{children:"Hey, thanks for stopping by!"}),Object(o.jsxs)("div",{className:"about-block__flex",children:[Object(o.jsx)("div",{className:"col-1",children:Object(o.jsxs)(g,{children:["If I had to describe myself in a word, I\u2019d say ",Object(o.jsx)("i",{children:"\u201cmaker.\u201d"}),"\n","I have a natural motivation to learn, grow, tinker, and create.","\n\n","Whether I\u2019m fixing up an old motorcycle, designing 3D models, or building a guitar fuzzbox, I love understanding a system, seeing how the pieces connect, and creating something new.","\n\n","As for programming...","\n","I first fell in love as a kid making fantasy text adventures with QBasic using the family\u2019s Windows 95 computer.","\n\n","The type of work I do nowadays is a far cry from the nested IF-statements and GOTO-branches I used then, but the magic of transforming code into something engaging, useful, and delightful stays the same.","\n\n","Cut to the present day, I\u2019ve completed multiple frontend courses online and successfully deployed several web apps\u2014none of which are set in a fantasy dungeon, unfortunately!","\n\n","I am looking for an opportunity to put my passion and creativity to work here in Berlin.","\n\n","Would you like to work together?"]})}),Object(o.jsx)("div",{className:"col-2",children:Object(o.jsx)(x,{})})]})]})}),N=(n(24),function(){return Object(o.jsxs)("section",{className:"about-me",id:"about",children:[Object(o.jsx)(r,{children:" About"}),Object(o.jsx)(S,{}),Object(o.jsx)(m,{})]})}),A=n(7),_=n(40),M=(n(27),function(){var e=Object(c.useState)(!1),t=Object(f.a)(e,2),n=t[0],s=t[1];return Object(A.useScrollPosition)((function(e){var t=e.prevPos,n=e.currPos;s(n.y>=t.y&&n.y<=-500)}),[n],void 0,void 0,100),Object(o.jsx)("button",{"aria-label":"scroll to top",className:n?"top-scroll":"top-scroll--hidden",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},children:Object(o.jsx)(_.a,{size:40,color:"black"})})}),R=n(41),P=n.p+"static/media/self.0b9364c9.jpeg",T=(n(30),function(){return Object(o.jsxs)("div",{className:"contact",id:"contact",children:[Object(o.jsx)(r,{children:"Contact"}),Object(o.jsxs)("div",{className:"flex",children:[Object(o.jsx)("img",{src:P,alt:"phot of matthew crompton",className:"self-img"}),Object(o.jsxs)("div",{className:"email",children:[Object(o.jsx)("p",{className:"email__text",children:"mcromp.js@gmail.com"}),Object(o.jsx)("div",{className:"email__icon",children:Object(o.jsx)(I,{url:"mailto:mcromp.js@gmail.com?subject=Hello!",children:Object(o.jsx)(R.a,{size:50,color:"black",className:"block__icon-link"})})})]})]})]})}),z=n(42),E=n(43),C=function(e){var t=e.children,n=e.styleAdd,c=void 0===n?"":n;return Object(o.jsx)("h1",{className:"hero__title ".concat(c),children:t})},J=function(e){var t=e.children,n=e.styleAdd,c=void 0===n?"":n;return Object(o.jsx)("p",{className:"hero__subtitle ".concat(c),children:t})},L=(n(31),n(32),function(){return Object(c.useEffect)((function(){p.a.timeline().from(".landing",{autoAlpha:0,ease:"easeIn",duration:.3}).from(".fade2",{autoAlpha:0,ease:"power2.in",duration:.4}).from(".landing__icons",{translateY:40,autoAlpha:0,ease:"bounce",duration:1}),p.a.from(".scale-ease",{scale:.5,ease:"easeIn",duration:1})}),[]),Object(o.jsxs)("section",{className:"landing",children:[Object(o.jsxs)(C,{styleAdd:"fade2",children:["Matthew ",Object(o.jsx)("br",{}),"Crompton"]}),Object(o.jsx)(J,{styleAdd:"scale-ease",children:"Berlin-based Front End Developer."}),Object(o.jsxs)("div",{className:"landing__icons",children:[Object(o.jsx)(I,{url:"https://www.linkedin.com/in/mcromp/",children:Object(o.jsx)(z.a,{color:"black",className:"icon",size:35})}),Object(o.jsx)(I,{url:"https://github.com/mcromp",children:Object(o.jsx)(E.a,{color:"black",className:"icon",size:35})}),Object(o.jsx)(I,{url:"mailto:mcromp.js@gmail.com?subject=Hello!",children:Object(o.jsx)(R.a,{color:"black",className:"icon",size:35})})]})]})}),W=(n(33),function(e){var t=e.list;return Object(o.jsx)("div",{className:"tech-list","aria-label":"List of tech used",children:t.map((function(e){return Object(o.jsx)("span",{children:e},e)}))})}),U=(n(34),function(e){var t=e.link,n=e.children;return Object(o.jsx)("a",{href:t,className:"text-link",target:"_blank",rel:"noreferrer",children:n})}),B=n(44),F=function(e){var t=e.webURL,n=e.codeURL;return Object(o.jsxs)("div",{className:"card-links",children:[Object(o.jsx)(I,{url:t,children:Object(o.jsx)(B.a,{size:40,color:"black"})}),Object(o.jsx)(I,{url:n,children:Object(o.jsx)(E.a,{size:40,color:"black"})})]})},q=n.p+"static/media/menu-ss.3f117062.png",D="https://mcromp.github.io/menu-plan/#/",H="https://github.com/mcromp/menu-plan-backend",V=["React","TypeScript","Redux","Jest","Supertest","Express","Mongoose","MongoDB","SASS/SCSS","NodeJS"],Q=function(){return Object(o.jsxs)("div",{className:"proj-card",children:[Object(o.jsxs)("div",{className:"proj-col-1",children:[Object(o.jsx)(y,{children:"Menu Plan"}),Object(o.jsx)(k,{pic:q,alt:"Menu Plan",link:D})]}),Object(o.jsxs)("div",{className:"proj-col-2",children:[Object(o.jsx)(w,{children:"Intro"}),Object(o.jsxs)(g,{children:["After completing the"," ",Object(o.jsx)(U,{link:"https://fullstackopen.com/",children:"University of Helsinki's incredible full stack MOOC"}),", I was eager to build a project using the MERN stack.","\n\n","In Menu Plan users are able to create, delete, like, or unlike food items then add them to a printable 7-day calendar. Food items are able to be filtered or searched.","\n\n","This was my first project building an entire backend and database. Although I was using several technologies for the first time (for example, Express, MongoDB, and Mongoose), I was able to find a number of excellent resources to complement these projects' documentation."]}),Object(o.jsx)(w,{children:"Tech"}),Object(o.jsxs)(g,{children:["I tested the backend using Jest, Supertest, and for API testing I opted to use VS Code\u2019s REST API Client instead of Postman due to the relatively small size of the project.","\n\n","The client was built with React and TypeScript, React-Router for page routing, and Redux for global state management. For SASS/CSS I used BEM architecture, and handling the async state management I used Redux Thunk.","\n\n","Redux with Redux Thunk is very lightweight but when handling fetching logic with static type checking the code got hairy quickly. The solution I came up with at the time was refactoring the Redux architecture using the"," ",Object(o.jsx)(U,{link:"https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/",children:"Redux ducks architecture"})," ","and creating a custom service function.","\n\n","If I were to change something about this project today I would instead opt to use a premade service library and use a fetch management library like"," ",Object(o.jsx)(U,{link:"https://react-query.tanstack.com/",children:"React Query."})]}),Object(o.jsx)(F,{webURL:D,codeURL:H}),Object(o.jsx)(h,{}),Object(o.jsx)(W,{list:V})]})]})},G=n.p+"static/media/muz-ss.37cc21ac.png",K="https://mcromp.github.io/muzika/",X="https://github.com/mcromp/muzika",Y=["React","React-Router","JavaScript (ES6+)","CSS","ToneJS"],Z=function(){return Object(o.jsxs)("div",{className:"proj-card",children:[Object(o.jsxs)("div",{className:"proj-col-1",children:[Object(o.jsx)(y,{children:"MuZika!"}),Object(o.jsx)(k,{pic:G,alt:"muzika",link:K})]}),Object(o.jsxs)("div",{className:"proj-col-2",children:[Object(o.jsx)(w,{children:"Info"}),Object(o.jsxs)(g,{children:["One of the cool things about web dev is how it\u2019s the intersection of so many interesting technologies. For example"," ",Object(o.jsx)(U,{link:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API",children:"Web Audio API"}),". Synthesizing and manipulating audio directly from the browser is pretty neat, and being a hobbyist musician, I was drawn to creating a musical application for my aural skills.","\n\n","With MuziKa the user plays a chord progression and a \u2018mystery\u2019 note generated in a random musical key. After hearing this the user must guess the mystery note\u2019s relation to the root of the key.","\n\n","The user is able to replay the chord progression entirely, play any of the individual chords within the progression, replay the mystery note, or change to a new random key. A score is kept as a percentage of correct vs incorrect guesses in the top right corner."]}),Object(o.jsx)(w,{children:"Tech"}),Object(o.jsxs)(g,{children:["I knew I wanted to create this project with synthetic tones generated using Web Audio API, but the amount of time needed for me to implement Web Audio API directly was outside the scope of the project. So I began searching for a React library that utilized the API.","\n\n","I choose ToneJS because of the community, well written docs, and focus on tone synthesis. ","\n","Although the library is very robust, ToneJS is designed for continuous playing or looping on a single timeline. I found that my use case of playing short generated timelines caused glitches in audio synthesis. Special care was needed to solve these issues.","\n\n","If I were to add to this project, I would add an interactive tutorial."]}),Object(o.jsx)(F,{webURL:K,codeURL:X}),Object(o.jsx)(h,{}),Object(o.jsx)(W,{list:Y})]})]})},$=n.p+"static/media/flag-ss.bdce1055.png",ee="https://mcromp.github.io/flag-memory/",te="https://github.com/mcromp/flag-memory",ne=["React","JavaScript (ES6+)","CSS"],ce=function(){return Object(o.jsxs)("div",{className:"proj-card",children:[Object(o.jsxs)("div",{className:"proj-col-1",children:[Object(o.jsx)(y,{children:"Flag Memory"}),Object(o.jsx)(k,{pic:$,alt:"flag",link:ee})]}),Object(o.jsxs)("div",{className:"proj-col-2",children:[Object(o.jsx)(w,{children:"Intro"}),Object(o.jsxs)(g,{children:["I built this project because I wanted to create a unique application to better understand React Hooks and REST API data fetching.","\n\n","In Flag Memory the player selects a difficulty setting to start. They are presented with a board of flipped over cards. The player flips over two cards at a time, if the two cards contain a matching flag then their wikipedia summary is revealed."]}),Object(o.jsx)(w,{children:"Tech"}),Object(o.jsxs)(g,{children:["The flags are randomly selected from the"," ",Object(o.jsx)(U,{link:"https://restcountries.eu/",children:"REST Countries API"}),", the summary is obtained from the"," ",Object(o.jsx)(U,{link:"https://www.mediawiki.org/wiki/API:Main_page",children:"MediaWiki API"}),"."]}),Object(o.jsx)(F,{webURL:ee,codeURL:te}),Object(o.jsx)(h,{}),Object(o.jsx)(W,{list:ne})]})]})},se=(n(35),function(){return Object(o.jsxs)("section",{className:"project-dash",id:"projects",children:[Object(o.jsx)(r,{children:"Projects"}),Object(o.jsx)(Q,{}),Object(o.jsx)(Z,{}),Object(o.jsx)(ce,{})]})}),ie=(n(36),function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsxs)("small",{className:"footer__text",children:["Built with ",Object(o.jsx)(u.a,{symbol:"\ud83d\udc93",label:"love"})," from scratch by Matthew Crompton \u2014"," ",Object(o.jsx)("a",{href:"https://github.com/mcromp/portfolio",children:"check out the repo"})]})})}),ae=n(12),oe=n(13),re=function(){return Object(o.jsx)("a",{style:{textDecoration:"none"},href:"/#",children:Object(o.jsx)("h1",{className:"logo",children:"//mcromp"})})},le=function(e){var t=e.to,n=e.children,c=e.setIsMenuOpen;return Object(o.jsx)("a",{href:"#".concat(t),className:"navbar__links",onClick:function(){return c(!1)},children:n})},de=function(e){var t=e.isMenuOpen,n=e.setIsMenuOpen,s=e.isVisible,i=e.menuRef,a=e.isSmallScreen,r=Object(c.useCallback)((function(e){27===e.keyCode&&n(!1)}),[n]);return Object(c.useEffect)((function(){return document.addEventListener("keydown",r,!1),function(){document.removeEventListener("keydown",r,!1)}}),[r]),Object(o.jsxs)("nav",{ref:i,className:t&&s&&a?"navbar--menu-open":"navbar",children:[Object(o.jsx)(le,{to:"about",setIsMenuOpen:n,children:"about me"}),Object(o.jsx)(le,{to:"projects",setIsMenuOpen:n,children:"projects"}),Object(o.jsx)(le,{to:"contact",setIsMenuOpen:n,children:"contact"})]})},je=n(45),ue=n(46),he=function(e){var t=e.isMenuOpen,n=e.isVisible,c=e.setIsMenuOpen;return Object(o.jsx)("button",{className:"menu-toggle",onClick:function(){return c((function(e){return!e}))},"aria-label":"open the menu",children:t&&n?Object(o.jsx)(je.a,{color:"black",size:45}):Object(o.jsx)(ue.a,{color:"black",size:40})})},be=(n(37),function(){var e=Object(c.useState)(!0),t=Object(f.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(!1),a=Object(f.a)(i,2),r=a[0],l=a[1],d=Object(oe.useMediaQuery)({query:"(max-width: 750px)"});Object(c.useEffect)((function(){p.a.from(".header",{autoAlpha:0,ease:"easeIn",delay:.8,duration:1})}),[]),Object(A.useScrollPosition)((function(e){var t=e.prevPos,n=e.currPos;s(n.y>=t.y||0===n.y)}),[n],void 0,void 0,100),Object(c.useLayoutEffect)((function(){document.body.style.overflow=r?"hidden":"unset"}),[r]);var j=Object(ae.a)((function(){r&&l(!1)})),u=Object(f.a)(j,1)[0];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:r&&n?"modal--open":"modal"}),Object(o.jsxs)("header",{className:n?"header":"header--hidden",children:[Object(o.jsx)(re,{}),d?Object(o.jsx)(he,{isMenuOpen:r,isVisible:n,setIsMenuOpen:l}):null,Object(o.jsx)(de,{isSmallScreen:d,isMenuOpen:r,setIsMenuOpen:l,isVisible:n,menuRef:u})]})]})});n(38);var me=function(){return Object(c.useEffect)((function(){p.a.to(".App",{css:{visibility:"visible"}})}),[]),Object(o.jsxs)("div",{className:"App",style:{visibility:"hidden"},children:[Object(o.jsx)(be,{}),Object(o.jsxs)("div",{children:[Object(o.jsx)(L,{}),Object(o.jsx)(N,{}),Object(o.jsx)(se,{}),Object(o.jsx)(T,{})]}),Object(o.jsx)(M,{}),Object(o.jsx)(ie,{})]})};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(me,{})}),document.getElementById("root"))}],[[39,1,2]]]);
//# sourceMappingURL=main.f949c46e.chunk.js.map