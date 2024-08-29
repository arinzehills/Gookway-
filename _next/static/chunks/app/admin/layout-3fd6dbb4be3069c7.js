(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9091],{5094:function(e,t,n){Promise.resolve().then(n.bind(n,5804))},5804:function(e,t,n){"use strict";n.r(t);var s=n(7437),i=n(4362),r=n(677),a=n(1671),o=n(2265);t.default=e=>{let{children:t}=e;const[n,c]=(0,o.useState)(!1),[l,d]=(0,o.useState)("");let m=[{heading:"Main Menu",items:[{name:"Dashboard",url:"/admin",icon:(0,s.jsx)(a.JO,{icon:"hugeicons:home-01"})},{name:"Order Management",url:"/admin/order-management",icon:(0,s.jsx)(a.JO,{icon:"iconoir:cart"})},{name:"Customers",url:"/admin/customers",icon:(0,s.jsx)(a.JO,{icon:"mynaui:users"})},{name:"Vendors",url:"/admin/vendors",icon:(0,s.jsx)(a.JO,{icon:"circum:shop"})},{name:"Transactions",url:"/admin/transactions",icon:(0,s.jsx)(a.JO,{icon:"bx:file"})}]},{heading:"Products",items:[{name:"Product List",url:"/admin/products",icon:(0,s.jsx)(a.JO,{icon:"carbon:cube"})}]},{heading:"Admin",items:[{name:"Account",url:"/admin",icon:(0,s.jsx)(a.JO,{icon:"material-symbols:account-circle"})},{name:"Settings",url:"/admin/settings",icon:(0,s.jsx)(a.JO,{icon:"ri:settings-fill"})}]}];return(0,s.jsxs)("div",{className:"flex h-screen bg-gray-100",children:[(0,s.jsx)(i.Z,{isAdmin:!0,links:m,isOpen:n,toggle:()=>c(!n),onSelectSideBar:e=>d(e)}),(0,s.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,s.jsx)(r.Z,{toggleSidebar:()=>c(!n),pageTitle:l}),(0,s.jsx)("main",{className:"flex-1 overflow-y-auto p-4",children:t})]})]})}},4362:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var s=n(7437),i=n(2265),r=n(6800),a=n.n(r),o=n(7138),c=n(9355);var l=n(6648);var d=e=>{let{isOpen:t,toggle:n,onSelectSideBar:r,links:d=[],isAdmin:m=!1}=e;const[u,x]=(0,i.useState)(!0),[h,f]=function(e,t){const[n,s]=(0,i.useState)(t);return(0,i.useEffect)((()=>{{const n=localStorage.getItem(e);n?s(JSON.parse(n)):localStorage.setItem(e,JSON.stringify(t))}}),[e,t]),(0,i.useEffect)((()=>{localStorage.setItem(e,JSON.stringify(n))}),[e,n]),[n,s]}("selected-sidebar-name","Dashboard"),g=e=>{f(e),r(e)};return(0,i.useEffect)((()=>{r(h)}),[h]),(0,s.jsxs)("div",{className:a()(" bg-red-500 shadow-md md:block duration-300 z-50 ".concat(u?"w-56":"w-16 overflow-hidden "),{hidden:!t}),children:[(0,s.jsx)("button",{className:"md:hidden p-4",onClick:n,children:"Close"}),(0,s.jsxs)("div",{className:"flex items-center justify-between p-4 text-xl font-semibold text-white",children:[(0,s.jsx)("span",{className:"".concat(u?"block":" hidden"),children:m?(0,s.jsxs)("div",{className:"flex items-center justify-center ",children:[(0,s.jsx)(l.default,{src:"/assets/white-logo.png",alt:"Center Image",className:" inset-0 m-auto animate-zoom",width:50,height:50}),"Admin"]}):"Gookway."}),(0,s.jsx)(c.JO,{onClick:()=>x(!u),icon:"line-md:menu-fold-left",className:"duration-200 ".concat(u?"":"rotate-180")})]}),(0,s.jsx)("nav",{className:"overflow-y-scroll",children:(0,s.jsx)("ul",{className:"space-y-2",children:d.map(((e,t)=>((e,t)=>(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"".concat(u?"pl-4":"pl-0 "," text-white text-center uppercase text-xs"),children:null===t||void 0===t?void 0:t.heading}),null===t||void 0===t?void 0:t.items.map(((e,t)=>(0,s.jsx)("li",{className:"".concat(h===e.name&&"bg-white"," mt-2 mx-2 text-gray-300 text-sm p-3 hover:bg-indigo-200/50  rounded-md"),children:(0,s.jsxs)(o.default,{href:e.url,onClick:()=>g(e.name),className:"flex items-center font-semibold gap-x-4",children:[(0,s.jsx)("span",{className:"".concat(h===e.name?"text-red-600 ":"text-white "," text-xl"),children:e.icon}),(0,s.jsx)("span",{className:"\n                        ".concat(h===e.name?"text-red-600 font-bold":"text-white font-light","\n                      duration-300 origin-left pl-2 text-sm"),children:e.name})]})},t)))]}))(0,e)))})})]})}},677:function(e,t,n){"use strict";var s=n(7437);n(2265);t.Z=e=>{let{toggleSidebar:t,pageTitle:n}=e;return(0,s.jsxs)("header",{className:"flex items-center justify-between p-4 bg-white ",children:[(0,s.jsx)("button",{className:"text-gray-600 md:hidden",onClick:t,children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-6 h-6",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"})})}),(0,s.jsx)("div",{className:"text-xl font-semibold text-gray-700",children:null!==n&&void 0!==n?n:"Dashboard"}),(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:"w-8 h-8 rounded-full",src:"https://via.placeholder.com/150",alt:"Profile"})})]})}},6800:function(e,t){var n;!function(){"use strict";var s={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,r(n)))}return e}function r(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)s.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()}},function(e){e.O(0,[8173,4974,9355,1671,2971,7023,1744],(function(){return t=5094,e(e.s=t);var t}));var t=e.O();_N_E=t}]);