const express = require('express');
const app = express ();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const DATA_BASE = require('./Hidden.js')

const cors = require('cors');
// require('dotenv').config();

// console.log(process.env)

//Middlewears 
// app.use('/posts' , () => {
//     console.log("middle");
// });

app.use(cors());

app.use(bodyParser.json());

//connecect to db 
mongoose.connect(`${DATA_BASE}`, { useNewUrlParser: true }, ()=>
    console.log("DB Connected")
);

// import Routes 
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// routes
app.get ('/', (req,res) => {
    res.send('we are on home');
});

// listening to the server
app.listen(3000);

