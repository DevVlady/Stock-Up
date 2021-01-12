const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: {
            type: String,
            trim: true,
            required: 'Email field is required'
        },
        firstName: {
            type: String,
            trim: true,
            required: 'First name field is required'
        },
        lastName: {
            type: String,
            trim: true,
            required: 'Last name field is required'
        },
        date: {
            type: Date,
            default: Date.now
        }
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now }
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;