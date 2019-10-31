import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
    component: Component,
    ...rest

}) => (

        <Route {...rest} component={(props) => (

         localStorage.getItem('user') ? (
            <div className="container-fluid jumbotron">

                <Header />
                <div className="main pt-5">
                    <Component {...props} />

                </div>

            </div>
           ) : (
               
            <Redirect to="/login" />              
            )



        )} />
    );


export default PrivateRoute ;