(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,69634,(e,t,r)=>{t.exports={name:"react-grab",version:"0.1.43",description:"Select context for coding agents directly from your website",keywords:["agent","context","grab","react","react-grab"],homepage:"https://react-grab.com",bugs:{url:"https://github.com/aidenybai/react-grab/issues"},license:"MIT",author:{name:"Aiden Bai",email:"aiden@million.dev"},repository:{type:"git",url:"git+https://github.com/aidenybai/react-grab.git"},bin:{"react-grab":"./bin/cli.js"},files:["bin","dist","package.json","README.md","LICENSE"],type:"module",main:"dist/index.js",module:"dist/index.js",browser:"dist/index.global.js",types:"dist/index.d.ts",exports:{"./package.json":"./package.json",".":{import:{types:"./dist/index.d.ts",default:"./dist/index.js"},require:{types:"./dist/index.d.cts",default:"./dist/index.cjs"}},"./core":{import:{types:"./dist/core/index.d.ts",default:"./dist/core/index.js"},require:{types:"./dist/core/index.d.cts",default:"./dist/core/index.cjs"}},"./primitives":{import:{types:"./dist/primitives.d.ts",default:"./dist/primitives.js"},require:{types:"./dist/primitives.d.cts",default:"./dist/primitives.cjs"}},"./src/*":"./src/*","./styles.css":"./dist/styles.css","./dist/styles.css":"./dist/styles.css","./dist/*":"./dist/*.js","./dist/*.js":"./dist/*.js","./dist/*.cjs":"./dist/*.cjs"},publishConfig:{access:"public"},dependencies:{bippy:"^0.5.41","@react-grab/cli":"0.1.43"},devDependencies:{"@babel/core":"^7.29.0","@babel/preset-typescript":"^7.28.5","@playwright/test":"^1.59.1","@tailwindcss/cli":"^4.3.0","@types/babel__core":"^7.20.5","@types/node":"^25.6.2","@types/react":"^19.2.14","babel-preset-solid":"^1.9.12",concurrently:"^9.2.1","expect-sdk":"^0.1.2","solid-js":"^1.9.12",tailwindcss:"^4.3.0",tsx:"^4.21.0","vite-plus":"^0.1.20"},peerDependencies:{react:">=17.0.0"},peerDependenciesMeta:{react:{optional:!0}},scripts:{"css:watch":"tailwindcss -i ./src/styles.css -o ./dist/styles.css -w",prebuild:"mkdir -p dist && tailwindcss -i ./src/styles.css -o ./dist/styles.css -m && tsx scripts/css-rem-to-px.ts",build:"NODE_ENV=production vp pack","build:profiling":"pnpm run prebuild && NODE_ENV=profiling REACT_GRAB_NO_MINIFY=true REACT_GRAB_SOURCEMAP=true vp pack",dev:'concurrently "pnpm:css:watch" "vp pack --watch"',test:"playwright test","test:perf":"playwright test --grep @perf --reporter=list","test:perf:baseline":"PERF_LABEL=baseline playwright test --grep @perf --reporter=list","test:expect":"bun e2e/react-grab.expect.ts",typecheck:"tsc --noEmit","test:e2e:ui":"playwright test --ui","perf:deopt":"node scripts/deopt-trace.mjs"}}},22477,e=>{"use strict";let t,r,n,i;var o,a,l,s,c,d,u,p,h,m,f=e.i(39230);let g="bippy-0.5.41",v=Object.defineProperty,w=Object.prototype.hasOwnProperty,b=()=>{},x=e=>{try{Function.prototype.toString.call(e).indexOf("^_^")>-1&&setTimeout(()=>{throw Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},y=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!(e&&"getFiberRoots"in e),k=!1,_,N=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!k||(e&&"function"==typeof e.inject&&(_=e.inject.toString()),!!_?.includes("(injected)")),S=new Set,E=new Set,C=e=>{e&&S.add(e);try{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){t.checkDCE=x,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=g,t._instrumentationIsActive=!1;let e=y(t);if(e||(t.on=b),t.renderers.size){t._instrumentationIsActive=!0,S.forEach(e=>e());return}let r=t.inject,n=N(t);n&&!e&&(k=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=e=>{let i=r(e);return E.add(e),n&&t.renderers.set(i,e),t._instrumentationIsActive=!0,S.forEach(e=>e()),i}}(t.renderers.size||t._instrumentationIsActive||N())&&e?.()}catch{}},T=e=>w.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__")?(C(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):(e=>{let t=new Map,r=0,n={_instrumentationIsActive:!1,_instrumentationSource:g,checkDCE:x,hasUnsupportedRendererAttached:!1,inject(e){let i=++r;return t.set(i,e),E.add(e),n._instrumentationIsActive||(n._instrumentationIsActive=!0,S.forEach(e=>e())),i},on:b,onCommitFiberRoot:b,onCommitFiberUnmount:b,onPostCommitFiberRoot:b,renderers:t,supportsFiber:!0,supportsFlight:!0};try{v(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!0,enumerable:!0,get:()=>n,set(t){if(t&&"object"==typeof t){let r=n.renderers;n=t,r.size>0&&(r.forEach((e,r)=>{E.add(e),t.renderers.set(r,e)}),C(e))}}});let t=window.hasOwnProperty,r=!1;v(window,"hasOwnProperty",{configurable:!0,value:function(...e){try{if(!r&&"__REACT_DEVTOOLS_GLOBAL_HOOK__"===e[0])return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,r=!0,-0}catch{}return t.apply(this,e)},writable:!0})}catch{C(e)}return n})(e);try{"u">typeof window&&(window.document?.createElement||window.navigator?.product==="ReactNative")&&T()}catch{}let A=e=>{switch(e.tag){case 5:case 26:case 27:return!0;default:return"string"==typeof e.type}},z=e=>{switch(e.tag){case 1:case 11:case 0:case 14:case 15:return!0;default:return!1}},M=e=>{let t=e.memoizedProps,r=e.alternate?.memoizedProps||{},n=e.flags??e.effectTag??0;switch(e.tag){case 1:case 9:case 11:case 0:case 14:case 15:return(1&n)==1;default:return!e.alternate||r!==t||e.alternate.memoizedState!==e.memoizedState||e.alternate.ref!==e.ref}},R=e=>!!(13374&e.flags||13374&e.subtreeFlags),j=e=>{switch(e.tag){case 18:case 7:case 6:case 23:case 22:return!0;case 3:return!1;default:{let t="object"==typeof e.type&&null!==e.type?e.type.$$typeof:e.type;switch("symbol"==typeof t?t.toString():t){case 60111:case"Symbol(react.concurrent_mode)":case"Symbol(react.async_mode)":return!0;default:return!1}}}};function $(e,t,r=!1){if(!e)return null;let n=t(e);if(n instanceof Promise)return(async()=>{if(await n===!0)return e;let i=r?e.return:e.child;for(;i;){let e=await D(i,t,r);if(e)return e;i=r?null:i.sibling}return null})();if(!0===n)return e;let i=r?e.return:e.child;for(;i;){let e=F(i,t,r);if(e)return e;i=r?null:i.sibling}return null}let F=(e,t,r=!1)=>{if(!e)return null;if(!0===t(e))return e;let n=r?e.return:e.child;for(;n;){let e=F(n,t,r);if(e)return e;n=r?null:n.sibling}return null},D=async(e,t,r=!1)=>{if(!e)return null;if(await t(e)===!0)return e;let n=r?e.return:e.child;for(;n;){let e=await D(n,t,r);if(e)return e;n=r?null:n.sibling}return null},O=e=>{let t=e?.actualDuration??0,r=t,n=e?.child??null;for(;t>0&&null!=n;)r-=n.actualDuration??0,n=n.sibling;return{selfTime:r,totalTime:t}},P=e=>!!e.updateQueue?.memoCache,L=e=>"function"==typeof e?e:"object"==typeof e&&e?L(e.type||e.render):null,I=e=>{if("string"==typeof e)return e;if("function"!=typeof e&&!("object"==typeof e&&e))return null;let t=e.displayName||e.name||null;if(t)return t;let r=L(e);return r&&(r.displayName||r.name)||null},H=e=>{try{if("string"==typeof e.version&&e.bundleType>0)return"development"}catch{}return"production"},W=0,U=new WeakMap,B=(e,t=W++)=>{U.set(e,t)},V=e=>{let t=U.get(e);return!t&&e.alternate&&(t=U.get(e.alternate)),t||B(e,t=W++),t},q=(e,t,r)=>{let n=t;for(;null!=n;){if(U.has(n)||V(n),!j(n)&&M(n)&&e(n,"mount"),13===n.tag)if(null!==n.memoizedState){let t=n.child,r=t?t.sibling:null;if(r){let t=r.child;null!==t&&q(e,t,!1)}}else{let t=null;null!==n.child&&(t=n.child.child),null!==t&&q(e,t,!1)}else null!=n.child&&q(e,n.child,!0);n=r?n.sibling:null}},K=(e,t,r,n)=>{if(U.has(t)||V(t),!r)return;U.has(r)||V(r);let i=13===t.tag,o=!j(t);o&&M(t)&&e(t,"update");let a=i&&null!==r.memoizedState,l=i&&null!==t.memoizedState;if(a&&l){let n=t.child?.sibling??null,i=r.child?.sibling??null;null!==n&&null!==i&&K(e,n,i,t)}else if(a&&!l){let r=t.child;null!==r&&q(e,r,!0)}else if(!a&&l){X(e,r);let n=t.child?.sibling??null;null!==n&&q(e,n,!0)}else if(t.child!==r.child){let r=t.child;for(;r;){if(r.alternate){let i=r.alternate;K(e,r,i,o?t:n)}else q(e,r,!1);r=r.sibling}}},G=(e,t)=>{3!==t.tag&&j(t)||e(t,"unmount")},X=(e,t)=>{let r=13===t.tag&&null!==t.memoizedState,n=t.child;for(r&&(n=(t.child?.sibling??null)?.child??null);null!==n;)null!==n.return&&(G(e,n),X(e,n)),n=n.sibling},Y=0,J=new WeakMap;Error();var Z,Q,ee,et,er,en,ei,eo,ea,el,es,ec,ed,eu,ep,eh={},em=[],ef=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,eg=Array.isArray;function ev(e,t){for(var r in t)e[r]=t[r];return e}function ew(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function eb(e,t,r){var n,i,o,a={};for(o in t)"key"==o?n=t[o]:"ref"==o?i=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?Z.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===a[o]&&(a[o]=e.defaultProps[o]);return ex(e,a,n,i,null)}function ex(e,t,r,n,i){var o={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==i?++ee:i,__i:-1,__u:0};return null==i&&null!=Q.vnode&&Q.vnode(o),o}function ey(e){return e.children}function ek(e,t){this.props=e,this.context=t}function e_(e,t){if(null==t)return e.__?e_(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if(null!=(r=e.__k[t])&&null!=r.__e)return r.__e;return"function"==typeof e.type?e_(e):null}function eN(e){(!e.__d&&(e.__d=!0)&&et.push(e)&&!eS.__r++||er!=Q.debounceRendering)&&((er=Q.debounceRendering)||en)(eS)}function eS(){try{for(var e,t=1;et.length;)et.length>t&&et.sort(ei),e=et.shift(),t=et.length,function(e){if(e.__P&&e.__d){var t=e.__v,r=t.__e,n=[],i=[],o=ev({},t);o.__v=t.__v+1,Q.vnode&&Q.vnode(o),eM(e.__P,o,t,e.__n,e.__P.namespaceURI,32&t.__u?[r]:null,n,null==r?e_(t):r,!!(32&t.__u),i),o.__v=t.__v,o.__.__k[o.__i]=o,ej(n,o,i),t.__e=t.__=null,o.__e!=r&&function e(t){if(null!=(t=t.__)&&null!=t.__c)return t.__e=t.__c.base=null,t.__k.some(function(e){if(null!=e&&null!=e.__e)return t.__e=t.__c.base=e.__e}),e(t)}(o)}}(e)}finally{et.length=eS.__r=0}}function eE(e,t,r,n,i,o,a,l,s,c,d){var u,p,h,m,f,g,v,w=n&&n.__k||em,b=t.length;for(s=function(e,t,r,n,i){var o,a,l,s,c,d=r.length,u=d,p=0;for(e.__k=Array(i),o=0;o<i;o++)null!=(a=t[o])&&"boolean"!=typeof a&&"function"!=typeof a?("string"==typeof a||"number"==typeof a||"bigint"==typeof a||a.constructor==String?a=e.__k[o]=ex(null,a,null,null,null):eg(a)?a=e.__k[o]=ex(ey,{children:a},null,null,null):void 0===a.constructor&&a.__b>0?a=e.__k[o]=ex(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[o]=a,s=o+p,a.__=e,a.__b=e.__b+1,l=null,-1!=(c=a.__i=function(e,t,r,n){var i,o,a,l=e.key,s=e.type,c=t[r],d=null!=c&&0==(2&c.__u);if(null===c&&null==l||d&&l==c.key&&s==c.type)return r;if(n>+!!d){for(i=r-1,o=r+1;i>=0||o<t.length;)if(null!=(c=t[a=i>=0?i--:o++])&&0==(2&c.__u)&&l==c.key&&s==c.type)return a}return -1}(a,r,s,u))&&(u--,(l=r[c])&&(l.__u|=2)),null==l||null==l.__v?(-1==c&&(i>d?p--:i<d&&p++),"function"!=typeof a.type&&(a.__u|=4)):c!=s&&(c==s-1?p--:c==s+1?p++:(c>s?p--:p++,a.__u|=4))):e.__k[o]=null;if(u)for(o=0;o<d;o++)null!=(l=r[o])&&0==(2&l.__u)&&(l.__e==n&&(n=e_(l)),function e(t,r,n){var i,o;if(Q.unmount&&Q.unmount(t),(i=t.ref)&&(i.current&&i.current!=t.__e||e$(i,null,r)),null!=(i=t.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){Q.__e(e,r)}i.base=i.__P=null}if(i=t.__k)for(o=0;o<i.length;o++)i[o]&&e(i[o],r,n||"function"!=typeof t.type);n||ew(t.__e),t.__c=t.__=t.__e=void 0}(l,l));return n}(r,t,w,s,b),u=0;u<b;u++)null!=(h=r.__k[u])&&(p=-1!=h.__i&&w[h.__i]||eh,h.__i=u,g=eM(e,h,p,i,o,a,l,s,c,d),m=h.__e,h.ref&&p.ref!=h.ref&&(p.ref&&e$(p.ref,null,h),d.push(h.ref,h.__c||m,h)),null==f&&null!=m&&(f=m),(v=!!(4&h.__u))||p.__k===h.__k?(s=function e(t,r,n,i){var o,a;if("function"==typeof t.type){for(o=t.__k,a=0;o&&a<o.length;a++)o[a]&&(o[a].__=t,r=e(o[a],r,n,i));return r}t.__e!=r&&(i&&(r&&t.type&&!r.parentNode&&(r=e_(t)),n.insertBefore(t.__e,r||null)),r=t.__e);do r=r&&r.nextSibling;while(null!=r&&8==r.nodeType)return r}(h,s,e,v),v&&p.__e&&(p.__e=null)):"function"==typeof h.type&&void 0!==g?s=g:m&&(s=m.nextSibling),h.__u&=-7);return r.__e=f,s}function eC(e,t){return t=t||[],null==e||"boolean"==typeof e||(eg(e)?e.some(function(e){eC(e,t)}):t.push(e)),t}function eT(e,t,r){"-"==t[0]?e.setProperty(t,null==r?"":r):e[t]=null==r?"":"number"!=typeof r||ef.test(t)?r:r+"px"}function eA(e,t,r,n,i){var o,a;e:if("style"==t)if("string"==typeof r)e.style.cssText=r;else{if("string"==typeof n&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||eT(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||eT(e.style,t,r[t])}else if("o"==t[0]&&"n"==t[1])o=t!=(t=t.replace(es,"$1")),t=(a=t.toLowerCase())in e||"onFocusOut"==t||"onFocusIn"==t?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?n?r[el]=n[el]:(r[el]=ec,e.addEventListener(t,o?eu:ed,o)):e.removeEventListener(t,o?eu:ed,o);else{if("http://www.w3.org/2000/svg"==i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=t&&"height"!=t&&"href"!=t&&"list"!=t&&"form"!=t&&"tabIndex"!=t&&"download"!=t&&"rowSpan"!=t&&"colSpan"!=t&&"role"!=t&&"popover"!=t&&t in e)try{e[t]=null==r?"":r;break e}catch(e){}"function"==typeof r||(null==r||!1===r&&"-"!=t[4]?e.removeAttribute(t):e.setAttribute(t,"popover"==t&&1==r?"":r))}}function ez(e){return function(t){if(this.l){var r=this.l[t.type+e];if(null==t[ea])t[ea]=ec++;else if(t[ea]<r[el])return;return r(Q.event?Q.event(t):t)}}}function eM(e,t,r,n,i,o,a,l,s,c){var d,u,p,h,m,f,g,v,w,b,x,y,k,_,N,S=t.type;if(void 0!==t.constructor)return null;128&r.__u&&(s=!!(32&r.__u),o=[l=t.__e=r.__e]),(d=Q.__b)&&d(t);e:if("function"==typeof S)try{if(v=t.props,w=S.prototype&&S.prototype.render,b=(d=S.contextType)&&n[d.__c],x=d?b?b.props.value:d.__:n,r.__c?g=(u=t.__c=r.__c).__=u.__E:(w?t.__c=u=new S(v,x):(t.__c=u=new ek(v,x),u.constructor=S,u.render=eF),b&&b.sub(u),u.state||(u.state={}),u.__n=n,p=u.__d=!0,u.__h=[],u._sb=[]),w&&null==u.__s&&(u.__s=u.state),w&&null!=S.getDerivedStateFromProps&&(u.__s==u.state&&(u.__s=ev({},u.__s)),ev(u.__s,S.getDerivedStateFromProps(v,u.__s))),h=u.props,m=u.state,u.__v=t,p)w&&null==S.getDerivedStateFromProps&&null!=u.componentWillMount&&u.componentWillMount(),w&&null!=u.componentDidMount&&u.__h.push(u.componentDidMount);else{if(w&&null==S.getDerivedStateFromProps&&v!==h&&null!=u.componentWillReceiveProps&&u.componentWillReceiveProps(v,x),t.__v==r.__v||!u.__e&&null!=u.shouldComponentUpdate&&!1===u.shouldComponentUpdate(v,u.__s,x)){t.__v!=r.__v&&(u.props=v,u.state=u.__s,u.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(e){e&&(e.__=t)}),em.push.apply(u.__h,u._sb),u._sb=[],u.__h.length&&a.push(u);break e}null!=u.componentWillUpdate&&u.componentWillUpdate(v,u.__s,x),w&&null!=u.componentDidUpdate&&u.__h.push(function(){u.componentDidUpdate(h,m,f)})}if(u.context=x,u.props=v,u.__P=e,u.__e=!1,y=Q.__r,k=0,w)u.state=u.__s,u.__d=!1,y&&y(t),d=u.render(u.props,u.state,u.context),em.push.apply(u.__h,u._sb),u._sb=[];else do u.__d=!1,y&&y(t),d=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++k<25)u.state=u.__s,null!=u.getChildContext&&(n=ev(ev({},n),u.getChildContext())),w&&!p&&null!=u.getSnapshotBeforeUpdate&&(f=u.getSnapshotBeforeUpdate(h,m)),_=null!=d&&d.type===ey&&null==d.key?function e(t){return"object"!=typeof t||null==t||t.__b>0?t:eg(t)?t.map(e):void 0!==t.constructor?null:ev({},t)}(d.props.children):d,l=eE(e,eg(_)?_:[_],t,r,n,i,o,a,l,s,c),u.base=t.__e,t.__u&=-161,u.__h.length&&a.push(u),g&&(u.__E=u.__=null)}catch(e){if(t.__v=null,s||null!=o)if(e.then){for(t.__u|=s?160:128;l&&8==l.nodeType&&l.nextSibling;)l=l.nextSibling;o[o.indexOf(l)]=null,t.__e=l}else{for(N=o.length;N--;)ew(o[N]);eR(t)}else t.__e=r.__e,t.__k=r.__k,e.then||eR(t);Q.__e(e,t,r)}else null==o&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):l=t.__e=function(e,t,r,n,i,o,a,l,s){var c,d,u,p,h,m,f,g=r.props||eh,v=t.props,w=t.type;if("svg"==w?i="http://www.w3.org/2000/svg":"math"==w?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=o){for(c=0;c<o.length;c++)if((h=o[c])&&"setAttribute"in h==!!w&&(w?h.localName==w:3==h.nodeType)){e=h,o[c]=null;break}}if(null==e){if(null==w)return document.createTextNode(v);e=document.createElementNS(i,w,v.is&&v),l&&(Q.__m&&Q.__m(t,o),l=!1),o=null}if(null==w)g===v||l&&e.data==v||(e.data=v);else{if(o="textarea"==w&&null!=v.defaultValue?null:o&&Z.call(e.childNodes),!l&&null!=o)for(g={},c=0;c<e.attributes.length;c++)g[(h=e.attributes[c]).name]=h.value;for(c in g)h=g[c],"dangerouslySetInnerHTML"==c?u=h:"children"==c||c in v||"value"==c&&"defaultValue"in v||"checked"==c&&"defaultChecked"in v||eA(e,c,null,h,i);for(c in v)h=v[c],"children"==c?p=h:"dangerouslySetInnerHTML"==c?d=h:"value"==c?m=h:"checked"==c?f=h:l&&"function"!=typeof h||g[c]===h||eA(e,c,h,g[c],i);if(d)l||u&&(d.__html==u.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(u&&(e.innerHTML=""),eE("template"==t.type?e.content:e,eg(p)?p:[p],t,r,n,"foreignObject"==w?"http://www.w3.org/1999/xhtml":i,o,a,o?o[0]:r.__k&&e_(r,0),l,s),null!=o)for(c=o.length;c--;)ew(o[c]);l&&"textarea"!=w||(c="value","progress"==w&&null==m?e.removeAttribute("value"):null==m||m===e[c]&&("progress"!=w||m)&&("option"!=w||m==g[c])||eA(e,c,m,g[c],i),c="checked",null!=f&&f!=e[c]&&eA(e,c,f,g[c],i))}return e}(r.__e,t,r,n,i,o,a,s,c);return(d=Q.diffed)&&d(t),128&t.__u?void 0:l}function eR(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(eR))}function ej(e,t,r){for(var n=0;n<r.length;n++)e$(r[n],r[++n],r[++n]);Q.__c&&Q.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){Q.__e(e,t.__v)}})}function e$(e,t,r){try{if("function"==typeof e){var n="function"==typeof e.__u;n&&e.__u(),n&&null==t||(e.__u=e(t))}else e.current=t}catch(e){Q.__e(e,r)}}function eF(e,t,r){return this.constructor(e,r)}function eD(e,t,r){var n,i,o,a;t==document&&(t=document.documentElement),Q.__&&Q.__(e,t),i=(n="function"==typeof r)?null:r&&r.__k||t.__k,o=[],a=[],eM(t,e=(!n&&r||t).__k=eb(ey,null,[e]),i||eh,eh,t.namespaceURI,!n&&r?[r]:i?null:t.firstChild?Z.call(t.childNodes):null,o,!n&&r?r:i?i.__e:t.firstChild,n,a),ej(o,e,a)}function eO(e){function t(e){var r,n;return this.getChildContext||(r=new Set,(n={})[t.__c]=this,this.getChildContext=function(){return n},this.componentWillUnmount=function(){r=null},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&r.forEach(function(e){e.__e=!0,eN(e)})},this.sub=function(e){r.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){r&&r.delete(e),t&&t.call(e)}}),e.children}return t.__c="__cC"+ep++,t.__=e,t.Provider=t.__l=(t.Consumer=function(e,t){return e.children(t)}).contextType=t,t}Z=em.slice,Q={__e:function(e,t,r,n){for(var i,o,a;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(e)),a=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(e,n||{}),a=i.__d),a)return i.__E=i}catch(t){e=t}throw e}},ee=0,ek.prototype.setState=function(e,t){var r;r=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=ev({},this.state),"function"==typeof e&&(e=e(ev({},r),this.props)),e&&ev(r,e),null!=e&&this.__v&&(t&&this._sb.push(t),eN(this))},ek.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),eN(this))},ek.prototype.render=ey,et=[],en="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ei=function(e,t){return e.__v.__b-t.__v.__b},eS.__r=0,ea="__d"+(eo=Math.random().toString(8)),el="__a"+eo,es=/(PointerCapture)$|Capture$/i,ec=0,ed=ez(!1),eu=ez(!0),ep=0;var eP,eL,eI,eH,eW=0,eU=[],eB=Q,eV=eB.__b,eq=eB.__r,eK=eB.diffed,eG=eB.__c,eX=eB.unmount,eY=eB.__;function eJ(e,t){eB.__h&&eB.__h(eL,e,eW||t),eW=0;var r=eL.__H||(eL.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function eZ(e){return eW=1,function(e,t){var r=eJ(eP++,2);if(r.t=e,!r.__c&&(r.__=[te(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=eL,!eL.__f)){var n=function(e,t,n){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter(function(e){return e.__c});if(o.every(function(e){return!e.__N}))return!i||i.call(this,e,t,n);var a=r.__c.props!==e;return o.some(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(a=!0)}}),i&&i.call(this,e,t,n)||a};eL.__f=!0;var i=eL.shouldComponentUpdate,o=eL.componentWillUpdate;eL.componentWillUpdate=function(e,t,r){if(this.__e){var a=i;i=void 0,n(e,t,r),i=a}o&&o.call(this,e,t,r)},eL.shouldComponentUpdate=n}return r.__N||r.__}(te,e)}function eQ(e,t){var r=eJ(eP++,3);!eB.__s&&e9(r.__H,t)&&(r.__=e,r.u=t,eL.__H.__h.push(r))}function e0(e,t){var r=eJ(eP++,4);!eB.__s&&e9(r.__H,t)&&(r.__=e,r.u=t,eL.__h.push(r))}function e1(e){return eW=5,e2(function(){return{current:e}},[])}function e2(e,t){var r=eJ(eP++,7);return e9(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function e5(e,t){return eW=8,e2(function(){return e},t)}function e4(e){var t=eL.context[e.__c],r=eJ(eP++,9);return r.c=e,t?(null==r.__&&(r.__=!0,t.sub(eL)),t.props.value):e.__}function e3(){for(var e;e=eU.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(e8),t.__h.some(e7),t.__h=[]}catch(r){t.__h=[],eB.__e(r,e.__v)}}}eB.__b=function(e){eL=null,eV&&eV(e)},eB.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),eY&&eY(e,t)},eB.__r=function(e){eq&&eq(e),eP=0;var t=(eL=e.__c).__H;t&&(eI===eL?(t.__h=[],eL.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.some(e8),t.__h.some(e7),t.__h=[],eP=0)),eI=eL},eB.diffed=function(e){eK&&eK(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==eU.push(t)&&eH===eB.requestAnimationFrame||((eH=eB.requestAnimationFrame)||function(e){var t,r=function(){clearTimeout(n),e6&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);e6&&(t=requestAnimationFrame(r))})(e3)),t.__H.__.some(function(e){e.u&&(e.__H=e.u),e.u=void 0})),eI=eL=null},eB.__c=function(e,t){t.some(function(e){try{e.__h.some(e8),e.__h=e.__h.filter(function(e){return!e.__||e7(e)})}catch(r){t.some(function(e){e.__h&&(e.__h=[])}),t=[],eB.__e(r,e.__v)}}),eG&&eG(e,t)},eB.unmount=function(e){eX&&eX(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.some(function(e){try{e8(e)}catch(e){t=e}}),r.__H=void 0,t&&eB.__e(t,r.__v))};var e6="function"==typeof requestAnimationFrame;function e8(e){var t=eL,r=e.__c;"function"==typeof r&&(e.__c=void 0,r()),eL=t}function e7(e){var t=eL;e.__c=e.__(),eL=t}function e9(e,t){return!e||e.length!==t.length||t.some(function(t,r){return t!==e[r]})}function te(e,t){return"function"==typeof t?t(e):t}var tt=Symbol.for("preact-signals");function tr(){if(ts>1)ts--;else{var e,t=!1,r=tp;for(tp=void 0;void 0!==r;)r.S.v===r.v&&(r.S.i=r.i),r=r.o;for(;void 0!==tl;){var n=tl;for(tl=void 0,tc++;void 0!==n;){var i=n.u;if(n.u=void 0,n.f&=-3,!(8&n.f)&&tv(n))try{n.c()}catch(r){t||(e=r,t=!0)}n=i}}if(tc=0,ts--,t)throw e}}function tn(e){if(ts>0)return e();tu=++td,ts++;try{return e()}finally{tr()}}var ti=void 0;function to(e){var t=ti;ti=void 0;try{return e()}finally{ti=t}}var ta,tl=void 0,ts=0,tc=0,td=0,tu=0,tp=void 0,th=0;function tm(e){if(void 0!==ti){var t=e.n;if(void 0===t||t.t!==ti)return t={i:0,S:e,p:ti.s,n:void 0,t:ti,e:void 0,x:void 0,r:t},void 0!==ti.s&&(ti.s.n=t),ti.s=t,e.n=t,32&ti.f&&e.S(t),t;if(-1===t.i)return t.i=0,void 0!==t.n&&(t.n.p=t.p,void 0!==t.p&&(t.p.n=t.n),t.p=ti.s,t.n=void 0,ti.s.n=t,ti.s=t),t}}function tf(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=null==t?void 0:t.watched,this.Z=null==t?void 0:t.unwatched,this.name=null==t?void 0:t.name}function tg(e,t){return new tf(e,t)}function tv(e){for(var t=e.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function tw(e){for(var t=e.s;void 0!==t;t=t.n){var r=t.S.n;if(void 0!==r&&(t.r=r),t.S.n=t,t.i=-1,void 0===t.n){e.s=t;break}}}function tb(e){for(var t=e.s,r=void 0;void 0!==t;){var n=t.p;-1===t.i?(t.S.U(t),void 0!==n&&(n.n=t.n),void 0!==t.n&&(t.n.p=n)):r=t,t.S.n=t.r,void 0!==t.r&&(t.r=void 0),t=n}e.s=r}function tx(e,t){tf.call(this,void 0),this.x=e,this.s=void 0,this.g=th-1,this.f=4,this.W=null==t?void 0:t.watched,this.Z=null==t?void 0:t.unwatched,this.name=null==t?void 0:t.name}function ty(e,t){return new tx(e,t)}function tk(e){var t=e.m;if(e.m=void 0,"function"==typeof t){ts++;var r=ti;ti=void 0;try{t()}catch(t){throw e.f&=-2,e.f|=8,t_(e),t}finally{ti=r,tr()}}}function t_(e){for(var t=e.s;void 0!==t;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,tk(e)}function tN(e){if(ti!==this)throw Error("Out-of-order effect");tb(this),ti=e,this.f&=-2,8&this.f&&t_(this),tr()}function tS(e,t){this.x=e,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=null==t?void 0:t.name,ta&&ta.push(this)}function tE(e,t){var r=new tS(e,t);try{r.c()}catch(e){throw r.d(),e}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}tf.prototype.brand=tt,tf.prototype.h=function(){return!0},tf.prototype.S=function(e){var t=this,r=this.t;r!==e&&void 0===e.e&&(e.x=r,this.t=e,void 0!==r?r.e=e:to(function(){var e;null==(e=t.W)||e.call(t)}))},tf.prototype.U=function(e){var t=this;if(void 0!==this.t){var r=e.e,n=e.x;void 0!==r&&(r.x=n,e.e=void 0),void 0!==n&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,void 0===n&&to(function(){var e;null==(e=t.Z)||e.call(t)}))}},tf.prototype.subscribe=function(e){var t=this;return tE(function(){var r=t.value,n=ti;ti=void 0;try{e(r)}finally{ti=n}},{name:"sub"})},tf.prototype.valueOf=function(){return this.value},tf.prototype.toString=function(){return this.value+""},tf.prototype.toJSON=function(){return this.value},tf.prototype.peek=function(){var e=this;return to(function(){return e.value})},Object.defineProperty(tf.prototype,"value",{get:function(){var e=tm(this);return void 0!==e&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(tc>100)throw Error("Cycle detected");0!==ts&&0===tc&&this.l!==tu&&(this.l=tu,tp={S:this,v:this.v,i:this.i,o:tp}),this.v=e,this.i++,th++,ts++;try{for(var t=this.t;void 0!==t;t=t.x)t.t.N()}finally{tr()}}}}),tx.prototype=new tf,tx.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f)||(this.f&=-5,this.g===th))return!0;if(this.g=th,this.f|=1,this.i>0&&!tv(this))return this.f&=-2,!0;var e=ti;try{tw(this),ti=this;var t=this.x();(16&this.f||this.v!==t||0===this.i)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return ti=e,tb(this),this.f&=-2,!0},tx.prototype.S=function(e){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t)}tf.prototype.S.call(this,e)},tx.prototype.U=function(e){if(void 0!==this.t&&(tf.prototype.U.call(this,e),void 0===this.t)){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t)}},tx.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;void 0!==e;e=e.x)e.t.N()}},Object.defineProperty(tx.prototype,"value",{get:function(){if(1&this.f)throw Error("Cycle detected");var e=tm(this);if(this.h(),void 0!==e&&(e.i=this.i),16&this.f)throw this.v;return this.v}}),tS.prototype.c=function(){var e=this.S();try{if(8&this.f||void 0===this.x)return;var t=this.x();"function"==typeof t&&(this.m=t)}finally{e()}},tS.prototype.S=function(){if(1&this.f)throw Error("Cycle detected");this.f|=1,this.f&=-9,tk(this),tw(this),ts++;var e=ti;return ti=this,tN.bind(this,e)},tS.prototype.N=function(){2&this.f||(this.f|=2,this.u=tl,tl=this)},tS.prototype.d=function(){this.f|=8,1&this.f||t_(this)},tS.prototype.dispose=function(){this.d()};var tC,tT,tA="u">typeof window&&!!window.__PREACT_SIGNALS_DEVTOOLS__,tz=[],tM=[];function tR(e,t){Q[e]=t.bind(null,Q[e]||function(){})}function tj(e){if(tT){var t=tT;tT=void 0,t()}tT=e&&e.S()}function t$(e){var t=this,r=e.data,n=tF(r);n.value=r;var i=e2(function(){for(var e=t.__v;e=e.__;)if(e.__c){e.__c.__$f|=4;break}var r=ty(function(){var e=n.value.value;return 0===e?0:!0===e?"":e||""}),i=ty(function(){var e;return!Array.isArray(r.value)&&(null==(e=r.value)||void 0!==e.constructor)}),o=tE(function(){if(this.N=tH,i.value){var e=r.value;t.__v&&t.__v.__e&&3===t.__v.__e.nodeType&&(t.__v.__e.data=e)}}),a=t.__$u.d;return t.__$u.d=function(){o(),a.call(this)},[i,r]},[]),o=i[0],a=i[1];return o.value?a.peek():a.value}function tF(e,t){return e2(function(){return tg(e,t)},[])}tE(function(){tC=this.N})(),t$.displayName="ReactiveTextNode",Object.defineProperties(tf.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:t$},props:{configurable:!0,get:function(){var e=this;return{data:{get value(){return e.value}}}}},__b:{configurable:!0,value:1}}),tR("__b",function(e,t){if("string"==typeof t.type){var r,n=t.props;for(var i in n)if("children"!==i){var o=n[i];o instanceof tf&&(r||(t.__np=r={}),r[i]=o,n[i]=o.peek())}}e(t)}),tR("__r",function(e,t){if(e(t),t.type!==ey){tj();var r,n,i=t.__c;i&&(i.__$f&=-2,void 0===(n=i.__$u)&&(tE(function(){r=this},{name:"function"==typeof t.type?t.type.displayName||t.type.name:""}),r.c=function(){var e;tA&&(null==(e=n.y)||e.call(n)),i.__$f|=1,i.setState({})},i.__$u=n=r)),tj(n)}}),tR("__e",function(e,t,r,n){tj(),e(t,r,n)}),tR("diffed",function(e,t){if(tj(),"string"==typeof t.type&&(r=t.__e)){var r,n=t.__np,i=t.props;if(n){var o=r.U;if(o)for(var a in o){var l=o[a];void 0===l||a in n||(l.d(),o[a]=void 0)}else o={},r.U=o;for(var s in n){var c=o[s],d=n[s];void 0===c?(c=function(e,t,r){var n=t in e&&void 0===e.ownerSVGElement,i=tg(r),o=r.peek();return{o:function(e,t){i.value=e,o=e.peek()},d:tE(function(){this.N=tH;var r=i.value.value;o!==r?(o=void 0,n?e[t]=r:null!=r&&(!1!==r||"-"===t[4])?e.setAttribute(t,r):e.removeAttribute(t)):o=void 0})}}(r,s,d),o[s]=c):c.o(d,i)}}}e(t)}),tR("unmount",function(e,t){if("string"==typeof t.type){var r=t.__e;if(r){var n=r.U;if(n)for(var i in r.U=void 0,n){var o=n[i];o&&o.d()}}var a=t.__np;if(a){var l=t.props;for(var s in a)l[s]=a[s]}t.__np=void 0}else{var c=t.__c;if(c){var d=c.__$u;d&&(c.__$u=void 0,d.d())}}e(t)}),tR("__h",function(e,t,r,n){(n<3||9===n)&&(t.__$f|=2),e(t,r,n)}),ek.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,n=r&&void 0!==r.s;for(var i in t)return!0;if(this.__f||"boolean"==typeof this.u&&!0===this.u){var o=2&this.__$f;if(!(n||o||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var a in e)if("__source"!==a&&e[a]!==this.props[a])return!0;for(var l in this.props)if(!(l in e))return!0;return!1};var tD="u"<typeof requestAnimationFrame?setTimeout:function(e){var t=function(){clearTimeout(r),cancelAnimationFrame(n),e()},r=setTimeout(t,35),n=requestAnimationFrame(t)},tO=function(e){queueMicrotask(function(){queueMicrotask(e)})};function tP(){tn(function(){for(var e;e=tz.shift();)tC.call(e)})}function tL(){1===tz.push(this)&&(Q.requestAnimationFrame||tD)(tP)}function tI(){tn(function(){for(var e;e=tM.shift();)tC.call(e)})}function tH(){1===tM.push(this)&&(Q.requestAnimationFrame||tO)(tI)}function tW(e,t){var r=e1(e);r.current=e,eQ(function(){return tE(function(){return this.N=tL,r.current()},t)},[])}function tU(e,t){for(var r in t)e[r]=t[r];return e}function tB(e,t){for(var r in e)if("__source"!==r&&!(r in t))return!0;for(var n in t)if("__source"!==n&&e[n]!==t[n])return!0;return!1}function tV(e){var t,r;try{return((t=e.__)!==(r=e.u())||0===t&&1/t!=1/r)&&(t==t||r==r)}catch(e){return!0}}function tq(e,t){this.props=e,this.context=t}function tK(e,t){function r(e){var r=this.props.ref;return r!=e.ref&&r&&("function"==typeof r?r(null):r.current=null),t?!t(this.props,e)||r!=e.ref:tB(this.props,e)}function n(t){return this.shouldComponentUpdate=r,eb(e,t)}return n.displayName="Memo("+(e.displayName||e.name)+")",n.__f=n.prototype.isReactComponent=!0,n.type=e,n}(tq.prototype=new ek).isPureReactComponent=!0,tq.prototype.shouldComponentUpdate=function(e,t){return tB(this.props,e)||tB(this.state,t)};var tG=Q.__b;Q.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),tG&&tG(e)};var tX="u">typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function tY(e){function t(t){var r=tU({},t);return delete r.ref,e(r,t.ref||null)}return t.$$typeof=tX,t.render=e,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var tJ=Q.__e;Q.__e=function(e,t,r,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return null==t.__e&&(t.__e=r.__e,t.__k=r.__k),i.__c(e,t)}tJ(e,t,r,n)};var tZ=Q.unmount;function tQ(){this.__u=0,this.o=null,this.__b=null}function t0(e){var t=e.__&&e.__.__c;return t&&t.__a&&t.__a(e)}function t1(){this.i=null,this.l=null}Q.unmount=function(e){var t=e.__c;t&&(t.__z=!0),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),tZ&&tZ(e)},(tQ.prototype=new ek).__c=function(e,t){var r=t.__c,n=this;null==n.o&&(n.o=[]),n.o.push(r);var i=t0(n.__v),o=!1,a=function(){o||n.__z||(o=!0,r.__R=null,i?i(s):s())};r.__R=a;var l=r.__P;r.__P=null;var s=function(){if(!--n.__u){if(n.state.__a){var e,t=n.state.__a;n.__v.__k[0]=function e(t,r,n){return t&&n&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return e(t,r,n)}),t.__c&&t.__c.__P===r&&(t.__e&&n.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=n)),t}(t,t.__c.__P,t.__c.__O)}for(n.setState({__a:n.__b=null});e=n.o.pop();)e.__P=l,e.forceUpdate()}};n.__u++||32&t.__u||n.setState({__a:n.__b=n.__v.__k[0]}),e.then(a,a)},tQ.prototype.componentWillUnmount=function(){this.o=[]},tQ.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=function e(t,r,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(e){"function"==typeof e.__c&&e.__c()}),t.__c.__H=null),null!=(t=tU({},t)).__c&&(t.__c.__P===n&&(t.__c.__P=r),t.__c.__e=!0,t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return e(t,r,n)})),t}(this.__b,r,n.__O=n.__P)}this.__b=null}var i=t.__a&&eb(ey,null,e.fallback);return i&&(i.__u&=-33),[eb(ey,null,t.__a?null:e.children),i]};var t2=function(e,t,r){if(++r[1]===r[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};function t5(e){return this.getChildContext=function(){return e.context},e.children}function t4(e){var t=this,r=e.h;if(t.componentWillUnmount=function(){eD(null,t.v),t.v=null,t.h=null},t.h&&t.h!==r&&t.componentWillUnmount(),!t.v){for(var n=t.__v;null!==n&&!n.__m&&null!==n.__;)n=n.__;t.h=r,t.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:n.__m},contains:function(){return!0},namespaceURI:r.namespaceURI,insertBefore:function(e,r){this.childNodes.push(e),t.h.insertBefore(e,r)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.h.removeChild(e)}}}eD(eb(t5,{context:t.context},e.__v),t.v)}(t1.prototype=new ek).__a=function(e){var t=this,r=t0(t.__v),n=t.l.get(e);return n[0]++,function(i){var o=function(){t.props.revealOrder?(n.push(i),t2(t,e,n)):i()};r?r(o):o()}},t1.prototype.render=function(e){this.i=null,this.l=new Map;var t=eC(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var r=t.length;r--;)this.l.set(t[r],this.i=[1,0,this.i]);return e.children},t1.prototype.componentDidUpdate=t1.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,r){t2(e,r,t)})};var t3="u">typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,t6=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,t8=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,t7=/[A-Z0-9]/g,t9="u">typeof document;ek.prototype.isReactComponent=!0,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(ek.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var re=Q.event;Q.event=function(e){return re&&(e=re(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var rt={configurable:!0,get:function(){return this.class}},rr=Q.vnode;Q.vnode=function(e){"string"==typeof e.type&&function(e){var t=e.props,r=e.type,n={},i=-1==r.indexOf("-");for(var o in t){var a=t[o];if(!("value"===o&&"defaultValue"in t&&null==a||t9&&"children"===o&&"noscript"===r||"class"===o||"className"===o)){var l,s=o.toLowerCase();"defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===a?a="":"translate"===s&&"no"===a?a=!1:"o"===s[0]&&"n"===s[1]?"ondoubleclick"===s?o="ondblclick":"onchange"!==s||"input"!==r&&"textarea"!==r||(l=t.type,("u">typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(l))?"onfocus"===s?o="onfocusin":"onblur"===s?o="onfocusout":t8.test(o)&&(o=s):s=o="oninput":i&&t6.test(o)?o=o.replace(t7,"-$&").toLowerCase():null===a&&(a=void 0),"oninput"===s&&n[o=s]&&(o="oninputCapture"),n[o]=a}}"select"==r&&(n.multiple&&Array.isArray(n.value)&&(n.value=eC(t.children).forEach(function(e){e.props.selected=-1!=n.value.indexOf(e.props.value)})),null!=n.defaultValue&&(n.value=eC(t.children).forEach(function(e){e.props.selected=n.multiple?-1!=n.defaultValue.indexOf(e.props.value):n.defaultValue==e.props.value}))),t.class&&!t.className?(n.class=t.class,Object.defineProperty(n,"className",rt)):t.className&&(n.class=n.className=t.className),e.props=n}(e),e.$$typeof=t3,rr&&rr(e)};var rn=Q.__r;Q.__r=function(e){rn&&rn(e),e.__c};var ri=Q.diffed;Q.diffed=function(e){ri&&ri(e);var t=e.props,r=e.__e;null!=r&&"textarea"===e.type&&"value"in t&&t.value!==r.value&&(r.value=null==t.value?"":t.value)};var ro=0;function ra(e,t,r,n,i,o){t||(t={});var a,l,s=t;if("ref"in s)for(l in s={},t)"ref"==l?a=t[l]:s[l]=t[l];var c={type:e,props:s,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--ro,__i:-1,__u:0,__source:i,__self:o};if("function"==typeof e&&(a=e.defaultProps))for(l in a)void 0===s[l]&&(s[l]=a[l]);return Q.vnode&&Q.vnode(c),c}let rl=null,rs=(()=>{if(null!==rl)return rl;try{rl=window.matchMedia("(color-gamut: p3)").matches}catch{rl=!1}return rl})(),rc=e=>rs?`color(display-p3 0.84 0.19 0.78 / ${e})`:`rgba(210, 57, 192, ${e})`,rd=1e4,ru=(rc(.4),rc(.05),rc(.5),rc(.08),rc(.15),["id","class","aria-label","data-testid","role","name","title"]),rp=new Set(["id","data-testid","aria-label","href","src","alt","type","name","placeholder","role","for","action","method","title","disabled","checked","readonly","required","selected","open"]),rh=new Set("display.position.top.right.bottom.left.z-index.overflow.overflow-x.overflow-y.width.height.min-width.min-height.max-width.max-height.margin-top.margin-right.margin-bottom.margin-left.padding-top.padding-right.padding-bottom.padding-left.flex-direction.flex-wrap.justify-content.align-items.align-self.align-content.flex-grow.flex-shrink.flex-basis.order.gap.row-gap.column-gap.grid-template-columns.grid-template-rows.grid-template-areas.font-family.font-size.font-weight.font-style.line-height.letter-spacing.text-align.text-decoration-line.text-decoration-style.text-transform.text-overflow.text-shadow.white-space.word-break.overflow-wrap.vertical-align.color.background-color.background-image.background-position.background-size.background-repeat.border-top-width.border-right-width.border-bottom-width.border-left-width.border-top-style.border-right-style.border-bottom-style.border-left-style.border-top-color.border-right-color.border-bottom-color.border-left-color.border-top-left-radius.border-top-right-radius.border-bottom-left-radius.border-bottom-right-radius.box-shadow.opacity.transform.filter.backdrop-filter.object-fit.object-position".split(".")),rm=e=>(e.tagName||"").toLowerCase(),rf="bippy-0.5.41",rg=Object.defineProperty,rv=Object.prototype.hasOwnProperty,rw=()=>{},rb=e=>{try{Function.prototype.toString.call(e).indexOf("^_^")>-1&&setTimeout(()=>{throw Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},rx=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!(e&&"getFiberRoots"in e),ry=!1,rk,r_=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!ry||(e&&"function"==typeof e.inject&&(rk=e.inject.toString()),!!rk?.includes("(injected)")),rN=new Set,rS=new Set,rE=e=>{e&&rN.add(e);try{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){t.checkDCE=rb,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=rf,t._instrumentationIsActive=!1;let e=rx(t);if(e||(t.on=rw),t.renderers.size){t._instrumentationIsActive=!0,rN.forEach(e=>e());return}let r=t.inject,n=r_(t);n&&!e&&(ry=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=e=>{let i=r(e);return rS.add(e),n&&t.renderers.set(i,e),t._instrumentationIsActive=!0,rN.forEach(e=>e()),i}}(t.renderers.size||t._instrumentationIsActive||r_())&&e?.()}catch{}},rC=e=>rv.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__")?(rE(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):(e=>{let t=new Map,r=0,n={_instrumentationIsActive:!1,_instrumentationSource:rf,checkDCE:rb,hasUnsupportedRendererAttached:!1,inject(e){let i=++r;return t.set(i,e),rS.add(e),n._instrumentationIsActive||(n._instrumentationIsActive=!0,rN.forEach(e=>e())),i},on:rw,onCommitFiberRoot:rw,onCommitFiberUnmount:rw,onPostCommitFiberRoot:rw,renderers:t,supportsFiber:!0,supportsFlight:!0};try{rg(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!0,enumerable:!0,get:()=>n,set(t){if(t&&"object"==typeof t){let r=n.renderers;n=t,r.size>0&&(r.forEach((e,r)=>{rS.add(e),t.renderers.set(r,e)}),rE(e))}}});let t=window.hasOwnProperty,r=!1;rg(window,"hasOwnProperty",{configurable:!0,value:function(...e){try{if(!r&&"__REACT_DEVTOOLS_GLOBAL_HOOK__"===e[0])return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,r=!0,-0}catch{}return t.apply(this,e)},writable:!0})}catch{rE(e)}return n})(e),rT=e=>{switch(e.tag){case 1:case 11:case 0:case 14:case 15:return!0;default:return!1}};function rA(e,t,r=!1){if(!e)return null;let n=t(e);if(n instanceof Promise)return(async()=>{if(await n===!0)return e;let i=r?e.return:e.child;for(;i;){let e=await rM(i,t,r);if(e)return e;i=r?null:i.sibling}return null})();if(!0===n)return e;let i=r?e.return:e.child;for(;i;){let e=rz(i,t,r);if(e)return e;i=r?null:i.sibling}return null}let rz=(e,t,r=!1)=>{if(!e)return null;if(!0===t(e))return e;let n=r?e.return:e.child;for(;n;){let e=rz(n,t,r);if(e)return e;n=r?null:n.sibling}return null},rM=async(e,t,r=!1)=>{if(!e)return null;if(await t(e)===!0)return e;let n=r?e.return:e.child;for(;n;){let e=await rM(n,t,r);if(e)return e;n=r?null:n.sibling}return null},rR=e=>"function"==typeof e?e:"object"==typeof e&&e?rR(e.type||e.render):null,rj=e=>{if("string"==typeof e)return e;if("function"!=typeof e&&!("object"==typeof e&&e))return null;let t=e.displayName||e.name||null;if(t)return t;let r=rR(e);return r&&(r.displayName||r.name)||null},r$=()=>{let e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;return!!e?._instrumentationIsActive||rx(e)||r_(e)},rF=e=>{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t?.renderers)for(let r of t.renderers.values())try{let t=r.findFiberByHostInstance?.(e);if(t)return t}catch{}if("object"==typeof e&&e){if("_reactRootContainer"in e)return e._reactRootContainer?._internalRoot?.current?.child;for(let t in e)if(t.startsWith("__reactContainer$")||t.startsWith("__reactInternalInstance$")||t.startsWith("__reactFiber"))return e[t]||null}return null},rD=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,rO=["rsc://","file:///","webpack-internal://","webpack://","node:","turbopack://","metro://","/app-pages-browser/","/(app-pages-browser)/"],rP=["<anonymous>","eval",""],rL=/\.(jsx|tsx|ts|js)$/,rI=/(\.min|bundle|chunk|vendor|vendors|runtime|polyfill|polyfills)\.(js|mjs|cjs)$|(chunk|bundle|vendor|vendors|runtime|polyfill|polyfills|framework|app|main|index)[-_.][A-Za-z0-9_-]{4,}\.(js|mjs|cjs)$|[\da-f]{8,}\.(js|mjs|cjs)$|[-_.][\da-f]{20,}\.(js|mjs|cjs)$|\/dist\/|\/build\/|\/.next\/|\/out\/|\/node_modules\/|\.webpack\.|\.vite\.|\.turbopack\./i,rH=/^\?[\w~.-]+(?:=[^&#]*)?(?:&[\w~.-]+(?:=[^&#]*)?)*$/,rW=/\(at [^)]+\)$/,rU=/(^|@)\S+:\d+/,rB=/^\s*at .*(\S+:\d+|\(native\))/m,rV=/^(eval@)?(\[native code\])?$/,rq=(e,t)=>{if(t?.includeInElement!==!1){let r=e.split(`
`),n=[];for(let e of r)if(/^\s*at\s+/.test(e)){let t=rX(e,void 0)[0];t&&n.push(t)}else if(/^\s*in\s+/.test(e)){let t=e.replace(/^\s*in\s+/,"").replace(/\s*\(at .*\)$/,"");n.push({functionName:t,source:e})}else if(e.match(rU)){let t=rY(e,void 0)[0];t&&n.push(t)}return rG(n,t)}return e.match(rB)?rX(e,t):rY(e,t)},rK=e=>{if(!e.includes(":"))return[e,void 0,void 0];let t=e.startsWith("(")&&/:\d+\)$/.test(e)?e.slice(1,-1):e,r=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t);return r?[r[1],r[2]||void 0,r[3]||void 0]:[t,void 0,void 0]},rG=(e,t)=>t&&null!=t.slice?Array.isArray(t.slice)?e.slice(t.slice[0],t.slice[1]):e.slice(0,t.slice):e,rX=(e,t)=>rG(e.split(`
`).filter(e=>!!e.match(rB)),t).map(e=>{let t=e;t.includes("(eval ")&&(t=t.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));let r=t.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),n=r.match(/ (\(.+\)$)/);r=n?r.replace(n[0],""):r;let i=rK(n?n[1]:r);return{functionName:n&&r||void 0,fileName:["eval","<anonymous>"].includes(i[0])?void 0:i[0],lineNumber:i[1]?+i[1]:void 0,columnNumber:i[2]?+i[2]:void 0,source:t}}),rY=(e,t)=>rG(e.split(`
`).filter(e=>!e.match(rV)),t).map(e=>{let t=e;if(t.includes(" > eval")&&(t=t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),!t.includes("@")&&!t.includes(":"))return{functionName:t};{let e=/(([^\n\r"\u2028\u2029]*".[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*(?:@[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*)*(?:[\n\r\u2028\u2029][^@]*)?)?[^@]*)@/,r=t.match(e),n=r&&r[1]?r[1]:void 0,i=rK(t.replace(e,""));return{functionName:n,fileName:i[0],lineNumber:i[1]?+i[1]:void 0,columnNumber:i[2]?+i[2]:void 0,source:t}}});var rJ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",rZ=new Uint8Array(64),rQ=new Uint8Array(128);for(let e=0;e<rJ.length;e++){let t=rJ.charCodeAt(e);rZ[e]=t,rQ[t]=e}function r0(e,t){let r=0,n=0,i=0;do r|=(31&(i=rQ[e.next()]))<<n,n+=5;while(32&i)let o=1&r;return r>>>=1,o&&(r=-0x80000000|-r),t+r}function r1(e,t){return!(e.pos>=t)&&44!==e.peek()}var r2=class{constructor(e){this.pos=0,this.buffer=e}next(){return this.buffer.charCodeAt(this.pos++)}peek(){return this.buffer.charCodeAt(this.pos)}indexOf(e){let{buffer:t,pos:r}=this,n=t.indexOf(e,r);return -1===n?t.length:n}};function r5(e){let{length:t}=e,r=new r2(e),n=[],i=0,o=0,a=0,l=0,s=0;do{let e=r.indexOf(";"),t=[],c=!0,d=0;for(i=0;r.pos<e;){let n;(i=r0(r,i))<d&&(c=!1),d=i,r1(r,e)?(o=r0(r,o),a=r0(r,a),l=r0(r,l),n=r1(r,e)?[i,o,a,l,s=r0(r,s)]:[i,o,a,l]):n=[i],t.push(n),r.pos++}c||t.sort(r4),n.push(t),r.pos=e+1}while(r.pos<=t)return n}function r4(e,t){return e[0]-t[0]}let r3=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,r6=/^data:application\/json[^,]+base64,/,r8=/(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^*]+?)[ \t]*(?:\*\/)[ \t]*$)/,r7=new Map,r9=new Map,ne=(e,t,r,n)=>{if(r<0||r>=e.length)return null;let i=e[r];if(!i||0===i.length)return null;let o=null;for(let e of i)if(e[0]<=n)o=e;else break;if(!o||o.length<4)return null;let[,a,l,s]=o;if(void 0===a||void 0===l||void 0===s)return null;let c=t[a];return c?{columnNumber:s,fileName:c,lineNumber:l+1}:null},nt=e=>{if(!e)return!1;let t=e.trim();if(!t)return!1;let r=t.match(r3);if(!r)return!0;let n=r[0].toLowerCase();return"http:"===n||"https:"===n},nr=async(e,t=fetch)=>{let r;if(!nt(e))return null;try{let n=await t(e);if(!n.ok)return null;r=await n.text()}catch{return null}if(!r)return null;let n=((e,t)=>{let r=t.split(`
`),n;for(let e=r.length-1;e>=0&&!n;e--){let t=r[e].match(r8);t&&(n=t[1]||t[2])}if(!n)return null;let i=r3.test(n);if(!(r6.test(n)||i||n.startsWith("/"))){let t=e.split("/");t[t.length-1]=n,n=t.join("/")}return n})(e,r);if(!n||!nt(n))return null;try{let e=await t(n);if(!e.ok)return null;let r=await e.json();return"sections"in r?(e=>{let t=e.sections.map(({map:e,offset:t})=>({map:{...e,mappings:r5(e.mappings)},offset:t})),r=new Set;for(let e of t)for(let t of e.map.sources)r.add(t);return{file:e.file,mappings:[],names:[],sections:t,sourceRoot:void 0,sources:Array.from(r),sourcesContent:void 0,version:3}})(r):{file:r.file,mappings:r5(r.mappings),names:r.names,sourceRoot:r.sourceRoot,sources:r.sources,sourcesContent:r.sourcesContent,version:3}}catch{return null}},nn=async(e,t=!0,r)=>{if(t&&r7.has(e))return r7.get(e)??null;if(t&&r9.has(e))return r9.get(e);let n=nr(e,r);t&&r9.set(e,n);let i=await n;return t&&r9.delete(e),t&&(null===i?r7.set(e,null):r7.set(e,i)),i},ni=async(e,t=!0,r)=>await Promise.all(e.map(async e=>{if(!e.fileName)return e;let n=await nn(e.fileName,t,r);if(!n||"number"!=typeof e.lineNumber||"number"!=typeof e.columnNumber)return e;let i=((e,t,r)=>{if(e.sections){let n=null;for(let i of e.sections)if(t>i.offset.line||t===i.offset.line&&r>=i.offset.column)n=i;else break;if(!n)return null;let i=t-n.offset.line,o=t===n.offset.line?r-n.offset.column:r;return ne(n.map.mappings,n.map.sources,i,o)}return ne(e.mappings,e.sources,t-1,r)})(n,e.lineNumber,e.columnNumber);return i?{...e,source:i.fileName&&e.source?e.source.replace(e.fileName,i.fileName):e.source,fileName:i.fileName,lineNumber:i.lineNumber,columnNumber:i.columnNumber,isSymbolicated:!0}:e})),no=e=>e._debugStack instanceof Error&&"string"==typeof e._debugStack?.stack,na=e=>{for(let t of rS){let r=t.currentDispatcherRef;r&&"object"==typeof r&&("H"in r?r.H=e:r.current=e)}},nl=e=>`
    in ${e}`,ns=(e,t)=>{let r=nl(e);return t&&(r+=` (at ${t})`),r},nc=!1,nd=(e,t)=>{if(!e||nc)return"";let r=Error.prepareStackTrace;Error.prepareStackTrace=void 0,nc=!0;let n=(()=>{let e=rC();for(let t of[...Array.from(rS),...Array.from(e.renderers.values())]){let e=t.currentDispatcherRef;if(e&&"object"==typeof e)return"H"in e?e.H:e.current}return null})();na(null);let i=console.error,o=console.warn;console.error=()=>{},console.warn=()=>{};try{let r={DetermineComponentFrameRoot(){let r;try{if(t){let t=function(){throw Error()};if(Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}let t=e();t&&"function"==typeof t.catch&&t.catch(()=>{})}}catch(e){if(e instanceof Error&&r instanceof Error&&"string"==typeof e.stack)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot",Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name")?.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});let[n,i]=r.DetermineComponentFrameRoot();if(n&&i){let t=n.split(`
`),r=i.split(`
`),o=0,a=0;for(;o<t.length&&!t[o].includes("DetermineComponentFrameRoot");)o++;for(;a<r.length&&!r[a].includes("DetermineComponentFrameRoot");)a++;if(o===t.length||a===r.length)for(o=t.length-1,a=r.length-1;o>=1&&a>=0&&t[o]!==r[a];)a--;for(;o>=1&&a>=0;o--,a--)if(t[o]!==r[a]){if(1!==o||1!==a)do if(o--,--a<0||t[o]!==r[a]){let r=`
${t[o].replace(" at new "," at ")}`,n=rj(e);return n&&r.includes("<anonymous>")&&(r=r.replace("<anonymous>",n)),r}while(o>=1&&a>=0)break}}}finally{nc=!1,Error.prepareStackTrace=r,na(n),console.error=i,console.warn=o}let a=e?rj(e):"";return a?nl(a):""},nu=(e,t)=>{let r=e.tag,n="";switch(r){case 28:n=nl("Activity");break;case 1:n=nd(e.type,!0);break;case 11:n=nd(e.type.render,!1);break;case 0:case 15:n=nd(e.type,!1);break;case 5:case 26:case 27:n=nl(e.type);break;case 16:n=nl("Lazy");break;case 13:n=e.child!==t&&null!==t?nl("Suspense Fallback"):nl("Suspense");break;case 19:n=nl("SuspenseList");break;case 30:n=nl("ViewTransition");break;default:return""}return n},np=e=>{let t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;let r=e;if(!r)return"";Error.prepareStackTrace=t,r.startsWith(`Error: react-stack-top-frame
`)&&(r=r.slice(29));let n=r.indexOf(`
`);return(-1!==n&&(r=r.slice(n+1)),-1!==(n=Math.max(r.indexOf("react_stack_bottom_frame"),r.indexOf("react-stack-bottom-frame")))&&(n=r.lastIndexOf(`
`,n)),-1===n)?"":r=r.slice(0,n)},nh=e=>!!(e.functionName&&e.fileName&&(e.fileName.startsWith("rsc://")||e.fileName.startsWith("about://React/"))),nm=(e,t)=>e.fileName===t.fileName&&e.lineNumber===t.lineNumber&&e.columnNumber===t.columnNumber,nf=async(e,t=!0,r)=>{let n,i=(n=[],rA(e,e=>{if(!no(e))return;let t="string"==typeof e.type?e.type:rj(e.type)||"<anonymous>";n.push({componentName:t,stackFrames:rq(np(e._debugStack?.stack))})},!0),n),o=rq((e=>{try{let t="",r=e,n=null;do{t+=nu(r,n);let e=r._debugInfo;if(e&&Array.isArray(e))for(let r=e.length-1;r>=0;r--){let n=e[r];"string"==typeof n.name&&(t+=ns(n.name,n.env))}n=r,r=r.return}while(r)return t}catch(e){return e instanceof Error?`
Error generating stack: ${e.message}
${e.stack}`:""}})(e)),a=(e=>{let t=new Map;for(let r of e)for(let e of r.stackFrames){if(!nh(e))continue;let r=e.functionName,n=t.get(r)??[];n.some(t=>nm(t,e))||(n.push(e),t.set(r,n))}return t})(i),l=new Map;return ni(o.map(e=>e.source?.includes("(at Server)")||null!=e.source&&rW.test(e.source)?((e,t,r)=>{if(!e.functionName)return{...e,isServer:!0};let n=t.get(e.functionName);if(!n||0===n.length)return{...e,isServer:!0};let i=r.get(e.functionName)??0,o=n[i%n.length];return r.set(e.functionName,i+1),{...e,isServer:!0,fileName:o.fileName,lineNumber:o.lineNumber,columnNumber:o.columnNumber,source:e.source?.replace("(at Server)",`(${o.fileName}:${o.lineNumber}:${o.columnNumber})`)}})(e,a,l):e).filter((e,t,r)=>{if(0===t)return!0;let n=r[t-1];return e.functionName!==n.functionName}),t,r)},ng=async(e,t=!0,r)=>{let n;if((n=e._debugSource)&&"object"==typeof n&&n&&"fileName"in n&&"string"==typeof n.fileName&&"lineNumber"in n&&"number"==typeof n.lineNumber)return e._debugSource||null;for(let n of(await nf(e,t,r)))if(n.fileName)return{fileName:n.fileName,lineNumber:n.lineNumber,columnNumber:n.columnNumber,functionName:n.functionName};return null},nv=e=>e.split("/").filter(Boolean).length,nw=e=>{if(!e||rP.some(t=>t===e))return"";let t=e,r=t.startsWith("http://")||t.startsWith("https://");if(r)try{t=new URL(t).pathname}catch{}if(r&&(t=(e=>{let t=e.indexOf("/",1);if(-1===t||1!==nv(e.slice(0,t)))return e;let r=e.slice(t);if(!rL.test(r)||2>nv(r))return e;let n=r.split("/").filter(Boolean)[0]??null;return!n||n.startsWith("@")||n.length>4?e:r})(t)),t.startsWith("about://React/")){let e=t.slice(14),r=e.indexOf("/"),n=e.indexOf(":");t=-1!==r&&(-1===n||r<n)?e.slice(r+1):e}let n=!0;for(;n;)for(let e of(n=!1,rO))if(t.startsWith(e)){t=t.slice(e.length),"file:///"===e&&(t=`/${t.replace(/^\/+/,"")}`),n=!0;break}if(rD.test(t)){let e=t.match(rD);e&&(t=t.slice(e[0].length))}if(t.startsWith("//")){let e=t.indexOf("/",2);t=-1===e?"":t.slice(e)}let i=t.indexOf("?");if(-1!==i){let e=t.slice(i);rH.test(e)&&(t=t.slice(0,i))}return t},nb=e=>{let t=nw(e);return!(!t||!rL.test(t)||rI.test(t))},nx=Symbol.for("react.context"),ny=[],nk=null,n_=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render."),nN=()=>{let e=nk;return null!==e&&(nk=e.next),e},nS=e=>e._currentValue,nE=(e,t,r,n=null)=>{ny.push({displayName:n,primitive:e,stackError:Error(),value:t,dispatcherHookName:r})},nC=e=>(t,r)=>{let n=nN();nN(),nN();let i=Error(),{value:o,error:a}=((e,t)=>{let r,n=null;if(null!==e){let t=e.memoizedState;if("object"==typeof t&&t&&"then"in t&&"function"==typeof t.then)switch(t.status){case"fulfilled":r=t.value;break;case"rejected":n=t.reason;break;default:n=n_,r=t}else r=t}else r=t;return{value:r,error:n}})(n,r);if(ny.push({displayName:null,primitive:e,stackError:i,value:o,dispatcherHookName:e}),null!==a)throw a;return[o,()=>{},!1]},nT=nC("ActionState"),nA={readContext:nS,use:e=>{if("object"==typeof e&&e){if("function"==typeof e.then){switch(e.status){case"fulfilled":return nE("Promise",e.value,"Use"),e.value;case"rejected":throw e.reason}throw nE("Unresolved",e,"Use"),n_}if(e.$$typeof===nx&&"_currentValue"in e){let t=nS(e);return nE("Context (use)",t,"Use",e.displayName||"Context"),t}}throw Error("An unsupported type was passed to use(): "+String(e))},useCallback:e=>{let t=nN();return nE("Callback",null===t?e:t.memoizedState[0],"Callback"),e},useContext:e=>{let t=nS(e);return nE("Context",t,"Context",e.displayName||null),t},useEffect:e=>{nN(),nE("Effect",e,"Effect")},useImperativeHandle:e=>{let t;nN(),"object"==typeof e&&e&&"current"in e&&(t=e.current),nE("ImperativeHandle",t,"ImperativeHandle")},useLayoutEffect:e=>{nN(),nE("LayoutEffect",e,"LayoutEffect")},useInsertionEffect:e=>{nN(),nE("InsertionEffect",e,"InsertionEffect")},useMemo:e=>{let t=nN(),r=null===t?e():t.memoizedState[0];return nE("Memo",r,"Memo"),r},useReducer:(e,t,r)=>{let n=nN(),i=null===n?void 0===r?t:r(t):n.memoizedState;return nE("Reducer",i,"Reducer"),[i,()=>{}]},useRef:e=>{let t=nN(),r=null===t?{current:e}:t.memoizedState;return nE("Ref",r.current,"Ref"),r},useState:e=>{let t=nN(),r=null===t?"function"==typeof e?e():e:t.memoizedState;return nE("State",r,"State"),[r,()=>{}]},useDebugValue:(e,t)=>{nE("DebugValue","function"==typeof t?t(e):e,"DebugValue")},useDeferredValue:e=>{let t=nN(),r=null===t?e:t.memoizedState;return nE("DeferredValue",r,"DeferredValue"),r},useTransition:()=>{let e=nN();nN();let t=null!==e&&e.memoizedState;return nE("Transition",t,"Transition"),[t,()=>{}]},useSyncExternalStore:(e,t)=>{let r=nN();nN();let n=null===r?t():r.memoizedState;return nE("SyncExternalStore",n,"SyncExternalStore"),n},useId:()=>{let e=nN(),t=null===e?"":e.memoizedState;return nE("Id",t,"Id"),t},useHostTransitionStatus:()=>{let e=nS({_currentValue:null});return nE("HostTransitionStatus",e,"HostTransitionStatus"),e},useFormState:nC("FormState"),useActionState:nT,useOptimistic:e=>{let t=nN(),r=null===t?e:t.memoizedState;return nE("Optimistic",r,"Optimistic"),[r,()=>{}]},useMemoCache:e=>[],useCacheRefresh:()=>{let e=nN();return nE("CacheRefresh",null===e?()=>{}:e.memoizedState,"CacheRefresh"),()=>{}},useEffectEvent:e=>(nN(),nE("EffectEvent",e,"EffectEvent"),e)};typeof Proxy>"u"||new Proxy(nA,{get(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t];let r=Error("Missing method in Dispatcher: "+t);throw r.name="ReactDebugToolsUnsupportedHookError",r}}),(()=>{try{"u">typeof window&&(window.document?.createElement||window.navigator?.product==="ReactNative")&&rC()}catch{}})();let nz=(e,t)=>e.length>t?`${e.slice(0,t)}...`:e,nM=/^(?:\.\/)?\/?\([a-z][a-z0-9-]*\)\//,nR=e=>{let t=nw(e);return(t=t.replace(nM,"")).startsWith("./")&&(t=t.slice(2)),t},nj=e=>{try{return decodeURIComponent(e)}catch{return e}},n$=/(?:^|[/\\])node_modules[/\\]/g,nF=/[/\\]\.vite[/\\]deps[^/\\]*[/\\]/g,nD=/\.[mc]?[jt]sx?$/i,nO=/^chunk-[A-Za-z0-9_-]+$/,nP=/[/\\]/,nL=/^(.+?)@v?\d/,nI=e=>e.split(nP).filter(Boolean),nH=e=>{let[t,r]=nI(e);return!t||t.startsWith(".")?null:t.startsWith("@")?r?`${t}/${r}`:null:t},nW=e=>{let t=nI(e)[0];if(!t)return null;let r=t.replace(nD,"");if(nO.test(r))return null;if(!r.startsWith("@"))return r;let n=r.indexOf("_");return -1===n?null:`${r.slice(0,n)}/${r.slice(n+1)}`},nU=(e,t,r)=>{let n=null,i;for(;null!==(i=t.exec(e));)n=i;return n?r(e.slice(n.index+n[0].length)):null},nB=e=>e?.match(nL)?.[1]??null,nV=e=>{let t;if(!e)return null;let r=nw(e);return r&&((nU(t=nj(r),nF,nW)??nU(t,n$,nH))||(e=>{let t;try{t=new URL(e)}catch{return null}if(!t.hostname)return null;let r=nI(t.pathname).map(nj);for(let[e,t]of r.entries()){if(t.startsWith("@")){let n=nB(r[e+1]);if(n)return`${t}/${n}`;continue}let n=nB(t);if(n)return n}return null})(e))||null},nq=e=>e.startsWith("data-react-grab-"),nK=new Set(["_","$","motion.","styled.","chakra.","ark.","Primitive.","Slot."]),nG=new Set("AppRouter.AppRouterAnnouncer.AppDevOverlay.AppDevOverlayErrorBoundary.ClientPageRoot.ClientSegmentRoot.DevRootHTTPAccessFallbackBoundary.ErrorBoundary.ErrorBoundaryHandler.GracefulDegradeBoundary.HTTPAccessErrorFallback.HTTPAccessFallbackBoundary.HTTPAccessFallbackErrorBoundary.HandleRedirect.Head.HistoryUpdater.HotReload.InnerLayoutRouter.InnerScrollAndFocusHandler.InnerScrollAndFocusHandlerOld.InnerScrollAndMaybeFocusHandler.InnerScrollHandlerNew.LoadableComponent.LoadingBoundary.LoadingBoundaryProvider.NotAllowedRootHTTPFallbackError.OfflineProvider.OuterLayoutRouter.RedirectBoundary.RedirectErrorBoundary.RenderFromTemplateContext.RenderValidationBoundaryAtThisLevel.ReplaySsrOnlyErrors.RootErrorBoundary.RootLevelDevOverlayElement.Router.ScrollAndFocusHandler.ScrollAndMaybeFocusHandler.SegmentBoundaryTrigger.SegmentBoundaryTriggerNode.SegmentStateProvider.SegmentTrieNode.SegmentViewNode.SegmentViewStateNode.ServerRoot.body.html".split(".")),nX=new Set(["Suspense","Fragment","StrictMode","Profiler","SuspenseList"]),nY=new Set(["MotionDOMComponent"]),nJ=e=>{if(nG.has(e)||nX.has(e)||nY.has(e))return!0;for(let t of nK)if(e.startsWith(t))return!0;return!1},nZ=e=>!(!e||nJ(e)||"SlotClone"===e||"Slot"===e),nQ=e=>(e&&(r=void 0),r??="u">typeof document&&!!(document.getElementById("__NEXT_DATA__")||document.querySelector("nextjs-portal"))),n0=e=>!(e.length<=1||nJ(e)||e[0]!==e[0].toUpperCase()||e.endsWith("Provider")||e.endsWith("Context")),n1=["about://React/","rsc://React/"],n2=e=>n1.some(t=>e.startsWith(t)),n5=e=>{for(let t of n1){if(!e.startsWith(t))continue;let r=e.indexOf("/",t.length);if(-1===r)continue;let n=r+1,i=e.lastIndexOf("?");return nj(i>n?e.slice(n,i):e.slice(n))}return e},n4=async e=>{let r=[],n=[];for(let t=0;t<e.length;t++){let i=e[t];i.isServer&&i.fileName&&(r.push(t),n.push({file:n5(i.fileName),methodName:i.functionName??"<unknown>",line1:i.lineNumber??null,column1:i.columnNumber??null,arguments:[]}))}if(0===n.length)return e;let i=new AbortController,o=setTimeout(()=>i.abort(),5e3);try{let o=await fetch(`${(()=>{if(void 0!==t)return t;let e=document.querySelector('script[src*="/_next/"]')?.src,r=e?new URL(e).pathname:"",n=r.indexOf("/_next/");return t=n>0?r.slice(0,n):""})()}/__nextjs_original-stack-frames`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({frames:n,isServer:!0,isEdgeServer:!1,isAppDirectory:!0}),signal:i.signal});if(!o.ok)return e;let a=await o.json(),l=[...e];for(let t=0;t<r.length;t++){let n=a[t];if(n?.status!=="fulfilled")continue;let i=n.value?.originalStackFrame;if(!i?.file||i.ignored)continue;let o=r[t];l[o]={...e[o],fileName:i.file,lineNumber:i.line1??void 0,columnNumber:i.column1??void 0,isSymbolicated:!0}}return l}catch{return e}finally{clearTimeout(o)}},n3=e=>{if(!r$())return e;let t=e;for(;t;){if(rF(t))return t;t=t.parentElement}return e},n6=new WeakMap,n8=async e=>{try{let t=rF(e);if(!t)return null;let r=await nf(t);return nQ()?await n4(((e,t)=>{let r;if(!t.some(e=>e.isServer&&!e.fileName&&e.functionName))return t;let n=(r=new Map,rA(e,e=>{if(!no(e))return!1;let t=np(e._debugStack.stack);if(!t)return!1;for(let e of rq(t))!e.functionName||!e.fileName||n2(e.fileName)&&(r.has(e.functionName)||r.set(e.functionName,{...e,isServer:!0}));return!1},!0),r);return 0===n.size?t:t.map(e=>{if(!e.isServer||e.fileName||!e.functionName)return e;let t=n.get(e.functionName);return t?{...e,fileName:t.fileName,lineNumber:t.lineNumber,columnNumber:t.columnNumber}:e})})(t,r)):r}catch{return null}},n7=e=>{if(!r$())return Promise.resolve([]);let t=n3(e),r=n6.get(t);if(r)return r;let n=n8(t);return n6.set(t,n),n},n9=async e=>{let t=rF(n3(e));if(!t)return null;try{let e=await ng(t);return e?.fileName&&nb(e.fileName)?{filePath:nR(e.fileName),lineNumber:e.lineNumber??null,columnNumber:e.columnNumber??null,componentName:(e.functionName&&n0(e.functionName)?e.functionName:null)??(e=>{if(!e||!rT(e))return null;let t=rj(e.type);return t&&n0(t)?t:null})(t._debugOwner)}:null}catch{return null}},ie=async e=>{let t=await n9(e);if(t)return t;let r=await n7(e);if(!r||0===r.length)return null;let n=r.filter(e=>e.fileName&&nb(e.fileName)),i=n.find(e=>e.functionName&&n0(e.functionName))??n[0];return i?.fileName?{filePath:nR(i.fileName),lineNumber:i.lineNumber??null,columnNumber:i.columnNumber??null,componentName:i.functionName&&n0(i.functionName)?i.functionName:null}:null},it=["/src/app/","/src/pages/","/app/","/pages/"],ir=(e,t)=>{let r=((e,t)=>{let r=nR(e);if(!t||!r.startsWith("/"))return r;for(let e of it){let t=r.indexOf(e);if(-1!==t)return`/./${r.slice(t+1)}`}return r})(e.filePath,t),n=t&&e.lineNumber?`${r}:${e.lineNumber}${e.columnNumber?`:${e.columnNumber}`:""}`:r;return e.componentName?`
  in ${e.componentName} (at ${n})`:`
  in ${n}`},ii=async(e,t={})=>{let r=t.maxLines??3,n=await n9(e),i=await n7(e);if(i&&i&&i.some(e=>!!(e.fileName&&nb(e.fileName)||e.isServer&&(!e.functionName||n0(e.functionName))||e.functionName&&n0(e.functionName))))return((e,t={},r=null)=>{let{maxLines:n=3}=t,i=nQ(),o=[],a=null,l=!1;r&&o.push(ir(r,i));let s=(e,t)=>{o.push(e),a=t};for(let t of e){if(o.length>=n)break;let e=t.fileName&&nb(t.fileName)?t.fileName:null,c=e?null:nV(t.fileName);if(c&&c===a)continue;let d=t.functionName&&n0(t.functionName)?t.functionName:null;if(!l&&d&&d===r?.componentName){l=!0;continue}if(t.isServer&&!e&&(d||!t.functionName)){let e=c?`${c} at Server`:"at Server";s(`
  in ${d??"<anonymous>"} (${e})`,c);continue}if(!e&&d){s(c?`
  in ${d} (${c})`:`
  in ${d}`,c);continue}e&&s(ir({componentName:d,filePath:e,lineNumber:t.lineNumber??null,columnNumber:t.columnNumber??null},i),null)}return o.join("")})(i,t,n);if(n)return ir(n,nQ());let o=((e,t)=>{if(!r$())return[];let r=rF(e);if(!r)return[];let n=[];return rA(r,e=>{if(n.length>=t)return!0;if(rT(e)){let t=rj(e.type);t&&nZ(t)&&n.push(t)}return!1},!0),n})(n3(e),r);return o.length>0?o.map(e=>`
  in ${e}`).join(""):""},io=async(e,t={})=>{let r=n3(e),n=ih(r),i=await ii(r,t);return i?`${n}${i}`:ia(r)},ia=e=>{if(!(e instanceof HTMLElement))return ip(e);let t=rm(e),r=ic(e),n=nz(id(e),100);return n.length>0?`<${t}${r}>
  ${n}
</${t}>`:`<${t}${r} />`},il=e=>nz(e,15),is=e=>"class"===e||"className"===e||"style"===e,ic=e=>{let t=[],r=[],n="";for(let{name:i,value:o}of e.attributes)if(!nq(i)){if(is(i)){"style"!==i&&o&&(n=` class="${il(o)}"`);continue}rp.has(i)?t.push(o?` ${i}="${o}"`:` ${i}`):o&&r.push(` ${i}="${il(o)}"`)}return t.join("")+r.join("")+n},id=e=>{let t="";for(let r of e.childNodes)if(r.nodeType===Node.TEXT_NODE){let e=r.textContent?.trim()??"";e&&(t+=(t?" ":"")+e)}return t},iu=e=>0===e.length?"":e.length<=2?e.map(e=>`<${rm(e)} ...>`).join(`
  `):`(${e.length} elements)`,ip=e=>{let t=rm(e);if(!(e instanceof HTMLElement))return`<${t}${((e,t={})=>{let{truncate:r=!0,maxAttrs:n=3}=t,i=[];for(let t of ru){if(i.length>=n)break;let o=e.getAttribute(t);if(o){let e=r?il(o):o;i.push(`${t}="${e}"`)}}return i.length>0?` ${i.join(" ")}`:""})(e,{truncate:!1,maxAttrs:ru.length})} />`;let r=ic(e),n=nz(id(e),100);return n?`<${t}${r}>${n}</${t}>`:`<${t}${r} />`},ih=e=>{let t=rm(e),r=ic(e),n=id(e),i=[],o=[],a=!1;for(let t of e.childNodes)t.nodeType!==Node.COMMENT_NODE&&(t.nodeType===Node.TEXT_NODE?t.textContent&&t.textContent.trim().length>0&&(a=!0):t instanceof Element&&(a?o.push(t):i.push(t)));let l="",s=iu(i);s&&(l+=`
  ${s}`),n.length>0&&(l+=`
  ${nz(n,100)}`);let c=iu(o);return c&&(l+=`
  ${c}`),l.length>0?`<${t}${r}>${l}
</${t}>`:`<${t}${r} />`},im="u">typeof window,ig=im?(Object.getOwnPropertyDescriptor(Window.prototype,"requestAnimationFrame")?.value??window.requestAnimationFrame).bind(window):e=>0,iv=im?(Object.getOwnPropertyDescriptor(Window.prototype,"cancelAnimationFrame")?.value??window.cancelAnimationFrame).bind(window):e=>{};new WeakMap;let iw=new Map,ib=new WeakSet,ix=new Map,iy=new Map;"u">typeof window&&(window.requestAnimationFrame=e=>ib.has(e)?ig(t=>{e(t)}):ig(e),window.cancelAnimationFrame=e=>{if(iw.has(e))return void iw.delete(e);let t=iy.get(e);if(void 0!==t){iv(t.nativeId),iy.delete(e);return}let r=ix.get(e);if(void 0!==r){iw.delete(r),ix.delete(e);return}iv(e)}),new WeakMap,new WeakMap,new WeakMap;new WeakMap,new WeakMap,new WeakSet,e=>{if(!e)return[];let t=[],r=e.next;if(!r)return[];let n=r;do n&&=(t.push(n.action),n.next);while(n&&n!==r)return t};var ik=class extends Error{constructor(e){super(e),this.name="ReactGrabError"}},i_=class extends ik{constructor(){super("Can't generate CSS selector for non-element node type."),this.name="NonElementNodeError"}},iN=class extends ik{constructor(e){super(`Timeout: Can't find a unique selector after ${e}ms`),this.name="SelectorTimeoutError",this.timeoutMs=e}},iS=class extends ik{constructor(){super("Selector was not found."),this.name="SelectorNotFoundError"}};let iE=new Set(["role","name","aria-label","rel","href"]),iC=e=>{if(!/^[a-z-]{3,}$/i.test(e))return!1;for(let t of e.split(/-|[A-Z]/))if(t.length<=2||/[^aeiou]{4,}/i.test(t))return!1;return!0},iT=e=>{let t=e[0].name;for(let r=1;r<e.length;r++)t=`${e[r].name} > ${t}`;return t},iA=e=>{let t=0;for(let r of e)t+=r.penalty;return t},iz=(e,t)=>iA(e)-iA(t),iM=(e,t)=>{let r=e.parentNode;if(!r)return;let n=r.firstChild;if(!n)return;let i=0;for(;n&&(n.nodeType===Node.ELEMENT_NODE&&(void 0===t||n.tagName.toLowerCase()===t)&&i++,n!==e);)n=n.nextSibling;return i},iR=(e,t)=>"html"===e?"html":`${e}:nth-of-type(${t})`,ij=(e,t)=>{let r=[],n=e.getAttribute("id"),i=e.tagName.toLowerCase();for(let t of(n&&iC(n)&&r.push({name:`#${CSS.escape(n)}`,penalty:0}),e.classList))iC(t)&&r.push({name:`.${CSS.escape(t)}`,penalty:1});for(let n of e.attributes)t(n.name,n.value)&&r.push({name:`[${CSS.escape(n.name)}="${CSS.escape(n.value)}"]`,penalty:2});r.push({name:i,penalty:5});let o=iM(e,i);void 0!==o&&r.push({name:iR(i,o),penalty:10});let a=iM(e);return void 0!==a&&r.push({name:"html"===i?"html":`${i}:nth-child(${a})`,penalty:50}),r},i$=(e,t=rd,r=[])=>{if(t<=0)return[];if(0===e.length)return[r];let n=[];for(let i of e[0]){let o=t-n.length;if(o<=0)break;n.push(...i$(e.slice(1),o,[...r,i]))}return n},iF=(e,t)=>1===t.querySelectorAll(iT(e)).length,iD=(e,t)=>{let r=e,n=[];for(;r&&r!==t;){let e=r.tagName.toLowerCase(),t=iM(r,e);if(void 0===t)return;n.push({name:iR(e,t),penalty:10}),r=r.parentElement}return iF(n,t)?n:void 0},iO=e=>"u">typeof CSS&&"function"==typeof CSS.escape?CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,e=>`\\${e}`),iP=e=>e.ownerDocument.body??e.ownerDocument.documentElement,iL=new Set(["data-testid","data-test-id","data-test","data-cy","data-qa","aria-label","role","name","title","alt"]),iI=e=>e.length>0&&e.length<=120,iH=(e,t)=>{try{let r=e.ownerDocument.querySelectorAll(t);return 1===r.length&&r[0]===e}catch{return!1}},iW=new Map(["top","right","bottom","left"].flatMap(e=>[[`border-${e}-style`,e],[`border-${e}-color`,e]])),iU=null,iB=new Map,iV=(e,t)=>{let r=iW.get(e);if(!r)return!1;let n=t.getPropertyValue(`border-${r}-width`);return"0px"===n||"0"===n},iq=async e=>{let[t,r,n]=await Promise.all([io(e),ie(e),n7(e).then(e=>e??[])]),i=await ii(e),o=ih(e),a=(e=>{if(!r$())return null;let t=rF(n3(e));if(!t)return null;let r=t.return;for(;r;){if(rT(r)){let e=rj(r.type);if(e&&nZ(e))return e}r=r.return}return null})(e),l=rF(e),s=((e,t=!0)=>{let r=(e=>{if(e instanceof HTMLElement&&e.id){let t=`#${iO(e.id)}`;if(iH(e,t))return t}for(let t of iL){let r=e.getAttribute(t);if(!r||!iI(r))continue;let n=`[${t}=${JSON.stringify(r)}]`;if(iH(e,n))return n;let i=`${e.tagName.toLowerCase()}${n}`;if(iH(e,i))return i}return null})(e);if(r)return r;if(t)try{let t=((e,t,r,n)=>{let i;if(e.nodeType!==Node.ELEMENT_NODE)throw new i_;if("html"===e.tagName.toLowerCase())return"html";let o=(i=e.getRootNode?.())instanceof ShadowRoot?i:t.nodeType===Node.DOCUMENT_NODE?t:t.ownerDocument,a=Date.now(),l=[],s=e,c=0,d;for(;s&&s!==o&&!d;)if(l.push(ij(s,n)),s=s.parentElement,++c>=3){let t=i$(l);for(let n of(t.sort(iz),t)){if(Date.now()-a>r){let t=iD(e,o);if(!t)throw new iN(r);return iT(t)}if(iF(n,o)){d=n;break}}}if(!d&&c<3){let e=i$(l);for(let t of(e.sort(iz),e)){if(Date.now()-a>r)break;if(iF(t,o)){d=t;break}}}if(!d)throw new iS;return iT(d)})(e,iP(e),200,(e,t)=>{let r,n;return r=iE.has(e)||e.startsWith("data-")&&iC(e),n=iC(t)&&t.length<100||t.startsWith("#")&&iC(t.slice(1)),r&&n||iL.has(e)&&iI(t)});if(t)return t}catch{}return(e=>{let t=[],r=iP(e),n=e;for(;n;){if(n instanceof HTMLElement&&n.id){t.unshift(`#${iO(n.id)}`);break}let e=n.parentElement;if(!e){t.unshift(n.tagName.toLowerCase());break}let i=Array.from(e.children).indexOf(n),o=i>=0?i+1:1;if(t.unshift(`${n.tagName.toLowerCase()}:nth-child(${o})`),e===r){t.unshift(r.tagName.toLowerCase());break}n=e}return t.join(" > ")})(e)})(e),c=(e=>{let t=(e=>{let t=iB.get(e);if(t)return t;let r=iU||((iU=document.createElement("iframe")).style.cssText="position:fixed;left:-9999px;width:0;height:0;border:none;visibility:hidden;",document.body.appendChild(iU),iU),n=r.contentDocument,i=n.createElement(e);n.body.appendChild(i);let o=r.contentWindow.getComputedStyle(i),a=new Map;for(let e of rh){let t=o.getPropertyValue(e);t&&a.set(e,t)}return i.remove(),iB.set(e,a),a})(e.tagName.toLowerCase()),r=getComputedStyle(e),n=[];for(let e of rh){let i=r.getPropertyValue(e);i&&i!==t.get(e)&&(iV(e,r)||n.push(`${e}: ${i};`))}let i=e.getAttribute("class")?.trim(),o=n.join(`
`);return i?o?`className: ${i}

${o}`:`className: ${i}`:o})(e);return{element:e,snippet:t,htmlPreview:o,stackString:i,stack:n,componentName:a,filePath:r?.filePath??null,lineNumber:r?.lineNumber??null,columnNumber:r?.columnNumber??null,fiber:l,selector:s,styles:c}};var iK=e.i(69634),iG=Object.defineProperty,iX=(e,t,r)=>{let n;return(n="symbol"!=typeof t?t+"":t)in e?iG(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r};Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(e){return[...this].sort(e)},writable:!0,configurable:!0});var iY="u">typeof window;function iJ(e,t){return t-e}var iZ=e=>{let t="",r=new Map;for(let t of e){let{forget:e,time:n,aggregatedCount:i,name:o}=t;r.has(i)||r.set(i,[]);let a=r.get(i);a&&a.push({name:o,forget:e,time:null!=n?n:0})}let n=Array.from(r.keys()).sort(iJ),i=[],o=0;for(let e of n){let t=r.get(e);if(!t)continue;let n=function(e){let t=e[0].name,r=Math.min(4,e.length);for(let n=1;n<r;n++)t+=`, ${e[n].name}`;return t}(t),a=function(e){let t=e[0].time;for(let r=1,n=e.length;r<n;r++)t+=e[r].time;return t}(t),l=function(e){for(let t=0,r=e.length;t<r;t++)if(e[t].forget)return!0;return!1}(t);o+=a,t.length>4&&(n+="…"),e>1&&(n+=` \xd7 ${e}`),l&&(n=`\u2728${n}`),i.push(n)}return(t=i.join(", ")).length?(t.length>40&&(t=`${t.slice(0,40)}\u2026`),o>=.01&&(t+=` (${Number(o.toFixed(2))}ms)`),t):null};function iQ(e,t){return e===t||e!=e&&t!=t}var i0=()=>iY?(void 0===window.reactScanIdCounter&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):"0",i1=e=>{let t=e.createOscillator(),r=e.createGain();t.connect(r),r.connect(e.destination);let n=[392,600],i=.3/n.length;n.forEach((r,n)=>{t.frequency.setValueAtTime(r,e.currentTime+n*i)}),t.type="sine",r.gain.setValueAtTime(.12,e.currentTime),r.gain.setTargetAtTime(0,e.currentTime+.21,.05),t.start(),t.stop(e.currentTime+.3)},i2=tY(({size:e=15,name:t,fill:r="currentColor",stroke:n="currentColor",className:i,externalURL:o="",style:a},l)=>{let s=Array.isArray(e)?e[0]:e,c=Array.isArray(e)?e[1]||e[0]:e,d=`${o}#${t}`;return ra("svg",{ref:l,width:`${s}px`,height:`${c}px`,fill:r,stroke:n,className:i,style:{...a,minWidth:`${s}px`,maxWidth:`${s}px`,minHeight:`${c}px`,maxHeight:`${c}px`},children:[ra("title",{children:t}),ra("use",{href:d})]})}),i5="react-scan-widget-settings-v2",i4="react-scan-widget-collapsed-v1",i3="react-scan-widget-last-view-v1",i6=(e=new Map,t=null,r)=>({nextPart:e,validators:t,classGroupId:r}),i8=[],i7=(e,t,r)=>{if(0==e.length-t)return r.classGroupId;let n=e[t],i=r.nextPart.get(n);if(i){let r=i7(e,t+1,i);if(r)return r}let o=r.validators;if(null===o)return;let a=0===t?e.join("-"):e.slice(t).join("-"),l=o.length;for(let e=0;e<l;e++){let t=o[e];if(t.validator(a))return t.classGroupId}},i9=(e,t)=>{let r=i6();for(let n in e)oe(e[n],r,n,t);return r},oe=(e,t,r,n)=>{let i=e.length;for(let o=0;o<i;o++)ot(e[o],t,r,n)},ot=(e,t,r,n)=>{"string"==typeof e?or(e,t,r):"function"==typeof e?on(e,t,r,n):oi(e,t,r,n)},or=(e,t,r)=>{(""===e?t:oo(t,e)).classGroupId=r},on=(e,t,r,n)=>{oa(e)?oe(e(n),t,r,n):(null===t.validators&&(t.validators=[]),t.validators.push({classGroupId:r,validator:e}))},oi=(e,t,r,n)=>{let i=Object.entries(e),o=i.length;for(let e=0;e<o;e++){let[o,a]=i[e];oe(a,oo(t,o),r,n)}},oo=(e,t)=>{let r=e,n=t.split("-"),i=n.length;for(let e=0;e<i;e++){let t=n[e],i=r.nextPart.get(t);i||(i=i6(),r.nextPart.set(t,i)),r=i}return r},oa=e=>"isThemeGetter"in e&&!0===e.isThemeGetter,ol=[],os=(e,t,r,n,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:r,maybePostfixModifierPosition:n,isExternal:i}),oc=/\s+/,od=e=>{let t;if("string"==typeof e)return e;let r="";for(let n=0;n<e.length;n++)e[n]&&(t=od(e[n]))&&(r&&(r+=" "),r+=t);return r},ou=[],op=e=>{let t=t=>t[e]||ou;return t.isThemeGetter=!0,t},oh=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,om=/^\((?:(\w[\w-]*):)?(.+)\)$/i,of=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,og=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ov=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ow=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,ob=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ox=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,oy=e=>of.test(e),ok=e=>!!e&&!Number.isNaN(Number(e)),o_=e=>!!e&&Number.isInteger(Number(e)),oN=e=>e.endsWith("%")&&ok(e.slice(0,-1)),oS=e=>og.test(e),oE=()=>!0,oC=e=>ov.test(e)&&!ow.test(e),oT=()=>!1,oA=e=>ob.test(e),oz=e=>ox.test(e),oM=e=>!oj(e)&&!oH(e),oR=e=>oX(e,oQ,oT),oj=e=>oh.test(e),o$=e=>oX(e,o0,oC),oF=e=>oX(e,o1,ok),oD=e=>oX(e,o5,oE),oO=e=>oX(e,o2,oT),oP=e=>oX(e,oJ,oT),oL=e=>oX(e,oZ,oz),oI=e=>oX(e,o4,oA),oH=e=>om.test(e),oW=e=>oY(e,o0),oU=e=>oY(e,o2),oB=e=>oY(e,oJ),oV=e=>oY(e,oQ),oq=e=>oY(e,oZ),oK=e=>oY(e,o4,!0),oG=e=>oY(e,o5,!0),oX=(e,t,r)=>{let n=oh.exec(e);return!!n&&(n[1]?t(n[1]):r(n[2]))},oY=(e,t,r=!1)=>{let n=om.exec(e);return!!n&&(n[1]?t(n[1]):r)},oJ=e=>"position"===e||"percentage"===e,oZ=e=>"image"===e||"url"===e,oQ=e=>"length"===e||"size"===e||"bg-size"===e,o0=e=>"length"===e,o1=e=>"number"===e,o2=e=>"family-name"===e,o5=e=>"number"===e||"weight"===e,o4=e=>"shadow"===e,o3=((e,...t)=>{let r,n,i,o,a=e=>{let t=n(e);if(t)return t;let o=((e,t)=>{let{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:i,sortModifiers:o}=t,a=[],l=e.trim().split(oc),s="";for(let e=l.length-1;e>=0;e-=1){let t=l[e],{isExternal:c,modifiers:d,hasImportantModifier:u,baseClassName:p,maybePostfixModifierPosition:h}=r(t);if(c){s=t+(s.length>0?" "+s:s);continue}let m=!!h,f=n(m?p.substring(0,h):p);if(!f){if(!m||!(f=n(p))){s=t+(s.length>0?" "+s:s);continue}m=!1}let g=0===d.length?"":1===d.length?d[0]:o(d).join(":"),v=u?g+"!":g,w=v+f;if(a.indexOf(w)>-1)continue;a.push(w);let b=i(f,m);for(let e=0;e<b.length;++e){let t=b[e];a.push(v+t)}s=t+(s.length>0?" "+s:s)}return s})(e,r);return i(e,o),o};return o=l=>{var s;let c;return n=(r={cache:(e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=Object.create(null),n=Object.create(null),i=(i,o)=>{r[i]=o,++t>e&&(t=0,n=r,r=Object.create(null))};return{get(e){let t=r[e];return void 0!==t?t:void 0!==(t=n[e])?(i(e,t),t):void 0},set(e,t){e in r?r[e]=t:i(e,t)}}})((s=t.reduce((e,t)=>t(e),e())).cacheSize),parseClassName:(e=>{let{prefix:t,experimentalParseClassName:r}=e,n=e=>{let t,r=[],n=0,i=0,o=0,a=e.length;for(let l=0;l<a;l++){let a=e[l];if(0===n&&0===i){if(":"===a){r.push(e.slice(o,l)),o=l+1;continue}if("/"===a){t=l;continue}}"["===a?n++:"]"===a?n--:"("===a?i++:")"===a&&i--}let l=0===r.length?e:e.slice(o),s=l,c=!1;return l.endsWith("!")?(s=l.slice(0,-1),c=!0):l.startsWith("!")&&(s=l.slice(1),c=!0),os(r,c,s,t&&t>o?t-o:void 0)};if(t){let e=t+":",r=n;n=t=>t.startsWith(e)?r(t.slice(e.length)):os(ol,!1,t,void 0,!0)}if(r){let e=n;n=t=>r({className:t,parseClassName:e})}return n})(s),sortModifiers:(c=new Map,s.orderSensitiveModifiers.forEach((e,t)=>{c.set(e,1e6+t)}),e=>{let t=[],r=[];for(let n=0;n<e.length;n++){let i=e[n],o="["===i[0],a=c.has(i);o||a?(r.length>0&&(r.sort(),t.push(...r),r=[]),t.push(i)):r.push(i)}return r.length>0&&(r.sort(),t.push(...r)),t}),...(e=>{let t=(e=>{let{theme:t,classGroups:r}=e;return i9(r,t)})(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:e=>{if(e.startsWith("[")&&e.endsWith("]")){var r;let t,n,i;return -1===(r=e).slice(1,-1).indexOf(":")?void 0:(n=(t=r.slice(1,-1)).indexOf(":"),(i=t.slice(0,n))?"arbitrary.."+i:void 0)}let n=e.split("-"),i=+(""===n[0]&&n.length>1);return i7(n,i,t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=n[e],i=r[e];if(t){if(i){let e=Array(i.length+t.length);for(let t=0;t<i.length;t++)e[t]=i[t];for(let r=0;r<t.length;r++)e[i.length+r]=t[r];return e}return t}return i||i8}return r[e]||i8}}})(s)}).cache.get,i=r.cache.set,o=a,a(l)},(...e)=>o(((...e)=>{let t,r,n=0,i="";for(;n<e.length;)(t=e[n++])&&(r=od(t))&&(i&&(i+=" "),i+=r);return i})(...e))})(()=>{let e=op("color"),t=op("font"),r=op("text"),n=op("font-weight"),i=op("tracking"),o=op("leading"),a=op("breakpoint"),l=op("container"),s=op("spacing"),c=op("radius"),d=op("shadow"),u=op("inset-shadow"),p=op("text-shadow"),h=op("drop-shadow"),m=op("blur"),f=op("perspective"),g=op("aspect"),v=op("ease"),w=op("animate"),b=()=>["auto","avoid","all","avoid-page","page","left","right","column"],x=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],y=()=>[...x(),oH,oj],k=()=>["auto","hidden","clip","visible","scroll"],_=()=>["auto","contain","none"],N=()=>[oH,oj,s],S=()=>[oy,"full","auto",...N()],E=()=>[o_,"none","subgrid",oH,oj],C=()=>["auto",{span:["full",o_,oH,oj]},o_,oH,oj],T=()=>[o_,"auto",oH,oj],A=()=>["auto","min","max","fr",oH,oj],z=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],M=()=>["start","end","center","stretch","center-safe","end-safe"],R=()=>["auto",...N()],j=()=>[oy,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...N()],$=()=>[oy,"screen","full","dvw","lvw","svw","min","max","fit",...N()],F=()=>[oy,"screen","full","lh","dvh","lvh","svh","min","max","fit",...N()],D=()=>[e,oH,oj],O=()=>[...x(),oB,oP,{position:[oH,oj]}],P=()=>["no-repeat",{repeat:["","x","y","space","round"]}],L=()=>["auto","cover","contain",oV,oR,{size:[oH,oj]}],I=()=>[oN,oW,o$],H=()=>["","none","full",c,oH,oj],W=()=>["",ok,oW,o$],U=()=>["solid","dashed","dotted","double"],B=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>[ok,oN,oB,oP],q=()=>["","none",m,oH,oj],K=()=>["none",ok,oH,oj],G=()=>["none",ok,oH,oj],X=()=>[ok,oH,oj],Y=()=>[oy,"full",...N()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[oS],breakpoint:[oS],color:[oE],container:[oS],"drop-shadow":[oS],ease:["in","out","in-out"],font:[oM],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[oS],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[oS],shadow:[oS],spacing:["px",ok],text:[oS],"text-shadow":[oS],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",oy,oj,oH,g]}],container:["container"],columns:[{columns:[ok,oj,oH,l]}],"break-after":[{"break-after":b()}],"break-before":[{"break-before":b()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:y()}],overflow:[{overflow:k()}],"overflow-x":[{"overflow-x":k()}],"overflow-y":[{"overflow-y":k()}],overscroll:[{overscroll:_()}],"overscroll-x":[{"overscroll-x":_()}],"overscroll-y":[{"overscroll-y":_()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:S()}],"inset-x":[{"inset-x":S()}],"inset-y":[{"inset-y":S()}],start:[{"inset-s":S(),start:S()}],end:[{"inset-e":S(),end:S()}],"inset-bs":[{"inset-bs":S()}],"inset-be":[{"inset-be":S()}],top:[{top:S()}],right:[{right:S()}],bottom:[{bottom:S()}],left:[{left:S()}],visibility:["visible","invisible","collapse"],z:[{z:[o_,"auto",oH,oj]}],basis:[{basis:[oy,"full","auto",l,...N()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ok,oy,"auto","initial","none",oj]}],grow:[{grow:["",ok,oH,oj]}],shrink:[{shrink:["",ok,oH,oj]}],order:[{order:[o_,"first","last","none",oH,oj]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:C()}],"col-start":[{"col-start":T()}],"col-end":[{"col-end":T()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:C()}],"row-start":[{"row-start":T()}],"row-end":[{"row-end":T()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":A()}],"auto-rows":[{"auto-rows":A()}],gap:[{gap:N()}],"gap-x":[{"gap-x":N()}],"gap-y":[{"gap-y":N()}],"justify-content":[{justify:[...z(),"normal"]}],"justify-items":[{"justify-items":[...M(),"normal"]}],"justify-self":[{"justify-self":["auto",...M()]}],"align-content":[{content:["normal",...z()]}],"align-items":[{items:[...M(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...M(),{baseline:["","last"]}]}],"place-content":[{"place-content":z()}],"place-items":[{"place-items":[...M(),"baseline"]}],"place-self":[{"place-self":["auto",...M()]}],p:[{p:N()}],px:[{px:N()}],py:[{py:N()}],ps:[{ps:N()}],pe:[{pe:N()}],pbs:[{pbs:N()}],pbe:[{pbe:N()}],pt:[{pt:N()}],pr:[{pr:N()}],pb:[{pb:N()}],pl:[{pl:N()}],m:[{m:R()}],mx:[{mx:R()}],my:[{my:R()}],ms:[{ms:R()}],me:[{me:R()}],mbs:[{mbs:R()}],mbe:[{mbe:R()}],mt:[{mt:R()}],mr:[{mr:R()}],mb:[{mb:R()}],ml:[{ml:R()}],"space-x":[{"space-x":N()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":N()}],"space-y-reverse":["space-y-reverse"],size:[{size:j()}],"inline-size":[{inline:["auto",...$()]}],"min-inline-size":[{"min-inline":["auto",...$()]}],"max-inline-size":[{"max-inline":["none",...$()]}],"block-size":[{block:["auto",...F()]}],"min-block-size":[{"min-block":["auto",...F()]}],"max-block-size":[{"max-block":["none",...F()]}],w:[{w:[l,"screen",...j()]}],"min-w":[{"min-w":[l,"screen","none",...j()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[a]},...j()]}],h:[{h:["screen","lh",...j()]}],"min-h":[{"min-h":["screen","lh","none",...j()]}],"max-h":[{"max-h":["screen","lh",...j()]}],"font-size":[{text:["base",r,oW,o$]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,oG,oD]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",oN,oj]}],"font-family":[{font:[oU,oO,t]}],"font-features":[{"font-features":[oj]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[i,oH,oj]}],"line-clamp":[{"line-clamp":[ok,"none",oH,oF]}],leading:[{leading:[o,...N()]}],"list-image":[{"list-image":["none",oH,oj]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",oH,oj]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:D()}],"text-color":[{text:D()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...U(),"wavy"]}],"text-decoration-thickness":[{decoration:[ok,"from-font","auto",oH,o$]}],"text-decoration-color":[{decoration:D()}],"underline-offset":[{"underline-offset":[ok,"auto",oH,oj]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:N()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",oH,oj]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",oH,oj]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:O()}],"bg-repeat":[{bg:P()}],"bg-size":[{bg:L()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},o_,oH,oj],radial:["",oH,oj],conic:[o_,oH,oj]},oq,oL]}],"bg-color":[{bg:D()}],"gradient-from-pos":[{from:I()}],"gradient-via-pos":[{via:I()}],"gradient-to-pos":[{to:I()}],"gradient-from":[{from:D()}],"gradient-via":[{via:D()}],"gradient-to":[{to:D()}],rounded:[{rounded:H()}],"rounded-s":[{"rounded-s":H()}],"rounded-e":[{"rounded-e":H()}],"rounded-t":[{"rounded-t":H()}],"rounded-r":[{"rounded-r":H()}],"rounded-b":[{"rounded-b":H()}],"rounded-l":[{"rounded-l":H()}],"rounded-ss":[{"rounded-ss":H()}],"rounded-se":[{"rounded-se":H()}],"rounded-ee":[{"rounded-ee":H()}],"rounded-es":[{"rounded-es":H()}],"rounded-tl":[{"rounded-tl":H()}],"rounded-tr":[{"rounded-tr":H()}],"rounded-br":[{"rounded-br":H()}],"rounded-bl":[{"rounded-bl":H()}],"border-w":[{border:W()}],"border-w-x":[{"border-x":W()}],"border-w-y":[{"border-y":W()}],"border-w-s":[{"border-s":W()}],"border-w-e":[{"border-e":W()}],"border-w-bs":[{"border-bs":W()}],"border-w-be":[{"border-be":W()}],"border-w-t":[{"border-t":W()}],"border-w-r":[{"border-r":W()}],"border-w-b":[{"border-b":W()}],"border-w-l":[{"border-l":W()}],"divide-x":[{"divide-x":W()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":W()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...U(),"hidden","none"]}],"divide-style":[{divide:[...U(),"hidden","none"]}],"border-color":[{border:D()}],"border-color-x":[{"border-x":D()}],"border-color-y":[{"border-y":D()}],"border-color-s":[{"border-s":D()}],"border-color-e":[{"border-e":D()}],"border-color-bs":[{"border-bs":D()}],"border-color-be":[{"border-be":D()}],"border-color-t":[{"border-t":D()}],"border-color-r":[{"border-r":D()}],"border-color-b":[{"border-b":D()}],"border-color-l":[{"border-l":D()}],"divide-color":[{divide:D()}],"outline-style":[{outline:[...U(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ok,oH,oj]}],"outline-w":[{outline:["",ok,oW,o$]}],"outline-color":[{outline:D()}],shadow:[{shadow:["","none",d,oK,oI]}],"shadow-color":[{shadow:D()}],"inset-shadow":[{"inset-shadow":["none",u,oK,oI]}],"inset-shadow-color":[{"inset-shadow":D()}],"ring-w":[{ring:W()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:D()}],"ring-offset-w":[{"ring-offset":[ok,o$]}],"ring-offset-color":[{"ring-offset":D()}],"inset-ring-w":[{"inset-ring":W()}],"inset-ring-color":[{"inset-ring":D()}],"text-shadow":[{"text-shadow":["none",p,oK,oI]}],"text-shadow-color":[{"text-shadow":D()}],opacity:[{opacity:[ok,oH,oj]}],"mix-blend":[{"mix-blend":[...B(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":B()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[ok]}],"mask-image-linear-from-pos":[{"mask-linear-from":V()}],"mask-image-linear-to-pos":[{"mask-linear-to":V()}],"mask-image-linear-from-color":[{"mask-linear-from":D()}],"mask-image-linear-to-color":[{"mask-linear-to":D()}],"mask-image-t-from-pos":[{"mask-t-from":V()}],"mask-image-t-to-pos":[{"mask-t-to":V()}],"mask-image-t-from-color":[{"mask-t-from":D()}],"mask-image-t-to-color":[{"mask-t-to":D()}],"mask-image-r-from-pos":[{"mask-r-from":V()}],"mask-image-r-to-pos":[{"mask-r-to":V()}],"mask-image-r-from-color":[{"mask-r-from":D()}],"mask-image-r-to-color":[{"mask-r-to":D()}],"mask-image-b-from-pos":[{"mask-b-from":V()}],"mask-image-b-to-pos":[{"mask-b-to":V()}],"mask-image-b-from-color":[{"mask-b-from":D()}],"mask-image-b-to-color":[{"mask-b-to":D()}],"mask-image-l-from-pos":[{"mask-l-from":V()}],"mask-image-l-to-pos":[{"mask-l-to":V()}],"mask-image-l-from-color":[{"mask-l-from":D()}],"mask-image-l-to-color":[{"mask-l-to":D()}],"mask-image-x-from-pos":[{"mask-x-from":V()}],"mask-image-x-to-pos":[{"mask-x-to":V()}],"mask-image-x-from-color":[{"mask-x-from":D()}],"mask-image-x-to-color":[{"mask-x-to":D()}],"mask-image-y-from-pos":[{"mask-y-from":V()}],"mask-image-y-to-pos":[{"mask-y-to":V()}],"mask-image-y-from-color":[{"mask-y-from":D()}],"mask-image-y-to-color":[{"mask-y-to":D()}],"mask-image-radial":[{"mask-radial":[oH,oj]}],"mask-image-radial-from-pos":[{"mask-radial-from":V()}],"mask-image-radial-to-pos":[{"mask-radial-to":V()}],"mask-image-radial-from-color":[{"mask-radial-from":D()}],"mask-image-radial-to-color":[{"mask-radial-to":D()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":x()}],"mask-image-conic-pos":[{"mask-conic":[ok]}],"mask-image-conic-from-pos":[{"mask-conic-from":V()}],"mask-image-conic-to-pos":[{"mask-conic-to":V()}],"mask-image-conic-from-color":[{"mask-conic-from":D()}],"mask-image-conic-to-color":[{"mask-conic-to":D()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:O()}],"mask-repeat":[{mask:P()}],"mask-size":[{mask:L()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",oH,oj]}],filter:[{filter:["","none",oH,oj]}],blur:[{blur:q()}],brightness:[{brightness:[ok,oH,oj]}],contrast:[{contrast:[ok,oH,oj]}],"drop-shadow":[{"drop-shadow":["","none",h,oK,oI]}],"drop-shadow-color":[{"drop-shadow":D()}],grayscale:[{grayscale:["",ok,oH,oj]}],"hue-rotate":[{"hue-rotate":[ok,oH,oj]}],invert:[{invert:["",ok,oH,oj]}],saturate:[{saturate:[ok,oH,oj]}],sepia:[{sepia:["",ok,oH,oj]}],"backdrop-filter":[{"backdrop-filter":["","none",oH,oj]}],"backdrop-blur":[{"backdrop-blur":q()}],"backdrop-brightness":[{"backdrop-brightness":[ok,oH,oj]}],"backdrop-contrast":[{"backdrop-contrast":[ok,oH,oj]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ok,oH,oj]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ok,oH,oj]}],"backdrop-invert":[{"backdrop-invert":["",ok,oH,oj]}],"backdrop-opacity":[{"backdrop-opacity":[ok,oH,oj]}],"backdrop-saturate":[{"backdrop-saturate":[ok,oH,oj]}],"backdrop-sepia":[{"backdrop-sepia":["",ok,oH,oj]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":N()}],"border-spacing-x":[{"border-spacing-x":N()}],"border-spacing-y":[{"border-spacing-y":N()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",oH,oj]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ok,"initial",oH,oj]}],ease:[{ease:["linear","initial",v,oH,oj]}],delay:[{delay:[ok,oH,oj]}],animate:[{animate:["none",w,oH,oj]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[f,oH,oj]}],"perspective-origin":[{"perspective-origin":y()}],rotate:[{rotate:K()}],"rotate-x":[{"rotate-x":K()}],"rotate-y":[{"rotate-y":K()}],"rotate-z":[{"rotate-z":K()}],scale:[{scale:G()}],"scale-x":[{"scale-x":G()}],"scale-y":[{"scale-y":G()}],"scale-z":[{"scale-z":G()}],"scale-3d":["scale-3d"],skew:[{skew:X()}],"skew-x":[{"skew-x":X()}],"skew-y":[{"skew-y":X()}],transform:[{transform:[oH,oj,"","none","gpu","cpu"]}],"transform-origin":[{origin:y()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Y()}],"translate-x":[{"translate-x":Y()}],"translate-y":[{"translate-y":Y()}],"translate-z":[{"translate-z":Y()}],"translate-none":["translate-none"],accent:[{accent:D()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:D()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",oH,oj]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":N()}],"scroll-mx":[{"scroll-mx":N()}],"scroll-my":[{"scroll-my":N()}],"scroll-ms":[{"scroll-ms":N()}],"scroll-me":[{"scroll-me":N()}],"scroll-mbs":[{"scroll-mbs":N()}],"scroll-mbe":[{"scroll-mbe":N()}],"scroll-mt":[{"scroll-mt":N()}],"scroll-mr":[{"scroll-mr":N()}],"scroll-mb":[{"scroll-mb":N()}],"scroll-ml":[{"scroll-ml":N()}],"scroll-p":[{"scroll-p":N()}],"scroll-px":[{"scroll-px":N()}],"scroll-py":[{"scroll-py":N()}],"scroll-ps":[{"scroll-ps":N()}],"scroll-pe":[{"scroll-pe":N()}],"scroll-pbs":[{"scroll-pbs":N()}],"scroll-pbe":[{"scroll-pbe":N()}],"scroll-pt":[{"scroll-pt":N()}],"scroll-pr":[{"scroll-pr":N()}],"scroll-pb":[{"scroll-pb":N()}],"scroll-pl":[{"scroll-pl":N()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",oH,oj]}],fill:[{fill:["none",...D()]}],"stroke-w":[{stroke:[ok,oW,o$,oF]}],stroke:[{stroke:["none",...D()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}}),o6=(...e)=>o3(function(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=function e(t){var r,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t)if(Array.isArray(t)){var o=t.length;for(r=0;r<o;r++)t[r]&&(n=e(t[r]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}(e))&&(n&&(n+=" "),n+=t);return n}(e));"u">typeof navigator&&navigator.userAgent.includes("Firefox");var o8=(e,t)=>{let r=0;return n=>{let i=Date.now();if(i-r>=t)return r=i,e(n)}},o7=e=>{if(!iY)return null;try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}},o9=(e,t)=>{if(iY)try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}},ae=e=>{if(iY)try{window.localStorage.removeItem(e)}catch{}},at=e=>{if(!e)return{name:"Unknown",wrappers:[],wrapperTypes:[]};let{tag:t,type:r,elementType:n}=e,i=I(r),o=[],a=[];if(P(e)||15===t||14===t||(null==r?void 0:r.$$typeof)===Symbol.for("react.memo")||(null==n?void 0:n.$$typeof)===Symbol.for("react.memo")){let t=P(e);a.push({type:"memo",title:t?"This component has been auto-memoized by the React Compiler.":"Memoized component that skips re-renders if props are the same",compiler:t})}if(24===t&&a.push({type:"lazy",title:"Lazily loaded component that supports code splitting"}),13===t&&a.push({type:"suspense",title:"Component that can suspend while content is loading"}),12===t&&a.push({type:"profiler",title:"Component that measures rendering performance"}),"string"==typeof i){let e=/^(\w+)\((.*)\)$/,t=i;for(;e.test(t);){let r=t.match(e);if((null==r?void 0:r[1])&&(null==r?void 0:r[2]))o.unshift(r[1]),t=r[2];else break}i=t}return{name:i||"Unknown",wrappers:o,wrapperTypes:a}},ar=e=>"number"==typeof e&&Number.isFinite(e)&&e>=0,an=e=>!!e&&"object"==typeof e&&!Array.isArray(e),ai=()=>{let e=c5.options.value.safeArea;if(ar(e))return{top:e,right:e,bottom:e,left:e};if(an(e)){let t=e.top,r=e.right,n=e.bottom,i=e.left;return{top:ar(t)?t:24,right:ar(r)?r:24,bottom:ar(n)?n:24,left:ar(i)?i:24}}return{top:24,right:24,bottom:24,left:24}},ao=tg(!1),aa=tg(null),al=()=>({corner:"bottom-right",dimensions:{isFullWidth:!1,isFullHeight:!1,width:550,height:350,position:{x:24,y:24}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:550,height:350,position:{x:24,y:24}},componentsTree:{width:240}});al();var as=tg((n=al(),(i=o7(i5))?{corner:null!=(o=i.corner)?o:n.corner,dimensions:null!=(a=i.dimensions)?a:n.dimensions,lastDimensions:null!=(s=null!=(l=i.lastDimensions)?l:i.dimensions)?s:n.lastDimensions,componentsTree:null!=(c=i.componentsTree)?c:n.componentsTree}:(o9(i5,{corner:n.corner,dimensions:n.dimensions,lastDimensions:n.lastDimensions,componentsTree:n.componentsTree}),n))),ac=()=>{if(!iY)return;let{dimensions:e}=as.value,{width:t,height:r,position:n}=e,i=ai();as.value={...as.value,dimensions:{isFullWidth:t>=window.innerWidth-i.left-i.right,isFullHeight:r>=window.innerHeight-i.top-i.bottom,width:t,height:r,position:n}}},ad=tg({view:"none"}),au=o7(i4),ap=tg(null!=au?au:null);function ah(){return!1}function am(e){function t(t){return this.shouldComponentUpdate=ah,eb(e,t)}return t.displayName=`Memo(${e.displayName||e.name})`,t.prototype.isReactComponent=!0,t._forwarded=!0,t}var af=new WeakMap,ag={activeFlashes:new Map,create(e){let t,r,n,i=e.querySelector(".react-scan-flash-overlay"),o=i instanceof HTMLElement?i:((t=document.createElement("div")).className="react-scan-flash-overlay",e.appendChild(t),r=(()=>{e.querySelector(".react-scan-flash-overlay")&&this.create(e)}).bind(null,e),document.addEventListener("scroll",r,{passive:!0,capture:!0}),n=()=>{document.removeEventListener("scroll",r,{capture:!0})},this.activeFlashes.set(e,{element:e,overlay:t,scrollCleanup:n}),t),a=af.get(o);a&&(clearTimeout(a),af.delete(o)),requestAnimationFrame(()=>{o.style.transition="none",o.style.opacity="0.9";let t=setTimeout(()=>{o.style.transition="opacity 150ms ease-out",o.style.opacity="0";let t=setTimeout(()=>{o.parentNode&&o.parentNode.removeChild(o);let t=this.activeFlashes.get(e);(null==t?void 0:t.scrollCleanup)&&t.scrollCleanup(),this.activeFlashes.delete(e),af.delete(o)},150);af.set(o,t)},300);af.set(o,t)})},cleanup(e){let t=this.activeFlashes.get(e);if(t){let r=af.get(t.overlay);r&&(clearTimeout(r),af.delete(t.overlay)),t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e)}},cleanupAll(){for(let[,e]of this.activeFlashes)this.cleanup(e.element)}},av={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},aw=tg(av),ab=tg(0),ax=[],ay=null,ak=tg({query:"",matches:[],currentMatchIndex:-1}),a_=tg(!1),aN=(e,t=0,r=null)=>e.reduce((e,n,i)=>{var o,a;let l=n.element?(e=>{var t;let r=[],n=e;for(;n;){let e=n.elementType,i="function"==typeof e?e.displayName||e.name:"string"==typeof e?e:"Unknown",o=void 0!==n.index?`[${n.index}]`:"";r.unshift(`${i}${o}`),n=null!=(t=n.return)?t:null}return r.join("::")})(n.fiber):`${r}-${i}`,s=(null==(o=n.fiber)?void 0:o.type)?lI(n.fiber):void 0,c={...n,depth:t,nodeId:l,parentId:r,fiber:n.fiber,renderData:s};return e.push(c),(null==(a=n.children)?void 0:a.length)&&e.push(...aN(n.children,t+1,l)),e},[]),aS=["memo","forwardRef","lazy","suspense"],aE=e=>{let t=e.match(/\[(.*?)\]/);if(!t)return null;let r=[];for(let e of t[1].split(",")){let t=e.trim().toLowerCase();t&&r.push(t)}return r},aC=(e,t)=>{if(0===e.length)return!0;if(!t.length)return!1;for(let r of e){let e=!1;for(let n of t)if(n.type.toLowerCase().includes(r)){e=!0;break}if(!e)return!1}return!0},aT=e=>e>0?e<.1-Number.EPSILON?"< 0.1":e<1e3?Number(e.toFixed(1)).toString():`${(e/1e3).toFixed(1)}k`:"0",aA=({node:e,nodeIndex:t,hasChildren:r,isCollapsed:n,handleTreeNodeClick:i,handleTreeNodeToggle:o,searchValue:a})=>{var l,s,c;let d=e1(null),u=e1(null!=(s=null==(l=e.renderData)?void 0:l.renderCount)?s:0),{highlightedText:p,typeHighlight:h}=e2(()=>{let{query:t,matches:r}=a,n=r.some(t=>t.nodeId===e.nodeId),i=aE(t)||[],o=t?t.replace(/\[.*?\]/,"").trim():"";if(!t||!n)return{highlightedText:ra("span",{className:"truncate",children:e.label}),typeHighlight:!1};let l=!0;if(i.length>0)if(e.fiber){let{wrapperTypes:t}=at(e.fiber);l=aC(i,t)}else l=!1;let s=ra("span",{className:"truncate",children:e.label});if(o)try{if(o.startsWith("/")&&o.endsWith("/")){let t=o.slice(1,-1),r=RegExp(`(${t})`,"i"),n=e.label.split(r);s=ra("span",{className:"tree-node-search-highlight",children:n.map((t,i)=>r.test(t)?ra("span",{className:o6("regex",{start:r.test(t)&&0===i,middle:r.test(t)&&i%2==1,end:r.test(t)&&i===n.length-1,"!ml-0":1===i}),children:t},`${e.nodeId}-${t}`):t)})}else{let t=e.label.toLowerCase(),r=o.toLowerCase(),n=t.indexOf(r);n>=0&&(s=ra("span",{className:"tree-node-search-highlight",children:[e.label.slice(0,n),ra("span",{className:"single",children:e.label.slice(n,n+o.length)}),e.label.slice(n+o.length)]}))}}catch{}return{highlightedText:s,typeHighlight:l&&i.length>0}},[e.label,e.nodeId,e.fiber,a]);eQ(()=>{var t;let r=null==(t=e.renderData)?void 0:t.renderCount,n=d.current;n&&u.current&&r&&u.current!==r&&(n.classList.remove("count-flash"),n.offsetWidth,n.classList.add("count-flash"),u.current=r)},[null==(c=e.renderData)?void 0:c.renderCount]);let m=e2(()=>{if(!e.renderData)return null;let{selfTime:t,totalTime:r,renderCount:n}=e.renderData;return n?ra("span",{className:o6("flex items-center gap-x-0.5 ml-1.5","text-[10px] text-neutral-400"),children:ra("span",{ref:d,title:`Self time: ${aT(t)}ms
Total time: ${aT(r)}ms`,className:"count-badge",children:["×",n]})}):null},[e.renderData]),f=e2(()=>{if(!e.fiber)return null;let{wrapperTypes:t}=at(e.fiber),r=t[0];return ra("span",{className:o6("flex items-center gap-x-1","text-[10px] text-neutral-400 tracking-wide","overflow-hidden"),children:[r&&ra(ey,{children:[ra("span",{title:null==r?void 0:r.title,className:o6("rounded py-[1px] px-1","bg-neutral-700 text-neutral-300","truncate","memo"===r.type&&"bg-[#8e61e3] text-white",h&&"bg-yellow-300 text-black"),children:r.type},r.type),r.compiler&&ra("span",{className:"text-yellow-300 ml-1",children:"✨"})]}),t.length>1&&`\xd7${t.length}`,m]})},[e.fiber,h,m]);return ra("button",{type:"button",title:e.title,"data-index":t,className:o6("flex items-center gap-x-1","pl-1 pr-2","w-full h-7","text-left","rounded","cursor-pointer select-none"),onClick:i,children:[ra("button",{type:"button","data-index":t,onClick:o,className:o6("w-6 h-6 flex items-center justify-center","text-left"),children:r&&ra(i2,{name:"icon-chevron-right",size:12,className:o6("transition-transform",!n&&"rotate-90")})}),p,f]})},az=()=>{let e=e1(null),t=e1(null),r=e1(null),n=e1(null),i=e1(null),o=e1(0),a=e1(!1),l=e1(!1),s=e1(null),[c,d]=eZ([]),[u,p]=eZ(new Set),[h,m]=eZ(void 0),[f,g]=eZ(ak.value),v=e2(()=>{let e=[],t=new Map(c.map(e=>[e.nodeId,e]));for(let r of c){let n=!0,i=r;for(;i.parentId;){let e=t.get(i.parentId);if(!e)break;if(u.has(e.nodeId)){n=!1;break}i=e}n&&e.push(r)}return e},[u,c]),{virtualItems:w,totalSize:b}=(e=>{let{count:t,getScrollElement:r,estimateSize:n,overscan:i=5}=e,[o,a]=eZ(0),[l,s]=eZ(0),c=e1(),d=e1(null),u=e1(null),p=n(),h=e5(e=>{var t,r;d.current&&s(null!=(r=null==(t=null==e?void 0:e[0])?void 0:t.contentRect.height)?r:d.current.getBoundingClientRect().height)},[]),m=e5(()=>{null!==u.current&&cancelAnimationFrame(u.current),u.current=requestAnimationFrame(()=>{h(),u.current=null})},[h]);eQ(()=>{let e=r();if(!e)return;d.current=e;let t=()=>{d.current&&a(d.current.scrollTop)};h(),c.current||(c.current=new ResizeObserver(()=>{m()})),c.current.observe(e),e.addEventListener("scroll",t,{passive:!0});let n=new MutationObserver(m);return n.observe(e,{attributes:!0,childList:!0,subtree:!0}),()=>{e.removeEventListener("scroll",t),c.current&&c.current.disconnect(),n.disconnect(),null!==u.current&&cancelAnimationFrame(u.current)}},[r,h,m]);let f=e2(()=>{let e=Math.floor(o/p);return{start:Math.max(0,e-i),end:Math.min(t,e+Math.ceil(l/p)+i)}},[o,p,l,t,i]);return{virtualItems:e2(()=>{let e=[];for(let t=f.start;t<f.end;t++)e.push({key:t,index:t,start:t*p});return e},[f,p]),totalSize:t*p,scrollTop:o,containerHeight:l}})({count:v.length,getScrollElement:()=>e.current,estimateSize:()=>28,overscan:5}),x=e5(t=>{var r;a.current=!0,null==(r=n.current)||r.blur(),a_.value=!0;let{parentCompositeFiber:i}=a3(t);if(!i)return;c2.inspectState.value={kind:"focused",focusedDomElement:t,fiber:i};let o=v.findIndex(e=>e.element===t);if(-1!==o){m(o);let t=28*o,r=e.current;if(r){let e=r.clientHeight,n=r.scrollTop;(t<n||t+28>n+e)&&r.scrollTo({top:Math.max(0,t-e/2),behavior:"instant"})}}},[v]),y=e5(e=>{let t=Number(e.currentTarget.dataset.index);if(Number.isNaN(t))return;let r=v[t].element;r&&x(r)},[v,x]),k=e5(e=>{p(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},[]),_=e5(e=>{e.stopPropagation();let t=Number(e.target.dataset.index);Number.isNaN(t)||k(v[t].nodeId)},[v,k]),N=e5(t=>{var n,i,o,a,l;null==(n=r.current)||n.classList.remove("!border-red-500");let s=[];if(!t){ak.value={query:t,matches:s,currentMatchIndex:-1};return}if(t.includes("[")&&!t.includes("]")&&t.length>t.indexOf("[")+1){null==(i=r.current)||i.classList.add("!border-red-500");return}let d=aE(t)||[];if(t.includes("[")&&!(e=>{if(0===e.length)return!1;for(let t of e){let e=!1;for(let r of aS)if(r.toLowerCase().includes(t)){e=!0;break}if(!e)return!1}return!0})(d)){null==(o=r.current)||o.classList.add("!border-red-500");return}let u=t.replace(/\[.*?\]/,"").trim(),p=/^\/.*\/$/.test(u),h=e=>!1;if(u.startsWith("/")&&!p&&u.length>1){null==(a=r.current)||a.classList.add("!border-red-500");return}if(p)try{let e=u.slice(1,-1),t=RegExp(e,"i");h=e=>t.test(e)}catch{null==(l=r.current)||l.classList.add("!border-red-500");return}else if(u){let e=u.toLowerCase();h=t=>t.toLowerCase().includes(e)}for(let e of c){let t=!0;if(u&&(t=h(e.label)),t&&d.length>0)if(e.fiber){let{wrapperTypes:r}=at(e.fiber);t=aC(d,r)}else t=!1;t&&s.push(e)}if(ak.value={query:t,matches:s,currentMatchIndex:s.length>0?0:-1},s.length>0){let t=s[0],r=v.findIndex(e=>e.nodeId===t.nodeId);if(-1!==r){let t=e.current;if(t){let e=t.clientHeight;t.scrollTo({top:Math.max(0,28*r-e/2),behavior:"instant"})}}}},[c,v]),S=e5(e=>{let t=e.currentTarget;t&&N(t.value)},[N]),E=e5(t=>{let{matches:r,currentMatchIndex:n}=ak.value;if(0===r.length)return;let i="next"===t?(n+1)%r.length:(n-1+r.length)%r.length;ak.value={...ak.value,currentMatchIndex:i};let o=r[i],a=v.findIndex(e=>e.nodeId===o.nodeId);if(-1!==a){m(a);let t=28*a,r=e.current;if(r){let e=r.clientHeight;r.scrollTo({top:Math.max(0,t-e/2),behavior:"instant"})}}},[v]),C=e5(r=>{if(t.current&&(t.current.style.width=`${r}px`),e.current){e.current.style.width=`${r}px`;let t=((e,t)=>{if(t<=0)return 24;let r=Math.max(0,e-240);return r<24?0:Math.max(0,Math.min(24,Math.min(.3*r,24*t)/t))})(r,o.current);e.current.style.setProperty("--indentation-size",`${t}px`)}},[]),T=e5(e=>{if(!s.current)return;let t=Math.floor(as.value.dimensions.width-120);s.current.classList.remove("cursor-ew-resize","cursor-w-resize","cursor-e-resize"),e<=240?s.current.classList.add("cursor-w-resize"):e>=t?s.current.classList.add("cursor-e-resize"):s.current.classList.add("cursor-ew-resize")},[]),A=e5(t=>{if(t.preventDefault(),t.stopPropagation(),!e.current)return;e.current.style.setProperty("pointer-events","none"),l.current=!0;let r=t.clientX,n=e.current.offsetWidth,i=Math.floor(as.value.dimensions.width-120);T(n);let o=e=>{let t=n+(r-e.clientX);T(t),C(Math.min(i,Math.max(240,t)))},a=()=>{e.current&&(e.current.style.removeProperty("pointer-events"),document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",a),as.value={...as.value,componentsTree:{...as.value.componentsTree,width:e.current.offsetWidth}},o9(i5,as.value),l.current=!1)};document.addEventListener("pointermove",o),document.addEventListener("pointerup",a)},[C,T]);eQ(()=>{if(e.current)return T(e.current.offsetWidth),as.subscribe(()=>{e.current&&T(e.current.offsetWidth)})},[T]);let z=e5(()=>{a.current=!1},[]);return eQ(()=>{let t=!0,r=()=>{let r=i.current;if(!r)return;let n=(e=>{let t=new Map,r=[];for(let{element:r,name:n,fiber:i}of e){if(!r)continue;let e=n,{name:o,wrappers:a}=at(i);o&&(e=a.length>0?`${a.join("(")}(${o})${")".repeat(a.length)}`:o),t.set(r,{label:o||n,title:e,children:[],element:r,fiber:i})}for(let{element:n,depth:i}of e){if(!n)continue;let e=t.get(n);if(e)if(0===i)r.push(e);else{let r=n.parentElement;for(;r;){let n=t.get(r);if(n){n.children=n.children||[],n.children.push(e);break}r=r.parentElement}}}return r})(le());if(n.length>0){let i=aN(n);if(o.current=i.reduce((e,t)=>Math.max(e,t.depth),0),C(as.value.componentsTree.width),d(i),t){t=!1;let n=i.findIndex(e=>e.element===r);if(-1!==n){let t=28*n,r=e.current;r&&setTimeout(()=>{r.scrollTo({top:t,behavior:"instant"})},96)}}}},n=c2.inspectState.subscribe(e=>{"focused"===e.kind&&(a_.value||(N(""),i.current=e.focusedDomElement,r()))}),a=0,s=ab.subscribe(()=>{"focused"===c2.inspectState.value.kind&&(cancelAnimationFrame(a),l.current||(a=requestAnimationFrame(()=>{a_.value=!1,r()})))});return()=>{n(),s(),ak.value={query:"",matches:[],currentMatchIndex:-1}}},[]),eQ(()=>{let e=e=>{if(a.current&&h)switch(e.key){case"ArrowUp":if(e.preventDefault(),e.stopPropagation(),h>0){let e=v[h-1];(null==e?void 0:e.element)&&x(e.element)}return;case"ArrowDown":if(e.preventDefault(),e.stopPropagation(),h<v.length-1){let e=v[h+1];(null==e?void 0:e.element)&&x(e.element)}return;case"ArrowLeft":case"ArrowRight":{e.preventDefault(),e.stopPropagation();let t=v[h];(null==t?void 0:t.nodeId)&&k(t.nodeId);return}}};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[h,v,x,k]),eQ(()=>ak.subscribe(g),[]),eQ(()=>as.subscribe(e=>{var r;null==(r=t.current)||r.style.setProperty("transition","width 0.1s"),C(e.componentsTree.width),setTimeout(()=>{var e;null==(e=t.current)||e.style.removeProperty("transition")},500)}),[]),ra("div",{className:"react-scan-components-tree flex",children:[ra("div",{ref:s,onPointerDown:A,className:"relative resize-v-line",children:ra("span",{children:ra(i2,{name:"icon-ellipsis",size:18})})}),ra("div",{ref:t,className:"flex flex-col h-full",children:[ra("div",{className:"p-2 border-b border-[#1e1e1e]",children:ra("div",{ref:r,title:`Search components by:

\u2022 Name (e.g., "Button") \u2014 Case insensitive, matches any part

\u2022 Regular Expression (e.g., "/^Button/") \u2014 Use forward slashes

\u2022 Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

\u2022 Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

\u2022 Navigation:
   - Enter \u2192 Next match
   - Shift + Enter \u2192 Previous match
   - Cmd/Ctrl + Enter \u2192 Select and focus match
`,className:o6("relative","flex items-center gap-x-1 px-2","rounded","border border-transparent","focus-within:border-[#454545]","bg-[#1e1e1e] text-neutral-300","transition-colors","whitespace-nowrap","overflow-hidden"),children:[ra(i2,{name:"icon-search",size:12,className:" text-neutral-500"}),ra("div",{className:"relative flex-1 h-7 overflow-hidden",children:ra("input",{ref:n,type:"text",value:ak.value.query,onClick:e=>{e.stopPropagation(),e.currentTarget.focus()},onPointerDown:e=>{e.stopPropagation()},onKeyDown:e=>{"Escape"===e.key&&e.currentTarget.blur(),ak.value.matches.length&&("Enter"===e.key&&e.shiftKey?E("prev"):"Enter"===e.key&&(e.metaKey||e.ctrlKey?(e.preventDefault(),e.stopPropagation(),x(ak.value.matches[ak.value.currentMatchIndex].element),e.currentTarget.focus()):E("next")))},onChange:S,className:"absolute inset-y-0 inset-x-1",placeholder:"Component name, /regex/, or [type]"})}),ak.value.query?ra(ey,{children:[ra("span",{className:"flex items-center gap-x-0.5 text-xs text-neutral-500",children:[ak.value.currentMatchIndex+1,"|",ak.value.matches.length]}),!!ak.value.matches.length&&ra(ey,{children:[ra("button",{type:"button",onClick:e=>{e.stopPropagation(),E("prev")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:ra(i2,{name:"icon-chevron-right",className:"-rotate-90",size:12})}),ra("button",{type:"button",onClick:e=>{e.stopPropagation(),E("next")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:ra(i2,{name:"icon-chevron-right",className:"rotate-90",size:12})})]}),ra("button",{type:"button",onClick:e=>{e.stopPropagation(),N("")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:ra(i2,{name:"icon-close",size:12})})]}):!!c.length&&ra("span",{className:"text-xs text-neutral-500",children:c.length})]})}),ra("div",{className:"flex-1 overflow-hidden",children:ra("div",{ref:e,onPointerLeave:z,className:"tree h-full overflow-auto will-change-transform",children:ra("div",{className:"relative w-full",style:{height:b},children:w.map(e=>{var t;let r=v[e.index];if(!r)return null;let n="focused"===c2.inspectState.value.kind&&r.element===c2.inspectState.value.focusedDomElement,i=e.index===h;return ra("div",{className:o6("absolute left-0 w-full overflow-hidden","text-neutral-400 hover:text-neutral-300","bg-transparent hover:bg-[#5f3f9a]/20",(n||i)&&"text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"),style:{top:e.start,height:28},children:ra("div",{className:"w-full h-full",style:{paddingLeft:`calc(${r.depth} * var(--indentation-size))`},children:ra(aA,{node:r,nodeIndex:e.index,hasChildren:!!(null==(t=r.children)?void 0:t.length),isCollapsed:u.has(r.nodeId),handleTreeNodeClick:y,handleTreeNodeToggle:_,searchValue:f})})},r.nodeId)})})})})]})]})},aM=tK(({text:e,children:t,onCopy:r,className:n,iconSize:i=14})=>{let[o,a]=eZ(!1);eQ(()=>{if(o){let e=setTimeout(()=>a(!1),600);return()=>{clearTimeout(e)}}},[o]);let l=e5(t=>{t.preventDefault(),t.stopPropagation(),navigator.clipboard.writeText(e).then(()=>{a(!0),null==r||r(!0,e)},()=>{null==r||r(!1,e)})},[e,r]),s=ra("button",{onClick:l,type:"button",className:o6("z-10","flex items-center justify-center","hover:text-dev-pink-400","transition-colors duration-200 ease-in-out","cursor-pointer",`size-[${i}px]`,n),children:ra(i2,{name:`icon-${o?"check":"copy"}`,size:[i],className:o6(o&&"text-green-500")})});return t?t({ClipboardIcon:s,onClick:l}):s}),aR=({length:e,expanded:t,onToggle:r,isNegative:n})=>ra("div",{className:"flex items-center gap-1",children:[ra("button",{type:"button",onClick:r,className:"flex items-center p-0 opacity-50",children:ra(i2,{name:"icon-chevron-right",size:12,className:o6("transition-[color,transform]",n?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),ra("span",{children:["Array(",e,")"]})]}),aj=({value:e,path:t,isNegative:r})=>{let[n,i]=eZ(!1);if(null===e||"object"!=typeof e||e instanceof Date)return ra("div",{className:"flex items-center gap-1",children:[ra("span",{className:"text-gray-500",children:[t,":"]}),ra("span",{className:"truncate",children:lo(e)})]});let o=Object.entries(e);return ra("div",{className:"flex flex-col",children:[ra("div",{className:"flex items-center gap-1",children:[ra("button",{type:"button",onClick:()=>i(!n),className:"flex items-center p-0 opacity-50",children:ra(i2,{name:"icon-chevron-right",size:12,className:o6("transition-[color,transform]",r?"text-[#f87171]":"text-[#4ade80]",n&&"rotate-90")})}),ra("span",{className:"text-gray-500",children:[t,":"]}),!n&&ra("span",{className:"truncate",children:e instanceof Date?lo(e):`{${Object.keys(e).join(", ")}}`})]}),n&&ra("div",{className:"pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:o.map(([e,t])=>ra(aj,{value:t,path:e,isNegative:r},e))})]})},a$=({value:e,expanded:t,onToggle:r,isNegative:n})=>{let{value:i,error:o}=la(e);return o?ra("span",{className:"text-gray-500 font-italic",children:o}):null===i||"object"!=typeof i||i instanceof Promise?ra("span",{children:lo(i)}):Array.isArray(i)?ra("div",{className:"flex flex-col gap-1 relative",children:[ra(aR,{length:i.length,expanded:t,onToggle:r,isNegative:n}),t&&ra("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:i.map((e,t)=>ra(aj,{value:e,path:t.toString(),isNegative:n},t.toString()))}),ra(aM,{text:lt(i),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:e})=>ra(ey,{children:e})})]}):ra("div",{className:"flex items-start gap-1 relative",children:[ra("button",{type:"button",onClick:r,className:o6("flex items-center","p-0 mt-0.5 mr-1","opacity-50"),children:ra(i2,{name:"icon-chevron-right",size:12,className:o6("transition-[color,transform]",n?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),ra("div",{className:"flex-1",children:t?ra("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:Object.entries(i).map(([e,t])=>ra(aj,{value:t,path:e,isNegative:n},e))}):ra("span",{children:lo(i)})}),ra(aM,{text:lt(i),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:e})=>ra(ey,{children:e})})]})};tg({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var aF=e=>{switch(e.kind){case"initialized":return e.changes.currentValue;case"partially-initialized":return e.value}},aD=(e,t)=>{for(let r of e){let e=t.get(r.name);if(e){t.set(e.name,{count:e.count+1,currentValue:r.value,id:e.name,lastUpdated:Date.now(),name:e.name,previousValue:r.prevValue});continue}t.set(r.name,{count:1,currentValue:r.value,id:r.name,lastUpdated:Date.now(),name:r.name,previousValue:r.prevValue})}},aO=(e,t)=>{let r=new Map;return e.forEach((e,t)=>{r.set(t,e)}),t.forEach((e,t)=>{let n=r.get(t);n?r.set(t,{count:n.count+e.count,currentValue:e.currentValue,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:e.previousValue}):r.set(t,e)}),r},aP=e=>Array.from(e.propsChanges.values()).reduce((e,t)=>e+t.count,0)+Array.from(e.stateChanges.values()).reduce((e,t)=>e+t.count,0)+Array.from(e.contextChanges.values()).filter(e=>"initialized"===e.kind).reduce((e,t)=>e+t.changes.count,0),aL=tK(()=>{let[e,t]=eZ(!0),r=(e=>{let t=e1({queue:[]}),[r,n]=eZ({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),i="focused"===c2.inspectState.value.kind?c2.inspectState.value.fiber:null,o=i?V(i):null;return eQ(()=>{let r=setInterval(()=>{0!==t.current.queue.length&&(n(r=>{var n,i;let o,a,l=(i=t.current.queue,o={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map},i.forEach(e=>{for(let t of e.contextChanges){let e=o.contextChanges.get(t.contextType);if(e){if(iQ(aF(e),t.value))continue;if("partially-initialized"===e.kind){o.contextChanges.set(t.contextType,{kind:"initialized",changes:{count:1,currentValue:t.value,id:t.contextType.toString(),lastUpdated:Date.now(),name:t.name,previousValue:e.value}});continue}o.contextChanges.set(t.contextType,{kind:"initialized",changes:{count:e.changes.count+1,currentValue:t.value,id:t.contextType.toString(),lastUpdated:Date.now(),name:t.name,previousValue:e.changes.currentValue}});continue}o.contextChanges.set(t.contextType,{kind:"partially-initialized",id:t.contextType.toString(),lastUpdated:Date.now(),name:t.name,value:t.value})}aD(e.stateChanges,o.stateChanges),aD(e.propsChanges,o.propsChanges)}),o),s=(a=new Map,r.contextChanges.forEach((e,t)=>{a.set(t,e)}),l.contextChanges.forEach((e,t)=>{let r=a.get(t);if(!r)return void a.set(t,e);if(aF(e)!==aF(r))switch(r.kind){case"initialized":switch(e.kind){case"initialized":return void a.set(t,{kind:"initialized",changes:{...e.changes,count:e.changes.count+r.changes.count+1,currentValue:e.changes.currentValue,previousValue:e.changes.previousValue}});case"partially-initialized":return void a.set(t,{kind:"initialized",changes:{count:r.changes.count+1,currentValue:e.value,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:r.changes.currentValue}})}case"partially-initialized":switch(e.kind){case"initialized":return void a.set(t,{kind:"initialized",changes:{count:e.changes.count+1,currentValue:e.changes.currentValue,id:e.changes.id,lastUpdated:e.changes.lastUpdated,name:e.changes.name,previousValue:r.value}});case"partially-initialized":return void a.set(t,{kind:"initialized",changes:{count:1,currentValue:e.value,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:r.value}})}}}),{contextChanges:a,propsChanges:aO(r.propsChanges,l.propsChanges),stateChanges:aO(r.stateChanges,l.stateChanges)}),c=aP(r),d=aP(s);return null==(n=null==e?void 0:e.onChangeUpdate)||n.call(e,d-c),s}),t.current.queue=[])},50);return()=>{clearInterval(r)}},[i]),eQ(()=>{if(!o)return;let e=e=>{var r;null==(r=t.current)||r.queue.push(e)},r=c2.changesListeners.get(o);return r||(r=[],c2.changesListeners.set(o,r)),r.push(e),()=>{var r,i;n({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[],c2.changesListeners.set(o,null!=(i=null==(r=c2.changesListeners.get(o))?void 0:r.filter(t=>t!==e))?i:[])}},[o]),eQ(()=>()=>{n({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[]},[o]),r})(),[n,i]=eZ(!1),o=aP(r)>0;eQ(()=>{if(!n&&o){let e=setTimeout(()=>{i(!0),requestAnimationFrame(()=>{t(!0)})},0);return()=>clearTimeout(e)}},[n,o]);let a=new Map(Array.from(r.contextChanges.entries()).filter(([,e])=>"initialized"===e.kind).map(([e,t])=>[e,"partially-initialized"===t.kind?null:t.changes])),l="focused"===c2.inspectState.value.kind?c2.inspectState.value.fiber:null;if(l)return ra(ey,{children:[ra(aH,{}),ra("div",{className:"overflow-hidden h-full flex flex-col gap-y-2",children:[ra("div",{className:"flex flex-col gap-2 px-3 pt-2",children:[ra("span",{className:"text-sm font-medium text-[#888]",children:["Why did"," ",ra("span",{className:"text-[#A855F7]",children:I(l)})," ","render?"]}),!o&&ra("div",{className:"text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4",children:[ra("div",{children:"No changes detected since selecting"}),ra("div",{children:"The props, state, and context changes within your component will be reported here"})]})]}),ra("div",{className:o6("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"),children:[ra(aU,{changes:r.propsChanges,title:"Changed Props",isExpanded:e}),ra(aU,{renderName:e=>{var t;return aI(e,null!=(t=I(L(l)))?t:"Unknown Component")},changes:r.stateChanges,title:"Changed State",isExpanded:e}),ra(aU,{changes:a,title:"Changed Context",isExpanded:e})]})]})]})}),aI=(e,t)=>{if(Number.isNaN(Number(e)))return e;let r=Number.parseInt(e);return ra("span",{className:"truncate",children:[ra("span",{className:"text-white",children:[r,(e=>{let t=e%100;if(t>=11&&t<=13)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(r)," hook"," "]}),ra("span",{style:{color:"#666"},children:["called in ",ra("i",{className:"text-[#A855F7] truncate",children:t})]})]})},aH=tK(()=>{let e=e1(null),t=e1(null),r=e1(null),n=e1({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return eQ(()=>{let i=o8(()=>{var n,i,o;let a=[];for(let l of((null==(n=e.current)?void 0:n.dataset.flash)==="true"&&a.push(e.current),(null==(i=t.current)?void 0:i.dataset.flash)==="true"&&a.push(t.current),(null==(o=r.current)?void 0:o.dataset.flash)==="true"&&a.push(r.current),a))l.classList.remove("count-flash-white"),l.offsetWidth,l.classList.add("count-flash-white")},400);return aw.subscribe(o=>{var a,l,s,c,d,u,p,h,m;if(!e.current||!t.current||!r.current)return;let{currentIndex:f,updates:g}=o,v=g[f];v&&0!==f&&(i(),n.current={isPropsChanged:(null!=(s=null==(l=null==(a=v.props)?void 0:a.changes)?void 0:l.size)?s:0)>0,isStateChanged:(null!=(u=null==(d=null==(c=v.state)?void 0:c.changes)?void 0:d.size)?u:0)>0,isContextChanged:(null!=(m=null==(h=null==(p=v.context)?void 0:p.changes)?void 0:h.size)?m:0)>0},"true"!==e.current.dataset.flash&&(e.current.dataset.flash=n.current.isPropsChanged.toString()),"true"!==t.current.dataset.flash&&(t.current.dataset.flash=n.current.isStateChanged.toString()),"true"!==r.current.dataset.flash&&(r.current.dataset.flash=n.current.isContextChanged.toString()))})},[]),ra("button",{type:"button",className:o6("react-section-header","overflow-hidden","max-h-0","transition-[max-height]"),children:ra("div",{className:o6("flex-1 react-scan-expandable"),children:ra("div",{className:"overflow-hidden",children:ra("div",{className:"flex items-center whitespace-nowrap",children:[ra("div",{className:"flex items-center gap-x-2",children:"What changed?"}),ra("div",{className:o6("ml-auto","change-scope","transition-opacity duration-300 delay-150"),children:[ra("div",{ref:e,children:"props"}),ra("div",{ref:t,children:"state"}),ra("div",{ref:r,children:"context"})]})]})})})})}),aW=e=>e,aU=tK(({title:e,changes:t,renderName:r=aW})=>{let[n,i]=eZ(new Set),[o,a]=eZ(new Set),l=Array.from(t.entries());return 0===t.size?null:ra("div",{children:[ra("div",{className:"text-xs text-[#888] mb-1.5",children:e}),ra("div",{className:"flex flex-col gap-2",children:l.map(([t,l])=>{let s=o.has(String(t)),{value:c,error:d}=la(l.previousValue),{value:u,error:p}=la(l.currentValue),h=lr(c,u);return ra("div",{children:[ra("button",{onClick:()=>{a(e=>{let r=new Set(e);return r.has(String(t))?r.delete(String(t)):r.add(String(t)),r})},className:"flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs",children:ra("div",{className:"flex items-center gap-1.5 flex-1",children:[ra(i2,{name:"icon-chevron-right",size:12,className:o6("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",{"rotate-90":s})}),ra("div",{className:"whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5",children:[r(l.name),ra(aK,{count:l.count,isFunction:"function"==typeof l.currentValue,showWarning:0===h.changes.length,forceFlash:!0})]})]})}),ra("div",{className:o6("react-scan-expandable",{"react-scan-expanded":s}),children:ra("div",{className:"pl-3 text-xs font-mono border-l-1 border-[#333]",children:ra("div",{className:"flex flex-col gap-0.5",children:d||p?ra(aB,{currError:p,prevError:d}):h.changes.length>0?ra(aV,{change:l,diff:h,expandedFns:n,renderName:r,setExpandedFns:i,title:e}):ra(aq,{currValue:u,entryKey:t,expandedFns:n,prevValue:c,setExpandedFns:i})})})})]},t)})})]})}),aB=({prevError:e,currError:t})=>ra(ey,{children:[e&&ra("div",{className:"text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic",children:e}),t&&ra("div",{className:"text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5",children:t})]}),aV=({diff:e,title:t,renderName:r,change:n,expandedFns:i,setExpandedFns:o})=>e.changes.map((a,l)=>{let s,{value:c,error:d}=la(a.prevValue),{value:u,error:p}=la(a.currentValue),h="function"==typeof c||"function"==typeof u;return"Props"===t&&(s=a.path.length>0?`${r(String(n.name))}.${ln(a.path)}`:void 0),"State"===t&&a.path.length>0&&(s=`state.${ln(a.path)}`),s||(s=ln(a.path)),ra("div",{className:o6("flex flex-col gap-y-1",l<e.changes.length-1&&"mb-4"),children:[s&&ra("div",{className:"text-[#666] text-[10px]",children:s}),ra("button",{type:"button",className:o6("group","flex items-start","py-[3px] px-1.5","text-left text-[#f87171] bg-[#2a1515]","rounded","overflow-hidden break-all",h&&"cursor-pointer"),onClick:h?()=>{let e=`${ln(a.path)}-prev`;o(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})}:void 0,children:[ra("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),ra("span",{className:"flex-1 whitespace-nowrap font-mono",children:d?ra("span",{className:"italic text-[#f87171]",children:d}):h?ra("div",{className:"flex gap-1 items-start flex-col",children:[ra("div",{className:"flex gap-1 items-start w-full",children:[ra("span",{className:"flex-1 max-h-40",children:li(c,i.has(`${ln(a.path)}-prev`))}),"function"==typeof c&&ra(aM,{text:c.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:e})=>ra(ey,{children:e})})]}),(null==c?void 0:c.toString())===(null==u?void 0:u.toString())&&ra("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):ra(a$,{value:c,expanded:i.has(`${ln(a.path)}-prev`),onToggle:()=>{let e=`${ln(a.path)}-prev`;o(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},isNegative:!0})})]}),ra("button",{type:"button",className:o6("group","flex items-start","py-[3px] px-1.5","text-left text-[#4ade80] bg-[#1a2a1a]","rounded","overflow-hidden break-all",h&&"cursor-pointer"),onClick:h?()=>{let e=`${ln(a.path)}-current`;o(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})}:void 0,children:[ra("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),ra("span",{className:"flex-1 whitespace-pre-wrap font-mono",children:p?ra("span",{className:"italic text-[#4ade80]",children:p}):h?ra("div",{className:"flex gap-1 items-start flex-col",children:[ra("div",{className:"flex gap-1 items-start w-full",children:[ra("span",{className:"flex-1",children:li(u,i.has(`${ln(a.path)}-current`))}),"function"==typeof u&&ra(aM,{text:u.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:e})=>ra(ey,{children:e})})]}),(null==c?void 0:c.toString())===(null==u?void 0:u.toString())&&ra("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):ra(a$,{value:u,expanded:i.has(`${ln(a.path)}-current`),onToggle:()=>{let e=`${ln(a.path)}-current`;o(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},isNegative:!1})})]})]},`${s}-${n.name}-${l}`)}),aq=({prevValue:e,currValue:t,entryKey:r,expandedFns:n,setExpandedFns:i})=>ra(ey,{children:[ra("div",{className:"group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded",children:[ra("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),ra("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:ra(a$,{value:e,expanded:n.has(`${String(r)}-prev`),onToggle:()=>{let e=`${String(r)}-prev`;i(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},isNegative:!0})})]}),ra("div",{className:"group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5",children:[ra("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),ra("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:ra(a$,{value:t,expanded:n.has(`${String(r)}-current`),onToggle:()=>{let e=`${String(r)}-current`;i(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},isNegative:!1})})]}),"object"==typeof t&&null!==t&&ra("div",{className:"text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1",children:[ra(i2,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),ra("span",{children:"Reference changed but objects are structurally the same"})]})]}),aK=({count:e,forceFlash:t,isFunction:r,showWarning:n})=>{let i=e1(!0),o=e1(null),a=e1(e);return eQ(()=>{let t=o.current;t&&a.current!==e&&(t.classList.remove("count-flash"),t.offsetWidth,t.classList.add("count-flash"),a.current=e)},[e]),eQ(()=>{if(i.current){i.current=!1;return}if(t){let e=setTimeout(()=>{var t;null==(t=o.current)||t.classList.add("count-flash-white"),e=setTimeout(()=>{var e;null==(e=o.current)||e.classList.remove("count-flash-white")},300)},500);return()=>{clearTimeout(e)}}},[t]),ra("div",{ref:o,className:"count-badge",children:[n&&ra(i2,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),r&&ra(i2,{name:"icon-function",className:"text-[#A855F7] mb-px",size:14}),"x",e]})},aG={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{aG.lastRendered.clear(),aG.expandedPaths.clear(),ag.cleanupAll(),lf(),ay&&(clearTimeout(ay),ay=null),ax=[],aw.value=av}},aX=class extends ek{constructor(){super(...arguments),iX(this,"state",{hasError:!1,error:null}),iX(this,"handleReset",()=>{this.setState({hasError:!1,error:null}),aG.cleanup()})}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?ra("div",{className:"p-4 bg-red-950/50 h-screen backdrop-blur-sm",children:[ra("div",{className:"flex items-center gap-2 mb-3 text-red-400 font-medium",children:[ra(i2,{name:"icon-flame",className:"text-red-500",size:16}),"Something went wrong in the inspector"]}),ra("div",{className:"p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",children:(null==(e=this.state.error)?void 0:e.message)||JSON.stringify(this.state.error)}),ra("button",{type:"button",onClick:this.handleReset,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",children:"Reset Inspector"})]}):this.props.children}},aY=ty(()=>o6("react-scan-inspector","flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",!ao.value&&"opacity-100 delay-300 pointer-events-auto")),aJ=am(()=>{let e=e1(null),t=t=>{if(!t)return;e.current=t;let{data:r,shouldUpdate:n}=ly(t);if(n){var i={timestamp:Date.now(),fiberInfo:ls(t),props:r.fiberProps,state:r.fiberState,context:r.fiberContext,stateNames:lm(t)},o=t;if(ax.push({update:i,fiber:o}),!ay){let e=()=>{(()=>{let e;if(0===ax.length)return;let t=[...ax],{updates:r,totalUpdates:n,currentIndex:i,isViewingHistory:o}=aw.value,a=[...r],l=n;for(let{update:e}of t)a.length>=1e3&&a.shift(),a.push(e),l++;let s=Math.max(0,l-1e3);e=o?i===n-1?a.length-1:0===i?0:0===s?i:i-1:a.length-1;let c=t[t.length-1];aw.value={...aw.value,latestFiber:c.fiber,updates:a,totalUpdates:l,windowOffset:s,currentIndex:e,isViewingHistory:o},ax=ax.slice(t.length)})(),ay=null,ax.length>0&&(ay=setTimeout(e,96))};ay=setTimeout(e,96)}}};return tW(()=>{let r=c2.inspectState.value;to(()=>{var n;if("focused"!==r.kind||!r.focusedDomElement){e.current=null,aG.cleanup();return}"focused"===r.kind&&(ao.value=!1);let{parentCompositeFiber:i}=a6(r.focusedDomElement,r.fiber);if(!i){c2.inspectState.value={kind:"inspect-off"},ad.value={view:"none"};return}(null==(n=e.current)?void 0:n.type)!==i.type&&(e.current=i,aG.cleanup(),t(i))})}),tW(()=>{ab.value,to(()=>{let r=c2.inspectState.value;if("focused"!==r.kind||!r.focusedDomElement){e.current=null,aG.cleanup();return}let{parentCompositeFiber:n}=a6(r.focusedDomElement,r.fiber);if(!n){c2.inspectState.value={kind:"inspect-off"},ad.value={view:"none"};return}t(n),r.focusedDomElement.isConnected||(e.current=null,aG.cleanup(),c2.inspectState.value={kind:"inspecting",hoveredDomElement:null})})}),eQ(()=>()=>{aG.cleanup()},[]),ra(aX,{children:ra("div",{className:aY,children:ra("div",{className:"w-full h-full",children:ra(aL,{})})})})}),aZ=am(()=>"focused"!==c2.inspectState.value.kind?null:ra(aX,{children:[ra(aJ,{}),ra(az,{})]})),aQ=e=>{var t,r,n,i;if("__REACT_DEVTOOLS_GLOBAL_HOOK__"in window){let r=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!(null==r?void 0:r.renderers))return null;for(let[,n]of Array.from(r.renderers))try{let r=null==(t=n.findFiberByHostInstance)?void 0:t.call(n,e);if(r)return r}catch{}}if("_reactRootContainer"in e){let t=e._reactRootContainer;return null!=(i=null==(n=null==(r=null==t?void 0:t._internalRoot)?void 0:r.current)?void 0:n.child)?i:null}for(let t in e)if(t.startsWith("__reactInternalInstance$")||t.startsWith("__reactFiber"))return e[t];return null},a0=e=>{let t=e;for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.child)break;t=t.child}for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.return)break;t=t.return}return null},a1=e=>{if(!e)return null;try{let t=aQ(e);if(!t)return null;let r=a2(t);return r?r[0]:null}catch{return null}},a2=e=>{let t=e,r=null;for(;t;){if(z(t))return[t,r];A(t)&&!r&&(r=t),t=t.return}return null},a5=(e,t)=>!!$(t,t=>t===e),a4=async e=>{let t=a1(e);if(!t)return null;let r=a0(t);return r?await new Promise(e=>{let t=new IntersectionObserver(r=>{var n,i;t.disconnect(),e(null!=(i=null==(n=r[0])?void 0:n.boundingClientRect)?i:null)});t.observe(r)}):null},a3=e=>{let t=a1(e);if(!t||!a0(t))return{};let r=a2(t);if(!r)return{};let[n]=r;return{parentCompositeFiber:n}},a6=(e,t)=>{var r,n,i,o;if(!e.isConnected)return{};let a=null!=t?t:a1(e);if(!a)return{};let l=a,s=null,c=null;for(;l;){if(!l.stateNode){l=l.return;continue}if(null==(r=c5.instrumentation)?void 0:r.fiberRoots.has(l.stateNode)){s=l,c=l.stateNode.current;break}l=l.return}if(!s||!c||!(a=a5(a,c)?a:null!=(n=a.alternate)?n:a)||!a0(a))return{};let d=null==(i=a2(a))?void 0:i[0];return d?{parentCompositeFiber:a5(d,c)?d:null!=(o=d.alternate)?o:d}:{}},a8=e=>{var t,r,n;let i=null!=(t=e.memoizedProps)?t:{},o=null!=(n=null==(r=e.alternate)?void 0:r.memoizedProps)?n:{},a=[];for(let e in i){if("children"===e)continue;let t=i[e],r=o[e];iQ(t,r)||a.push({name:e,value:t,prevValue:r,type:1})}return a},a7=new Set(["HTML","HEAD","META","TITLE","BASE","SCRIPT","SCRIPT","STYLE","LINK","NOSCRIPT","SOURCE","TRACK","EMBED","OBJECT","PARAM","TEMPLATE","PORTAL","SLOT","AREA","XML","DOCTYPE","COMMENT"]),a9=(e,t=!0)=>{if(e.stateNode&&"nodeType"in e.stateNode){let r=e.stateNode;return t&&r.tagName&&a7.has(r.tagName.toLowerCase())?null:r}let r=e.child;for(;r;){let e=a9(r,t);if(e)return e;r=r.sibling}return null},le=(e=document.body)=>{let t=[],r=(e,n=0)=>{var i;let o=(e=>{if(!e)return null;let{parentCompositeFiber:t}=a3(e);return t&&a9(t)===e?e:null})(e);if(o){let{parentCompositeFiber:e}=a3(o);if(!e)return;t.push({element:o,depth:n,name:null!=(i=I(e.type))?i:"Unknown",fiber:e})}for(let t of Array.from(e.children))r(t,o?n+1:n)};return r(e),t},lt=e=>{try{if(null===e)return"null";if(void 0===e)return"undefined";if(ll(e))return"Promise";if("function"==typeof e){let t=e.toString();try{return t.replace(/\s+/g," ").replace(/{\s+/g,"{\n  ").replace(/;\s+/g,";\n  ").replace(/}\s*$/g,"\n}").replace(/\(\s+/g,"(").replace(/\s+\)/g,")").replace(/,\s+/g,", ")}catch{return t}}switch(!0){case e instanceof Date:return e.toISOString();case e instanceof RegExp:return e.toString();case e instanceof Error:return`${e.name}: ${e.message}`;case e instanceof Map:return JSON.stringify(Array.from(e.entries()),null,2);case e instanceof Set:return JSON.stringify(Array.from(e),null,2);case e instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(e.buffer)),null,2);case e instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(e)),null,2);case ArrayBuffer.isView(e)&&"length"in e:return JSON.stringify(Array.from(e),null,2);case Array.isArray(e):case"object"==typeof e:return JSON.stringify(e,null,2);default:return String(e)}}catch{return String(e)}},lr=(e,t,r=[],n=new WeakSet)=>{if(e===t)return{type:"primitive",changes:[],hasDeepChanges:!1};if("function"==typeof e&&"function"==typeof t){let n=((e,t)=>{try{if("function"!=typeof e||"function"!=typeof t)return!1;return e.toString()===t.toString()}catch{return!1}})(e,t);return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t,sameFunction:n}],hasDeepChanges:!n}}if(null===e||null===t||void 0===e||void 0===t||"object"!=typeof e||"object"!=typeof t)return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t}],hasDeepChanges:!0};if(n.has(e)||n.has(t))return{type:"object",changes:[{path:r,prevValue:"[Circular]",currentValue:"[Circular]"}],hasDeepChanges:!1};n.add(e),n.add(t);let i=new Set([...Object.keys(e),...Object.keys(t)]),o=[],a=!1;for(let l of i){let i=e[l],s=t[l];if(i!==s)if("object"==typeof i&&"object"==typeof s&&null!==i&&null!==s){let e=lr(i,s,[...r,l],n);o.push(...e.changes),e.hasDeepChanges&&(a=!0)}else o.push({path:[...r,l],prevValue:i,currentValue:s}),a=!0}return{type:"object",changes:o,hasDeepChanges:a}},ln=e=>0===e.length?"":e.reduce((e,t,r)=>/^\d+$/.test(t)?`${e}[${t}]`:0===r?t:`${e}.${t}`,""),li=(e,t=!1)=>{try{let r=e.toString(),n=r.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!n)return"ƒ";let i=(n[1]||n[2]||"").replace(/\s+/g,"");if(!t)return`\u0192 (${i}) => ...`;return function(e){let t=e.replace(/\s+/g," ").trim(),r=[],n="";for(let e=0;e<t.length;e++){let i=t[e];if("="===i&&">"===t[e+1]){n.trim()&&r.push(n.trim()),r.push("=>"),n="",e++;continue}/[(){}[\];,<>:\?!]/.test(i)?(n.trim()&&r.push(n.trim()),r.push(i),n=""):/\s/.test(i)?(n.trim()&&r.push(n.trim()),n=""):n+=i}n.trim()&&r.push(n.trim());let i=[];for(let e=0;e<r.length;e++){let t=r[e],n=r[e+1];"("===t&&")"===n||"["===t&&"]"===n||"{"===t&&"}"===n||"<"===t&&">"===n?(i.push(t+n),e++):i.push(t)}let o=new Set,a=new Set;function l(e,t,r){let n=0;for(let o=r;o<i.length;o++){let r=i[o];if(r===e)n++;else if(r===t&&0==--n)return o}return -1}for(let e=0;e<i.length;e++)if("("===i[e]){let t=l("(",")",e);if(-1!==t&&"=>"===i[t+1])for(let r=e;r<=t;r++)o.add(r)}for(let e=1;e<i.length;e++){let t=i[e-1],r=i[e];if(/^[a-zA-Z0-9_$]+$/.test(t)&&"<"===r){let t=l("<",">",e);if(-1!==t)for(let r=e;r<=t;r++)a.add(r)}}let s=0,c=[],d="";function u(){d.trim()&&c.push(d.replace(/\s+$/,"")),d=""}function p(){u(),d="  ".repeat(s)}let h=[];function m(){return h.length?h[h.length-1]:null}function f(e,t=!1){d.trim()?t||/^[),;:\].}>]$/.test(e)?d+=e:d+=` ${e}`:d+=e}for(let e=0;e<i.length;e++){let t=i[e],r=i[e+1]||"";if(["(","{","[","<"].includes(t))f(t),h.push(t),"{"===t?(s++,p()):("("===t||"["===t||"<"===t)&&(o.has(e)&&"("===t||a.has(e)&&"<"===t||r!==({"(":")","[":"]","<":">"})[t]&&"()"!==r&&"[]"!==r&&"<>"!==r&&(s++,p()));else if([")","}","]",">"].includes(t)){let r=m();")"===t&&"("===r||"]"===t&&"["===r||">"===t&&"<"===r?o.has(e)&&")"===t||a.has(e)&&">"===t||(s=Math.max(s-1,0),p()):"}"===t&&"{"===r&&(s=Math.max(s-1,0),p()),h.pop(),f(t),"}"===t&&p()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(t))f(t);else if("=>"===t)f(t);else if(";"===t)f(t,!0),p();else if(","===t){f(t,!0);let r=m();!(o.has(e)&&"("===r)&&!(a.has(e)&&"<"===r)&&r&&["{","[","(","<"].includes(r)&&p()}else f(t)}return u(),c.join("\n").replace(/\n\s*\n+/g,"\n").trim()}(r)}catch{return"ƒ"}},lo=e=>{if(null===e)return"null";if(void 0===e)return"undefined";if("string"==typeof e)return`"${e.length>150?`${e.slice(0,20)}...`:e}"`;if("number"==typeof e||"boolean"==typeof e)return String(e);if("function"==typeof e)return li(e);if(Array.isArray(e))return`Array(${e.length})`;if(e instanceof Map)return`Map(${e.size})`;if(e instanceof Set)return`Set(${e.size})`;if(e instanceof Date)return e.toISOString();if(e instanceof RegExp)return e.toString();if(e instanceof Error)return`${e.name}: ${e.message}`;if("object"==typeof e){let t=Object.keys(e);return`{${t.length>2?`${t.slice(0,2).join(", ")}, ...`:t.join(", ")}}`}return String(e)},la=e=>{var t;if(null==e||"function"==typeof e||"object"!=typeof e)return{value:e};if(ll(e))return{value:"Promise"};try{let r=Object.getPrototypeOf(e);if(r===Promise.prototype||(null==(t=null==r?void 0:r.constructor)?void 0:t.name)==="Promise")return{value:"Promise"};return{value:e}}catch{return{value:null,error:"Error accessing value"}}},ll=e=>!!e&&(e instanceof Promise||"object"==typeof e&&"then"in e),ls=e=>{var t,r;let n=O(e);return{displayName:I(e)||"Unknown",type:e.type,key:e.key,id:e.index,selfTime:null!=(t=null==n?void 0:n.selfTime)?t:null,totalTime:null!=(r=null==n?void 0:n.totalTime)?r:null}},lc=new Map,ld=new Map,lu=new Map,lp=null,lh=/\[(?<name>\w+),\s*set\w+\]/g,lm=e=>{var t,r;let n=(null==(r=null==(t=e.type)?void 0:t.toString)?void 0:r.call(t))||"";return n?Array.from(n.matchAll(lh),e=>{var t,r;return null!=(r=null==(t=e.groups)?void 0:t.name)?r:""}):[]},lf=()=>{lc.clear(),ld.clear(),lu.clear(),lp=null},lg=(e,t,r,n)=>{let i=e.get(t),o=e===lc||e===lu,a=!iQ(r,n);if(!i)return e.set(t,{count:a&&o?1:0,currentValue:r,previousValue:n,lastUpdated:Date.now()}),{hasChanged:a,count:a&&o?1:+!o};if(!iQ(i.currentValue,r)){let n=i.count+1;return e.set(t,{count:n,currentValue:r,previousValue:i.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:n}}return{hasChanged:!1,count:i.count}},lv=e=>{if(!e)return{};if(0===e.tag||11===e.tag||15===e.tag||14===e.tag){let t=e.memoizedState,r={},n=0;for(;t;)t.queue&&void 0!==t.memoizedState&&(r[n]=t.memoizedState),t=t.next,n++;return r}return 1===e.tag&&e.memoizedState||{}},lw=e=>{var t;let r=e.memoizedProps||{},n=(null==(t=e.alternate)?void 0:t.memoizedProps)||{},i={},o={};for(let e of Object.keys(r))e in r&&(i[e]=r[e],o[e]=n[e]);return{current:i,prev:o,changes:a8(e).map(e=>({name:e.name,value:e.value,prevValue:e.prevValue}))}},lb=e=>{let t=lv(e),r=e.alternate?lv(e.alternate):{},n=[];for(let[i,o]of Object.entries(t)){let t=1===e.tag?i:Number(i);e.alternate&&!iQ(r[i],o)&&n.push({name:t,value:o,prevValue:r[i]})}return{current:t,prev:r,changes:n}},lx=e=>{let t=l_(e),r=e.alternate?l_(e.alternate):new Map,n={},i={},o=[],a=new Set;for(let[e,l]of t){let t=l.displayName;if(a.has(e))continue;a.add(e),n[t]=l.value;let s=r.get(e);s&&(i[t]=s.value,iQ(s.value,l.value)||o.push({name:t,value:l.value,prevValue:s.value,contextType:e}))}return{current:n,prev:i,changes:o}},ly=e=>{let t,r=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{data:{fiberProps:r(),fiberState:r(),fiberContext:r()},shouldUpdate:!1};let n=!1,i=(t=e.type!==lp,lp=e.type,t),o=r();if(e.memoizedProps){let{current:t,changes:r}=lw(e);for(let[e,r]of Object.entries(t))o.current.push({name:e,value:ll(r)?{type:"promise",displayValue:"Promise"}:r});for(let e of r){let{hasChanged:t,count:r}=lg(lc,e.name,e.value,e.prevValue);t&&(n=!0,o.changes.add(e.name),o.changesCounts.set(e.name,r))}}let a=r(),{current:l,changes:s}=lb(e);for(let[t,r]of Object.entries(l)){let n=1===e.tag?t:Number(t);a.current.push({name:n,value:r})}for(let e of s){let{hasChanged:t,count:r}=lg(ld,e.name,e.value,e.prevValue);t&&(n=!0,a.changes.add(e.name),a.changesCounts.set(e.name,r))}let c=r(),{current:d,changes:u}=lx(e);for(let[e,t]of Object.entries(d))c.current.push({name:e,value:t});if(!i)for(let e of u){let{hasChanged:t,count:r}=lg(lu,e.name,e.value,e.prevValue);t&&(n=!0,c.changes.add(e.name),c.changesCounts.set(e.name,r))}return n||i||(o.changes.clear(),a.changes.clear(),c.changes.clear()),{data:{fiberProps:o,fiberState:a,fiberContext:c},shouldUpdate:n||i}},lk=new WeakMap,l_=e=>{var t;if(!e)return new Map;let r=lk.get(e);if(r)return r;let n=new Map,i=e;for(;i;){let e=i.dependencies;if(null==e?void 0:e.firstContext){let r=e.firstContext;for(;r;){let e=r.memoizedValue,i=null==(t=r.context)?void 0:t.displayName;if(n.has(e)||n.set(r.context,{value:e,displayName:null!=i?i:"UnnamedContext",contextType:null}),r===r.next)break;r=r.next}}i=i.return}return lk.set(e,n),n},lN=e=>{let t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{fiberProps:t(),fiberState:t(),fiberContext:t()};let r=t();if(e.memoizedProps){let{current:t,changes:n}=lw(e);for(let[e,n]of Object.entries(t))r.current.push({name:e,value:ll(n)?{type:"promise",displayValue:"Promise"}:n});for(let e of n)r.changes.add(e.name),r.changesCounts.set(e.name,1)}let n=t();if(e.memoizedState){let{current:t,changes:r}=lb(e);for(let[e,r]of Object.entries(t))n.current.push({name:e,value:ll(r)?{type:"promise",displayValue:"Promise"}:r});for(let e of r)n.changes.add(e.name),n.changesCounts.set(e.name,1)}let i=t(),{current:o,changes:a}=lx(e);for(let[e,t]of Object.entries(o))i.current.push({name:e,value:ll(t)?{type:"promise",displayValue:"Promise"}:t});for(let e of a)i.changes.add(e.name),i.changesCounts.set(e.name,1);return{fiberProps:r,fiberState:n,fiberContext:i}},lS={mount:1,update:2,unmount:4},lE=0,lC=performance.now(),lT=0,lA=!1,lz=()=>{lT++;let e=performance.now();e-lC>=1e3&&(lE=lT,lT=0,lC=e),requestAnimationFrame(lz)},lM=()=>(lA||(lA=!0,lz(),lE=60),lE),lR=0,lj=new WeakMap;function l$(e,t){var r,n;let i;if(!e||!t)return;let o=e.memoizedValue,a={type:4,name:null!=(r=e.context.displayName)?r:"Context.Provider",value:o,contextType:(n=e.context,(i=lj.get(n))||(lR++,lj.set(n,lR),lR))};this.push(a)}var lF=new Map,lD=!1,lO=()=>Array.from(lF.values()),lP=new WeakMap;function lL(e){return String(V(e))}function lI(e){let t=lL(e),r=lP.get(L(e));if(r)return r.get(t)}var lH=(e,t)=>{let r=t-e;return .5>Math.abs(r)?t:e+.2*r},lW="115,97,230";function lU(e,t){return t[0]-e[0]}function lB([e,t]){let r=`${t.slice(0,4).join(", ")} \xd7${e}`;return r.length>40&&(r=`${r.slice(0,40)}\u2026`),r}var lV=e=>{let t=new Map;for(let{name:r,count:n}of e)t.set(r,(t.get(r)||0)+n);let r=new Map;for(let[e,n]of t){let t=r.get(n);t?t.push(e):r.set(n,[e])}let n=[...r.entries()].sort(lU),i=lB(n[0]);for(let e=1,t=n.length;e<t;e++)i+=", "+lB(n[e]);return i.length>40?`${i.slice(0,40)}\u2026`:i},lq=e=>{let t=0;for(let r of e)t+=r.width*r.height;return t},lK=(e,t)=>{for(let{id:r,name:n,count:i,x:o,y:a,width:l,height:s,didCommit:c}of t){let t={id:r,name:n,count:i,x:o,y:a,width:l,height:s,frame:0,targetX:o,targetY:a,targetWidth:l,targetHeight:s,didCommit:c},d=String(t.id),u=e.get(d);u?(u.count++,u.frame=0,u.targetX=o,u.targetY=a,u.targetWidth=l,u.targetHeight=s,u.didCommit=c):e.set(d,t)}},lG=(e,t,r)=>{for(let n of e.values()){let e=n.x-t,i=n.y-r;n.targetX=e,n.targetY=i}},lX=null,lY=null,lJ=null,lZ=1,lQ=null,l0=new Map,l1=new Map,l2=new Set,l5=e=>{let t,r,n,i,o=e[0];if(1===e.length)return o;for(let o=0,a=e.length;o<a;o++){let a=e[o];t=null==t?a.x:Math.min(t,a.x),r=null==r?a.y:Math.min(r,a.y),n=null==n?a.x+a.width:Math.max(n,a.x+a.width),i=null==i?a.y+a.height:Math.max(i,a.y+a.height)}return null==t||null==r||null==n||null==i?e[0]:new DOMRect(t,r,n-t,i-r)};function l4(e,t){let r=[];for(let t of e){let e=t.target;this.seenElements.has(e)||(this.seenElements.add(e),r.push(t))}r.length>0&&this.resolveNext&&(this.resolveNext(r),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(t.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var l3=async function*(e){let t={uniqueElements:new Set(e),seenElements:new Set,resolveNext:null,done:!1},r=new IntersectionObserver(l4.bind(t));for(let e of t.uniqueElements)r.observe(e);for(;!t.done;){let e=await new Promise(e=>{t.resolveNext=e});e.length>0&&(yield e)}},l6="u">typeof SharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,l8=async()=>{let e=[];for(let t of l2){let r=l1.get(t);if(r)for(let t=0;t<r.elements.length;t++)r.elements[t]instanceof Element&&e.push(r.elements[t])}let t=new Map;for await(let r of l3(e)){for(let e of r){let r=e.target,n=e.intersectionRect;e.isIntersecting&&n.width&&n.height&&t.set(r,n)}let e=[],n=[],i=[];for(let r of l2){let o=l1.get(r);if(!o)continue;let a=[];for(let e=0;e<o.elements.length;e++){let r=o.elements[e],n=t.get(r);n&&a.push(n)}a.length&&(e.push(o),n.push(l5(a)),i.push(V(r)))}if(e.length>0){let t,r=new l6(7*e.length*4),o=new Float32Array(r),a=Array(e.length);for(let r=0,l=e.length;r<l;r++){let l=e[r],s=i[r],{x:c,y:d,width:u,height:p}=n[r],{count:h,name:m,didCommit:f}=l;if(lX){let e=7*r;o[e]=s,o[e+1]=h,o[e+2]=c,o[e+3]=d,o[e+4]=u,o[e+5]=p,o[e+6]=f,a[r]=m}else t||(t=Array(e.length)),t[r]={id:s,name:m,count:h,x:c,y:d,width:u,height:p,didCommit:f}}lX?lX.postMessage({type:"draw-outlines",data:r,names:a}):lY&&lJ&&t&&(lK(l0,t),lQ||(lQ=requestAnimationFrame(l7)))}}for(let e of l2)l1.delete(e),l2.delete(e)},l7=()=>{lJ&&lY&&(lQ=((e,t,r,n)=>{e.clearRect(0,0,t.width/r,t.height/r);let i=new Map,o=new Map;for(let e of n.values()){let{x:t,y:r,width:n,height:a,targetX:l,targetY:s,targetWidth:c,targetHeight:d,frame:u}=e;l!==t&&(e.x=lH(t,l)),s!==r&&(e.y=lH(r,s)),c!==n&&(e.width=lH(n,c)),d!==a&&(e.height=lH(a,d));let p=`${null!=l?l:t},${null!=s?s:r}`,h=`${p},${null!=c?c:n},${null!=d?d:a}`,m=i.get(p);m?m.push(e):i.set(p,[e]);let f=1-u/45;e.frame++;let g=o.get(h)||{x:t,y:r,width:n,height:a,alpha:f};f>g.alpha&&(g.alpha=f),o.set(h,g)}for(let{x:t,y:r,width:n,height:i,alpha:a}of o.values()){e.strokeStyle=`rgba(${lW},${a})`,e.lineWidth=1;let o=Math.round(t)+.5,l=Math.round(r)+.5,s=Math.round(n),c=Math.round(i);e.beginPath(),e.rect(o,l,s,c),e.stroke(),e.fillStyle=`rgba(${lW},${.1*a})`,e.fill()}e.font="11px Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";let a=new Map;for(let t of(e.textRendering="optimizeSpeed",i.values())){let{x:r,y:i,frame:o}=t[0],l=1-o/45,s=lV(t),{width:c}=e.measureText(s);a.set(`${r},${i},${c},${s}`,{text:s,width:c,height:11,alpha:l,x:r,y:i,outlines:t});let d=i-11-4;if(d<0&&(d=0),o>45)for(let e of t)n.delete(String(e.id))}for(let[t,r]of Array.from(a.entries()).sort(([e,t],[r,n])=>lq(n.outlines)-lq(t.outlines)))if(a.has(t))for(let[n,i]of a.entries()){if(t===n)continue;let{x:o,y:l,width:s,height:c}=r,{x:d,y:u,width:p,height:h}=i;o+s>d&&d+p>o&&l+c>u&&u+h>l&&(r.text=lV(r.outlines.concat(i.outlines)),r.width=e.measureText(r.text).width,a.delete(n))}for(let t of a.values()){let{x:r,y:n,alpha:i,width:o,height:a,text:l}=t,s=n-a-4;s<0&&(s=0),e.fillStyle=`rgba(${lW},${i})`,e.fillRect(r,s,o+4,a+4),e.fillStyle=`rgba(255,255,255,${i})`,e.fillText(l,r+2,s+a)}return n.size>0})(lJ,lY,lZ,l0)?requestAnimationFrame(l7):null)},l9="u">typeof OffscreenCanvas&&"u">typeof Worker,se=()=>Math.min(window.devicePixelRatio||1,2),st=!1,sr=e=>!c9.has(e.memoizedProps),sn=!1,si=`/*! tailwindcss v4.2.4 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-950: oklch(25.8% 0.092 26.042);
    --color-yellow-300: oklch(90.5% 0.182 98.111);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-purple-400: oklch(71.4% 0.203 305.504);
    --color-purple-500: oklch(62.7% 0.265 303.9);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-zinc-200: oklch(92% 0.004 286.32);
    --color-zinc-400: oklch(70.5% 0.015 286.067);
    --color-zinc-500: oklch(55.2% 0.016 285.938);
    --color-zinc-600: oklch(44.2% 0.017 285.786);
    --color-zinc-700: oklch(37% 0.013 285.805);
    --color-zinc-800: oklch(27.4% 0.006 286.033);
    --color-zinc-900: oklch(21% 0.006 285.885);
    --color-neutral-300: oklch(87% 0 0);
    --color-neutral-400: oklch(70.8% 0 0);
    --color-neutral-500: oklch(55.6% 0 0);
    --color-neutral-700: oklch(37.1% 0 0);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 4px;
    --container-md: 448px;
    --text-xs: 12px;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 14px;
    --text-sm--line-height: calc(1.25 / 0.875);
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-wide: 0.025em;
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 8px;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --blur-sm: 8px;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
      -o-tab-size: 4;
         tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
    font-feature-settings: normal;
    font-variation-settings: normal;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::-moz-placeholder {
    opacity: 1;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::-moz-placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    -webkit-appearance: button;
       -moz-appearance: button;
            appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .pointer-events-auto {
    pointer-events: auto;
  }
  .pointer-events-bounding-box {
    pointer-events: bounding-box;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  .collapse {
    visibility: collapse;
  }
  .visible {
    visibility: visible;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .inset-x-1 {
    inset-inline: calc(var(--spacing) * 1);
  }
  .inset-y-0 {
    inset-block: calc(var(--spacing) * 0);
  }
  .start {
    inset-inline-start: var(--spacing);
  }
  .end {
    inset-inline-end: var(--spacing);
  }
  .-top-1 {
    top: calc(var(--spacing) * -1);
  }
  .-top-2\\.5 {
    top: calc(var(--spacing) * -2.5);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-0\\.5 {
    top: calc(var(--spacing) * 0.5);
  }
  .top-1\\/2 {
    top: calc(1 / 2 * 100%);
  }
  .top-2 {
    top: calc(var(--spacing) * 2);
  }
  .-right-1 {
    right: calc(var(--spacing) * -1);
  }
  .-right-2\\.5 {
    right: calc(var(--spacing) * -2.5);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-0\\.5 {
    right: calc(var(--spacing) * 0.5);
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .right-4 {
    right: calc(var(--spacing) * 4);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .bottom-4 {
    bottom: calc(var(--spacing) * 4);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-3 {
    left: calc(var(--spacing) * 3);
  }
  .z-10 {
    z-index: 10;
  }
  .z-50 {
    z-index: 50;
  }
  .z-100 {
    z-index: 100;
  }
  .z-\\[214748365\\] {
    z-index: 214748365;
  }
  .z-\\[214748367\\] {
    z-index: 214748367;
  }
  .z-\\[124124124124\\] {
    z-index: 124124124124;
  }
  .container {
    width: 100%;
    @media (width >= 640px) {
      max-width: 640px;
    }
    @media (width >= 768px) {
      max-width: 768px;
    }
    @media (width >= 1024px) {
      max-width: 1024px;
    }
    @media (width >= 1280px) {
      max-width: 1280px;
    }
    @media (width >= 1536px) {
      max-width: 1536px;
    }
  }
  .m-\\[2px\\] {
    margin: 2px;
  }
  .mx-0\\.5 {
    margin-inline: calc(var(--spacing) * 0.5);
  }
  .mt-0\\.5 {
    margin-top: calc(var(--spacing) * 0.5);
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mr-0\\.5 {
    margin-right: calc(var(--spacing) * 0.5);
  }
  .mr-1 {
    margin-right: calc(var(--spacing) * 1);
  }
  .mr-1\\.5 {
    margin-right: calc(var(--spacing) * 1.5);
  }
  .mr-16 {
    margin-right: calc(var(--spacing) * 16);
  }
  .mr-auto {
    margin-right: auto;
  }
  .mb-1\\.5 {
    margin-bottom: calc(var(--spacing) * 1.5);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-px {
    margin-bottom: 1px;
  }
  .\\!ml-0 {
    margin-left: calc(var(--spacing) * 0) !important;
  }
  .ml-1 {
    margin-left: calc(var(--spacing) * 1);
  }
  .ml-1\\.5 {
    margin-left: calc(var(--spacing) * 1.5);
  }
  .ml-auto {
    margin-left: auto;
  }
  .block {
    display: block;
  }
  .contents {
    display: contents;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .h-1 {
    height: calc(var(--spacing) * 1);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-4\\/5 {
    height: calc(4 / 5 * 100%);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-\\[28px\\] {
    height: 28px;
  }
  .h-\\[48px\\] {
    height: 48px;
  }
  .h-\\[50px\\] {
    height: 50px;
  }
  .h-\\[150px\\] {
    height: 150px;
  }
  .h-\\[235px\\] {
    height: 235px;
  }
  .h-\\[calc\\(100\\%-25px\\)\\] {
    height: calc(100% - 25px);
  }
  .h-\\[calc\\(100\\%-40px\\)\\] {
    height: calc(100% - 40px);
  }
  .h-\\[calc\\(100\\%-48px\\)\\] {
    height: calc(100% - 48px);
  }
  .h-\\[calc\\(100\\%-150px\\)\\] {
    height: calc(100% - 150px);
  }
  .h-\\[calc\\(100\\%-200px\\)\\] {
    height: calc(100% - 200px);
  }
  .h-fit {
    height: -moz-fit-content;
    height: fit-content;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }
  .max-h-0 {
    max-height: calc(var(--spacing) * 0);
  }
  .max-h-9 {
    max-height: calc(var(--spacing) * 9);
  }
  .max-h-40 {
    max-height: calc(var(--spacing) * 40);
  }
  .min-h-9 {
    min-height: calc(var(--spacing) * 9);
  }
  .min-h-\\[48px\\] {
    min-height: 48px;
  }
  .min-h-fit {
    min-height: -moz-fit-content;
    min-height: fit-content;
  }
  .w-1 {
    width: calc(var(--spacing) * 1);
  }
  .w-1\\/2 {
    width: calc(1 / 2 * 100%);
  }
  .w-1\\/3 {
    width: calc(1 / 3 * 100%);
  }
  .w-2\\/4 {
    width: calc(2 / 4 * 100%);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-4\\/5 {
    width: calc(4 / 5 * 100%);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-80 {
    width: calc(var(--spacing) * 80);
  }
  .w-\\[20px\\] {
    width: 20px;
  }
  .w-\\[72px\\] {
    width: 72px;
  }
  .w-\\[90\\%\\] {
    width: 90%;
  }
  .w-\\[calc\\(100\\%-200px\\)\\] {
    width: calc(100% - 200px);
  }
  .w-fit {
    width: -moz-fit-content;
    width: fit-content;
  }
  .w-full {
    width: 100%;
  }
  .w-px {
    width: 1px;
  }
  .w-screen {
    width: 100vw;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .min-w-\\[200px\\] {
    min-width: 200px;
  }
  .min-w-fit {
    min-width: -moz-fit-content;
    min-width: fit-content;
  }
  .flex-1 {
    flex: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .grow {
    flex-grow: 1;
  }
  .-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-\\[200\\%\\] {
    --tw-translate-y: calc(200% * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-0 {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .scale-110 {
    --tw-scale-x: 110%;
    --tw-scale-y: 110%;
    --tw-scale-z: 110%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .-rotate-90 {
    rotate: calc(90deg * -1);
  }
  .rotate-90 {
    rotate: 90deg;
  }
  .rotate-180 {
    rotate: 180deg;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .animate-fade-in {
    animation: fadeIn ease-in forwards;
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-e-resize {
    cursor: e-resize;
  }
  .cursor-ew-resize {
    cursor: ew-resize;
  }
  .cursor-ew-resize {
    cursor: ew-resize;
  }
  .cursor-move {
    cursor: move;
  }
  .cursor-move {
    cursor: move;
  }
  .cursor-nesw-resize {
    cursor: nesw-resize;
  }
  .cursor-nesw-resize {
    cursor: nesw-resize;
  }
  .cursor-ns-resize {
    cursor: ns-resize;
  }
  .cursor-ns-resize {
    cursor: ns-resize;
  }
  .cursor-nwse-resize {
    cursor: nwse-resize;
  }
  .cursor-nwse-resize {
    cursor: nwse-resize;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .cursor-w-resize {
    cursor: w-resize;
  }
  .\\[touch-action\\:none\\] {
    touch-action: none;
  }
  .resize {
    resize: both;
  }
  .flex-col {
    flex-direction: column;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .gap-0\\.5 {
    gap: calc(var(--spacing) * 0.5);
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .space-y-1\\.5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .gap-x-0\\.5 {
    -moz-column-gap: calc(var(--spacing) * 0.5);
         column-gap: calc(var(--spacing) * 0.5);
  }
  .gap-x-1 {
    -moz-column-gap: calc(var(--spacing) * 1);
         column-gap: calc(var(--spacing) * 1);
  }
  .gap-x-1\\.5 {
    -moz-column-gap: calc(var(--spacing) * 1.5);
         column-gap: calc(var(--spacing) * 1.5);
  }
  .gap-x-2 {
    -moz-column-gap: calc(var(--spacing) * 2);
         column-gap: calc(var(--spacing) * 2);
  }
  .gap-x-3 {
    -moz-column-gap: calc(var(--spacing) * 3);
         column-gap: calc(var(--spacing) * 3);
  }
  .gap-x-4 {
    -moz-column-gap: calc(var(--spacing) * 4);
         column-gap: calc(var(--spacing) * 4);
  }
  .gap-y-0\\.5 {
    row-gap: calc(var(--spacing) * 0.5);
  }
  .gap-y-1 {
    row-gap: calc(var(--spacing) * 1);
  }
  .gap-y-2 {
    row-gap: calc(var(--spacing) * 2);
  }
  .gap-y-4 {
    row-gap: calc(var(--spacing) * 4);
  }
  .divide-y {
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(1px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    }
  }
  .divide-zinc-800 {
    :where(& > :not(:last-child)) {
      border-color: var(--color-zinc-800);
    }
  }
  .place-self-center {
    place-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .\\!overflow-visible {
    overflow: visible !important;
  }
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .overflow-x-hidden {
    overflow-x: hidden;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .rounded {
    border-radius: 4px;
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-sm {
    border-radius: var(--radius-sm);
  }
  .rounded-t-lg {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
  }
  .rounded-t-sm {
    border-top-left-radius: var(--radius-sm);
    border-top-right-radius: var(--radius-sm);
  }
  .rounded-l-md {
    border-top-left-radius: var(--radius-md);
    border-bottom-left-radius: var(--radius-md);
  }
  .rounded-l-sm {
    border-top-left-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-sm);
  }
  .rounded-tl-lg {
    border-top-left-radius: var(--radius-lg);
  }
  .rounded-r-md {
    border-top-right-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
  }
  .rounded-r-sm {
    border-top-right-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-sm);
  }
  .rounded-tr-lg {
    border-top-right-radius: var(--radius-lg);
  }
  .rounded-br-lg {
    border-bottom-right-radius: var(--radius-lg);
  }
  .rounded-bl-lg {
    border-bottom-left-radius: var(--radius-lg);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-4 {
    border-style: var(--tw-border-style);
    border-width: 4px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-l-0 {
    border-left-style: var(--tw-border-style);
    border-left-width: 0px;
  }
  .border-l-1 {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-none {
    --tw-border-style: none;
    border-style: none;
  }
  .\\!border-red-500 {
    border-color: var(--color-red-500) !important;
  }
  .border-\\[\\#1e1e1e\\] {
    border-color: #1e1e1e;
  }
  .border-\\[\\#222\\] {
    border-color: #222;
  }
  .border-\\[\\#333\\] {
    border-color: #333;
  }
  .border-\\[\\#27272A\\] {
    border-color: #27272A;
  }
  .border-transparent {
    border-color: transparent;
  }
  .border-zinc-800 {
    border-color: var(--color-zinc-800);
  }
  .bg-\\[\\#0A0A0A\\] {
    background-color: #0A0A0A;
  }
  .bg-\\[\\#1D3A66\\] {
    background-color: #1D3A66;
  }
  .bg-\\[\\#1E1E1E\\] {
    background-color: #1E1E1E;
  }
  .bg-\\[\\#1a2a1a\\] {
    background-color: #1a2a1a;
  }
  .bg-\\[\\#1e1e1e\\] {
    background-color: #1e1e1e;
  }
  .bg-\\[\\#2a1515\\] {
    background-color: #2a1515;
  }
  .bg-\\[\\#4b4b4b\\] {
    background-color: #4b4b4b;
  }
  .bg-\\[\\#5f3f9a\\] {
    background-color: #5f3f9a;
  }
  .bg-\\[\\#5f3f9a\\]\\/40 {
    background-color: color-mix(in oklab, #5f3f9a 40%, transparent);
  }
  .bg-\\[\\#6a369e\\] {
    background-color: #6a369e;
  }
  .bg-\\[\\#8e61e3\\] {
    background-color: #8e61e3;
  }
  .bg-\\[\\#7521c8\\] {
    background-color: #7521c8;
  }
  .bg-\\[\\#18181B\\] {
    background-color: #18181B;
  }
  .bg-\\[\\#18181B\\]\\/50 {
    background-color: color-mix(in oklab, #18181B 50%, transparent);
  }
  .bg-\\[\\#27272A\\] {
    background-color: #27272A;
  }
  .bg-\\[\\#44444a\\] {
    background-color: #44444a;
  }
  .bg-\\[\\#141414\\] {
    background-color: #141414;
  }
  .bg-\\[\\#214379d4\\] {
    background-color: #214379d4;
  }
  .bg-\\[\\#412162\\] {
    background-color: #412162;
  }
  .bg-\\[\\#EFD81A\\] {
    background-color: #EFD81A;
  }
  .bg-\\[\\#b77116\\] {
    background-color: #b77116;
  }
  .bg-\\[\\#b94040\\] {
    background-color: #b94040;
  }
  .bg-\\[\\#d36cff\\] {
    background-color: #d36cff;
  }
  .bg-\\[\\#efd81a6b\\] {
    background-color: #efd81a6b;
  }
  .bg-black {
    background-color: var(--color-black);
  }
  .bg-black\\/40 {
    background-color: color-mix(in srgb, #000 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 40%, transparent);
    }
  }
  .bg-green-500\\/50 {
    background-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-green-500) 50%, transparent);
    }
  }
  .bg-green-500\\/60 {
    background-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-green-500) 60%, transparent);
    }
  }
  .bg-neutral-700 {
    background-color: var(--color-neutral-700);
  }
  .bg-purple-500 {
    background-color: var(--color-purple-500);
  }
  .bg-purple-500\\/90 {
    background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-purple-500) 90%, transparent);
    }
  }
  .bg-purple-800 {
    background-color: var(--color-purple-800);
  }
  .bg-red-500 {
    background-color: var(--color-red-500);
  }
  .bg-red-500\\/90 {
    background-color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-500) 90%, transparent);
    }
  }
  .bg-red-950\\/50 {
    background-color: color-mix(in srgb, oklch(25.8% 0.092 26.042) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-950) 50%, transparent);
    }
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-yellow-300 {
    background-color: var(--color-yellow-300);
  }
  .bg-zinc-800 {
    background-color: var(--color-zinc-800);
  }
  .bg-zinc-900\\/30 {
    background-color: color-mix(in srgb, oklch(21% 0.006 285.885) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-zinc-900) 30%, transparent);
    }
  }
  .bg-zinc-900\\/50 {
    background-color: color-mix(in srgb, oklch(21% 0.006 285.885) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-zinc-900) 50%, transparent);
    }
  }
  .p-0 {
    padding: calc(var(--spacing) * 0);
  }
  .p-1 {
    padding: calc(var(--spacing) * 1);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-\\[1px\\] {
    padding-block: 1px;
  }
  .py-\\[3px\\] {
    padding-block: 3px;
  }
  .py-\\[5px\\] {
    padding-block: 5px;
  }
  .pt-0 {
    padding-top: calc(var(--spacing) * 0);
  }
  .pt-2 {
    padding-top: calc(var(--spacing) * 2);
  }
  .pt-5 {
    padding-top: calc(var(--spacing) * 5);
  }
  .pr-1 {
    padding-right: calc(var(--spacing) * 1);
  }
  .pr-1\\.5 {
    padding-right: calc(var(--spacing) * 1.5);
  }
  .pr-2 {
    padding-right: calc(var(--spacing) * 2);
  }
  .pr-2\\.5 {
    padding-right: calc(var(--spacing) * 2.5);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pl-1 {
    padding-left: calc(var(--spacing) * 1);
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
  .pl-2\\.5 {
    padding-left: calc(var(--spacing) * 2.5);
  }
  .pl-3 {
    padding-left: calc(var(--spacing) * 3);
  }
  .pl-5 {
    padding-left: calc(var(--spacing) * 5);
  }
  .pl-6 {
    padding-left: calc(var(--spacing) * 6);
  }
  .text-left {
    text-align: left;
  }
  .font-mono {
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[8px\\] {
    font-size: 8px;
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .text-\\[11px\\] {
    font-size: 11px;
  }
  .text-\\[13px\\] {
    font-size: 13px;
  }
  .text-\\[14px\\] {
    font-size: 14px;
  }
  .text-\\[17px\\] {
    font-size: 17px;
  }
  .leading-6 {
    --tw-leading: calc(var(--spacing) * 6);
    line-height: calc(var(--spacing) * 6);
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-wide {
    --tw-tracking: var(--tracking-wide);
    letter-spacing: var(--tracking-wide);
  }
  .text-wrap {
    text-wrap: wrap;
  }
  .break-words {
    overflow-wrap: break-word;
  }
  .break-all {
    word-break: break-all;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }
  .text-\\[\\#4ade80\\] {
    color: #4ade80;
  }
  .text-\\[\\#5a5a5a\\] {
    color: #5a5a5a;
  }
  .text-\\[\\#6E6E77\\] {
    color: #6E6E77;
  }
  .text-\\[\\#6F6F78\\] {
    color: #6F6F78;
  }
  .text-\\[\\#8E61E3\\] {
    color: #8E61E3;
  }
  .text-\\[\\#666\\] {
    color: #666;
  }
  .text-\\[\\#888\\] {
    color: #888;
  }
  .text-\\[\\#999\\] {
    color: #999;
  }
  .text-\\[\\#7346a0\\] {
    color: #7346a0;
  }
  .text-\\[\\#65656D\\] {
    color: #65656D;
  }
  .text-\\[\\#737373\\] {
    color: #737373;
  }
  .text-\\[\\#A1A1AA\\] {
    color: #A1A1AA;
  }
  .text-\\[\\#A855F7\\] {
    color: #A855F7;
  }
  .text-\\[\\#E4E4E7\\] {
    color: #E4E4E7;
  }
  .text-\\[\\#d36cff\\] {
    color: #d36cff;
  }
  .text-\\[\\#f87171\\] {
    color: #f87171;
  }
  .text-black {
    color: var(--color-black);
  }
  .text-gray-100 {
    color: var(--color-gray-100);
  }
  .text-gray-300 {
    color: var(--color-gray-300);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-green-500 {
    color: var(--color-green-500);
  }
  .text-neutral-300 {
    color: var(--color-neutral-300);
  }
  .text-neutral-400 {
    color: var(--color-neutral-400);
  }
  .text-neutral-500 {
    color: var(--color-neutral-500);
  }
  .text-purple-400 {
    color: var(--color-purple-400);
  }
  .text-red-300 {
    color: var(--color-red-300);
  }
  .text-red-400 {
    color: var(--color-red-400);
  }
  .text-red-500 {
    color: var(--color-red-500);
  }
  .text-white {
    color: var(--color-white);
  }
  .text-white\\/30 {
    color: color-mix(in srgb, #fff 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 30%, transparent);
    }
  }
  .text-white\\/70 {
    color: color-mix(in srgb, #fff 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 70%, transparent);
    }
  }
  .text-yellow-300 {
    color: var(--color-yellow-300);
  }
  .text-yellow-500 {
    color: var(--color-yellow-500);
  }
  .text-zinc-200 {
    color: var(--color-zinc-200);
  }
  .text-zinc-400 {
    color: var(--color-zinc-400);
  }
  .text-zinc-500 {
    color: var(--color-zinc-500);
  }
  .text-zinc-600 {
    color: var(--color-zinc-600);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .italic {
    font-style: italic;
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .opacity-100 {
    opacity: 100%;
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-white\\/\\[0\\.08\\] {
    --tw-ring-color: color-mix(in srgb, #fff 8%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-white) 8%, transparent);
    }
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .backdrop-blur-sm {
    --tw-backdrop-blur: blur(var(--blur-sm));
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[border-radius\\] {
    transition-property: border-radius;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[color\\,transform\\] {
    transition-property: color,transform;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[max-height\\] {
    transition-property: max-height;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[opacity\\] {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-none {
    transition-property: none;
  }
  .delay-0 {
    transition-delay: 0ms;
  }
  .delay-150 {
    transition-delay: 150ms;
  }
  .delay-300 {
    transition-delay: 300ms;
  }
  .\\!duration-0 {
    --tw-duration: 0ms !important;
    transition-duration: 0ms !important;
  }
  .duration-0 {
    --tw-duration: 0ms;
    transition-duration: 0ms;
  }
  .duration-120 {
    --tw-duration: 120ms;
    transition-duration: 120ms;
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
  .ease-\\[cubic-bezier\\(0\\.25\\,0\\.1\\,0\\.25\\,1\\)\\] {
    --tw-ease: cubic-bezier(0.25,0.1,0.25,1);
    transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
  }
  .ease-in {
    --tw-ease: var(--ease-in);
    transition-timing-function: var(--ease-in);
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
  .will-change-transform {
    will-change: transform;
  }
  .select-none {
    -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
  }
  .animation-delay-0 {
    animation-delay: 0s;
  }
  .animation-delay-100 {
    animation-delay: .1s;
  }
  .animation-delay-150 {
    animation-delay: .15s;
  }
  .animation-delay-200 {
    animation-delay: .2s;
  }
  .animation-delay-300 {
    animation-delay: .3s;
  }
  .animation-delay-500 {
    animation-delay: .5s;
  }
  .animation-delay-700 {
    animation-delay: .7s;
  }
  .animation-delay-1000 {
    animation-delay: 1s;
  }
  .animation-duration-0 {
    animation-duration: 0s;
  }
  .animation-duration-100 {
    animation-duration: .1s;
  }
  .animation-duration-200 {
    animation-duration: .2s;
  }
  .animation-duration-300 {
    animation-duration: .3s;
  }
  .animation-duration-500 {
    animation-duration: .5s;
  }
  .animation-duration-700 {
    animation-duration: .7s;
  }
  .animation-duration-1000 {
    animation-duration: 1s;
  }
  .group-hover\\:bg-\\[\\#5b2d89\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #5b2d89;
      }
    }
  }
  .group-hover\\:bg-\\[\\#6a6a6a\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #6a6a6a;
      }
    }
  }
  .group-hover\\:bg-\\[\\#21437982\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #21437982;
      }
    }
  }
  .group-hover\\:bg-\\[\\#efda1a2f\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #efda1a2f;
      }
    }
  }
  .group-hover\\:opacity-100 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .peer-hover\\/bottom\\:rounded-b-none {
    &:is(:where(.peer\\/bottom):hover ~ *) {
      @media (hover: hover) {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  .peer-hover\\/left\\:rounded-l-none {
    &:is(:where(.peer\\/left):hover ~ *) {
      @media (hover: hover) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  .peer-hover\\/right\\:rounded-r-none {
    &:is(:where(.peer\\/right):hover ~ *) {
      @media (hover: hover) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
  .peer-hover\\/top\\:rounded-t-none {
    &:is(:where(.peer\\/top):hover ~ *) {
      @media (hover: hover) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
  .after\\:absolute {
    &::after {
      content: var(--tw-content);
      position: absolute;
    }
  }
  .after\\:inset-0 {
    &::after {
      content: var(--tw-content);
      inset: calc(var(--spacing) * 0);
    }
  }
  .after\\:top-\\[100\\%\\] {
    &::after {
      content: var(--tw-content);
      top: 100%;
    }
  }
  .after\\:left-1\\/2 {
    &::after {
      content: var(--tw-content);
      left: calc(1 / 2 * 100%);
    }
  }
  .after\\:h-\\[6px\\] {
    &::after {
      content: var(--tw-content);
      height: 6px;
    }
  }
  .after\\:w-\\[10px\\] {
    &::after {
      content: var(--tw-content);
      width: 10px;
    }
  }
  .after\\:-translate-x-1\\/2 {
    &::after {
      content: var(--tw-content);
      --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .after\\:animate-\\[fadeOut_1s_ease-out_forwards\\] {
    &::after {
      content: var(--tw-content);
      animation: fadeOut 1s ease-out forwards;
    }
  }
  .after\\:border-t-\\[6px\\] {
    &::after {
      content: var(--tw-content);
      border-top-style: var(--tw-border-style);
      border-top-width: 6px;
    }
  }
  .after\\:border-r-\\[5px\\] {
    &::after {
      content: var(--tw-content);
      border-right-style: var(--tw-border-style);
      border-right-width: 5px;
    }
  }
  .after\\:border-l-\\[5px\\] {
    &::after {
      content: var(--tw-content);
      border-left-style: var(--tw-border-style);
      border-left-width: 5px;
    }
  }
  .after\\:border-t-white {
    &::after {
      content: var(--tw-content);
      border-top-color: var(--color-white);
    }
  }
  .after\\:border-r-transparent {
    &::after {
      content: var(--tw-content);
      border-right-color: transparent;
    }
  }
  .after\\:border-l-transparent {
    &::after {
      content: var(--tw-content);
      border-left-color: transparent;
    }
  }
  .after\\:bg-purple-500\\/30 {
    &::after {
      content: var(--tw-content);
      background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 30%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-purple-500) 30%, transparent);
      }
    }
  }
  .after\\:content-\\[\\"\\"\\] {
    &::after {
      --tw-content: "";
      content: var(--tw-content);
    }
  }
  .focus-within\\:border-\\[\\#454545\\] {
    &:focus-within {
      border-color: #454545;
    }
  }
  .hover\\:bg-\\[\\#0f0f0f\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #0f0f0f;
      }
    }
  }
  .hover\\:bg-\\[\\#5f3f9a\\]\\/20 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in oklab, #5f3f9a 20%, transparent);
      }
    }
  }
  .hover\\:bg-\\[\\#5f3f9a\\]\\/40 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in oklab, #5f3f9a 40%, transparent);
      }
    }
  }
  .hover\\:bg-\\[\\#18181B\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #18181B;
      }
    }
  }
  .hover\\:bg-\\[\\#34343b\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #34343b;
      }
    }
  }
  .hover\\:bg-red-600 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-red-600);
      }
    }
  }
  .hover\\:bg-zinc-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-zinc-700);
      }
    }
  }
  .hover\\:bg-zinc-800\\/50 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in srgb, oklch(27.4% 0.006 286.033) 50%, transparent);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-zinc-800) 50%, transparent);
        }
      }
    }
  }
  .hover\\:text-neutral-300 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-neutral-300);
      }
    }
  }
  .hover\\:text-white {
    &:hover {
      @media (hover: hover) {
        color: var(--color-white);
      }
    }
  }
}
* {
  outline: none !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}
@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: 6px;
  }
}
button {
  &:hover {
    @media (hover: hover) {
      background-image: none;
    }
  }
  --tw-outline-style: none;
  outline-style: none;
  --tw-border-style: none;
  border-style: none;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
  cursor: pointer;
}
input {
  --tw-outline-style: none;
  outline-style: none;
  --tw-border-style: none;
  border-style: none;
  background-color: transparent;
  background-image: none;
  &::-moz-placeholder {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  &::placeholder {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  &::-moz-placeholder {
    color: var(--color-neutral-500);
  }
  &::placeholder {
    color: var(--color-neutral-500);
  }
  &::-moz-placeholder {
    font-style: italic;
  }
  &::placeholder {
    font-style: italic;
  }
  &:-moz-placeholder {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:placeholder-shown {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
svg {
  height: auto;
  width: auto;
  pointer-events: none;
}
.with-data-text {
  overflow: hidden;
  &::before {
    content: attr(data-text);
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
#react-scan-toolbar {
  position: fixed;
  top: calc(var(--spacing) * 0);
  left: calc(var(--spacing) * 0);
  display: flex;
  flex-direction: column;
  --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 13px;
  color: var(--color-white);
  background-color: var(--color-black);
  -webkit-user-select: none;
  -moz-user-select: none;
       user-select: none;
  cursor: move;
  opacity: 0%;
  z-index: 2147483678;
  animation: fadeIn ease-in forwards;
  animation-delay: .3s;
  animation-duration: .3s;
  --tw-shadow: 0 4px 12px var(--tw-shadow-color, rgba(0,0,0,0.2));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  place-self: start;
  will-change: transform;
  backface-visibility: hidden;
}
#react-scan-toolbar pre,
#react-scan-toolbar textarea,
#react-scan-toolbar input[type='text'],
#react-scan-toolbar input[type='search'],
#react-scan-toolbar [data-react-scan-selectable] {
  -webkit-user-select: text;
  -moz-user-select: text;
       user-select: text;
  cursor: text;
}
.button {
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}
.resize-line-wrapper {
  position: absolute;
  overflow: hidden;
}
.resize-line {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  overflow: hidden;
  background-color: var(--color-black);
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  svg {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-right,
.resize-left {
  inset-block: calc(var(--spacing) * 0);
  width: calc(var(--spacing) * 6);
  cursor: ew-resize;
  .resize-line-wrapper {
    inset-block: calc(var(--spacing) * 0);
    width: calc(1 / 2 * 100%);
  }
  &:hover {
    .resize-line {
      --tw-translate-x: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
}
.resize-right {
  right: calc(var(--spacing) * 0);
  --tw-translate-x: calc(1 / 2 * 100%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    right: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-right-radius: var(--radius-lg);
    border-bottom-right-radius: var(--radius-lg);
    --tw-translate-x: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-left {
  left: calc(var(--spacing) * 0);
  --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    left: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-left-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    --tw-translate-x: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-top,
.resize-bottom {
  inset-inline: calc(var(--spacing) * 0);
  height: calc(var(--spacing) * 6);
  cursor: ns-resize;
  .resize-line-wrapper {
    inset-inline: calc(var(--spacing) * 0);
    height: calc(1 / 2 * 100%);
  }
  &:hover {
    .resize-line {
      --tw-translate-y: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
}
.resize-top {
  top: calc(var(--spacing) * 0);
  --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    top: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-bottom {
  bottom: calc(var(--spacing) * 0);
  --tw-translate-y: calc(1 / 2 * 100%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    bottom: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    --tw-translate-y: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-header {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-right: calc(var(--spacing) * 2);
  padding-left: calc(var(--spacing) * 3);
  min-height: calc(var(--spacing) * 9);
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
  border-color: #222;
  overflow: hidden;
  white-space: nowrap;
}
.react-scan-replay-button,
.react-scan-close-button {
  display: flex;
  align-items: center;
  padding: calc(var(--spacing) * 1);
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: 4px;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.react-scan-replay-button {
  position: relative;
  overflow: hidden;
  background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 50%, transparent) !important;
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-purple-500) 50%, transparent) !important;
  }
  &:hover {
    background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 25%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-purple-500) 25%, transparent);
    }
  }
  &.disabled {
    opacity: 50%;
    pointer-events: none;
  }
  &:before {
    content: "";
    position: absolute;
    inset: calc(var(--spacing) * 0);
    --tw-translate-x: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    animation: shimmer 2s infinite;
    background: linear-gradient(
      to right,
      transparent,
      rgba(142, 97, 227, 0.3),
      transparent
    );
  }
}
.react-scan-close-button {
  background-color: color-mix(in srgb, #fff 10%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-white) 10%, transparent);
  }
  &:hover {
    background-color: color-mix(in srgb, #fff 15%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 15%, transparent);
    }
  }
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
.react-section-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 3);
  height: calc(var(--spacing) * 7);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #888;
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
  border-color: #222;
  background-color: #0a0a0a;
}
.react-scan-section {
  display: flex;
  flex-direction: column;
  padding-inline: calc(var(--spacing) * 2);
  color: #888;
  &::before {
    content: var(--tw-content);
    color: var(--color-gray-500);
  }
  &::before {
    --tw-content: attr(data-section);
    content: var(--tw-content);
  }
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  > .react-scan-property {
    margin-left: calc(14px * -1);
  }
}
.react-scan-property {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: calc(var(--spacing) * 8);
  border-left-style: var(--tw-border-style);
  border-left-width: 1px;
  border-color: transparent;
  overflow: hidden;
}
.react-scan-property-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: calc(var(--spacing) * 7);
  max-width: 100%;
  overflow: hidden;
}
.react-scan-string {
  color: #9ecbff;
}
.react-scan-number {
  color: #79c7ff;
}
.react-scan-boolean {
  color: #56b6c2;
}
.react-scan-key {
  width: -moz-fit-content;
  width: fit-content;
  max-width: calc(var(--spacing) * 60);
  white-space: nowrap;
  color: var(--color-white);
}
.react-scan-input {
  color: var(--color-white);
  background-color: var(--color-black);
}
@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.react-scan-arrow {
  position: absolute;
  top: calc(var(--spacing) * 0);
  left: calc(var(--spacing) * 7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: calc(var(--spacing) * 7);
  width: calc(var(--spacing) * 6);
  --tw-translate-x: -100%;
  translate: var(--tw-translate-x) var(--tw-translate-y);
  z-index: 10;
  > svg {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
}
.react-scan-nested {
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: calc(var(--spacing) * 0);
    left: calc(var(--spacing) * 0);
    height: 100%;
    width: 1px;
    background-color: color-mix(in srgb, oklch(55.1% 0.027 264.364) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-500) 30%, transparent);
    }
  }
}
.react-scan-settings {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 4);
  padding-inline: calc(var(--spacing) * 4);
  padding-block: calc(var(--spacing) * 2);
  color: #888;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
}
.react-scan-preview-line {
  position: relative;
  display: flex;
  min-height: calc(var(--spacing) * 7);
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
}
.react-scan-flash-overlay {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  opacity: 0%;
  z-index: 50;
  pointer-events: none;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  mix-blend-mode: multiply;
  background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 90%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-purple-500) 90%, transparent);
  }
}
.react-scan-toggle {
  position: relative;
  display: inline-flex;
  height: calc(var(--spacing) * 6);
  width: calc(var(--spacing) * 10);
  input {
    position: absolute;
    inset: calc(var(--spacing) * 0);
    z-index: 20;
    opacity: 0%;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
  input:checked {
    + div {
      background-color: #5f3f9a;
      &::before {
        --tw-translate-x: 100%;
        translate: var(--tw-translate-x) var(--tw-translate-y);
        left: auto;
        border-color: #5f3f9a;
      }
    }
  }
  > div {
    position: absolute;
    inset: calc(var(--spacing) * 1);
    background-color: var(--color-neutral-700);
    border-radius: calc(infinity * 1px);
    pointer-events: none;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 300ms;
    transition-duration: 300ms;
    &:before {
      --tw-content: '';
      content: var(--tw-content);
      position: absolute;
      top: calc(1 / 2 * 100%);
      left: calc(var(--spacing) * 0);
      --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
      height: calc(var(--spacing) * 4);
      width: calc(var(--spacing) * 4);
      background-color: var(--color-white);
      border-style: var(--tw-border-style);
      border-width: 2px;
      border-color: var(--color-neutral-700);
      border-radius: calc(infinity * 1px);
      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      transition-property: all;
      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
      transition-duration: var(--tw-duration, var(--default-transition-duration));
      --tw-duration: 300ms;
      transition-duration: 300ms;
    }
  }
}
.react-scan-flash-active {
  opacity: 40%;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.react-scan-inspector-overlay {
  display: flex;
  flex-direction: column;
  opacity: 0%;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 200ms;
  transition-duration: 200ms;
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
  will-change: opacity;
  &.fade-out {
    opacity: 0%;
  }
  &.fade-in {
    opacity: 100%;
  }
}
.react-scan-what-changed {
  ul {
    list-style-type: disc;
    padding-left: calc(var(--spacing) * 4);
  }
  li {
    white-space: nowrap;
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      -moz-column-gap: calc(var(--spacing) * 2);
           column-gap: calc(var(--spacing) * 2);
    }
  }
}
.count-badge {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 1.5);
  padding-block: calc(var(--spacing) * 0.5);
  border-radius: 4px;
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
  color: #a855f7;
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  background-color: color-mix(in oklab, #a855f7 10%, transparent);
  transform-origin: center;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  transition-delay: 150ms;
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.count-flash {
  animation: countFlash .3s ease-out forwards;
}
.count-flash-white {
  animation: countFlashShake .3s ease-out forwards;
  transition-delay: 500ms !important;
}
.change-scope {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 1);
       column-gap: calc(var(--spacing) * 1);
  color: #666;
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  > div {
    padding-inline: calc(var(--spacing) * 1.5);
    padding-block: calc(var(--spacing) * 0.5);
    border-radius: 4px;
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
    transform-origin: center;
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    transition-delay: 150ms;
    --tw-duration: 300ms;
    transition-duration: 300ms;
    &[data-flash="true"] {
      background-color: color-mix(in oklab, #a855f7 10%, transparent);
      color: #a855f7;
    }
  }
}
.react-scan-slider {
  position: relative;
  min-height: calc(var(--spacing) * 6);
  > input {
    position: absolute;
    inset: calc(var(--spacing) * 0);
    opacity: 0%;
  }
  &:before {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    top: calc(1 / 2 * 100%);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: calc(var(--spacing) * 1.5);
    background-color: color-mix(in oklab, #8e61e3 40%, transparent);
    border-radius: var(--radius-lg);
    pointer-events: none;
  }
  &:after {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    inset-block: calc(var(--spacing) * -2);
    z-index: calc(10 * -1);
  }
  span {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(var(--spacing) * 0);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: calc(var(--spacing) * 2.5);
    width: calc(var(--spacing) * 2.5);
    border-radius: var(--radius-lg);
    background-color: #8e61e3;
    pointer-events: none;
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 75ms;
    transition-duration: 75ms;
  }
}
.resize-v-line {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: calc(var(--spacing) * 1);
  min-width: calc(var(--spacing) * 1);
  height: 100%;
  width: 100%;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  &:hover,
  &:active {
    > span {
      background-color: #222;
    }
    svg {
      opacity: 100%;
    }
  }
  &::before {
    --tw-content: "";
    content: var(--tw-content);
    position: absolute;
    inset: calc(var(--spacing) * 0);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    width: 1px;
    background-color: #222;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  > span {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: 18px;
    width: calc(var(--spacing) * 1.5);
    border-radius: 4px;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  svg {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    rotate: 90deg;
    color: var(--color-neutral-400);
    opacity: 0%;
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    z-index: 50;
  }
}
.tree-node-search-highlight {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  span {
    padding-block: 1px;
    border-radius: var(--radius-sm);
    background-color: var(--color-yellow-300);
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    color: var(--color-black);
  }
  .single {
    margin-right: 1px;
    padding-inline: 2px;
  }
  .regex {
    padding-inline: 2px;
  }
  .start {
    margin-left: 1px;
    border-top-left-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-sm);
  }
  .end {
    margin-right: 1px;
    border-top-right-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-sm);
  }
  .middle {
    margin-inline: 1px;
    border-radius: var(--radius-sm);
  }
}
.react-scan-toolbar-notification {
  position: absolute;
  inset-inline: calc(var(--spacing) * 0);
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding: calc(var(--spacing) * 1);
  padding-left: calc(var(--spacing) * 2);
  font-size: 10px;
  color: var(--color-neutral-300);
  background-color: color-mix(in srgb, #000 90%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-black) 90%, transparent);
  }
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  &:before {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    background-color: var(--color-black);
    height: calc(var(--spacing) * 2);
  }
  &.position-top {
    top: 100%;
    --tw-translate-y: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    &::before {
      top: calc(var(--spacing) * 0);
      --tw-translate-y: -100%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  &.position-bottom {
    bottom: 100%;
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    &::before {
      bottom: calc(var(--spacing) * 0);
      --tw-translate-y: 100%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  &.is-open {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-header-item {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  --tw-translate-y: calc(200% * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
  &.is-visible {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active)
  .tree {
  overflow: hidden;
}
.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 75ms;
  transition-duration: 75ms;
  transition-timing-function: ease-out;
  > * {
    min-height: 0;
  }
  &.react-scan-expanded {
    grid-template-rows: 1fr;
    transition-duration: 100ms;
  }
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-content {
  syntax: "*";
  initial-value: "";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes countFlash {
  0% {
    background-color: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }
  100% {
    background-color: rgba(168, 85, 247, 0.1);
    transform: scale(1);
  }
}
@keyframes countFlashShake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px) scale(1.1);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-divide-y-reverse: 0;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-content: "";
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
    }
  }
}
`,so=async e=>{try{let t=await iq(e),r=`${t.htmlPreview}${t.stackString}`;if(!r.trim())return!1;return await navigator.clipboard.writeText(r),!0}catch{return!1}},sa=ty(()=>o6("absolute inset-0 flex items-center gap-x-2","translate-y-0","transition-transform duration-300",ao.value&&"-translate-y-[200%]")),sl=()=>{let e=e1(null),t=e1(null),[r,n]=eZ(null);tW(()=>{let e=c2.inspectState.value;"focused"===e.kind&&n(e.fiber)}),tW(()=>{let r=aw.value;to(()=>{var n,i;let o;if("focused"!==c2.inspectState.value.kind||!e.current||!t.current)return;let{totalUpdates:a,currentIndex:l,updates:s,isVisible:c,windowOffset:d}=r,u=Math.max(0,a-1),p=c?`#${d+l} Re-render`:u>0?`\xd7${u}`:"";if(u>0&&l>=0&&l<s.length){let e=null==(i=null==(n=s[l])?void 0:n.fiberInfo)?void 0:i.selfTime;o=e>0?e<.1-Number.EPSILON?"< 0.1ms":`${Number(e.toFixed(1))}ms`:void 0}e.current.dataset.text=p?` \u2022 ${p}`:"",t.current.dataset.text=o?` \u2022 ${o}`:""})});let i=e2(()=>{if(!r)return null;let{name:e,wrappers:t,wrapperTypes:n}=at(r),i=t.length?`${t.join("(")}(${e})${")".repeat(t.length)}`:null!=e?e:"",o=n[0];return ra("span",{title:i,className:"flex items-center gap-x-1",children:[null!=e?e:"Unknown",ra("span",{title:null==o?void 0:o.title,className:"flex items-center gap-x-1 text-[10px] text-purple-400",children:!!o&&ra(ey,{children:[ra("span",{className:o6("rounded py-[1px] px-1","truncate",o.compiler&&"bg-purple-800 text-neutral-400",!o.compiler&&"bg-neutral-700 text-neutral-300","memo"===o.type&&"bg-[#5f3f9a] text-white"),children:o.type},o.type),o.compiler&&ra("span",{className:"text-yellow-300",children:"✨"})]})}),n.length>1&&ra("span",{className:"text-[10px] text-neutral-400",children:["×",n.length-1]})]})},[r]);return ra("div",{className:sa,children:[i,ra("div",{className:"flex items-center gap-x-2 mr-auto text-xs text-[#888]",children:[ra("span",{ref:e,className:"with-data-text cursor-pointer !overflow-visible",title:"Click to toggle between rerenders and total renders"}),ra("span",{ref:t,className:"with-data-text !overflow-visible"})]})]})},ss=()=>{let e=((e,t,r=t)=>{let[n,i]=eZ(e);return eQ(()=>{if(e===n)return;let o=setTimeout(()=>i(e),e?t:r);return()=>clearTimeout(o)},[e,t,r]),n})("focused"===c2.inspectState.value.kind,150,0),t=tF(!1),r=()=>{ad.value={view:"none"},c2.inspectState.value={kind:"inspect-off"}},n=async()=>{let e=c2.inspectState.value;"focused"!==e.kind||!e.focusedDomElement||await so(e.focusedDomElement)&&(t.value=!0,setTimeout(()=>{t.value=!1,r()},600))},i=e1(n);if(i.current=n,eQ(()=>{let e=e=>{var t;let r,n=c2.inspectState.value;!("focused"!==n.kind||!n.focusedDomElement||"u">typeof window&&window.__REACT_GRAB__)&&(e.metaKey||e.ctrlKey)&&!e.shiftKey&&!e.altKey&&("c"===e.key||"KeyC"===e.code)&&((()=>{let e=document.activeElement;if(!e)return!1;let t=e.tagName;return!!("INPUT"===t||"TEXTAREA"===t||"SELECT"===t||e instanceof HTMLElement&&e.isContentEditable)})()||(r=null==(t=window.getSelection)?void 0:t.call(window))&&r.toString().length>0||(e.preventDefault(),e.stopImmediatePropagation(),i.current()))};return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0})}},[]),"notifications"===ad.value.view)return;let o="focused"===c2.inspectState.value.kind,a=(()=>{if("u"<typeof navigator)return!1;let e=navigator.platform||"";return e?/Mac|iPhone|iPad|iPod/i.test(e):/Mac|iPhone|iPad|iPod/i.test(navigator.userAgent)})()?"⌘C":"Ctrl+C";return ra("div",{className:"react-scan-header",children:[ra("div",{className:"relative flex-1 h-full",children:ra("div",{className:o6("react-scan-header-item is-visible",!e&&"!duration-0"),children:ra(sl,{})})}),o&&ra("button",{type:"button",title:`Copy element (${a})`,className:"react-scan-close-button",onClick:n,children:ra(i2,{name:t.value?"icon-check":"icon-copy",className:o6(t.value&&"text-green-500")})}),ra("button",{type:"button",title:"Close",className:"react-scan-close-button",onClick:r,children:ra(i2,{name:"icon-close"})})]})},sc=({className:e,...t})=>ra("div",{className:o6("react-scan-toggle",e),children:[ra("input",{type:"checkbox",...t}),ra("div",{})]}),sd=({fps:e})=>ra("div",{className:o6("flex items-center gap-x-1 px-2 w-full","h-6","rounded-md","font-mono leading-none","bg-[#141414]","ring-1 ring-white/[0.08]"),children:[ra("div",{style:{color:e<30?"#EF4444":e<50?"#F59E0B":"rgb(214,132,245)"},className:"text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",children:e}),ra("span",{className:"text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",children:"FPS"})]}),su=()=>{let[e,t]=eZ(null);return eQ(()=>{let e=setInterval(()=>{t(lM())},200);return()=>clearInterval(e)},[]),ra("div",{className:o6("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]","whitespace-nowrap text-sm text-white"),children:null===e?ra(ey,{children:"️"}):ra(sd,{fps:e})})},sp=e=>{},sh=class e extends Array{constructor(e=25){super(),iX(this,"capacity",e)}push(...e){let t=super.push(...e);for(;this.length>this.capacity;)this.shift();return t}static fromArray(t,r){let n=new e(r);return n.push(...t),n}},sm=new class{constructor(e){iX(this,"subscribers",new Set),iX(this,"currentValue"),this.currentValue=e}subscribe(e){return this.subscribers.add(e),e(this.currentValue),()=>{this.subscribers.delete(e)}}setState(e){this.currentValue=e,this.subscribers.forEach(t=>t(e))}getCurrentState(){return this.currentValue}}(new sh(150)),sf=new class{constructor(){iX(this,"channels",{})}publish(e,t,r=!0){let n=this.channels[t];if(!n){if(!r)return;this.channels[t]={callbacks:new sh(50),state:new sh(50)},this.channels[t].state.push(e);return}n.state.push(e),n.callbacks.forEach(t=>t(e))}getAvailableChannels(){return sh.fromArray(Object.keys(this.channels),50)}subscribe(e,t,r=!1){let n=()=>(r||this.channels[e].state.forEach(e=>{t(e)}),()=>{let r=this.channels[e].callbacks.filter(e=>e!==t);this.channels[e].callbacks=sh.fromArray(r,50)}),i=this.channels[e];return i?i.callbacks.push(t):(this.channels[e]={callbacks:new sh(50),state:new sh(50)},this.channels[e].callbacks.push(t)),n()}updateChannelState(e,t,r=!0){let n=this.channels[e];if(!n){if(!r)return;let n=new sh(50),i={callbacks:new sh(50),state:n};this.channels[e]=i,i.state=t(n);return}n.state=t(n.state)}getChannelState(e){var t;return null!=(t=this.channels[e].state)?t:new sh(50)}},sg={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},sv=[/Provider$/,/^Provider$/,/^Context$/],sw=[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],sb=[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],sx=[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],sy=[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/],sk=(e,t=sg)=>{let r=[];return t.skipProviders&&r.push(...sv),t.skipHocs&&r.push(...sw),t.skipContainers&&r.push(...sb),t.skipUtilities&&r.push(...sx),t.skipBoundaries&&r.push(...sy),!r.some(t=>t.test(e))},s_=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],sN=e=>{var t,r;for(let t=0;t<s_.length;t++)if(s_[t].test(e))return!0;let n=!/[aeiou]/i.test(e),i=(null!=(r=null==(t=e.match(/\d/g))?void 0:t.length)?r:0)>e.length/2,o=/^[a-z]+$/.test(e),a=/[$_]{2,}/.test(e);return Number(n)+Number(i)+Number(o)+Number(a)>=2},sS=e=>{let t=I(e);return t?t.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,"$<inner>"):""},sE="never-hidden",sC=null,sT=new sh(25),sA=(e,t)=>{let r=null,n=t=>{switch(e){case"pointer":if("start"===t.phase)return"pointerup";if(t.target instanceof HTMLInputElement||t.target instanceof HTMLSelectElement)return"change";return"click";case"keyboard":if("start"===t.phase)return"keydown";return"change"}},i={current:{kind:"uninitialized-stage",interactionUUID:i0(),stageStart:Date.now(),interactionType:e}},o=r=>{var o,l;if(r.composedPath().some(e=>e instanceof Element&&"react-scan-toolbar-root"===e.id)||(Date.now()-i.current.stageStart>2e3&&(i.current={kind:"uninitialized-stage",interactionUUID:i0(),stageStart:Date.now(),interactionType:e}),"uninitialized-stage"!==i.current.kind))return;let s=performance.now();null==(o=null==t?void 0:t.onStart)||o.call(t,i.current.interactionUUID);let c=(e=>{var t;let r=aQ(e);if(!r)return;let n=r?I(null==r?void 0:r.type):"N/A";if(n||(n=null!=(t=((e,t=()=>!0)=>{let r=e;for(;r;){let e=I(r.type);if(e&&t(e))return e;r=r.return}return null})(r,e=>e.length>2))?t:"N/A"),n)return{componentPath:((e,t=sg)=>{if(!e||!I(e.type))return[];let r=[],n=e;for(;n.return;){let e=sS(n.type);e&&!sN(e)&&sk(e,t)&&e.toLowerCase()!==e&&r.push(e),n=n.return}let i=Array(r.length);for(let e=0;e<r.length;e++)i[e]=r[r.length-e-1];return i})(r),childrenTree:{},componentName:n,elementFiber:r}})(r.target);if(!c){null==(l=null==t?void 0:t.onError)||l.call(t,i.current.interactionUUID);return}let d={},u=sR(d);i.current={...i.current,interactionType:e,blockingTimeStart:Date.now(),childrenTree:c.childrenTree,componentName:c.componentName,componentPath:c.componentPath,fiberRenders:d,kind:"interaction-start",interactionStartDetail:s,stopListeningForRenders:u};let p=n({phase:"end",target:r.target});document.addEventListener(p,a,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(p,a)})};document.addEventListener(n({phase:"start"}),o,{capture:!0});let a=(n,o,a)=>{var l;if("interaction-start"!==i.current.kind&&o===r){if("pointer"===e&&n.target instanceof HTMLSelectElement){i.current={kind:"uninitialized-stage",interactionUUID:i0(),stageStart:Date.now(),interactionType:e};return}null==(l=null==t?void 0:t.onError)||l.call(t,i.current.interactionUUID),i.current={kind:"uninitialized-stage",interactionUUID:i0(),stageStart:Date.now(),interactionType:e},sp("pointer -> click");return}r=o,(({onMicroTask:e,onRAF:t,onTimeout:r,abort:n})=>{queueMicrotask(()=>{(null==n?void 0:n())===!0||e()&&requestAnimationFrame(()=>{(null==n?void 0:n())===!0||t()&&setTimeout(()=>{(null==n?void 0:n())!==!0&&r()},0)})})})({abort:a,onMicroTask:()=>"uninitialized-stage"!==i.current.kind&&(i.current={...i.current,kind:"js-end-stage",jsEndDetail:performance.now()},!0),onRAF:()=>{var r;return"js-end-stage"!==i.current.kind&&"raf-stage"!==i.current.kind?(null==(r=null==t?void 0:t.onError)||r.call(t,i.current.interactionUUID),sp("bad transition to raf"),i.current={kind:"uninitialized-stage",interactionUUID:i0(),stageStart:Date.now(),interactionType:e},!1):(i.current={...i.current,kind:"raf-stage",rafStart:performance.now()},!0)},onTimeout:()=>{var r;if("raf-stage"!==i.current.kind){null==(r=null==t?void 0:t.onError)||r.call(t,i.current.interactionUUID),i.current={kind:"uninitialized-stage",interactionUUID:i0(),stageStart:Date.now(),interactionType:e},sp("raf->timeout");return}let n=Date.now(),o=Object.freeze({...i.current,kind:"timeout-stage",blockingTimeEnd:n,commitEnd:performance.now()});i.current={kind:"uninitialized-stage",interactionUUID:i0(),stageStart:n,interactionType:e};let a=!1,l=e=>{var r;a=!0;let n={detailedTiming:o,latency:"auto-complete-race"===e.kind?e.detailedTiming.commitEnd-e.detailedTiming.interactionStartDetail:e.entry.latency,completedAt:Date.now(),flushNeeded:!0};null==(r=null==t?void 0:t.onComplete)||r.call(t,o.interactionUUID,n,e);let i=sT.filter(e=>e.interactionUUID!==o.interactionUUID);return sT=sh.fromArray(i,25),n},s={completeInteraction:l,endDateTime:Date.now(),startDateTime:o.blockingTimeStart,type:e,interactionUUID:o.interactionUUID};if(sT.push(s),sM())setTimeout(()=>{if(a)return;l({kind:"auto-complete-race",detailedTiming:o,interactionUUID:o.interactionUUID});let e=sT.filter(e=>e.interactionUUID!==o.interactionUUID);sT=sh.fromArray(e,25)},1e3);else{let e=sT.filter(e=>e.interactionUUID!==o.interactionUUID);sT=sh.fromArray(e,25),l({kind:"auto-complete-race",detailedTiming:o,interactionUUID:o.interactionUUID})}}})},l=e=>{let t=i0();a(e,t,()=>t!==r)};return"keyboard"===e&&document.addEventListener("keypress",l),()=>{document.removeEventListener(n({phase:"start"}),o,{capture:!0}),document.removeEventListener("keypress",l)}},sz=e=>{var t;return null==(t=$(e,e=>{if(A(e))return!0}))?void 0:t.stateNode},sM=()=>"PerformanceEventTiming"in globalThis,sR=e=>{let t=t=>{var r,n,i,o,a,l,s;let c=I(t.type);if(!c)return;let d=e[c];if(!d){let n=new Set,i=t.return&&a2(t.return),o=i&&I(i[0]);o&&n.add(o);let{selfTime:a,totalTime:l}=O(t),s=lN(t),d={current:[],changes:new Set,changesCounts:new Map},u={fiberProps:s.fiberProps||d,fiberState:s.fiberState||d,fiberContext:s.fiberContext||d};e[c]={renderCount:1,hasMemoCache:P(t),wasFiberRenderMount:s$(t),parents:n,selfTime:a,totalTime:l,nodeInfo:[{element:sz(t),name:null!=(r=I(t.type))?r:"Unknown",selfTime:O(t).selfTime}],changes:u};return}if(null==(i=null==(n=a2(t))?void 0:n[0])?void 0:i.type){let e=t.return&&a2(t.return),r=e&&I(e[0]);r&&d.parents.add(r)}let{selfTime:u,totalTime:p}=O(t),h=lN(t),m={current:[],changes:new Set,changesCounts:new Map};d.wasFiberRenderMount=d.wasFiberRenderMount||s$(t),d.hasMemoCache=d.hasMemoCache||P(t),d.changes={fiberProps:sj((null==(o=d.changes)?void 0:o.fiberProps)||m,h.fiberProps||m),fiberState:sj((null==(a=d.changes)?void 0:a.fiberState)||m,h.fiberState||m),fiberContext:sj((null==(l=d.changes)?void 0:l.fiberContext)||m,h.fiberContext||m)},d.renderCount+=1,d.selfTime+=u,d.totalTime+=p,d.nodeInfo.push({element:sz(t),name:null!=(s=I(t.type))?s:"Unknown",selfTime:O(t).selfTime})};return c2.interactionListeningForRenders=t,()=>{c2.interactionListeningForRenders===t&&(c2.interactionListeningForRenders=null)}},sj=(e,t)=>{let r={current:[...e.current],changes:new Set,changesCounts:new Map};for(let e of t.current)r.current.some(t=>t.name===e.name)||r.current.push(e);for(let n of t.changes)if("string"==typeof n||"number"==typeof n){r.changes.add(n);let i=e.changesCounts.get(n)||0,o=t.changesCounts.get(n)||0;r.changesCounts.set(n,i+o)}return r},s$=e=>{if(!e.alternate)return!0;let t=e.alternate,r=t&&null!=t.memoizedState&&null!=t.memoizedState.element&&!0!==t.memoizedState.isDehydrated,n=null!=e.memoizedState&&null!=e.memoizedState.element&&!0!==e.memoizedState.isDehydrated;return!r&&n},sF=e=>{let t,r=new Set,n=(e,n)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=n?n:"object"!=typeof i||null===i)?i:Object.assign({},t,i),r.forEach(r=>r(t,e))}},i=()=>t,o={setState:n,getState:i,getInitialState:()=>a,subscribe:(e,n)=>{let i,o;n?(i=e,o=n):o=e;let a=i?i(t):void 0,l=(e,t)=>{if(i){let r=i(e),n=i(t);Object.is(a,r)||(a=r,o(r,n))}else o(e,t)};return r.add(l),()=>r.delete(l)}},a=t=e(n,i,o);return o},sD=e=>e?sF(e):sF,sO=null;sD()(e=>({state:{events:[]},actions:{addEvent:t=>{e(e=>({state:{events:[...e.state.events,t]}}))},clear:()=>{e({state:{events:[]}})}}}));var sP=sD()((e,t)=>{let r=new Set;return{state:{events:new sh(200)},actions:{addEvent:n=>{r.forEach(e=>e(n));let i=[...t().state.events,n],o=new Set;i.forEach(e=>{if("interaction"!==e.kind){let t;(t=i.find(t=>{if("long-render"!==t.kind&&t.id!==e.id&&(e.data.startAt<=t.data.startAt&&e.data.endAt<=t.data.endAt&&e.data.endAt>=t.data.startAt||t.data.startAt<=e.data.startAt&&t.data.endAt>=e.data.startAt||e.data.startAt<=t.data.startAt&&e.data.endAt>=t.data.endAt))return!0}))&&(()=>{o.add(e.id)})(t)}});let a=i.filter(e=>!o.has(e.id));e(()=>({state:{events:sh.fromArray(a,200)}}))},addListener:e=>(r.add(e),()=>{r.delete(e)}),clear:()=>{e({state:{events:new sh(200)}})}}}}),sL=null,sI=null,sH=null,sW=[],sU=e=>{var t;let r=e.filter(e=>e.length>2);return 0===r.length?null!=(t=e.at(-1))?t:"Unknown":r.at(-1)},sB=e=>{switch(e.kind){case"interaction":{let{renderTime:t,otherJSTime:r,framePreparation:n,frameConstruction:i,frameDraw:o}=e;return t+r+n+i+(null!=o?o:0)}case"dropped-frames":return e.otherTime+e.renderTime}},sV=e=>{let t=sB(e.timing);switch(e.kind){case"interaction":if(t<200)return"low";if(t<500)return"needs-improvement";return"high";case"dropped-frames":if(t<50)return"low";if(t<150)return"needs-improvement";return"high"}},sq=eO(null),sK=({size:e=24,className:t})=>ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:o6(["lucide lucide-chevron-right",t]),children:ra("path",{d:"m9 18 6-6-6-6"})}),sG=({className:e="",size:t=24,events:r=[]})=>{let n=r.includes(!0),i=r.filter(e=>e).length,o=n?Math.max(.6*t,14):Math.max(.4*t,6);return ra("div",{className:"relative",children:[ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`lucide lucide-bell ${e}`,children:[ra("path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}),ra("path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"})]}),r.length>0&&i>0&&c5.options.value.showNotificationCount&&ra("div",{className:o6(["absolute",n?"-top-2.5 -right-2.5":"-top-1 -right-1","rounded-full","flex items-center justify-center","text-[8px] font-medium text-white","aspect-square",n?"bg-red-500/90":"bg-purple-500/90"]),style:{width:`${o}px`,height:`${o}px`,padding:n?"0.5px":"0"},children:n&&(i>99?">99":i)})]})},sX=({className:e="",size:t=24})=>ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[ra("path",{d:"M18 6 6 18"}),ra("path",{d:"m6 6 12 12"})]}),sY=({className:e="",size:t=24})=>ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[ra("path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}),ra("path",{d:"M16 9a5 5 0 0 1 0 6"}),ra("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"})]}),sJ=({className:e="",size:t=24})=>ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[ra("path",{d:"M16 9a5 5 0 0 1 .95 2.293"}),ra("path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}),ra("path",{d:"m2 2 20 20"}),ra("path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}),ra("path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"})]}),sZ=({size:e=24,className:t})=>ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:o6(["lucide lucide-arrow-left",t]),children:[ra("path",{d:"m12 19-7-7 7-7"}),ra("path",{d:"M19 12H5"})]}),sQ=({className:e="",size:t=24})=>ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[ra("path",{d:"M14 4.1 12 6"}),ra("path",{d:"m5.1 8-2.9-.8"}),ra("path",{d:"m6 12-1.9 2"}),ra("path",{d:"M7.2 2.2 8 5.1"}),ra("path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"})]}),s0=({className:e="",size:t=24})=>ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[ra("path",{d:"M10 8h.01"}),ra("path",{d:"M12 12h.01"}),ra("path",{d:"M14 8h.01"}),ra("path",{d:"M16 12h.01"}),ra("path",{d:"M18 8h.01"}),ra("path",{d:"M6 8h.01"}),ra("path",{d:"M7 16h10"}),ra("path",{d:"M8 12h.01"}),ra("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"})]}),s1=({className:e="",size:t=24})=>ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,style:{transform:"rotate(180deg)"},children:[ra("circle",{cx:"12",cy:"12",r:"10"}),ra("path",{d:"m4.9 4.9 14.2 14.2"})]}),s2=({className:e="",size:t=24})=>ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[ra("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),ra("polyline",{points:"16 17 22 17 22 11"})]}),s5=({children:e,triggerContent:t,wrapperProps:r})=>{var n;let[i,o]=eZ("closed"),[a,l]=eZ(null),[s,c]=eZ({width:window.innerWidth,height:window.innerHeight}),d=e1(null),u=e1(null),p=e4(cG),h=e1(!1);eQ(()=>{let e=()=>{c({width:window.innerWidth,height:window.innerHeight}),m()};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let m=()=>{if(d.current&&p){let e=d.current.getBoundingClientRect(),t=p.getBoundingClientRect(),r=e.left+e.width/2,n=e.top;l(new DOMRect(r-t.left,n-t.top,e.width,e.height))}};eQ(()=>{m()},[d.current]),eQ(()=>{if("opening"===i){let e=setTimeout(()=>o("open"),120);return()=>clearTimeout(e)}if("closing"===i){let e=setTimeout(()=>o("closed"),120);return()=>clearTimeout(e)}},[i]),eQ(()=>{let e=setInterval(()=>{h.current||"closed"===i||o("closing")},1e3);return()=>clearInterval(e)},[i]);let f=(()=>{var e;if(!a||!p)return{top:0,left:0};let t=p.getBoundingClientRect(),r=(null==(e=u.current)?void 0:e.offsetHeight)||40,n=a.x+t.left,i=a.y+t.top,o=n,l=i-4;return o-87.5<5?o=92.5:o+87.5>s.width-5&&(o=s.width-5-87.5),l-r<5&&(l=i+a.height+4),{top:l-t.top,left:o-t.left}})();return ra(ey,{children:[p&&a&&"closed"!==i&&((n=eb(t4,{__v:ra("div",{ref:u,className:o6(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg","transition-[opacity] duration-120 ease-out",'after:content-[""] after:absolute after:top-[100%]',"after:left-1/2 after:-translate-x-1/2","after:w-[10px] after:h-[6px]","after:border-l-[5px] after:border-l-transparent","after:border-r-[5px] after:border-r-transparent","after:border-t-[6px] after:border-t-white","pointer-events-none","opening"===i||"closing"===i?"opacity-0":"opacity-100"]),style:{top:f.top+"px",left:f.left+"px",transform:`translate(-50%, calc(-100% - 4px)) scale(${"open"===i?1:.97})`,minWidth:"175px",willChange:"opacity, transform"},children:e}),h:p})).containerInfo=p,n),ra("div",{ref:d,onMouseEnter:()=>{h.current=!0,m(),o("opening")},onMouseLeave:()=>{h.current=!1,m(),o("closing")},...r,children:t})]})},s4=({selectedEvent:e})=>{let{notificationState:t,setNotificationState:r,setRoute:n}=e4(sq);return ra("div",{className:o6(["flex w-full justify-between items-center px-3 py-2 text-xs"]),children:[ra("div",{className:o6(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]),children:[ra("button",{onClick:()=>{n({route:"render-visualization",routeMessage:null})},className:o6(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1","render-visualization"===t.route||"render-explanation"===t.route?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Ranked"}),ra("button",{onClick:()=>{n({route:"other-visualization",routeMessage:null})},className:o6(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1","other-visualization"===t.route?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Overview"}),ra("button",{onClick:()=>{n({route:"optimize",routeMessage:null})},className:o6(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1","optimize"===t.route?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:ra("span",{children:"Prompts"})})]}),ra(s5,{triggerContent:ra("button",{onClick:()=>{r(e=>{e.audioNotificationsOptions.enabled&&"closed"!==e.audioNotificationsOptions.audioContext.state&&e.audioNotificationsOptions.audioContext.close();let t=e.audioNotificationsOptions.enabled;localStorage.setItem("react-scan-notifications-audio",String(!t));let r=new AudioContext;return e.audioNotificationsOptions.enabled||i1(r),t&&r.close(),{...e,audioNotificationsOptions:t?{audioContext:null,enabled:!1}:{audioContext:r,enabled:!0}}})},className:"ml-auto",children:ra("div",{className:o6(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]),children:[ra("span",{children:"Alerts"}),t.audioNotificationsOptions.enabled?ra(sY,{size:16,className:"text-[#6E6E77]"}):ra(sJ,{size:16,className:"text-[#6E6E77]"})]})}),children:ra(ey,{children:"Play a chime when a slowdown is recorded"})})]})},s3=e=>{let t="";return e.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,30).filter(e=>e.totalTime>5).forEach(e=>{let r="";r+="Component Name:",r+=e.name,r+="\n",r+=`Rendered: ${e.count} times
`,r+=`Sum of self times for ${e.name} is ${e.totalTime.toFixed(0)}ms
`,e.changes.props.length>0&&(r+=`Changed props for all ${e.name} instances ("name:count" pairs)
`,e.changes.props.forEach(e=>{r+=`${e.name}:${e.count}x
`})),e.changes.state.length>0&&(r+=`Changed state for all ${e.name} instances ("hook index:count" pairs)
`,e.changes.state.forEach(e=>{r+=`${e.index}:${e.count}x
`})),e.changes.context.length>0&&(r+=`Changed context for all ${e.name} instances ("context display name (if exists):count" pairs)
`,e.changes.context.forEach(e=>{r+=`${e.name}:${e.count}x
`})),t+=r,t+="\n"}),t},s6=(e,t)=>(()=>{switch(e){case"data":switch(t.kind){case"dropped-frames":return(({renderTime:e,otherTime:t,formattedReactData:r})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${r}`)({formattedReactData:s3(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return(({renderTime:e,eHandlerTimeExcludingRenders:t,toRafTime:r,commitTime:n,framePresentTime:i,formattedReactData:o})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${t.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${r.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${n.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${null===i?"":`- how long it took from dom commit for the frame to be presented: ${i.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${o}`)({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:s3(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),toRafTime:t.timing.framePreparation})}case"explanation":switch(t.kind){case"dropped-frames":return(({renderTime:e,otherTime:t,formattedReactData:r})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${r}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`)({formattedReactData:s3(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return(({interactionType:e,name:t,time:r,renderTime:n,eHandlerTimeExcludingRenders:i,toRafTime:o,commitTime:a,framePresentTime:l,formattedReactData:s})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${e} on a component named ${t}. This means, roughly, the component that handled the ${e} event was named ${t}.

We have a set of high level, and low level data about the performance issue.

The click took ${r.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${n.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${i.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${o.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${a.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${null===l?"":`- how long it took from dom commit for the frame to be presented: ${l.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${s}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`)({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:s3(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:sU(t.componentPath),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),time:sB(t.timing),toRafTime:t.timing.framePreparation})}case"fix":switch(t.kind){case"dropped-frames":return(({renderTime:e,otherTime:t,formattedReactData:r})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time: ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${r}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`)({formattedReactData:s3(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return(({interactionType:e,name:t,componentPath:r,time:n,renderTime:i,eHandlerTimeExcludingRenders:o,toRafTime:a,commitTime:l,framePresentTime:s,formattedReactData:c})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${e} on the component named ${t}. This component has the following ancestors ${r}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${n.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${i.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${o.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${a.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${l.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${null===s?"":`- how long it took from dom commit for the frame to be presented: ${s.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${c}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`)({commitTime:t.timing.frameConstruction,componentPath:t.componentPath.join(">"),eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:s3(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:sU(t.componentPath),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),time:sB(t.timing),toRafTime:t.timing.framePreparation})}}})(),s8=({selectedEvent:e})=>{let[t,r]=eZ("fix"),[n,i]=eZ(!1);return ra("div",{className:o6(["w-full h-full"]),children:[ra("div",{className:o6(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]),children:[ra("div",{className:o6(["bg-[#18181B] p-1 rounded-t-sm"]),children:ra("div",{className:o6(["flex items-center gap-x-1"]),children:[ra("button",{onClick:()=>r("fix"),className:o6(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm","fix"===t?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Fix"}),ra("button",{onClick:()=>r("explanation"),className:o6(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm","explanation"===t?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Explanation"}),ra("button",{onClick:()=>r("data"),className:o6(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm","data"===t?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Data"})]})}),ra("div",{className:o6(["overflow-y-auto h-full"]),children:ra("pre",{className:o6(["p-2 h-full","whitespace-pre-wrap break-words","text-gray-300 font-mono "]),children:s6(t,e)})})]}),ra("button",{onClick:async()=>{let r=s6(t,e);await navigator.clipboard.writeText(r),i(!0),setTimeout(()=>i(!1),1e3)},className:o6(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm","hover:text-white transition-colors duration-200","flex items-center justify-center gap-x-2 text-xs"]),children:[ra("span",{children:n?"Copied!":"Copy Prompt"}),ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:o6(["transition-transform duration-200",n&&"scale-110"]),children:n?ra("path",{d:"M20 6L9 17l-5-5"}):ra(ey,{children:[ra("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),ra("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})]})},s7=({selectedEvent:e})=>{var t,r;let[n]=eZ(null!=(t=c6())&&t),{notificationState:i}=e4(sq),[o,a]=eZ((null==(r=i.routeMessage)?void 0:r.name)?[i.routeMessage.name]:[]),l=((e,t)=>{switch(e.kind){case"dropped-frames":return[...t?[{name:"Total Processing Time",time:sB(e.timing),color:"bg-red-500",kind:"total-processing-time"}]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"},{name:"JavaScript, DOM updates, Draw Frame",time:e.timing.otherTime,color:"bg-[#4b4b4b]",kind:"other-frame-drop"}]];case"interaction":return[...t?[]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"}],{name:t?"React Renders, Hooks, Other JavaScript":"JavaScript/React Hooks ",time:e.timing.otherJSTime,color:"bg-[#EFD81A]",kind:"other-javascript"},{name:"Update DOM and Draw New Frame",time:sB(e.timing)-e.timing.renderTime-e.timing.otherJSTime,color:"bg-[#1D3A66]",kind:"other-not-javascript"}]}})(e,n),s=e4(cG);eQ(()=>{var e;if(null==(e=i.routeMessage)?void 0:e.name){let e=null==s?void 0:s.querySelector("#overview-scroll-container"),t=null==s?void 0:s.querySelector(`#react-scan-overview-bar-${i.routeMessage.name}`);if(e&&t){let r=t.getBoundingClientRect().top,n=e.getBoundingClientRect().top;e.scrollTop=e.scrollTop+(r-n)}}},[i.route]),eQ(()=>{"other-visualization"===i.route&&a(e=>{var t;return(null==(t=i.routeMessage)?void 0:t.name)?[i.routeMessage.name]:e})},[i.route]);let c=l.reduce((e,t)=>e+t.time,0);return ra("div",{className:"rounded-sm border border-zinc-800 text-xs",children:[ra("div",{className:"p-2 border-b border-zinc-800 bg-zinc-900/50",children:ra("div",{className:"flex items-center justify-between",children:[ra("h3",{className:"text-xs font-medium",children:"What was time spent on?"}),ra("span",{className:"text-xs text-zinc-400",children:["Total: ",c.toFixed(0),"ms"]})]})}),ra("div",{className:"divide-y divide-zinc-800",children:l.map(t=>{let r=o.includes(t.kind);return ra("div",{id:`react-scan-overview-bar-${t.kind}`,children:[ra("button",{onClick:()=>a(e=>e.includes(t.kind)?e.filter(e=>e!==t.kind):[...e,t.kind]),className:"w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",children:ra("div",{className:"flex-1",children:[ra("div",{className:"flex items-center justify-between mb-2",children:[ra("div",{className:"flex items-center gap-0.5",children:[ra("svg",{className:`h-4 w-4 text-zinc-400 transition-transform ${r?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:ra("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),ra("span",{className:"font-medium flex items-center text-left",children:t.name})]}),ra("span",{className:" text-zinc-400",children:[t.time.toFixed(0),"ms"]})]}),ra("div",{className:"h-1 bg-zinc-800 rounded-full overflow-hidden",children:ra("div",{className:`h-full ${t.color} transition-all`,style:{width:`${t.time/c*100}%`}})})]})}),r&&ra("div",{className:"bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",children:ra("p",{className:" text-zinc-400 mb-4 text-xs",children:(()=>{switch(e.kind){case"interaction":switch(t.kind){case"render":return ra(cn,{input:ct(e)});case"other-javascript":return ra(cn,{input:cr(e)});case"other-not-javascript":return ra(cn,{input:s9(e)})}case"dropped-frames":switch(t.kind){case"total-processing-time":return ra(cn,{input:{kind:"total-processing",data:{time:sB(e.timing)}}});case"render":return ra(ey,{children:ra(cn,{input:{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,3).map(t=>({name:t.name,percentage:t.totalTime/sB(e.timing)}))}}})});case"other-frame-drop":return ra(cn,{input:{kind:"other"}})}}})()})})]},t.kind)})})]})},s9=e=>{let t=e.groupedFiberRenders.reduce((e,t)=>e+t.count,0),r=e.timing.renderTime,n=sB(e.timing);return t>100?{kind:"high-render-count-update-dom-draw-frame",data:{count:t,percentageOfTotal:r/n*100,copyButton:ra(ce,{})}}:{kind:"update-dom-draw-frame",data:{copyButton:ra(ce,{})}}},ce=()=>{let[e,t]=eZ(!1),{notificationState:r}=e4(sq);return ra("button",{onClick:async()=>{r.selectedEvent&&(await navigator.clipboard.writeText(s6("explanation",r.selectedEvent)),t(!0),setTimeout(()=>t(!1),1e3))},className:"bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",children:[ra("span",{children:e?"Copied!":"Copy Prompt"}),ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:o6(["transition-transform duration-200",e&&"scale-110"]),children:e?ra("path",{d:"M20 6L9 17l-5-5"}):ra(ey,{children:[ra("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),ra("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})},ct=e=>e.timing.renderTime/sB(e.timing)>.3?{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,3).map(t=>({percentage:t.totalTime/sB(e.timing),name:t.name}))}}:{kind:"other"},cr=e=>{let t=e.groupedFiberRenders.reduce((e,t)=>e+t.count,0);return e.timing.otherJSTime/sB(e.timing)<.2?{kind:"js-explanation-base"}:e.groupedFiberRenders.find(e=>e.count>200)||e.groupedFiberRenders.reduce((e,t)=>e+t.count,0)>500?{kind:"high-render-count-high-js",data:{renderCount:t,topByCount:e.groupedFiberRenders.filter(e=>e.count>100).toSorted((e,t)=>t.count-e.count).slice(0,3)}}:e.timing.otherJSTime/sB(e.timing)>.3?e.timing.renderTime>.2?{kind:"js-explanation-base"}:{kind:"low-render-count-high-js",data:{renderCount:t}}:{kind:"js-explanation-base"}},cn=({input:e})=>{switch(e.kind){case"total-processing":return ra("div",{className:o6(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[ra("p",{children:["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ","<=16ms"]}),ra("p",{children:'To debug the issue, check the "Ranked" tab to see if there are significant component renders'}),ra("p",{children:"On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build"}),ra("p",{children:["To understand precisely what caused the slowdown while in production, use the ",ra("strong",{children:"Chrome profiler"})," and analyze the function call times."]}),ra("p",{})]});case"render":return ra("div",{className:o6(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[ra("p",{children:"This is the time it took React to run components, and internal logic to handle the output of your component."}),ra("div",{className:o6(["flex flex-col"]),children:[ra("p",{children:"The slowest components for this time period were:"}),e.data.topByTime.map(e=>ra("div",{children:[ra("strong",{children:e.name}),":"," ",(100*e.percentage).toFixed(0),"% of total"]},e.name))]}),ra("p",{children:'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab'}),ra("p",{children:'The "Ranked" tab shows the render times of every component.'}),ra("p",{children:"The render times of the same components are grouped together into one bar."}),ra("p",{children:"Clicking the component will show you what props, state, or context caused the component to re-render."})]});case"js-explanation-base":return ra("div",{className:o6(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[ra("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),ra("p",{children:["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ",ra("code",{children:"useEffect"}),"'s or a large number of useEffect's called, but this can also be JavaScript event handlers (",ra("code",{children:"'onclick'"}),", ",ra("code",{children:"'onchange'"}),") that performed expensive computation."]}),ra("p",{children:"If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run."}),ra("p",{children:["You should profile your app using the"," ",ra("strong",{children:"Chrome DevTools profiler"})," to learn exactly which functions took the longest to execute."]})]});case"high-render-count-high-js":return ra("div",{className:o6(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[ra("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),0===e.data.renderCount?ra(ey,{children:[ra("p",{children:"There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API"}),ra("p",{children:["You should try to reproduce the slowdown while profiling your website with the",ra("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]}):ra(ey,{children:[" ",ra("p",{children:["There were ",ra("strong",{children:e.data.renderCount})," renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ",ra("code",{children:"useEffects"}),"."]}),ra("div",{className:o6(["flex flex-col"]),children:[ra("p",{children:"You should try optimizing the renders of:"}),e.data.topByCount.map(e=>ra("div",{children:["- ",ra("strong",{children:e.name})," (rendered ",e.count,"x)"]},e.name))]}),"and then checking if the problem still exists.",ra("p",{children:["You can also try profiling your app using the"," ",ra("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]})]});case"low-render-count-high-js":return ra("div",{className:o6(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[ra("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),ra("p",{children:["There were only ",ra("strong",{children:e.data.renderCount})," renders detected, which means either you had very expensive hooks like"," ",ra("code",{children:"useEffect"}),"/",ra("code",{children:"useLayoutEffect"}),", or there is other JavaScript running during this interaction that took up the majority of the time."]}),ra("p",{children:["To understand precisely what caused the slowdown, use the"," ",ra("strong",{children:"Chrome profiler"})," and analyze the function call times."]})]});case"high-render-count-update-dom-draw-frame":return ra("div",{className:o6(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[ra("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),ra("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),ra("p",{children:["During this interaction, there were"," ",ra("strong",{children:e.data.count})," renders, which was"," ",ra("strong",{children:[e.data.percentageOfTotal.toFixed(0),"%"]})," of the time spent processing"]}),ra("p",{children:"The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame."}),ra("p",{children:'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.'}),ra("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),ra("p",{children:e.data.copyButton}),ra("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),ra("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"update-dom-draw-frame":return ra("div",{className:o6(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[ra("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),ra("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),ra("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),ra("p",{children:e.data.copyButton}),ra("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),ra("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"other":return ra("div",{className:o6(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[ra("p",{children:["This is the time it took to run everything other than React renders. This can be hooks like ",ra("code",{children:"useEffect"}),", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."]}),ra("p",{children:["To get a better picture of what happened, profile your app using the"," ",ra("strong",{children:"Chrome profiler"})," when the performance problem arises."]})]})}},ci=null,co=null,ca=tg({kind:"idle",current:null}),cl=null,cs=0,cc=1/60,cd=()=>{cl&&cancelAnimationFrame(cl),cl=requestAnimationFrame(e=>{if(!ci||!co)return;let t=cs?Math.min((e-cs)/1e3,.05):cc;cs=e;let r=1.8*t;co.clearRect(0,0,ci.width,ci.height);let n="hsl(271, 76%, 53%)",i=ca.value,{alpha:o,current:a}=(()=>{var e,t,r;switch(i.kind){case"transition":{let t=(null==(e=i.current)?void 0:e.alpha)&&i.current.alpha>0?i.current:i.transitionTo;return{alpha:t?t.alpha:0,current:t}}case"move-out":return{alpha:null!=(r=null==(t=i.current)?void 0:t.alpha)?r:0,current:i.current};case"idle":return{alpha:1,current:i.current}}})();switch(null==a||a.rects.forEach(e=>{co&&(co.shadowColor=n,co.shadowBlur=6,co.strokeStyle=n,co.lineWidth=2,co.globalAlpha=o,co.beginPath(),co.rect(e.left,e.top,e.width,e.height),co.stroke(),co.shadowBlur=0,co.beginPath(),co.rect(e.left,e.top,e.width,e.height),co.stroke())}),i.kind){case"move-out":if(0===i.current.alpha){ca.value={kind:"idle",current:null},cs=0;return}i.current.alpha<=.01&&(i.current.alpha=0),i.current.alpha=Math.max(0,i.current.alpha-r),cd();return;case"transition":if(i.current&&i.current.alpha>0){i.current.alpha=Math.max(0,i.current.alpha-r),cd();return}if(1===i.transitionTo.alpha){ca.value={kind:"idle",current:i.transitionTo},cs=0;return}i.transitionTo.alpha=Math.min(i.transitionTo.alpha+r,1),cd();case"idle":cs=0;return}})},cu=null;function cp(){(null==ci?void 0:ci.parentNode)&&ci.parentNode.removeChild(ci),ci=null,co=null}var ch=()=>{var e,t;let r=ca.value.current?ca.value.current:"transition"===ca.value.kind?ca.value.transitionTo:null;if(r){if("transition"===ca.value.kind){ca.value={kind:"move-out",current:(null==(e=ca.value.current)?void 0:e.alpha)===0?ca.value.transitionTo:null!=(t=ca.value.current)?t:ca.value.transitionTo};return}ca.value={kind:"move-out",current:{alpha:0,...r}}}},cm=({selectedEvent:e})=>{let t=sB(e.timing),r=t-e.timing.renderTime,[n]=eZ(c6()),i=e.groupedFiberRenders.map(e=>({event:e,kind:"render",totalTime:n?e.count:e.totalTime})),o=(()=>{switch(e.kind){case"dropped-frames":return e.timing.renderTime/t<.1;case"interaction":return(e.timing.otherJSTime+e.timing.renderTime)/t<.2}})();"interaction"!==e.kind||n||i.push({kind:"other-javascript",totalTime:e.timing.otherJSTime}),o&&!n&&("interaction"===e.kind?i.push({kind:"other-not-javascript",totalTime:sB(e.timing)-e.timing.renderTime-e.timing.otherJSTime}):i.push({kind:"other-frame-drop",totalTime:r}));let a=e1({lastCallAt:null,timer:null}),l=i.reduce((e,t)=>e+t.totalTime,0);return ra("div",{className:o6(["flex flex-col h-full w-full gap-y-1"]),children:[n&&0===i.length?ra("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[ra("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No data available"}),ra("p",{className:"text-x w-full text-lefts",children:"No data was collected during this period"})]}):0===i.length?ra("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[ra("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No renders collected"}),ra("p",{className:"text-x w-full text-lefts",children:"There were no renders during this period"})]}):void 0,i.toSorted((e,t)=>t.totalTime-e.totalTime).map(e=>ra(cf,{bars:i,bar:e,debouncedMouseEnter:a,totalBarTime:l,isProduction:n},"render"===e.kind?e.event.id:e.kind))]})},cf=({bar:e,debouncedMouseEnter:t,totalBarTime:r,isProduction:n,bars:i,depth:o=0})=>{var a;let{setNotificationState:l,setRoute:s}=e4(sq),[c,d]=eZ(!1),u="render"!==e.kind||0===e.event.parents.size,p=i.filter(t=>"render"===t.kind&&"render"===e.kind&&e.event.parents.has(t.event.name)&&t.event.name!==e.event.name),h="render"===e.kind?Array.from(e.event.parents).filter(e=>!i.some(t=>"render"===t.kind&&t.event.name===e)):[];return ra("div",{className:"w-full",children:[ra("div",{className:o6(["w-full flex items-center relative text-xs min-w-0"]),children:[ra("button",{onMouseLeave:()=>{t.current.timer&&clearTimeout(t.current.timer),ch()},onMouseEnter:async()=>{let r=async()=>{if(t.current.lastCallAt=Date.now(),"render"!==e.kind){let e=ca.value.current?ca.value.current:"transition"===ca.value.kind?ca.value.transitionTo:null;if(!e){ca.value={kind:"idle",current:null};return}ca.value={kind:"move-out",current:{alpha:0,...e}};return}let r=ca.value,n=(()=>{switch(r.kind){case"transition":return r.transitionTo;case"idle":case"move-out":return r.current}})(),i=[];if("transition"===r.kind){let t=r.current&&r.current.alpha>0?"fading-out":"fading-in";(()=>{switch(t){case"fading-in":ca.value={kind:"transition",current:r.transitionTo,transitionTo:{rects:i,alpha:0,name:e.event.name}};return;case"fading-out":ca.value={kind:"transition",current:ca.value.current?{alpha:0,...ca.value.current}:null,transitionTo:{rects:i,alpha:0,name:e.event.name}};return}})()}else ca.value={kind:"transition",transitionTo:{rects:i,alpha:0,name:e.event.name},current:n?{alpha:0,...n}:null};for await(let t of l3(e.event.elements.filter(e=>e instanceof Element)))t.forEach(({boundingClientRect:e})=>{i.push(e)}),cd()};if(t.current.lastCallAt&&Date.now()-t.current.lastCallAt<200){t.current.timer&&clearTimeout(t.current.timer),t.current.timer=setTimeout(()=>{r()},200);return}r()},onClick:()=>{"render"===e.kind?(l(t=>({...t,selectedFiber:e.event})),s({route:"render-explanation",routeMessage:null})):s({route:"other-visualization",routeMessage:{kind:"auto-open-overview-accordion",name:e.kind}})},className:o6(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]),children:[ra("div",{style:{minWidth:"fit-content",width:`${e.totalTime/r*100}%`},className:o6(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0","render"===e.kind&&"bg-[#412162] group-hover:bg-[#5b2d89]","other-frame-drop"===e.kind&&"bg-[#44444a] group-hover:bg-[#6a6a6a]","other-javascript"===e.kind&&"bg-[#efd81a6b] group-hover:bg-[#efda1a2f]","other-not-javascript"===e.kind&&"bg-[#214379d4] group-hover:bg-[#21437982]"])}),ra("div",{className:o6(["absolute inset-0 flex items-center px-2","min-w-0"]),children:ra("div",{className:"flex items-center gap-x-2 min-w-0 w-full",children:[ra("span",{className:o6(["truncate"]),children:(()=>{switch(e.kind){case"other-frame-drop":return"JavaScript, DOM updates, Draw Frame";case"other-javascript":return"JavaScript/React Hooks";case"other-not-javascript":return"Update DOM and Draw New Frame";case"render":return e.event.name}})()}),"render"===e.kind&&!(a=e.event).wasFiberRenderMount&&!a.hasMemoCache&&0===a.changes.context.length&&0===a.changes.props.length&&0===a.changes.state.length&&ra("div",{style:{lineHeight:"10px"},className:o6(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]),children:"Memoizable"})]})})]}),ra("button",{onClick:()=>"render"===e.kind&&!u&&d(!c),className:o6(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]",!u&&"hover:bg-[#0f0f0f]","render"!==e.kind||u?"cursor-default":"cursor-pointer"]),children:[ra("div",{className:"w-[20px] flex items-center justify-center",children:"render"===e.kind&&!u&&ra(sK,{className:o6("transition-transform",c&&"rotate-90"),size:16})}),ra("div",{style:{minWidth:u?"fit-content":n?"30px":"60px"},className:"flex items-center justify-end gap-x-1",children:["render"===e.kind&&ra("span",{className:o6(["text-[10px]"]),children:["x",e.event.count]}),("render"!==e.kind||!n)&&ra("span",{className:"text-[10px] text-[#7346a0] pr-1",children:[e.totalTime<1?"<1":e.totalTime.toFixed(0),"ms"]})]})]}),0===o&&ra("div",{className:o6(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16","pointer-events-none"]),children:"Click to learn more"})]}),c&&(p.length>0||h.length>0)&&ra("div",{className:"pl-3 flex flex-col gap-y-1 mt-1",children:[p.toSorted((e,t)=>t.totalTime-e.totalTime).map((e,a)=>ra(cf,{depth:o+1,bar:e,debouncedMouseEnter:t,totalBarTime:r,isProduction:n,bars:i},a)),h.map(e=>ra("div",{className:"w-full",children:ra("div",{className:"w-full flex items-center relative text-xs",children:ra("div",{className:"h-full w-full flex items-center relative",children:[ra("div",{className:"flex items-center rounded-sm text-white text-xs h-[28px] w-full"}),ra("div",{className:"absolute inset-0 flex items-center px-2",children:ra("span",{className:"truncate whitespace-nowrap text-white/70 w-full",children:e})})]})})},e))]})]})},cg=({selectedEvent:e,selectedFiber:t})=>{let{setRoute:r}=e4(sq),[n,i]=eZ(!0),[o]=eZ(c6());e0(()=>{let e=localStorage.getItem("react-scan-tip-shown"),t="true"===e||"false"!==e&&null;if(null===t){i(!0),localStorage.setItem("react-scan-tip-is-shown","true");return}t||i(!1)},[]);let a=0===t.changes.context.length&&0===t.changes.props.length&&0===t.changes.state.length;return ra("div",{className:o6(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]),children:[ra("div",{className:o6(["flex items-start gap-x-4 "]),children:[ra("button",{onClick:()=>{r({route:"render-visualization",routeMessage:null})},className:o6(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]),children:[ra(sZ,{size:14})," ",ra("span",{children:"Overview"})]}),ra("div",{className:o6(["flex flex-col gap-y-1"]),children:[ra("div",{className:o6(["text-sm font-bold text-white overflow-x-hidden"]),children:ra("div",{className:"flex items-center gap-x-2 truncate",children:t.name})}),ra("div",{className:o6(["flex gap-x-2"]),children:[!o&&ra(ey,{children:ra("div",{className:o6(["text-xs text-gray-400"]),children:["• Render time: ",t.totalTime.toFixed(0),"ms"]})}),ra("div",{className:o6(["text-xs text-gray-400 mb-4"]),children:["• Renders: ",t.count,"x"]})]})]})]}),n&&!a&&ra("div",{className:o6(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]),children:[ra("button",{onClick:()=>{i(!1),localStorage.setItem("react-scan-tip-shown","false")},className:o6(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]),children:ra(sX,{size:12})}),ra("div",{className:o6(["w-1 bg-[#d36cff]"])}),ra("div",{className:o6(["flex-1"]),children:[ra("div",{className:o6(["px-3 py-2 text-gray-100 text-xs font-semibold"]),children:"How to stop renders"}),ra("div",{className:o6(["px-3 pb-2 text-gray-400 text-[10px]"]),children:"Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already"})]})]}),a&&ra("div",{className:o6(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]),children:[ra("div",{className:o6(["w-1 bg-[#d36cff]"])}),ra("div",{className:o6(["flex-1"]),children:[ra("div",{className:o6(["px-3 py-2 text-gray-100 text-sm font-semibold"]),children:"No changes detected"}),ra("div",{className:o6(["px-3 pb-2 text-gray-400 text-xs"]),children:"This component would not have rendered if it was memoized"})]})]}),ra("div",{className:o6(["flex w-full"]),children:[ra("div",{className:o6(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]),children:[ra("div",{className:o6(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Props"}),t.changes.props.length>0?t.changes.props.toSorted((e,t)=>t.count-e.count).map(e=>ra("div",{className:o6(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[ra("span",{className:o6(["text-white "]),children:e.name}),ra("div",{className:o6([" text-[8px]  text-[#d36cff] pl-1 py-1 "]),children:[e.count,"/",t.count,"x"]})]},e.name)):ra("div",{className:o6(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),ra("div",{className:o6(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]),children:[ra("div",{className:o6([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed State"}),t.changes.state.length>0?t.changes.state.toSorted((e,t)=>t.count-e.count).map(e=>ra("div",{className:o6(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[ra("span",{className:o6(["text-white "]),children:["index ",e.index]}),ra("div",{className:o6(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]),children:[e.count,"/",t.count,"x"]})]},e.index)):ra("div",{className:o6(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),ra("div",{className:o6(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]),children:[ra("div",{className:o6([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Context"}),t.changes.context.length>0?t.changes.context.toSorted((e,t)=>t.count-e.count).map(e=>ra("div",{className:o6(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]),children:[ra("span",{className:o6(["text-white "]),children:e.name}),ra("div",{className:o6(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]),children:[e.count,"/",t.count,"x"]})]},e.name)):ra("div",{className:o6(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]),children:"No changes"})]})]})]})},cv=()=>{let{notificationState:e,setNotificationState:t}=e4(sq),[r,n]=eZ("..."),i=e1(null);if(eQ(()=>{let e=setInterval(()=>{n(e=>"..."===e?"":e+".")},500);return()=>clearInterval(e)},[]),!e.selectedEvent)return ra("div",{ref:i,className:o6(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]),children:[ra("div",{className:o6(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]),children:ra("button",{onClick:()=>{ad.value={view:"none"}},children:ra(sX,{size:18,className:"text-[#6F6F78]"})})}),ra("div",{className:o6(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md"," shadow-lg"]),children:ra("div",{className:o6(["flex flex-col items-start gap-y-4"]),children:[ra("div",{className:o6(["flex items-center"]),children:ra("span",{className:o6(["text-zinc-400 font-medium text-[17px]"]),children:["Scanning for slowdowns",r]})}),0!==e.events.length&&ra("p",{className:o6(["text-xs"]),children:["Click on an item in the"," ",ra("span",{className:o6(["text-purple-400"]),children:"History"})," list to get started"]}),ra("p",{className:o6(["text-zinc-600 text-xs"]),children:"You don't need to keep this panel open for React Scan to record slowdowns"}),ra("p",{className:o6(["text-zinc-600 text-xs"]),children:"Enable audio alerts to hear a delightful ding every time a large slowdown is recorded"}),ra("button",{onClick:()=>{if(e.audioNotificationsOptions.enabled)return void t(e=>{var t,r;return(null==(t=e.audioNotificationsOptions.audioContext)?void 0:t.state)!=="closed"&&(null==(r=e.audioNotificationsOptions.audioContext)||r.close()),localStorage.setItem("react-scan-notifications-audio","false"),{...e,audioNotificationsOptions:{audioContext:null,enabled:!1}}});localStorage.setItem("react-scan-notifications-audio","true");let r=new AudioContext;i1(r),t(e=>({...e,audioNotificationsOptions:{enabled:!0,audioContext:r}}))},className:o6(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full"," text-sm flex items-center gap-x-2 justify-center"]),children:e.audioNotificationsOptions.enabled?ra(ey,{children:ra("span",{className:"flex items-center gap-x-1",children:"Disable audio alerts"})}):ra(ey,{children:ra("span",{className:"flex items-center gap-x-1",children:"Enable audio alerts"})})})]})})]});switch(e.route){case"render-visualization":return ra(cw,{children:ra(cm,{selectedEvent:e.selectedEvent})});case"render-explanation":if(!e.selectedFiber)throw Error("Invariant: must have selected fiber when viewing render explanation");return ra(cw,{children:ra(cg,{selectedFiber:e.selectedFiber,selectedEvent:e.selectedEvent})});case"other-visualization":return ra(cw,{children:ra("div",{className:o6(["flex w-full h-full flex-col overflow-y-auto"]),id:"overview-scroll-container",children:ra(s7,{selectedEvent:e.selectedEvent})})});case"optimize":return ra(cw,{children:ra(s8,{selectedEvent:e.selectedEvent})})}e.route},cw=({children:e})=>{let{notificationState:t}=e4(sq);if(!t.selectedEvent)throw Error("Invariant: d must have selected event when viewing render explanation");return ra("div",{className:o6(["w-full h-full flex flex-col gap-y-2"]),children:[ra("div",{className:o6(["h-[50px] w-full"]),children:ra(s4,{selectedEvent:t.selectedEvent})}),ra("div",{className:o6(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]),children:e})]})},cb=({selectedEvent:e})=>{let t=sV(e);switch(e.kind){case"interaction":return ra("div",{className:o6(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:ra("div",{className:o6(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[ra("div",{className:o6(["flex items-center gap-x-2 "]),children:[ra("span",{className:o6(["text-[#5a5a5a] mr-0.5"]),children:"click"===e.type?"Clicked ":"Typed in "}),ra("span",{children:sU(e.componentPath)}),ra("div",{className:o6(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap","low"===t&&"bg-green-500/50","needs-improvement"===t&&"bg-[#b77116]","high"===t&&"bg-[#b94040]"]),children:[sB(e.timing).toFixed(0),"ms processing time"]})]}),ra("div",{className:o6(["flex items-center gap-x-2  justify-end ml-auto"]),children:ra("div",{className:o6(["p-2 flex justify-center items-center border-[#27272A]"]),children:ra("button",{onClick:()=>{ad.value={view:"none"}},title:"Close",children:ra(sX,{size:18,className:"text-[#6F6F78]"})})})})]})});case"dropped-frames":return ra("div",{className:o6(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:ra("div",{className:o6(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[ra("div",{className:o6(["flex items-center gap-x-2 "]),children:["FPS Drop",ra("div",{className:o6(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap","low"===t&&"bg-green-500/50","needs-improvement"===t&&"bg-[#b77116]","high"===t&&"bg-[#b94040]"]),children:["dropped to ",e.fps," FPS"]})]}),ra("div",{className:o6(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]),children:ra("div",{className:o6(["p-2 flex justify-center items-center border-[#27272A]"]),children:ra("button",{onClick:()=>{ad.value={view:"none"}},children:ra(sX,{size:18,className:"text-[#6F6F78]"})})})})]})})}},cx=({item:e,shouldFlash:t})=>{var r,n;let[i,o]=eZ(!1),a=e.events.map(sV).reduce((e,t)=>{switch(t){case"high":return"high";case"needs-improvement":return"high"===e?"high":"needs-improvement";case"low":return e}},"low"),l=(({flashingItemsCount:e,totalEvents:t})=>{let[r,n]=eZ(!1),i=e1(0),o=e1(0);return eQ(()=>{if(i.current>=t)return;let e=Date.now()-o.current;if(e>=250){n(!1);let e=setTimeout(()=>{i.current=t,o.current=Date.now(),n(!0),setTimeout(()=>{n(!1)},2e3)},50);return()=>clearTimeout(e)}{let r=setTimeout(()=>{n(!1),setTimeout(()=>{i.current=t,o.current=Date.now(),n(!0),setTimeout(()=>{n(!1)},2e3)},50)},250-e);return()=>clearTimeout(r)}},[e]),r})({flashingItemsCount:e.events.reduce((e,r)=>t(r.id)?e+1:e,0),totalEvents:e.events.length});return ra("div",{className:o6(["flex flex-col gap-y-0.5"]),children:[ra("button",{onClick:()=>o(e=>!e),className:o6(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",l&&!i&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[ra("div",{className:o6(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]),children:[ra("span",{className:o6(["min-w-fit"]),children:ra(sK,{className:o6(["text-[#A1A1AA] transition-transform",i?"rotate-90":""]),size:14},`chevron-${e.timestamp}`)}),ra("span",{className:o6(["text-xs"]),children:"collapsed-frame-drops"===e.kind?"FPS Drops":sU(null!=(n=null==(r=e.events.at(0))?void 0:r.componentPath)?n:[])})]}),ra("div",{className:o6(["ml-auto min-w-fit flex justify-end items-center"]),children:ra("div",{style:{lineHeight:"10px"},className:o6(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold","low"===a&&"bg-green-500/60","needs-improvement"===a&&"bg-[#b77116] text-[10px]","high"===a&&"bg-[#b94040]"]),children:["x",e.events.length]})})]}),i&&ra(cy,{children:e.events.toSorted((e,t)=>t.timestamp-e.timestamp).map(e=>ra(ck,{event:e,shouldFlash:t(e.id)}))})]})},cy=({children:e})=>ra("div",{className:"relative pl-6 flex flex-col gap-y-1",children:[ra("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-[#27272A]"}),e]}),ck=({event:e,shouldFlash:t})=>{var r,n;let{notificationState:i,setNotificationState:o}=e4(sq),a=sV(e),l=(({shouldFlash:e})=>{let[t,r]=eZ(e);return eQ(()=>{if(e){r(!0);let e=setTimeout(()=>{r(!1)},1e3);return()=>clearTimeout(e)}},[e]),t})({shouldFlash:t});switch(e.kind){case"interaction":return ra("button",{onClick:()=>{o(t=>({...t,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:o6(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===(null==(r=i.selectedEvent)?void 0:r.id)&&"bg-[#18181B]",l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[ra("div",{className:o6(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]),children:[ra("span",{className:o6(["min-w-fit text-xs"]),children:(()=>{switch(e.type){case"click":return ra(sQ,{size:14});case"keyboard":return ra(s0,{size:14})}})()}),ra("span",{className:o6(["text-xs pr-1 truncate"]),children:sU(e.componentPath)})]}),ra("div",{className:o6([" min-w-fit flex justify-end items-center ml-auto"]),children:ra("div",{style:{lineHeight:"10px"},className:o6(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]","low"===a&&"bg-green-500/50","needs-improvement"===a&&"bg-[#b77116] text-[10px]","high"===a&&"bg-[#b94040]"]),children:ra("div",{style:{lineHeight:"10px"},className:o6(["text-[10px] text-white flex items-end"]),children:[sB(e.timing).toFixed(0),"ms"]})})})]});case"dropped-frames":return ra("button",{onClick:()=>{o(t=>({...t,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:o6(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===(null==(n=i.selectedEvent)?void 0:n.id)&&"bg-[#18181B]",l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[ra("div",{className:o6(["w-4/5 flex items-center justify-start h-full text-xs truncate"]),children:[ra(s2,{size:14,className:"mr-1.5"})," FPS Drop"]}),ra("div",{className:o6([" min-w-fit flex justify-end items-center ml-auto"]),children:ra("div",{style:{lineHeight:"10px"},className:o6(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold","low"===a&&"bg-green-500/60","needs-improvement"===a&&"bg-[#b77116] text-[10px]","high"===a&&"bg-[#b94040]"]),children:[e.fps," FPS"]})})]})}},c_=(e=150)=>{let{notificationState:t}=e4(sq),[r,n]=eZ(t.events);return eQ(()=>{setTimeout(()=>{n(t.events)},e)},[t.events]),[r,n]},cN=()=>{let{notificationState:e,setNotificationState:t}=e4(sq),r=(e=>{let t=e1([]),[r,n]=eZ(new Set),i=e1(!0);return eQ(()=>{if(i.current){i.current=!1,t.current=e;return}let r=new Set(e.map(e=>e.id)),o=new Set(t.current.map(e=>e.id)),a=new Set;r.forEach(e=>{o.has(e)||a.add(e)}),a.size>0&&(n(a),setTimeout(()=>{n(new Set)},2e3)),t.current=e},[e]),e=>r.has(e)})(e.events),[n,i]=c_(),o=n.reduce((e,t)=>{let r=e.at(-1);if(!r)return[{kind:"single",event:t,timestamp:t.timestamp}];switch(r.kind){case"collapsed-keyboard":if("interaction"===t.kind&&"keyboard"===t.type&&t.componentPath.join("-")===r.events[0].componentPath.join("-"))return[...e.filter(e=>e!==r),{kind:"collapsed-keyboard",events:[...r.events,t],timestamp:Math.max(...[...r.events,t].map(e=>e.timestamp))}];return[...e,{kind:"single",event:t,timestamp:t.timestamp}];case"single":if("interaction"===r.event.kind&&"keyboard"===r.event.type&&"interaction"===t.kind&&"keyboard"===t.type&&r.event.componentPath.join("-")===t.componentPath.join("-"))return[...e.filter(e=>e!==r),{kind:"collapsed-keyboard",events:[r.event,t],timestamp:Math.max(r.event.timestamp,t.timestamp)}];if("dropped-frames"===r.event.kind&&"dropped-frames"===t.kind)return[...e.filter(e=>e!==r),{kind:"collapsed-frame-drops",events:[r.event,t],timestamp:Math.max(r.event.timestamp,t.timestamp)}];return[...e,{kind:"single",event:t,timestamp:t.timestamp}];case"collapsed-frame-drops":if("dropped-frames"===t.kind)return[...e.filter(e=>e!==r),{kind:"collapsed-frame-drops",events:[...r.events,t],timestamp:Math.max(...[...r.events,t].map(e=>e.timestamp))}];return[...e,{kind:"single",event:t,timestamp:t.timestamp}]}},[]).toSorted((e,t)=>t.timestamp-e.timestamp);return ra("div",{className:o6(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]),children:[ra("div",{className:o6(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]),children:[ra("span",{children:"History"}),ra(s5,{wrapperProps:{className:"h-full flex items-center justify-center ml-auto"},triggerContent:ra("button",{className:o6(["hover:bg-[#18181B] rounded-full p-2"]),title:"Clear all events",onClick:()=>{sP.getState().actions.clear(),t(e=>({...e,selectedEvent:null,selectedFiber:null,route:"other-visualization"===e.route?"other-visualization":"render-visualization"})),i([])},children:ra(s1,{className:o6([""]),size:16})}),children:ra("div",{className:o6(["w-full flex justify-center"]),children:"Clear all events"})})]}),ra("div",{className:o6(["flex flex-col px-1 gap-y-1"]),children:[0===o.length&&ra("div",{className:o6(["flex items-center justify-center text-zinc-500 text-sm py-4"]),children:"No Events"}),o.map(e=>(()=>{switch(e.kind){case"collapsed-keyboard":case"collapsed-frame-drops":return ra(cx,{shouldFlash:r,item:e});case"single":return ra(ck,{event:e.event,shouldFlash:r(e.event.id)},e.event.id)}})())]})]})},cS=()=>{var e,t,r,n,i,o,a;let l=(e=sP.subscribe,i=(n=eZ({t:{__:r=(t=sP.getState)(),u:t}}))[0].t,o=n[1],e0(function(){i.__=r,i.u=t,tV(i)&&o({t:i})},[e,r,t]),eQ(function(){return tV(i)&&o({t:i}),e(function(){tV(i)&&o({t:i})})},[e]),r),s=[];return eQ(()=>{let e=setInterval(()=>{a.forEach(e=>{e.groupedFiberRenders&&e.groupedFiberRenders.forEach(e=>{if(e.deletedAll)return;if(!e.elements||0===e.elements.length){e.deletedAll=!0;return}let t=e.elements.length;e.elements=e.elements.filter(e=>e&&e.isConnected),0===e.elements.length&&t>0&&(e.deletedAll=!0)})})},5e3);return()=>{clearInterval(e)}},[a=s]),l.state.events.forEach(e=>{let t=Object.values("interaction"===e.kind?e.data.meta.detailedTiming.fiberRenders:e.data.meta.fiberRenders).map(e=>({id:i0(),totalTime:e.nodeInfo.reduce((e,t)=>e+t.selfTime,0),count:e.nodeInfo.length,name:e.nodeInfo[0].name,deletedAll:!1,parents:e.parents,hasMemoCache:e.hasMemoCache,wasFiberRenderMount:e.wasFiberRenderMount,elements:e.nodeInfo.map(e=>e.element),changes:{context:e.changes.fiberContext.current.filter(t=>e.changes.fiberContext.changesCounts.get(t.name)).map(t=>{var r;return{name:String(t.name),count:null!=(r=e.changes.fiberContext.changesCounts.get(t.name))?r:0}}),props:e.changes.fiberProps.current.filter(t=>e.changes.fiberProps.changesCounts.get(t.name)).map(t=>{var r;return{name:String(t.name),count:null!=(r=e.changes.fiberProps.changesCounts.get(t.name))?r:0}}),state:e.changes.fiberState.current.filter(t=>e.changes.fiberState.changesCounts.get(Number(t.name))).map(t=>{var r;return{index:t.name,count:null!=(r=e.changes.fiberState.changesCounts.get(Number(t.name)))?r:0}})}})),r=t.reduce((e,t)=>e+t.totalTime,0);switch(e.kind){case"interaction":{let{commitEnd:n,jsEndDetail:i,interactionStartDetail:o,rafStart:a}=e.data.meta.detailedTiming;i-o-r<0&&sp("js time must be longer than render time");let l=Math.max(0,i-o-r),c=Math.max(e.data.meta.latency-(n-o),0);s.push({componentPath:e.data.meta.detailedTiming.componentPath,groupedFiberRenders:t,id:e.id,kind:"interaction",memory:null,timestamp:e.data.startAt,type:"keyboard"===e.data.meta.detailedTiming.interactionType?"keyboard":"click",timing:{renderTime:r,kind:"interaction",otherJSTime:l,framePreparation:a-i,frameConstruction:n-a,frameDraw:c}});return}case"long-render":return void s.push({kind:"dropped-frames",id:e.id,memory:null,timing:{kind:"dropped-frames",renderTime:r,otherTime:e.data.meta.latency},groupedFiberRenders:t,timestamp:e.data.startAt,fps:e.data.meta.fps})}}),s},cE=()=>{let{notificationState:e,setNotificationState:t}=e4(sq),r=e1(null),n=e1(null),i=e1(0),[o]=c_(),a=o.filter(e=>"high"===sV(e)).length;return eQ(()=>{let e=localStorage.getItem("react-scan-notifications-audio");"false"!==e&&"true"!==e?localStorage.setItem("react-scan-notifications-audio","false"):"false"!==e&&t(e=>e.audioNotificationsOptions.enabled?e:{...e,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}})},[]),eQ(()=>{let{audioNotificationsOptions:t}=e;!t.enabled||0===a||r.current&&r.current>=a||(n.current&&clearTimeout(n.current),n.current=setTimeout(()=>{i1(t.audioContext),r.current=a,i.current=Date.now(),n.current=null},Math.max(0,1e3-(Date.now()-i.current))))},[a]),eQ(()=>{0===a&&(r.current=null)},[a]),eQ(()=>()=>{n.current&&clearTimeout(n.current)},[]),null},cC=tY((e,t)=>{var r;let n=cS(),[i,o]=eZ({detailsExpanded:!1,events:n,filterBy:"latest",moreInfoExpanded:!1,route:"render-visualization",selectedEvent:null!=(r=n.toSorted((e,t)=>e.timestamp-t.timestamp).at(-1))?r:null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return i.events=n,ra(sq.Provider,{value:{notificationState:i,setNotificationState:o,setRoute:({route:e,routeMessage:t})=>{o(r=>{let n={...r,route:e,routeMessage:t};switch(e){case"render-visualization":case"optimize":case"other-visualization":return ch(),{...n,selectedFiber:null};case"render-explanation":return ch(),n}})}},children:[ra(cE,{}),ra(cT,{ref:t})]})}),cT=tY((e,t)=>{var r;let{notificationState:n}=e4(sq);return ra("div",{ref:t,className:o6(["h-full w-full flex flex-col"]),children:[n.selectedEvent&&ra("div",{className:o6(["w-full h-[48px] flex flex-col",n.moreInfoExpanded&&"h-[235px]",n.moreInfoExpanded&&"dropped-frames"===n.selectedEvent.kind&&"h-[150px]"]),children:[ra(cb,{selectedEvent:n.selectedEvent}),n.moreInfoExpanded&&ra(cA,{})]}),ra("div",{className:o6(["flex ",n.selectedEvent?"h-[calc(100%-48px)]":"h-full",n.moreInfoExpanded&&"h-[calc(100%-200px)]",n.moreInfoExpanded&&(null==(r=n.selectedEvent)?void 0:r.kind)==="dropped-frames"&&"h-[calc(100%-150px)]"]),children:[ra("div",{className:o6(["h-full min-w-[200px]"]),children:ra(cN,{})}),ra("div",{className:o6(["w-[calc(100%-200px)] h-full overflow-y-auto"]),children:ra(cv,{})})]})]})}),cA=()=>{let{notificationState:e}=e4(sq);if(!e.selectedEvent)throw Error("Invariant must have selected event for more info");let t=e.selectedEvent;return ra("div",{className:o6(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]","dropped-frames"===t.kind&&"h-[calc(100%-25px)]"]),children:ra("div",{className:o6(["flex flex-col gap-y-4 h-full"]),children:(()=>{switch(t.kind){case"interaction":return ra(ey,{children:[ra("div",{className:o6(["flex items-center gap-x-3"]),children:[ra("span",{className:"text-[#6F6F78] text-xs font-medium",children:"click"===t.type?"Clicked component location":"Typed in component location"}),ra("div",{className:"font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",children:t.componentPath.toReversed().map((e,r)=>ra(ey,{children:[ra("span",{style:{lineHeight:"14px"},className:"text-[10px] whitespace-nowrap",children:e},e),r<t.componentPath.length-1&&ra("span",{className:"text-[#6F6F78] mx-0.5",children:"‹"})]}))})]}),ra("div",{className:o6(["flex items-center gap-x-3"]),children:[ra("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),ra("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[sB(t.timing).toFixed(0),"ms"]})]}),ra("div",{className:o6(["flex items-center gap-x-3"]),children:[ra("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),ra("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]});case"dropped-frames":return ra(ey,{children:[ra("div",{className:o6(["flex items-center gap-x-3"]),children:[ra("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),ra("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[sB(t.timing).toFixed(0),"ms"]})]}),ra("div",{className:o6(["flex items-center gap-x-3"]),children:[ra("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),ra("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})()})})},cz=am(()=>{var e;let t=cS(),[r,n]=eZ(t);eQ(()=>{let e=setTimeout(()=>{n(t)},600);return()=>{clearTimeout(e)}},[t]);let i=c2.inspectState,o="inspecting"===i.value.kind,a="focused"===i.value.kind,[l,s]=eZ([]),c=e5(()=>{switch(c2.inspectState.value.kind){case"inspecting":ad.value={view:"none"},c2.inspectState.value={kind:"inspect-off"};return;case"focused":ad.value={view:"inspector"},c2.inspectState.value={kind:"inspecting",hoveredDomElement:null};return;case"inspect-off":ad.value={view:"none"},c2.inspectState.value={kind:"inspecting",hoveredDomElement:null};return;case"uninitialized":return}},[]),d=e5(e=>{if(e.preventDefault(),e.stopPropagation(),!c5.instrumentation)return;let t=!c5.instrumentation.isPaused.value;c5.instrumentation.isPaused.value=t,o9("react-scan-options",{...o7("react-scan-options"),enabled:!t})},[]);tW(()=>{"uninitialized"===c2.inspectState.value.kind&&(c2.inspectState.value={kind:"inspect-off"})});let u=null,p="#999";return o?(u=ra(i2,{name:"icon-inspect"}),p="#8e61e3"):a?(u=ra(i2,{name:"icon-focus"}),p="#8e61e3"):(u=ra(i2,{name:"icon-inspect"}),p="#999"),e0(()=>{"notifications"!==ad.value.view||s([...new Set(t.map(e=>e.id)).values()])},[t.length,ad.value.view]),ra("div",{className:"flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden",children:[ra("div",{className:"h-full flex items-center min-w-fit",children:ra("button",{type:"button",id:"react-scan-inspect-element",title:"Inspect element",onClick:c,className:"button flex items-center justify-center h-full w-full pl-3 pr-2.5",style:{color:p},children:u})}),ra("div",{className:"h-full flex items-center justify-center",children:ra("button",{type:"button",id:"react-scan-notifications",title:"Notifications",onClick:()=>{switch("inspect-off"!==c2.inspectState.value.kind&&(c2.inspectState.value={kind:"inspect-off"}),ad.value.view){case"inspector":c2.inspectState.value={kind:"inspect-off"},s([...new Set(t.map(e=>e.id)).values()]),ad.value={view:"notifications"};return;case"notifications":ad.value={view:"none"};return;case"none":s([...new Set(t.map(e=>e.id)).values()]),ad.value={view:"notifications"};return}},className:"button flex items-center justify-center h-full pl-2.5 pr-2.5",style:{color:p},children:ra(sG,{events:r.filter(e=>!l.includes(e.id)).map(e=>"high"===sV(e)),size:16,className:o6(["text-[#999]","notifications"===ad.value.view&&"text-[#8E61E3]"])})})}),ra(sc,{checked:!(null==(e=c5.instrumentation)?void 0:e.isPaused.value),onChange:d,className:"place-self-center",title:"Outline Re-renders"}),c5.options.value.showFPS&&ra(su,{})]})}),cM=ty(()=>"inspecting"===c2.inspectState.value.kind),cR=ty(()=>o6("relative","flex-1","flex flex-col","rounded-t-lg","overflow-hidden","opacity-100","transition-[opacity]",cM.value&&"opacity-0 duration-0 delay-0")),cj=ty(()=>"inspector"===ad.value.view),c$=ty(()=>"notifications"===ad.value.view),cF=()=>ra("div",{className:o6("flex flex-1 flex-col","overflow-hidden z-10","rounded-lg","bg-black","opacity-100","transition-[border-radius]","peer-hover/left:rounded-l-none","peer-hover/right:rounded-r-none","peer-hover/top:rounded-t-none","peer-hover/bottom:rounded-b-none"),children:[ra("div",{className:cR,children:[ra(ss,{}),ra("div",{className:o6("relative","flex-1 flex","text-white","bg-[#0A0A0A]","transition-opacity delay-150","overflow-hidden","border-b border-[#222]"),children:[ra(cD,{isOpen:cj,children:ra(aZ,{})}),ra(cD,{isOpen:c$,children:ra(cC,{})})]})]}),ra(cz,{})]}),cD=({isOpen:e,children:t})=>ra("div",{className:o6("flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",e.value&&"opacity-100 delay-150 pointer-events-auto"),children:ra("div",{className:"absolute inset-0 flex",children:t})}),cO=(e,t,r)=>e+(t-e)*r,cP={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},cL=iY&&window.devicePixelRatio||1,cI=()=>{let e=e1(null),t=e1(null),r=e1(null),n=e1(null),i=e1(null),o=e1(0),a=e1(),l=e1(new Map),s=e1(!1),c=e1(0),d=(e,t,i,o)=>{if(!r.current)return;let a=r.current;t.clearRect(0,0,e.width,e.height),t.strokeStyle="rgba(142, 97, 227, 0.5)",t.fillStyle="rgba(173, 97, 230, 0.10)","locked"===i?t.setLineDash([]):t.setLineDash([4]),t.lineWidth=1,t.fillRect(a.left,a.top,a.width,a.height),t.strokeRect(a.left,a.top,a.width,a.height),((e,t,r,i)=>{var o;if(!i)return;let a=null!=(o=(null==i?void 0:i.type)&&I(i.type))?o:"Unknown";e.save(),e.font="12px system-ui, -apple-system, sans-serif";let l=e.measureText(a).width,s=14*("locked"===r),c=6*("locked"===r),d=t.left,u=t.top-24-4;if(e.fillStyle="rgb(37, 37, 38, .75)",e.beginPath(),e.roundRect(d,u,l+16+s+c,24,3),e.fill(),"locked"===r){let t,r,i,o=d+8,a=u+(24-s)/2+2;e.save(),e.strokeStyle="white",e.fillStyle="white",e.lineWidth=1.5,t=.6*s,r=.5*s,e.beginPath(),e.arc(o+(s-t)/2+t/2,a+r/2,t/2,Math.PI,0,!1),e.stroke(),i=.8*s,e.fillRect(o+(s-i)/2,a+r/2,i,.5*s),e.restore(),n.current={x:o,y:a,width:s,height:s}}else n.current=null;e.fillStyle="white",e.textBaseline="middle";e.fillText(a,d+8+("locked"===r?s+c:0),u+12),e.restore()})(t,a,i,o)},u=async(e,t,n,i)=>{if(!e||!t||!n)return;let{parentCompositeFiber:l}=a3(e),s=await a4(e);l&&s&&((e,t,n,i,l)=>{var s,u;let p,h,m;if(t.save(),!r.current){r.current=n,d(e,t,i,l),t.restore();return}p=c5.options.value.animationSpeed,h=null!=(u=cP.speeds[p])?u:cP.speeds.off,m=a=>{if(a-c.current<cP.frameInterval){o.current=requestAnimationFrame(m);return}(c.current=a,r.current)?(r.current={left:cO(r.current.left,n.left,h),top:cO(r.current.top,n.top,h),width:cO(r.current.width,n.width,h),height:cO(r.current.height,n.height,h)},d(e,t,i,l),Math.abs(r.current.left-n.left)>.1||Math.abs(r.current.top-n.top)>.1||Math.abs(r.current.width-n.width)>.1||Math.abs(r.current.height-n.height)>.1?o.current=requestAnimationFrame(m):(r.current=n,d(e,t,i,l),cancelAnimationFrame(o.current),t.restore(),null==s||s())):cancelAnimationFrame(o.current)},cancelAnimationFrame(o.current),clearTimeout(a.current),o.current=requestAnimationFrame(m),a.current=setTimeout(()=>{cancelAnimationFrame(o.current),r.current=n,d(e,t,i,l),t.restore(),null==s||s()},1e3)})(t,n,s,i,l)},p=t=>{if(!e.current||s.current)return;let o=a=>{if(e.current&&"opacity"===a.propertyName&&s.current){var l;let a;e.current.removeEventListener("transitionend",o),(a=(l=e.current).getContext("2d"))&&a.clearRect(0,0,l.width,l.height),r.current=null,n.current=null,i.current=null,l.classList.remove("fade-in"),s.current=!1,null==t||t()}},a=l.current.get("fade-out");a&&(a(),l.current.delete("fade-out")),e.current.addEventListener("transitionend",o),l.current.set("fade-out",()=>{var t;null==(t=e.current)||t.removeEventListener("transitionend",o)}),s.current=!0,e.current.classList.remove("fade-in"),requestAnimationFrame(()=>{var t;null==(t=e.current)||t.classList.add("fade-out")})},h=()=>{e.current&&(s.current=!1,e.current.classList.remove("fade-out"),requestAnimationFrame(()=>{var t;null==(t=e.current)||t.classList.add("fade-in")}))},m=o8(n=>{var o,l;if("inspecting"!==c2.inspectState.peek().kind||!t.current)return;t.current.style.pointerEvents="none";let c=document.elementFromPoint(null!=(o=null==n?void 0:n.clientX)?o:0,null!=(l=null==n?void 0:n.clientY)?l:0);if(t.current.style.removeProperty("pointer-events"),clearTimeout(a.current),c&&c!==e.current){let{parentCompositeFiber:e}=a3(c);if(e){let t=a9(e);if(t)return void(t!==i.current&&(i.current=t,a7.has(t.tagName)?p():h(),c2.inspectState.value={kind:"inspecting",hoveredDomElement:t}))}}r.current&&e.current&&!s.current&&p()},32),f=(e,t)=>{let r=n.current;if(!r)return!1;let i=t.getBoundingClientRect(),o=t.width/i.width,a=t.height/i.height,l=(e.clientX-i.left)*o,s=(e.clientY-i.top)*a,c=l/cL,d=s/cL;return c>=r.x&&c<=r.x+r.width&&d>=r.y&&d<=r.y+r.height},g=r=>{if(r.__reactScanSyntheticEvent)return;let n=c2.inspectState.peek(),o=e.current;if(o&&t.current){if(f(r,o)){r.preventDefault(),r.stopPropagation(),"focused"===n.kind&&(c2.inspectState.value={kind:"inspecting",hoveredDomElement:n.focusedDomElement});return}"inspecting"===n.kind&&(e=>{var t,r;let n=["react-scan-inspect-element","react-scan-power"];if(e.target instanceof HTMLElement&&n.includes(e.target.id))return;let o=null==(t=i.current)?void 0:t.tagName;if(o&&a7.has(o))return;e.preventDefault(),e.stopPropagation();let a=null!=(r=i.current)?r:document.elementFromPoint(e.clientX,e.clientY);if(!a)return;let l=e.composedPath().at(0);if(l instanceof HTMLElement&&n.includes(l.id)){let t=new MouseEvent(e.type,e);t.__reactScanSyntheticEvent=!0,l.dispatchEvent(t);return}let{parentCompositeFiber:s}=a3(a);if(!s)return;let c=a9(s);if(!c){i.current=null,c2.inspectState.value={kind:"inspect-off"};return}c2.inspectState.value={kind:"focused",focusedDomElement:c,fiber:s}})(r)}},v=t=>{var n;if("Escape"!==t.key)return;let o=c2.inspectState.peek();if(e.current&&(null==(n=document.activeElement)?void 0:n.id)!=="react-scan-root"&&(ad.value={view:"none"},"focused"===o.kind||"inspecting"===o.kind))switch(t.preventDefault(),t.stopPropagation(),o.kind){case"focused":h(),r.current=null,i.current=o.focusedDomElement,c2.inspectState.value={kind:"inspecting",hoveredDomElement:o.focusedDomElement};break;case"inspecting":p(()=>{ao.value=!1,c2.inspectState.value={kind:"inspect-off"}})}},w=(e,t)=>{let r=e.getBoundingClientRect();e.width=r.width*cL,e.height=r.height*cL,t.scale(cL,cL),t.save()},b=()=>{let t=c2.inspectState.peek(),n=e.current;if(!n)return;let i=null==n?void 0:n.getContext("2d");i&&(cancelAnimationFrame(o.current),clearTimeout(a.current),w(n,i),r.current=null,"focused"===t.kind&&t.focusedDomElement?u(t.focusedDomElement,n,i,"locked"):"inspecting"===t.kind&&t.hoveredDomElement&&u(t.hoveredDomElement,n,i,"inspecting"))},x=t=>{let r=c2.inspectState.peek(),n=e.current;n&&("inspecting"===r.kind||f(t,n))&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation())};return eQ(()=>{let n=e.current;if(!n)return;let s=null==n?void 0:n.getContext("2d");if(!s)return;w(n,s);let c=c2.inspectState.subscribe(e=>{((e,n,a)=>{var s;let c;switch(null==(s=l.current.get(e.kind))||s(),t.current&&"inspecting"!==e.kind&&(t.current.style.pointerEvents="none"),o.current&&cancelAnimationFrame(o.current),e.kind){case"inspect-off":p();return;case"inspecting":u(e.hoveredDomElement,n,a,"inspecting");break;case"focused":if(!e.focusedDomElement)return;i.current!==e.focusedDomElement&&(i.current=e.focusedDomElement),ad.value={view:"inspector"},u(e.focusedDomElement,n,a,"locked"),(c=c2.lastReportTime.subscribe(()=>{if(o.current&&r.current){let{parentCompositeFiber:t}=a3(e.focusedDomElement);t&&u(e.focusedDomElement,n,a,"locked")}}))&&l.current.set(e.kind,c)}})(e,n,s)});return window.addEventListener("scroll",b,{passive:!0}),window.addEventListener("resize",b,{passive:!0}),document.addEventListener("pointermove",m,{passive:!0,capture:!0}),document.addEventListener("pointerdown",x,{capture:!0}),document.addEventListener("click",g,{capture:!0}),document.addEventListener("keydown",v,{capture:!0}),()=>{for(let e of l.current.values())null==e||e();c(),window.removeEventListener("scroll",b),window.removeEventListener("resize",b),document.removeEventListener("pointermove",m,{capture:!0}),document.removeEventListener("click",g,{capture:!0}),document.removeEventListener("pointerdown",x,{capture:!0}),document.removeEventListener("keydown",v,{capture:!0}),o.current&&cancelAnimationFrame(o.current),clearTimeout(a.current)}},[]),ra(ey,{children:[ra("div",{ref:t,className:o6("fixed top-0 left-0 w-screen h-screen","z-[214748365]"),style:{pointerEvents:"none"}}),ra("canvas",{ref:e,dir:"ltr",className:o6("react-scan-inspector-overlay","fixed top-0 left-0 w-screen h-screen","pointer-events-none","z-[214748367]")})]})},cH=class{constructor(e,t,r){iX(this,"width",e),iX(this,"height",t),iX(this,"safeArea",r),iX(this,"maxWidth"),iX(this,"maxHeight"),this.maxWidth=e-r.left-r.right,this.maxHeight=t-r.top-r.bottom}rightEdge(e){return this.width-e-this.safeArea.right}bottomEdge(e){return this.height-e-this.safeArea.bottom}isFullWidth(e){return e>=this.maxWidth}isFullHeight(e){return e>=this.maxHeight}},cW=()=>{let e,t=window.innerWidth,r=window.innerHeight,n=ai();return h&&h.width===t&&h.height===r&&(e=h.safeArea,e.top===n.top&&e.right===n.right&&e.bottom===n.bottom&&e.left===n.left)?h:h=new cH(t,r,n)},cU=(e,t,r)=>{let n,i,o="rtl"===getComputedStyle(document.body).direction,a=window.innerWidth,l=window.innerHeight,s=ai(),c=550===t,d=c?t:Math.min(t,a-s.left-s.right),u=c?r:Math.min(r,l-s.top-s.bottom),p=s.left,h=a-d-s.right,m=s.top,f=l-u-s.bottom,g=-s.right,v=-(a-d-s.left);switch(e){case"top-right":n=o?g:h,i=m;break;case"bottom-right":n=o?g:h,i=f;break;case"bottom-left":n=o?v:p,i=f;break;case"top-left":n=o?v:p,i=m;break;default:n=p,i=m}return c&&(n=o?Math.min(g,Math.max(n,v)):Math.max(p,Math.min(n,h)),i=Math.max(m,Math.min(i,f))),{x:n,y:i}},cB=(e,t,r)=>{let n=r?cW().maxWidth:cW().maxHeight;return Math.min(Math.max(r?550:400,e+t),n)},cV=({position:e})=>{let t=e1(null),r=e1(null),n=e1(null),i=e1(null);return eQ(()=>{let o=t.current;if(!o)return;let a=()=>{var t,r,n;o.classList.remove("pointer-events-none");let i="focused"===c2.inspectState.value.kind,a="none"!==ad.value.view;(i||a)&&(t=as.value.corner,r=as.value.dimensions.isFullWidth,n=as.value.dimensions.isFullHeight,r&&n||(r||n?r?e!==t.split("-")[0]:!!n&&e!==t.split("-")[1]:((e,t)=>{let[r,n]=t.split("-");return e!==r&&e!==n})(e,t)))?o.classList.remove("hidden","pointer-events-none","opacity-0"):o.classList.add("hidden","pointer-events-none","opacity-0")},l=as.subscribe(e=>{(null===r.current||null===n.current||null===i.current||e.dimensions.width!==r.current||e.dimensions.height!==n.current||e.corner!==i.current)&&(a(),r.current=e.dimensions.width,n.current=e.dimensions.height,i.current=e.corner)}),s=c2.inspectState.subscribe(()=>{a()});return()=>{l(),s(),r.current=null,n.current=null,i.current=null}},[]),ra("div",{ref:t,onPointerDown:e5(t=>{t.preventDefault(),t.stopPropagation();let r=aa.value;if(!r)return;let n=r.style,{dimensions:i}=as.value,o=t.clientX,a=t.clientY,l=i.width,s=i.height,c=i.position;as.value={...as.value,dimensions:{...i,isFullWidth:!1,isFullHeight:!1,width:l,height:s,position:c}};let d=null,u=t=>{d||(n.transition="none",d=requestAnimationFrame(()=>{let{newSize:r,newPosition:i}=((e,t,r,n,i)=>{let o="rtl"===getComputedStyle(document.body).direction,a=ai(),l=window.innerWidth-a.left-a.right,s=window.innerHeight-a.top-a.bottom,c=t.width,d=t.height,u=r.x,p=r.y;if(o&&e.includes("right")){let e=-r.x+t.width-a.right;c=Math.min(l,Math.max(550,Math.min(t.width+n,e))),u=r.x+(c-t.width)}if(o&&e.includes("left")){let e=window.innerWidth-r.x-a.left;c=Math.min(l,Math.max(550,Math.min(t.width-n,e)))}if(!o&&e.includes("right")){let e=window.innerWidth-r.x-a.right;c=Math.min(l,Math.max(550,Math.min(t.width+n,e)))}if(!o&&e.includes("left")){let e=r.x+t.width-a.left;c=Math.min(l,Math.max(550,Math.min(t.width-n,e))),u=r.x-(c-t.width)}if(e.includes("bottom")){let e=window.innerHeight-r.y-a.bottom;d=Math.min(s,Math.max(400,Math.min(t.height+i,e)))}if(e.includes("top")){let e=r.y+t.height-a.top;d=Math.min(s,Math.max(400,Math.min(t.height-i,e))),p=r.y-(d-t.height)}let h=a.left,m=window.innerWidth-a.right-c,f=a.top,g=window.innerHeight-a.bottom-d,v=-a.right,w=-(window.innerWidth-c-a.left);return{newSize:{width:c,height:d},newPosition:{x:u=o?Math.min(v,Math.max(u,w)):Math.max(h,Math.min(u,m)),y:p=Math.max(f,Math.min(p,g))}}})(e,{width:l,height:s},c,t.clientX-o,t.clientY-a);n.transform=`translate3d(${i.x}px, ${i.y}px, 0)`,n.width=`${r.width}px`,n.height=`${r.height}px`;let u=Math.min(Math.floor(r.width-120),Math.max(240,as.value.componentsTree.width));as.value={...as.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:r.width,height:r.height,position:i},componentsTree:{...as.value.componentsTree,width:u}},d=null}))},p=()=>{d&&(cancelAnimationFrame(d),d=null),document.removeEventListener("pointermove",u),document.removeEventListener("pointerup",p);let{dimensions:e,corner:t}=as.value,i=cW(),o=i.isFullWidth(e.width),a=i.isFullHeight(e.height),l=t;(o&&a||o||a)&&(l=(e=>{let t=cW(),r={"top-left":Math.hypot(e.x,e.y),"top-right":Math.hypot(t.maxWidth-e.x,e.y),"bottom-left":Math.hypot(e.x,t.maxHeight-e.y),"bottom-right":Math.hypot(t.maxWidth-e.x,t.maxHeight-e.y)},n="top-left";for(let e in r)r[e]<r[n]&&(n=e);return n})(e.position));let s=cU(l,e.width,e.height),c=()=>{r.removeEventListener("transitionend",c)};r.addEventListener("transitionend",c),n.transform=`translate3d(${s.x}px, ${s.y}px, 0)`,as.value={...as.value,corner:l,dimensions:{isFullWidth:o,isFullHeight:a,width:e.width,height:e.height,position:s},lastDimensions:{isFullWidth:o,isFullHeight:a,width:e.width,height:e.height,position:s}},o9(i5,{corner:l,dimensions:as.value.dimensions,lastDimensions:as.value.lastDimensions,componentsTree:as.value.componentsTree})};document.addEventListener("pointermove",u,{passive:!0}),document.addEventListener("pointerup",p)},[]),onDblClick:e5(t=>{t.preventDefault(),t.stopPropagation();let r=aa.value;if(!r)return;let n=r.style,{dimensions:i,corner:o}=as.value,a=cW(),l=a.isFullWidth(i.width),s=a.isFullHeight(i.height),c=l&&s,d=(l||s)&&!c,u=i.width,p=i.height,h=((e,t,r,n,i)=>{if(r){if("top-left"===e)return"bottom-right";if("top-right"===e)return"bottom-left";if("bottom-left"===e)return"top-right";if("bottom-right"===e)return"top-left";let[r,n]=t.split("-");if("left"===e)return`${r}-right`;if("right"===e)return`${r}-left`;if("top"===e)return`bottom-${n}`;if("bottom"===e)return`top-${n}`}if(n){if("left"===e)return`${t.split("-")[0]}-right`;if("right"===e)return`${t.split("-")[0]}-left`}if(i){if("top"===e)return`bottom-${t.split("-")[1]}`;if("bottom"===e)return`top-${t.split("-")[1]}`}return t})(e,o,c,l,s);"left"===e||"right"===e?(u=l?i.width:a.maxWidth,d&&(u=l?550:a.maxWidth)):(p=s?i.height:a.maxHeight,d&&(p=s?400:a.maxHeight)),c&&("left"===e||"right"===e?u=550:p=400);let m=cU(h,u,p),f={isFullWidth:a.isFullWidth(u),isFullHeight:a.isFullHeight(p),width:u,height:p,position:m},g=Math.floor(u-275),v=as.value.componentsTree.width,w=Math.floor(.3*u),b=l?240:"left"!==e&&"right"!==e||l?Math.min(g,Math.max(240,v)):Math.min(g,Math.max(240,w));requestAnimationFrame(()=>{as.value={corner:h,dimensions:f,lastDimensions:i,componentsTree:{...as.value.componentsTree,width:b}},n.transition="all 0.25s cubic-bezier(0, 0, 0.2, 1)",n.width=`${u}px`,n.height=`${p}px`,n.transform=`translate3d(${m.x}px, ${m.y}px, 0)`}),o9(i5,{corner:h,dimensions:f,lastDimensions:i,componentsTree:{...as.value.componentsTree,width:b}})},[]),className:o6("absolute z-50","flex items-center justify-center","group","transition-colors select-none","peer",{"resize-left peer/left":"left"===e,"resize-right peer/right z-10":"right"===e,"resize-top peer/top":"top"===e,"resize-bottom peer/bottom":"bottom"===e}),children:ra("span",{className:"resize-line-wrapper",children:ra("span",{className:"resize-line",children:ra(i2,{name:"icon-ellipsis",size:18,className:o6("text-neutral-400",("left"===e||"right"===e)&&"rotate-90")})})})})},cq={horizontal:{width:20,height:48},vertical:{width:48,height:20}},cK=()=>{let e=e1(null),t=e1(!1),r=e1(0),n=e1(0),i=e1(!1),o=e5((o=!0)=>{let a,l;if(!e.current)return;let{corner:s}=as.value;if(ap.value){let e=cq[ap.value.orientation||"horizontal"];a=e.width,l=e.height}else if(t.current){let e=as.value.lastDimensions;a=cB(e.width,0,!0),l=cB(e.height,0,!1),i.current&&(i.current=!1)}else a=r.current,l=n.current;let c=cU(s,a,l);if(ap.value){let{corner:e,orientation:t="horizontal"}=ap.value,r=cq[t],n=ai();switch(e){case"top-left":c="horizontal"===t?{x:-1,y:n.top}:{x:n.left,y:-1};break;case"bottom-left":c="horizontal"===t?{x:-1,y:window.innerHeight-r.height-n.bottom}:{x:n.left,y:window.innerHeight-r.height+1};break;case"top-right":c="horizontal"===t?{x:window.innerWidth-r.width+1,y:n.top}:{x:window.innerWidth-r.width-n.right,y:-1};break;default:c="horizontal"===t?{x:window.innerWidth-r.width+1,y:window.innerHeight-r.height-n.bottom}:{x:window.innerWidth-r.width-n.right,y:window.innerHeight-r.height+1}}}let d=a<550||l<400,u=e.current,p=u.style,h=null,m=()=>{ac(),u.removeEventListener("transitionend",m),h&&(cancelAnimationFrame(h),h=null)};u.addEventListener("transitionend",m),p.transition="all 0.25s cubic-bezier(0, 0, 0.2, 1)",h=requestAnimationFrame(()=>{p.width=`${a}px`,p.height=`${l}px`,p.transform=`translate3d(${c.x}px, ${c.y}px, 0)`,h=null});let f=ai(),g={isFullWidth:a>=window.innerWidth-f.left-f.right,isFullHeight:l>=window.innerHeight-f.top-f.bottom,width:a,height:l,position:c};as.value={corner:s,dimensions:g,lastDimensions:t?as.value.lastDimensions:a>r.current?g:as.value.lastDimensions,componentsTree:as.value.componentsTree},o&&!d&&o9(i5,{corner:as.value.corner,dimensions:as.value.dimensions,lastDimensions:as.value.lastDimensions,componentsTree:as.value.componentsTree}),ac()},[]),a=e5(t=>{if(t.target.closest("button, a, input, textarea, select, pre, [contenteditable], [data-react-scan-selectable]")||(t.preventDefault(),!e.current))return;let r=e.current,n=r.style,{dimensions:i}=as.value,a=t.clientX,l=t.clientY,s=i.position.x,c=i.position.y,d=s,u=c,p=null,h=!1,m=a,f=l,g=e=>{p||(h=!0,m=e.clientX,f=e.clientY,p=requestAnimationFrame(()=>{let e=m-a,t=f-l;d=Number(s)+e,u=Number(c)+t,n.transition="none",n.transform=`translate3d(${d}px, ${u}px, 0)`;let r=d+i.width,h=u+i.height,w=Math.max(0,-d),b=Math.max(0,r-window.innerWidth),x=Math.max(0,-u),y=Math.max(0,h-window.innerHeight),k=Math.min(i.width,w+b),_=Math.min(i.height,x+y),N=k*i.height+_*i.width-k*_>.35*(i.width*i.height);if(!N&&c5.options.value.showFPS){let e=d+i.width;N=e<=0||e-100>=window.innerWidth||u+i.height<=0||u>=window.innerHeight}if(N){let e,t=d+i.width/2,r=u+i.height/2,n=window.innerWidth/2,a=window.innerHeight/2;e=t<n?r<a?"top-left":"bottom-left":r<a?"top-right":"bottom-right";let l=Math.max(w,b),s=Math.max(x,y);as.value={...as.value,corner:e,lastDimensions:{...i,position:cU(e,i.width,i.height)}};let c={corner:e,orientation:l>s?"horizontal":"vertical"};ap.value=c,o9(i4,c),o9(i5,as.value),o(!1),document.removeEventListener("pointermove",g),document.removeEventListener("pointerup",v),p&&(cancelAnimationFrame(p),p=null)}p=null}))},v=()=>{if(!r)return;p&&(cancelAnimationFrame(p),p=null),document.removeEventListener("pointermove",g),document.removeEventListener("pointerup",v);let e=Math.abs(m-a),t=Math.abs(f-l),o=Math.sqrt(e*e+t*t);if(!h||o<60)return;let w=((e,t,r,n,i=100)=>{let o=void 0!==r?e-r:0,a=void 0!==n?t-n:0,l=window.innerWidth/2,s=window.innerHeight/2,c=o>i,d=a>i;if(c||o<-i){let e=t>s;return c?e?"bottom-right":"top-right":e?"bottom-left":"top-left"}if(d||a<-i){let t=e>l;return d?t?"bottom-right":"bottom-left":t?"top-right":"top-left"}return e>l?t>s?"bottom-right":"top-right":t>s?"bottom-left":"top-left"})(m,f,a,l,"focused"===c2.inspectState.value.kind?80:40);if(w===as.value.corner){n.transition="transform 0.25s cubic-bezier(0, 0, 0.2, 1)";let e=as.value.dimensions.position;requestAnimationFrame(()=>{n.transform=`translate3d(${e.x}px, ${e.y}px, 0)`});return}let b=cU(w,i.width,i.height);if(d===s&&u===c)return;let x=()=>{n.transition="none",ac(),r.removeEventListener("transitionend",x),p&&(cancelAnimationFrame(p),p=null)};r.addEventListener("transitionend",x),n.transition="transform 0.25s cubic-bezier(0, 0, 0.2, 1)",requestAnimationFrame(()=>{n.transform=`translate3d(${b.x}px, ${b.y}px, 0)`}),as.value={corner:w,dimensions:{isFullWidth:i.isFullWidth,isFullHeight:i.isFullHeight,width:i.width,height:i.height,position:b},lastDimensions:as.value.lastDimensions,componentsTree:as.value.componentsTree},o9(i5,{corner:w,dimensions:as.value.dimensions,lastDimensions:as.value.lastDimensions,componentsTree:as.value.componentsTree})};document.addEventListener("pointermove",g),document.addEventListener("pointerup",v)},[]),l=e5(t=>{if(t.preventDefault(),!e.current||!ap.value)return;let{corner:n,orientation:i="horizontal"}=ap.value,a=t.clientX,l=t.clientY,s=!1,c=t=>{if(s)return;let u=t.clientX-a,p=t.clientY-l,h=!1;"horizontal"===i?n.endsWith("left")&&u>50?h=!0:n.endsWith("right")&&u<-50&&(h=!0):n.startsWith("top")&&p>50?h=!0:n.startsWith("bottom")&&p<-50&&(h=!0),h&&(s=!0,ap.value=null,o9(i4,null),0===r.current&&e.current?requestAnimationFrame(()=>{if(e.current){e.current.style.width="min-content",r.current=e.current.offsetWidth||300;let n=as.value.lastDimensions,i=cB(n.width,0,!0),a=cB(n.height,0,!1),l=t.clientX-i/2,s=t.clientY-a/2,c=ai();l=Math.max(c.left,Math.min(l,window.innerWidth-i-c.right)),s=Math.max(c.top,Math.min(s,window.innerHeight-a-c.bottom)),as.value={...as.value,dimensions:{...as.value.dimensions,position:{x:l,y:s}}},o(!0),ad.value=o7(i3)||{view:"none"},setTimeout(()=>{if(e.current){let r=new PointerEvent("pointerdown",{clientX:t.clientX,clientY:t.clientY,pointerId:t.pointerId,bubbles:!0});e.current.dispatchEvent(r)}},100)}}):(o(!0),ad.value=o7(i3)||{view:"none"}),document.removeEventListener("pointermove",c),document.removeEventListener("pointerup",d))},d=()=>{document.removeEventListener("pointermove",c),document.removeEventListener("pointerup",d)};document.addEventListener("pointermove",c),document.addEventListener("pointerup",d)},[]);eQ(()=>{if(!e.current)return;ae(i3),ap.value?(n.current=36,r.current=0):(e.current.style.width="min-content",n.current=36,r.current=e.current.offsetWidth);let a=ai();e.current.style.maxWidth=`calc(100vw - ${a.left+a.right}px)`,e.current.style.maxHeight=`calc(100vh - ${a.top+a.bottom}px)`,o(),"focused"===c2.inspectState.value.kind||ap.value||i.current||(as.value={...as.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:r.current,height:n.current,position:as.value.dimensions.position}}),aa.value=e.current;let l=as.subscribe(t=>{if(!e.current)return;let{x:r,y:n}=t.dimensions.position,{width:i,height:o}=t.dimensions,a=e.current;requestAnimationFrame(()=>{a.style.transform=`translate3d(${r}px, ${n}px, 0)`,a.style.width=`${i}px`,a.style.height=`${o}px`})}),s=ad.subscribe(e=>{t.current="none"!==e.view,o(),ap.value||("none"!==e.view?o9(i3,e):ae(i3))}),c=c2.inspectState.subscribe(e=>{t.current="focused"===e.kind,o()}),d=()=>{o(!0)};return window.addEventListener("resize",d,{passive:!0}),()=>{window.removeEventListener("resize",d),s(),c(),l(),o9(i5,{...al(),corner:as.value.corner})}},[]);let[s,c]=eZ(!1);eQ(()=>{c(!0)},[]);let d=ap.value,u="";if(d){let{orientation:e="horizontal",corner:t}=d;u="horizontal"===e?(null==t?void 0:t.endsWith("right"))?"rotate-180":"":(null==t?void 0:t.startsWith("bottom"))?"-rotate-90":"rotate-90"}return ra(ey,{children:[ra(cI,{}),ra(cG.Provider,{value:e.current,children:ra("div",{id:"react-scan-toolbar",dir:"ltr",ref:e,onPointerDown:d?l:a,className:o6("fixed inset-0",d?(()=>{let{orientation:e="horizontal",corner:t}=d;return"horizontal"===e?(null==t?void 0:t.endsWith("right"))?"rounded-tl-lg rounded-bl-lg shadow-lg":"rounded-tr-lg rounded-br-lg shadow-lg":(null==t?void 0:t.startsWith("bottom"))?"rounded-tl-lg rounded-tr-lg shadow-lg":"rounded-bl-lg rounded-br-lg shadow-lg"})():"rounded-lg shadow-lg","flex flex-col","font-mono text-[13px]","user-select-none","opacity-0",d?"cursor-pointer":"cursor-move","z-[124124124124]","animate-fade-in animation-duration-300 animation-delay-300","will-change-transform","[touch-action:none]"),style:{WebkitAppRegion:"no-drag"},children:d?ra("button",{type:"button",onClick:()=>{ap.value=null,o9(i4,null),0===r.current&&e.current&&requestAnimationFrame(()=>{e.current&&(e.current.style.width="min-content",r.current=e.current.offsetWidth||300,o(!0))}),ad.value=o7(i3)||{view:"none"}},className:"flex items-center justify-center w-full h-full text-white",title:"Expand toolbar",children:ra(i2,{name:"icon-chevron-right",size:16,className:o6("transition-transform",u)})}):ra(ey,{children:[ra(cV,{position:"top"}),ra(cV,{position:"bottom"}),ra(cV,{position:"left"}),ra(cV,{position:"right"}),ra(cF,{})]})})})]})},cG=eO(null),cX=()=>ra("svg",{xmlns:"http://www.w3.org/2000/svg",style:"display: none;",children:[ra("title",{children:"React Scan Icons"}),ra("symbol",{id:"icon-inspect",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),ra("path",{d:"M5 3a2 2 0 0 0-2 2"}),ra("path",{d:"M19 3a2 2 0 0 1 2 2"}),ra("path",{d:"M5 21a2 2 0 0 1-2-2"}),ra("path",{d:"M9 3h1"}),ra("path",{d:"M9 21h2"}),ra("path",{d:"M14 3h1"}),ra("path",{d:"M3 9v1"}),ra("path",{d:"M21 9v2"}),ra("path",{d:"M3 14v1"})]}),ra("symbol",{id:"icon-focus",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),ra("path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"})]}),ra("symbol",{id:"icon-next",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:ra("path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"})}),ra("symbol",{id:"icon-previous",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:ra("path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"})}),ra("symbol",{id:"icon-close",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),ra("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),ra("symbol",{id:"icon-replay",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),ra("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),ra("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),ra("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),ra("circle",{cx:"12",cy:"12",r:"1"}),ra("path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"})]}),ra("symbol",{id:"icon-ellipsis",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("circle",{cx:"12",cy:"12",r:"1"}),ra("circle",{cx:"19",cy:"12",r:"1"}),ra("circle",{cx:"5",cy:"12",r:"1"})]}),ra("symbol",{id:"icon-copy",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),ra("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]}),ra("symbol",{id:"icon-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:ra("path",{d:"M20 6 9 17l-5-5"})}),ra("symbol",{id:"icon-chevron-right",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:ra("path",{d:"m9 18 6-6-6-6"})}),ra("symbol",{id:"icon-settings",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),ra("circle",{cx:"12",cy:"12",r:"3"})]}),ra("symbol",{id:"icon-flame",viewBox:"0 0 24 24",children:ra("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),ra("symbol",{id:"icon-function",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),ra("path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}),ra("path",{d:"M9 11.2h5.7"})]}),ra("symbol",{id:"icon-triangle-alert",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),ra("path",{d:"M12 9v4"}),ra("path",{d:"M12 17h.01"})]}),ra("symbol",{id:"icon-gallery-horizontal-end",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("path",{d:"M2 7v10"}),ra("path",{d:"M6 5v14"}),ra("rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"})]}),ra("symbol",{id:"icon-search",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("circle",{cx:"11",cy:"11",r:"8"}),ra("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),ra("symbol",{id:"icon-lock",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),ra("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),ra("symbol",{id:"icon-lock-open",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),ra("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"})]}),ra("symbol",{id:"icon-sanil",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}),ra("circle",{cx:"10",cy:"13",r:"8"}),ra("path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}),ra("path",{d:"M18 3 19.1 5.2"})]})]}),cY=class extends ek{constructor(){super(...arguments),iX(this,"state",{hasError:!1,error:null}),iX(this,"handleReset",()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?ra("div",{className:"fixed bottom-4 right-4 z-[124124124124]",children:ra("div",{className:"p-3 bg-black rounded-lg shadow-lg w-80",children:[ra("div",{className:"flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",children:[ra(i2,{name:"icon-flame",className:"text-red-500",size:14}),"React Scan ran into a problem"]}),ra("div",{className:"p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",children:(null==(e=this.state.error)?void 0:e.message)||JSON.stringify(this.state.error)}),ra("button",{type:"button",onClick:this.handleReset,className:"px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",children:"Restart"})]})}):this.props.children}},cJ=!1,cZ=["top","right","bottom","left"],cQ=e=>{if(ar(e))return{ok:!0,value:e};if(!an(e))return{ok:!1,error:`- safeArea must be a non-negative number or { top?, right?, bottom?, left? }. Got "${JSON.stringify(e)}"`};let t={};for(let r of cZ){let n=e[r];if(void 0!==n){if(!ar(n))return{ok:!1,error:`- safeArea.${r} must be a non-negative number. Got "${JSON.stringify(n)}"`};t[r]=n}}return{ok:!0,value:t}},c0=null,c1=null,c2={wasDetailsOpen:tg(!0),isInIframe:tg(iY&&window.self!==window.top),inspectState:tg({kind:"uninitialized"}),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:tg(0),interactionListeningForRenders:null,changesListeners:new Map},c5={instrumentation:null,componentAllowList:null,options:tg({enabled:!0,log:!1,showToolbar:!0,animationSpeed:"fast",dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,Store:c2,version:"0.5.7"};iY&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=c5.version);var c4=e=>{let t=[],r={};for(let n in e){let i=e[n];switch(n){case"enabled":case"log":case"showToolbar":case"showNotificationCount":case"dangerouslyForceRunInProduction":case"showFPS":case"allowInIframe":case"useOffscreenCanvasWorker":"boolean"!=typeof i?t.push(`- ${n} must be a boolean. Got "${i}"`):r[n]=i;break;case"animationSpeed":["slow","fast","off"].includes(i)?r[n]=i:t.push(`- Invalid animation speed "${i}". Using default "fast"`);break;case"safeArea":{let e=cQ(i);e.ok?r.safeArea=e.value:t.push(e.error);break}case"onCommitStart":"function"!=typeof i?t.push(`- ${n} must be a function. Got "${i}"`):r.onCommitStart=i;break;case"onCommitFinish":"function"!=typeof i?t.push(`- ${n} must be a function. Got "${i}"`):r.onCommitFinish=i;break;case"onRender":"function"!=typeof i?t.push(`- ${n} must be a function. Got "${i}"`):r.onRender=i;break;default:t.push(`- Unknown option "${n}"`)}}return t.length>0&&console.warn(`[React Scan] Invalid options:
${t.join("\n")}`),r},c3=null,c6=()=>{if(!1===c3)return!1;null!=m||(m=T());let e=Array.from(m.renderers.values());if(0===e.length)return null;for(let t of e)if("production"!==H(t))return c3=!1,!1;return!0},c8=e=>{var t,r;let n,i,o,a,l,s,c,d,h,m,f,g,v,w,b;null==(t=window.reactScanCleanupListeners)||t.call(window);let x=(n=(e=>{let t;null==u||u(),t=()=>{document.hidden&&(sE=Date.now())},document.addEventListener("visibilitychange",t),u=()=>{document.removeEventListener("visibilitychange",t)};let r=new Map,n=new Map,i=t=>{if(!t.interactionId)return;if(t.interactionId&&t.target&&!n.has(t.interactionId)&&n.set(t.interactionId,t.target),t.target){let e=t.target;for(;e;){if("react-scan-toolbar-root"===e.id||"react-scan-root"===e.id)return;e=e.parentElement}}let i=r.get(t.interactionId);if(i)t.duration>i.latency?(i.entries=[t],i.latency=t.duration):t.duration===i.latency&&t.startTime===i.entries[0].startTime&&i.entries.push(t);else{var o;let n=["pointerup","click"].includes(o=t.name)?"pointer":(o.includes("key"),["keydown","keyup"].includes(o))?"keyboard":null;if(!n)return;let i={id:t.interactionId,latency:t.duration,entries:[t],target:t.target,type:n,startTime:t.startTime,endTime:Date.now(),processingStart:t.processingStart,processingEnd:t.processingEnd,duration:t.duration,inputDelay:t.processingStart-t.startTime,processingDuration:t.processingEnd-t.processingStart,presentationDelay:t.duration-(t.processingEnd-t.startTime),timestamp:Date.now(),timeSinceTabInactive:"never-hidden"===sE?"never-hidden":Date.now()-sE,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};r.set(i.id,i),sC||(sC=requestAnimationFrame(()=>{requestAnimationFrame(()=>{e(r.get(i.id)),sC=null})}))}},o=new PerformanceObserver(e=>{let t=e.getEntries();for(let e=0,r=t.length;e<r;e++)i(t[e])});try{o.observe({type:"event",buffered:!0,durationThreshold:16}),o.observe({type:"first-input",buffered:!0})}catch{}return()=>o.disconnect()})(e=>{sf.publish({kind:"entry-received",entry:e},"recording")}),i=e=>{p=e.composedPath().map(e=>e.id).filter(Boolean).includes("react-scan-toolbar")},document.addEventListener("mouseover",i),sH=i,o=()=>{sH&&document.removeEventListener("mouseover",sH)},a=()=>{sL=performance.now(),sI=performance.timeOrigin},document.addEventListener("visibilitychange",a),l=()=>{document.removeEventListener("visibilitychange",a)},d=function e(){let t=null;sO=null,t=sR(sO={});let r=performance.timeOrigin,n=performance.now();return s=requestAnimationFrame(()=>{c=setTimeout(()=>{let i=performance.now(),o=i-n,a=performance.timeOrigin;sW.push(i+a);let l=sW.filter(e=>i+a-e<=1e3),s=l.length;sW=l;let c=null!==sL&&null!==sI?i+a-(sI+sL)<100:null,d=null!==p&&p;!(o>150)||c||"visible"!==document.visibilityState||d||sP.getState().actions.addEvent({kind:"long-render",id:i0(),data:{endAt:a+i,startAt:n+r,meta:{fiberRenders:sO,latency:o,fps:s}}}),sL=null,sI=null,null==t||t(),e()},0)}),t}(),h=()=>{d(),cancelAnimationFrame(s),clearTimeout(c)},f=sA("pointer",{onComplete:m=async(e,t,r)=>{sP.getState().actions.addEvent({kind:"interaction",id:i0(),data:{startAt:t.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...t,kind:r.kind}}});let n=sf.getChannelState("recording");t.detailedTiming.stopListeningForRenders(),n.length&&sf.updateChannelState("recording",()=>new sh(50))}}),g=sA("keyboard",{onComplete:m}),r=e=>{sm.setState(sh.fromArray(sm.getCurrentState().concat(e),150))},v=sf.subscribe("recording",e=>{let t="auto-complete-race"===e.kind?sT.find(t=>t.interactionUUID===e.interactionUUID):((e,t)=>{let r=null;for(let n of t){if(n.type!==e.type)continue;if(null===r){r=n;continue}let t=(e,t)=>Math.abs(e.startDateTime)-(t.startTime+t.timeOrigin);t(n,e)<t(r,e)&&(r=n)}return r})(e.entry,sT);t&&r(t.completeInteraction(e))}),()=>{o(),l(),h(),n(),f(),v(),g()}),y=c7();window.reactScanCleanupListeners=()=>{x(),null==y||y()};let k=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!e){null==k||k.remove();return}null==k||k.remove();let{shadowRoot:_}=(()=>{if(c0&&c1)return{rootContainer:c0,shadowRoot:c1};(c0=document.createElement("div")).id="react-scan-root",c1=c0.attachShadow({mode:"open"});let e=document.createElement("style");return e.textContent=si,c1.appendChild(e),document.documentElement.appendChild(c0),{rootContainer:c0,shadowRoot:c1}})();(w=document.createElement("div")).id="react-scan-toolbar-root",window.__REACT_SCAN_TOOLBAR_CONTAINER__=w,_.appendChild(w),eD(ra(cY,{children:ra(ey,{children:[ra(cX,{}),ra(cK,{})]})}),w),b=w.remove.bind(w),w.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,w.hasChildNodes()&&(eD(null,w),eD(null,w)),b()}},c7=()=>{try{let e=document.documentElement;return(e=>{if(!(co=(ci=document.createElement("canvas")).getContext("2d",{alpha:!0})))return null;let t=window.devicePixelRatio||1,{innerWidth:r,innerHeight:n}=window;ci.style.width=`${r}px`,ci.style.height=`${n}px`,ci.width=r*t,ci.height=n*t,ci.style.position="fixed",ci.style.left="0",ci.style.top="0",ci.style.pointerEvents="none",ci.style.zIndex="2147483600",co.scale(t,t),e.appendChild(ci),cu&&window.removeEventListener("resize",cu);let i=()=>{if(!ci||!co)return;let e=window.devicePixelRatio||1,{innerWidth:t,innerHeight:r}=window;ci.style.width=`${t}px`,ci.style.height=`${r}px`,ci.width=t*e,ci.height=r*e,co.scale(e,e),cd()};return cu=i,window.addEventListener("resize",i),ca.subscribe(()=>{requestAnimationFrame(()=>{cd()})}),cp})(e)}catch(e){"verbose"===c5.options.value._debug&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}},c9=new WeakSet,de=e.i(15401);e.s(["ReactScan",0,function(e){return(0,de.useEffect)(()=>{((e={})=>{(e=>{var t;try{let r=c4(e);if(0===Object.keys(r).length)return;let n="showToolbar"in r&&void 0!==r.showToolbar,i={...c5.options.value,...r},{instrumentation:o}=c5;o&&"enabled"in r&&(o.isPaused.value=!1===r.enabled),c5.options.value=i;try{let e=null==(t=o7("react-scan-options"))?void 0:t.enabled;"boolean"==typeof e&&(i.enabled=e)}catch(e){"verbose"===c5.options.value._debug&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}return o9("react-scan-options",(e=>{let{onCommitStart:t,onRender:r,onCommitFinish:n,...i}=e;return i})(i)),n&&c8(!!i.showToolbar),i}catch(e){"verbose"===c5.options.value._debug&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}})(e),(!c2.isInIframe.value||c5.options.value.allowInIframe||c5.runInAllEnvironments)&&(!1!==e.enabled||!0===e.showToolbar)&&(()=>{try{if(!iY||!c5.runInAllEnvironments&&c6()&&!c5.options.value.dangerouslyForceRunInProduction)return;(()=>{if(!cJ){if(cJ=!0,!("u"<typeof window)&&!window.__REACT_GRAB__&&navigator.onLine&&iK.version)try{fetch(`https://www.react-grab.com/api/version?source=react-scan&v=${iK.version}&t=${Date.now()}`,{referrerPolicy:"origin",keepalive:!0,priority:"low",cache:"no-store"}).then(e=>e.ok?e.text():null).then(e=>{if(!e)return;let t=e.trim();/^\d+\.\d+\.\d+/.test(t)&&t!==iK.version&&console.warn(`[React Scan] react-grab v${iK.version} is outdated (latest: v${t}). Update react-scan to pick up the newer react-grab.`)}).catch(()=>null)}catch{}}})();let e=o7("react-scan-options");if(e){let t=c4(e);Object.keys(t).length>0&&(c5.options.value={...c5.options.value,...t})}let t=c5.options;(e=>{var t,r;let n,i,o;if(globalThis.__REACT_SCAN_STOP__||sn)return;sn=!0;let a=!1,l=()=>{a||(n&&cancelAnimationFrame(n),n=requestAnimationFrame(()=>{a=!0;let t=(()=>{var e;let t,r;(r=document.querySelector("[data-react-scan]"))&&r.remove();let n=document.createElement("div");n.setAttribute("data-react-scan","true");let i=n.attachShadow({mode:"open"}),o=document.createElement("canvas");if(o.style.position="fixed",o.style.top="0",o.style.left="0",o.style.pointerEvents="none",o.style.zIndex="2147483646",o.setAttribute("aria-hidden","true"),i.appendChild(o),!o)return null;lZ=se(),lY=o;let{innerWidth:a,innerHeight:l}=window;o.style.width=`${a}px`,o.style.height=`${l}px`;let s=a*lZ,c=l*lZ;o.width=s,o.height=c;let d=!1===c5.options.value.useOffscreenCanvasWorker;if(l9&&!window.__REACT_SCAN_EXTENSION__&&!d)try{let e=URL.createObjectURL(new Blob(['"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var T=(t,n)=>{let r=n-t;return Math.abs(r)<.5?n:t+r*.2};var x="115,97,230";function P(t,n){return n[0]-t[0]}function F(t){return[...t.entries()].sort(P)}function v([t,n]){let r=`${n.slice(0,4).join(", ")} \\xD7${t}`;return r.length>40&&(r=`${r.slice(0,40)}\\u2026`),r}var $=t=>{let n=new Map;for(let{name:e,count:u}of t)n.set(e,(n.get(e)||0)+u);let r=new Map;for(let[e,u]of n){let A=r.get(u);A?A.push(e):r.set(u,[e])}let d=F(r),a=v(d[0]);for(let e=1,u=d.length;e<u;e++)a+=", "+v(d[e]);return a.length>40?`${a.slice(0,40)}\\u2026`:a},H=t=>{let n=0;for(let r of t)n+=r.width*r.height;return n};var N=(t,n)=>{let r=t.getContext("2d",{alpha:!0});return r&&r.scale(n,n),r},X=(t,n,r,d)=>{t.clearRect(0,0,n.width/r,n.height/r);let a=new Map,e=new Map;for(let i of d.values()){let{x:o,y:c,width:l,height:g,targetX:s,targetY:f,targetWidth:h,targetHeight:m,frame:O}=i;s!==o&&(i.x=T(o,s)),f!==c&&(i.y=T(c,f)),h!==l&&(i.width=T(l,h)),m!==g&&(i.height=T(g,m));let M=`${s??o},${f??c}`,L=`${M},${h??l},${m??g}`,S=a.get(M);S?S.push(i):a.set(M,[i]);let C=1-O/45;i.frame++;let _=e.get(L)||{x:o,y:c,width:l,height:g,alpha:C};C>_.alpha&&(_.alpha=C),e.set(L,_)}for(let{x:i,y:o,width:c,height:l,alpha:g}of e.values()){t.strokeStyle=`rgba(${x},${g})`,t.lineWidth=1;let s=Math.round(i)+.5,f=Math.round(o)+.5,h=Math.round(c),m=Math.round(l);t.beginPath(),t.rect(s,f,h,m),t.stroke(),t.fillStyle=`rgba(${x},${g*.1})`,t.fill()}t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let i of a.values()){let o=i[0],{x:c,y:l,frame:g}=o,s=1-g/45,f=$(i),{width:h}=t.measureText(f),m=11;u.set(`${c},${l},${h},${f}`,{text:f,width:h,height:m,alpha:s,x:c,y:l,outlines:i});let O=l-m-4;if(O<0&&(O=0),g>45)for(let M of i)d.delete(String(M.id))}let A=Array.from(u.entries()).sort(([i,o],[c,l])=>H(l.outlines)-H(o.outlines));for(let[i,o]of A)if(u.has(i))for(let[c,l]of u.entries()){if(i===c)continue;let{x:g,y:s,width:f,height:h}=o,{x:m,y:O,width:M,height:L}=l;g+f>m&&m+M>g&&s+h>O&&O+L>s&&(o.text=$(o.outlines.concat(l.outlines)),o.width=t.measureText(o.text).width,u.delete(c))}for(let i of u.values()){let{x:o,y:c,alpha:l,width:g,height:s,text:f}=i,h=c-s-4;h<0&&(h=0),t.fillStyle=`rgba(${x},${l})`,t.fillRect(o,h,g+4,s+4),t.fillStyle=`rgba(255,255,255,${l})`,t.fillText(f,o+2,h+s)}return d.size>0};var p=null,w=null,b=1,y=new Map,E=null,R=()=>{if(!w||!p)return;X(w,p,b,y)?E=requestAnimationFrame(R):E=null};self.onmessage=t=>{let{type:n}=t.data;if(n==="init"&&(p=t.data.canvas,b=t.data.dpr,p&&(p.width=t.data.width,p.height=t.data.height,w=N(p,b))),!(!p||!w)){if(n==="resize"){b=t.data.dpr,p.width=t.data.width*b,p.height=t.data.height*b,w.resetTransform(),w.scale(b,b),R();return}if(n==="draw-outlines"){let{data:r,names:d}=t.data,a=new Float32Array(r);for(let e=0;e<a.length;e+=7){let u=a[e+2],A=a[e+3],i=a[e+4],o=a[e+5],c=a[e+6],l={id:a[e],name:d[e/7],count:a[e+1],x:u,y:A,width:i,height:o,frame:0,targetX:u,targetY:A,targetWidth:i,targetHeight:o,didCommit:c},g=String(l.id),s=y.get(g);s?(s.count++,s.frame=0,s.targetX=u,s.targetY=A,s.targetWidth=i,s.targetHeight=o,s.didCommit=c):y.set(g,l)}E||(E=requestAnimationFrame(R));return}if(n==="scroll"){let{deltaX:r,deltaY:d}=t.data;for(let a of y.values()){let e=a.x-r,u=a.y-d;a.targetX=e,a.targetY=u}}}};})();\n'],{type:"application/javascript"}));lX=new Worker(e);let t=o.transferControlToOffscreen();lX.postMessage({type:"init",canvas:t,width:o.width,height:o.height,dpr:lZ},[t])}catch(e){lX=null,"verbose"===c5.options.value._debug&&console.warn("Failed to initialize OffscreenCanvas worker:",e)}lX||(e=lZ,(t=o.getContext("2d",{alpha:!0}))&&t.scale(e,e),lJ=t);let u=!1;window.addEventListener("resize",()=>{u||(u=!0,setTimeout(()=>{let e=window.innerWidth,t=window.innerHeight;lZ=se(),o.style.width=`${e}px`,o.style.height=`${t}px`,lX?lX.postMessage({type:"resize",width:e,height:t,dpr:lZ}):(o.width=e*lZ,o.height=t*lZ,lJ&&(lJ.resetTransform(),lJ.scale(lZ,lZ)),l7()),u=!1}))});let p=window.scrollX,h=window.scrollY,m=!1;return window.addEventListener("scroll",()=>{m||(m=!0,setTimeout(()=>{let{scrollX:e,scrollY:t}=window,r=e-p,n=t-h;p=e,h=t,lX?lX.postMessage({type:"scroll",deltaX:r,deltaY:n}):requestAnimationFrame(lG.bind(null,l0,r,n)),m=!1},32))}),setInterval(()=>{l2.size&&requestAnimationFrame(l8)},32),i.appendChild(o),n})();t&&document.documentElement.appendChild(t),e()}))},s=(t="react-scan-devtools-0.1.0",r={onCommitStart:()=>{var e,t;null==(t=(e=c5.options.value).onCommitStart)||t.call(e)},onActive:(i=!1,()=>{globalThis.__REACT_SCAN_STOP__||i||(i=!0,l(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:c5}),clearInterval(d),d=setInterval(()=>{st&&(c2.lastReportTime.value=Date.now(),st=!1)},50),(()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log("%c[·] %cReact Scan","font-weight:bold;color:#7a68e8;font-size:20px;","font-weight:bold;font-size:14px;")})())}),onError:()=>{},isValidFiber:sr,onRender:(e,t)=>{var r,n,i,o;z(e)&&(null==(r=c2.interactionListeningForRenders)||r.call(c2,e,t));let a=null==(n=c5.instrumentation)?void 0:n.isPaused.value,l="inspect-off"===c2.inspectState.value.kind||"uninitialized"===c2.inspectState.value.kind;a&&l||(a||(e=>{if(!z(e))return;let t="string"==typeof e.type?e.type:I(e);if(!t)return;let r=l1.get(e),n=(e=>{let t=[],r=[];for(A(e)?t.push(e):e.child&&r.push(e.child);r.length;){let e=r.pop();if(!e)break;A(e)?t.push(e):e.child&&r.push(e.child),e.sibling&&r.push(e.sibling)}return t})(e),i=R(e);r?r.count++:(l1.set(e,{name:t,count:1,elements:n.map(e=>e.stateNode),didCommit:+!!i}),l2.add(e))})(e),c5.options.value.log&&(e=>{var t;let r=new Map;for(let n=0,i=e.length;n<i;n++){let i=e[n];if(!i.componentName)continue;let o=null!=(t=r.get(i.componentName))?t:[],a=iZ([{aggregatedCount:1,computedKey:null,name:i.componentName,frame:null,...i,changes:{type:i.changes.reduce((e,t)=>e|t.type,0),unstable:i.changes.some(e=>e.unstable)},phase:i.phase,computedCurrent:null}]);if(!a)continue;let l=null,s=null;if(i.changes)for(let e=0,t=i.changes.length;e<t;e++){let{name:t,prevValue:r,nextValue:n,unstable:a,type:c}=i.changes[e];1===c?(null!=l||(l={}),null!=s||(s={}),l[`${a?"⚠️":""}${t} (prev)`]=r,s[`${a?"⚠️":""}${t} (next)`]=n):o.push({prev:r,next:n,type:4===c?"context":"state",unstable:null!=a&&a})}l&&s&&o.push({prev:l,next:s,type:"props",unstable:!1}),r.set(a,o)}for(let[e,t]of Array.from(r.entries())){for(let{type:r,prev:n,next:i,unstable:o}of(console.group(`%c${e}`,"background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;"),t))console.log(`${r}:`,o?"⚠️":"",n,"!==",i);console.groupEnd()}})(t),"focused"===c2.inspectState.value.kind&&(ab.value=Date.now()),l||(e=>{var t,r;if(z(e)&&!1!==c5.options.value.showToolbar&&"focused"===c2.inspectState.value.kind){let{selfTime:n}=O(e),i=I(e.type),o=V(e),a=c2.reportData.get(o),l=null!=(t=null==a?void 0:a.count)?t:0,s=null!=(r=null==a?void 0:a.time)?r:0,c=c2.changesListeners.get(V(e));if(null==c?void 0:c.length){let t,r=a8(e).map(e=>({type:1,name:e.name,value:e.value,prevValue:e.prevValue,unstable:!1})),n=(e=>{var t,r;if(!e)return[];let n=[];if(0===e.tag||11===e.tag||15===e.tag||14===e.tag){let r=e.memoizedState,i=null==(t=e.alternate)?void 0:t.memoizedState,o=0;for(;r;){if(r.queue&&void 0!==r.memoizedState){let e={type:2,name:o.toString(),value:r.memoizedState,prevValue:null==i?void 0:i.memoizedState};iQ(e.prevValue,e.value)||n.push(e)}r=r.next,i=null==i?void 0:i.next,o++}return n}if(1===e.tag){let t={type:3,name:"state",value:e.memoizedState,prevValue:null==(r=e.alternate)?void 0:r.memoizedState};iQ(t.prevValue,t.value)||n.push(t)}return n})(e),i=(t=[],((e,t)=>{try{let r=e.dependencies,n=e.alternate?.dependencies;if(!r||!n||"object"!=typeof r||!("firstContext"in r)||"object"!=typeof n||!("firstContext"in n))return!1;let i=r.firstContext,o=n.firstContext;for(;i&&"object"==typeof i&&"memoizedValue"in i||o&&"object"==typeof o&&"memoizedValue"in o;){if(!0===t(i,o))return!0;i=i?.next,o=o?.next}}catch{}})(e,l$.bind(t)),t).map(e=>({name:e.name,type:4,value:e.value,contextType:e.contextType}));c.forEach(e=>{e({propsChanges:r,stateChanges:n,contextChanges:i})})}let d={count:l+1,time:s+n||0,renders:[],displayName:i,type:L(e.type)||null,changes:[]};c2.reportData.set(o,d),st=!0}})(e),null==(o=(i=c5.options.value).onRender)||o.call(i,e,t))},onCommitFinish:()=>{var e,t;l(),null==(t=(e=c5.options.value).onCommitFinish)||t.call(e)},onPostCommitFiberRoot(){l()},trackChanges:!1},o={isPaused:tg(!c5.options.value.enabled),fiberRoots:new WeakSet},lF.set(t,{key:t,config:r,instrumentation:o}),lD||(lD=!0,(e=>{let t=T(e.onActive);t._instrumentationSource=e.name??g;let r=t.onCommitFiberRoot;if(e.onCommitFiberRoot){let n=(t,i,o)=>{r!==n&&(r?.(t,i,o),e.onCommitFiberRoot?.(t,i,o))};t.onCommitFiberRoot=n}let n=t.onCommitFiberUnmount;if(e.onCommitFiberUnmount){let r=(i,o)=>{t.onCommitFiberUnmount===r&&(n?.(i,o),e.onCommitFiberUnmount?.(i,o))};t.onCommitFiberUnmount=r}let i=t.onPostCommitFiberRoot;if(e.onPostCommitFiberRoot){let r=(n,o)=>{t.onPostCommitFiberRoot===r&&(i?.(n,o),e.onPostCommitFiberRoot?.(n,o))};t.onPostCommitFiberRoot=r}})({name:"react-scan",onActive:r.onActive,onCommitFiberRoot(e,t){o.fiberRoots.add(t);let r=lO();for(let e of r)e.config.onCommitStart();for(let e of(((e,t)=>{let r="current"in e?e.current:e,n=J.get(e);n||(n={id:Y++,prevFiber:null},J.set(e,n));let{prevFiber:i}=n;if(r)if(null!==i){let e=i&&null!=i.memoizedState&&null!=i.memoizedState.element&&!0!==i.memoizedState.isDehydrated,n=null!=r.memoizedState&&null!=r.memoizedState.element&&!0!==r.memoizedState.isDehydrated;!e&&n?q(t,r,!1):e&&n?K(t,r,r.alternate,null):e&&!n&&G(t,r)}else q(t,r,!0);else G(t,r);n.prevFiber=r})(t.current,(e,t)=>{let r=L(e.type);if(!r)return null;let n=lO(),i=[];for(let t=0,r=n.length;t<r;t++)n[t].config.isValidFiber(e)&&i.push(t);if(!i.length)return null;let o=[];if(n.some(e=>e.config.trackChanges)){let t=lw(e).changes,r=lb(e).changes,n=lx(e).changes;for(let n of(o.push.apply(null,t.map(e=>({type:1,name:e.name,value:e.value}))),r))1===e.tag?o.push({type:3,name:n.name.toString(),value:n.value}):o.push({type:2,name:n.name.toString(),value:n.value});o.push.apply(null,n.map(e=>({type:4,name:e.name,value:e.value,contextType:Number(e.contextType)})))}let{selfTime:a,totalTime:l}=O(e),s=lM(),c={phase:lS[t],componentName:I(r),count:1,changes:o,time:a,forget:P(e),unnecessary:null,didCommit:R(e),fps:s},d=o.length>0,u=(e=>{let t=[],r=[e];for(;r.length;){let e=r.pop();e&&(A(e)&&R(e)&&M(e)&&t.push(e),e.child&&r.push(e.child),e.sibling&&r.push(e.sibling))}return t})(e).length>0;"update"===t&&((e,t,r,n,i)=>{let o=Date.now(),a=lI(e);if((n||i)&&(!a||o-(a.lastRenderTimestamp||0)>16)){var l;let n,i,s,c=a||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:o};c.renderCount=(c.renderCount||0)+1,c.selfTime=t||0,c.totalTime=r||0,c.lastRenderTimestamp=o,l={...c},n=L(e.type),i=lL(e),(s=lP.get(n))||(s=new Map,lP.set(n,s)),s.set(i,l)}})(e,a,l,d,u);for(let t=0,r=i.length;t<r;t++)n[i[t]].config.onRender(e,[c])}),r))e.config.onCommitFinish()},onPostCommitFiberRoot(){for(let e of lO())e.config.onPostCommitFiberRoot()}})),o);c5.instrumentation=s})(()=>{c8(!!t.value.showToolbar)}),iY&&setTimeout(()=>{let e;e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__,e?._instrumentationIsActive||y(e)||N(e)||console.error("[React Scan] Failed to load. Must import React Scan before React runs.")},5e3)}catch(e){"verbose"===c5.options.value._debug&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}})()})({enabled:!0})},[]),(0,f.jsx)(f.Fragment,{})}],22477)},58854,46204,e=>{"use strict";var t=e.i(98860);let r=(0,t.default)("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);e.s(["Sun",0,r],58854);let n=(0,t.default)("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]);e.s(["Moon",0,n],46204)},63780,e=>{"use strict";let t;var r,n,i,o,a,l,s,c=e.i(39230),d=e.i(15401),u=e.i(21700),p=e.i(2272),h=e.i(98860);let m=(0,h.default)("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]);var f=e.i(8587);let g=(0,h.default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);var v=e.i(67881),w=e.i(35790),b=e.i(46204),x=e.i(58854),y=e.i(26572);let k=(0,h.default)("laptop",[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",key:"1pdavp"}],["path",{d:"M20.054 15.987H3.946",key:"14rxg9"}]]);var _=e.i(91967),N=e.i(94610),S=e.i(82115),E=e.i(36098),C=e.i(27558),T=e.i(74795);function A(e){let t=e+"CollectionProvider",[r,n]=(0,S.createContextScope)(t),[i,o]=r(t,{collectionRef:{current:null},itemMap:new Map}),a=e=>{let{scope:t,children:r}=e,n=d.default.useRef(null),o=d.default.useRef(new Map).current;return(0,c.jsx)(i,{scope:t,itemMap:o,collectionRef:n,children:r})};a.displayName=t;let l=e+"CollectionSlot",s=(0,T.createSlot)(l),u=d.default.forwardRef((e,t)=>{let{scope:r,children:n}=e,i=o(l,r),a=(0,N.useComposedRefs)(t,i.collectionRef);return(0,c.jsx)(s,{ref:a,children:n})});u.displayName=l;let p=e+"CollectionItemSlot",h="data-radix-collection-item",m=(0,T.createSlot)(p),f=d.default.forwardRef((e,t)=>{let{scope:r,children:n,...i}=e,a=d.default.useRef(null),l=(0,N.useComposedRefs)(t,a),s=o(p,r);return d.default.useEffect(()=>(s.itemMap.set(a,{ref:a,...i}),()=>void s.itemMap.delete(a))),(0,c.jsx)(m,{...{[h]:""},ref:l,children:n})});return f.displayName=p,[{Provider:a,Slot:u,ItemSlot:f},function(t){let r=o(e+"CollectionConsumer",t);return d.default.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${h}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},n]}var z=new WeakMap;function M(e,t){var r,n;let i,o,a;if("at"in Array.prototype)return Array.prototype.at.call(e,t);let l=(r=e,n=t,i=r.length,(a=(o=R(n))>=0?o:i+o)<0||a>=i?-1:a);return -1===l?void 0:e[l]}function R(e){return e!=e||0===e?0:Math.trunc(e)}(class e extends Map{#e;constructor(e){super(e),this.#e=[...super.keys()],z.set(this,!0)}set(e,t){return z.get(this)&&(this.has(e)?this.#e[this.#e.indexOf(e)]=e:this.#e.push(e)),super.set(e,t),this}insert(e,t,r){let n,i=this.has(t),o=this.#e.length,a=R(e),l=a>=0?a:o+a,s=l<0||l>=o?-1:l;if(s===this.size||i&&s===this.size-1||-1===s)return this.set(t,r),this;let c=this.size+ +!i;a<0&&l++;let d=[...this.#e],u=!1;for(let e=l;e<c;e++)if(l===e){let o=d[e];d[e]===t&&(o=d[e+1]),i&&this.delete(t),n=this.get(o),this.set(t,r)}else{u||d[e-1]!==t||(u=!0);let r=d[u?e:e-1],i=n;n=this.get(r),this.delete(r),this.set(r,i)}return this}with(t,r,n){let i=new e(this);return i.insert(t,r,n),i}before(e){let t=this.#e.indexOf(e)-1;if(!(t<0))return this.entryAt(t)}setBefore(e,t,r){let n=this.#e.indexOf(e);return -1===n?this:this.insert(n,t,r)}after(e){let t=this.#e.indexOf(e);if(-1!==(t=-1===t||t===this.size-1?-1:t+1))return this.entryAt(t)}setAfter(e,t,r){let n=this.#e.indexOf(e);return -1===n?this:this.insert(n+1,t,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return this.#e=[],super.clear()}delete(e){let t=super.delete(e);return t&&this.#e.splice(this.#e.indexOf(e),1),t}deleteAt(e){let t=this.keyAt(e);return void 0!==t&&this.delete(t)}at(e){let t=M(this.#e,e);if(void 0!==t)return this.get(t)}entryAt(e){let t=M(this.#e,e);if(void 0!==t)return[t,this.get(t)]}indexOf(e){return this.#e.indexOf(e)}keyAt(e){return M(this.#e,e)}from(e,t){let r=this.indexOf(e);if(-1===r)return;let n=r+t;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.at(n)}keyFrom(e,t){let r=this.indexOf(e);if(-1===r)return;let n=r+t;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.keyAt(n)}find(e,t){let r=0;for(let n of this){if(Reflect.apply(e,t,[n,r,this]))return n;r++}}findIndex(e,t){let r=0;for(let n of this){if(Reflect.apply(e,t,[n,r,this]))return r;r++}return -1}filter(t,r){let n=[],i=0;for(let e of this)Reflect.apply(t,r,[e,i,this])&&n.push(e),i++;return new e(n)}map(t,r){let n=[],i=0;for(let e of this)n.push([e[0],Reflect.apply(t,r,[e,i,this])]),i++;return new e(n)}reduce(...e){let[t,r]=e,n=0,i=r??this.at(0);for(let r of this)i=0===n&&1===e.length?r:Reflect.apply(t,this,[i,r,n,this]),n++;return i}reduceRight(...e){let[t,r]=e,n=r??this.at(-1);for(let r=this.size-1;r>=0;r--){let i=this.at(r);n=r===this.size-1&&1===e.length?i:Reflect.apply(t,this,[n,i,r,this])}return n}toSorted(t){return new e([...this.entries()].sort(t))}toReversed(){let t=new e;for(let e=this.size-1;e>=0;e--){let r=this.keyAt(e),n=this.get(r);t.set(r,n)}return t}toSpliced(...t){let r=[...this.entries()];return r.splice(...t),new e(r)}slice(t,r){let n=new e,i=this.size-1;if(void 0===t)return n;t<0&&(t+=this.size),void 0!==r&&r>0&&(i=r-1);for(let e=t;e<=i;e++){let t=this.keyAt(e),r=this.get(t);n.set(t,r)}return n}every(e,t){let r=0;for(let n of this){if(!Reflect.apply(e,t,[n,r,this]))return!1;r++}return!0}some(e,t){let r=0;for(let n of this){if(Reflect.apply(e,t,[n,r,this]))return!0;r++}return!1}});var j=d.createContext(void 0);function $(e){let t=d.useContext(j);return e||t||"ltr"}var F=e.i(88756),D=0;function O(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var P=e.i(25717),L="focusScope.autoFocusOnMount",I="focusScope.autoFocusOnUnmount",H={bubbles:!1,cancelable:!0},W=d.forwardRef((e,t)=>{let{loop:r=!1,trapped:n=!1,onMountAutoFocus:i,onUnmountAutoFocus:o,...a}=e,[l,s]=d.useState(null),u=(0,P.useCallbackRef)(i),p=(0,P.useCallbackRef)(o),h=d.useRef(null),m=(0,N.useComposedRefs)(t,e=>s(e)),f=d.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;d.useEffect(()=>{if(n){let e=function(e){if(f.paused||!l)return;let t=e.target;l.contains(t)?h.current=t:V(h.current,{select:!0})},t=function(e){if(f.paused||!l)return;let t=e.relatedTarget;null!==t&&(l.contains(t)||V(h.current,{select:!0}))};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let r=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&V(l)});return l&&r.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),r.disconnect()}}},[n,l,f.paused]),d.useEffect(()=>{if(l){q.add(f);let e=document.activeElement;if(!l.contains(e)){let t=new CustomEvent(L,H);l.addEventListener(L,u),l.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let r=document.activeElement;for(let n of e)if(V(n,{select:t}),document.activeElement!==r)return}(U(l).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&V(l))}return()=>{l.removeEventListener(L,u),setTimeout(()=>{let t=new CustomEvent(I,H);l.addEventListener(I,p),l.dispatchEvent(t),t.defaultPrevented||V(e??document.body,{select:!0}),l.removeEventListener(I,p),q.remove(f)},0)}}},[l,u,p,f]);let g=d.useCallback(e=>{if(!r&&!n||f.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,i=document.activeElement;if(t&&i){var o;let t,n=e.currentTarget,[a,l]=[B(t=U(o=n),o),B(t.reverse(),o)];a&&l?e.shiftKey||i!==l?e.shiftKey&&i===a&&(e.preventDefault(),r&&V(l,{select:!0})):(e.preventDefault(),r&&V(a,{select:!0})):i===n&&e.preventDefault()}},[r,n,f.paused]);return(0,c.jsx)(C.Primitive.div,{tabIndex:-1,...a,ref:m,onKeyDown:g})});function U(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function B(e,t){for(let r of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(r,{upTo:t}))return r}function V(e,{select:t=!1}={}){if(e&&e.focus){var r;let n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&(r=e)instanceof HTMLInputElement&&"select"in r&&t&&e.select()}}W.displayName="FocusScope";var q=(t=[],{add(e){let r=t[0];e!==r&&r?.pause(),(t=K(t,e)).unshift(e)},remove(e){t=K(t,e),t[0]?.resume()}});function K(e,t){let r=[...e],n=r.indexOf(t);return -1!==n&&r.splice(n,1),r}var G=e.i(80927),X=e.i(94077),Y=e.i(95540),J=e.i(39323),Z="rovingFocusGroup.onEntryFocus",Q={bubbles:!1,cancelable:!0},ee="RovingFocusGroup",[et,er,en]=A(ee),[ei,eo]=(0,S.createContextScope)(ee,[en]),[ea,el]=ei(ee),es=d.forwardRef((e,t)=>(0,c.jsx)(et.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,c.jsx)(et.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,c.jsx)(ec,{...e,ref:t})})}));es.displayName=ee;var ec=d.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:n,loop:i=!1,dir:o,currentTabStopId:a,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:s,onEntryFocus:u,preventScrollOnEntryFocus:p=!1,...h}=e,m=d.useRef(null),f=(0,N.useComposedRefs)(t,m),g=$(o),[v,w]=(0,E.useControllableState)({prop:a,defaultProp:l??null,onChange:s,caller:ee}),[b,x]=d.useState(!1),y=(0,P.useCallbackRef)(u),k=er(r),S=d.useRef(!1),[T,A]=d.useState(0);return d.useEffect(()=>{let e=m.current;if(e)return e.addEventListener(Z,y),()=>e.removeEventListener(Z,y)},[y]),(0,c.jsx)(ea,{scope:r,orientation:n,dir:g,loop:i,currentTabStopId:v,onItemFocus:d.useCallback(e=>w(e),[w]),onItemShiftTab:d.useCallback(()=>x(!0),[]),onFocusableItemAdd:d.useCallback(()=>A(e=>e+1),[]),onFocusableItemRemove:d.useCallback(()=>A(e=>e-1),[]),children:(0,c.jsx)(C.Primitive.div,{tabIndex:b||0===T?-1:0,"data-orientation":n,...h,ref:f,style:{outline:"none",...e.style},onMouseDown:(0,_.composeEventHandlers)(e.onMouseDown,()=>{S.current=!0}),onFocus:(0,_.composeEventHandlers)(e.onFocus,e=>{let t=!S.current;if(e.target===e.currentTarget&&t&&!b){let t=new CustomEvent(Z,Q);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=k().filter(e=>e.focusable);eh([e.find(e=>e.active),e.find(e=>e.id===v),...e].filter(Boolean).map(e=>e.ref.current),p)}}S.current=!1}),onBlur:(0,_.composeEventHandlers)(e.onBlur,()=>x(!1))})})}),ed="RovingFocusGroupItem",eu=d.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:n=!0,active:i=!1,tabStopId:o,children:a,...l}=e,s=(0,G.useId)(),u=o||s,p=el(ed,r),h=p.currentTabStopId===u,m=er(r),{onFocusableItemAdd:f,onFocusableItemRemove:g,currentTabStopId:v}=p;return d.useEffect(()=>{if(n)return f(),()=>g()},[n,f,g]),(0,c.jsx)(et.ItemSlot,{scope:r,id:u,focusable:n,active:i,children:(0,c.jsx)(C.Primitive.span,{tabIndex:h?0:-1,"data-orientation":p.orientation,...l,ref:t,onMouseDown:(0,_.composeEventHandlers)(e.onMouseDown,e=>{n?p.onItemFocus(u):e.preventDefault()}),onFocus:(0,_.composeEventHandlers)(e.onFocus,()=>p.onItemFocus(u)),onKeyDown:(0,_.composeEventHandlers)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey)return void p.onItemShiftTab();if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let i=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(i))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(i)))return ep[i]}(e,p.orientation,p.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let i=m().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)i.reverse();else if("prev"===t||"next"===t){var r,n;"prev"===t&&i.reverse();let o=i.indexOf(e.currentTarget);i=p.loop?(r=i,n=o+1,r.map((e,t)=>r[(n+t)%r.length])):i.slice(o+1)}setTimeout(()=>eh(i))}}),children:"function"==typeof a?a({isCurrentTabStop:h,hasTabStop:null!=v}):a})})});eu.displayName=ed;var ep={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function eh(e,t=!1){let r=document.activeElement;for(let n of e)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}var em=new WeakMap,ef=new WeakMap,eg={},ev=0,ew=function(e){return e&&(e.host||ew(e.parentNode))},eb=function(e,t,r,n){var i=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var r=ew(e);return r&&t.contains(r)?r:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});eg[r]||(eg[r]=new WeakMap);var o=eg[r],a=[],l=new Set,s=new Set(i),c=function(e){!e||l.has(e)||(l.add(e),c(e.parentNode))};i.forEach(c);var d=function(e){!e||s.has(e)||Array.prototype.forEach.call(e.children,function(e){if(l.has(e))d(e);else try{var t=e.getAttribute(n),i=null!==t&&"false"!==t,s=(em.get(e)||0)+1,c=(o.get(e)||0)+1;em.set(e,s),o.set(e,c),a.push(e),1===s&&i&&ef.set(e,!0),1===c&&e.setAttribute(r,"true"),i||e.setAttribute(n,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return d(t),l.clear(),ev++,function(){a.forEach(function(e){var t=em.get(e)-1,i=o.get(e)-1;em.set(e,t),o.set(e,i),t||(ef.has(e)||e.removeAttribute(n),ef.delete(e)),i||e.removeAttribute(r)}),--ev||(em=new WeakMap,em=new WeakMap,ef=new WeakMap,eg={})}},ex=function(e,t,r){void 0===r&&(r="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),i=t||("u"<typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return i?(n.push.apply(n,Array.from(i.querySelectorAll("[aria-live], script"))),eb(n,i,r,"aria-hidden")):function(){return null}},ey=e.i(24627),ek="right-scroll-bar-position",e_="width-before-scroll-bar";function eN(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var eS="u">typeof window?d.useLayoutEffect:d.useEffect,eE=new WeakMap,eC=(void 0===r&&(r={}),(void 0===n&&(n=function(e){return e}),i=[],o=!1,a={read:function(){if(o)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return i.length?i[i.length-1]:null},useMedium:function(e){var t=n(e,o);return i.push(t),function(){i=i.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(o=!0;i.length;){var t=i;i=[],t.forEach(e)}i={push:function(t){return e(t)},filter:function(){return i}}},assignMedium:function(e){o=!0;var t=[];if(i.length){var r=i;i=[],r.forEach(e),t=i}var n=function(){var r=t;t=[],r.forEach(e)},a=function(){return Promise.resolve().then(n)};a(),i={push:function(e){t.push(e),a()},filter:function(e){return t=t.filter(e),i}}}}).options=(0,ey.__assign)({async:!0,ssr:!1},r),a),eT=function(){},eA=d.forwardRef(function(e,t){var r,n,i,o,a=d.useRef(null),l=d.useState({onScrollCapture:eT,onWheelCapture:eT,onTouchMoveCapture:eT}),s=l[0],c=l[1],u=e.forwardProps,p=e.children,h=e.className,m=e.removeScrollBar,f=e.enabled,g=e.shards,v=e.sideCar,w=e.noRelative,b=e.noIsolation,x=e.inert,y=e.allowPinchZoom,k=e.as,_=e.gapMode,N=(0,ey.__rest)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=(r=[a,t],n=function(e){return r.forEach(function(t){return eN(t,e)})},(i=(0,d.useState)(function(){return{value:null,callback:n,facade:{get current(){return i.value},set current(value){var e=i.value;e!==value&&(i.value=value,i.callback(value,e))}}}})[0]).callback=n,o=i.facade,eS(function(){var e=eE.get(o);if(e){var t=new Set(e),n=new Set(r),i=o.current;t.forEach(function(e){n.has(e)||eN(e,null)}),n.forEach(function(e){t.has(e)||eN(e,i)})}eE.set(o,r)},[r]),o),E=(0,ey.__assign)((0,ey.__assign)({},N),s);return d.createElement(d.Fragment,null,f&&d.createElement(v,{sideCar:eC,removeScrollBar:m,shards:g,noRelative:w,noIsolation:b,inert:x,setCallbacks:c,allowPinchZoom:!!y,lockRef:a,gapMode:_}),u?d.cloneElement(d.Children.only(p),(0,ey.__assign)((0,ey.__assign)({},E),{ref:S})):d.createElement(void 0===k?"div":k,(0,ey.__assign)({},E,{className:h,ref:S}),p))});eA.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},eA.classNames={fullWidth:e_,zeroRight:ek};var ez=function(e){var t=e.sideCar,r=(0,ey.__rest)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var n=t.read();if(!n)throw Error("Sidecar medium not found");return d.createElement(n,(0,ey.__assign)({},r))};ez.isSideCarExport=!0;var eM=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=s||("u">typeof __webpack_nonce__?__webpack_nonce__:void 0);return t&&e.setAttribute("nonce",t),e}())){var n,i;(n=t).styleSheet?n.styleSheet.cssText=r:n.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},eR=function(){var e=eM();return function(t,r){d.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}},ej=function(){var e=eR();return function(t){return e(t.styles,t.dynamic),null}},e$={left:0,top:0,right:0,gap:0},eF=function(e){return parseInt(e||"",10)||0},eD=function(e){var t=window.getComputedStyle(document.body),r=t["padding"===e?"paddingLeft":"marginLeft"],n=t["padding"===e?"paddingTop":"marginTop"],i=t["padding"===e?"paddingRight":"marginRight"];return[eF(r),eF(n),eF(i)]},eO=function(e){if(void 0===e&&(e="margin"),"u"<typeof window)return e$;var t=eD(e),r=document.documentElement.clientWidth,n=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,n-r+t[2]-t[0])}},eP=ej(),eL="data-scroll-locked",eI=function(e,t,r,n){var i=e.left,o=e.top,a=e.right,l=e.gap;return void 0===r&&(r="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(n,";\n   padding-right: ").concat(l,"px ").concat(n,";\n  }\n  body[").concat(eL,"] {\n    overflow: hidden ").concat(n,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(n,";"),"margin"===r&&"\n    padding-left: ".concat(i,"px;\n    padding-top: ").concat(o,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l,"px ").concat(n,";\n    "),"padding"===r&&"padding-right: ".concat(l,"px ").concat(n,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(ek," {\n    right: ").concat(l,"px ").concat(n,";\n  }\n  \n  .").concat(e_," {\n    margin-right: ").concat(l,"px ").concat(n,";\n  }\n  \n  .").concat(ek," .").concat(ek," {\n    right: 0 ").concat(n,";\n  }\n  \n  .").concat(e_," .").concat(e_," {\n    margin-right: 0 ").concat(n,";\n  }\n  \n  body[").concat(eL,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(l,"px;\n  }\n")},eH=function(){var e=parseInt(document.body.getAttribute(eL)||"0",10);return isFinite(e)?e:0},eW=function(){d.useEffect(function(){return document.body.setAttribute(eL,(eH()+1).toString()),function(){var e=eH()-1;e<=0?document.body.removeAttribute(eL):document.body.setAttribute(eL,e.toString())}},[])},eU=function(e){var t=e.noRelative,r=e.noImportant,n=e.gapMode,i=void 0===n?"margin":n;eW();var o=d.useMemo(function(){return eO(i)},[i]);return d.createElement(eP,{styles:eI(o,!t,i,r?"":"!important")})},eB=!1;if("u">typeof window)try{var eV=Object.defineProperty({},"passive",{get:function(){return eB=!0,!0}});window.addEventListener("test",eV,eV),window.removeEventListener("test",eV,eV)}catch(e){eB=!1}var eq=!!eB&&{passive:!1},eK=function(e,t){if(!(e instanceof Element))return!1;var r=window.getComputedStyle(e);return"hidden"!==r[t]&&(r.overflowY!==r.overflowX||"TEXTAREA"===e.tagName||"visible"!==r[t])},eG=function(e,t){var r=t.ownerDocument,n=t;do{if("u">typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),eX(e,n)){var i=eY(e,n);if(i[1]>i[2])return!0}n=n.parentNode}while(n&&n!==r.body)return!1},eX=function(e,t){return"v"===e?eK(t,"overflowY"):eK(t,"overflowX")},eY=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},eJ=function(e,t,r,n,i){var o,a=(o=window.getComputedStyle(t).direction,"h"===e&&"rtl"===o?-1:1),l=a*n,s=r.target,c=t.contains(s),d=!1,u=l>0,p=0,h=0;do{if(!s)break;var m=eY(e,s),f=m[0],g=m[1]-m[2]-a*f;(f||g)&&eX(e,s)&&(p+=g,h+=f);var v=s.parentNode;s=v&&v.nodeType===Node.DOCUMENT_FRAGMENT_NODE?v.host:v}while(!c&&s!==document.body||c&&(t.contains(s)||t===s))return u&&(i&&1>Math.abs(p)||!i&&l>p)?d=!0:!u&&(i&&1>Math.abs(h)||!i&&-l>h)&&(d=!0),d},eZ=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},eQ=function(e){return[e.deltaX,e.deltaY]},e0=function(e){return e&&"current"in e?e.current:e},e1=0,e2=[];let e5=(l=function(e){var t=d.useRef([]),r=d.useRef([0,0]),n=d.useRef(),i=d.useState(e1++)[0],o=d.useState(ej)[0],a=d.useRef(e);d.useEffect(function(){a.current=e},[e]),d.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var t=(0,ey.__spreadArray)([e.lockRef.current],(e.shards||[]).map(e0),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var l=d.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!a.current.allowPinchZoom;var i,o=eZ(e),l=r.current,s="deltaX"in e?e.deltaX:l[0]-o[0],c="deltaY"in e?e.deltaY:l[1]-o[1],d=e.target,u=Math.abs(s)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===u&&"range"===d.type)return!1;var p=window.getSelection(),h=p&&p.anchorNode;if(h&&(h===d||h.contains(d)))return!1;var m=eG(u,d);if(!m)return!0;if(m?i=u:(i="v"===u?"h":"v",m=eG(u,d)),!m)return!1;if(!n.current&&"changedTouches"in e&&(s||c)&&(n.current=i),!i)return!0;var f=n.current||i;return eJ(f,t,e,"h"===f?s:c,!0)},[]),s=d.useCallback(function(e){if(e2.length&&e2[e2.length-1]===o){var r="deltaY"in e?eQ(e):eZ(e),n=t.current.filter(function(t){var n;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(n=t.delta,n[0]===r[0]&&n[1]===r[1])})[0];if(n&&n.should){e.cancelable&&e.preventDefault();return}if(!n){var i=(a.current.shards||[]).map(e0).filter(Boolean).filter(function(t){return t.contains(e.target)});(i.length>0?l(e,i[0]):!a.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),c=d.useCallback(function(e,r,n,i){var o={name:e,delta:r,target:n,should:i,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(n)};t.current.push(o),setTimeout(function(){t.current=t.current.filter(function(e){return e!==o})},1)},[]),u=d.useCallback(function(e){r.current=eZ(e),n.current=void 0},[]),p=d.useCallback(function(t){c(t.type,eQ(t),t.target,l(t,e.lockRef.current))},[]),h=d.useCallback(function(t){c(t.type,eZ(t),t.target,l(t,e.lockRef.current))},[]);d.useEffect(function(){return e2.push(o),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:h}),document.addEventListener("wheel",s,eq),document.addEventListener("touchmove",s,eq),document.addEventListener("touchstart",u,eq),function(){e2=e2.filter(function(e){return e!==o}),document.removeEventListener("wheel",s,eq),document.removeEventListener("touchmove",s,eq),document.removeEventListener("touchstart",u,eq)}},[]);var m=e.removeScrollBar,f=e.inert;return d.createElement(d.Fragment,null,f?d.createElement(o,{styles:"\n  .block-interactivity-".concat(i," {pointer-events: none;}\n  .allow-interactivity-").concat(i," {pointer-events: all;}\n")}):null,m?d.createElement(eU,{noRelative:e.noRelative,gapMode:e.gapMode}):null)},eC.useMedium(l),ez);var e4=d.forwardRef(function(e,t){return d.createElement(eA,(0,ey.__assign)({},e,{ref:t,sideCar:e5}))});e4.classNames=eA.classNames;var e3=["Enter"," "],e6=["ArrowUp","PageDown","End"],e8=["ArrowDown","PageUp","Home",...e6],e7={ltr:[...e3,"ArrowRight"],rtl:[...e3,"ArrowLeft"]},e9={ltr:["ArrowLeft"],rtl:["ArrowRight"]},te="Menu",[tt,tr,tn]=A(te),[ti,to]=(0,S.createContextScope)(te,[tn,X.createPopperScope,eo]),ta=(0,X.createPopperScope)(),tl=eo(),[ts,tc]=ti(te),[td,tu]=ti(te),tp=e=>{let{__scopeMenu:t,open:r=!1,children:n,dir:i,onOpenChange:o,modal:a=!0}=e,l=ta(t),[s,u]=d.useState(null),p=d.useRef(!1),h=(0,P.useCallbackRef)(o),m=$(i);return d.useEffect(()=>{let e=()=>{p.current=!0,document.addEventListener("pointerdown",t,{capture:!0,once:!0}),document.addEventListener("pointermove",t,{capture:!0,once:!0})},t=()=>p.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",t,{capture:!0}),document.removeEventListener("pointermove",t,{capture:!0})}},[]),(0,c.jsx)(X.Root,{...l,children:(0,c.jsx)(ts,{scope:t,open:r,onOpenChange:h,content:s,onContentChange:u,children:(0,c.jsx)(td,{scope:t,onClose:d.useCallback(()=>h(!1),[h]),isUsingKeyboardRef:p,dir:m,modal:a,children:n})})})};tp.displayName=te;var th=d.forwardRef((e,t)=>{let{__scopeMenu:r,...n}=e,i=ta(r);return(0,c.jsx)(X.Anchor,{...i,...n,ref:t})});th.displayName="MenuAnchor";var tm="MenuPortal",[tf,tg]=ti(tm,{forceMount:void 0}),tv=e=>{let{__scopeMenu:t,forceMount:r,children:n,container:i}=e,o=tc(tm,t);return(0,c.jsx)(tf,{scope:t,forceMount:r,children:(0,c.jsx)(J.Presence,{present:r||o.open,children:(0,c.jsx)(Y.Portal,{asChild:!0,container:i,children:n})})})};tv.displayName=tm;var tw="MenuContent",[tb,tx]=ti(tw),ty=d.forwardRef((e,t)=>{let r=tg(tw,e.__scopeMenu),{forceMount:n=r.forceMount,...i}=e,o=tc(tw,e.__scopeMenu),a=tu(tw,e.__scopeMenu);return(0,c.jsx)(tt.Provider,{scope:e.__scopeMenu,children:(0,c.jsx)(J.Presence,{present:n||o.open,children:(0,c.jsx)(tt.Slot,{scope:e.__scopeMenu,children:a.modal?(0,c.jsx)(tk,{...i,ref:t}):(0,c.jsx)(t_,{...i,ref:t})})})})}),tk=d.forwardRef((e,t)=>{let r=tc(tw,e.__scopeMenu),n=d.useRef(null),i=(0,N.useComposedRefs)(t,n);return d.useEffect(()=>{let e=n.current;if(e)return ex(e)},[]),(0,c.jsx)(tS,{...e,ref:i,trapFocus:r.open,disableOutsidePointerEvents:r.open,disableOutsideScroll:!0,onFocusOutside:(0,_.composeEventHandlers)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>r.onOpenChange(!1)})}),t_=d.forwardRef((e,t)=>{let r=tc(tw,e.__scopeMenu);return(0,c.jsx)(tS,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>r.onOpenChange(!1)})}),tN=(0,T.createSlot)("MenuContent.ScrollLock"),tS=d.forwardRef((e,t)=>{let{__scopeMenu:r,loop:n=!1,trapFocus:i,onOpenAutoFocus:o,onCloseAutoFocus:a,disableOutsidePointerEvents:l,onEntryFocus:s,onEscapeKeyDown:u,onPointerDownOutside:p,onFocusOutside:h,onInteractOutside:m,onDismiss:f,disableOutsideScroll:g,...v}=e,w=tc(tw,r),b=tu(tw,r),x=ta(r),y=tl(r),k=tr(r),[S,E]=d.useState(null),C=d.useRef(null),T=(0,N.useComposedRefs)(t,C,w.onContentChange),A=d.useRef(0),z=d.useRef(""),M=d.useRef(0),R=d.useRef(null),j=d.useRef("right"),$=d.useRef(0),P=g?e4:d.Fragment;d.useEffect(()=>()=>window.clearTimeout(A.current),[]),d.useEffect(()=>{let e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??O()),document.body.insertAdjacentElement("beforeend",e[1]??O()),D++,()=>{1===D&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),D--}},[]);let L=d.useCallback(e=>{var t,r;return j.current===R.current?.side&&(t=e,!!(r=R.current?.area)&&function(e,t){let{x:r,y:n}=e,i=!1;for(let e=0,o=t.length-1;e<t.length;o=e++){let a=t[e],l=t[o],s=a.x,c=a.y,d=l.x,u=l.y;c>n!=u>n&&r<(d-s)*(n-c)/(u-c)+s&&(i=!i)}return i}({x:t.clientX,y:t.clientY},r))},[]);return(0,c.jsx)(tb,{scope:r,searchRef:z,onItemEnter:d.useCallback(e=>{L(e)&&e.preventDefault()},[L]),onItemLeave:d.useCallback(e=>{L(e)||(C.current?.focus(),E(null))},[L]),onTriggerLeave:d.useCallback(e=>{L(e)&&e.preventDefault()},[L]),pointerGraceTimerRef:M,onPointerGraceIntentChange:d.useCallback(e=>{R.current=e},[]),children:(0,c.jsx)(P,{...g?{as:tN,allowPinchZoom:!0}:void 0,children:(0,c.jsx)(W,{asChild:!0,trapped:i,onMountAutoFocus:(0,_.composeEventHandlers)(o,e=>{e.preventDefault(),C.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:a,children:(0,c.jsx)(F.DismissableLayer,{asChild:!0,disableOutsidePointerEvents:l,onEscapeKeyDown:u,onPointerDownOutside:p,onFocusOutside:h,onInteractOutside:m,onDismiss:f,children:(0,c.jsx)(es,{asChild:!0,...y,dir:b.dir,orientation:"vertical",loop:n,currentTabStopId:S,onCurrentTabStopIdChange:E,onEntryFocus:(0,_.composeEventHandlers)(s,e=>{b.isUsingKeyboardRef.current||e.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,c.jsx)(X.Content,{role:"menu","aria-orientation":"vertical","data-state":tJ(w.open),"data-radix-menu-content":"",dir:b.dir,...x,...v,ref:T,style:{outline:"none",...v.style},onKeyDown:(0,_.composeEventHandlers)(v.onKeyDown,e=>{let t=e.target.closest("[data-radix-menu-content]")===e.currentTarget,r=e.ctrlKey||e.altKey||e.metaKey,n=1===e.key.length;if(t){var i;let t,o,a,l,s,c;"Tab"===e.key&&e.preventDefault(),!r&&n&&(i=e.key,t=z.current+i,o=k().filter(e=>!e.disabled),a=document.activeElement,l=o.find(e=>e.ref.current===a)?.textValue,s=function(e,t,r){var n;let i=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,o=r?e.indexOf(r):-1,a=(n=Math.max(o,0),e.map((t,r)=>e[(n+r)%e.length]));1===i.length&&(a=a.filter(e=>e!==r));let l=a.find(e=>e.toLowerCase().startsWith(i.toLowerCase()));return l!==r?l:void 0}(o.map(e=>e.textValue),t,l),c=o.find(e=>e.textValue===s)?.ref.current,function e(t){z.current=t,window.clearTimeout(A.current),""!==t&&(A.current=window.setTimeout(()=>e(""),1e3))}(t),c&&setTimeout(()=>c.focus()))}let o=C.current;if(e.target!==o||!e8.includes(e.key))return;e.preventDefault();let a=k().filter(e=>!e.disabled).map(e=>e.ref.current);e6.includes(e.key)&&a.reverse(),function(e){let t=document.activeElement;for(let r of e)if(r===t||(r.focus(),document.activeElement!==t))return}(a)}),onBlur:(0,_.composeEventHandlers)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(A.current),z.current="")}),onPointerMove:(0,_.composeEventHandlers)(e.onPointerMove,t0(e=>{let t=e.target,r=$.current!==e.clientX;e.currentTarget.contains(t)&&r&&(j.current=e.clientX>$.current?"right":"left",$.current=e.clientX)}))})})})})})})});ty.displayName=tw;var tE=d.forwardRef((e,t)=>{let{__scopeMenu:r,...n}=e;return(0,c.jsx)(C.Primitive.div,{role:"group",...n,ref:t})});tE.displayName="MenuGroup";var tC=d.forwardRef((e,t)=>{let{__scopeMenu:r,...n}=e;return(0,c.jsx)(C.Primitive.div,{...n,ref:t})});tC.displayName="MenuLabel";var tT="MenuItem",tA="menu.itemSelect",tz=d.forwardRef((e,t)=>{let{disabled:r=!1,onSelect:n,...i}=e,o=d.useRef(null),a=tu(tT,e.__scopeMenu),l=tx(tT,e.__scopeMenu),s=(0,N.useComposedRefs)(t,o),u=d.useRef(!1);return(0,c.jsx)(tM,{...i,ref:s,disabled:r,onClick:(0,_.composeEventHandlers)(e.onClick,()=>{let e=o.current;if(!r&&e){let t=new CustomEvent(tA,{bubbles:!0,cancelable:!0});e.addEventListener(tA,e=>n?.(e),{once:!0}),(0,C.dispatchDiscreteCustomEvent)(e,t),t.defaultPrevented?u.current=!1:a.onClose()}}),onPointerDown:t=>{e.onPointerDown?.(t),u.current=!0},onPointerUp:(0,_.composeEventHandlers)(e.onPointerUp,e=>{u.current||e.currentTarget?.click()}),onKeyDown:(0,_.composeEventHandlers)(e.onKeyDown,e=>{let t=""!==l.searchRef.current;r||t&&" "===e.key||e3.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})})});tz.displayName=tT;var tM=d.forwardRef((e,t)=>{let{__scopeMenu:r,disabled:n=!1,textValue:i,...o}=e,a=tx(tT,r),l=tl(r),s=d.useRef(null),u=(0,N.useComposedRefs)(t,s),[p,h]=d.useState(!1),[m,f]=d.useState("");return d.useEffect(()=>{let e=s.current;e&&f((e.textContent??"").trim())},[o.children]),(0,c.jsx)(tt.ItemSlot,{scope:r,disabled:n,textValue:i??m,children:(0,c.jsx)(eu,{asChild:!0,...l,focusable:!n,children:(0,c.jsx)(C.Primitive.div,{role:"menuitem","data-highlighted":p?"":void 0,"aria-disabled":n||void 0,"data-disabled":n?"":void 0,...o,ref:u,onPointerMove:(0,_.composeEventHandlers)(e.onPointerMove,t0(e=>{n?a.onItemLeave(e):(a.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:(0,_.composeEventHandlers)(e.onPointerLeave,t0(e=>a.onItemLeave(e))),onFocus:(0,_.composeEventHandlers)(e.onFocus,()=>h(!0)),onBlur:(0,_.composeEventHandlers)(e.onBlur,()=>h(!1))})})})}),tR=d.forwardRef((e,t)=>{let{checked:r=!1,onCheckedChange:n,...i}=e;return(0,c.jsx)(tI,{scope:e.__scopeMenu,checked:r,children:(0,c.jsx)(tz,{role:"menuitemcheckbox","aria-checked":tZ(r)?"mixed":r,...i,ref:t,"data-state":tQ(r),onSelect:(0,_.composeEventHandlers)(i.onSelect,()=>n?.(!!tZ(r)||!r),{checkForDefaultPrevented:!1})})})});tR.displayName="MenuCheckboxItem";var tj="MenuRadioGroup",[t$,tF]=ti(tj,{value:void 0,onValueChange:()=>{}}),tD=d.forwardRef((e,t)=>{let{value:r,onValueChange:n,...i}=e,o=(0,P.useCallbackRef)(n);return(0,c.jsx)(t$,{scope:e.__scopeMenu,value:r,onValueChange:o,children:(0,c.jsx)(tE,{...i,ref:t})})});tD.displayName=tj;var tO="MenuRadioItem",tP=d.forwardRef((e,t)=>{let{value:r,...n}=e,i=tF(tO,e.__scopeMenu),o=r===i.value;return(0,c.jsx)(tI,{scope:e.__scopeMenu,checked:o,children:(0,c.jsx)(tz,{role:"menuitemradio","aria-checked":o,...n,ref:t,"data-state":tQ(o),onSelect:(0,_.composeEventHandlers)(n.onSelect,()=>i.onValueChange?.(r),{checkForDefaultPrevented:!1})})})});tP.displayName=tO;var tL="MenuItemIndicator",[tI,tH]=ti(tL,{checked:!1}),tW=d.forwardRef((e,t)=>{let{__scopeMenu:r,forceMount:n,...i}=e,o=tH(tL,r);return(0,c.jsx)(J.Presence,{present:n||tZ(o.checked)||!0===o.checked,children:(0,c.jsx)(C.Primitive.span,{...i,ref:t,"data-state":tQ(o.checked)})})});tW.displayName=tL;var tU=d.forwardRef((e,t)=>{let{__scopeMenu:r,...n}=e;return(0,c.jsx)(C.Primitive.div,{role:"separator","aria-orientation":"horizontal",...n,ref:t})});tU.displayName="MenuSeparator";var tB=d.forwardRef((e,t)=>{let{__scopeMenu:r,...n}=e,i=ta(r);return(0,c.jsx)(X.Arrow,{...i,...n,ref:t})});tB.displayName="MenuArrow";var[tV,tq]=ti("MenuSub"),tK="MenuSubTrigger",tG=d.forwardRef((e,t)=>{let r=tc(tK,e.__scopeMenu),n=tu(tK,e.__scopeMenu),i=tq(tK,e.__scopeMenu),o=tx(tK,e.__scopeMenu),a=d.useRef(null),{pointerGraceTimerRef:l,onPointerGraceIntentChange:s}=o,u={__scopeMenu:e.__scopeMenu},p=d.useCallback(()=>{a.current&&window.clearTimeout(a.current),a.current=null},[]);return d.useEffect(()=>p,[p]),d.useEffect(()=>{let e=l.current;return()=>{window.clearTimeout(e),s(null)}},[l,s]),(0,c.jsx)(th,{asChild:!0,...u,children:(0,c.jsx)(tM,{id:i.triggerId,"aria-haspopup":"menu","aria-expanded":r.open,"aria-controls":i.contentId,"data-state":tJ(r.open),...e,ref:(0,N.composeRefs)(t,i.onTriggerChange),onClick:t=>{e.onClick?.(t),e.disabled||t.defaultPrevented||(t.currentTarget.focus(),r.open||r.onOpenChange(!0))},onPointerMove:(0,_.composeEventHandlers)(e.onPointerMove,t0(t=>{o.onItemEnter(t),!t.defaultPrevented&&(e.disabled||r.open||a.current||(o.onPointerGraceIntentChange(null),a.current=window.setTimeout(()=>{r.onOpenChange(!0),p()},100)))})),onPointerLeave:(0,_.composeEventHandlers)(e.onPointerLeave,t0(e=>{p();let t=r.content?.getBoundingClientRect();if(t){let n=r.content?.dataset.side,i="right"===n,a=t[i?"left":"right"],s=t[i?"right":"left"];o.onPointerGraceIntentChange({area:[{x:e.clientX+(i?-5:5),y:e.clientY},{x:a,y:t.top},{x:s,y:t.top},{x:s,y:t.bottom},{x:a,y:t.bottom}],side:n}),window.clearTimeout(l.current),l.current=window.setTimeout(()=>o.onPointerGraceIntentChange(null),300)}else{if(o.onTriggerLeave(e),e.defaultPrevented)return;o.onPointerGraceIntentChange(null)}})),onKeyDown:(0,_.composeEventHandlers)(e.onKeyDown,t=>{let i=""!==o.searchRef.current;e.disabled||i&&" "===t.key||e7[n.dir].includes(t.key)&&(r.onOpenChange(!0),r.content?.focus(),t.preventDefault())})})})});tG.displayName=tK;var tX="MenuSubContent",tY=d.forwardRef((e,t)=>{let r=tg(tw,e.__scopeMenu),{forceMount:n=r.forceMount,...i}=e,o=tc(tw,e.__scopeMenu),a=tu(tw,e.__scopeMenu),l=tq(tX,e.__scopeMenu),s=d.useRef(null),u=(0,N.useComposedRefs)(t,s);return(0,c.jsx)(tt.Provider,{scope:e.__scopeMenu,children:(0,c.jsx)(J.Presence,{present:n||o.open,children:(0,c.jsx)(tt.Slot,{scope:e.__scopeMenu,children:(0,c.jsx)(tS,{id:l.contentId,"aria-labelledby":l.triggerId,...i,ref:u,align:"start",side:"rtl"===a.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{a.isUsingKeyboardRef.current&&s.current?.focus(),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,_.composeEventHandlers)(e.onFocusOutside,e=>{e.target!==l.trigger&&o.onOpenChange(!1)}),onEscapeKeyDown:(0,_.composeEventHandlers)(e.onEscapeKeyDown,e=>{a.onClose(),e.preventDefault()}),onKeyDown:(0,_.composeEventHandlers)(e.onKeyDown,e=>{let t=e.currentTarget.contains(e.target),r=e9[a.dir].includes(e.key);t&&r&&(o.onOpenChange(!1),l.trigger?.focus(),e.preventDefault())})})})})})});function tJ(e){return e?"open":"closed"}function tZ(e){return"indeterminate"===e}function tQ(e){return tZ(e)?"indeterminate":e?"checked":"unchecked"}function t0(e){return t=>"mouse"===t.pointerType?e(t):void 0}tY.displayName=tX;var t1="DropdownMenu",[t2,t5]=(0,S.createContextScope)(t1,[to]),t4=to(),[t3,t6]=t2(t1),t8=e=>{let{__scopeDropdownMenu:t,children:r,dir:n,open:i,defaultOpen:o,onOpenChange:a,modal:l=!0}=e,s=t4(t),u=d.useRef(null),[p,h]=(0,E.useControllableState)({prop:i,defaultProp:o??!1,onChange:a,caller:t1});return(0,c.jsx)(t3,{scope:t,triggerId:(0,G.useId)(),triggerRef:u,contentId:(0,G.useId)(),open:p,onOpenChange:h,onOpenToggle:d.useCallback(()=>h(e=>!e),[h]),modal:l,children:(0,c.jsx)(tp,{...s,open:p,onOpenChange:h,dir:n,modal:l,children:r})})};t8.displayName=t1;var t7="DropdownMenuTrigger",t9=d.forwardRef((e,t)=>{let{__scopeDropdownMenu:r,disabled:n=!1,...i}=e,o=t6(t7,r),a=t4(r);return(0,c.jsx)(th,{asChild:!0,...a,children:(0,c.jsx)(C.Primitive.button,{type:"button",id:o.triggerId,"aria-haspopup":"menu","aria-expanded":o.open,"aria-controls":o.open?o.contentId:void 0,"data-state":o.open?"open":"closed","data-disabled":n?"":void 0,disabled:n,...i,ref:(0,N.composeRefs)(t,o.triggerRef),onPointerDown:(0,_.composeEventHandlers)(e.onPointerDown,e=>{!n&&0===e.button&&!1===e.ctrlKey&&(o.onOpenToggle(),o.open||e.preventDefault())}),onKeyDown:(0,_.composeEventHandlers)(e.onKeyDown,e=>{!n&&(["Enter"," "].includes(e.key)&&o.onOpenToggle(),"ArrowDown"===e.key&&o.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})})});t9.displayName=t7;var re=e=>{let{__scopeDropdownMenu:t,...r}=e,n=t4(t);return(0,c.jsx)(tv,{...n,...r})};re.displayName="DropdownMenuPortal";var rt="DropdownMenuContent",rr=d.forwardRef((e,t)=>{let{__scopeDropdownMenu:r,...n}=e,i=t6(rt,r),o=t4(r),a=d.useRef(!1);return(0,c.jsx)(ty,{id:i.contentId,"aria-labelledby":i.triggerId,...o,...n,ref:t,onCloseAutoFocus:(0,_.composeEventHandlers)(e.onCloseAutoFocus,e=>{a.current||i.triggerRef.current?.focus(),a.current=!1,e.preventDefault()}),onInteractOutside:(0,_.composeEventHandlers)(e.onInteractOutside,e=>{let t=e.detail.originalEvent,r=0===t.button&&!0===t.ctrlKey,n=2===t.button||r;(!i.modal||n)&&(a.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});rr.displayName=rt,d.forwardRef((e,t)=>{let{__scopeDropdownMenu:r,...n}=e,i=t4(r);return(0,c.jsx)(tE,{...i,...n,ref:t})}).displayName="DropdownMenuGroup";var rn=d.forwardRef((e,t)=>{let{__scopeDropdownMenu:r,...n}=e,i=t4(r);return(0,c.jsx)(tC,{...i,...n,ref:t})});rn.displayName="DropdownMenuLabel";var ri=d.forwardRef((e,t)=>{let{__scopeDropdownMenu:r,...n}=e,i=t4(r);return(0,c.jsx)(tz,{...i,...n,ref:t})});ri.displayName="DropdownMenuItem";var ro=d.forwardRef((e,t)=>{let{__scopeDropdownMenu:r,...n}=e,i=t4(r);return(0,c.jsx)(tR,{...i,...n,ref:t})});ro.displayName="DropdownMenuCheckboxItem",d.forwardRef((e,t)=>{let{__scopeDropdownMenu:r,...n}=e,i=t4(r);return(0,c.jsx)(tD,{...i,...n,ref:t})}).displayName="DropdownMenuRadioGroup";var ra=d.forwardRef((e,t)=>{let{__scopeDropdownMenu:r,...n}=e,i=t4(r);return(0,c.jsx)(tP,{...i,...n,ref:t})});ra.displayName="DropdownMenuRadioItem";var rl=d.forwardRef((e,t)=>{let{__scopeDropdownMenu:r,...n}=e,i=t4(r);return(0,c.jsx)(tW,{...i,...n,ref:t})});rl.displayName="DropdownMenuItemIndicator";var rs=d.forwardRef((e,t)=>{let{__scopeDropdownMenu:r,...n}=e,i=t4(r);return(0,c.jsx)(tU,{...i,...n,ref:t})});rs.displayName="DropdownMenuSeparator",d.forwardRef((e,t)=>{let{__scopeDropdownMenu:r,...n}=e,i=t4(r);return(0,c.jsx)(tB,{...i,...n,ref:t})}).displayName="DropdownMenuArrow";var rc=d.forwardRef((e,t)=>{let{__scopeDropdownMenu:r,...n}=e,i=t4(r);return(0,c.jsx)(tG,{...i,...n,ref:t})});rc.displayName="DropdownMenuSubTrigger";var rd=d.forwardRef((e,t)=>{let{__scopeDropdownMenu:r,...n}=e,i=t4(r);return(0,c.jsx)(tY,{...i,...n,ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});rd.displayName="DropdownMenuSubContent";let ru=(0,h.default)("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),rp=(0,h.default)("circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);var rh=e.i(47163);d.forwardRef(({className:e,inset:t,children:r,...n},i)=>(0,c.jsxs)(rc,{ref:i,className:(0,rh.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent data-[state=open]:bg-accent",t&&"pl-8",e),...n,children:[r,(0,c.jsx)(ru,{className:"ml-auto h-4 w-4"})]})).displayName=rc.displayName,d.forwardRef(({className:e,...t},r)=>(0,c.jsx)(rd,{ref:r,className:(0,rh.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t})).displayName=rd.displayName;let rm=d.forwardRef(({className:e,sideOffset:t=4,...r},n)=>(0,c.jsx)(re,{children:(0,c.jsx)(rr,{ref:n,sideOffset:t,className:(0,rh.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...r})}));rm.displayName=rr.displayName;let rf=d.forwardRef(({className:e,inset:t,...r},n)=>(0,c.jsx)(ri,{ref:n,className:(0,rh.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",t&&"pl-8",e),...r}));rf.displayName=ri.displayName,d.forwardRef(({className:e,children:t,checked:r,...n},i)=>(0,c.jsxs)(ro,{ref:i,className:(0,rh.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",e),checked:r,...n,children:[(0,c.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,c.jsx)(rl,{children:(0,c.jsx)(y.Check,{className:"h-4 w-4"})})}),t]})).displayName=ro.displayName,d.forwardRef(({className:e,children:t,...r},n)=>(0,c.jsxs)(ra,{ref:n,className:(0,rh.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",e),...r,children:[(0,c.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,c.jsx)(rl,{children:(0,c.jsx)(rp,{className:"h-2 w-2 fill-current"})})}),t]})).displayName=ra.displayName,d.forwardRef(({className:e,inset:t,...r},n)=>(0,c.jsx)(rn,{ref:n,className:(0,rh.cn)("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...r})).displayName=rn.displayName,d.forwardRef(({className:e,...t},r)=>(0,c.jsx)(rs,{ref:r,className:(0,rh.cn)("-mx-1 my-1 h-px bg-muted",e),...t})).displayName=rs.displayName;var rg=e.i(28231);function rv(){let{theme:e,setTheme:t}=(0,w.useTheme)(),[r,n]=(0,d.useState)(!1),[i,o]=(0,d.useState)(!1);return((0,d.useEffect)(()=>{n(!0)},[]),r)?(0,c.jsx)(rg.TooltipProvider,{children:(0,c.jsx)(rg.Tooltip,{delayDuration:300,children:(0,c.jsxs)(t8,{children:[(0,c.jsx)(t9,{asChild:!0,children:(0,c.jsxs)(v.Button,{variant:"ghost",size:"icon",className:"cursor-pointer rounded-lg focus:border-none focus:ring-0 focus:outline-none",children:[(0,c.jsx)(x.Sun,{className:"h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"}),(0,c.jsx)(b.Moon,{className:"absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"}),(0,c.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}),(0,c.jsxs)(rm,{align:"end",children:[(0,c.jsxs)(rf,{onClick:()=>t("light"),className:"flex items-center gap-2",children:[(0,c.jsx)(x.Sun,{className:"h-4 w-4"}),(0,c.jsx)("span",{children:"Light"}),"light"===e&&(0,c.jsx)(y.Check,{className:"ml-auto h-4 w-4"})]}),(0,c.jsxs)(rf,{onClick:()=>t("dark"),className:"flex items-center gap-2",children:[(0,c.jsx)(b.Moon,{className:"h-4 w-4"}),(0,c.jsx)("span",{children:"Dark"}),"dark"===e&&(0,c.jsx)(y.Check,{className:"ml-auto h-4 w-4"})]}),(0,c.jsxs)(rf,{onClick:()=>t("system"),className:"flex items-center gap-2",children:[(0,c.jsx)(k,{className:"h-4 w-4"}),(0,c.jsx)("span",{children:"System"}),"system"===e&&(0,c.jsx)(y.Check,{className:"ml-auto h-4 w-4"})]})]})]})})}):(0,c.jsxs)(v.Button,{variant:"ghost",size:"icon",className:"h-9 w-9 cursor-pointer rounded-lg",children:[(0,c.jsx)("span",{className:"sr-only",children:"Toggle theme"}),(0,c.jsx)(x.Sun,{className:"h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all"})]})}var rw=e.i(34417);function rb({isActive:e}){let{resolvedTheme:t}=(0,w.useTheme)(),[r,n]=(0,d.useState)(!1);return((0,d.useEffect)(()=>{n(!0)},[]),r&&e)?(0,c.jsx)("div",{className:"pointer-events-none absolute inset-0 -z-10 backdrop-blur",style:{background:"dark"===t?"radial-gradient(circle at top center, var(--color-yellow-900) / 0.10 0%, var(--color-yellow-900) / 0.10 100%)":"radial-gradient(circle at top center, var(--color-yellow-900) / 0.12 0%, var(--color-yellow-900) / 0.12 100%)",boxShadow:"dark"===t?"0 1px 8px rgba(0, 0, 0, 0.12)":"0 1px 8px rgba(0, 0, 0, 0.03)"}}):null}var rx=e.i(65709);let ry={src:e.i(80409).default,width:1e3,height:1e3,blurWidth:0,blurHeight:0};e.s(["default",0,()=>{let[e,t]=(0,d.useState)(!1),[r,n]=(0,d.useState)(!1),[i,o]=(0,d.useState)(!1),a=(0,p.usePathname)();(0,d.useEffect)(()=>{let e=()=>{t(window.scrollY>10)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,d.useEffect)(()=>{let e=()=>{o(window.innerWidth<768)};e();let t=()=>{e(),window.innerWidth>=768&&r&&n(!1)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[r]),(0,d.useEffect)(()=>(r&&i?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden"),()=>{document.body.classList.remove("overflow-hidden")}),[r,i]);let l=e=>{n(e)},s=rx.navbar.navLinks;return(0,c.jsxs)("header",{className:"glass-nav fixed top-0 right-0 left-0 z-50 py-2",children:[(0,c.jsx)(rb,{isActive:e}),(0,c.jsxs)("div",{className:"container mx-auto flex items-center justify-between px-4",children:[(0,c.jsx)(u.default,{href:"/",children:(0,c.jsx)(rw.default,{src:ry,alt:rx.navbar.logo.alt,width:32,height:32,className:`duration-300 ${e?"rounded-lg":"rounded-md"}`})}),(0,c.jsxs)("nav",{className:"hidden items-center space-x-1 text-sm md:flex",children:[s.map(e=>(0,c.jsx)(u.default,{href:e.path,className:`flex items-center rounded-lg px-3 py-2 duration-200 ${a===e.path||a.startsWith(`${e.path}/`)?"text-gray-900 dark:text-gray-100":"text-gray-400 hover:text-gray-900 focus:outline-none dark:text-gray-200 dark:hover:text-gray-100"} `,children:(0,c.jsx)("span",{children:e.name})},e.path)),(0,c.jsxs)(u.default,{href:rx.profile.linkedin,target:"_blank",rel:"noopener noreferrer",className:"flex cursor-pointer items-center rounded-md bg-yellow-500 px-3 py-2 text-sm text-gray-900 hover:bg-yellow-400 hover:text-gray-900 focus:outline-none dark:bg-yellow-500 dark:text-gray-900 dark:hover:bg-yellow-900 dark:hover:text-gray-100",children:[(0,c.jsx)(g,{className:"mr-2 h-4 w-4"}),"Contact"]}),(0,c.jsx)(rv,{})]}),(0,c.jsxs)("div",{className:"flex items-center gap-2 md:hidden",children:[(0,c.jsx)(rv,{}),(0,c.jsx)(v.Button,{variant:"ghost",size:"icon",onClick:()=>l(!r),"aria-label":"Toggle menu",children:r?(0,c.jsx)(f.X,{}):(0,c.jsx)(m,{})})]})]}),r&&(0,c.jsxs)("nav",{className:"inset-0 z-40 container flex flex-col gap-2 px-4",children:[s.map(e=>(0,c.jsx)(u.default,{href:e.path,className:`rounded-md px-4 py-3 text-center text-sm ${a===e.path||a.startsWith(`${e.path}/`)?"bg-gray-100 font-medium text-gray-900 dark:text-gray-100":"text-gray-500 hover:bg-gray-100 hover:text-yellow-500 focus:ring-yellow-400 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-200 dark:hover:text-yellow-600"} `,onClick:()=>l(!1),children:e.name},e.path)),(0,c.jsx)(u.default,{href:rx.profile.linkedin,target:"_blank",rel:"noopener noreferrer",onClick:()=>l(!1),children:(0,c.jsxs)(v.Button,{variant:"default",className:"w-full bg-yellow-500 py-3 text-gray-900 hover:bg-yellow-400 hover:text-gray-900 focus:ring-yellow-400 focus:outline-none dark:bg-yellow-500 dark:text-gray-900 dark:hover:bg-gray-100 dark:hover:text-gray-900",children:[(0,c.jsx)(g,{className:"mr-2 h-5 w-5"}),"Contact"]})})]})]})}],63780)},31969,e=>{"use strict";var t=e.i(39230),r=e.i(35790),n=e.i(15401);let i=()=>{let{theme:e,resolvedTheme:i}=(0,r.useTheme)(),[o,a]=(0,n.useState)(!1);return(0,n.useEffect)(()=>a(!0),[]),(0,t.jsx)("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[50vh] w-full opacity-5",children:(0,t.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 712 232",preserveAspectRatio:"none",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-full w-full",role:"presentation",focusable:"false",children:(0,t.jsx)("path",{d:"M-1.5 220.5C28.3333 206.833 91.5 185.7 91.5 218.5C91.5 259.5 322.928 176.884 403.5 144C686.5 28.5 633.5 42 711.5 2",stroke:o&&"dark"===(i||e)?"var(--color-gray-100)":"var(--color-gray-900)",strokeWidth:"4",fill:"none"})})})};e.s(["BackgroundWavyLines",0,i,"default",0,i])},89554,e=>{"use strict";var t=e.i(39230),r=e.i(35790);e.s(["ThemeProvider",0,function({children:e,...n}){return(0,t.jsx)(r.ThemeProvider,{...n,enableSystem:!0,enableColorScheme:!0,attribute:"class",storageKey:"johnny-theme-preference",children:e})}])},38834,e=>{"use strict";var t=e.i(39230),r=e.i(35790),n=e.i(15401),i=e.i(58854),o=e.i(46204);let a=(0,e.i(98860).default)("monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);e.s(["ThemeIndicator",0,function(){let{theme:e,resolvedTheme:l}=(0,r.useTheme)(),[s,c]=(0,n.useState)(!1),[d,u]=(0,n.useState)(!0);return((0,n.useEffect)(()=>{c(!0);let e=setTimeout(()=>{u(!1)},3e3);return()=>clearTimeout(e)},[]),(0,n.useEffect)(()=>{u(!0);let e=setTimeout(()=>{u(!1)},3e3);return()=>clearTimeout(e)},[e]),s&&d)?(0,t.jsx)("div",{className:"fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 py-1.5 px-3 md:py-2 md:px-4 bg-background/90 backdrop-blur-xs rounded-full border border-border shadow-md flex items-center gap-2 transition-all duration-300 text-xs md:text-sm",children:"dark"===l?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Moon,{className:"h-3 w-3 md:h-4 md:w-4 text-indigo-400"}),(0,t.jsx)("span",{children:"Dark mode active"})]}):"light"===l?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Sun,{className:"h-3 w-3 md:h-4 md:w-4 text-amber-500"}),(0,t.jsx)("span",{children:"Light mode active"})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{className:"h-3 w-3 md:h-4 md:w-4"}),(0,t.jsx)("span",{children:"System theme active"})]})}):null}],38834)}]);