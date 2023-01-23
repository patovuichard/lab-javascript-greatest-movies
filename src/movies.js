// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let peliArray = moviesArray.map( (elmento) => {
        return elmento.director;
    } )
    return peliArray;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let drama = moviesArray.filter ( (elemento, index) => {
        return (elemento.director === `Steven Spielberg` && elemento.genre.includes('Drama'))
    } )
    return drama.length;
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
     }
    let suma = moviesArray.reduce ( (acum, elem) => {
        if (elem.score !== undefined) {
            return acum + elem.score;
        } else {
            return acum;
        }
    }, 0 )
    return Math.round((suma / moviesArray.length) * 100) / 100;
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const drama = moviesArray.filter ( (elemento) => {
        return elemento.genre.includes('Drama');
    } )
    if (drama.length === 0) {
        return 0;
     }
    let suma = drama.reduce ( (acum, elem) => {
        if (elem.score !== undefined) {
            return acum + elem.score;
        } else {
            return acum;
        }
    }, 0 )
    return Math.round((suma / drama.length) * 100) / 100;
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let clone = structuredClone(moviesArray);
    clone.sort( (elem1, elem2) => {
        if (elem2.year > elem1.year) {
            return -1;
        } else if (elem2.year < elem1.year) {
            return 1;
        } else {
            if (elem2.title > elem1.title) {
                return -1
            } else if (elem2.title < elem1.title) {
                return 1;
            } else {
                return 0;
            }
        }
    } )
    return clone;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let clone = structuredClone(moviesArray);
    clone.sort( (elem2, elem1) => {
        if (elem2.title > elem1.title) {
            return 1;
        } else if (elem2.title < elem1.title) {
            return -1;
        } else {
            return 0;
        }
    })
    let mapeo = clone.map ( (elem) => {
        return elem.title;
    } )
    return mapeo.slice(0,20);
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
