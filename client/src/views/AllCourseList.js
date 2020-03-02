import React, { Component } from 'react';
import { connect } from 'react-redux';
import { validDate } from '../Utils/dateUtil';
import { getList } from '../actions/userActions';
import CourseCard from './CourseCard';
import Style from '../sass/all_course_list.module.scss';

class AllCourseList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			courseList: [],
			allCourseList: [],
			sort: 'default',
			start: 0,
			size: 20,
			currentPage: 1,
			totalPages: 0,
			providers: [],
			filter: 'default',
		};
	}

	componentDidMount() {
		this.props.getList({});
	}

	handleChange = e => {
		this.setState(
			{
				filter: e.target.value,
				sort: 'default'
			},
			() => {
				if (this.state.filter != 'default') {
				 let list =	this.state.allCourseList.filter(data => data['Provider'] == this.state.filter);
				 let totalLength = list.length;
					let totalPages = Math.floor(list.length / this.state.size);
					if ((totalLength % this.state.size) != 0) {
						totalPages += 1;
					}
					this.setState({
						courseList: [...list],
						totalPages: totalPages,
						currentPage: 1,
						start: 0
					});
				} else {
					let list = [...this.state.allCourseList];
					let totalLength = list.length;
					let totalPages = Math.floor(list.length / this.state.size);
					if ((totalLength % this.state.size) != 0) {
						totalPages += 1;
					}
					this.setState({
						courseList: [...list],
						totalPages: totalPages,
						currentPage: 1,
						start: 0
					});
				}
			}
		);
	};

	handleSort = e => {
		this.setState(
			{
				sort: e.target.value,
			},
			() => {
				let list = this.state.courseList.slice();
				
				if (this.state.sort == 'length') {
					this.setState({
						courseList: [
							...list.sort((a, b) => {
								if (a.Length > b.Length) {
									return 1;
								}
								if (a.Length < b.Length) {
									return -1;
								}
								return 0;
							}),
						],
					});
				} else if (this.state.sort == 'nextSession') {
					let invalidList = list.filter(data => data['Next Session Date'] == 'Self paced' || data['Next Session Date'] == '' || data['Next Session Date'] == "NA");
					let validList = list.filter(data => data['Next Session Date'] != 'Self paced' || data['Next Session Date'] != '');
					this.setState({ courseList: [...invalidList,...validList.sort((a, b) => {
								if (a['Next Session Date'] != 'Self paced' && a['Next Session Date'] != '' && b['Next Session Date'] != 'Self paced' && b['Next Session Date'] != '') {
									let fullDate1 = validDate(a['Next Session Date']);
									let fullDate2 = validDate(b['Next Session Date']);
									if (fullDate1 > fullDate2) {
										return 1;
									}
									if (fullDate1 < fullDate2) {
										return -1;
									}
									return 0;
								} else {
									return 0;
								}
							})] });
				} else {
					this.setState({ courseList: [...list] });
				}
			}
		);
	};

	componentDidUpdate(prevProps) {
		if (
			this.props.getListResponse.data &&
			this.props.getListResponse.data &&
			this.props.getListResponse.data != prevProps.getListResponse.data
		) {
			let providers = [];
			this.props.getListResponse.data.data.forEach(data => {
				if (providers.indexOf(data['Provider']) < 0 && data['Provider'].length) {
					providers.push(data['Provider']);
				}
			});
			let totalLength = this.props.getListResponse.data.data.length;
			let totalPages = Math.floor(this.props.getListResponse.data.data.length / this.state.size);
			if (totalLength % this.state.size != 0) {
				totalPages += 1;
			}
			this.setState({
				courseList: [...this.props.getListResponse.data.data],
				allCourseList: [...this.props.getListResponse.data.data],
				providers: [...providers],
				totalPages: totalPages,
			});
		}
	}
	decrease = () => {
		let currentStart = this.state.currentPage;
		currentStart = this.state.size * (currentStart - 1) - this.state.size;
		this.setState({ currentPage: this.state.currentPage - 1, start: currentStart });
	};
	increase = () => {
		let currentStart = this.state.currentPage;
		currentStart = this.state.size * currentStart;
		this.setState({
			currentPage: this.state.currentPage + 1,
			start: currentStart,
		});
	};
	render() {
		return (
			<div className={Style.container}>
				<div className={Style.header}>
					<h1 className={Style.header_text}>All Courses</h1>
				</div>
				<div className={Style.options}>
					<select
						className={Style.select}
						name="filter"
						value={this.state.filter}
						onChange={this.handleChange}
					>
						<option value="default">Select Providers</option>
						{this.state.providers.map((provider, ind) => {
							return (
								<option key={ind} value={provider}>
									{provider}
								</option>
							);
						})}
					</select>
					<select className={Style.select} name="sort" value={this.state.sort} onChange={this.handleSort}>
						<option value="default">Sort</option>
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
						<button
							disabled={this.state.totalPages == this.state.currentPage}
							onClick={this.increase}
							className={Style.btn}
						>
							next
						</button>
					</div>
				</div>
				<div className={Style.course_list}>
					{this.state.courseList.length > 0
						? this.state.courseList
								.slice(this.state.start, this.state.start + this.state.size)
								.map((data, ind) => {
									return <CourseCard key={ind} data={data} />;
								})
						: <h1>No Course Found</h1>}
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getList: params => dispatch(getList(params)),
	};
};

const mapStateToProps = state => {
	return {
		getListResponse: state.getListResponse,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCourseList);
