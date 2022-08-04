const {getMovieById} = require('../services/movie')

module.exports  = () => async(req,res,next) => {
    const id = req.params.id;
    const item = await getMovieById(id);
    if(item){
        res.locals.item = item;
        next();
    }else{
        res.status(404).json({message: `Item ${id} not found!`})
    }
    
}