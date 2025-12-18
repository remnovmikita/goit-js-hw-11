import{a as p,S as d,i as n}from"./assets/vendor-Cq7ZUixy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",g="53507836-a90b7328b368e53f321449aea";function y(s){return p.get(h,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}function L(s,o){const a=s.map(({webformatURL:e,largeImageURL:t,tags:i,likes:c,views:u,comments:m,downloads:f})=>`<li class ="gallarey-item">
                    <a class = "gallery-link" href="${t}">
                    <img
                        class = "gallery-image"    
                        src = "${e}"
                        alt ="${i}"
                        />
                    </a>
                     <ul class="info">
            <li>Likes<p>${c}</p></li>
            <li>Views<p>${u}</p></li>
            <li>Comments<p>${m}</p></li>
            <li>Downloads<p>${f}</p></li>
            </ul>
                    </li>`).join("");o.insertAdjacentHTML("afterbegin",a),new d(".gallery-link",{captionDelay:250,showCounter:!1,captionsData:"alt"}).refresh()}const b=document.querySelector(".form"),S=document.querySelector('[name="search-text"]'),l=document.querySelector(".loader");b.addEventListener("submit",s=>{s.preventDefault();const o=S.value.trim();if(l.classList.add("show"),o==="")l.classList.remove("show"),n.error({title:"Eror",message:"Sorry, there are no images matching your search query. Please try again!"});else{const a=document.querySelector(".gallery");a.innerHTML="",y(o).then(r=>{setTimeout(()=>{if(r.data.total===0){l.classList.remove("show"),n.error({title:"Eror",message:"Sorry, there are no images matching your search query. Please try again!"});return}console.log(r.data),L(r.data.hits,a),l.classList.remove("show")},2e3)}).catch(r=>console.log(r))}});
//# sourceMappingURL=index.js.map
