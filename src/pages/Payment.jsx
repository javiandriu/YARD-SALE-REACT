import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import {connect} from "react-redux";
import '../styles/payment.css';
require('dotenv').config()

const Payment = ({history,cart,count}) => {

    const API_KEY = process.env.REACT_APP_CLIENT_ID;
    
    const paypalOptions ={
        clientId: 'API_KEY',
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect',
      };

    const handlePaymentSuccess = (data) => {
        if (data.status === 'COMPLETED') {
       
            history.push('/success')
        }
      };

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price * count[currentValue.id];
            const sum = cart.reduce(reducer, 0);
            return sum;
      };

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map((item)=>(
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>
                                $
                                {''}
                                {item.price *count[item.id]}</span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal()}
                        onPaymentStart={() => console.log("Start Payment") }
                        onSuccess={(data) => handlePaymentSuccess(data) }
                        onPaymentError={error => console.log(error) }
                        onPaymentCancel={data=> console.log(data) }
                    />
                </div>
            </div>
        <div></div>
      </div>
    );
}


const mapStateToProps = state => {
    return{
        cart: state.cart,
        count: state.count,
    }
}


export default connect(mapStateToProps, null) (Payment);