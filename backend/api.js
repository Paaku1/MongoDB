const client = require('./connection.js');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const app = express();

const port = process.env.PORT || 3001;
const u = process.env.MONGODB_URI;

mongoose
    .connect(u)
    .then(() => {
        console.log("DB Successfully Connected");
    })
    .catch((error) => console.error(error));
    
    app.use(express.json());

    //get users 
    app.get('/users', async (req,res)=> {
        res.send(await client.find());
        console.log('found');
    });
    
    //insert users
    app.post('/users', async (req, res) => {
        try {
            const newUser = new client({
                name: req.body.name,
                age: req.body.age
            }); 
            await newUser.save(); 
            res.status(201).send(newUser);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });
    
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
});