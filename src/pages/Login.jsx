import React,{useRef} from 'react';
import { Link } from 'react-router-dom';
import { loginRequest } from "../actions";
import {connect} from "react-redux";
import "../styles/global.css"
import '../styles/login.css';

const Login = props => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			email: formData.get('email'),
			password: formData.get("password")
		}
		props.loginRequest(data);
		props.history.push('/');
		console.log(data);
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="mail@example.com" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button 
						onClick={handleSubmit}
						className="primary-button login-button" >
						<Link to="/" className="primary-button-text">
							Log in
						</Link>
					</button>.
					<Link to="/recoveryPassword">
						Forget my password
					</Link>
				</form>
				<button 
					className="secondary-button signup-button">
					<Link to="/signup" >
						Sign up
					</Link>
				</button>
			</div>
		</div>
	);
}
const mapDispatchToProps = {
	loginRequest,
};

export default connect (null, mapDispatchToProps) (Login);


