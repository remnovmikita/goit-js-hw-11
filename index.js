import{S as p,i as d,a as h}from"./assets/vendor-0KvIZ-q-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=()=>n.innerHTML="",y=()=>c.classList.add("show"),L=()=>c.classList.remove("show");function b(o){const r=o.map(({webformatURL:a,largeImageURL:e,tags:t,likes:i,views:u,comments:f,downloads:m})=>`<li class ="gallarey-item">
                    <a class = "gallery-link" href="${e}">
                    <img
                        class = "gallery-image"    
                        src = "${a}"
                        alt ="${t}"
                        />
                    </a>
                     <ul class="info">
            <li>Likes<p>${i}</p></li>
            <li>Views<p>${u}</p></li>
            <li>Comments<p>${f}</p></li>
            <li>Downloads<p>${m}</p></li>
            </ul>
                    </li>`).join("");n.insertAdjacentHTML("afterbegin",r),new p(".gallery-link",{captionDelay:250,showCounter:!1,captionsData:"alt"}).refresh()}const l=o=>{d.error({title:"Error",position:"topRight",message:o})},S="https://pixabay.com/api/",w="53507836-a90b7328b368e53f321449aea",q=o=>h.get(S,{params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data),$=document.querySelector(".form"),v=document.querySelector('[name="search-text"]');$.addEventListener("submit",o=>{o.preventDefault();const r=v.value.trim();y(),g(),r===""?l("Невалидный ввод"):setTimeout(()=>{L(),q(r).then(s=>{s.hits.length===0?l("Sorry, there are no images matching your search query. Please try again!"):b(s.hits)}).catch(s=>{console.log(s)})},1e3)});
//# sourceMappingURL=index.js.map
