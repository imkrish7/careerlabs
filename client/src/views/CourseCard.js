import React, { Component } from 'react';
import Style from '../sass/course_card.module.scss';
class CourseCard extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return <div className={Style.card}>
				<div className={Style.header}>
					<h1 className={Style.header_text}>
						{this.props.data['Course Name']}
					</h1>
				</div>
				<div className={Style.course_info}>
					<div className={Style.field}>
						<span className={Style.field_name}>Provider :</span>
						<span className={Style.fiedl_value}>
							{this.props.data['Provider']}
						</span>
					</div>
					<div className={Style.field}>
						<span className={Style.field_name}>Universities :</span>
						<span className={Style.fiedl_value}>
							{this.props.data['Universities/Institutions']}
						</span>
					</div>
					<div className={Style.field}>
						<span className={Style.field_name}>Parent Subject :</span>
						<span className={Style.fiedl_value}>
							{this.props.data['Parent Subject']}
						</span>
					</div>
					<div className={Style.field}>
						<span className={Style.field_name}>Child Subject :</span>
						<span className={Style.fiedl_value}>
							{this.props.data['Child Subject']}
						</span>
					</div>
					<div className={Style.field}>
						<span className={Style.field_name}>Length :</span>
						<span className={Style.fiedl_value}>
							{this.props.data['Length']}
						</span>
					</div>
					<div className={Style.field}>
						<span className={Style.field_name}>Next Session Date :</span>
						<span className={Style.fiedl_value}>
							{this.props.data['Next Session Date']}
						</span>
					</div>
					<div className={Style.field}>
						{/* <span className={Style.field_name}>Url:</span> */}
						<a target="_blank" href={this.props.data['Url']} className={Style.fiedl_value}>
							Course Url
						</a>
					</div>
					<div className={Style.field}>
						<a target="_blank" href={this.props.data['Video(Url)']} className={Style.fiedl_value}>
							Video  Url
						</a>
					</div>
				</div>
			</div>;
	}
}

export default CourseCard;