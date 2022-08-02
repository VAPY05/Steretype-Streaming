import { useEffect, useState, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"

import "./Details.css"
import { Loading } from '../Loading/Loading';
import { VideoPlayer } from '../Video/VideoPlayer';
import { Link } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { getMovieById } from "../../services/movies";

export const Details = (props) => {
    const { id } = useParams()
    
    const navigate = useNavigate();

    const [isLoaded, setIsLoaded] = useState(false)
    const [movieTitle, setMovieTitle] = useState('');
    const [movieDescription, setMovieDescription] = useState('');
    const [movieUrl, setMovieUrl] = useState('');
    const [movieImg, setMovieImg] = useState('');
    const [movieOwner, setMovieOwner] = useState('');

    const userContext = useContext(authContext);
	const user = userContext.user;

    const handleLike = () => {
        if(movieOwner != user._id || user._id != undefined) {
            return <button className="like">Like</button>
        }
    }

    useEffect(() => {
            getMovieById(id)
            .then(res=>{
                setMovieTitle(res.title)
                setMovieDescription(res.description)
                setMovieUrl(res.url)
                setMovieImg(res.img)
                setMovieOwner(res.ownerId)
                setIsLoaded(true)
            })
    }, [])

    function deleteHandler(id) {
        fetch(`http://localhost:3030/movies/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "Application/JSON",
                "X-Authorization": user.accessToken,
            },
            body: JSON.stringify({_id: id, movieOwner})
        })
        .then(()=>{
            navigate('/')
        })
    }

return (
    <div className="movie-panel">
        {isLoaded ?
            <>
                <div className="movie-panel">
                    <div>
                        <img src={movieImg} width={550} height={800} />
                    </div>
                    <div className="title-and-desc">
                        <h1 className="title">{movieTitle}</h1>
                        <textarea className="desc" value={movieDescription} readOnly />
                        <div className="buttons">
                            <Link to={`/movies/${id}/watch`}><button className="play">Play</button></Link>
                            {handleLike}
                            { movieOwner == user._id
                            ? <><Link to={`/movies/${id}/edit`}><button className="edit">Edit</button></Link>
                            <button className="remove" onClick={() => deleteHandler(id)}>Remove</button></> 
                            : null }
                        </div>
                    </div>

                </div>
            </>
            :
            <>
                <Loading />
            </>
        }

    </div>
)
}