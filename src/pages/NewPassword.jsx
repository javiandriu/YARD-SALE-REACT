import React,{useState} from 'react';
import {connect} from "react-redux";
import {passwordRequest} from "../actions"
import logo_yard_sale from "../assets/logos/logo_yard_sale.svg"
import "../styles/global.css"
import '../styles/NewPassword.css';

const NewPassword = props => {
	const [forms,setValues]= useState({
		password: '',
		new_password: '',
	});

	const handleInput = event => {
		setValues({
			...forms,
			[event.target.name]: event.target.value
		})
	};
	
	const handleConfirm = event => {
		props.passwordRequest (forms);
		props.history.push("/sendEmail")
	}

	return (
		<div className="NewPassword">
			<div className="NewPassword-container">
				<img src= {logo_yard_sale} alt="logo" className="logo" />
				<h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new password for your account</p>
				<form action="/" className="form" onSubmit={handleConfirm}>
					<label htmlFor="password" className="label">Password</label>
					<input
						name= "password"
						type="password" 
						id="password" 
						placeholder="*********" 
						className="input input-password"
						onChange={handleInput} />
					<label htmlFor="new-password" className="label">Password</label>
					<input
						name= "new_password"
						type="password" 
						id="new-password" 
						placeholder="*********" 
						className="input input-password" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}



const mapDispatchToProps = {
	passwordRequest,
};

export default connect (null, mapDispatchToProps) (NewPassword);