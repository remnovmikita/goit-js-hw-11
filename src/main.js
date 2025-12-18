const form = document.querySelector(".form");
const input = document.querySelector('[name="search-text"]');
const span = document.querySelector('.loader');

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Import first function
import { apiFuncs } from "./js/pixabay-api";
import { photo } from "./js/render-functions";

form.addEventListener("submit", even =>{
    even.preventDefault();
   const searcher = input.value.trim();
   span.classList.add('show');
    if(searcher === ""){
        span.classList.remove("show");
        iziToast.error({
            title:'Eror',
            message: 'Sorry, there are no images matching your search query. Please try again!'
        });
    }
    else{
        const gallarey = document.querySelector(".gallery");
            gallarey.innerHTML = "";
       apiFuncs(searcher)
        .then(resp => {
            setTimeout (() =>{
            if (resp.data.total === 0){
                span.classList.remove("show");
             iziToast.error({
            title:'Eror',
            message: 'Sorry, there are no images matching your search query. Please try again!'
            });
            return;   
            }
                console.log(resp.data);
                photo(resp.data.hits, gallarey);
                span.classList.remove("show");
            }, 2000);
           
              
        })
        .catch(error => console.log(error) )
    }
})