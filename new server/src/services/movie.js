const Movie = require('../models/Movie')

exports.getAllMovies = async() =>{
    const movies = await Movie.find();
    return movies;
}

exports.createMovie = async(data) =>{
    const {title, description, img, url, ownerId} = data;
    const movie = await new Movie({title, description, img,  url, ownerId}).save();
    return movie;
}

exports.deleteMovie = async(data) =>{
    return await Movie.findByIdAndDelete(data._id);
}

exports.editMovie = async(data) =>{
    const movie = await Movie.findById(data._id);
    if(movie){
        movie.title = data.title;
        movie.description = data.description;
        movie.img = data.img;
        movie.url = data.url;
        await movie.save();
        return movie;
    }else{
        const error = new Error('Not found!');
        error._notFound = true;
        throw error;
    }
    
}

exports.getMovieById = async(id) =>{
    const movie = await Movie.findById(id);
    return movie;
}
