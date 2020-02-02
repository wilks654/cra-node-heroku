const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')

//import Photo Model
const User = require('../models/User')

//Post user/register
//@access public
//@desc register new user
router.post('/register', (req, res) => {
    console.log('WE GET HERE')
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        return res.status(400).json({msg : "All fields required"})
    }

    //check user already exists via email
    User.findOne({email})
        //if exists respond 400 w/msg
        .then(user => {
            if (user) res.status(400).json({msg : "User already exists with that email"})
        })

        //create user from schema
        const newUser = User({
            name, 
            email, 
            password
        })

        //gen salt
        bcrypt.genSalt(10, (err, salt) => {
            //apply hash to password with salt
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                //set new user password to hash + add to db
                newUser.password = hash;
                newUser.save()
                    .then(user => {
                        //sign a token using user unique id/secret/expiration time as payload
                        jwt.sign(
                            {id : user.id},
                            config.get('jwtSecret'),
                            {expiresIn : 25000},
                            (err, token) => {                               
                                if (err) throw err;
                                //include token in response along with user json (- password)
                                res.json({
                                    token,
                                    user : {
                                        id : user.id, 
                                        name : user.name,
                                        email : user.email 
                                    }
                                })
                            })
                            
                        })
                    })
            })
        } )


//Post user/authenticate
//@access public
//@desc authenticate user        
router.post('/authenticate', (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({msg : "All fields required"})
    }

    //check user already exists via email
    User.findOne({email})
        //if exists respond 400 w/msg
        .then(user => {
            if (!user) res.status(400).json({msg : "Invalid email/password"})


            //Validate Password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({msg : 'Invalid email/password'})

                    jwt.sign(
                        {id : user.id},
                        config.get('jwtSecret'),
                        {expiresIn : 25000},
                        (err, token) => {                               
                            if (err) throw err;
                            //include token in response along with user json (- password)
                            res.json({
                                token,
                                user : {
                                    id : user.id, 
                                    name : user.name,
                                    email : user.email 
                                }
                            })
                        })

                })
        })

        

        
 } )


module.exports = router