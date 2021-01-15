const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/stock-up-users"
);

const userSeed = [
    {
        email: 'mikeb@gmail.com',
        username: 'mik2',
        firstName: 'Mike',
        lastName: 'B',
        password: '123',
        date: new Date(Date.now())
    },
    {
        email: 'vv@gmail.com',
        username: 'mik2',
        firstName: 'Vlad',
        lastName: 'D',
        password: '123',
        date: new Date(Date.now())
    },
    {
        email: 'josh@gmail.com',
        username: 'mik2',
        firstName: 'Josh',
        lastName: 'B',
        password: '123',
        date: new Date(Date.now())
    },
    {
        email: 'jk@gmail.com',
        username: 'mik2',
        firstName: 'Jason',
        lastName: 'B',
        password: '123',
        date: new Date(Date.now())
    },
    {
        email: 'lk@gmail.com',
        username: 'mik2',
        firstName: 'Luke',
        lastName: 'B',
        password: '123',
        date: new Date(Date.now())
    },
    {
        email: 'ha@gmail.com',
        username: 'mik2',
        firstName: 'Trump',
        lastName: 'D',
        password: '123',
        date: new Date(Date.now())
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });