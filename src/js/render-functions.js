// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


export function photo(hits, gallarey){
    const li = hits
                    .map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>
                    `<li class ="gallarey-item">
                    <a class = "gallery-link" href="${largeImageURL}">
                    <img
                        class = "gallery-image"    
                        src = "${webformatURL}"
                        alt ="${tags}"
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
                gallarey.insertAdjacentHTML("afterbegin", li);

                let lightbox = new SimpleLightbox('.gallery-link',{
        captionDelay : 250,
        showCounter: false,
        captionsData: 'alt',
    });
        lightbox.refresh();
}
  