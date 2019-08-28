const express = require('express');
const mongoose = require('mongoose')
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('dotenv').config()

//import routes
const userRoutes = require('./routes/user')

//PORT
// const port = process.env.PORT || 8000
const port = 4001;
app.listen(port,() => console.log("Server has started"));

//DB
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => console.log("DB Connected"))

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())


//ROUTES
app.use('/api', userRoutes);
