// const express = require("express");
// // import express from ('express')
// const fruits = require("./models/fruits.js");
// const vegetables = require("./models/veggies.js");

// //NOTE: it must start with ./ if it's just a file, not an NPM package

// const app = express();

// app.set('view engine', 'jsx');
// app.engine('jsx', require('jsx-view-engine').createEngine());

// //NOTE: it must start with ./ if it's just a file, not an NPM package

// //define middleware

// app.use((req,res,next) => {
//   console.log('i run for all routes');
//   next();
// });

// app.use(express.urlencoded({extended:false}));

// //define routes

// app.get('/', (req, res) => {
//   res.send("home page of fruits and veggies");
// });

// app.get("/fruits/", (req, res) => {
//   //res.send(fruits);
//   res.render('Index',{fruits:fruits});
// });

// app.get("/fruits/new", (req, res) => {
//   res.render('New');
// });

// //add show route
// app.get("/fruits/:indexOfFruitsArray", (req, res) => {
//   //res.send(fruits[req.params.indexOfFruitsArray]);
//   res.render('Show', {
//     // include a second param that must be an object (req.params.indexOfFruitsArray)
//     fruit: fruits[req.params.indexOfFruitsArray]
// });


// app.get("/veggies/", (req, res) => {
//   res.send(vegetables);
// });

// //add show route
// app.get("/veggies/:indexOfVegetableArray", (req, res) => {
//   res.send(vegetables[req.params.indexOfVegetableArray]);
// });

// app.listen(3000, () => {
//   console.log("listening");
// });

const express = require('express');
const jsxViewEngine = require('jsx-view-engine');
const dotenv = require('dotenv').config();
const mongoose= require('mongoose');


const fruits = require('./models/fruits.js');
const vegatables = require('./models/veggies.js');
const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.set('view engine', 'jsx');
app.engine('jsx', jsxViewEngine());
// Define middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({extended:false}));
// Define routes
app.get('/', (req, res) => {
    res.send("Home page of Fruits and Veggies");
});
app.get('/fruits/', (req, res) => {
    // res.send(fruits)
    res.render('Index', {fruits: fruits});
});
app.get('/fruits/new', (req, res) => {
    res.render('New');
});
app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    fruits.push(req.body);
    console.log(fruits);
    res.send('data received');
    res.redirect('/fruits'); // sends user back to fruits page, /fruits
});
// Create a SHOW route (show routes use a get request)
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray]);
    res.render('Show', {
        // include a second param that must be an object (req.params.indexOfFruitsArray)
        fruit: fruits[req.params.indexOfFruitsArray]
    });
});
app.get('/veggies/', (req, res) => {
    res.send(vegatables)
});
app.get('/veggies/:indexOfVegetablesArray', (req, res) => {
    res.send(vegatables[req.params.indexOfVegetablesArray]);
});
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
