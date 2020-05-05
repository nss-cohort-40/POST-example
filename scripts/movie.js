let movieList = document.querySelector("#movie-list")

function listMovies(movieArr) {
  // empty the list from any previous times we listed movieList, so we aren't duplicating what was there before
  movieList.innerHTML = ""

  // Now fill it up with fresh data
  // 'forEach' is a fancy shorthand for a for loop
  movieArr.forEach( movie => {
    movieList.appendChild(createMovieComponent(movie))
  })
}

function createMovieComponent(faveMovie) {
  let li = document.createElement("li")
  li.innerHTML = `${faveMovie.username}'s favorite movie is ${faveMovie.movie}`
  return li
}

export default listMovies
