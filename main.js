const express = require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv').config()
//import routes
const userRoutes = require('./routes/user')

//PORT
const port = process.env.PORT || 8000
app.listen(port,() => console.log("Server has started"));

//DB
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => console.log("DB Connected"))

//ROUTES
app.use('/api', userRoutes);