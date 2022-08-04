export function getAllMovies() {
    return fetch(`http://localhost:3030/movies`).then(res => res.json())
}

export function getMovieById(id) {
    return fetch(`http://localhost:3030/movies/${id}`).then(res => res.json())
}

export function createMovie(accessToken, body) {
    return fetch('http://localhost:3030/movies',{
        method: "POST",
        headers: {
            "Content-Type": "Application/JSON",
            "X-Authorization": accessToken
        },
        body: JSON.stringify(body)
    })
}

export function editMovie(id, accessToken, body) {
    return fetch(`http://localhost:3030/movies/${id}`, {
			method: "PUT",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "Application/JSON",
				"X-Authorization": accessToken
			}
		})
}