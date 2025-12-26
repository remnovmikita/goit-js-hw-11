import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = '53507836-a90b7328b368e53f321449aea';

export const getImagesByQuery = (qwery) => {
    return axios.get(BASE_URL,{ 
    params:{
       key: API_KEY,
       q: qwery,
       image_type: "photo",
       orientation: "horizontal",
       safesearch: true,
    }, 
    })
        .then((response) => response.data);
}