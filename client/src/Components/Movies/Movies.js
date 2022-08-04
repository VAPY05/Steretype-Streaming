import './Movies.css';

import { useState, useEffect } from 'react';

import { MovieItem } from './Movie.item';
import {SliderWithMovies} from "../SliderWithMovies/SliderWithMovies"
import { Loading } from '../Loading/Loading';

import { getAllMovies } from '../../services/movies';



export const MovieList = () => {

    const [movie, setMovie] = useState([]);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
            getAllMovies()
            .then(data=>{
              setMovie(data["movies"])
              setIsActive(true)
            })
            
    }, []);

    let movies = movie.map((x) => <MovieItem key={x._id} img={x.img} title={x.name} url={x._id}/>)
    let reversedMovies = movies.slice(0).reverse()

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return (
        <>
        {!isActive ? <Loading/> : 
        <>
        <SliderWithMovies title={"New Releases"} movies={reversedMovies} responsive={responsive}/>
        <SliderWithMovies title={"Movies"} movies={movies} responsive={responsive}/>
        </>
        }
        </>
    )
}