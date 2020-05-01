const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    summary: {
        type: String
    }
});

const Movie = mongoose.model('movie', MovieSchema);

module.exports = Movie;