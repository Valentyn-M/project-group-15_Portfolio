import{i as b,A as ee,S as W,N as te,K as oe,a as j}from"./assets/vendor-CVDniW-J.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const v of r.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&o(v)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const m=document.documentElement,F=document.querySelector(".switch-theme-test");F.addEventListener("click",()=>Z(!0));function Z(e=!1){let t=m.classList.contains("_light")?"light":"dark",s,o;t==="light"?(s="dark",o="dark"):(s="light",o="light"),m.classList.remove(`_${t}`),m.classList.add(`_${s}`),F.blur(),m.setAttribute("data-color-scheme",o),e&&localStorage.setItem("theme",s)}(function(){const e=localStorage.getItem("theme");let t;window.matchMedia&&(t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",o=>{e||Z()});function s(){e?(m.classList.add(`_${e}`),m.setAttribute("data-color-scheme",e)):(m.classList.add(`_${t}`),m.setAttribute("data-color-scheme",t))}s()})();const n={burgerBtnEl:document.querySelector(".burger"),mobileMenuEl:document.querySelector(".mobile-menu")},P=`
    <svg class="theme-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path class="theme-path" d="M5.33398 23.027V21.6936H26.6673V23.027H5.33398ZM5.33398 16.667V15.3336H26.6673V16.667H5.33398ZM5.33398 10.307V8.97363H26.6673V10.307H5.33398Z"/>
    </svg>
  `,se=`
    <svg class="theme-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path class="theme-path" d="M24 8L8 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="theme-path" d="M8 8L24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;function ie(){n.mobileMenuEl.classList.contains("active")?(n.mobileMenuEl.classList.remove("active"),n.burgerBtnEl.innerHTML=P,document.body.style.overflow=""):(n.mobileMenuEl.classList.add("active"),n.burgerBtnEl.innerHTML=se,document.body.style.overflow="hidden")}n.burgerBtnEl.innerHTML=P;n.burgerBtnEl.addEventListener("click",ie);n.mobileMenuEl.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{n.mobileMenuEl.classList.remove("active"),n.burgerBtnEl.innerHTML=P,document.body.style.overflow=""})});const u=document.querySelector(".hero-subtitle"),ae=u.textContent;u.textContent="";const S=Array.from(ae);let f=0;function y(){if(f<S.length){const e=document.createElement("span");e.textContent=S[f],e.classList.add("show"),u.appendChild(e),f++,setTimeout(y,300)}else setTimeout(re,2e3)}function re(){u.querySelectorAll("span").forEach(t=>{t.classList.remove("show")}),setTimeout(()=>{u.textContent="",f=0,setTimeout(y,1e3)},500)}y();const ce="/project-group-15_Portfolio/assets/icons-CBMYlWGZ.svg",ne="/project-group-15_Portfolio/assets/foto-1-mob-1x-D26WoLRA.jpg",le="/project-group-15_Portfolio/assets/foto-1-mob-2x-DhCB96Uv.jpg",w="/project-group-15_Portfolio/assets/foto-1-pc-1x-CJHf-KcU.jpg",_="/project-group-15_Portfolio/assets/foto-1-pc-2x-BNtyum_d.jpg",ge="/project-group-15_Portfolio/assets/foto-2-mob-1x-EtHPXKkg.jpg",me="/project-group-15_Portfolio/assets/foto-2-mob-2x-C_xp7RWq.jpg",k="/project-group-15_Portfolio/assets/foto-2-pc-1x-Bh0zuRcK.jpg",E="/project-group-15_Portfolio/assets/foto-2-pc-2x-CWx3ZTG4.jpg",pe="/project-group-15_Portfolio/assets/foto-3-mob-1x-DB4I2VTJ.jpg",ue="/project-group-15_Portfolio/assets/foto-3-mob-2x-BLzt7GVP.jpg",T="/project-group-15_Portfolio/assets/foto-3-pc-1x-DfEAheqe.jpg",C="/project-group-15_Portfolio/assets/foto-3-pc-2x-Ch8XDStp.jpg",de="/project-group-15_Portfolio/assets/foto-4-mob-1x-CD5fRfXQ.jpg",fe="/project-group-15_Portfolio/assets/foto-4-mob-2x-BmMU5gs8.jpg",A="/project-group-15_Portfolio/assets/foto-4-pc-1x-D-CeFGsL.jpg",D="/project-group-15_Portfolio/assets/foto-4-pc-2x-Ds_46Kai.jpg",be="/project-group-15_Portfolio/assets/foto-5-mob-1x-DDcxACms.jpg",he="/project-group-15_Portfolio/assets/foto-5-mob-2x-DSRy5tBB.jpg",q="/project-group-15_Portfolio/assets/foto-5-pc-1x--fFirykf.jpg",R="/project-group-15_Portfolio/assets/foto-5-pc-2x-D_m08kgU.jpg",ve="/project-group-15_Portfolio/assets/foto-6-mob-1x-CQRuAXaW.jpg",xe="/project-group-15_Portfolio/assets/foto-6-mob-2x-D53aflxe.jpg",$="/project-group-15_Portfolio/assets/foto-6-pc-1x-CU6d4Kcx.jpg",J="/project-group-15_Portfolio/assets/foto-6-pc-2x-BlfaM5MF.jpg",je="/project-group-15_Portfolio/assets/foto-7-mob-1x-YfusUEWI.jpg",Pe="/project-group-15_Portfolio/assets/foto-7-mob-2x-CBC9LGOt.jpg",B="/project-group-15_Portfolio/assets/foto-7-pc-1x-g4S0KuUf.jpg",H="/project-group-15_Portfolio/assets/foto-7-pc-2x-C7rtZuDf.jpg",ye="/project-group-15_Portfolio/assets/foto-8-mob-1x-D1Aoe1Zd.jpg",Le="/project-group-15_Portfolio/assets/foto-8-mob-2x-3RtHWdua.jpg",I="/project-group-15_Portfolio/assets/foto-8-pc-1x-QCLV-h6I.jpg",G="/project-group-15_Portfolio/assets/foto-8-pc-2x-_BDzX8kg.jpg",Me="/project-group-15_Portfolio/assets/foto-9-mob-1x-pguoR3Jq.jpg",Se="/project-group-15_Portfolio/assets/foto-9-mob-2x-0Y4f9x5j.jpg",N="/project-group-15_Portfolio/assets/foto-9-pc-1x-DS-4-XUF.jpg",z="/project-group-15_Portfolio/assets/foto-9-pc-2x-CHcGmrtl.jpg",we="/project-group-15_Portfolio/assets/foto-10-mob-1x-Elyq859-.jpg",_e="/project-group-15_Portfolio/assets/foto-10-mob-2x-Ct-JpZGu.jpg",O="/project-group-15_Portfolio/assets/foto-10-pc-1x-DYUcciYA.jpg",V="/project-group-15_Portfolio/assets/foto-10-pc-2x-C1fMWKd7.jpg",U=[{title:"Wallet webservice",imageMob:ne,imageMob2x:le,imageTab:w,imageTab2x:_,imagePc:w,imagePc2x:_,techStack:"React, JavaScript, Node JS, Git",link:"https://valentyn-m.github.io/project-group-15_Portfolio/"},{title:"Green harvest webservice",imageMob:ge,imageMob2x:me,imageTab:k,imageTab2x:E,imagePc:k,imagePc2x:E,techStack:"React, JavaScript, Node JS, Git",link:"https://valentyn-m.github.io/project-group-15_Portfolio/"},{title:"English Exellence website",imageMob:pe,imageMob2x:ue,imageTab:T,imageTab2x:C,imagePc:T,imagePc2x:C,techStack:"React, JavaScript, Node JS, Git",link:"https://valentyn-m.github.io/project-group-15_Portfolio/"},{title:"power pulse webservice",imageMob:de,imageMob2x:fe,imageTab:A,imageTab2x:D,imagePc:A,imagePc2x:D,techStack:"React, JavaScript, Node JS, Git",link:"https://valentyn-m.github.io/project-group-15_Portfolio/"},{title:"mimino website",imageMob:be,imageMob2x:he,imageTab:q,imageTab2x:R,imagePc:q,imagePc2x:R,techStack:"React, JavaScript, Node JS, Git",link:"https://valentyn-m.github.io/project-group-15_Portfolio/"},{title:"vyshyvanka vibes Landing Page",imageMob:ve,imageMob2x:xe,imageTab:$,imageTab2x:J,imagePc:$,imagePc2x:J,techStack:"React, JavaScript, Node JS, Git",link:"https://valentyn-m.github.io/project-group-15_Portfolio/"},{title:"chego jewelry website",imageMob:je,imageMob2x:Pe,imageTab:B,imageTab2x:H,imagePc:B,imagePc2x:H,techStack:"React, JavaScript, Node JS, Git",link:"https://valentyn-m.github.io/project-group-15_Portfolio/"},{title:"energy flow webservice",imageMob:ye,imageMob2x:Le,imageTab:I,imageTab2x:G,imagePc:I,imagePc2x:G,techStack:"React, JavaScript, Node JS, Git",link:"https://valentyn-m.github.io/project-group-15_Portfolio/"},{title:"fruitbox online store",imageMob:Me,imageMob2x:Se,imageTab:N,imageTab2x:z,imagePc:N,imagePc2x:z,link:"https://valentyn-m.github.io/project-group-15_Portfolio/"},{title:"starlight studio landing page",imageMob:we,imageMob2x:_e,imageTab:O,imageTab2x:V,imagePc:O,imagePc2x:V,techStack:"React, JavaScript, Node JS, Git",link:"https://valentyn-m.github.io/project-group-15_Portfolio/"}];let d=0;const K=3;function X(){const e=document.querySelector(".my-projects-list");let s=U.slice(d,d+K).map(o=>`
    <li class="my-project-item">
        <div class="my-projects-box-image">
        <picture>
        <source srcset="${o.imagePc} 1x, ${o.imagePc2x} 2x" media="(min-width: 1280px)" />
        <source srcset="${o.imageTab} 1x, ${o.imageTab2x} 2x" media="(min-width: 768px)" />
        <source srcset="${o.imageMob} 1x, ${o.imageMob2x} 2x" media="(min-width: 360px)" />
        <img src="${o.imageMob}" alt="${o.title}" width="320" height="194" class="my-projects-image" loading="lazy"/>
        </picture>
        </div>
        <p class="my-projects-tech-stack"> ${o.techStack}</p>
        <div class="my-projects-title-link">
        <h3 class="my-projects-image-title">${o.title}</h3>      
        <a href="${o.link}" target="_blank" rel="noopener no-referrer" aria-label="view the project" class="my-projects-link">
            Visit <svg class="my-projects-icon" width="24" height="24">
            <use href="${ce}#icon-arrow-visit"></use>
            </svg>
        </a>
        </div>
    </li>`).join("");e.innerHTML+=s,d+=K,d>=U.length&&(document.querySelector(".load-more-btn").style.display="none",b.info({backgroundColor:"rgba(0, 176, 104, 1)",title:"More projects",message:"GitHub Linkedin Instagram Facebook",position:"topCenter",icon:!1,timeout:5e3,titleColor:"rgba(255, 255, 255, 1)",titleSize:"20px",messageColor:"rgba(255, 255, 255, 1)"}))}document.querySelector(".load-more-btn").addEventListener("click",X);window.addEventListener("load",X);new ee(".accordion-container",{duration:400,showMultiple:!0,onOpen:function(e){console.log(e)}});document.querySelector(".accordion-container");W.use([te,oe]);const Y=document.querySelector("#reviewsWrap"),ke="<div class='reviewError'>Not found!</div>",Ee=new W(".swiper",{keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1280:{slidesPerView:2,spaceBetween:40}}});j.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function Te(){try{return(await j.get("/reviews")).data}catch{console.log("Error fetching reviews"),Y.insertAdjacentHTML("beforeend",ke),b.error({class:"izitoast-error",titleSize:"16px",titleLineHeight:"1.3",message:"Error fetching reviews:",messageSize:"16px",messageLineHeight:"1.4",close:!0,closeOnEscape:!0,position:"topRight",timeout:1e4,animateInside:!1,transitionIn:"bounceInLeft"})}}function Ce(e){const t=e.map(s=>`
        <li class="swiper-slide">
          <div class='reviewbox'>
            <div class='reviewtext'>${s.review}</div>
            <div class='author'>
              <img src="${s.avatar_url}" alt="avatar" class='avatar'>
              <div>${s.author}</div>
            </div>
          </div>
        </li>
      `).join("");Y.insertAdjacentHTML("beforeend",t),Ee.update()}async function Ae(){const e=await Te();e&&Ce(e)}Ae();const De="https://portfolio-js.b.goit.study/api/",p=document.querySelector(".work-together-form"),a=p.elements.email,g=p.elements.message,h=p.querySelector(".work-together-input-success-icon"),L=p.querySelector(".work-together-input-error-message"),M="contact-form-state",l=document.querySelector(".modal-overlay"),c={email:"",message:""},x=JSON.parse(localStorage.getItem(M));if(x){const e=x.email??"",t=x.message??"";e&&(a.value=e,c.email=e),t&&(g.value=t,c.message=t)}p.addEventListener("input",e=>{e.target===a?c.email=e.target.value.trim():e.target===g&&(c.message=e.target.value.trim()),localStorage.setItem(M,JSON.stringify(c))});a.addEventListener("focus",function(e){a.setAttribute("data-placeholder",a.getAttribute("placeholder")),a.setAttribute("placeholder",""),L.classList.remove("is-active"),a.classList.remove("error"),h.classList.remove("is-active")});g.addEventListener("focus",function(e){g.setAttribute("data-placeholder",g.getAttribute("placeholder")),g.setAttribute("placeholder","")});a.addEventListener("blur",function(){c.email!=""&&(a.checkValidity()?qe():Q()),a.setAttribute("placeholder",a.getAttribute("data-placeholder"))});g.addEventListener("blur",function(e){g.setAttribute("placeholder",g.getAttribute("data-placeholder"))});p.addEventListener("submit",e=>{if(e.preventDefault(),c.email==="")return b.warning({class:"izitoast-warning",titleSize:"16px",message:"Please enter your email",messageSize:"16px",close:!0,closeOnEscape:!0,position:"topRight",timeout:4e3,animateInside:!1,transitionIn:"bounceInLeft"});if(!a.checkValidity()){Q();return}$e(c.email,c.message).then(t=>{l.querySelector(".modal-form-title").textContent=`${t.title}`,l.querySelector(".modal-form-text").textContent=`${t.message}`,l.classList.add("is-active"),Re(),h.classList.remove("is-active"),localStorage.removeItem(M),c.email="",c.message="",e.target.reset()}).catch(t=>b.error({class:"izitoast-error",title:`${t.code}`,titleSize:"16px",titleLineHeight:"1.3",message:`${t.message}. ${t.response.data.message}`,messageSize:"16px",messageLineHeight:"1.4",close:!0,closeOnEscape:!0,position:"topRight",timeout:1e4,animateInside:!1,transitionIn:"bounceInLeft"}))});function Q(){L.classList.add("is-active"),a.classList.add("error"),h.classList.remove("is-active")}function qe(){L.classList.remove("is-active"),a.classList.remove("error"),h.classList.add("is-active")}function Re(){l.addEventListener("click",e);function e(s){const o=s.target;o.closest(".modal-overlay")&&(l.classList.remove("is-active"),l.removeEventListener("click",e)),o.closest(".modal-form-close-icon")&&(l.classList.remove("is-active"),l.removeEventListener("click",e))}document.addEventListener("keyup",t);function t(s){s.code==="Escape"&&(l.classList.remove("is-active"),document.removeEventListener("keyup",t))}}async function $e(e,t){const s={email:e,comment:t||"Message is empty"};return(await j.post(`${De}requests`,s)).data}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".footer .logo"),t=document.querySelectorAll(".social-list li"),s=document.querySelector(".footer p");setTimeout(()=>{e.classList.add("visible")},500),t.forEach((o,i)=>{setTimeout(()=>{o.classList.add("visible")},700+i*200)}),setTimeout(()=>{s.classList.add("visible")},1500)});
//# sourceMappingURL=index.js.map
