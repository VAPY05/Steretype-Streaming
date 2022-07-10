import './Movies copy.css';

import { MovieItem } from './Movie.item';
import { useState, useEffect } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const MovieList = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/movies')
            .then(res => res.json())
            .then(result => {
                setMovie(movie => result)
            })
    }, []);

    let movies = movie.map((x) => <MovieItem key={x._id} img={x.img} title={x.name}/>)

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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
        <h1 className="movie-list-title">New Releases</h1>
        <Carousel responsive={responsive} swipeable={false} draggable={false}>
            {movies}
        </Carousel>
        </>
        
        
    )
}