const Movie = require('../models/Movie')

exports.getAllMovies = async() =>{
    const movies = await Movie.find();
    return movies;
}

exports.getMovieById = async(id) =>{
    const movie = await Movie.findById(id);
    return movie;
}

exports.createMovie = async(data) =>{
    const {title, description, img, url} = data;
    const movie = await new Movie({title, description, img,  url}).save();
    return movie;
}

exports.deleteMovie = async(data) =>{
    const isDeleted = await Movie.findById(data).deleteOne();
    return isDeleted
}

exports.editMovie = async(data) =>{
    const movie = await Movie.findById(data._id);
    movie.title = data.title;
    movie.description = data.description;
    movie.url = data.url;
    const isSaved = await movie.save();
    return isSaved;
}