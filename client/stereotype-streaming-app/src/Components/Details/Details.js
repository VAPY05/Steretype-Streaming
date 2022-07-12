import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import "./Details.css"
import { Loading } from '../Loading/Loading';
import { VideoPlayer } from '../Video/VideoPlayer';

export const Details = (props) => {

    const {id} = useParams()
    
    const [isLoaded, setIsLoaded] = useState(false)
    const [movieTitle, setMovieTitle] = useState('');
    const [movieDescription, setMovieDescription] = useState('');
    const [movieUrl, setMovieUrl] = useState('');
    const [movieImg, setMovieImg] = useState('');


    useEffect(()=>{
        fetch(`http://localhost:3030/movies/${id}`)
        .then(response => response.json())
        .then(res=>{
            console.log(res)
            setMovieTitle(res.title)
            setMovieDescription(res.description)
            setMovieUrl(res.url)
            setMovieImg(res.img)
            setIsLoaded(true)
        })
    },[])

    return (
        
        <div className="movie-panel">
            {isLoaded ? 
            <>
                <div className="movie-panel">
                    <div>
                        <h1>{movieTitle}</h1>
                    </div>
                    <div>
                        <img src={movieImg} width={550} height={800}/>
                    </div>
                    <div>
                        <h1>{movieDescription}</h1>
                    </div>
                    <div>
                        <VideoPlayer url={movieUrl}/>
                    </div>
                    
                </div>
            </>
            :
            <>
                <Loading/>
            </>
            }
            
        </div>
    )
}