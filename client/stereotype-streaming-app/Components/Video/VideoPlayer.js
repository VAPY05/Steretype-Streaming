import "./VideoPlayer.css"

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Loading } from "../Loading/Loading"


export const VideoPlayer = (props) => {

    const {id} = useParams()

    const [isLoaded, setIsLoaded] = useState(false);
    const [video, setVideo] = useState('');
    
    useEffect(()=>{
        fetch(`http://localhost:3030/movies/${id}`)
        .then(response => response.json())
            .then(res=>{
                setVideo(video => res.url)
                setIsLoaded(true)
            })
    },[])
    

    return (
        <>
        {isLoaded ?
        <div className="video-player-box">
        <video width="1280" height="720" autoPlay controls controlsList="nodownload">
            <source src={video} type="video/mp4"/>
        </video>
        </div>
        :
        <Loading/>
        }
        
        </>
    )
}