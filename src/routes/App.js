import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CreateAccount from '../pages/CreateAccount';
import Home from '../pages/Home';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import NewPassword from '../pages/NewPassword';
import SendEmail from '../pages/SendEmail';
import EditAccount from '../pages/EditAccount';    
import Information from '../pages/Information';
import Payment from '../pages/Payment';
import Success from '../pages/Success';
import "../styles/global.css";


const App = () => {
    
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/recoveryPassword" component={NewPassword}/>
                    <Route exact path="/sendEmail" component={SendEmail}/>
                    <Route exact path="/signup" component={CreateAccount}/>
                    <Route exact path="/edit" component={EditAccount}/>
                    <Route exact path="/information" component={Information}/>
                    <Route exact path="/payment" component={Payment}/>
                    <Route exact path="/success" component={Success}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter> 
    );
}

export default App;
