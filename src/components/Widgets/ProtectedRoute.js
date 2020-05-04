import React from "react";
import { Route, Redirect, withRouter, } from "react-router-dom";
import Cookie from 'universal-cookie'

const cookie = new Cookie()

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isAuth = cookie.get('access_token');
    return (
        <Route
            {...rest}
            render={props => {
                if (isAuth) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};
export default withRouter(ProtectedRoute);