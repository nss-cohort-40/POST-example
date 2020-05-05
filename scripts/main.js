console.log('POSTing for fun and profit');
import "./events.js"
import movieAPI from "./api.js"
import listMovies from "./movie.js"

// get the ball rolling on page load
movieAPI.getMovies()
.then( (movieData) => listMovies(movieData))
