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
				<nav className={Style.nav}>
					<Link to="/signin"><button className={Style.btn}>SignIn</button></Link>
					<Link to="/signup"><button className={Style.btn}>SignUp</button></Link>
				</nav>
			</div>
		)
	}
}

export default Header;