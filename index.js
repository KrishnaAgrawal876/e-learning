const express = require('express');
const mongoose = require('mongoose');
const { registerUser, getUsers } = require('./model');
const { PORT, MONGODB_URI } = require('./config');

const app = express();

app.use(express.json());

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    })
    .catch((err) => console.error('MongoDB connection error:', err));

app.post('/api/register', registerUser);
app.get('/api/users', getUsers); // Middleware to retrieve all users


/*
For initialization project repository: npm init -i
Entry Point: index.js (At the time of project initialization.)
*/