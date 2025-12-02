 import axios from 'axios';
 export default async function fetchData(query) {
    const response = await axios.get('https://pixabay.com/api/',{
    params: {
    key: '53507836-a90b7328b368e53f321449aea',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    },
});
return response.data;
 }
 

