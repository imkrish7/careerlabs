import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getList } from '../actions/userActions'
import CourseCard from './CourseCard';
import Style from '../sass/all_course_list.module.scss'

class AllCourseList extends Component {


	constructor(props){
		super(props)
		this.state = {
			courseList: [],
			allCourseList: [],
			sort: "default",
			start: 0,
			size: 20,
			currentPage: 1,
			totalPages: 0,
			providers: [],
			filter: "default"
		}
	}

	componentDidMount(){
		this.props.getList({});
	}

	handleChange = (e)=>{
		this.setState({
			filter: e.target.value
		},()=>{
			if(this.state.filter != "default"){
			this.setState({
				courseList: this.state.allCourseList.filter( data => data['Provider'] == this.state.filter)
			})
		}else{
			this.setState({
				courseList: [...this.state.allCourseList]
			});
		}
		})
	}

	handleSort = (e)=>{
		this.setState({
			sort: e.target.value
		},()=>{
			if(this.state.sort == "length"){
				this.setState({ courseList: [...this.state.courseList.sort((a, b) => {
							if (a.Length > b.Length) {
								return 1;
							}
							if (a.Length < b.Length) {
								return -1;
							}
							return 0;
						})] });
			}else if(this.state.sort == "nextSession"){
				this.setState({ courseList: [...this.state.courseList.sort((a, b) => {
							if (a['Next Session Date'] > b['Next Session Date']) {
								return 1;
							}
							if (a['Next Session Date'] < b['Next Session Date']) {
								return -1;
							}
							return 0;
						})] });
			}else{
				this.setState({ courseList: [...this.state.allCourseList] });
			}

		})
	}



	componentDidUpdate(prevProps){
		if(this.props.getListResponse.data && this.props.getListResponse.data && this.props.getListResponse.data != prevProps.getListResponse.data){
			let providers = [];
			this.props.getListResponse.data.data.forEach(data=>{
					if(providers.indexOf(data['Provider'])< 0 && data['Provider'].length){
						providers.push(data['Provider'])
					}
				})
			let totalLength = this.props.getListResponse.data.data.length; 
			let totalPages = Math.floor((this.props.getListResponse.data.data.length / this.state.size));
			if((totalLength%this.state.size) != 0){
				totalPages +=1;
			}
			this.setState({
				courseList: [...this.props.getListResponse.data.data],
				allCourseList: [...this.props.getListResponse.data.data],
				providers: [...providers],
				totalPages: totalPages
			});
		}
	}
	decrease = () =>{
		let currentStart = this.state.currentPage;
		currentStart = this.state.size * (currentStart - 1) - this.state.size;
		this.setState({ currentPage: this.state.currentPage - 1, start: currentStart });
	}
	increase = () =>{
		let currentStart = this.state.currentPage;
		currentStart = this.state.size * currentStart;
		this.setState({
			currentPage: this.state.currentPage + 1,
			start: currentStart
		})
	}
	render(){
		return <div className={Style.container}>
				<div className={Style.header}>
					<h1 className={Style.header_text}>All Courses</h1>
				</div>
				<div className={Style.options}>
					<select className={Style.select} name="filter" value={this.state.filter} onChange={this.handleChange}>
						<option value="default">Select</option>
						{this.state.providers.map(provider => {
							return <option value={provider}>
									{provider}
								</option>;
						})}
					</select>
					<select className={Style.select} name="sort" value={this.state.sort} onChange={this.handleSort}>
						<option value="default">Select</option>
						<option value="length">Length</option>
						<option value="nextSession">Next Session Date</option>
					</select>
				</div>
				<div className={Style.pagination}>
					<div className={Style.pagination_options}>
						<button disabled={this.state.currentPage == 1} onClick={this.decrease} className={Style.btn}>
							prev
						</button>
						<div className={Style.page_number}>
							{this.state.currentPage}
						</div>
						<button disabled={this.state.totalPages == this.state.currentPage} onClick={this.increase} className={Style.btn}>
							next
						</button>
					</div>
				</div>
				<div className={Style.course_list}>
					{this.state.courseList.length > 0 ? this.state.courseList
								.slice(this.state.start, this.state.start + this.state.size)
								.map((data, ind) => {
									return <CourseCard key={ind} data={data} />;
								}) : <h1>No Course Found</h1>}
				</div>
			</div>;
	}
}

const mapDispatchToProps = dispatch =>{
	return {
		getList: params => dispatch(getList(params))
	}
}

const mapStateToProps = state =>{
	return{
		getListResponse: state.getListResponse
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCourseList);