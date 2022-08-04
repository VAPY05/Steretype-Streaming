import './MovieSearch.css';

import { useGetMoviesBySearch } from "../../../hooks/getMoviesBySearch"
import { MovieItem } from "../Movie.item"
import { Loading } from '../../Loading/Loading';
import { useParams } from 'react-router-dom';



export const MovieSearch = () => {
        const {search} = useParams()
        let [movies, isLoaded] = useGetMoviesBySearch(search)
        let content = '';
        
        if(movies){
            if(movies.length >0){
            content = movies.map((x)=>{
                return <MovieItem key={x._id} img={x.img} title={x.name} url={x._id} />
            })
            }else{
                return <h1 className='center'>There are no movies starting with this search parameter.</h1>
            }
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