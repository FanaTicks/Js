"use strict"; 

let numberOfFilms;

function start(){
   numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');
   while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
      numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');
   }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberFilms(){
   forst: for(let i =0; i < 2; i++){
      let name1 = prompt('Один із останніх переглянутих фільмів?',''),
      grade1 = prompt('На скільки ви його оціните?','');
   if(name1 == null || grade1 == null || name1.length == 0 || grade1.length == 0 || name1.length >= 50 || grade1.length >= 50){i--; continue forst;}
      personalMovieDB.movies[name1] = grade1;
   }
}

rememberFilms();

function detectPerconalLevel(){
   if(personalMovieDB.count <10){alert('Просмотрено довольно мало фильмов');}
   else if(personalMovieDB.count >=10 && personalMovieDB.count <30){alert('Вы классический зритель');}
   else if (personalMovieDB.count >30){alert('Вы киноман');}
   else{alert('Произошла ошибка');}  
}

detectPerconalLevel();

function showMyDB(){
   if(personalMovieDB.privat == false){
      console.log(personalMovieDB);
   }
}

function writeYourGenres(){
   personalMovieDB.genres[0] = prompt('Ваш любимый жанр под номером 1', '');
   personalMovieDB.genres[1] = prompt('Ваш любимый жанр под номером 2', '');
   personalMovieDB.genres[2] = prompt('Ваш любимый жанр под номером 3', '');
}
writeYourGenres();
showMyDB();





