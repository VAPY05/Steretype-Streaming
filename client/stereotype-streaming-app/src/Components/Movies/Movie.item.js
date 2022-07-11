import { Link } from 'react-router-dom';


export const MovieItem = (props) => {
    return (
        <div className="movie-item">
            <Link to={`/movies/${props.url}`}><img className='movie-list-item-img' src={props.img} alt="" /></Link>
        </div>
    )
}