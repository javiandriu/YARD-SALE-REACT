import React, {useState} from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import Menu from "./Menu";
import MyOrders from "../containers/MyOrders";
import "../styles/global.css";
import "../styles/header.css";
import iconMenu from "../assets/icons/icon_menu.svg";
import gravatar from "../utils/gravatar";
import userProfile from "../assets/icons/icon_profile.png";
import logo_yard_sale from "../assets/logos/logo_yard_sale.svg";
import icon_shopping_cart from "../assets/icons/icon_shopping_cart.svg";

const Header = props => {
    const { user } = props;
    const hasUser = Object.keys(user).length > 0;

    const { count } = props;
    const counts = Object.values(count);

    const sumCount = () => {
        const total = counts.reduce((a, b) => a + b, 0);
        return total;
    }


    const [toggle, setToggle]= useState(false);
    const [toggleOrders, setToggleOrders]= useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <nav>
            <img src= {iconMenu} alt="Menu" className="menu"/>

            <div className="navbar-left">
                <Link to="/" className="nav-logo">
                    <img src={logo_yard_sale} alt="yard_sale" />
                </Link>
                
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                        
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                        
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                        
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-profile" onClick={handleToggle}>
                        {hasUser ?
                            <img className="gravatar-profile" src= { gravatar(user.email)} alt= {user.email} />:
                            <img className="user-profile" src= {userProfile} alt="" />
                        } 
                    </li>

                    <li 
                        className="navbar-shopping-cart" 
                        onClick={() => setToggleOrders (!toggleOrders)}
                    >
                        <img src= {icon_shopping_cart} alt="shopping cart"/>
                        {props.cart.length > 0 ? <div>{sumCount()}</div> : null }
                    </li>
                </ul>
            </div>
            {toggle && <Menu /> }
            {toggleOrders && <MyOrders /> }
            
        </nav>
        
    );
}


const mapStateToProps = state => {
    return{
        user: state.user,
        cart: state.cart,
        count:state.count
    };
};

export default connect (mapStateToProps,null) (Header);

