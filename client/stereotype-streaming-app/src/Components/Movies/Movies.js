import './Movies.css';

import { MovieItem } from './Movie.item';
import { useState, useEffect} from 'react';

export const MovieList = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/movies')
        .then(res=>res.json())
        .then(result => {
            setMovie(movie => result)
        })
      },[]);

      function clickHandler(name) {
        console.log(name)
      }

      const movies = movie.map((x)=><MovieItem key={x._id}img={x.img} title={x.name} click={clickHandler}/>)

    return (
        <div className='movie-list'>
        <div className="movie-list-container">
            <h1 className="movie-list-title">New Releases</h1>
            <div className="movie-list-wrapper">
                {movies}
            </div>
        </div>
        </div>
        
    )
}