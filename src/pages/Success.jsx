import React from 'react';
import {Link} from "react-router-dom"
import { connect } from 'react-redux';
import logo_yard_sale from "../assets/logos/logo_yard_sale.svg";
import delivery from "../assets/icons/delivery.png";
import "../styles/global.css";
import '../styles/Success.css';

const Success = props => {
	return (
		<div className="Success">
			<div className="form-container">
				<img src={logo_yard_sale} alt="logo" className="logo" />
				<h2 className="title">{`${props.buyer[0].name}, Thanks for your order`}</h2>
        <span className="subtitle">It will come to you within 3 days from now on.</span>
				<div className="delivery-image">
					<img src={delivery} alt="email" />
				</div>
				<p className="return">
					<span>Return to <Link to="/">Home</Link></span>
				</p>
			</div>
		</div>
	);
}

const mapStateToProps = state => {
  return{
      
      buyer: state.buyer,
  }
}
export default connect(mapStateToProps, null) (Success);