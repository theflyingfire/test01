(self.webpackChunkthefireflyer=self.webpackChunkthefireflyer||[]).push([[879],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,l,c,u;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(l=s;0!=l--;)if(!a(e[l],o[l]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!a(l.value[1],o.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(l=s;0!=l--;)if(e[l]!==o[l])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,c[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!a(e[c[l]],o[c[l]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,i=r(7294),a=(n=i)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,c=[];function u(){l=e(c.map((function(e){return e.props}))),d.canUseDOM?t(l):r&&(l=r(l))}var d=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,c=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){c.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},o.render=function(){return a.createElement(n,this.props)},i}(i.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",s),d}}},1496:function(e,t,r){"use strict";var n=r(5318);var i,a=n(r(1506)),o=n(r(5354)),s=n(r(7316)),l=n(r(7154)),c=n(r(7294)),u=n(r(5697)),d=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,l.default)({},e),r=t.resolutions,n=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,r=e.fixed,n=h(t||r||[]);return n&&n.src},h=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),y=function(e){var t=f(e),r=m(t);return g[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,w=v&&window.IntersectionObserver,E=new WeakMap;function T(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:a}),r&&c.default.createElement("source",{media:i,srcSet:r,sizes:a}))}))}function S(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function C(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function O(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function A(e,t){var r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?n:r)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var L=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),E.set(e,t)),function(){r.unobserve(e),E.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?A(e,!0):"")+A(e)})).join("")+"<img "+c+o+s+r+n+t+a+i+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=c.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,i=e.generateSources,a=e.spreadProps,o=e.ariaHidden,s=c.default.createElement(I,(0,l.default)({ref:t,src:r},a,{ariaHidden:o}));return n.length>1?c.default.createElement("picture",null,i(n),s):s})),I=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,i=e.src,a=e.style,o=e.onLoad,u=e.onError,f=e.loading,p=e.draggable,m=e.ariaHidden,h=(0,s.default)(e,d);return c.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:r,srcSet:n,src:i},h,{onLoad:o,onError:u,ref:t,loading:f,draggable:p,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));I.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var P=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&y(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&w&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||v&&(b||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)(r)),r.handleRef=r.handleRef.bind((0,a.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:y(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=y(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=f(e),(r=m(t))&&(g[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=f(this.props),t=e.title,r=e.alt,n=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,d=void 0===u?{}:u,p=e.placeholderClassName,m=e.fluid,g=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,w=e.itemProp,E=e.loading,S=e.draggable,A=m||g;if(!A)return null;var L=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,l.default)({opacity:L?1:0,transition:P?"opacity "+b+"ms":"none"},s),R="boolean"==typeof y?"lightgray":y,_={transitionDelay:b+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},P&&_,s,d),M={title:t,alt:this.state.isVisible?"":r,style:N,className:p,itemProp:w},B=this.state.isHydrated?h(A):A[0];if(m)return c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:B.maxWidth?B.maxWidth+"px":null,maxHeight:B.maxHeight?B.maxHeight+"px":null},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(B.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/B.aspectRatio+"%"}}),R&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&_)}),B.base64&&c.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:B.base64,spreadProps:M,imageVariants:A,generateSources:O}),B.tracedSVG&&c.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:B.tracedSVG,spreadProps:M,imageVariants:A,generateSources:C}),this.state.isVisible&&c.default.createElement("picture",null,T(A),c.default.createElement(I,{alt:r,title:t,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:r,title:t,loading:E},B,{imageVariants:A}))}}));if(g){var H=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},a);return"inherit"===a.display&&delete H.display,c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},R&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:R,width:B.width,opacity:this.state.imgLoaded?0:1,height:B.height},P&&_)}),B.base64&&c.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:B.base64,spreadProps:M,imageVariants:A,generateSources:O}),B.tracedSVG&&c.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:B.tracedSVG,spreadProps:M,imageVariants:A,generateSources:C}),this.state.isVisible&&c.default.createElement("picture",null,T(A),c.default.createElement(I,{alt:r,title:t,width:B.width,height:B.height,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:r,title:t,loading:E},B,{imageVariants:A}))}}))}return null},t}(c.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),R=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function _(e){return function(t,r,n){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[r]=e,i),t,"prop",n)}}P.propTypes={resolutions:j,sizes:R,fixed:_(u.default.oneOfType([j,u.default.arrayOf(j)])),fluid:_(u.default.oneOfType([R,u.default.arrayOf(R)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool}},4640:function(e,t,r){"use strict";r.d(t,{ZP:function(){return u},d8:function(){return d}});var n=r(7294),i=r(5444),a=(r(3751),r(1496),r(9)),o=a.default.div.withConfig({displayName:"Popup__PopupSection",componentId:"sc-1j8hwgz-0"})(["overflow:hidden;position:fixed;height:100vh;width:100vw;top:0;left:0;background:black;display:none;grid-auto-flow:row;grid-template-columns:auto auto;text-align:center;@keyframes on-close{0%{height:100vh;}100%{height:0vh;}}@media only screen and (max-width:900px){grid-template-columns:auto;}"]),s=a.default.div.withConfig({displayName:"Popup__Section",componentId:"sc-1j8hwgz-1"})(["height:90%;width:100%;margin-top:15%;h1{font-size:500%;}img{position:absolute;width:30%;top:15vh;left:10%;}@media only screen and (max-width:900px){img{top:10vh;left:35%;}}"]),l=a.default.button.withConfig({displayName:"Popup__CloseButton",componentId:"sc-1j8hwgz-2"})(["position:absolute;bottom:3vh;left:10vw;width:80vw;height:10vh;background:rgba(0,0,0,0);border:2px solid white;color:white;.box{z-index:-1;position:absolute;left:0;top:0;width:2%;height:100%;background:rgb(240,240,240);-webkit-transition:width 2s;}:hover{.box{width:5%;-webkit-transition:width 1s;}}"]),c=function(e){e.data;return n.createElement(o,{id:"popup",onAnimationEnd:function(e){"on-close"==e.animationName&&(document.getElementById("popup").style.display="none")}},n.createElement(s,null,n.createElement("img",{src:(0,i.withPrefix)("blm_icon2.png")})),n.createElement(s,null,n.createElement("h1",null,"Black"),n.createElement("h1",null,"Lives"),n.createElement("h1",null,"Matter.")),n.createElement(l,{onClickCapture:function(){d("blm_popup","true",80);var e=document.getElementById("popup");e.style.animation="on-close 5s",e.style.height="0"}},n.createElement("h1",null,"✊🏿No Justice, No Peace"),n.createElement("div",{className:"box"})))},u=function(e){var t=e.children;(0,i.useStaticQuery)("3649515864");return n.useEffect((function(){var e=window.scrollY,t=document.getElementById("navBar"),r=document.getElementById("navBarMobile");window.addEventListener("scroll",(function(){window.pageYOffset>10?(t.style.setProperty("--nav_bar_blur","5px"),t.style.setProperty("--nav_bar_color","rgba(0,0,0,0.7)"),t.style.setProperty("--nav_bar_border_style","solid")):(t.style.setProperty("--nav_bar_blur","0px"),t.style.setProperty("--nav_bar_color","rgba(0,0,0,0.0)"),t.style.setProperty("--nav_bar_border_style","none"));var n=window.scrollY;r.style.top=n>e?"-14vh":"0",e=n})),"true"!=f("blm_popup")&&(document.getElementById("popup").style.display="grid"),d("test","test",100)})),n.createElement(n.Fragment,null,n.createElement("main",null,t),n.createElement("div",{className:"nav-bar",id:"navBar"},n.createElement(i.Link,{to:"/"},n.createElement("h1",null,"Home")),n.createElement(i.Link,{to:"/gallery"},n.createElement("h1",null,"Gallery")),n.createElement(i.Link,{to:"/blog"},n.createElement("h1",null,"Blog")),n.createElement(i.Link,{to:"/about"},n.createElement("h1",null,"About"))),n.createElement(i.Link,{to:"/",className:"nav-logo"},n.createElement("img",{alt:"Logo",src:(0,i.withPrefix)("/icon__.png")})),n.createElement("div",{className:"nav-bar-mobile",id:"navBarMobile"},n.createElement(i.Link,{to:"/",id:"logo"},n.createElement("img",{alt:"Logo",src:(0,i.withPrefix)("/icon__.png")})),n.createElement("a",{id:"menu-open",onClick:function(){document.getElementById("menu").style.width="70vw",document.getElementById("menu-close").style.display="block"}},n.createElement("h1",null,"☰")),n.createElement("a",{onClick:function(){document.getElementById("menu").style.width="0",document.getElementById("menu-close").style.display="none"},id:"menu-close"}),n.createElement("center",{id:"menu"},n.createElement(i.Link,{to:"/"},n.createElement("h1",null,"Home")),n.createElement(i.Link,{to:"/gallery"},n.createElement("h1",null,"Gallery")),n.createElement(i.Link,{to:"/blog"},n.createElement("h1",null,"Blog")),n.createElement(i.Link,{to:"/about"},n.createElement("h1",null,"About")))),n.createElement(c,null))};function d(e,t,r){if("true"!=f("accepted_cookies")){alert("this website uses cookies");var n=new Date;n.setTime(n.getTime()+24*r*60*60*1e3);var i="expires="+n.toUTCString();document.cookie="accepted_cookies=true;"+i+";path=/"}var a=new Date;a.setTime(a.getTime()+24*r*60*60*1e3);var o="expires="+a.toUTCString();document.cookie=e+"="+t+";"+o+";path=/"}function f(e){for(var t=e+"=",r=decodeURIComponent(document.cookie).split(";"),n=0;n<r.length;n++){for(var i=r[n];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return""}},3751:function(e,t,r){"use strict";r.d(t,{Z:function(){return be}});var n,i,a,o,s=r(7294),l=r(5697),c=r.n(l),u=r(4839),d=r.n(u),f=r(2993),p=r.n(f),m=r(6494),h=r.n(m),g="bodyAttributes",y="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),E="cssText",T="href",S="http-equiv",C="innerHTML",O="itemprop",A="name",L="property",k="rel",x="src",I="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j="defaultTitle",R="defer",_="encodeSpecialCharacters",N="onChangeClientState",M="titleTemplate",B=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),H=[v.NOSCRIPT,v.SCRIPT,v.STYLE],z="data-react-helmet",V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=$(e,v.TITLE),r=$(e,M);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=$(e,j);return t||n||void 0},K=function(e){return $(e,N)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var a=n[i].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+V(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),o=0;o<a.length;o++){var s=a[o],l=s.toLowerCase();-1===t.indexOf(l)||r===k&&"canonical"===e[r].toLowerCase()||l===k&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(s)||s!==C&&s!==E&&s!==O||(r=s)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][c]&&(i[r][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var s=a[o],l=h()({},n[s],i[s]);n[s]=l}return e}),[]).reverse()},$=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;le(v.BODY,n),le(v.HTML,i),se(d,f);var p={baseTag:ce(v.BASE,r),linkTags:ce(v.LINK,a),metaTags:ce(v.META,o),noscriptTags:ce(v.NOSCRIPT,s),scriptTags:ce(v.SCRIPT,c),styleTags:ce(v.STYLE,u)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,m,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),le(v.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(z),i=n?n.split(","):[],a=[].concat(i),o=Object.keys(t),s=0;s<o.length;s++){var l=o[s],c=t[l]||"";r.getAttribute(l)!==c&&r.setAttribute(l,c),-1===i.indexOf(l)&&i.push(l);var u=a.indexOf(l);-1!==u&&a.splice(u,1)}for(var d=a.length-1;d>=0;d--)r.removeAttribute(a[d]);i.length===a.length?r.removeAttribute(z):r.getAttribute(z)!==o.join(",")&&r.setAttribute(z,o.join(","))}},ce=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(n),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(z,"true"),i.some((function(e,t){return o=t,r.isEqualNode(e)}))?i.splice(o,1):a.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[z]=!0,i=de(r,n),[s.createElement(v.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=ue(r),a=oe(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+Y(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case y:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})[z]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===C||r===E){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),s.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+Y(n[t],r)+'"';return e?e+" "+i:i}),""),a=n.innerHTML||n.cssText||"",o=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.scriptTags,c=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:fe(v.BASE,t,n),bodyAttributes:fe(g,r,n),htmlAttributes:fe(y,i,n),link:fe(v.LINK,a,n),meta:fe(v.META,o,n),noscript:fe(v.NOSCRIPT,s,n),script:fe(v.SCRIPT,l,n),style:fe(v.STYLE,c,n),title:fe(v.TITLE,{title:d,titleAttributes:f},n)}},me=d()((function(e){return{baseTag:J([T,I],e),bodyAttributes:Z(g,e),defer:$(e,R),encode:$(e,_),htmlAttributes:Z(y,e),linkTags:Q(v.LINK,[k,T],e),metaTags:Q(v.META,[A,w,S,L,O],e),noscriptTags:Q(v.NOSCRIPT,[C],e),onChangeClientState:K(e),scriptTags:Q(v.SCRIPT,[x,C],e),styleTags:Q(v.STYLE,[E],e),title:G(e),titleAttributes:Z(b,e)}}),(function(e){ie&&re(ie),e.defer?ie=te((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),pe)((function(){return null})),he=(i=me,o=a=function(e){function t(){return q(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return F({},n,((t={})[r.type]=[].concat(n[r.type]||[],[F({},i,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(n.type){case v.TITLE:return F({},i,((t={})[n.type]=o,t.titleAttributes=F({},a),t));case v.BODY:return F({},i,{bodyAttributes:F({},a)});case v.HTML:return F({},i,{htmlAttributes:F({},a)})}return F({},i,((r={})[n.type]=F({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=F({},t);return Object.keys(e).forEach((function(t){var n;r=F({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return s.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[B[r]||r]=e[r],t}),t)}(U(i,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=F({},r);return t&&(n=this.mapChildrenToProps(t,n)),s.createElement(i,n)},D(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(s.Component),a.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind;var ge=r(5444);function ye(e){var t,r,n=e.description,i=e.lang,a=e.meta,o=e.title,l=(0,ge.useStaticQuery)("63159454").site,c=n||l.siteMetadata.description,u=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return s.createElement(he,{htmlAttributes:{lang:i},title:o,titleTemplate:u?"%s | "+u:null,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=l.siteMetadata)||void 0===r?void 0:r.author)||""},{name:"twitter:title",content:o},{name:"twitter:description",content:c},{name:"google-site-verification",content:"NLC42epCCmMzGeoDmsBFU1sqliTkROSiWO_Zg5Z90w8"}].concat(a)})}ye.defaultProps={lang:"en",meta:[],description:""};var be=ye}}]);
//# sourceMappingURL=d927caf59b2a415ccfb6639faf1e2b7e83058a34-9aeeb9db9bedb7ee4223.js.map