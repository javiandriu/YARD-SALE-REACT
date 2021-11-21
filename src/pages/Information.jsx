import React,{useRef} from 'react';
import {connect} from "react-redux";
import {addToBuyerRequest} from "../actions";
import {Link, useHistory} from "react-router-dom";
import "../styles/global.css"
import "../styles/information.css";

const Information = (props) => {
    const form =useRef(null);
    const history = useHistory();

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address':formData.get('address'),
            'city':formData.get('city'),
            'country':formData.get('country'),
            'state':formData.get('state'),
            'cp':formData.get('cp'),
            'phone':formData.get('phone'),
        }
        props.addToBuyerRequest(buyer);
        history.push('/payment');
    }
    return(
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2 className="title">Contact Information:</h2>
                    <h2 className="subtitule">Enter your information</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <label htmlFor="nombre" className="form-label">Full Name</label>
                        <input 
                            className="form-input" 
                            id="nombre"
                            type="text" 
                            placeholder="Oscar Villegas" 
                            name="name" />
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            className="form-input"
                            id="email" 
                            type="text" 
                            placeholder="example@mail.com" 
                            name="email" />
                        <label htmlFor="address" className="form-label">Address</label>
                        <input 
                            className="form-input" 
                            id="address"
                            type="text"
                            placeholder="Malecon 2000" 
                            name="address" />
                        <label htmlFor="ciudad" className="form-label">City</label>
                        <input 
                            className="form-input" 
                            id="city"
                            type="text" 
                            placeholder="Guayaquil" 
                            name="city" />
                        <label htmlFor="pais" className="form-label">Country</label>
                        <input 
                            className="form-input" 
                            id="country"
                            type="text" 
                            placeholder="Ecuador" 
                            name="country" />
                        <label htmlFor="estado" className="form-label">State</label>
                        <input 
                            className="form-input" 
                            id="state"
                            type="text" 
                            placeholder="Guayas" 
                            name="state" />
                        <label htmlFor="codigo" className="form-label">Postal Code</label>
                        <input 
                            className="form-input" 
                            id="cp"
                            type="text" 
                            placeholder="090101" 
                            name="cp" />
                        <label htmlFor="celular" className="form-label">Phone</label>
                        <input 
                            className="form-input" 
                            id="celular"
                            type="text" 
                            placeholder="0938943987" 
                            name="phone" />
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">
                        <Link to="/checkout">
                            Return
                        </Link>
                    </div>
                    <div className="Information-next">
                       <button className="pay-button"type="button" onClick={handleSubmit}>Pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = state => {
    return{
        cart: state.cart,
    }
}


const mapDispatchToProps = {
	addToBuyerRequest,
};

export default connect (mapStateToProps, mapDispatchToProps) (Information);