const router = require("express").Router();
const path = require('path');
// const apiRoutes = require("./api");
const express = require('express');
const User = require('../models/user');
const passport = require('../passport')

// API Routes
// router.use("/api", apiRoutes);


// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


module.exports = router;