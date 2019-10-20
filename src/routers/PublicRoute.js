import React from 'react';
import { Route } from "react-router-dom";
import Header from '../components/Header';

export const PublicRoute = ({

    component: Component,
    ...rest

}) => (
      
        <Route {...rest} component={(props) => (

            

                <div className="container-fluid jumbotron">

                <Header />
                <div className="main pt-5">
                    <Component {...props} />

                </div>

                </div>
       



                )} />
    );
        
        
export default PublicRoute;