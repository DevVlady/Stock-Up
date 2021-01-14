const express = require("express");
const mongoose = require("mongoose");
//Required for Passport Login
const bodyParser = require('body-parser');
const session = require('express-session')
const passport = require('./passport');
const user = require('./routes/apiRoutes');
const morgan = require('morgan');
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./database')

const PORT = process.env.PORT || 3001;
const app = express();
// const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Middleware
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)

app.use(bodyParser.json())

// Sessions
app.use(
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

// Routes
app.use('/user', user)

// Use apiRoutes
// app.use(routes);


// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/stock-up-users",
//   { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
// );

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
