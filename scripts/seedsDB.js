const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/stock-up-users"
);

const userSeed = [
    {
        email: 'mikeb@gmail.com',
        firstName: 'Mike',
        lastName: 'B',
        date: new Date(Date.now())
    },
    {
        email: 'vv@gmail.com',
        firstName: 'Vlad',
        lastName: 'D',
        date: new Date(Date.now())
    },
    {
        email: 'josh@gmail.com',
        firstName: 'Josh',
        lastName: 'B',
        date: new Date(Date.now())
    },
    {
        email: 'jk@gmail.com',
        firstName: 'Jason',
        lastName: 'B',
        date: new Date(Date.now())
    },
    {
        email: 'lk@gmail.com',
        firstName: 'Luke',
        lastName: 'B',
        date: new Date(Date.now())
    },
    {
        email: 'ha@gmail.com',
        firstName: 'Trump',
        lastName: 'D',
        date: new Date(Date.now())
    }
]