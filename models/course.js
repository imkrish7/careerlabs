const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const courseShema = new Schema({
	course_Id: String,
	course_name: String,
	provider: String,
	universities_or_institution: String,
	parent_Subject: String,
	child_Subject: String,
	url: String,
	length: Number,
	video_url: String
},{ timestamps: true});

const Course = mongoose.model('Course', courseShema);

module.exports = Course;