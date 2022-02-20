!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){var o=n(1);function r(t,e,n){Array.isArray(t)?t.push(e):t[n]=e}t.exports=function(t){var e,n,i,c=[];if(Array.isArray(t))n=[],e=t.length-1;else{if("object"!=typeof t||null===t)throw new TypeError("Expecting an Array or an Object, but `"+(null===t?"null":typeof t)+"` provided.");n={},i=Object.keys(t),e=i.length-1}return function n(u,l){var a,s,d;for(s=i?i[l]:l,Array.isArray(t[s])||(void 0===t[s]?t[s]=[]:t[s]=[t[s]]),a=0;a<t[s].length;a++)f=u,r(d=Array.isArray(f)?[].concat(f):o(f),t[s][a],s),l>=e?c.push(d):n(d,l+1);var f}(n,0),c}},function(t,e){t.exports=function(){for(var t={},e=0;e<arguments.length;e++){var o=arguments[e];for(var r in o)n.call(o,r)&&(t[r]=o[r])}return t};var n=Object.prototype.hasOwnProperty},function(t,e,n){"use strict";n.r(e);var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},i=function(t){return null!=t&&"object"===(void 0===t?"undefined":r(t))&&1===t.nodeType&&"object"===r(t.style)&&"object"===r(t.ownerDocument)};function c(t=[]){const[e=[],...n]=t;return 0===n.length?e:n.reduce((t,e)=>t.filter(t=>e.includes(t)),e)}function u(t=[]){if(0===t.length)return new RegExp(".^");const e=t.map(t=>"string"==typeof t?"^"+(t.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".+")+"$"):t.source).join("|");return new RegExp(e)}!function(t){t.id="id",t.class="class",t.tag="tag",t.attribute="attribute",t.nthchild="nthchild",t.nthoftype="nthoftype"}(o||(o={}));function l(t="unknown problem",...e){console.warn("CssSelectorGenerator: "+t,...e)}const a={selectors:[o.id,o.class,o.tag,o.attribute],includeTag:!1,whitelist:[],blacklist:[],combineWithinSelector:!0,combineBetweenSelectors:!0,root:null,maxCombinations:Number.POSITIVE_INFINITY,maxCandidates:Number.POSITIVE_INFINITY};function s(t){return Array.isArray(t)?t.filter(t=>{return e=o,n=t,Object.values(e).includes(n);var e,n}):[]}function d(t){return"string"==typeof t||function(t){return t instanceof RegExp}(t)}function f(t){return Array.isArray(t)?t.filter(d):[]}function m(t){const e=[Node.DOCUMENT_NODE,Node.DOCUMENT_FRAGMENT_NODE,Node.ELEMENT_NODE];return function(t){return t instanceof Node}(t)&&e.includes(t.nodeType)}function h(t,e){if(m(t))return t.contains(e)||l("element root mismatch","Provided root does not contain the element. This will most likely result in producing a fallback selector using element's real root node. If you plan to use the selector using provided root (e.g. `root.querySelector`), it will nto work as intended."),t;const n=e.getRootNode({composed:!1});return m(n)?(n!==document&&l("shadow root inferred","You did not provide a root and the element is a child of Shadow DOM. This will produce a selector using ShadowRoot as a root. If you plan to use the selector using document as a root (e.g. `document.querySelector`), it will not work as intended."),n):e.ownerDocument.querySelector(":root")}function p(t){return"number"==typeof t?t:Number.POSITIVE_INFINITY}function b(t,e,n){const o=Array.from(h(n,t[0]).querySelectorAll(e));return o.length===t.length&&t.every(t=>o.includes(t))}function g(t,e){return e=null!=e?e:t[0].ownerDocument.querySelector(":root"),c(t.map(t=>function(t,e){const n=[];let o=t;for(;i(o)&&o!==e;)n.push(o),o=o.parentElement;return n}(t,e)))}function y(t){const e=t.parentNode;if(e){const n=Array.from(e.childNodes).filter(i).indexOf(t);if(n>-1)return[`:nth-child(${n+1})`]}return[]}function w(t){return c(t.map(y))}const v=new RegExp(["^$","\\s","^\\d"].join("|")),S=new RegExp(["^$","^\\d"].join("|")),E=[o.nthoftype,o.tag,o.id,o.class,o.attribute,o.nthchild];function k(t){return[":root",...g([t]).map(t=>w([t])[0]).reverse()].join(" > ")}var x=n(0),N=n.n(x);const O=u(["class","id","ng-*"]);function T({nodeName:t}){return`[${t}]`}function j({nodeName:t,nodeValue:e}){return`[${t}='${L(e)}']`}function A({nodeName:t}){return!O.test(t)}function I(t){const e=Array.from(t.attributes).filter(A);return[...e.map(T),...e.map(j)]}function _(t){return(t.getAttribute("class")||"").trim().split(/\s+/).filter(t=>!S.test(t)).map(t=>"."+L(t))}function C(t){const e=[...new Set(t.map(t=>L(t.tagName.toLowerCase())))];return 0===e.length||e.length>1?[]:[e[0]]}function H(t){const e=C([t])[0],n=t.parentElement;if(n){const o=Array.from(n.children).filter(t=>t.tagName.toLowerCase()===e).indexOf(t);if(o>-1)return[`${e}:nth-of-type(${o+1})`]}return[]}function M(t=[],{maxResults:e=Number.POSITIVE_INFINITY}={}){const n=[];let o=0,r=D(1);for(;r.length<=t.length&&o<e;)o+=1,n.push(r.map(e=>t[e])),r=$(r,t.length-1);return n}function $(t=[],e=0){const n=t.length;if(0===n)return[];const o=[...t];o[n-1]+=1;for(let t=n-1;t>=0;t--)if(o[t]>e){if(0===t)return D(n+1);o[t-1]++,o[t]=o[t-1]+1}return o[n-1]>e?D(n+1):o}function D(t=1){return Array.from(Array(t).keys())}const P=":".charCodeAt(0).toString(16).toUpperCase(),R=/[ !"#$%&'()\[\]{|}<>*+,./;=?@^`~\\]/;function L(t=""){var e,n;return null!==(n=null===(e=null===CSS||void 0===CSS?void 0:CSS.escape)||void 0===e?void 0:e.call(CSS,t))&&void 0!==n?n:function(t=""){return t.split("").map(t=>":"===t?`\\${P} `:R.test(t)?"\\"+t:escape(t).replace(/%/g,"\\")).join("")}(t)}const q={tag:C,id:function(t){if(0===t.length||t.length>1)return[];const e=t[0],n=e.getAttribute("id")||"",o="#"+L(n);return!v.test(n)&&b([e],o,e.ownerDocument)?[o]:[]},class:function(t){return c(t.map(_))},attribute:function(t){return c(t.map(I))},nthchild:w,nthoftype:function(t){return c(t.map(H))}};function Y(t,e,n){const o=function(t,e){return function(t){const{selectors:e,combineBetweenSelectors:n,includeTag:o,maxCandidates:r}=t,i=n?M(e,{maxResults:r}):e.map(t=>[t]);return o?i.map(F):i}(e).map(e=>function(t,e){const n={};t.forEach(t=>{const o=e[t];o.length>0&&(n[t]=o)});return N()(n).map(V)}(e,t)).filter(t=>t.length>0)}(function(t,e){const{blacklist:n,whitelist:o,combineWithinSelector:r,maxCombinations:i}=e,c=u(n),l=u(o);return function(t){const{selectors:e,includeTag:n}=t,o=[].concat(e);n&&!o.includes("tag")&&o.push("tag");return o}(e).reduce((e,n)=>{const o=function(t=[],e){return t.sort((t,n)=>{const o=e.test(t),r=e.test(n);return o&&!r?-1:!o&&r?1:0})}(function(t=[],e,n){return t.filter(t=>n.test(t)||!e.test(t))}(function(t,e){var n;return(null!==(n=q[e])&&void 0!==n?n:()=>[])(t)}(t,n),c,l),l);return e[n]=r?M(o,{maxResults:i}):o.map(t=>[t]),e},{})}(t,n),n),r=(i=o,[].concat(...i));var i;return[...new Set(r)]}function F(t){return t.includes(o.tag)||t.includes(o.nthoftype)?[...t]:[...t,o.tag]}function V(t={}){const e=[...E];return t[o.tag]&&t[o.nthoftype]&&e.splice(e.indexOf(o.tag),1),e.map(e=>{return(o=t)[n=e]?o[n].join(""):"";var n,o}).join("")}function B(t,e,n="",o){const r=function(t,e){return""===e?t:function(t,e){return[...t.map(t=>e+" "+t),...t.map(t=>e+" > "+t)]}(t,e)}(Y(t,o.root,o),n);for(const e of r)if(b(t,e,o.root))return e;return null}var W=function t(e,n={}){const o=function(t){const e=(Array.isArray(t)?t:[t]).filter(i);return[...new Set(e)]}(e),r=function(t,e={}){const n=Object.assign(Object.assign({},a),e);return{selectors:s(n.selectors),whitelist:f(n.whitelist),blacklist:f(n.blacklist),root:h(n.root,t),combineWithinSelector:!!n.combineWithinSelector,combineBetweenSelectors:!!n.combineBetweenSelectors,includeTag:!!n.includeTag,maxCombinations:p(n.maxCombinations),maxCandidates:p(n.maxCandidates)}}(o[0],n);let c="",u=r.root;function l(){return function(t,e,n="",o){if(0===t.length)return null;const r=[t.length>1?t:[],...g(t,e).map(t=>[t])];for(const t of r){const e=B(t,0,n,o);if(e)return{foundElements:t,selector:e}}return null}(o,u,c,r)}let d=l();for(;d;){const{foundElements:t,selector:e}=d;if(b(o,e,r.root))return e;u=t[0],c=e,d=l()}return o.length>1?o.map(e=>t(e,r)).join(", "):function(t){return t.map(k).join(", ")}(o)};const U={id:Math.random().toString(36).substring(7),url:window.location.href,user_scroll:!1,coded_click:!1};function z(t,e,n="*"){e||(e={}),e.action=t,e.id=U.id,window.parent.postMessage(e,n)}function G(t){if(U.coded_click)return void(U.coded_click=!1);z("hv-click",{selector:W(t.target,{root:document.body})})}function J(){z("hv-remove",{})}function K(){if(U.user_scroll){const t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0,e=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0,n=Math.max(document.body.scrollHeight||0,document.documentElement.scrollHeight||0,document.body.offsetHeight||0,document.documentElement.offsetHeight||0,document.body.clientHeight||0,document.documentElement.clientHeight||0);z("hv-scroll",{scroll:Math.ceil(e/(n-t)*100)})}}function Q(t){U.user_scroll=!0}new MutationObserver(t=>{t.forEach(t=>{U.url!==document.location.href&&(U.url=document.location.href,z("hv-update-url",{url:window.location.href}))})}).observe(document.querySelector("body"),{childList:!0,subtree:!0}),document.onmousewheel=Q,document.addEventListener("DOMMouseScroll",Q,!1),window.addEventListener("message",(function(t){if(t.data.from!==U.id||"hv-initialize"===t.data.action)switch(t.data.action){case"hv-initialize":!function(){const t=document.createElement("style");t.innerHTML="\n\t\t::-webkit-scrollbar {\n\t\t    width: 0px;\n\t\t    position: fixed;\n\t\t}\n\n\t\t::-webkit-scrollbar-track {\n\t\t    background: transparent !important;\n\t\t}\n\n\t\t::-webkit-scrollbar-thumb {\n\t\t    background: rgba(0, 0, 0, 0.3) !important;\n\t\t    border-radius: 2rem !important;\n\t\t}\n\t",document.head.appendChild(t),window.addEventListener("unload",J),window.addEventListener("scroll",K),document.body.addEventListener("click",G,!0)}();break;case"hv-back":window.history.back();break;case"hv-forward":window.history.forward();break;case"hv-setScroll":!function(t){U.user_scroll=!1;const e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0,n=t/100*(Math.max(document.body.scrollHeight||0,document.documentElement.scrollHeight||0,document.body.offsetHeight||0,document.documentElement.offsetHeight||0,document.body.clientHeight||0,document.documentElement.clientHeight||0)-e);window.scrollTo(0,n)}(t.data.scroll);break;case"hv-click":!function(t){const e=document.querySelector(t);if(e){U.coded_click=!0;const t=new MouseEvent("click",{bubbles:!0,cancelable:!1,view:window});e.dispatchEvent(t)}}(t.data.selector)}}),!1),z("hv-add",{url:U.url})}]);