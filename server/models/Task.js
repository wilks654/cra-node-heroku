const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    author: {
        type: String,
        required : true
    },
    date: {
        type: Date,
        default: Date.now
    },
    text: {
        type: String,
        required : true
    }
})

module.exports = Photo = mongoose.model('task', TaskSchema)