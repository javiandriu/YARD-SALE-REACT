import React, {useState} from 'react'
import {connect} from "react-redux";
import {editAccountRequest} from "../actions"
import "../styles/EditAccount.css";

const EditAccount = props => {

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
	
	const handleEdit = event => {
		props.editAccountRequest(forms);
		props.history.push("/login")
	}
    return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form" onSubmit={handleEdit}>
					<div>
						<label htmlFor="name" className="label">Name</label>
						<input 
							name="name"
							type="text" 
							id="name" 
							placeholder="Camila Yokoo" 
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
					<input type="submit" value="Edit" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}


const mapDispatchToProps = {
	editAccountRequest,
};

export default connect (null, mapDispatchToProps) (EditAccount);
