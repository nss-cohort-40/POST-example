import movieApi from "./api.js"
import listMovies from "./movie.js"

document.querySelector("#form-btn").addEventListener("click", () => {
  let name = document.querySelector("#full_name").value
  let movie = document.querySelector("#fave_movie").value

  // example of calling a factory function
  let newEntry = buildMovieEntry(name, movie)
  movieApi.addNewMovie(newEntry)
  .then( data => {
    return data.json()
  })
  .then( dataJS => {
    return movieApi.getMovies()
  })
  .then( movieData => listMovies(movieData))
})

// This is a factory function, because it returns an object
function buildMovieEntry(name, movie) {
  return ({
    username: name,
    movie: movie
  })
}
