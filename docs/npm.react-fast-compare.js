(self.webpackChunk=self.webpackChunk||[]).push([[513],{590:e=>{var r="undefined"!=typeof Element,t="function"==typeof Map,n="function"==typeof Set,f="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var u,a,c,s;if(Array.isArray(e)){if((u=e.length)!=i.length)return!1;for(a=u;0!=a--;)if(!o(e[a],i[a]))return!1;return!0}if(t&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(a=s.next()).done;)if(!i.has(a.value[0]))return!1;for(s=e.entries();!(a=s.next()).done;)if(!o(a.value[1],i.get(a.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(a=s.next()).done;)if(!i.has(a.value[0]))return!1;return!0}if(f&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((u=e.length)!=i.length)return!1;for(a=u;0!=a--;)if(e[a]!==i[a])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((u=(c=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(a=u;0!=a--;)if(!Object.prototype.hasOwnProperty.call(i,c[a]))return!1;if(r&&e instanceof Element)return!1;for(a=u;0!=a--;)if(("_owner"!==c[a]&&"__v"!==c[a]&&"__o"!==c[a]||!e.$$typeof)&&!o(e[c[a]],i[c[a]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,r){try{return o(e,r)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}}}]);
//# sourceMappingURL=npm.react-fast-compare.js.map