const router = require("express").Router();
const passport = require('passport');

// auth logout route
router.route("/logout")
.get((req, res) => {
    //handle with passport
    let redirectPath = (process.env.NODE_ENV === "production") ? "https://my-stock-up.herokuapp.com/" : "http://localhost:3000"
    req.logout();
    res.redirect(redirectPath)
})

// auth with google
router
    .route('./google')
    .get(passport.authenticate('google', {
        scope: ['profile']
    }
    ));


// callback route for google to redirect to xx
router.route("/google/redirect")
    .get(passport.authenticate("google"),
    (req, res) => {
        let redirectPath = (process.env.NODE_ENV === "production") ? "" : "http://localhost:3000"
        redirectPath = `${readirectPath}/search?userId=${req.user._id}`;
        res.redirect(redirectPath)
    })

    module.exports = router;