(()=>{"use strict";const e=document.querySelector(".open-nav-menu"),t=document.querySelector(".close-nav-menu"),n=document.querySelector(".nav-menu"),c=document.querySelector(".menu-overlay");(()=>{const i=()=>{n.classList.toggle("open"),c.classList.toggle("active"),document.body.classList.toggle("hidden-scrolling")};e.addEventListener("click",i),t.addEventListener("click",i),c.addEventListener("click",i);const s=()=>{n.querySelector(".menu-item-has-children.active .sub-menu").removeAttribute("style"),n.querySelector(".menu-item-has-children.active").classList.remove("active")};n.addEventListener("click",(e=>{if(e.target.hasAttribute("data-toggle")&&window.innerWidth<=992){e.preventDefault();const t=e.target.parentElement;if(t.classList.contains("active"))s();else{n.querySelector(".menu-item-has-children.active")&&s(),t.classList.add("active");const e=t.querySelector(".sub-menu");e.style.maxHeight=`${e.scrollHeight}px`}}})),window.addEventListener("resize",(()=>{(void 0).innerWidth>992&&(n.classList.contains("open")&&i(),n.querySelector(".menu-item-has-children.active")&&s())}))})()})();