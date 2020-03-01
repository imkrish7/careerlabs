import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Style from '../sass/header.module.scss';


class Header extends Component{

	render(){
		return(
			<div className={Style.container}>
				<div className={Style.logo}>
					Course
				</div>
			</div>
		)
	}
}

export default Header;