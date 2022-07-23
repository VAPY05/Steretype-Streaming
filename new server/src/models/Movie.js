const mongoose = require('mongoose')

const movieScheme = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title field is required!"],
        min: [2, 'Title must be between 2 and 25 symbols'],
        max: [25, 'Title must be between 2 and 25 symbols'],
    },
    description: {
        type: String,
        required: [true, "Description field is required!"],
        min: [10, 'Title must be between 10 and 120 symbols'],
        max: [120, 'Title must be between 10 and 120 symbols'],
    },
    url: {
        type: String,
        required: [true, "Video field is required!"],
        validate: {
            validator: function (param) {
                return param.startsWith("http" || "https");
            },
            message: "The video url should starts with http or https!"
        },
        min: [10, 'Video URL must be between 10 and 100 symbols'],
        max: [100, 'Video URL must be between 10 and 100 symbols'],
    },
    img: {
        type: String,
        required: [true, "Image field is required!"],
        validate: {
            validator: function (param) {
                return param.startsWith("http" || "https");
            },
            message: "The image url should starts with http or https!"
        },
        min: [10, 'Image URL must be between 10 and 100 symbols'],
        max: [100, 'Image URL must be between 10 and 100 symbols'],
    },
    ownerId: {
        type: mongoose.Types.ObjectId, ref: 'User'
    }
})

const Movie = mongoose.model('Movie',movieScheme)

module.exports = Movie