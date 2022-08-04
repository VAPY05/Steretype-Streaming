export function getAllMovies() {
    return fetch(`http://localhost:3030/movies`).then(res => res.json())
}

export function getMovieById(id) {
    return fetch(`http://localhost:3030/movies/${id}`).then(res => res.json())
}