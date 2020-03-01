const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/courses');
app.use(bodyParser.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/courses', { useNewUrlParser: true });

mongoose.connection.on('error', error => {
	console.log('error');
});


app.use('/api', userRoutes);

app.listen(5000, ()=>{
	console.log("------server is running------");
})

module.exports = app;