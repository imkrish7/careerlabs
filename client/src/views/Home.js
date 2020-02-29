import React, { Component } from 'react';
import Header from './header';
import AllCourseList from './AllCourseList';
import Style from '../sass/home.module.scss';

class Home extends Component{

	render(){
		
		return(
			<div className={Style.container}>
				<Header></Header>
				<AllCourseList></AllCourseList>
			</div>
		)
	}
}

export default Home;