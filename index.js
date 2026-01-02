import{S as d,i as h,a as y}from"./assets/vendor-0KvIZ-q-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=()=>c.innerHTML="",L=()=>u.classList.add("show"),l=()=>u.classList.remove("show");function b(o){const r=o.map(({webformatURL:a,largeImageURL:e,tags:t,likes:i,views:m,comments:f,downloads:p})=>`<li class ="gallarey-item">
                    <a class = "gallery-link" href="${e}">
                    <img
                        class = "gallery-image"    
                        src = "${a}"
                        alt ="${t}"
                        />
                    </a>
                     <ul class="info">
            <li>Likes<p>${i}</p></li>
            <li>Views<p>${m}</p></li>
            <li>Comments<p>${f}</p></li>
            <li>Downloads<p>${p}</p></li>
            </ul>
                    </li>`).join("");c.insertAdjacentHTML("afterbegin",r),new d(".gallery-link",{captionDelay:250,showCounter:!1,captionsData:"alt"}).refresh()}const n=o=>{h.error({title:"Error",position:"topRight",message:o})},S="https://pixabay.com/api/",q="53507836-a90b7328b368e53f321449aea",w=o=>y.get(S,{params:{key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data),P=document.querySelector(".form"),$=document.querySelector('[name="search-text"]');P.addEventListener("submit",o=>{o.preventDefault();const r=$.value.trim();if(g(),r===""){n("Невалидный ввод");return}else L(),w(r).then(s=>{s.hits.length===0?n("Sorry, there are no images matching your search query. Please try again!"):b(s.hits),l()}).catch(s=>{l(),n("Sorry, there are no images matching your search query. Please try again!")})});
//# sourceMappingURL=index.js.map
