import{A as N,S as P,N as C,P as I,a as j,i as S}from"./assets/vendor-B5NWRNTB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}})();const g=document.documentElement,T=document.querySelector(".switch-theme-test");T.addEventListener("click",()=>A(!0));function A(e=!1){let t=g.classList.contains("_light")?"light":"dark",o,i;t==="light"?(o="dark",i="dark"):(o="light",i="light"),g.classList.remove(`_${t}`),g.classList.add(`_${o}`),T.blur(),g.setAttribute("data-color-scheme",i),e&&localStorage.setItem("theme",o)}(function(){const e=localStorage.getItem("theme");let t;window.matchMedia&&(t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",i=>{e||A()});function o(){e?(g.classList.add(`_${e}`),g.setAttribute("data-color-scheme",e)):(g.classList.add(`_${t}`),g.setAttribute("data-color-scheme",t))}o()})();const n={burgerBtnEl:document.querySelector(".burger"),mobileMenuEl:document.querySelector(".mobile-menu")},v=`
    <svg class="theme-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path class="theme-path" d="M5.33398 23.027V21.6936H26.6673V23.027H5.33398ZM5.33398 16.667V15.3336H26.6673V16.667H5.33398ZM5.33398 10.307V8.97363H26.6673V10.307H5.33398Z"/>
    </svg>
  `,_=`
    <svg class="theme-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path class="theme-path" d="M24 8L8 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="theme-path" d="M8 8L24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;function R(){n.mobileMenuEl.classList.contains("active")?(n.mobileMenuEl.classList.remove("active"),n.burgerBtnEl.innerHTML=v,document.body.style.overflow=""):(n.mobileMenuEl.classList.add("active"),n.burgerBtnEl.innerHTML=_,document.body.style.overflow="hidden")}n.burgerBtnEl.innerHTML=v;n.burgerBtnEl.addEventListener("click",R);n.mobileMenuEl.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{n.mobileMenuEl.classList.remove("active"),n.burgerBtnEl.innerHTML=v,document.body.style.overflow=""})});const d=document.querySelector(".hero-subtitle"),H=d.textContent;d.textContent="";const E=Array.from(H);let b=0;function x(){if(b<E.length){const e=document.createElement("span");e.textContent=E[b],e.classList.add("show"),d.appendChild(e),b++,setTimeout(x,300)}else setTimeout(O,2e3)}function O(){d.querySelectorAll("span").forEach(t=>{t.classList.remove("show")}),setTimeout(()=>{d.textContent="",b=0,setTimeout(x,1e3)},500)}x();const M=[{title:"Wallet webservice",imageMob:"../img/my-projects/mobile/foto-1-mob-1x.jpg",imageMob2x:"../img/my-projects/mobile/foto-1-mob-2x.jpg",imageTab:"../img/my-projects/tablet/foto-1-tab-1x.jpg",imageTab2x:"../img/my-projects/tablet/foto-1-tab-2x.jpg",imagePc:"../img/my-projects/pc/foto-1-pc-1x.jpg",imagePc2x:"../img/my-projects/pc/foto-1-pc-2x.jpg",techStack:"React, JavaScript, Node JS, Git",link:"https://valentyn-m.github.io/project-group-15_Portfolio/"},{title:"Green harvest webservice",imageMob:"../img/my-projects/mobile/foto-2-mob-1x.jpg",imageMob2x:"../img/my-projects/mobile/foto-2-mob-2x.jpg",imageTab:"../img/my-projects/tablet/foto-2-tab-1x.jpg",imageTab2x:"../img/my-projects/tablet/foto-2-tab-2x.jpg",imagePc:"../img/my-projects/pc/foto-2-pc-1x.jpg",imagePc2x:"../img/my-projects/pc/foto-2-pc-2x.jpg",techStack:"React, JavaScript, Node JS, Git",link:"https://valentyn-m.github.io/project-group-15_Portfolio/2"},{title:"English Exellence website",imageMob:"../img/my-projects/mobile/foto-3-mob-1x.jpg",imageMob2x:"../img/my-projects/mobile/foto-3-mob-2x.jpg",imageTab:"../img/my-projects/tablet/foto-3-tab-1x.jpg",imageTab2x:"../img/my-projects/tablet/foto-3-tab-2x.jpg",imagePc:"../img/my-projects/pc/foto-3-pc-1x.jpg",imagePc2x:"../img/my-projects/pc/foto-3-pc-2x.jpg",techStack:"React, JavaScript, Node JS, Git",link:"https://valentyn-m.github.io/project-group-15_Portfolio/"},{title:"power pulse webservice",imageMob:"../img/my-projects/mobile/foto-4-mob-1x.jpg",imageMob2x:"../img/my-projects/mobile/foto-4-mob-2x.jpg",imageTab:"../img/my-projects/tablet/foto-4-tab-1x.jpg",imageTab2x:"../img/my-projects/tablet/foto-4-tab-2x.jpg",imagePc:"../img/my-projects/pc/foto-4-pc-1x.jpg",imagePc2x:"../img/my-projects/pc/foto-4-pc-2x.jpg",techStack:"React, JavaScript, Node JS, Git",link:"https://valentyn-m.github.io/project-group-15_Portfolio/"},{title:"mimino website",imageMob:"../img/my-projects/mobile/foto-5-mob-1x.jpg",imageMob2x:"../img/my-projects/mobile/foto-5-mob-2x.jpg",imageTab:"../img/my-projects/tablet/foto-5-tab-1x.jpg",imageTab2x:"../img/my-projects/tablet/foto-5-tab-2x.jpg",imagePc:"../img/my-projects/pc/foto-5-pc-1x.jpg",imagePc2x:"../img/my-projects/pc/foto-5-pc-2x.jpg",techStack:"React, JavaScript, Node JS, Git",link:"https://valentyn-m.github.io/project-group-15_Portfolio/"},{title:"vyshyvanka vibes Landing Page",imageMob:"../img/my-projects/mobile/foto-6-mob-1x.jpg",imageMob2x:"../img/my-projects/mobile/foto-6-mob-2x.jpg",imageTab:"../img/my-projects/tablet/foto-6-tab-1x.jpg",imageTab2x:"../img/my-projects/tablet/foto-6-tab-2x.jpg",imagePc:"../img/my-projects/pc/foto-6-pc-1x.jpg",imagePc2x:"../img/my-projects/pc/foto-6-pc-2x.jpg",techStack:"React, JavaScript, Node JS, Git",link:"https://valentyn-m.github.io/project-group-15_Portfolio/"},{title:"chego jewelry website",imageMob:"../img/my-projects/mobile/foto-7-mob-1x.jpg",imageMob2x:"../img/my-projects/mobile/foto-7-mob-2x.jpg",imageTab:"../img/my-projects/tablet/foto-7-tab-1x.jpg",imageTab2x:"../img/my-projects/tablet/foto-7-tab-2x.jpg",imagePc:"../img/my-projects/pc/foto-7-pc-1x.jpg",imagePc2x:"../img/my-projects/pc/foto-7-pc-2x.jpg",techStack:"React, JavaScript, Node JS, Git",link:"https://valentyn-m.github.io/project-group-15_Portfolio/"},{title:"energy flow webservice",imageMob:"../img/my-projects/mobile/foto-8-mob-1x.jpg",imageMob2x:"../img/my-projects/mobile/foto-8-mob-2x.jpg",imageTab:"../img/my-projects/tablet/foto-8-tab-1x.jpg",imageTab2x:"../img/my-projects/tablet/foto-8-tab-2x.jpg",imagePc:"../img/my-projects/pc/foto-8-pc-1x.jpg",imagePc2x:"../img/my-projects/pc/foto-8-pc-2x.jpg",techStack:"React, JavaScript, Node JS, Git",link:"https://valentyn-m.github.io/project-group-15_Portfolio/"},{title:"fruitbox online store",imageMob:"../img/my-projects/mobile/foto-9-mob-1x.jpg",imageMob2x:"../img/my-projects/mobile/foto-9-mob-2x.jpg",imageTab:"../img/my-projects/tablet/foto-9-tab-1x.jpg",imageTab2x:"../img/my-projects/tablet/foto-9-tab-2x.jpg",imagePc:"../img/my-projects/pc/foto-9-pc-1x.jpg",imagePc2x:"../img/my-projects/pc/foto-9-pc-2x.jpg",techStack:"React, JavaScript, Node JS, Git",link:"https://valentyn-m.github.io/project-group-15_Portfolio/"},{title:"starlight studio landing page",imageMob:"../img/my-projects/mobile/foto-10-mob.jpg",imageMob2x:"../img/my-projects/mobile/foto-10-mob-2x.jpg",imageTab:"../img/my-projects/tablet/foto-10-tab-1x.jpg",imageTab2x:"../img/my-projects/tablet/foto-10-tab-2x.jpg",imagePc:"../img/my-projects/pc/foto-10-pc-1x.jpg",imagePc2x:"../img/my-projects/pc/foto-10-pc-2x.jpg",techStack:"React, JavaScript, Node JS, Git",link:"https://valentyn-m.github.io/project-group-15_Portfolio/"}];let u=0;const k=3;function B(e){const t=e.dataset.src,o=e.dataset.srcset;t&&(e.src=t),o&&(e.srcset=o)}function G(){const e=document.querySelectorAll(".my-projects-image"),t=new IntersectionObserver((o,i)=>{o.forEach(s=>{s.isIntersecting&&(B(s.target),i.unobserve(s.target))})});e.forEach(o=>{t.observe(o)})}function q(){const e=document.querySelector(".my-projects-list");let o=M.slice(u,u+k).map(i=>`
      <li class="my-project-item">
        <picture>
          <source data-srcset="${i.imagePc} 1x, ${i.imagePc2x} 2x" media="(min-width: 1280px)" />
          <source data-srcset="${i.imageTab} 1x, ${i.imageTab2x} 2x" media="(min-width: 768px)" />
          <source data-srcset="${i.imageMob} 1x, ${i.imageMob2x} 2x" media="(min-width: 360px)" />
          <img data-src="${i.imagePc}" alt="${i.title}" width="320" height="194" class="my-projects-image" loading="lazy"/>
        </picture>
        <p class="my-projects-tech-stack"> ${i.techStack}</p>
        <div class="my-projects-title-link">
          <h3 class="my-projects-image-title">${i.title}</h3>      
          <a href="${i.link}" target="_blank" rel="noopener no-referrer" aria-label="view the project" class="my-projects-link">
            Visit <svg class="my-projects-icon" width="24" height="24">
              <use href="../img/icons.svg#icon-arrow-visit"></use>
            </svg>
          </a>
        </div>
      </li>
    `).join("");e.innerHTML+=o,u+=k,G(),u>=M.length&&(document.querySelector(".load-more-btn").style.display="none")}document.querySelector(".load-more-btn").addEventListener("click",q);window.addEventListener("load",q);document.addEventListener("DOMContentLoaded",function(){const e=document.createElement("li");e.classList.add("benefit-item");const t=document.createElement("div");t.classList.add("icon"),t.textContent="🚀",e.appendChild(t);const o=document.createElement("h2");o.textContent="INNOVATION",e.appendChild(o);const i=document.createElement("p");i.textContent="Always staying up to date with the latest trends in technology to bring fresh ideas and innovation to your projects.",e.appendChild(i),document.querySelector(".benefits-list").appendChild(e)});new N(".accordion-container",{duration:400,showMultiple:!0,onOpen:function(e){console.log(e)}});document.querySelector(".accordion-container");P.use([C,I]);const $=document.querySelector("#reviewsWrap"),V=new P(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1280:{slidesPerView:2,spaceBetween:40}}});j.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function z(){try{return(await j.get("/reviews")).data}catch(e){console.log("Error fetching reviews:",e),alert("Failed to fetch reviews. Please, try again later."),$.insertAdjacentHTML("beforeend","Not found")}}function D(e){const t=e.map(o=>`
        <li class="swiper-slide">
          <div class='reviewbox'>
            <div class='reviewtext'>${o.review}</div>
            <div class='author'>
              <img src="${o.avatar_url}" alt="avatar" class='avatar'>
              <div>${o.author}</div>
            </div>
          </div>
        </li>
      `).join("");$.insertAdjacentHTML("beforeend",t),V.update()}async function F(){const e=await z();e&&D(e)}F();const U="https://portfolio-js.b.goit.study/api/",p=document.querySelector(".work-together-form"),a=p.elements.email,l=p.elements.message,f=p.querySelector(".work-together-input-success-icon"),L=p.querySelector(".work-together-input-error-message"),w="contact-form-state",m=document.querySelector(".modal-overlay"),r={email:"",message:""},y=JSON.parse(localStorage.getItem(w));if(y){const e=y.email??"",t=y.message??"";e&&(a.value=e,r.email=e),t&&(l.value=t,r.message=t)}p.addEventListener("input",e=>{e.target===a?r.email=e.target.value.trim():e.target===l&&(r.message=e.target.value.trim()),localStorage.setItem(w,JSON.stringify(r))});a.addEventListener("focus",function(e){a.setAttribute("data-placeholder",a.getAttribute("placeholder")),a.setAttribute("placeholder",""),L.classList.remove("is-active"),a.classList.remove("error"),f.classList.remove("is-active")});l.addEventListener("focus",function(e){l.setAttribute("data-placeholder",l.getAttribute("placeholder")),l.setAttribute("placeholder","")});a.addEventListener("blur",function(){r.email!=""&&(a.checkValidity()?W():J()),a.setAttribute("placeholder",a.getAttribute("data-placeholder"))});l.addEventListener("blur",function(e){l.setAttribute("placeholder",l.getAttribute("data-placeholder"))});p.addEventListener("submit",e=>{if(e.preventDefault(),r.email==="")return S.warning({class:"izitoast-warning",titleSize:"16px",message:"Please enter your email",messageSize:"16px",close:!0,closeOnEscape:!0,position:"topRight",timeout:4e3,animateInside:!1,transitionIn:"bounceInLeft"});if(!a.checkValidity()){J();return}K(r.email,r.message).then(t=>{m.querySelector(".modal-form-title").textContent=`${t.title}`,m.querySelector(".modal-form-text").textContent=`${t.message}`,m.classList.add("is-active"),Z(),f.classList.remove("is-active"),localStorage.removeItem(w),r.email="",r.message="",e.target.reset()}).catch(t=>S.error({class:"izitoast-error",title:`${t.code}`,titleSize:"16px",titleLineHeight:"1.3",message:`${t.message}. ${t.response.data.message}`,messageSize:"16px",messageLineHeight:"1.4",close:!0,closeOnEscape:!0,position:"topRight",timeout:1e4,animateInside:!1,transitionIn:"bounceInLeft"}))});function J(){L.classList.add("is-active"),a.classList.add("error"),f.classList.remove("is-active")}function W(){L.classList.remove("is-active"),a.classList.remove("error"),f.classList.add("is-active")}function Z(){m.addEventListener("click",e);function e(o){const i=o.target;i.closest(".modal-overlay")&&(m.classList.remove("is-active"),m.removeEventListener("click",e)),i.closest(".modal-form-close-icon")&&(m.classList.remove("is-active"),m.removeEventListener("click",e))}document.addEventListener("keyup",t);function t(o){o.code==="Escape"&&(m.classList.remove("is-active"),document.removeEventListener("keyup",t))}}async function K(e,t){const o={email:e,comment:t||"Message is empty"};return(await j.post(`${U}requests`,o)).data}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".footer .logo"),t=document.querySelectorAll(".social-list li"),o=document.querySelector(".footer p");setTimeout(()=>{e.classList.add("visible")},500),t.forEach((i,s)=>{setTimeout(()=>{i.classList.add("visible")},700+s*200)}),setTimeout(()=>{o.classList.add("visible")},1500)});
//# sourceMappingURL=index.js.map
