import React, {useState} from 'react';
import { registerRequest } from "../actions";
import {connect} from "react-redux";
import "../styles/global.css";
import '../styles/CreateAccount.css';

const CreateAccount = props => {

	const [forms,setValues]= useState({
		email:'',
		name:'',
		password: '',
	});

	const handleInput = event => {
		setValues({
			...forms,
			[event.target.name]: event.target.value
		})
	};
	
	const handleSubmit = event => {
		event.preventDefault();
		props.registerRequest(forms);
		props.history.push("/login")
	}

	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form" onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name" className="label">Name</label>
						<input 
							name="name"
							type="text" 
							id="name" 
							placeholder="Teff" 
							className="input input-name"
							onChange={handleInput} />
						<label htmlFor="email" className="label">Email</label>
						<input
							name="email" 
							type="text" 
							id="email" 
							placeholder="email@example.com" 
							className="input input-email"
							onChange={handleInput} />
						<label htmlFor="password" className="label">Password</label>
						<input
							name="password"
							type="password" 
							id="password" 
							placeholder="*********" 
							className="input input-password" 
							onChange={handleInput}/>
					</div>
					<input type="submit" value="Create" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

const mapDispatchToProps = {
	registerRequest,
};

export default connect (null, mapDispatchToProps) (CreateAccount);