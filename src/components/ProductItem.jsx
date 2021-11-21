import React from 'react';
import {connect} from "react-redux";
import "../styles/global.css"
import '../styles/ProductItem.css';
import { addToCartRequest } from "../actions";
import addToCartImage from "../assets/icons/bt_add_to_cart.svg";

const ProductItem = ({product, addToCartRequest}) => {
	
	const handleAddToCart = item => {
		addToCartRequest(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p> $ {product.price} </p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleAddToCart(product)}>
					<img  src={addToCartImage} alt="add to cart" />
				</figure>
			</div>
		</div>
	);
}


const mapDispatchToProps = {
	addToCartRequest,
};

export default connect(null, mapDispatchToProps) (ProductItem);