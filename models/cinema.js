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


module.exports = Cinema;
