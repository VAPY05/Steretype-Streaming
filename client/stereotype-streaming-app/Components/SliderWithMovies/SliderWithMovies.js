import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';

export const SliderWithMovies = (props) => {
    return (
        <>
        <h1 className="movie-list-title">{props.title}</h1>
        <Carousel responsive={props.responsive} swipeable={false} draggable={false} autoPlay={true} autoPlaySpeed={2000} infinite={true} transitionDuration={500}>
            {props.movies}
        </Carousel>
        </>
    )
}