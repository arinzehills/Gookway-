(()=>{var e={id:327,ids:[327]};e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},2557:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>x,pages:()=>d,routeModule:()=>A,tree:()=>o});s(7025),s(1506),s(5866);var r=s(3191),a=s(8716),l=s(7922),i=s.n(l),n=s(5231),c={};for(const h in n)["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(h)<0&&(c[h]=()=>n[h]);s.d(t,c);const o=["",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,7025)),"/Users/arinzehills/Gookway-/app/contact/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,1506)),"/Users/arinzehills/Gookway-/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/arinzehills/Gookway-/app/contact/page.tsx"],x="/contact/page",m={require:s,loadChunk:()=>Promise.resolve()},A=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/contact/page",pathname:"/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},1037:(e,t,s)=>{Promise.resolve().then(s.bind(s,4174)),Promise.resolve().then(s.t.bind(s,2481,23)),Promise.resolve().then(s.bind(s,2848)),Promise.resolve().then(s.bind(s,2185)),Promise.resolve().then(s.bind(s,6795))},3160:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},5309:(e,t,s)=>{Promise.resolve().then(s.bind(s,9394))},4174:(e,t,s)=>{"use strict";s.d(t,{default:()=>m});var r=s(326),a=s(7577),l=s(5399),i=s(4046),n=s(8492),c=s(9632),o=s(434),d=s(2955),x=s(6226);const m=()=>{const{cart:e}=(0,d.s)(),[t,s]=(0,a.useState)("hidden"),[m,A]=(0,a.useState)([]);return(0,a.useEffect)((()=>{e&&A(e)}),[e]),(0,r.jsxs)("div",{className:" fixed top-0 w-full  h-[max] bg-[#ff0000] bg-opacity-80 flex justify-between flex-col items-center gap-5 p-5",style:{zIndex:"1000"},children:[(0,r.jsxs)("div",{className:"w-full flex flex-col-reverse  lg:flex-row justify-center items-center",children:[(0,r.jsxs)("div",{className:"left w-full flex flex-col justify-start items-center gap-0 lg:gap-10 lg:w-[70%] lg:flex-row",children:[r.jsx("h1",{className:"text-xl text-white font-bold lg:text-2xl",children:(0,r.jsxs)(o.default,{href:"/",className:"flex items-center justify-center gap-0",children:[r.jsx(x.default,{src:"/assets/white-logo.png",alt:"Center Image",className:"-mr-2 inset-0 m-auto animate-zoom",width:50,height:50}),"Gookway."]})}),(0,r.jsxs)("div",{className:"search w-full flex justify-center items-center gap-3 my-3 lg:my-0",children:[r.jsx("input",{type:"text",placeholder:"Search products, brands, categories",className:"w-full py-3 outline-none px-2 text-gray-600 text-sm"}),r.jsx(l.w75,{size:34,color:"white"})]})]}),(0,r.jsxs)("div",{className:"rigth w-full lg:w-[30%] gap-3 flex justify-end lg:justify-center items-center gap-2 text-white relative",children:[r.jsx(i.BKo,{size:25,color:"white"}),r.jsx(o.default,{href:"/cart",children:(0,r.jsxs)("div",{className:"relative",children:[r.jsx(n.qk2,{size:25,color:"white"}),m&&r.jsx("span",{className:"absolute -top-2 -right-2 bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs",children:m.length})]})})]}),(0,r.jsxs)("div",{className:"rigth w-full lg:w-[30%] flex justify-end lg:justify-center items-center gap-2 text-white relative",children:[r.jsx(o.default,{href:"/user/login",children:r.jsx(i.BKo,{size:30,color:"white"})}),r.jsx(o.default,{href:"/cart",children:(0,r.jsxs)("div",{className:"relative",children:[r.jsx(n.qk2,{size:30,color:"white"}),m&&r.jsx("span",{className:"absolute -top-2 -right-2 bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs",children:m.length})]})})]})]}),r.jsx("div",{className:"lg:hidden w-full flex justify-start items-center",children:r.jsx("p",{className:"text-xl cursor-pointer text-white",onClick:()=>{s("hidden"===t?"flex":"hidden")},children:r.jsx(c.vHB,{size:34})})}),(0,r.jsxs)("div",{className:`bottomNav ${t}  w-full lg:flex gap-5 flex-col lg:flex-row justify-start items-start text-white`,children:[r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-lg lg:text-sm cursor-pointer",children:"All Categories"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"Phone & Tablets"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"Consumer Electronics"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"Clothing"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"Home Furnishings"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"Beauty Health"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"Sport & Entertainment"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"More"})})]})]})}},2955:(e,t,s)=>{"use strict";s.d(t,{s:()=>i});var r=s(551);let a=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},l=e=>{try{return null}catch(t){return console.error("Error parsing JSON from localStorage",t),null}};const i=(0,r.Ue)((e=>({token:l()||"",setToken:t=>e((e=>(a("token",t),{token:t}))),cart:l()||[],setCart:t=>{a("cart",t),e({cart:t})},addToCart:t=>e((e=>{const s=[...e.cart,t];return a("cart",s),{cart:s}}))})))},7025:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x});var r=s(9510),a=(s(1159),s(7457)),l=s(2715),i=s(5512);function n(e){return(0,i.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"},child:[]},{tag:"path",attr:{d:"M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"},child:[]}]})(e)}function c(e){return(0,i.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.25-1.5c.37-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.85 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.75a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"},child:[]}]})(e)}var o=s(1486),d=s(6405);const x=()=>(0,r.jsxs)(r.Fragment,{children:[r.jsx(d.ZP,{}),(0,r.jsxs)("div",{className:"pt-40 w-[90%] h-auto m-auto",children:[r.jsx("div",{className:"w-full h-96",children:r.jsx("iframe",{width:"100%",height:"100%",frameBorder:"0",src:"https://www.openstreetmap.org/export/embed.html?bbox=3.379203014728963%2C6.470042095320648%2C3.379203014728963%2C6.470042095320648&layer=mapnik",style:{border:0},allowFullScreen:!0})}),r.jsx("div",{className:"my-4",children:r.jsx(a.Z,{items:{Home:"Home",Contact:"Contact"}})}),(0,r.jsxs)("div",{className:"w-full grid grid-cols-2 gap-5",children:[(0,r.jsxs)("div",{className:"left w-full flex flex-col justify-start items-start gap-5",children:[r.jsx("h1",{className:"text-5xl font-black",children:"Contact Us"}),r.jsx("p",{className:"text-lg",children:"Do you have any question? Reach out to us"}),(0,r.jsxs)("form",{action:"",className:"w-full flex flex-col justify-start items-start gap-5 mb-5",children:[(0,r.jsxs)("div",{className:"forgroup w-full",children:[r.jsx("label",{htmlFor:"name",className:"text-xl font-black",children:"Name"}),r.jsx("input",{type:"text",placeholder:"Emmanuel",className:"w-full p-2 rounded-md border border-[#BFBFBF] mt-2 outline-none"})]}),(0,r.jsxs)("div",{className:"group w-full flex justify-between items-center gap-5",children:[(0,r.jsxs)("div",{className:"forgroup w-[50%]",children:[r.jsx("label",{htmlFor:"phone",className:"text-xl font-black",children:"Phone Number"}),r.jsx("input",{type:"text",placeholder:"+234108912367",className:"w-full p-2 rounded-md border border-[#BFBFBF] mt-2 outline-none"})]}),(0,r.jsxs)("div",{className:"forgroup w-[50%]",children:[r.jsx("label",{htmlFor:"email",className:"text-xl font-black",children:"Email Address"}),r.jsx("input",{type:"text",placeholder:"emmanuelojo@gmail.com",className:"w-full p-2 rounded-md border border-gray-400 mt-2 outline-none"})]})]}),(0,r.jsxs)("div",{className:"formgroup w-full",children:[r.jsx("label",{htmlFor:"message",className:"text-xl font-black",children:"Message"}),r.jsx("textarea",{name:"",id:"",cols:50,className:"w-full h-80 border border-[#BFBFBF] mt-2 rounded-md outline-none p-3"})]}),r.jsx("div",{className:"formgroup w-full",children:r.jsx("button",{type:"button",className:"bg-[#FF4D4D] text-white w-[40%] py-3 text-xl rounded-md",children:"Submit"})})]})]}),r.jsx("div",{className:"right w-full p-5",children:(0,r.jsxs)("div",{className:"section bg-[#FBFBFB] p-5",children:[r.jsx("h1",{className:"text-2xl font-bold",children:"Keep in touch!"}),r.jsx("p",{children:"We would love to hear from you. Reach out us if you have enquiries"}),(0,r.jsxs)("div",{className:"tourchGroup mt-5 w-full flex flex-col justify-center items-start gap-5",children:[(0,r.jsxs)("div",{className:"flex justify-start items-center gap-5",children:[r.jsx(l.DNl,{size:24}),r.jsx("p",{className:"text-lg",children:"+234810987654"})]}),(0,r.jsxs)("div",{className:"flex justify-start items-center gap-5",children:[r.jsx(n,{size:24}),r.jsx("p",{className:"text-lg",children:"info@gookway.ng"})]}),(0,r.jsxs)("div",{className:"flex justify-start items-center gap-5",children:[r.jsx(c,{size:24}),r.jsx("p",{className:"text-lg",children:"Garki Abuja, Nigeria"})]})]}),r.jsx("h1",{className:"text-xl font-black border-b-2 border-b-[#FF4D4D] w-[23%] mt-5",children:"Opening Hours"}),(0,r.jsxs)("div",{className:"openings mt-3",children:[(0,r.jsxs)("p",{className:"text-lg",children:[r.jsx("span",{className:"font-black",children:"Mondays - Fridays :"})," 8:00am - 5:00pm"]}),(0,r.jsxs)("p",{className:"text-lg",children:[r.jsx("span",{className:"font-black",children:"Saturdays :"})," 8:00am - 5:00pm"]})]})]})})]})]}),r.jsx(o.Z,{})]})},1506:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c,metadata:()=>n});var r=s(9510),a=s(5384),l=s.n(a),i=(s(7120),s(6557));const n={title:"Gookway",description:"Generated by create next app"};function c({children:e}){return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{className:l().className,children:[e,r.jsx(i.Ix,{})]})})}},7457:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var r=s(9510),a=s(1159),l=s.n(a);const i=({items:e})=>r.jsx("ul",{className:"w-[90%] m-auto flex gap-2 mt-10",children:Object.entries(e).map((([t,s],a)=>(0,r.jsxs)(l().Fragment,{children:[r.jsx("li",{className:"text-gray-400 text-[16px]",children:s}),a!==Object.keys(e).length-1&&r.jsx("li",{className:"flex items-center",children:r.jsx("div",{className:"w-1 h-6 bg-gray-300 mx-1"})})]},t)))})},1486:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var r=s(9510),a=(s(1159),s(7710)),l=s(7431);const i={src:"/_next/static/media/visa.057ff11c.png",height:91,width:90,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVMaXEkZ7ImZq4kZa4kZ67vszMiZLGKiHQmZqwkZa7AgA8bAAAACnRSTlMAEZGuIg9zgVc/LnD5gQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACpJREFUeJxlyckNACAQA7FJ9gD6bxghfuCv4VOlAxi2ZyS02xELJOW9xwYMQABVnpaVAgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},n={src:"/_next/static/media/paypal.7c2874ee.png",height:123,width:123,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEVMaXEAmdoAKoIAicwAN4cAZrIAMYgAL4UAIn8Aod8AXKgIl583AAAAC3RSTlMAOjxcoCJhZxZql8L73V0AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAfSURBVHicY2DADVhYWJk4GBlZGbiYmdjZmDkZ8agFAAopAEgINNekAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},c=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"h-[600px] w-full bg-[#dcdcdc] mt-10 flex justify-center items-start pt-20",children:[(0,r.jsxs)("div",{className:"left w-[50%] flex justify-center items-center gap-10 ",children:[(0,r.jsxs)("div",{className:"flex flex-col justify-start items-start gap-1",children:[r.jsx("p",{className:"text-xl font-bold",children:"SHOP"}),r.jsx("li",{className:"text-md list-none text-gray-500",children:"Annoucement"}),r.jsx("li",{className:"text-md list-none text-gray-500",children:"All Collections"}),r.jsx("li",{className:"text-md list-none text-gray-500",children:"Flash Sales"}),r.jsx("li",{className:"text-md list-none text-gray-500",children:"Official Stores"})]}),(0,r.jsxs)("div",{className:"flex flex-col justify-start items-start gap-1",children:[r.jsx("p",{className:"text-xl font-bold",children:"COMPANY"}),r.jsx("li",{className:"text-md list-none text-gray-500",children:"About Us"}),r.jsx("li",{className:"text-md list-none text-gray-500",children:"Contact Gook"}),r.jsx("li",{className:"text-md list-none text-gray-500",children:"Affiliates"}),r.jsx("li",{className:"text-md list-none text-gray-500",children:"Policies "})]}),(0,r.jsxs)("div",{className:"flex flex-col justify-start items-start gap-1",children:[r.jsx("p",{className:"text-xl font-bold",children:"SUPPORT"}),r.jsx("li",{className:"text-md list-none text-gray-500",children:"FAQS"}),r.jsx("li",{className:"text-md list-none text-gray-500",children:"Cookie Policy"}),r.jsx("li",{className:"text-md list-none text-gray-500",children:"Terms Of Use"}),r.jsx("li",{className:"text-md list-none text-gray-500",children:"Security Center"})]})]}),(0,r.jsxs)("div",{className:"right w-[50%]",children:[(0,r.jsxs)("div",{className:"logo flex justify-start items-end gap-1 mb-4",children:[r.jsx("h1",{className:"text-2xl font-black",children:"Gookway"}),r.jsx("span",{className:"h-[10px] w-[10px] bg-[#ff0000] rounded-full"})]}),r.jsx("p",{className:"text-md text-gray-500 mb-4",children:"Gook is the leading retail company for affordable and durable mobile phones, computers, accessories, and various types of Electronics. We consider it necessary to fill up this need in the global information technology sector with emphasis on Africa market"}),(0,r.jsxs)("div",{className:"w-[60%]",children:[r.jsx("p",{className:"text-md mb-3",style:{fontWeight:"900"},children:"Sign Up For Newsletter"}),(0,r.jsxs)("p",{className:"text-md text-gray-500",children:["Get the latest and greatest offers from us by subscribing to our newsletter. Join"," ",r.jsx("span",{className:"text-md font-black text-[#ff0000]",children:"1,000,000+"})," ","Subscribers."]})]}),(0,r.jsxs)("div",{className:"w-full mt-10 pr-5",children:[r.jsx("input",{type:"text",className:"w-[70%] py-4 px-3 outline-none",placeholder:"Your email address"}),r.jsx("button",{type:"button",className:"w-[30%] bg-[#ff0000] text-white py-4",children:"Subscribe"})]})]})]}),(0,r.jsxs)("div",{className:"copyRight h-[200px] bg-black w-full flex justify-between items-center p-5",children:[(0,r.jsxs)("p",{className:"text-md text-white w-[50%]",children:["Copyright \xa9 gook.ng 2024 All Rights Reserved",r.jsx("p",{className:"text-sm text-white w-[50%]",children:"Developed by Achills Technologies"})]}),(0,r.jsxs)("div",{className:"w-[50%] flex justify-center items-center gap-10",children:[r.jsx(a.default,{src:l.Z,className:"w-12 h-12",alt:"mastercard"}),r.jsx(a.default,{src:i,alt:"visa",className:"w-12 h-12"}),r.jsx(a.default,{src:n,alt:"paypal",className:"w-12 h-12"})]})]})]})},6405:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>n});var r=s(8570);const a=(0,r.createProxy)(String.raw`/Users/arinzehills/Gookway-/components/Nav.tsx`),{__esModule:l,$$typeof:i}=a,n=(a.default,(0,r.createProxy)(String.raw`/Users/arinzehills/Gookway-/components/Nav.tsx#default`))},7431:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});const r={src:"/_next/static/media/mastercard.10a0829f.png",height:91,width:90,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXH3mxjrBBj5oRv/qR3sCBj3nRvsABvzZxjsNxj4oRr3nBv5oBv1AB3uABv/ZgL3nhv9VwL4kxTyABzsABb/fwj9Pwj9AB2FY4IgAAAAFXRSTlMAl5fS/tL9/Aob+S6v/K/52PnM0DgZNWKsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVR4nGXBiQGAIAwDwABt04KKH7D/pg7gHeDh3hx4lXrb2fAszmFSQPLqViuOtc8hsiGy5lRS4OcDVD8B1pIJchMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},2848:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});const r={src:"/_next/static/media/mastercard.10a0829f.png",height:91,width:90,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXH3mxjrBBj5oRv/qR3sCBj3nRvsABvzZxjsNxj4oRr3nBv5oBv1AB3uABv/ZgL3nhv9VwL4kxTyABzsABb/fwj9Pwj9AB2FY4IgAAAAFXRSTlMAl5fS/tL9/Aob+S6v/K/52PnM0DgZNWKsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVR4nGXBiQGAIAwDwABt04KKH7D/pg7gHeDh3hx4lXrb2fAszmFSQPLqViuOtc8hsiGy5lRS4OcDVD8B1pIJchMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},2185:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});const r={src:"/_next/static/media/paypal.7c2874ee.png",height:123,width:123,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEVMaXEAmdoAKoIAicwAN4cAZrIAMYgAL4UAIn8Aod8AXKgIl583AAAAC3RSTlMAOjxcoCJhZxZql8L73V0AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAfSURBVHicY2DADVhYWJk4GBlZGbiYmdjZmDkZ8agFAAopAEgINNekAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},6795:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});const r={src:"/_next/static/media/visa.057ff11c.png",height:91,width:90,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVMaXEkZ7ImZq4kZa4kZ67vszMiZLGKiHQmZqwkZa7AgA8bAAAACnRSTlMAEZGuIg9zgVc/LnD5gQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACpJREFUeJxlyckNACAQA7FJ9gD6bxghfuCv4VOlAxi2ZyS02xELJOW9xwYMQABVnpaVAgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},7481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(6621);const a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7120:()=>{},5512:(e,t,s)=>{"use strict";s.d(t,{w_:()=>A});var r=s(1159),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(a),i=["attr","size","title"];function n(e,t){if(null==e)return{};var s,r,a=function(e,t){if(null==e)return{};var s={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;s[r]=e[r]}return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)s=l[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},c.apply(this,arguments)}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function d(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){x(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function x(e,t,s){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var r=s.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function m(e){return e&&e.map(((e,t)=>r.createElement(e.tag,d({key:t},e.attr),m(e.child))))}function A(e){return t=>r.createElement(h,c({attr:d({},e.attr)},t),m(e.child))}function h(e){var t=t=>{var s,{attr:a,size:l,title:o}=e,x=n(e,i),m=l||t.size||"1em";return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,x,{className:s,style:d(d({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(e=>t(e))):t(a)}}};var t=require("../../webpack-runtime.js");t.C(e);var s=t.X(0,[948,54,621,481,285,441,710,715],(()=>{return e=2557,t(t.s=e);var e}));module.exports=s})();