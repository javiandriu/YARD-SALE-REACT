import React from 'react';
import {connect} from "react-redux";
import {removeFromCartRequest} from "../actions";
import "../styles/global.css"
import '../styles/OrderItem.css';
import iconClose from "../assets/icons/icon_close.png";

const OrderItem = ({ product, removeFromCartRequest, count }) => {
    
	const handleRemoveFromCart = item => {
		removeFromCartRequest(item);
	}

	return (
		<div className="OrderItem">
			<h4>{count[product.id]}</h4>
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>$ {product.price *count[product.id]}</p>
			<img src={iconClose} alt="close" onClick={() => handleRemoveFromCart(product)} />
		</div>
	);
}

const mapStateToProps = state => {
    return{
        count: state.count,
		cart: state.cart,
    };
};
const mapDispatchToProps = {
	removeFromCartRequest,
	
};

export default connect (mapStateToProps, mapDispatchToProps) (OrderItem);