// создана переменная с массивом данных о режиссерах
const directors = [
    {
        img: './assets/img/Spilberg.jpeg',
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
    },
    {
        img: './assets/img/christopher-nolan.jpg',
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
    },
    {
        img: './assets/img/McDonagh.jpg',
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссёр, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
        img: './assets/img/balabanov.jpg',
        name: 'Алексей Балабанов',
        career: 'Режиссёр, Сценарист, Актёр, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
    },
    {
        img: './assets/img/Farrelly.jpeg',
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зелёная книга'
    },
    {
        img: './assets/img/Bykov.jpeg',
        name: 'Юрий Быков',
        career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
    },
    {
        img: './assets/img/Jean-Marc Vallee.jpg',
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
    },
]
// переменная для создания блока куда будет добавлена информация о режиссерах 
const directorPhoto = document.querySelector(".directors-list"); 
const directorInfo = document.querySelector(".directors-list"); 

// функция для создания элементов с информацией о каждом режиссере и вызова их из массива
directors.forEach((element, index, array) => {
   // let lineDivider = document.createElement("hr");
   // directorPhoto.append(lineDivider);

    let containerImg = document.createElement("div");
    containerImg.className = "directorPhoto";
    directorPhoto.append(containerImg);

    let directorImg = document.createElement("img");
    directorImg.className = "directorImg";
    directorImg.src = element.img;
    directorImg.alt = "Фото режиссера $(index)";
    console.log(directorImg);

    let containerInfo = document.createElement("div");
    containerInfo.className = "directorInfo";
    directorInfo.append(containerInfo);

    let directorName = document.createElement("p");
    directorName.className = "directorName";
    directorName.textContent = element.name;
    console.log(directorName);


    let directorCareer = document.createElement("p");
    directorCareer.className = "directorCareer";
    directorCareer.textContent = element.career;
    console.log(directorCareer);

    let directorFilms = document.createElement("a");
    directorFilms.className = "directorFilms";
    directorFilms.href = element.films;
    directorFilms.textContent = "Фильмография";
    console.log(directorFilms);

    containerImg.append(directorImg);
    containerInfo.append(directorName);
    containerInfo.append(directorCareer);
    containerInfo.append(directorFilms);
    
});
const containerTopFilms = document.querySelector("main"); 
//создан массив для лучших фильмов
const topFilmsList = directors.map(function(element) {
    return [" " + element.top_rated_film];

});
let topFilms = document.createElement("p");
topFilms.className = "topFilms";
topFilms.textContent = topFilmsList;
containerTopFilms.append(topFilms);



