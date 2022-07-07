"use strict";

let numberOfFilms=[]
numberOfFilms[0]= +prompt('Сколько фильмов вы уже посмотрели','');
let personalMovieDB ={
    'count': numberOfFilms[0],
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false
};
numberOfFilms[1] = prompt('Один из последних просмотренных фильмов?','');
numberOfFilms[2] = prompt('На сколько оцените его?','');
let movies= {
    'lastFilm': numberOfFilms[1],
    'marks': numberOfFilms[2]
};
console.log(personalMovieDB);
console.log(movies);