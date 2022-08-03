"use strict";


let  namberOfFilms = +prompt("сколко фильмов вы уже посмотрели?", "10");


const personalMovieDB ={
    count: namberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


let a = prompt("один из последних просмотренных фильмов?", ""),
    b = +prompt("на сколько оценете его?", ""),
    c = prompt("один из последних просмотренных фильмов?", ""),
    d = +prompt("на сколько оценете его?", "");
    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);