"use strict";exports.id=481,exports.ids=[481],exports.modules={2481:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});const o=n(1174),i=n(8374),r=n(326),s=i._(n(7577)),a=o._(n(962)),d=o._(n(815)),l=n(3078),c=n(5248),u=n(1206),f=(n(576),n(131)),p=o._(n(6820)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,n,o,i,r,s){const a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;("decode"in e?e.decode():Promise.resolve()).catch((()=>{})).then((()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){const t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==o?void 0:o.current)&&o.current(e)}}))}function h(e){return Boolean(s.use)?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;const y=(0,s.forwardRef)(((e,t)=>{let{src:n,srcSet:o,sizes:i,height:a,width:d,decoding:l,className:c,style:u,fetchPriority:f,placeholder:p,loading:g,unoptimized:y,fill:b,onLoadRef:v,onLoadingCompleteRef:w,setBlurComplete:x,setShowAltText:S,sizesInput:_,onLoad:j,onError:C,...z}=e;return(0,r.jsx)("img",{...z,...h(f),loading:g,width:d,height:a,decoding:l,"data-nimg":b?"fill":"1",className:c,style:u,sizes:i,srcSet:o,src:n,ref:(0,s.useCallback)((e=>{t&&("function"===typeof t?t(e):"object"===typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&m(e,p,v,w,x))}),[n,p,v,w,x,C,y,_,t]),onLoad:e=>{m(e.currentTarget,p,v,w,x)},onError:e=>{S(!0),"empty"!==p&&x(!0),C&&C(e)}})}));function b(e){let{isAppRouter:t,imgAttributes:n}=e;const o={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...h(n.fetchPriority)};return t&&a.default.preload?(a.default.preload(n.src,o),null):(0,r.jsx)(d.default,{children:(0,r.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...o},"__nimg-"+n.src+n.srcSet+n.sizes)})}const v=(0,s.forwardRef)(((e,t)=>{const n=!(0,s.useContext)(f.RouterContext),o=(0,s.useContext)(u.ImageConfigContext),i=(0,s.useMemo)((()=>{const e=g||o||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort(((e,t)=>e-t)),n=e.deviceSizes.sort(((e,t)=>e-t));return{...e,allSizes:t,deviceSizes:n}}),[o]),{onLoad:a,onLoadingComplete:d}=e,m=(0,s.useRef)(a);(0,s.useEffect)((()=>{m.current=a}),[a]);const h=(0,s.useRef)(d);(0,s.useEffect)((()=>{h.current=d}),[d]);const[v,w]=(0,s.useState)(!1),[x,S]=(0,s.useState)(!1),{props:_,meta:j}=(0,l.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:v,showAltText:x});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y,{..._,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:S,sizesInput:e.sizes,ref:t}),j.priority?(0,r.jsx)(b,{isAppRouter:n,imgAttributes:_}):null]})}));("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3484:(e,t,n)=>{e.exports=n(1616).vendored.contexts.AmpContext},1157:(e,t,n)=>{e.exports=n(1616).vendored.contexts.HeadManagerContext},1206:(e,t,n)=>{e.exports=n(1616).vendored.contexts.ImageConfigContext},131:(e,t,n)=>{e.exports=n(1616).vendored.contexts.RouterContext},8710:(e,t)=>{function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:o=!1}=void 0===e?{}:e;return t||n&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},3078:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return d}});n(576);const o=n(380),i=n(5248);function r(e){return void 0!==e.default}new Map;function s(e){return"undefined"===typeof e?e:"number"===typeof e?Number.isFinite(e)?e:NaN:"string"===typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e){let{config:t,src:n,unoptimized:o,width:i,quality:r,sizes:s,loader:a}=e;if(o)return{src:n,srcSet:void 0,sizes:void 0};const{widths:d,kind:l}=function(e,t,n){let{deviceSizes:o,allSizes:i}=e;if(n){const e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let o;o=e.exec(n);o)t.push(parseInt(o[2]));if(t.length){const e=.01*Math.min(...t);return{widths:i.filter((t=>t>=o[0]*e)),kind:"w"}}return{widths:i,kind:"w"}}return"number"!==typeof t?{widths:o,kind:"w"}:{widths:[...new Set([t,2*t].map((e=>i.find((t=>t>=e))||i[i.length-1])))],kind:"x"}}(t,i,s),c=d.length-1;return{sizes:s||"w"!==l?s:"100vw",srcSet:d.map(((e,o)=>a({config:t,src:n,quality:r,width:e})+" "+("w"===l?e:o+1)+l)).join(", "),src:a({config:t,src:n,quality:r,width:d[c]})}}function d(e,t){let{src:n,sizes:d,unoptimized:l=!1,priority:c=!1,loading:u,className:f,quality:p,width:g,height:m,fill:h=!1,style:y,overrideSrc:b,onLoad:v,onLoadingComplete:w,placeholder:x="empty",blurDataURL:S,fetchPriority:_,layout:j,objectFit:C,objectPosition:z,lazyBoundary:P,lazyRoot:M,...E}=e;const{imgConf:I,showAltText:O,blurComplete:R,defaultLoader:A}=t;let k,L=I||i.imageConfigDefault;if("allSizes"in L)k=L;else{const e=[...L.deviceSizes,...L.imageSizes].sort(((e,t)=>e-t)),t=L.deviceSizes.sort(((e,t)=>e-t));k={...L,allSizes:e,deviceSizes:t}}if("undefined"===typeof A)throw new Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let D=E.loader||A;delete E.loader,delete E.srcSet;const T="__next_img_default"in D;if(T){if("custom"===k.loader)throw new Error('Image with src "'+n+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{const e=D;D=t=>{const{config:n,...o}=t;return e(o)}}if(j){"fill"===j&&(h=!0);const e={responsive:"100vw",fill:"100vw"},t={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];t&&(y={...y,...t});const n=e[j];n&&!d&&(d=n)}let F,U,N="",B=s(g),q=s(m);if(function(e){return"object"===typeof e&&(r(e)||function(e){return void 0!==e.src}(e))}(n)){const e=r(n)?n.default:n;if(!e.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(F=e.blurWidth,U=e.blurHeight,S=S||e.blurDataURL,N=e.src,!h)if(B||q){if(B&&!q){const t=B/e.width;q=Math.round(e.height*t)}else if(!B&&q){const t=q/e.height;B=Math.round(e.width*t)}}else B=e.width,q=e.height}n="string"===typeof n?n:N;let G=!c&&("lazy"===u||"undefined"===typeof u);(!n||n.startsWith("data:")||n.startsWith("blob:"))&&(l=!0,G=!1),k.unoptimized&&(l=!0),T&&n.endsWith(".svg")&&!k.dangerouslyAllowSVG&&(l=!0),c&&(_="high");const W=s(p);const H=Object.assign(h?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:z}:{},O?{}:{color:"transparent"},y),V=R||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,o.getImageBlurSvg)({widthInt:B,heightInt:q,blurWidth:F,blurHeight:U,blurDataURL:S||"",objectFit:H.objectFit})+'")':'url("'+x+'")';let $=V?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{};const J=a({config:k,src:n,unoptimized:l,width:B,quality:W,sizes:d,loader:D});return{props:{...E,loading:G?"lazy":u,fetchPriority:_,width:B,height:q,decoding:"async",className:f,style:{...H,...$},sizes:J.sizes,srcSet:J.srcSet,src:b||J.src},meta:{unoptimized:l,priority:c,placeholder:x,fill:h}}}},815:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return m},defaultHead:function(){return u}});const o=n(1174),i=n(8374),r=n(326),s=i._(n(7577)),a=o._(n(8003)),d=n(3484),l=n(1157),c=n(8710);n(576);function u(e){void 0===e&&(e=!1);const t=[(0,r.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,r.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce(((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t)),[])):e.concat(t)}const p=["name","httpEquiv","charSet","itemProp"];function g(e,t){const{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(u(n).reverse()).filter(function(){const e=new Set,t=new Set,n=new Set,o={};return i=>{let r=!0,s=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){s=!0;const t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?r=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?r=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){const t=p[e];if(i.props.hasOwnProperty(t))if("charSet"===t)n.has(t)?r=!1:n.add(t);else{const e=i.props[t],n=o[t]||new Set;"name"===t&&s||!n.has(e)?(n.add(e),o[t]=n):r=!1}}}return r}}()).reverse().map(((e,t)=>{const o=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((t=>e.props.href.startsWith(t)))){const t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,s.default.cloneElement(e,t)}return s.default.cloneElement(e,{key:o})}))}const m=function(e){let{children:t}=e;const n=(0,s.useContext)(d.AmpStateContext),o=(0,s.useContext)(l.HeadManagerContext);return(0,r.jsx)(a.default,{reduceComponentsToState:g,headManager:o,inAmpMode:(0,c.isInAmpMode)(n),children:t})};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},380:(e,t)=>{function n(e){let{widthInt:t,heightInt:n,blurWidth:o,blurHeight:i,blurDataURL:r,objectFit:s}=e;const a=o?40*o:t,d=i?40*i:n,l=a&&d?"viewBox='0 0 "+a+" "+d+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+l+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(l?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+r+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},5248:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return o}});const n=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},6820:(e,t)=>{function n(e){let{config:t,src:n,width:o,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+o+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}}),n.__next_img_default=!0;const o=n},8003:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});const o=n(7577),i=!0,r=i?()=>{}:o.useLayoutEffect,s=i?()=>{}:o.useEffect;function a(e){const{headManager:t,reduceComponentsToState:n}=e;function a(){if(t&&t.mountedInstances){const i=o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}var d;i&&(null==t||null==(d=t.mountedInstances)||d.add(e.children),a());return r((()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),r((()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)}))),s((()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}))),null}}};