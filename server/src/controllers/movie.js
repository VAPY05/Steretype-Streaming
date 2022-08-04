const { getAllMovies, createMovie, getMovieById, editMovie, deleteMovie, like} = require('../services/movie');
const errorMapper = require('../util/errorMapper');

const {isOwner, isAuth} = require('../middlewares/guards')
const preloads = require('../middlewares/preloads')

const jtw = require('jsonwebtoken');

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

router.get('/movies/trends',async(req,res)=>{
    try{
        let movies = await getAllMovies();
        let newMovies = movies.sort((a,b)=>{
            return b.likedBy.length - a.likedBy.length
        })
        res.status(200).json({movies: newMovies})
    }catch(error){
        res.json({Error: "There is a problem! Movies cannot be received."})
    }
})

router.get('/movies/alphabetically',async(req,res)=>{
    try{
        let movies = await getAllMovies();
        let newMovies = movies.sort((a,b)=>{
            return a.title.localeCompare(b.title)
        })
        res.status(200).json({movies: newMovies})
    }catch(error){
        res.json({Error: "There is a problem! Movies cannot be received."})
    }
})

router.get('/movies/search/:search',async(req,res)=>{
    try{
        const search = req.params.search
        let movies = await getAllMovies();
        let newMovies = movies.filter((a)=>{
            return (a.title.toUpperCase()).startsWith(search) || (a.title.toLowerCase()).startsWith(search)
            
        }) 
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

router.delete('/movies/:id',async(req,res)=>{
    try{
        const accessToken = req.headers["x-authorization"]
        const payload = jtw.decode(accessToken)
        const userId = payload._id
        if(req.body["movieOwner"]){
            const result = await deleteMovie(req.body);
            res.status(200).send({result})
        }
    }catch(error){
        res.status(404).json({message: `Item was not found!`});
    }
})

router.post('/movies/:id/like',isAuth(),async(req,res)=>{
    try{
        const movieId = req.params.id
        const ownerId = req.body.movieOwner
        try{
            const [likeCount, status] = await like(movieId, ownerId)
            res.status(200).send({likeCount, status})
        }catch(err){
            res.status(400).send("You can't like your movies!")
        }
    }
    catch(err){
        console.error(err)
    }
})

module.exports = router