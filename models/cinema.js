const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.allFilmTitles = function(){
  return this.films.map(film => film.title)
}

Cinema.prototype.findFilmByTitle = function(findFilm){
  const wholeFilm =  this.films.find(film => findFilm.title === film.title)
  return wholeFilm.title
}

Cinema.prototype.filterByGenre = function(genre){
  return this.films.filter(film => film.genre === genre)
}

Cinema.prototype.isThereAFilmFromThisYear = function(year){
  const yearsArray = this.films.map(film => film.year)
  return yearsArray.includes(year)
}

Cinema.prototype.isOverCertainLength = function(length){
  const longFilms = this.films.map(film => film.length >= length)
  if(longFilms.length > 0){
    return true
  }
  else {
    return false
  }
}

Cinema.prototype.totalLengthOfAllFilms = function(){
  const filmLengths = this.films.map(film => film.length)
  const results = filmLengths.reduce((totalLength, filmLength) => {
    return totalLength + filmLength;
  }, 0) 
  return results
}

Cinema.prototype.filmsByProperty = function(property, value){
  const allFilmsByProperty = this.films.map(film => film[property])
  return allFilmsByProperty.filter(film => film === value)
}


module.exports = Cinema;
