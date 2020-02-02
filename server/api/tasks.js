
/*
//import Task Model

const router = require('express').Router()
const auth = require('../auth')

const Task = require('../models/Task')

//GET tasks
//@access private
router.get('/', (req, res) => {
    Photo.find()
        .sort({ date: -1 })
        .then(photos => res.json(photos))
})

//POST task
//@access private
router.post('/', auth,  (req, res) => {
    const newPhoto = new Photo ({
        author : req.body.author
    })
    newPhoto.save()
        .then(newPhoto => res.json(newPhoto))
})

//Delete photo
//@access private
router.delete('/:id', auth, (req, res) => {
    Photo.findById(req.params.id)
        .then(photo => photo.remove().then(() => res.json({success : true})))
        .catch(err => res.status(404).json({success: false}))
})

module.exports = router
*/