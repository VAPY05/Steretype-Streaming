const routes = require('express').Router();

const {getAllMovies,createMovie, getMovieById, deleteMovie, editMovie} = require('../services/movies')

routes.get('/movies',async(req,res)=>{
    const movies = await getAllMovies();
    if(movies){
        res.status(200).json(movies);
    }
    else{
        res.status(401).json({message:"error"});
    }
})

routes.get('/movies/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        const movie = await getMovieById(id);
        res.status(200).json(movie);
    }catch(err){
        res.status(400).json({message:"Movie not found"});
    }
})

routes.post('/movies',async(req,res)=>{
    try{
        const createdMovie = await createMovie(req.body)
        res.status(201).json({createdMovie});
    }catch(err){
        res.status(401).json({message:"Cannot create movies"});
    }
})

routes.delete('/movies/:id',async(req,res)=>{
    const id = req.params.id;
    const isDeleted = await deleteMovie(id);
    if(isDeleted){
        res.status(200).json("The movie has been deleted");
    }
    else{
        res.status(401).json({message:"Not Authorized"});
    }
})

routes.patch('/movies/:id',async(req,res)=>{
    try{
        const movie = await editMovie(req.body)
        res.status(201).json({message:"Successful", movie: movie});
    }catch(err){
        res.status(401).json({message:"Not Authorized"});
    }
})

module.exports = routes