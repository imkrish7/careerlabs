const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const courseShema = new Schema({
	"Course Id": String,
	"Course Name": String,
	"Provider": String,
	"Universities/Institution": String,
	"Parent Subject": String,
	"Child Subject": String,
	"Url": String,
	"Length": Number,
	"Video(url)": String
},{ timestamps: true});

const Course = mongoose.model('Course', courseShema);

module.exports = Course;