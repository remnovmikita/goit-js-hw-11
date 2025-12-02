import{a as y,S as g,i as n}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function h(s){return(await y.get("https://pixabay.com/api/",{params:{key:"53507836-a90b7328b368e53f321449aea",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}function b(s,o,i){const r=o.hits.map(({webformatURL:e,largeImageURL:t,tags:a,likes:p,views:f,comments:m,downloads:d})=>`<li class="gallarey-item">
        <a class = "gallery-link" href="${t}">
        <img 
            class="gallery-image" 
            src="${e}" 
            alt="${a}"
            />
            </a>
            <ul class="info">
            <li>Likes<p>${p}</p></li>
            <li>Views<p>${f}</p></li>
            <li>Comments<p>${m}</p></li>
            <li>Downloads<p>${d}</p></li>
            </ul>

        </li>`).join("");s.innerHTML="",i.value="",s.insertAdjacentHTML("afterbegin",r),new g(".gallery-link",{captionDelay:250,showCounter:!1,captionsData:"alt"})}const l=document.querySelector(".loader"),L=document.querySelector(".form"),c=document.querySelector("[name=search-text]");document.querySelector(".form button");const u=document.querySelector(".gallery");l.style.display="none";L.addEventListener("submit",async s=>{s.preventDefault();const o=c.value.trim();if(o===""){n.error({title:"Error",message:"Введите запрос для поиска!"});return}l.style.display="block";const i=Date.now();try{const r=await h(o);if(r.totalHits===0){n.error({title:"Error",message:"По вашему запросу ничего не найдено!"});return}u.innerHTML="",b(u,r,c)}catch(r){n.error({title:"Error",message:"Ошибка запроса: "+r})}finally{const r=Date.now()-i,e=Math.max(0,400-r);setTimeout(()=>{l.style.display="none"},e)}});
//# sourceMappingURL=index.js.map
