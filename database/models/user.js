const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

const userSchema = new Schema(
    {
        //Username field added
        username: {
            type: String,
            unique: false,
            required: false
        },
        // email: {
        //     type: String,
        //     trim: true,
        //     required: 'Email field is required'
        // },
        firstName: {
            type: String,
            unique: false,
            required: false
        },
        // lastName: {
        //     type: String,
        //     trim: true,
        //     required: 'Last name field is required'
        // },
        password: {
            type: String,
            unique: false,
            required: false
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
);

// Define schema methods
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');

		this.password = this.hashPassword(this.password)
		next()
	}
})

const User = mongoose.model("User", userSchema);

module.exports = User;