import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import "./Details.css"
import { Loading } from '../Loading/Loading';
import { VideoPlayer } from '../Video/VideoPlayer';
import { Link } from "react-router-dom";

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
                        <img src={movieImg} width={550} height={800}/>
                    </div>
                    <div className="title-and-desc">
                        <h1 className="title">{movieTitle}</h1>
                        <textarea className="desc" value={movieDescription}/>
                        <div className="buttons">
                            <Link to={`/movies/${id}/watch`}><button className="play">Play</button></Link>
                            <button className="like">Like</button>
                            <button className="remove">Remove</button>
                        </div>
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