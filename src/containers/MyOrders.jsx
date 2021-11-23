import React from 'react';
import {connect} from "react-redux";
import OrderItem from '../components/OrderItem';
import iconFlechita from "../assets/icons/flechita.svg"
import "../styles/global.css"
import '../styles/MyOrders.css';
import { Link } from 'react-router-dom';

const MyOrders = (props) => {

	

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price * props.count[currentValue.id];
		const sum = props.cart.reduce(reducer,0);
		return sum;
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={iconFlechita} alt="arrow" />
				<p className="title">My orders</p>
			</div>
			<div className="my-order-content">
				{props.cart.length > 0 ? 
					<>
						<h3>Lista de pedidos:</h3>
						{props.cart.map((product,idx) => (
							<OrderItem product={product} key={`orderItem-${idx}`} />
						))}
				
						<div className="order">
							<p>
								<span>Total</span>
							</p>
							<p>$ {sumTotal()}</p>
						</div>
						<button className="primary-button">
							<Link to= "/information" className="primary-button-a">
								Checkout
							</Link>
						</button>
					</>
				: <h3>Sin pedidos...</h3>}
			</div>
		</aside>
	);
}

const mapStateToProps = state => {
    return{
        cart: state.cart,
		count: state.count,
    }
}


export default connect(mapStateToProps, null) (MyOrders);