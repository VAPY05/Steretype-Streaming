import { useEffect, useState } from "react"


export const useGetMovies = (type) => {
    const [movies, setMovies] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        fetch(`http://localhost:3030/movies/${type}`)
            .then(res=>res.json())
            .then(data=> {
                setMovies(data)
                setIsLoaded(true)
            })
    },[type])

    return [
        movies["movies"],
        isLoaded
    ];
}