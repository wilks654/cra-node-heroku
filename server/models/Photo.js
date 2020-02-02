const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PhotoSchema = new Schema({
    author: {
        type: String,
        required : true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Photo = mongoose.model('photo', PhotoSchema)