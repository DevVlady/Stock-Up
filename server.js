const express = require("express");
const mongoose = require("mongoose");
//Required for Passport Login
const bodyParser = require('body-parser');
const session = require('express-session')
const passport = require('./passport');
const apiRoutes = require('./routes/apiRoutes');
const morgan = require('morgan');
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./database')
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();
// const routes = require("./routes");

// const publicPath = path.join(__dirname, './client/public/');
app.use(express.static('public'));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	})
}

//Middleware
app.use(morgan('dev'))


// Sessions
app.use(
	process.env.MONGODB_URI || "mongodb://localhost/stock-up-users",
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	},
	{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
	)
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

app.use(apiRoutes)

app.listen(PORT, function () {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
