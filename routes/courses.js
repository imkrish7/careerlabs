const express = require('express');
const Course = require('../models/course');
const router = express.Router();

router.get('/getList', async(req,res)=>{

	try {
		const course_list = await Course.find({});
		res.status(200).json({ sucess: true, data: course_list})
		
	} catch (error) {
		console.log(error);
		return res.status(500).json({ sucess: false, msg: "Some internal error"})
	}
	

})

module.exports =  router;