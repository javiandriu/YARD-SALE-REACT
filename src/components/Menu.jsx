import React from 'react';
import {connect} from "react-redux";
import {logoutRequest} from "../actions";
import {Link} from "react-router-dom";
import "../styles/global.css"
import '../styles/menu.css';

const Menu = props => {
	const { user } = props;
    const hasUser = Object.keys(user).length > 0;

	const handleLogout = () => {

	}
	return (
		<div className="Menu">
			<ul>

				{ hasUser ?
					<>
						<li><Link to="/edit">Edit Account</Link></li>
						<li><a href="/" onClick={handleLogout}>Log out</a></li>
					</>
					: 
					<li>
						<Link to="/login">
							Log in
						</Link>
					</li>
				}
			</ul>
		</div>
	);
}


 const mapStateToProps = state => {
    return{
        user: state.user
    };
};

const mapDispatchToProps = {
	logoutRequest,
}

export default connect (mapStateToProps,mapDispatchToProps) (Menu);