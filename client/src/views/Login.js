import React, { Component } from 'react';
import Style from '../sass/login.module.scss';
class Login extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return <div className={Style.container}>
				<div className={Style.card}>
					<div className={Style.header}>
						<h1 className={Style.header_text}>Login</h1>
					</div>
					<div className={Style.forWrapper}>
						<div className={Style.input_field}>
							<label className={Style.label}>Email</label>
							<input type="text" className={Style.input} placeholder="Enter your email" />
						</div>
						<div className={Style.input_field}>
							<label className={Style.label}>Password</label>
							<input type="password" className={Style.input} placeholder="Enter your password" />
						</div>
						<div className={Style.login_btn}>
							<button type="submit" className={Style.btn}>
								Login
							</button>
						</div>
					</div>
				</div>
			</div>;
	}
}

export default Login;