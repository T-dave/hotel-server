require('dotenv').config();
var path = require("path");
var express = require("express");
var app = express();
const mongoose = require('mongoose');
var connectDB = require('./process/dbConn');


var port = process.env.PORT || 3000;
connectDB();

app.use(express.urlencoded({encoded:false}));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'ml')));

app.use('/', require('./routes/portfolio.js'));
app.use('/hotels', require('./routes/hotels.js'));

mongoose.connection.once('open', ()=>{
	console.log('Connected to MongoDB');
	app.listen(port, ()=>{
	console.log(`App running on port ${port}`)
});
})
