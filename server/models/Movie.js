const mongoose = require('mongoose')

const movieScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    }
})

const Movie = mongoose.model('Movie',movieScheme)

module.exports = Movie