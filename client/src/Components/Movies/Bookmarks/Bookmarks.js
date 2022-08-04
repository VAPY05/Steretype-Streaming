import './Bookmarks.css';

import { useGetMovies } from "../../../hooks/getAllMovies"
import { MovieItem } from "../Movie.item"
import { Loading } from '../../Loading/Loading';
import { useBookmarks } from '../../../hooks/getBookmarks';

import { useContext } from 'react';
import { authContext } from '../../../contexts/authContext';



export const Bookmarks = () => {
        const userContext = useContext(authContext);
        const user = userContext.user
        let [movies, isLoaded] = useBookmarks(user.accessToken)
        let content = '';
        if(movies.length > 0){
            content = movies.map((x)=>{
                return <MovieItem key={x._id} img={x.img} title={x.name} url={x._id} />
            })
        }else{
                return <h1 className='center'>No movies liked!</h1>
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