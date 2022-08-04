import { useEffect, useState } from "react"

export const useBookmarks = (accessToken) => {
    const [movies, setMovies] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    
    useEffect(()=>{
        if(accessToken != undefined){
            console.log(accessToken)
        fetch(`http://localhost:3030/user/bookmarks`,{
            method: "GET",
            headers: {
                "Content-Type": "Application/JSON",
				"X-Authorization": accessToken
            }
        })
            .then(res=>res.json())
            .then(data=> {
                setMovies(data)
                setIsLoaded(true)
            })
        }
    },[])
    return [
        movies,
        isLoaded
    ];
}