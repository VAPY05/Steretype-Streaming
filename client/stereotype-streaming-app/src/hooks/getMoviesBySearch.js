import { useEffect, useState } from "react"


export const useGetMoviesBySearch = (search) => {
    const [movies, setMovies] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        fetch(`http://localhost:3030/movies/search/${search}`)
            .then(res=>res.json())
            .then(data=> {
                setMovies(data)
                setIsLoaded(true)
            })
    },[search])

    return [
        movies["movies"],
        isLoaded
    ];
}