import './MoviesAll.css';

import { useGetMovies } from "../../../hooks/getAllMovies"
import { MovieItem } from "../Movie.item"
import { Loading } from '../../Loading/Loading';

export const MoviesAll = (props) => {
        let [movies, isLoaded] = useGetMovies(props.type)
        let content = '';
        if(movies){
            content = movies.map((x)=>{
                return <MovieItem key={x._id} img={x.img} title={x.name} url={x._id} />
            })
        }
        
    return (
        <div className='movies'>
            {isLoaded
            ? content
            : <Loading/>
            }
        </div>
    )
}