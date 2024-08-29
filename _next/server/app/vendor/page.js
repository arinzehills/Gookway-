(()=>{var e={id:341,ids:[341]};e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5114:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>x,pages:()=>c,routeModule:()=>m,tree:()=>d});t(3852),t(6663),t(1506),t(5866);var a=t(3191),r=t(8716),l=t(7922),n=t.n(l),i=t(5231),o={};for(const p in i)["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(p)<0&&(o[p]=()=>i[p]);t.d(s,o);const d=["",{children:["vendor",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,3852)),"/Users/arinzehills/Gookway-/app/vendor/page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,6663)),"/Users/arinzehills/Gookway-/app/vendor/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,1506)),"/Users/arinzehills/Gookway-/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/arinzehills/Gookway-/app/vendor/page.tsx"],x="/vendor/page",u={require:t,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/vendor/page",pathname:"/vendor",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1060:(e,s,t)=>{Promise.resolve().then(t.bind(t,1529))},6112:(e,s,t)=>{Promise.resolve().then(t.bind(t,4461)),Promise.resolve().then(t.bind(t,5246)),Promise.resolve().then(t.bind(t,4492)),Promise.resolve().then(t.bind(t,7063)),Promise.resolve().then(t.bind(t,3199))},1529:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var a=t(326),r=t(2887),l=t(952),n=t(9874),i=t(7577);const o=({children:e})=>{const[s,t]=(0,i.useState)(!1),[o,d]=(0,i.useState)("");let c=[{heading:"Main Menu",items:[{name:"Dashboard",url:"/vendor",icon:a.jsx(n.JO,{icon:"hugeicons:home-01"})},{name:"Orders",url:"/vendor/orders",icon:a.jsx(n.JO,{icon:"iconoir:cart"})},{name:"Reviews",url:"/vendor/reviews",icon:a.jsx(n.JO,{icon:"material-symbols-light:reviews-outline"})}]},{heading:"Products",items:[{name:"Add Products",url:"/vendor/add-product",icon:a.jsx(n.JO,{icon:"gala:add"})},{name:"Product List",url:"/vendor/products",icon:a.jsx(n.JO,{icon:"carbon:cube"})}]},{heading:"Admin",items:[{name:"Account",url:"/vendor",icon:a.jsx(n.JO,{icon:"material-symbols:account-circle"})},{name:"Settings",url:"/vendor/settings",icon:a.jsx(n.JO,{icon:"ri:settings-fill"})}]}];return(0,a.jsxs)("div",{className:"flex h-screen bg-gray-100",children:[a.jsx(r.Z,{links:c,isOpen:s,toggle:()=>t(!s),onSelectSideBar:e=>d(e)}),(0,a.jsxs)("div",{className:"flex-1 flex flex-col",children:[a.jsx(l.Z,{toggleSidebar:()=>t(!s),pageTitle:o}),a.jsx("main",{className:"flex-1 overflow-y-auto p-4",children:e})]})]})}},4461:(e,s,t)=>{"use strict";t.d(s,{default:()=>n});var a=t(326),r=t(3360),l=t(3904);l.kL.register(l.jn,l.uw,l.f$,l.od);const n=({title:e,amount:s,percentage:t,isPositive:l,height:n})=>(0,a.jsxs)("div",{className:"bg-white p-4 rounded-2xl shadow-sm overflow-hidden",children:[a.jsx("h3",{className:"text-sm  mb-2 font-bold text-black",children:e}),a.jsx("h5",{className:"text-xs  mb-2  text-gray-500",children:"Last 7 days"}),(0,a.jsxs)("div",{className:`${n??"h-16"} flex items-center `,children:[a.jsx("div",{className:"items-baseline",children:a.jsx("span",{className:"text-2xl font-semibold",children:s})}),a.jsx("div",{className:"ml-2 -mb-4 ",children:a.jsx(r.x1,{data:{labels:["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],datasets:[{label:"Total Orders ",data:[65,59,80,81,56,55,40],backgroundColor:"transparent",borderColor:"#FF4D4D",fill:!0,pointBorderColor:"transparent",pointBorderWidth:4,tension:.4}]},options:{plugins:{legend:{display:!0,labels:{usePointStyle:!0,pointStyle:"circle"}}},scales:{x:{grid:{display:!1},beginAtZero:!0,display:!1},y:{beginAtZero:!0,display:!1}}}})})]}),(0,a.jsxs)("div",{className:"flex pt-2",children:[(0,a.jsxs)("span",{className:"ml-2 text-sm w-22  "+(l?"text-green-500":"text-red-500"),children:[l?"\u2191":"\u2193"," ",Math.abs(t),"%"]}),a.jsx("div",{className:"mt-2 grow",children:a.jsx("div",{className:"w-full bg-gray-200 rounded-full h-1",children:a.jsx("div",{className:"h-1 rounded-full "+(l?"bg-green-500":"bg-red-500"),style:{width:`${Math.min(Math.abs(t),100)}%`}})})})]})]})},4492:(e,s,t)=>{"use strict";t.d(s,{default:()=>n});var a=t(326),r=(t(7577),t(3360)),l=t(3904);l.kL.register(l.qi,l.u,l.De);const n=({height:e})=>(0,a.jsxs)("div",{className:`${e??"h-auto"} bg-white rounded-xl mybox-shadow p-4 `,children:[a.jsx("h2",{children:"Top Selling Categories"}),a.jsx(r.$I,{data:{labels:["Kids","Shoes","Fashion","Essentials"],datasets:[{label:"Top Selling Categories",data:[300,500,200,100],backgroundColor:["#FF392B","#00C3F8","#2F80ED","#FF8901"],borderWidth:1}]},options:{plugins:{legend:{display:!0,labels:{usePointStyle:!0,pointStyle:"circle"}}}}})]})},7063:(e,s,t)=>{"use strict";t.d(s,{default:()=>n});var a=t(326),r=(t(7577),t(3360)),l=t(3904);l.kL.register(l.jn,l.uw,l.f$,l.od,l.u,l.De);const n=()=>(0,a.jsxs)("div",{className:"bg-white rounded-xl mybox-shadow p-4",children:[a.jsx("h2",{children:"Today Order"}),a.jsx("h3",{style:{fontSize:"2em",margin:"10px 0"},children:"16.5K"}),a.jsx("p",{style:{color:"green"},children:"\u2b06 6% vs last day"}),a.jsx(r.x1,{data:{labels:["12am","4am","8am","12pm","4pm","8pm","11pm"],datasets:[{label:"Orders Over Time",data:[0,5e3,0,1e4,0,12e3,0],borderColor:"rgba(255, 99, 132, 1)",backgroundColor:"rgba(255, 99, 132, 0.2)",fill:!1,tension:.3}]},options:{scales:{x:{display:!0},y:{display:!1}},plugins:{legend:{display:!1},tooltip:{enabled:!0}}}})]})},3199:(e,s,t)=>{"use strict";t.d(s,{default:()=>n});var a=t(326),r=t(3360),l=t(3904);l.kL.register(l.jn,l.uw,l.f$,l.od);const n=({title:e,amount:s,percentage:t,isPositive:l})=>(0,a.jsxs)("div",{className:"bg-white p-4 pb-8 flex items-center rounded-2xl  shadow-sm ",children:[(0,a.jsxs)("div",{className:"flex flex-col justify-evenly h-36   ",children:[a.jsx("h3",{className:"text-sm  mb-2 font-bold text-black",children:"Total Sales & Cost"}),a.jsx("h5",{className:"text-xs  mb-2  text-gray-500",children:"Last 7 days"}),a.jsx("div",{className:"flex items-baseline",children:a.jsx("span",{className:"text-2xl font-semibold",children:s})}),(0,a.jsxs)("span",{className:"ml-2 text-sm w-22  "+(l?"text-green-500":"text-red-500"),children:[l?"\u2191":"\u2193"," ",Math.abs(t),"%"]})]}),a.jsx("div",{className:" -mb-4 ",children:a.jsx(r.x1,{data:{labels:["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],datasets:[{label:"Sales Data",data:[65,59,80,81,56,55,40],backgroundColor:"transparent",borderColor:"#FF4D4D",fill:!0,pointBorderColor:"transparent",pointBorderWidth:4,tension:.4},{label:"Cost Data",data:[45,49,70,71,46,45,30],backgroundColor:"transparent",borderColor:"blue",fill:!0,pointBorderColor:"transparent",pointBorderWidth:4,tension:.4}]},options:{plugins:{legend:{display:!1},tooltip:{callbacks:{label:function(e){return e.dataset.label+": "+e.raw}}}},scales:{x:{grid:{display:!1},beginAtZero:!0},y:{beginAtZero:!0,display:!1}}}})})]})},6663:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>n,__esModule:()=>l,default:()=>i});var a=t(8570);const r=(0,a.createProxy)(String.raw`/Users/arinzehills/Gookway-/app/vendor/layout.tsx`),{__esModule:l,$$typeof:n}=r,i=(r.default,(0,a.createProxy)(String.raw`/Users/arinzehills/Gookway-/app/vendor/layout.tsx#default`))},3852:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>x});var a=t(9510),r=(t(1159),t(4381));const l=({value:e,isGlassy:s})=>(0,a.jsxs)("div",{className:"flex justify-center space-x-2 mt-4 relative",children:[a.jsx("div",{className:"atm-card atm-card-normal p-2 bg-red-500"}),(0,a.jsxs)("div",{className:"atm-card glassy duration-300 flex flex-col justify-between p-2 text-white",children:[(0,a.jsxs)("div",{className:"flex justify-between text-sm ",children:[(0,a.jsxs)("div",{children:[a.jsx("span",{children:"Account Balance"}),a.jsx("div",{className:"text-2xl font-bold",children:e})]}),a.jsx("img",{src:"/images/brainworld-logo.png",style:{height:"40px"},alt:""})]}),(0,a.jsxs)("div",{className:"flex justify-between text-xs w-full ",style:{},children:[a.jsx("p",{children:"Brain World Inc."}),a.jsx("p",{})]})]})]});var n=t(9528),i=t(5182),o=t(4906),d=t(2561);const c=()=>(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 rounded-xl bg-red-200",children:[a.jsx("div",{className:"grow",children:a.jsx(d.ZP,{})}),a.jsx(l,{value:"20932"})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2 my-4",children:[{title:"Total Orders",amount:"25.7K",percentage:6},{title:"Total Profit",amount:"50K",percentage:12},{title:"Discounted Amount",amount:"12K",percentage:-2}].map(((e,s)=>a.jsx(r.ZP,{title:e.title,amount:e.amount,percentage:e.percentage,isPositive:e.percentage>=0},s)))}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 my-4 gap-4",children:[a.jsx(o.ZP,{}),a.jsx(i.ZP,{})]}),a.jsx("div",{className:"bg-white rounded-xl p-2 mt-4",children:a.jsx(n.ZP,{tableTitle:"Recent Orders",data:[],columnData:[{heading:"ID",value:"order_id"},{heading:"Customer ",value:"customer"},{heading:"Amount",value:"amount"},{heading:"Date & Time by",value:"date"},{heading:"Total",value:"total"}]})})]}),x=()=>a.jsx(c,{})},4381:(e,s,t)=>{"use strict";t.d(s,{ZP:()=>i});var a=t(8570);const r=(0,a.createProxy)(String.raw`/Users/arinzehills/Gookway-/components/AnalyticsCard.tsx`),{__esModule:l,$$typeof:n}=r,i=(r.default,(0,a.createProxy)(String.raw`/Users/arinzehills/Gookway-/components/AnalyticsCard.tsx#default`))},5182:(e,s,t)=>{"use strict";t.d(s,{ZP:()=>i});var a=t(8570);const r=(0,a.createProxy)(String.raw`/Users/arinzehills/Gookway-/components/TopSellingCategory.tsx`),{__esModule:l,$$typeof:n}=r,i=(r.default,(0,a.createProxy)(String.raw`/Users/arinzehills/Gookway-/components/TopSellingCategory.tsx#default`))},4906:(e,s,t)=>{"use strict";t.d(s,{ZP:()=>i});var a=t(8570);const r=(0,a.createProxy)(String.raw`/Users/arinzehills/Gookway-/components/TotalOrder.tsx`),{__esModule:l,$$typeof:n}=r,i=(r.default,(0,a.createProxy)(String.raw`/Users/arinzehills/Gookway-/components/TotalOrder.tsx#default`))},2561:(e,s,t)=>{"use strict";t.d(s,{ZP:()=>i});var a=t(8570);const r=(0,a.createProxy)(String.raw`/Users/arinzehills/Gookway-/components/TotalSalesCostCard.tsx`),{__esModule:l,$$typeof:n}=r,i=(r.default,(0,a.createProxy)(String.raw`/Users/arinzehills/Gookway-/components/TotalSalesCostCard.tsx#default`))}};var s=require("../../webpack-runtime.js");s.C(e);var t=s.X(0,[948,54,621,481,285,937,245,360,659],(()=>{return e=5114,s(s.s=e);var e}));module.exports=t})();