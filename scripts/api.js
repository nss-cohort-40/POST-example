// Get the data from the db
function getMovies() {
  return fetch("http://localhost:8088/movies")
  .then( legoData => legoData.json())
}

function addNewMovie(creation) {
  return fetch("http://localhost:8088/movies", {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(creation)
  })
}

export default { getMovies, addNewMovie }
