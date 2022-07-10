export const MovieItem = (props) => {
    return (
        <div className="movie-item">
            <img className='movie-list-item-img' src={props.img} alt="" onClick={() => {props.click(props.title)}}/>
        </div>
    )
}