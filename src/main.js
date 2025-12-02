import fetchData from './js/pixabay-api';
import photoSetings from './js/render-functions';
/////////////////////////////////////////////////////
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
/////////////////////////////////////////////////////
const load =document.querySelector('.loader');
const form = document.querySelector('.form');
const input = document.querySelector('[name=search-text]');
const btn = document.querySelector('.form button');
const gallary = document.querySelector('.gallery');
load.style.display = 'none';

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const nameForPhoto = input.value.trim();
  if (nameForPhoto === "") {
    iziToast.error({
      title: "Error",
      message: "Введите запрос для поиска!",
    });
    return;
  }

  load.style.display = 'block'; // показать спиннер
  const startTime = Date.now(); // запоминаем время старта

  try {
    const data = await fetchData(nameForPhoto);
    if (data.totalHits === 0) {
      iziToast.error({
        title: "Error",
        message: "По вашему запросу ничего не найдено!",
      });
      return;
    }
    gallary.innerHTML = "";
    photoSetings(gallary, data, input);
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: "Ошибка запроса: " + error,
    });
  } finally {
    const elapsed = Date.now() - startTime; // сколько прошло
    const delay = Math.max(0, 500 - elapsed); // если прошло меньше 0.5 сек — ждём остаток
    setTimeout(() => {
      load.style.display = 'none';
    }, delay);
  }
});

