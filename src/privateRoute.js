import React from "react";
import {Redirect, Route} from "react-router-dom";
import Utils from './utils';

const { isAuthenticated } = new Utils();

console.log('localStorage.getItem',isAuthenticated());

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuthenticated()
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
);
export default PrivateRoute;