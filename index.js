const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/courses');
app.use(bodyParser.json());
app.use(cors());

const isDev = process.env.NODE_ENV ? process.env.NODE_ENV : 'production';
mongoose.connect(config.mongo_uri[isDev], { useNewUrlParser: true });

mongoose.connection.on('error', error => {
	console.log('error');
});


app.use('/api', userRoutes);

if (isDev == 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));
	app.get('*', function(req, res) {
		res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
	});
}

app.listen(5000, ()=>{
	console.log("------server is running------");
})

module.exports = app;