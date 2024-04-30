const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const port = process.env.PORT;
const u = process.env.MONGODB_URI;

mongoose
    .connect(u)
    .then(() => {
        console.log("DB Successfully Connected");
        app.listen(port, () => {
            console.log(`Server is running on ${port}`);
        });
    })
    .catch((error) => console.error(error));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const userModel = new mongoose.model('users', userSchema);

module.exports = userModel;
