import{d as m,r as k,o as _,c as p,a as t,n as b,b as c,w as l,u as d,R as u,e as L,f as h,g as x,t as C,h as P,i as S,j as E}from"./vendor.4e0d8690.js";const O=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}};O();const N={class:"navbar is-info",role:"navigation","aria-label":"main navigation"},A={class:"container"},R={class:"navbar-brand"},H=t("a",{class:"navbar-item",href:"https://bulma.io"},[t("img",{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"})],-1),V=t("span",{"aria-hidden":"true"},null,-1),B=t("span",{"aria-hidden":"true"},null,-1),T=t("span",{"aria-hidden":"true"},null,-1),j=[V,B,T],D={class:"navbar-start"},M=h(" Home "),W=h(" Messages "),q={class:"navbar-item has-dropdown is-hoverable"},z=t("a",{class:"navbar-link"}," More ",-1),F={class:"navbar-dropdown"},I=h(" About "),J=t("a",{class:"navbar-item"}," Jobs ",-1),K=h(" Contact "),G=t("hr",{class:"navbar-divider"},null,-1),Q=t("a",{class:"navbar-item"}," Report an issue ",-1),U={class:"navbar-end"},X=L('<div class="navbar-item"><div class="field is-grouped"><p class="control"><a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms"><span class="icon"><i class="fab fa-twitter"></i></span><span> Tweet </span></a></p><p class="control"><a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.3/bulma-0.9.3.zip"><span class="icon"><i class="fas fa-download"></i></span><span>Download</span></a></p></div></div>',1),Y={class:"navbar-item"},Z={class:"buttons"},tt=t("strong",null,"Sign up",-1),st=h(" Log in "),et=m({setup(a){const e=k(!1);return(i,o)=>(_(),p("nav",N,[t("div",A,[t("div",R,[H,t("a",{role:"button",class:b(["navbar-burger",{"is-active":e.value}]),"aria-label":"menu","aria-expanded":"false",onClick:o[0]||(o[0]=s=>e.value=!e.value)},j,2)]),t("div",{class:b(["navbar-menu",{"is-active":e.value}])},[t("div",D,[c(d(u),{class:"navbar-item",to:"/"},{default:l(()=>[M]),_:1}),c(d(u),{class:"navbar-item",to:"/messages"},{default:l(()=>[W]),_:1}),t("div",q,[z,t("div",F,[c(d(u),{class:"navbar-item",to:"/about"},{default:l(()=>[I]),_:1}),J,c(d(u),{class:"navbar-item",to:"/contact"},{default:l(()=>[K]),_:1}),G,Q])])]),t("div",U,[X,t("div",Y,[t("div",Z,[c(d(u),{class:"button is-primary",to:"/signup"},{default:l(()=>[tt]),_:1}),c(d(u),{class:"button is-light",to:"/login"},{default:l(()=>[st]),_:1})])])])],2)])]))}}),ot={class:"container"},at=m({setup(a){return(e,i)=>{const o=x("router-view");return _(),p("div",null,[c(et),t("div",ot,[c(o)])])}}}),nt="modulepreload",g={},it="/",rt=function(e,i){return!i||i.length===0?e():Promise.all(i.map(o=>{if(o=`${it}${o}`,o in g)return;g[o]=!0;const s=o.endsWith(".css"),n=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const r=document.createElement("link");if(r.rel=s?"stylesheet":nt,s||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),s)return new Promise((w,$)=>{r.addEventListener("load",w),r.addEventListener("error",$)})})).then(()=>e())};var ct=(a,e)=>{const i=a.__vccOpts||a;for(const[o,s]of e)i[o]=s;return i};const lt={},dt={class:"section"},ut=t("h1",{class:"title"},"Home Page",-1),_t=[ut];function pt(a,e){return _(),p("div",dt,_t)}var ht=ct(lt,[["render",pt]]);const mt={class:"section"},ft={class:"title"},f=m({props:{title:{type:String,default:"Hello World"}},setup(a){const e=a;return(i,o)=>(_(),p("div",mt,[t("h1",ft,C(e.title),1)]))}}),y={user:null};async function vt(a,e){y.user={username:a,password:e},v.push("/messages")}const bt={class:"section"},gt=t("h1",{class:"title"},"Login Page",-1),yt=t("span",{class:"icon"},[t("i",{class:"fa fa-sign-in"})],-1),wt=t("span",null,"Login",-1),$t=[yt,wt],kt=m({setup(a){function e(){vt("Surya","Mowa")}return(i,o)=>(_(),p("div",bt,[gt,t("button",{class:"button is-primary",onClick:e},$t)]))}}),Lt=[{path:"/",component:ht},{path:"/login",component:kt},{path:"/messages",component:()=>rt(()=>import("./Messages.9862e89b.js"),["assets/Messages.9862e89b.js","assets/vendor.4e0d8690.js"])},{path:"/signup",component:f,props:{title:"Signup Page!"}},{path:"/about",component:f,props:{title:"About Page!"}},{path:"/contact",component:f,props:{title:"Contact Page!"}}],v=P({history:S(),routes:Lt,linkActiveClass:"is-active"});v.beforeEach((a,e)=>{if(["/messages"].includes(a.path)&&!y.user)return"/login"});E(at).use(v).mount("#app");
