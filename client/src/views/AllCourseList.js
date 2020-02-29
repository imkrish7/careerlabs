import React, { Component } from 'react';
import CourseCard from './CourseCard';
import Style from '../sass/all_course_list.module.scss'

class AllCourseList extends Component {


	render(){
		return <div className={Style.container}>
				<div className={Style.header}>
					<h1 className={Style.header_text}>All Courses</h1>
				</div>
				<div className={Style.course_list}>
					<CourseCard />
					<CourseCard />
					<CourseCard />
					<CourseCard />
				</div>
			</div>;
	}
}

export default AllCourseList;