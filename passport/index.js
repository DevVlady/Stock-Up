const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const User = require('../models/user.js')

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
	console.log('*** serializeUser called, user: ')
	console.log(user) // the whole raw user object!
	console.log('---------')
	done(null, { _id: user._id })
})

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
	console.log('DeserializeUser called')
	User.findOne(
		{ _id: id },
		'username',
		(err, user) => {
			console.log('*** Deserialize user, user:')
			console.log(user)
			console.log('--------------')
			done(null, user)
		}
	)
})

//Google oAuth Redirect Path
const redirectPath = process.env.NODE_ENV === "production" ? ('https://my-stock-up.herokuapp.com/auth/google/redirect') : ('http://localhost:3001/auth/google/redirect')

//Passport & OAuth for Google Sign-in
passport.use(
	new GoogleStrategy(
		{
		callbackURL: redirectPath,
		clientID: keys.google.clientID,
		clientSecret: keys.google.clientSecret
	}, (accessToken, refreshToken, profile, done)
	)
)

//  Use Strategies
passport.use(LocalStrategy)

module.exports = passport