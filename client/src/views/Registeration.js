import React, { Component } from 'react';
import Style from '../sass/login.module.scss';

class Registration extends Component{

	constructor(props){
		super(props)
	}

	render(){
		return <div className={Style.container}>
				<div className={Style.card}>
					<div className={Style.header}>
						<h1 className={Style.header_text}>Registration</h1>
					</div>
					<div className={Style.forWrapper}>
						<div className={Style.input_field}>
							<label className={Style.label}> Full Name</label>
							<input type="text" className={Style.input} placeholder="Enter your full Name" />
						</div>
						<div className={Style.input_field}>
							<label className={Style.label}>Email</label>
							<input type="text" className={Style.input} placeholder="Enter your email" />
						</div>
						<div className={Style.input_field}>
							<label className={Style.label}>Password</label>
							<input type="password" className={Style.input} placeholder="Enter your password" />
						</div>
						<div className={Style.input_field}>
							<label className={Style.label}> Repeat Password</label>
							<input type="password" className={Style.input} placeholder="Repeat password" />
						</div>
						<div className={Style.login_btn}>
							<button type="submit" className={Style.btn}>
								Register
							</button>
						</div>
					</div>
				</div>
			</div>;
	}
}

export default Registration;