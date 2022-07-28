const { getAllMovies, createMovie, getMovieById, editMovie, deleteMovie} = require('../services/movie');
const errorMapper = require('../util/errorMapper');

const {isOwner, isAuth} = require('../middlewares/guards')
const preloads = require('../middlewares/preloads')

const router = require('express').Router();

router.get('/movies',async(req,res)=>{
    try{
        const movies = await getAllMovies();
        res.status(200).json({movies: movies})
    }catch(error){
        res.json({Error: "There is a problem! Movies cannot be received."})
    }
})

router.get('/movies/new',async(req,res)=>{
    try{
        let movies = await getAllMovies();
        const newMovies = movies.reverse(); 
        res.status(200).json({movies: newMovies})
    }catch(error){
        res.json({Error: "There is a problem! Movies cannot be received."})
    }
})

router.post('/movies',isAuth(),async(req,res)=>{
    try{
        const ownerId = req.user._id;
        req.body.ownerId = ownerId
        const createdMovie = await createMovie(req.body);
        res.status(201).json({message: `Movie Created!`})
    }catch(error){
        const message = errorMapper(error);
        res.status(400).json({message});
    }
})

router.get('/movies/:id',preloads(),async(req,res)=>{
    /* try{
        id = req.params.id
        const movie = await getMovieById(id);
        res.status(200).json({movie})
    }catch(error){
        res.status(404).json({message: `Movie was not found!`});
    } */
        res.json(res.locals.item);
})

router.put('/movies/:id',preloads(),isOwner(),async(req,res)=>{
    try{
        await editMovie(req.body);
        res.status(200).send({message: 'Movie was edited!'})
    }catch(error){
        if(error._notFound) {
            res.status(404).json({message: `Item was not found!`});
        }else{
            res.status(400).json({message: `Request error!`});
        }
    }
})

router.delete('/movies/:id',isAuth(),isOwner(),async(req,res)=>{
    try{
        const result = await deleteMovie(req.body);
        res.status(200).send({result})
    }catch(error){
        res.status(404).json({message: `Item was not found!`});
    }
})

module.exports = router