 
 photoSetings
 
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

export default function photoSetings(gallary,data,input){
    const li = data.hits
    .map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads,}) =>
        `<li class="gallarey-item">
        <a class = "gallery-link" href="${largeImageURL}">
        <img 
            class="gallery-image" 
            src="${webformatURL}" 
            alt="${tags}"
            />
            </a>
            <ul class="info">
            <li>Likes<p>${likes}</p></li>
            <li>Views<p>${views}</p></li>
            <li>Comments<p>${comments}</p></li>
            <li>Downloads<p>${downloads}</p></li>
            </ul>

        </li>`
    )
    .join("");


    gallary.innerHTML = ""; 
    input.value = "";
    gallary.insertAdjacentHTML("afterbegin", li);

    let all = new SimpleLightbox(".gallery-link",{
        captionDelay : 250,
        showCounter: false,
        captionsData: 'alt',
    });
}

 