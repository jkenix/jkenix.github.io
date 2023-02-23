"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[509],{405:(t,e,r)=>{r.d(e,{B6:()=>F,ql:()=>$});var n=r(294),i=r(697),o=r.n(i),a=r(590),s=r.n(a),c=r(143),u=r.n(c),l=r(774),p=r.n(l);function f(){return f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},f.apply(this,arguments)}function d(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function m(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)e.indexOf(r=o[n])>=0||(i[r]=t[r]);return i}var y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},T={rel:["amphtml","canonical","alternate"]},g={type:["application/ld+json"]},b={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},v=Object.keys(y).map((function(t){return y[t]})),A={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},C=Object.keys(A).reduce((function(t,e){return t[A[e]]=e,t}),{}),O=function(t,e){for(var r=t.length-1;r>=0;r-=1){var n=t[r];if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}return null},S=function(t){var e=O(t,y.TITLE),r=O(t,"titleTemplate");if(Array.isArray(e)&&(e=e.join("")),r&&e)return r.replace(/%s/g,(function(){return e}));var n=O(t,"defaultTitle");return e||n||void 0},E=function(t){return O(t,"onChangeClientState")||function(){}},I=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return f({},t,e)}),{})},w=function(t,e){return e.filter((function(t){return void 0!==t[y.BASE]})).map((function(t){return t[y.BASE]})).reverse().reduce((function(e,r){if(!e.length)for(var n=Object.keys(r),i=0;i<n.length;i+=1){var o=n[i].toLowerCase();if(-1!==t.indexOf(o)&&r[o])return e.concat(r)}return e}),[])},P=function(t,e,r){var n={};return r.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+t+' should be of type "Array". Instead found type "'+typeof e[t]+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,r){var i={};r.filter((function(t){for(var r,o=Object.keys(t),a=0;a<o.length;a+=1){var s=o[a],c=s.toLowerCase();-1===e.indexOf(c)||"rel"===r&&"canonical"===t[r].toLowerCase()||"rel"===c&&"stylesheet"===t[c].toLowerCase()||(r=c),-1===e.indexOf(s)||"innerHTML"!==s&&"cssText"!==s&&"itemprop"!==s||(r=s)}if(!r||!t[r])return!1;var u=t[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][u]&&(i[r][u]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(i),a=0;a<o.length;a+=1){var s=o[a],c=f({},n[s],i[s]);n[s]=c}return t}),[]).reverse()},L=function(t,e){if(Array.isArray(t)&&t.length)for(var r=0;r<t.length;r+=1)if(t[r][e])return!0;return!1},x=function(t){return Array.isArray(t)?t.join(""):t},j=function(t,e){return Array.isArray(t)?t.reduce((function(t,r){return function(t,e){for(var r=Object.keys(t),n=0;n<r.length;n+=1)if(e[r[n]]&&e[r[n]].includes(t[r[n]]))return!0;return!1}(r,e)?t.priority.push(r):t.default.push(r),t}),{priority:[],default:[]}):{default:t}},k=function(t,e){var r;return f({},t,((r={})[e]=void 0,r))},M=[y.NOSCRIPT,y.SCRIPT,y.STYLE],H=function(t,e){return void 0===e&&(e=!0),!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},N=function(t){return Object.keys(t).reduce((function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n}),"")},R=function(t,e){return void 0===e&&(e={}),Object.keys(t).reduce((function(e,r){return e[A[r]||r]=t[r],e}),e)},D=function(t,e){return e.map((function(e,r){var i,o=((i={key:r})["data-rh"]=!0,i);return Object.keys(e).forEach((function(t){var r=A[t]||t;"innerHTML"===r||"cssText"===r?o.dangerouslySetInnerHTML={__html:e.innerHTML||e.cssText}:o[r]=e[t]})),n.createElement(t,o)}))},U=function(t,e,r){switch(t){case y.TITLE:return{toComponent:function(){return r=e.titleAttributes,(i={key:t=e.title})["data-rh"]=!0,o=R(r,i),[n.createElement(y.TITLE,o,t)];var t,r,i,o},toString:function(){return function(t,e,r,n){var i=N(r),o=x(e);return i?"<"+t+' data-rh="true" '+i+">"+H(o,n)+"</"+t+">":"<"+t+' data-rh="true">'+H(o,n)+"</"+t+">"}(t,e.title,e.titleAttributes,r)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return R(e)},toString:function(){return N(e)}};default:return{toComponent:function(){return D(t,e)},toString:function(){return function(t,e,r){return e.reduce((function(e,n){var i=Object.keys(n).filter((function(t){return!("innerHTML"===t||"cssText"===t)})).reduce((function(t,e){var i=void 0===n[e]?e:e+'="'+H(n[e],r)+'"';return t?t+" "+i:i}),""),o=n.innerHTML||n.cssText||"",a=-1===M.indexOf(t);return e+"<"+t+' data-rh="true" '+i+(a?"/>":">"+o+"</"+t+">")}),"")}(t,e,r)}}}},q=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,i=t.htmlAttributes,o=t.noscriptTags,a=t.styleTags,s=t.title,c=void 0===s?"":s,u=t.titleAttributes,l=t.linkTags,p=t.metaTags,f=t.scriptTags,d={toComponent:function(){},toString:function(){return""}};if(t.prioritizeSeoTags){var h=function(t){var e=t.linkTags,r=t.scriptTags,n=t.encode,i=j(t.metaTags,b),o=j(e,T),a=j(r,g);return{priorityMethods:{toComponent:function(){return[].concat(D(y.META,i.priority),D(y.LINK,o.priority),D(y.SCRIPT,a.priority))},toString:function(){return U(y.META,i.priority,n)+" "+U(y.LINK,o.priority,n)+" "+U(y.SCRIPT,a.priority,n)}},metaTags:i.default,linkTags:o.default,scriptTags:a.default}}(t);d=h.priorityMethods,l=h.linkTags,p=h.metaTags,f=h.scriptTags}return{priority:d,base:U(y.BASE,e,n),bodyAttributes:U("bodyAttributes",r,n),htmlAttributes:U("htmlAttributes",i,n),link:U(y.LINK,l,n),meta:U(y.META,p,n),noscript:U(y.NOSCRIPT,o,n),script:U(y.SCRIPT,f,n),style:U(y.STYLE,a,n),title:U(y.TITLE,{title:c,titleAttributes:u},n)}},Y=[],B=function(t,e){var r=this;void 0===e&&(e="undefined"!=typeof document),this.instances=[],this.value={setHelmet:function(t){r.context.helmet=t},helmetInstances:{get:function(){return r.canUseDOM?Y:r.instances},add:function(t){(r.canUseDOM?Y:r.instances).push(t)},remove:function(t){var e=(r.canUseDOM?Y:r.instances).indexOf(t);(r.canUseDOM?Y:r.instances).splice(e,1)}}},this.context=t,this.canUseDOM=e,e||(t.helmet=q({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},K=n.createContext({}),_=o().shape({setHelmet:o().func,helmetInstances:o().shape({get:o().func,add:o().func,remove:o().func})}),z="undefined"!=typeof document,F=function(t){function e(r){var n;return(n=t.call(this,r)||this).helmetData=new B(n.props.context,e.canUseDOM),n}return d(e,t),e.prototype.render=function(){return n.createElement(K.Provider,{value:this.helmetData.value},this.props.children)},e}(n.Component);F.canUseDOM=z,F.propTypes={context:o().shape({helmet:o().shape()}),children:o().node.isRequired},F.defaultProps={context:{}},F.displayName="HelmetProvider";var G=function(t,e){var r,n=document.head||document.querySelector(y.HEAD),i=n.querySelectorAll(t+"[data-rh]"),o=[].slice.call(i),a=[];return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&("innerHTML"===i?n.innerHTML=e.innerHTML:"cssText"===i?n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText)):n.setAttribute(i,void 0===e[i]?"":e[i]));n.setAttribute("data-rh","true"),o.some((function(t,e){return r=e,n.isEqualNode(t)}))?o.splice(r,1):a.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),a.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:a}},W=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute("data-rh"),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(e),s=0;s<a.length;s+=1){var c=a[s],u=e[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===i.indexOf(c)&&i.push(c);var l=o.indexOf(c);-1!==l&&o.splice(l,1)}for(var p=o.length-1;p>=0;p-=1)r.removeAttribute(o[p]);i.length===o.length?r.removeAttribute("data-rh"):r.getAttribute("data-rh")!==a.join(",")&&r.setAttribute("data-rh",a.join(","))}},J=function(t,e){var r=t.baseTag,n=t.htmlAttributes,i=t.linkTags,o=t.metaTags,a=t.noscriptTags,s=t.onChangeClientState,c=t.scriptTags,u=t.styleTags,l=t.title,p=t.titleAttributes;W(y.BODY,t.bodyAttributes),W(y.HTML,n),function(t,e){void 0!==t&&document.title!==t&&(document.title=x(t)),W(y.TITLE,e)}(l,p);var f={baseTag:G(y.BASE,r),linkTags:G(y.LINK,i),metaTags:G(y.META,o),noscriptTags:G(y.NOSCRIPT,a),scriptTags:G(y.SCRIPT,c),styleTags:G(y.STYLE,u)},d={},h={};Object.keys(f).forEach((function(t){var e=f[t],r=e.newTags,n=e.oldTags;r.length&&(d[t]=r),n.length&&(h[t]=f[t].oldTags)})),e&&e(),s(t,d,h)},Q=null,V=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).rendered=!1,e}d(e,t);var r=e.prototype;return r.shouldComponentUpdate=function(t){return!p()(t,this.props)},r.componentDidUpdate=function(){this.emitChange()},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},r.emitChange=function(){var t,e,r=this.props.context,n=r.setHelmet,i=null,o=(t=r.helmetInstances.get().map((function(t){var e=f({},t.props);return delete e.context,e})),{baseTag:w(["href"],t),bodyAttributes:I("bodyAttributes",t),defer:O(t,"defer"),encode:O(t,"encodeSpecialCharacters"),htmlAttributes:I("htmlAttributes",t),linkTags:P(y.LINK,["rel","href"],t),metaTags:P(y.META,["name","charset","http-equiv","property","itemprop"],t),noscriptTags:P(y.NOSCRIPT,["innerHTML"],t),onChangeClientState:E(t),scriptTags:P(y.SCRIPT,["src","innerHTML"],t),styleTags:P(y.STYLE,["cssText"],t),title:S(t),titleAttributes:I("titleAttributes",t),prioritizeSeoTags:L(t,"prioritizeSeoTags")});F.canUseDOM?(e=o,Q&&cancelAnimationFrame(Q),e.defer?Q=requestAnimationFrame((function(){J(e,(function(){Q=null}))})):(J(e),Q=null)):q&&(i=q(o)),n(i)},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},r.render=function(){return this.init(),null},e}(n.Component);V.propTypes={context:_.isRequired},V.displayName="HelmetDispatcher";var X=["children"],Z=["children"],$=function(t){function e(){return t.apply(this,arguments)||this}d(e,t);var r=e.prototype;return r.shouldComponentUpdate=function(t){return!s()(k(this.props,"helmetData"),k(t,"helmetData"))},r.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:e};case y.STYLE:return{cssText:e};default:throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},r.flattenArrayTypeChildren=function(t){var e,r=t.child,n=t.arrayTypeChildren;return f({},n,((e={})[r.type]=[].concat(n[r.type]||[],[f({},t.newChildProps,this.mapNestedChildrenToProps(r,t.nestedChildren))]),e))},r.mapObjectTypeChildren=function(t){var e,r,n=t.child,i=t.newProps,o=t.newChildProps,a=t.nestedChildren;switch(n.type){case y.TITLE:return f({},i,((e={})[n.type]=a,e.titleAttributes=f({},o),e));case y.BODY:return f({},i,{bodyAttributes:f({},o)});case y.HTML:return f({},i,{htmlAttributes:f({},o)});default:return f({},i,((r={})[n.type]=f({},o),r))}},r.mapArrayTypeChildrenToProps=function(t,e){var r=f({},e);return Object.keys(t).forEach((function(e){var n;r=f({},r,((n={})[e]=t[e],n))})),r},r.warnOnInvalidChildren=function(t,e){return u()(v.some((function(e){return t.type===e})),"function"==typeof t.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+v.join(", ")+" are allowed. Helmet does not support rendering <"+t.type+"> elements. Refer to our API for more information."),u()(!e||"string"==typeof e||Array.isArray(e)&&!e.some((function(t){return"string"!=typeof t})),"Helmet expects a string as a child of <"+t.type+">. Did you forget to wrap your children in braces? ( <"+t.type+">{``}</"+t.type+"> ) Refer to our API for more information."),!0},r.mapChildrenToProps=function(t,e){var r=this,i={};return n.Children.forEach(t,(function(t){if(t&&t.props){var n=t.props,o=n.children,a=m(n,X),s=Object.keys(a).reduce((function(t,e){return t[C[e]||e]=a[e],t}),{}),c=t.type;switch("symbol"==typeof c?c=c.toString():r.warnOnInvalidChildren(t,o),c){case y.FRAGMENT:e=r.mapChildrenToProps(o,e);break;case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:i=r.flattenArrayTypeChildren({child:t,arrayTypeChildren:i,newChildProps:s,nestedChildren:o});break;default:e=r.mapObjectTypeChildren({child:t,newProps:e,newChildProps:s,nestedChildren:o})}}})),this.mapArrayTypeChildrenToProps(i,e)},r.render=function(){var t=this.props,e=t.children,r=m(t,Z),i=f({},r),o=r.helmetData;return e&&(i=this.mapChildrenToProps(e,i)),!o||o instanceof B||(o=new B(o.context,o.instances)),o?n.createElement(V,f({},i,{context:o.value,helmetData:void 0})):n.createElement(K.Consumer,null,(function(t){return n.createElement(V,f({},i,{context:t}))}))},e}(n.Component);$.propTypes={base:o().object,bodyAttributes:o().object,children:o().oneOfType([o().arrayOf(o().node),o().node]),defaultTitle:o().string,defer:o().bool,encodeSpecialCharacters:o().bool,htmlAttributes:o().object,link:o().arrayOf(o().object),meta:o().arrayOf(o().object),noscript:o().arrayOf(o().object),onChangeClientState:o().func,script:o().arrayOf(o().object),style:o().arrayOf(o().object),title:o().string,titleAttributes:o().object,titleTemplate:o().string,prioritizeSeoTags:o().bool,helmetData:o().object},$.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},$.displayName="Helmet"}}]);
//# sourceMappingURL=npm.react-helmet-async.js.map