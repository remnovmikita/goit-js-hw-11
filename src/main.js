
const form = document.querySelector(".form");
const input = document.querySelector('[name="search-text"]');


// Import first function
import { errorMessage } from "./js/render-functions";
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery } from "./js/render-functions";
import { showLoader } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";
form.addEventListener("submit", (event) =>{
  event.preventDefault();
  const search = input.value.trim();
  showLoader();
  clearGallery();
  if(search === ""){
    errorMessage("Невалидный ввод")
  }else{
    setTimeout(() =>{
          hideLoader();
          getImagesByQuery(search)
      .then((data) => {
      if(data.hits.length === 0){
      errorMessage(
        "Sorry, there are no images matching your search query. Please try again!");
      }else{
        createGallery(data.hits );
      }
      })
      .catch((error) =>{
        console.log(error);
      })
        }, 1000);
   
  }
})