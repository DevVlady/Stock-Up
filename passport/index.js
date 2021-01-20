const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const User = require('../models/user.js')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
	console.log('*** serializeUser called, user: ')
	console.log(user) // the whole raw user object!
	console.log('---------')
	done(null,  user.id )
})

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
	console.log('DeserializeUser called')
	User.findById(id).then((user) => {
		done(null, user);
	})
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
	}, (accessToken, refreshToken, profile, done) => {
		console.log(profile)

		User.findOne({googleid: profile.id}).then((currentUser) => {
			if(currentUser){
				console.log(" The current user is: ", currentUser)
				done(null, currentUser)
			} else {
				new User({
					displayName: profile.displayName,
					googleid: profile.id
				})
			}
		})
	}
	)
)

//  Use Strategies
passport.use(LocalStrategy)

module.exports = passport