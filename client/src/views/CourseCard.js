import React, { Component } from 'react';
import Style from '../sass/course_card.module.scss';
class CourseCard extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return <div className={Style.card}>
				<div className={Style.header}>
					<h1 className={Style.header_text}>Course 1</h1>
				</div>
				<div className={Style.course_info}>
					<div className={Style.field}>
						<span className={Style.field_name}>Provider</span>
						<span className={Style.fiedl_value}>Udacity</span>
					</div>
					<div className={Style.field}>
						<span className={Style.field_name}>Universities</span>
						<span className={Style.fiedl_value}>Stanford University</span>
					</div>
					<div className={Style.field}>
						<span className={Style.field_name}>Parent Subject</span>
						<span className={Style.fiedl_value}>Computer Science</span>
					</div>
					<div className={Style.field}>
						<span className={Style.field_name}>Child Subject</span>
						<span className={Style.fiedl_value}>Artificial Intelligence</span>
					</div>
				</div>
			</div>;
	}
}

export default CourseCard;