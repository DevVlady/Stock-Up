const router = require("express").Router();
const path = require('path');
// const { Redirect } = require("react-router");
// const apiRoutes = require("./api");
// const express = require('express');
const User = require('../database/models/user');
const passport = require('../passport');
const { redirect } = require("../passport/localStrategy");

// Endpoint: /user
//Post route to build new user at Signup
router.post('/signup', (req, res) => {
    console.log('user signup');

    const { username, password, firstName, lastName, email } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, this username has already been used: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName,
                email: email
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

//Post - Successfully Login User
router.post(
    '/login',
    passport.authenticate('local'),
    function (req, res) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        if(!req.user) {
            res.status(400).json({});
        } else {
            res.json(req.user);
        }
    }
)

//Grab Exisiting Users
router.get('/', (req, res) => {
    console.log('GET/')
    console.log(req.user)
    if (req.user) {
        console.log('**Redirect to Dashboard**')
        res.redirect('/dashboard')
    } else {
        console.log('**GET**Redirect to Signup')
        res.redirect('/signup')
    }
})

//Logout User
router.get('/logout', (req, res) => {
    console.log('**Signing Out**')
    if (req.user) {
        res.redirect('/login')
        req.logout()
        res.json({ msg: 'user signout'})
    } else {
        //Change back to res.json
        res.json({ msg: 'user signout'})
    }
})


module.exports = router;