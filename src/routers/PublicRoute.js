import React from 'react';
import { Route,Redirect } from "react-router-dom";

export const PublicRoute = ({

    component: Component,
    ...rest

}) => (

        <Route {...rest} component={(props) => (

            localStorage.getItem('user') ? (
                <Redirect to="/" />
            ) : (
                    <div className="container-fluid ">

                       
                        <div className="main min-vh-100">
                            <Component {...props} />

                        </div>

                    </div>

                )

        )} />
    );


export default PublicRoute;